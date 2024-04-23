<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Nav from '$lib/components/MainNav.svelte';
	import CurrentTime from '$lib/components/CurrentTime.svelte';
</script>

<svelte:head>
	<title>Mohan Vadivel</title>
</svelte:head>

<main class="main-wrapper">
	<Header />

	<div class="main-grid">
		<section class="hero-section">
			<h1 class="primary-header">Mohan Vadivel</h1>
			<p class="primary-desc">
				Hey! I'm a product designer, software & hardware tinkerer and I'm passionate about building
				meaningful experiences for the software medium.
			</p>
		</section>

		<Nav />

		<aside class="social">
			<ul>
				<li><a href="https://twitter.com/imohanvadivel" target="_blank">Twitter</a></li>
				<li><a href="https://github.com/imohanvadivel" target="_blank">Github</a></li>
				<li><a href="mailto:mohan@mohanvadivel.com" target="_blank">Email</a></li>
				<li><a href="https://www.figma.com/@mohanvadivel" target="_blank">Figma</a></li>
			</ul>
		</aside>
	</div>

	<Footer>
		<small><a href="https:mohanvadivel.com">Mohan</a> © 2024</small>
	</Footer>
</main>

<style>
	aside ul {
		margin-block-start: 0.5rem;
		display: flex;
		flex-direction: row;
		column-gap: 1.5rem;
		grid-column: 1;
		list-style: none;
	}

	aside a {
		color: var(--color-text-secondary);
		text-decoration: none;
		user-select: none;
	}

	aside a:hover {
		color: var(--color-text);
		text-decoration: underline;
	}
</style>
