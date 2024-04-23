<script lang="ts">
	export let data: TocElement[];

	// Removes the H1 element
	data = data.filter((el) => el.level !== 1);

	type TocElement = {
		title: String;
		slug: String;
		level: number;
	};
</script>

<aside>
	<ol>
		{#each data as { title, slug, level }, i}
			<li>
				<a href={`#${slug}`}>{title}</a>
			</li>
		{/each}
	</ol>
</aside>

<style>
	a {
		color: var(--color-text-secondary);
		text-decoration: none;
	}

  aside{
    position: absolute;
    left: -13rem;
    top: 0;
  }
</style>
