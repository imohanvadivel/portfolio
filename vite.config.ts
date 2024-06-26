import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import svgLoader from 'vite-svg-loader'; // Vite plugin: loads SVG files as components
import { enhancedImages } from '@sveltejs/enhanced-img';

export default defineConfig({
	plugins: [enhancedImages(), sveltekit(), svgLoader({ defaultImport: 'raw' })],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
