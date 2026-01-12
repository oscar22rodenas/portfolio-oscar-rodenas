// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import sitemap from '@astrojs/sitemap';
import { languages, defaultLang } from './src/i18n/ui';

// https://astro.build/config
export default defineConfig({
  site: 'https://portfolio-oscarrodenas.vercel.app',
  i18n: {
    defaultLocale: defaultLang,
    locales: Object.keys(languages),
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [tailwind(), sitemap()]
});