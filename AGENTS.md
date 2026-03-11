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
- Front matter `title` values for translated pages should be Japanese only. Do not use `日本語（English）` style titles.
- Internal headings, internal strategy names, and internal related-link labels should also be Japanese only unless the glossary explicitly requires English.
- Prefer natural Japanese prose in page body text. Keep English only when it is part of an external reference title, a proper noun, an accepted acronym, or a technical identifier that should not be translated.
- Before calling a translation pass complete, run `npm run translation:check-visible` and fix visible English remnants. External reference titles and proper nouns may remain, but internal prose should not.
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
- The current deployment target is GitHub Pages project site at `https://kdmsnr.github.io/wardley-leadership-strategies-ja/`.
- GitHub Pages project URLs are `https://<owner>.github.io/<repo>/`. User or organization root sites are `https://<owner>.github.io/`.
- `docusaurus.config.ts` reads `SITE_URL`, `BASE_URL`, `GITHUB_OWNER`, and `GITHUB_REPO`. Keep local development on `BASE_URL=/` unless you are explicitly validating the project-site path.
- GitHub Actions deployment is defined in `./.github/workflows/deploy-pages.yml` and builds with `SITE_URL=https://kdmsnr.github.io` and `BASE_URL=/wardley-leadership-strategies-ja/`.
- `package.json` requires Node `^24.0.0`. If using Cloudflare Pages, pin Node 24 in the build environment.

## Validation

- If changing code then install deps with `npm install` and run `npm test` and `npm run typecheck`.
- If changing content in `./docs` then run `python -m pytest tests`. Fix content quality issues in the documents rather than masking them with placeholder content.
- If changing content in `./docs` then run `npm run translation:check-visible` and treat failures as real translation issues unless they are only external reference titles or proper nouns.
- Run `npm run lint:md:fix` just before committing content-heavy changes.
- If translation workflow or deployment config changed, also run `npm run build`.
- If changing translated page titles or navigation labels, quickly check that no `title: 日本語（English）` style strings remain in `docs` or `src/pages`.

## File Sync

- Keep `AGENTS.md` and `.github/copilot-instructions.md` in sync.
