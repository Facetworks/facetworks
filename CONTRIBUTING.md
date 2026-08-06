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

## Claiming an issue

Want to pick something up? Just comment on the issue saying you'd like to work on
it. A workflow adds the `claimed` label so nobody else duplicates your effort.

Two small rules keep things fair:

- **Two open claims per person.** If you already hold two claimed issues, we'll ask
  you to finish one first so other people get a turn. Comment again once one lands
  and the next is yours.
- **Claims go stale after 14 days.** If a claimed issue sees no activity for two
  weeks, the label is removed and it goes back in the pool. No hard feelings, and
  you can always claim it again.

Link your pull request to the issue in the PR description (for example
`Closes #12`). When that PR is merged the issue closes itself, and if the PR is
closed without being merged the claim is released so someone else can pick it up.

No pressure on timelines otherwise. Ask questions in the issue thread any time.
