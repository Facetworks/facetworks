# Facetworks

The index for the [Facetworks](https://github.com/Facetworks) organisation: ten
multi-page Astro design sites, each in a different genre, and two browser GPU
experiments.

**Live: [facetworks.signalizeai.org](https://facetworks.signalizeai.org)**

Each project listed here is its own repository with its own visual identity and its own
deployment. This site is deliberately quiet, because everything it points at is loud.

## What is listed

| Project                                              | Genre               | Live                                                               |
| ---------------------------------------------------- | ------------------- | ------------------------------------------------------------------ |
| [Nebula](https://github.com/Facetworks/nebula)       | AI product          | [nebula.signalizeai.org](https://nebula.signalizeai.org)           |
| [Vantage](https://github.com/Facetworks/vantage)     | Creative studio     | [vantage.signalizeai.org](https://vantage.signalizeai.org)         |
| [Halcyon](https://github.com/Facetworks/halcyon)     | Luxury audio        | [halcyon.signalizeai.org](https://halcyon.signalizeai.org)         |
| [Fable](https://github.com/Facetworks/fable)         | Personal portfolio  | [fable.signalizeai.org](https://fable.signalizeai.org)             |
| [Pulse](https://github.com/Facetworks/pulse)         | Conference          | [pulse.signalizeai.org](https://pulse.signalizeai.org)             |
| [Cellar](https://github.com/Facetworks/cellar)       | Natural wine bar    | [cellar.signalizeai.org](https://cellar.signalizeai.org)           |
| [Ledger](https://github.com/Facetworks/ledger)       | Fintech             | [ledger.signalizeai.org](https://ledger.signalizeai.org)           |
| [Atlas](https://github.com/Facetworks/atlas)         | Architecture studio | [atlas.signalizeai.org](https://atlas.signalizeai.org)             |
| [Frequency](https://github.com/Facetworks/frequency) | Music artist        | [frequency.signalizeai.org](https://frequency.signalizeai.org)     |
| [Sprout](https://github.com/Facetworks/sprout)       | Wellness app        | [sprout.signalizeai.org](https://sprout.signalizeai.org)           |
| [Auralis](https://github.com/Facetworks/Auralis)     | Real-time aurora    | [auralis.agentpostmortem.com](https://auralis.agentpostmortem.com) |
| [Mycelia](https://github.com/Facetworks/Mycelia)     | Agent simulation    | [mycelia.agentpostmortem.com](https://mycelia.agentpostmortem.com) |

## Adding a project

The entire index is generated from one typed data file,
[`src/data/projects.ts`](src/data/projects.ts). Adding a thirteenth project is a single
entry appended to the `projects` array:

```ts
{
  slug: 'newthing',
  name: 'Newthing',
  genre: 'Whatever it is',
  note: 'One line on what makes it different.',
  stack: ['Astro', 'Tailwind v4'],
  live: 'https://newthing.signalizeai.org',
  collection: 'sites',
}
```

The counts in the header, the section grouping, the numbering, and the repository links
all derive from that array. No template edits are needed.

## Standards

- **Static-first.** Every word is in the HTML. The only script is a reveal animation,
  gated behind a `.js` class added by an inline script, so with JavaScript disabled the
  page renders complete and in its final position.
- **Responsive**, verified at 390px and 1280px with no horizontal scroll.
- **Motion** respects `prefers-reduced-motion`.
- Cached via `public/_headers`: `/_astro/*` immutable, `/` must-revalidate.

## Develop

```bash
npm install
npm run dev
```

```bash
npm run format
npm run lint
npm run typecheck
npm run build
```

Deployed on Cloudflare Pages.

## License

MIT. See [LICENSE](LICENSE).
