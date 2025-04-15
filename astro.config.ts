import { defineConfig } from 'astro/config';

import expressiveCode from 'astro-expressive-code';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import pagefind from 'astro-pagefind';
import spectre from './package/src';

import node from '@astrojs/node';
import { spectreDark } from './src/ec-theme';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  site: 'https://bentleyoph.netlify.app/',
  integrations: [
    expressiveCode({
      themes: [spectreDark],
    }),
    mdx(),
    sitemap(),
    pagefind(),
    spectre({
      
      name: 'Bentley',
      themeColor:`#ffffff`,
      openGraph: {
        home: {
          title: 'Bentley',
          description: 'My little garden on this part of the internet.',
        },
        blog: {
          title: 'Blog',
          description: 'What i put out into the world.',
        },
        projects: {
          title: 'Projects'
        }
      },
    })
  ],
});