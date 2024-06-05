<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Nav from '$lib/components/MainNav.svelte';
	import Card from '$lib/components/Card.svelte';
	import CurrentTime from '$lib/components/CurrentTime.svelte';
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<main class="main-wrapper">
	<Header />

	<div class="main-grid">
		<section class="hero-section">
			<h1 class="primary-header">Hey!</h1>
			<p class="primary-desc"></p>
		</section>

		<Nav />

		<div aria-hidden="true" style="grid-column: 1/-1; height: 7rem;" />

		<img src="/asset/mypic.jpg" alt="Headshot of Mohan Vadivel" />

		<div class="first-para">
			<p class="p1">
				I’m Mohan Vadivel, an electronics engineer transitioning into product design, based in
				India. Currently, I'm honing my skills as a product designer at <a
					href="https://zoho.com/desk/">Zoho Desk.</a
				>
			</p>
			<p class="p2">
				Outside of my professional life, I immerse myself in the world of software and hardware,
				exploring and experimenting with various technologies. You can check out some of my
				<a href="/projects">recent experiments →</a>
			</p>
		</div>

		<p class="p3">
			Beyond my interests in Design and Electronics, I find myself captivated by the expansive
			universe of space. I often find myself gazing at the stars, contemplating profound questions
			such as: Who am I? Why are we here? Are we the only ones? What is the purpose of life?
		</p>
		<p class="p4">
			Now, enough about me. I'd love to hear about what has led you to my little corner of the
			internet. Feel free to reach out to me on <a href="https://twitter.com/imohanvadivel">Twitter</a>, where I'm most active, or send me an <a
				href="mailto:mohan@mohanvadivel.com">email</a
			>. I usually respond within three days.
		</p>

		<div aria-hidden="true" style="grid-column: 1/-1; height: 12rem;" />
	</div>
	<Footer>
		<small>We all are made of star stuff. We are a way for the COSMOS to know itself.</small>
		<small class="footer-time">GMT+5:30 | <CurrentTime /></small>
	</Footer>
</main>

<style>
	p {
		margin-block-end: 1rem;
	}

	.p1,
	.p2 {
		font-size: 1.2rem;
		font-weight: 500;
	}

	.p3 {
		grid-column: 1;
	}

	.p3,
	.p4 {
		margin-block-start: 2rem;

		@media (--small-viewport) {
			margin-block-start: 1rem;
		}
	}

	.first-para {
		grid-column: 1;
		align-self: flex-end;

		@media (--small-viewport) {
			grid-column: 1/-1;
			margin-top: 2rem;
		}
	}

	img {
		grid-column: 2;
		grid-row: 3;

		@media (--small-viewport) {
			grid-column: 1/-1;
		}
	}

	small{
		margin-block-end: 1rem;
	}

	.footer-time {
		display: flex;
		align-items: center;
	}
</style>
