import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
export default defineConfig({ site: 'https://taleshenrique.dev', integrations: [sitemap()], output: 'static', build: { format: 'directory' }, vite: { build: { cssMinify: true } } });
