<script lang="ts">
	export let alt: string;
	export let src: string;
	export let height: string;
</script>

<figure>
	<img {height} {alt} {src} />
	<figcaption>{alt}</figcaption>
</figure>
