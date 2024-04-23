<script lang="ts">
	export let tag: string;

	let slug = '';

	function getSlug(node: HTMLElement) {
		let anchor = node.querySelector('a')!;
		let content = anchor.textContent || '';
		slug = content
			.toLowerCase()
			.replace(/\s+/g, '-')
			.replace(/[^a-z0-9-]/g, '')
			.replace(/-{2,}/g, '-')
			.replace(/^-/, '')
			.replace(/-$/, '');
	}
</script>

<svelte:element this={tag} id={slug} use:getSlug>
	<a href="#{slug}"><slot /></a>
</svelte:element>

<style>
	a {
		color: var(--color-text);
		text-decoration: none;
		cursor: default;
		--fragment-color: transparent;
		position: relative;
		border-radius: 0.125rem;
		scroll-margin-top: 4rem;
	}
	a:hover {
		--fragment-color: var(--color-text-secondary);
		cursor: default;
	}
	a::before {
		content: '#';
		color: var(--fragment-color);
		position: absolute;
		left: -1em;
	}
	a:visited {
		color: var(--color-text);
	}
	a:focus {
		outline: 1px solid var(--color-text-secondary);
		outline-offset: 0.25rem;
	}

	h1 {
		font-weight: 500;
		font-size: var(--font-size-xlarge);
		letter-spacing: -0.03em;
		color: var(--color-text);
		margin-block-end: 5rem;
		scroll-margin-top: 4rem;
	}

	h2 {
		/* font-size: var(--font-size-large); */
		font-weight: 550;
		letter-spacing: -0.01em;
		color: var(--color-text);
		margin-block-start: 4rem;
		margin-block-end: 1.25rem;
		scroll-margin-top: 4rem;
	}

	h3 {
		font-weight: 500;
		color: var(--color-text);
		margin-block-start: 2rem;
		margin-block-end: 1rem;
		scroll-margin-top: 4rem;
	}
</style>
