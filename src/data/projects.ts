/**
 * The single source of truth for everything this site renders.
 *
 * To add a project, append one entry to `projects`. Nothing else changes.
 */

export type Collection = 'sites' | 'experiments'

export interface Project {
  /** Repository name under github.com/Facetworks. */
  readonly slug: string
  /** Display name. */
  readonly name: string
  /** What kind of site or piece this is. */
  readonly genre: string
  /** One line on what makes this one different from the others. */
  readonly note: string
  /** Primary technologies, most significant first. */
  readonly stack: readonly string[]
  /** Deployed URL. */
  readonly live: string
  /** Which group it belongs to on the index. */
  readonly collection: Collection
}

export const collections: Record<Collection, { title: string; blurb: string }> = {
  sites: {
    title: 'Design sites',
    blurb:
      'Twelve multi-page sites, each a different genre with its own type, palette, and motion language. Built with Astro, static-first, and verified to read completely with JavaScript disabled.',
  },
  experiments: {
    title: 'GPU experiments',
    blurb:
      'Two single-file browser pieces that run entirely on the visitor GPU. No server, no dependencies, no build step.',
  },
}

export const projects: readonly Project[] = [
  {
    slug: 'quire',
    name: 'Quire',
    genre: 'Type foundry',
    note: 'Type-led identity where the specimens are real text at real sizes: waterfalls, a glyph grid, and an axis table per family.',
    stack: ['Astro', 'React island', 'Tailwind v4', 'Variable fonts'],
    live: 'https://quire.signalizeai.org',
    collection: 'sites',
  },
  {
    slug: 'fathom',
    name: 'Fathom',
    genre: 'Research institute',
    note: 'Built as a water column, with a linear depth scale in CSS and a temperature cast drawn as SVG from the same numbers the table prints.',
    stack: ['Astro', 'React island', 'Tailwind v4', 'CSS and SVG charts'],
    live: 'https://fathom.signalizeai.org',
    collection: 'sites',
  },
  {
    slug: 'nebula',
    name: 'Nebula',
    genre: 'AI product',
    note: 'Cosmic identity over an islands architecture: home, features, pricing, docs and changelog, blog, about.',
    stack: ['Astro', 'React islands', 'Tailwind v4', 'Lenis'],
    live: 'https://nebula.signalizeai.org',
    collection: 'sites',
  },
  {
    slug: 'vantage',
    name: 'Vantage',
    genre: 'Creative studio',
    note: 'Editorial identity with a kinetic marquee, a horizontal work reel, and a custom cursor.',
    stack: ['Astro', 'React islands', 'Tailwind v4', 'Lenis'],
    live: 'https://vantage.signalizeai.org',
    collection: 'sites',
  },
  {
    slug: 'halcyon',
    name: 'Halcyon',
    genre: 'Luxury audio',
    note: 'A warm-serif product story told on sticky scroll, around an ear cup composed purely in CSS.',
    stack: ['Astro', 'React island', 'Tailwind v4', 'Lenis'],
    live: 'https://halcyon.signalizeai.org',
    collection: 'sites',
  },
  {
    slug: 'fable',
    name: 'Fable',
    genre: 'Personal portfolio',
    note: 'Warm-dark and playful: magnetic buttons, film grain, marquee, and a playground section.',
    stack: ['Astro', 'React islands', 'Tailwind v4', 'Lenis'],
    live: 'https://fable.signalizeai.org',
    collection: 'sites',
  },
  {
    slug: 'pulse',
    name: 'Pulse',
    genre: 'Conference',
    note: 'Poster color-blocking on a neon triad, with a speakers grid, a three-day schedule, and ticket tiers.',
    stack: ['Astro', 'React island', 'Tailwind v4', 'Lenis'],
    live: 'https://pulse.signalizeai.org',
    collection: 'sites',
  },
  {
    slug: 'cellar',
    name: 'Cellar',
    genre: 'Natural wine bar',
    note: 'Candlelit warm-dark in oxblood and gold, set in Cormorant italic, with a reservations flow.',
    stack: ['Astro', 'React island', 'Tailwind v4', 'Lenis'],
    live: 'https://cellar.signalizeai.org',
    collection: 'sites',
  },
  {
    slug: 'ledger',
    name: 'Ledger',
    genre: 'Fintech',
    note: 'Trust-clean light theme, pine-green serif identity, tabular numerals, and an SVG balance chart.',
    stack: ['Astro', 'React island', 'Tailwind v4', 'Lenis'],
    live: 'https://ledger.signalizeai.org',
    collection: 'sites',
  },
  {
    slug: 'atlas',
    name: 'Atlas',
    genre: 'Architecture studio',
    note: 'Stark monochrome with a cobalt accent, huge Archivo type, CSS-composed plates, and generated project pages.',
    stack: ['Astro', 'React island', 'Tailwind v4', 'Lenis'],
    live: 'https://atlas.signalizeai.org',
    collection: 'sites',
  },
  {
    slug: 'frequency',
    name: 'Frequency',
    genre: 'Music artist',
    note: 'Nocturnal duotone, oversized Bricolage type against mono liner notes, and album pages with computed runtimes.',
    stack: ['Astro', 'React island', 'Tailwind v4', 'Lenis'],
    live: 'https://frequency.signalizeai.org',
    collection: 'sites',
  },
  {
    slug: 'sprout',
    name: 'Sprout',
    genre: 'Wellness app',
    note: 'Soft pastel blobs on mist white, with a phone mockup and habit-tracker UI composed entirely in CSS.',
    stack: ['Astro', 'React island', 'Tailwind v4', 'Lenis'],
    live: 'https://sprout.signalizeai.org',
    collection: 'sites',
  },
  {
    slug: 'Auralis',
    name: 'Auralis',
    genre: 'Real-time aurora',
    note: 'Domain-warped fractal noise through cosine palettes, WebGPU first with a matched WebGL2 fallback.',
    stack: ['WebGPU', 'WGSL', 'WebGL2', 'GLSL'],
    live: 'https://auralis.agentpostmortem.com',
    collection: 'experiments',
  },
  {
    slug: 'Mycelia',
    name: 'Mycelia',
    genre: 'Agent simulation',
    note: 'About 262,000 slime-mold agents sensing and steering in four GPU passes per frame, with no CPU in the loop.',
    stack: ['WebGL2 GPGPU', 'GLSL'],
    live: 'https://mycelia.agentpostmortem.com',
    collection: 'experiments',
  },
]

export const repoUrl = (p: Project) => `https://github.com/Facetworks/${p.slug}`

export const byCollection = (c: Collection) => projects.filter((p) => p.collection === c)
