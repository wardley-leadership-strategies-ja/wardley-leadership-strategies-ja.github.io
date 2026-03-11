#!/usr/bin/env python3

from __future__ import annotations

import argparse
import subprocess
import sys
import tempfile
from pathlib import Path


RELEVANT_PATHS = [
    "docs",
    "src/pages",
    "src/components",
    "docusaurus.config.ts",
    "sidebars.ts",
]


def run_git(repo_root: Path, args: list[str], check: bool = True) -> subprocess.CompletedProcess[str]:
    return subprocess.run(
        ["git", *args],
        cwd=repo_root,
        check=check,
        text=True,
        capture_output=True,
    )


def git_lines(repo_root: Path, args: list[str]) -> list[str]:
    result = run_git(repo_root, args)
    return [line for line in result.stdout.splitlines() if line.strip()]


def relevant_diff_files(repo_root: Path, diff_args: list[str]) -> list[str]:
    args = ["diff", "--name-only", "--diff-filter=ACMRTUXB", *diff_args, "--", *RELEVANT_PATHS]
    return sorted(set(git_lines(repo_root, args)))


def current_branch(repo_root: Path) -> str:
    result = run_git(repo_root, ["branch", "--show-current"])
    return result.stdout.strip() or "HEAD"


def merge_base(repo_root: Path, base_ref: str) -> str:
    result = run_git(repo_root, ["merge-base", "HEAD", base_ref])
    return result.stdout.strip()


def print_section(title: str, items: list[str]) -> None:
    print(f"\n{title}")
    if not items:
        print("- none")
        return
    for item in items:
        print(f"- {item}")


def show_word_diff(repo_root: Path, base_ref: str, rel_path: str) -> int:
    try:
        base_content = run_git(repo_root, ["show", f"{base_ref}:{rel_path}"]).stdout
    except subprocess.CalledProcessError as exc:
        sys.stderr.write(exc.stderr)
        return exc.returncode

    target_path = repo_root / rel_path
    if not target_path.exists():
        print(f"Local file not found: {rel_path}", file=sys.stderr)
        return 1

    with tempfile.NamedTemporaryFile("w", encoding="utf-8", suffix=".orig", delete=False) as tmp:
        tmp.write(base_content)
        tmp_path = tmp.name

    diff = subprocess.run(
        ["git", "diff", "--no-index", "--word-diff=color", "--", tmp_path, str(target_path)],
        cwd=repo_root,
        text=True,
    )
    return 0 if diff.returncode in (0, 1) else diff.returncode


def main() -> int:
    parser = argparse.ArgumentParser(
        description="Show translation drift against upstream and files that need review."
    )
    parser.add_argument(
        "--base-ref",
        default="upstream/main",
        help="Git ref to compare against. Defaults to upstream/main.",
    )
    parser.add_argument(
        "--word-diff",
        metavar="PATH",
        help="Show a word diff between the upstream file and the local translated file.",
    )
    args = parser.parse_args()

    repo_root = Path(__file__).resolve().parent.parent

    if args.word_diff:
        return show_word_diff(repo_root, args.base_ref, args.word_diff)

    branch = current_branch(repo_root)
    base = merge_base(repo_root, args.base_ref)

    local_changes = relevant_diff_files(repo_root, [base])
    upstream_changes = relevant_diff_files(repo_root, [f"{base}..{args.base_ref}"])
    review_needed = sorted(set(local_changes) & set(upstream_changes))

    print(f"Branch: {branch}")
    print(f"Base ref: {args.base_ref}")
    print(f"Merge base: {base}")
    print(
        "\nTip: run "
        f"`python3 scripts/translation_status.py --word-diff <path>` "
        "to inspect a specific translated file against upstream."
    )

    print_section("Local translation changes", local_changes)
    print_section("Upstream changes since branch diverged", upstream_changes)
    print_section("Needs review", review_needed)

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
