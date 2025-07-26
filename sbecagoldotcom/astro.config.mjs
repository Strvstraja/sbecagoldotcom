import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://sbecagol.com',
  output: 'static',
  build: {
    outDir: './dist',
  },
});