<script lang="ts">
	import { Pages } from '$lib/store.js';
</script>

<nav class="large">
	<ul>
		{#each $Pages as page}
			<li>
				<a class:active={page.active} href={page.url}>
					<span class="arrow">→</span>
					{page.name}
				</a>
			</li>
		{/each}
	</ul>
</nav>

<style>
	nav {
		display: inline-flex;
		flex-direction: column;

		& li {
			position: relative;
		}

		& li .arrow {
			position: absolute;
			left: -1.5rem;
			display: none;
			top: 0;
		}

		& li a.active .arrow {
			display: block;
		}

		& a {
			color: var(--color-text-secondary);
			text-decoration: none;
			font-size: var(--font-size-large);
			line-height: 1.8;
			max-width: fit-content;
			user-select: none;
		}

		& a:hover {
			font-weight: 540;
			color: var(--color-text);
		}

		& a.active {
			font-weight: 540;
			color: var(--color-text);
		}

		@media (--medium-viewport) {
			display: none;
		}
	}
</style>
