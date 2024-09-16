<script lang="ts">
	export let src: string;
	export let alt: string;
</script>

<!-- svelte-ignore a11y-media-has-caption -->
 <div>
	 <video autoplay loop>
		 <source {src} />
	 </video>
	 <caption>{alt}</caption>
 </div>

<style>
	video {
		width: 100%;
	}

	caption {
		font-size: var(--font-size-small);
		color: var(--color-text-secondary);
		text-align: center;
		margin-block-start: 0.5rem;
		letter-spacing: 0.01em;
    display: block;
	}

	div {
		width: 100%;
		margin-top: 2.25rem;
		margin-bottom: 2.25rem;
	}
</style>
