import adapter from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: preprocess({
		babel: {
			presets: [
				[
					'@babel/preset-env',
					{
						modules: false,
						useBuiltIns: 'usage',
						corejs: '3.33'
					}
				]
			]
		}
	}),

	kit: {
		adapter: adapter()
	}
};

export default config;
