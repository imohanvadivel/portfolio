<script lang="ts">
	export let minWidth: string | undefined = undefined;
</script>

<div class="table-wrapper" style:--min-width={minWidth}>
	<table>
		<slot />
	</table>
</div>

<style>
	table {
		border-collapse: collapse;
		border-style: hidden;
		width: 100%;
		/* background: var(--color-white); */
	}
	.table-wrapper {
		display: inline-block;
		border: 1px solid var(--color-border);
		border-radius: 2px;
		width: 100%;
		min-width: var(--min-width);
		margin-block-start: 0.5rem;
		margin-block-end: 1.5rem;
		background: var(--color-bg-strong);
		border-radius: 0.5rem;
		overflow: hidden;
	}
</style>
