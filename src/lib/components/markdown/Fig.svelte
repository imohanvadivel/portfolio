<script lang="ts">
  export let alt: string;
  export let src: string
</script>

<figure>
  <img height="320" {alt} {src} />
  <figcaption>{alt}</figcaption>
</figure>

<style>
	/* img {
		border: 1px solid var(--color-border);
    border-radius: .5rem;
    margin-block: 2.25rem;
	} */
</style>
