<script lang="ts">
	import { page, navigating } from '$app/stores';
	import { Pages } from '$lib/store';
	import '$lib/styles/global.css';
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';

	// Handling the navigation
	onMount(() => {
		const allowedPathNames = ['/', '/home', '/about', '/projects', '/thoughts'];

		// Inital page load navigation
		let currentPath = get(page).url.pathname;
		if (!allowedPathNames.includes(currentPath)) return;
		if (currentPath === '/home') currentPath = '/';
		Pages.setActivePage(currentPath);

		// Subsequent navigation
		const unsubscribe = navigating.subscribe((value) => {
			// No value
			if (!value) return;

			// Navigating to same destination
			if (value.from?.url.pathname === value.to?.url.pathname) return;

			let pathName = value.to?.url.pathname;

			if (!pathName) return;
			// Check for the allowed pathnames
			if (!allowedPathNames.includes(pathName)) return;

			if (pathName === '/home') pathName = '/';

			Pages.setActivePage(pathName);

			return unsubscribe;
		});
	});
</script>

<slot />

<div class="grid-bg" aria-hidden="true">
	<div class="col1" />
	<div class="col2" />
	<div class="col3" />
</div>

<style>
	:root {
		--grid-bg-display: grid;

		@media (--small-viewport) {
			--grid-bg-display: none;
		}
	}
	.grid-bg {
		position: fixed;
		display: var(--grid-bg-display);
		grid-template-columns: var(--main-column);
		column-gap: 2rem;
		max-width: 71.5rem;
		height: 100%;
		top: 0;
		width: 100%;
		left: 50%;
		transform: translateX(-50%);
		padding-inline: 2rem;
		margin-inline: auto;
		pointer-events: none;

		& div {
			border-inline: 1px solid var(--color-border-tertiary);
		}

		@media (--small-viewport) {
			display: none;
		}
	}

	@media (--medium-viewport) {
		.col2 {
			display: none;
		}
	}
</style>
