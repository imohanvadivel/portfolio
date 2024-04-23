<script lang="ts">
	import { toggleMode } from '$lib/store';
	import darkModeIcon from '$lib/assets/icons/darkmode.svg';
</script>

<button on:click={toggleMode}>{@html darkModeIcon}</button>

<style>
	button {
		all: unset;
		cursor: pointer;
		flex-shrink: 0;
	}

	button :global(svg:hover path) {
		fill: var(--color-text);
	}
</style>
