import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://sbecagol.com',
  trailingSlash: 'always',
  output: 'static',
  build: {
    outDir: './dist',
    assets: '_assets'
  },
});