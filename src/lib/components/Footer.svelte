<script lang="ts">
</script>

<footer class="main-grid">
	<slot />
</footer>

<style>
	footer {
		font-size: var(--font-size-small);
		color: var(--color-text-secondary);
		grid-column: 1/-1;
		align-items: flex-start;
		margin-block-end: 1rem;
	}
	footer :global(a){
		color: var(--color-text-secondary);
		user-select: none;
	}
</style>
