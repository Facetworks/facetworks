# Contributing to Facetworks

Thanks for taking a look. This repository is the index site for the Facetworks
organisation. It is intentionally small.

## Setup

```bash
npm install
npm run dev
```

## Before opening a PR

```bash
npm run format
npm run lint
npm run typecheck
npm run build
```

CI runs the same commands, so a green local run means a green CI run.

## Adding or editing a project

Everything the index renders comes from `src/data/projects.ts`. Add or edit an entry
there rather than touching the page or component templates. Keep `note` to one accurate
sentence about what makes that project different, and make sure `live` resolves.

## Guidelines

- Keep the page complete and readable with JavaScript disabled. Any animation must be
  scoped under the `.js` class and must have a `prefers-reduced-motion` fallback.
- Hold the identity: paper background, ink text, one accent, Newsreader for display and
  Inter for everything else. This site stays quieter than the sites it lists.
- No horizontal scroll at 390px.
- No em-dashes in copy.

## Reporting problems

Open an issue with the URL, the viewport width, and what you expected. A broken or moved
live link is a valid and welcome issue.
