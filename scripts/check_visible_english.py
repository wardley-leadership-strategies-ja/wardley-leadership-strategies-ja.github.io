#!/usr/bin/env python3

from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path


ALLOW_TOKENS = {
    "adams",
    "airbnb",
    "amazon",
    "android",
    "apple",
    "aws",
    "blackberry",
    "blu",
    "boeing",
    "bros",
    "chris",
    "dyson",
    "echo",
    "ev",
    "facebook",
    "fud",
    "gecko",
    "gpl",
    "gps",
    "hackathon",
    "hackday",
    "ibm",
    "ios",
    "juicero",
    "kindle",
    "lambda",
    "linux",
    "llama",
    "meta",
    "microsoft",
    "mozilla",
    "netscape",
    "nokia",
    "openai",
    "os",
    "ota",
    "pc",
    "pixel",
    "podcast",
    "ray",
    "re",
    "redshift",
    "s3",
    "sagemaker",
    "saas",
    "sdk",
    "semianalysis",
    "serverless",
    "simon",
    "tfl",
    "tesla",
    "twitter",
    "uber",
    "usb",
    "visa",
    "vm",
    "wardley",
    "wikipedia",
    "wired",
    "w3c",
}

JAPANESE_RE = re.compile(r"[ぁ-んァ-ン一-龯]")
LOWER_TOKEN_RE = re.compile(r"\b[a-z][a-z0-9-]*\b")
RAW_URL_RE = re.compile(r"https?://\S+")
HTML_TAG_RE = re.compile(r"<[^>]+>")
MARKDOWN_LINK_RE = re.compile(r"\[([^\]]+)\]\(([^)]+)\)")
HEADING_ID_RE = re.compile(r"\s+\{#[a-z0-9-]+\}\s*$", re.IGNORECASE)


def iter_markdown_files(paths: list[str]) -> list[Path]:
    results: list[Path] = []
    for raw_path in paths:
        path = Path(raw_path)
        if path.is_file() and path.suffix in {".md", ".mdx"}:
            results.append(path)
            continue
        if path.is_dir():
            results.extend(sorted(p for p in path.rglob("*") if p.suffix in {".md", ".mdx"}))
    return results


def normalize_line(line: str) -> str:
    def replace_link(match: re.Match[str]) -> str:
        label, target = match.group(1), match.group(2)
        # External reference titles are allowed to stay in English.
        return "" if target.startswith("http://") or target.startswith("https://") else label

    line = HEADING_ID_RE.sub("", line)
    line = MARKDOWN_LINK_RE.sub(replace_link, line)
    line = RAW_URL_RE.sub("", line)
    line = HTML_TAG_RE.sub("", line)
    return line


def find_suspicious_tokens(path: Path) -> list[tuple[int, str, list[str]]]:
    lines = path.read_text().splitlines()
    in_frontmatter = False
    in_code = False
    findings: list[tuple[int, str, list[str]]] = []

    for lineno, line in enumerate(lines, 1):
        stripped = line.strip()

        if lineno == 1 and stripped == "---":
            in_frontmatter = True
            continue
        if in_frontmatter:
            if stripped == "---":
                in_frontmatter = False
            continue
        if stripped.startswith("```"):
            in_code = not in_code
            continue
        if in_code or not stripped:
            continue
        if line.lstrip().startswith("<") or stripped.startswith(":::"):
            continue

        normalized = normalize_line(line)
        if not JAPANESE_RE.search(normalized):
            continue

        tokens = [token for token in LOWER_TOKEN_RE.findall(normalized) if token not in ALLOW_TOKENS]
        if tokens:
            findings.append((lineno, line.rstrip(), tokens))

    return findings


def main() -> int:
    parser = argparse.ArgumentParser(
        description="Find visible lowercase English remnants in Japanese markdown."
    )
    parser.add_argument("paths", nargs="*", default=["docs/strategies"])
    args = parser.parse_args()

    files = iter_markdown_files(args.paths)
    total_findings = 0

    for path in files:
        findings = find_suspicious_tokens(path)
        if not findings:
            continue
        total_findings += len(findings)
        for lineno, line, tokens in findings:
            print(f"{path}:{lineno}: {line}")
            print(f"  TOKENS: {', '.join(tokens[:12])}")

    if total_findings:
        print(f"\nFound {total_findings} suspicious line(s).", file=sys.stderr)
        return 1

    print("No suspicious visible English found.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
