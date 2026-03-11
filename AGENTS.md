# AGENTS

## Project Context

- This repo is a separate Japanese edition of the upstream `dave1010/wardley-leadership-strategies` site.
- Treat `upstream/main` as the upstream English source of truth for translation review.
- The repo is a Docusaurus site; Markdown lives in `./docs` and routes omit the directory name, for example `/strategies`.
- Strategies sit under `./docs/strategies/<category>/<strategy>/index.md`.
- Terms are in `./docs/terms/<term>.md`.
- `README.md` is only needed if you get stuck with dev setup or testing. It is short enough to read in one go.
- `CONTRIBUTING.md` explains Markdown structure and site content conventions. Read it before making non-trivial changes under `./docs`.
- Explore the structured folders under `./docs` directly when you need to find strategies, tags, or terms.

## Translation Policy

- Publish this as an unofficial Japanese translation site, separate from the upstream domain.
- Translate incrementally. Preserve file paths, slugs, front matter keys, component usage, and overall document structure unless there is a clear reason to diverge.
- Keep translations reviewable against the English source. Avoid unnecessary rewrites that make upstream diffs hard to inspect.
- Prefer page-by-page translation work instead of broad unrelated rewrites across many files.
- Use the canonical terminology in `notes/translation-glossary.md` for Wardley Mapping, doctrine, climatic patterns, and evolution terms. Do not invent alternate Japanese labels unless the glossary is explicitly updated.
- Blog content is removed from this Japanese edition. Do not reintroduce `./blog` content or `/blog` navigation unless the policy is explicitly changed later.
- When upstream changes are suspected, run `git fetch upstream` and `npm run translation:status`.
- For a file-level diff against upstream English, run `python3 scripts/translation_status.py --word-diff <path>`.

## License And Attribution

- Upstream content is published as `Wardley Leadership Strategies is Copyright © 2026 Dave Hulbert and licenced CC BY-SA 4.0.`
- Japanese translations are adapted material under CC BY-SA 4.0. Keep the derivative site under the same license.
- Preserve attribution to Dave Hulbert, link back to the upstream site, link the CC BY-SA 4.0 license, and state that the Japanese text is a translation or adaptation.
- Make it clear that the Japanese site is unofficial unless explicit approval from the upstream author is obtained.
- Check trademarks, logos, and any third-party assets separately. CC BY-SA does not automatically grant trademark rights.

## Deployment Policy

- The site builds to static files in `./build` via `npm run build`.
- Preferred deployment target is Cloudflare Pages because preview deployments fit the ongoing translation workflow.
- GitHub Pages is also valid. Default URLs are `https://<owner>.github.io/` for a user or organization site, and `https://<owner>.github.io/<repo>/` for a project site.
- The current Docusaurus config assumes root hosting with `baseUrl: '/'`. That works for a custom domain or a root GitHub Pages site. For a project Pages site, update `url` and `baseUrl` before deploying.
- `docusaurus.config.ts` currently reads `url` from `SITE_URL`. Set that for production deployments.
- `package.json` requires Node `^24.0.0`. If using Cloudflare Pages, pin Node 24 in the build environment.

## Validation

- If changing code then install deps with `npm install` and run `npm test` and `npm run typecheck`.
- If changing content in `./docs` then run `python -m pytest tests`. Fix content quality issues in the documents rather than masking them with placeholder content.
- Run `npm run lint:md:fix` just before committing content-heavy changes.
- If translation workflow or deployment config changed, also run `npm run build`.

## File Sync

- Keep `AGENTS.md` and `.github/copilot-instructions.md` in sync.
