<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Nav from '$lib/components/MainNav.svelte';
	import Card from '$lib/components/Card.svelte';

	export let data;
</script>

<svelte:head>
	<title>Thoughts</title>
</svelte:head>

<main class="main-wrapper">
	<Header />

	<div class="main-grid">
		<section class="hero-section">
			<h1 class="primary-header">Thoughts & Ideas</h1>
			<p class="primary-desc">Musings about design and software...</p>
		</section>

		<Nav />

		<div aria-hidden="true" style="grid-column: 1/-1; height: 5rem;" />

		{#each data.articles as article}
			<Card type="article" {...article} />
		{/each}

		<div aria-hidden="true" style="grid-column: 1/-1; height: 8rem;" />
	</div>
	<Footer>
		<small
			>This site is built with <a href="https://kit.svelte.dev/">Sveltekit</a>, hosted and
			distributed globally by <a href="https://www.cloudflare.com/">Cloudflare.</a></small
		>
		<small
			>Type is set in <a href="https://rsms.me/inter/">Inter</a> and
			<a href="https://fonts.google.com/specimen/Libre+Baskerville">Baskerville</a>.</small
		>
	</Footer>
</main>
<style>
	small {
		margin-block-end: 1rem;
	}
</style>