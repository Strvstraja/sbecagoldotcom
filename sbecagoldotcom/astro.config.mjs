// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://strvstraja.github.io',
  base: '/sbecagoldotcom',
  output: 'static',
  build: {
    assets: 'assets'
  }
});
