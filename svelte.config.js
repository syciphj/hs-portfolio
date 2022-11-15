import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.md', '.svelte.md'],
  preprocess: [
    mdsvex({ extensions: ['.svelte.md', '.md', '.svx'] }),
    preprocess()
  ],
  kit: {
    adapter: adapter({ precompress: true }),
  },
	prerender: {
		entries: ['*']
	}
};


export default config;
