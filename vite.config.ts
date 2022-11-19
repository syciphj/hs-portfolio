import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [sveltekit()],
	// allows vite access to ./posts and ./projects
  // build: {
  //   modulePreload: {polyfill: true}
  // },
  // allows vite access to ./posts and ./projects
  server: {
    fs: {
      allow: ['./']
    }
  }
};

export default config;
