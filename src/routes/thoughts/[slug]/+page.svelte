<script lang="ts">
	import DarkModeToggle from '$lib/components/DarkModeToggle.svelte';
	import Toc from '$lib/components/markdown/toc.svelte';
	import { GridBg, formatDate } from '$lib/util';
	import { onMount } from 'svelte';

	onMount(() => {
		GridBg.hide();
		return GridBg.show;
	});

	export let data;

	let title = data.title;
	let description = data.description;
	
</script>

<svelte:head>
	<title>{title}</title>
	<meta property="og:title" content={title} />
	<meta name="twitter:title" content={title} />
	<meta property="og:description" content={description} />
	<meta name="twitter:description" content={description} />
	<meta property="og:image" content="" />
	<meta name="twitter:image" content="" />
	<meta name="twitter:image:alt" content={title} />
	<meta name="twitter:card" content="summary" />
	<meta property="og:type" content="article" />
</svelte:head>

<div class="wrapper">
	<header>
		<nav>
			<a href="/thoughts">→ Thoughts</a>
			<DarkModeToggle />
		</nav>

		<h1>{title}</h1>
		<time datetime={data.date}>{formatDate(data.date)}</time>
	</header>

	<article>
		<svelte:component this={data.content} />
	</article>
</div>

<style>
	.wrapper {
		max-width: 48rem;
		margin: 0 auto;
		margin-block-end: 50vh;
		padding-inline: 2rem;
		position: relative;
		@media (--small-viewport) {
			padding-inline: 1.5rem;
		}
	}
	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: var(--color-text-secondary);
		margin-block-end: 6rem;
	}

	h1 {
		font-weight: 500;
		font-size: var(--font-size-large);
		letter-spacing: -0.01em;
	}

	time {
		color: var(--color-text-secondary);
	}

	header {
		margin-block-start: 2rem;
		margin-block-end: 5rem;
	}

	a {
		color: var(--color-text-secondary);
		text-decoration: none;
	}

	article {
		grid-column: span 2;
		line-height: 1.7;
	}

	article :global(figure) {
		margin-block: 2.25rem;
	}

	article :global(figure img),
	article :global(video) {
		border: 1px solid var(--color-border);
		border-radius: 0.5rem;
	}

	article :global(figure figcaption) {
		font-size: var(--font-size-small);
		color: var(--color-text-secondary);
		text-align: center;
		margin-block-start: 0.5rem;
		letter-spacing: 0.01em;
	}

	article :global(b),
	article :global(strong) {
		font-weight: 500;
	}

</style>
