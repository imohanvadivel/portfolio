<script lang="ts">
	import { Pages, toggleMode } from '$lib/store';
	import DarkModeToggle from './DarkModeToggle.svelte';
</script>

<header>
	<small class="location">→ {$Pages.find((p) => p.active)?.name}</small>
	<small class="col2" />

	<div class="right-part">
		<nav>
			<ul>
				{#each $Pages as page}
					<li><a class:active={page.active} href={page.url}>{page.name} </a></li>
				{/each}
			</ul>
		</nav>

		<DarkModeToggle />
	</div>
</header>

<style>
	header {
		padding-block: 2rem;
		margin-block-end: 8rem;
		display: grid;
		grid-template-columns: var(--main-column);
		grid-column-gap: var(--main-column-gap);
		color: var(--color-text-secondary);
		font-size: var(--font-size-medium);

		@media (--small-viewport) {
			display: flex;
			justify-content: space-between;
			margin-block-end: 5rem;
		}
	}

	.location {
		white-space: nowrap;
		user-select: none;

		@media (--small-viewport) {
			display: none;
		}
	}

	@media (--medium-viewport) {
		.col2 {
			display: none;
		}
	}

	.right-part {
		display: flex;
		flex-shrink: 0;

		@media (--small-viewport) {
			width: 100%;
			justify-content: space-between;
		}
	}

	nav {
		display: none;
		margin-inline-end: 1rem;

		& ul {
			display: inline-flex;
			list-style: none;
			column-gap: 1rem;
		}

		& a {
			color: var(--color-text-secondary);
			user-select: none;
			text-decoration: none;
		}
		& a:hover {
			color: var(--color-text);
		}
		& a.active {
			color: var(--color-text);
			font-weight: 550;
		}

		@media (--medium-viewport) {
			display: block;
		}
	}
</style>
