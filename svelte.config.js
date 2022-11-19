import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

//change this to false when building for prod
const developmentMode = false;

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.md', '.svelte.md'],
  preprocess: [
    mdsvex({ extensions: ['.svelte.md', '.md', '.svx'] }),
    preprocess()
  ],
  kit: {
    adapter: adapter(
      { precompress: true,
        pages: 'docs',
        assets: 'docs'
      }),
    paths: {
      base: developmentMode ? "" : "/hs-portfolio",
    }
  },
	prerender: {
		entries: ['*']
	},
  vite: {
    build: {
      modulePreload: {polyfill: true}
    },
  }
};


export default config;
