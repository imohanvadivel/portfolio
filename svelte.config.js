import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

/* Remark plugin function: parses the markdown AST and extract
 * the headings from it, to create TOC. */
export function remarkGetHeading() {
	let visit;
	let tree_to_string;
	return async function transformer(tree, vFile) {
		if (!visit) {
			tree_to_string = (await import('mdast-util-to-string')).toString;
			visit = (await import('unist-util-visit')).visit;
		}

		vFile.data.headings = [];

		function getSlug(title) {
			return title
				.toLowerCase()
				.replace(/ /g, '-')
				.replace(/[^\w-]+/g, '');
		}

		visit(tree, 'heading', (node) => {
			vFile.data.headings.push({
				level: node.depth,
				title: tree_to_string(node),
				slug: getSlug(tree_to_string(node))
			});
		});

		if (!vFile.data.fm) vFile.data.fm = {};
		vFile.data.fm.headings = vFile.data.headings;
	};
}

/** @type {import('mdsvex').MdsvexCompileOptions} */
const mdsvexOptions = {
	extensions: ['.svelte.md', '.md', '.svx'],
	smartypants: true,
	layout: '/src/lib/components/markdown/CustomComponentLayout.svelte',
	remarkPlugins: [remarkGetHeading]
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexOptions.extensions],
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],

	kit: {
		adapter: adapter()
	}
};

export default config;
