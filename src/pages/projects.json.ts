import { collections, projects } from '../data/projects'

/**
 * The catalogue, published as JSON.
 *
 * `projects.ts` is the single source of truth for this site, and two things
 * outside this repo need the same list: the Facetworks org profile table and
 * the frontend section of the hire funnel. Rather than keep three hand-edited
 * copies in three repositories, they read this.
 *
 * Static output, so this is a file on the CDN, not a request that runs code.
 */
export function GET() {
  return new Response(
    JSON.stringify(
      {
        generated: 'facetworks/src/data/projects.ts',
        counts: {
          total: projects.length,
          sites: projects.filter((p) => p.collection === 'sites').length,
          experiments: projects.filter((p) => p.collection === 'experiments').length,
        },
        collections,
        projects,
      },
      null,
      2,
    ),
    { headers: { 'content-type': 'application/json; charset=utf-8' } },
  )
}
