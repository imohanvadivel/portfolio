const projects = [
	{
		title: 'Figblocks',
		description: 'An open source Ul component library designed for building Figma Plugins with Svelte.',
		url: 'https://figblocks.mohanvadivel.com'
	},
	{
		title: 'Desk extension types',
		description: 'TypeScript type definitions for authoring Zoho Desk extensions.',
		url: 'https://github.com/imohanvadivel/desk-ext-types'
	},
	{
		title: 'Color contrast',
		description: 'A Figma plugin to measure color contrast using the APCA, BPCA, and WCAG 2 algorithms.',
		url: 'https://www.figma.com/community/plugin/1380599887933734771'
	},
	{
		title: 'Component utility',
		description: 'A Figma plugin for effortlessly cloning and linking component sets.',
		url: 'https://www.figma.com/community/plugin/1281680817111472375'
	},
	{
		title: 'CSS variables',
		description: 'A Figma plugin for importing and exporting variables between CSS and Figma.',
		url: 'https://www.figma.com/community/plugin/1270795391186145554'
	},
	{
		title: 'Tidy up',
		description: 'A Figma plugin for effortlessly tidy up, sort, and align nodes in a grid.',
		url: 'https://www.figma.com/community/plugin/1250126231463900099'
	},
	{
		title: 'Bulk image importer',
		description: 'A Figma plugin for importing multiple images from URLs.',
		url: 'https://www.figma.com/community/plugin/1266419660538162271'
	},
	{
		title: 'Rotate replicas',
		description: 'Create and manipulate radial patterns directly on the figma canvas.',
		url: 'https://www.figma.com/community/plugin/1046408980285879143',
	},
	{
		title: 'Variable font playground',
		description: 'A tool for testing variable axes and exploring OpenType features of a font.',
		url: '/projects/variable-font-playground/index.html',
	},
	{
		title: 'Zoho Desk postman API collection',
		description: 'A Postman collection covering the Zoho Desk API.',
		url: 'https://www.postman.com/imohanvadivel/workspace/zoho-desk/collection/7584004-bc554b53-8d7a-43b1-a366-ed2cee6401f1',
	},
	{
		title: 'Glyphs',
		description:
			'Copy typographic spaces, math notations, punctuations, and more to your clipboard.',
		url: '/projects/Glyphs/index.html',
	},
	{
		title: 'தமிழ் glyphs',
		description: 'Copy Tamil numbers, fractions, clerical symbols, and more to your clipboard.',
		url: '/projects/Glyphs-Tamil/index.html',
	},
	{
		title: 'Sensors for the Web',
		description: 'A fun little project with Generic Sensor API, access on-device sensors data.',
		url: '/projects/web-sensors/index.html',
	},
	{
		title: 'p5.js playground',
		description: 'A p5.js playground with typescript support.',
		url: '/projects/p5js-playground/index.html',
	},
	{
		title: 'Grille',
		description: 'A Simple CSS Grid system.',
		url: 'https://github.com/imohanvadivel/grille',
	},
	{
		title: 'MathML',
		description:
			'A little experiment with MathML, typesetting math & scientific notation for the web.',
		url: '/projects/MathML/index.html',
	},
	{
		title: 'Black-Scholes Model',
		description: 'A little project, implementing Black-Scholes algorithm.',
		url: '/projects/black-scholes-model/index.html',
	},
	{
		title: 'Web Form Controls',
		description: 'All HTML5 web form controls in one webpage.',
		url: '/projects/web-form-controls/index.html',
	}
];

export function load() {
	return { projects };
}

export const prerender = true;