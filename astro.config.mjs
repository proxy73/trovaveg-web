import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://trovaveg.it',
  output: 'static',
  trailingSlash: 'never',
  build: {
    format: 'directory',
  },
});
