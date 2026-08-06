import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  site: 'https://facetworks.signalizeai.org',
  integrations: [sitemap()],
  build: { format: 'file' },
  vite: { plugins: [tailwindcss()] },
})
