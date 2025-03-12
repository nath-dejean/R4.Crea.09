// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://nath-dejean.github.io',
  base: 'R4.Crea.09',
  vite: {
    plugins: [tailwindcss()]
  }
});

// test