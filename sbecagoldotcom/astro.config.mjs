import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://sbecagol.com',
  trailingSlash: 'never',
  output: 'static',
  integrations: [mdx()],
  build: {
    outDir: './dist',
    assets: '_assets'
  },
});