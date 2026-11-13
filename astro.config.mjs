import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

const base = process.env.ASTRO_BASE !== undefined ? process.env.ASTRO_BASE : '/';
const site = process.env.ASTRO_SITE || 'https://quality-media.ru';

export default defineConfig({
  site,
  base,
  adapter: node({
    mode: 'standalone',
  }),
});
