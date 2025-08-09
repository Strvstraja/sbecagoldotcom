import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://sbecagol.com',
  trailingSlash: 'never',
  output: 'static',
  integrations: [mdx(), sitemap()],
  build: {
    outDir: './dist',
    assets: '_assets'
  },
});