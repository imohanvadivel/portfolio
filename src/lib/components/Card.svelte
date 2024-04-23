<script lang="ts">
	import { formatDate } from '$lib/util';

	export let type: 'project' | 'article' = 'project';
	export let title: string;
	export let description: string;
	export let url: string;
	export let slug: string | undefined = undefined;
	export let date: string | undefined = undefined;
</script>

<article>
	<a href={type === 'project' ? url : `./thoughts/${slug}`}>
		<header>{title}</header>
	</a>
	<p>{description}</p>
	{#if date}
		<time datetime={date}> {formatDate(date)}</time>
	{/if}
</article>

<style>
	article {
		margin-block-end: 3rem;
		display: flex;
		flex-direction: column;
	}

	header:hover {
		background-color: var(--color-bg-tertiary);
	}

	header {
		font-size: var(--font-size-medium);
		color: var(--color-text);
		font-weight: 500;
		user-select: none;
		max-width: fit-content;
		padding-inline: 0.5rem;
		border-radius: 0.25rem;
		margin-inline-start: -0.5rem;
		cursor: pointer;
	}

	p{
		margin-block-start: 0.25rem;
	}

	p,
	time {
		color: var(--color-text-secondary);
		font-size: var(--font-size-medium);
		user-select: none;
		cursor: auto;
	}

	time {
		font-weight: 500;
		font-size: var(--font-size-small);
		margin-block-start: 0.25rem;
		/* font-family: 'jetbrains mono'; */
	}

	a, a:hover {
		text-decoration: none;
	}
</style>
