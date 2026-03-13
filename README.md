# [Wardley Leadership Strategies](https://www.wardleyleadershipstrategies.com)

The Compendium of Wardley Mapping Leadership Gameplays and Strategies.

This repository contains the source for the unofficial Japanese translation site.
You can view the live Japanese site at [`wardley-leadership-strategies-ja.github.io`](https://wardley-leadership-strategies-ja.github.io/).
For the upstream English site, see [`wardleyleadershipstrategies.com`](https://www.wardleyleadershipstrategies.com).

## Contributing

Contributions welcome.

You can easily add and edit content from Github, without cloning the repo or running any code.

Browse the Markdown files in [`./docs/strategies`](./docs/strategies) and click the edit button.

## Development

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```bash
npm install
```

### Local Development

```bash
npm run start:local
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```bash
npm run build:local
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

To preview the static build locally:

```bash
npm run serve:local
```

For a GitHub Pages production-equivalent build, use:

```bash
npm run build:pages
```

## Translation Workflow

To keep Japanese translations reviewable against the upstream English source, keep this repository tracking `upstream/main` and check drift regularly.

```bash
git fetch upstream
npm run translation:status
```

This reports:

- files changed locally as part of the translation work
- files changed upstream since your branch diverged
- files that changed on both sides and should be reviewed again

For a word-level diff of a specific file against upstream, run:

```bash
python3 scripts/translation_status.py --word-diff docs/strategies/index.md
```

### Deployment

The `main` branch is deployed live with GitHub Pages at:

```text
https://wardley-leadership-strategies-ja.github.io/
```

Important: this GitHub Pages deployment uses the root site path, so `BASE_URL=/`. Local preview should continue to use `npm run build:local` or `npm run serve:local`.

## Running Tests

### Python

These tests check the content of the site rather than the code. They verify things like reciprocal strategy links and required headings in markdown files.

```bash
python -m pytest tests
```

### Node

We use [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for unit and component testing. Test files are located alongside the components they cover (e.g., `src/components/MyComponent/MyComponent.test.tsx`).

Run the Node tests with:

```bash
npm test
```

Or run them in watch mode:

```bash
npm run test:watch
```

CSS module imports are mocked during testing, so tests do not rely on actual styles.
