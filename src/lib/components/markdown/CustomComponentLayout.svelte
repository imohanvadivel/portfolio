<script context="module">
	import h1 from './h1.svelte';
	import h2 from './h2.svelte';
	import p from './p.svelte';
	import table from './Table/table.svelte';
	import td from './Table/td.svelte';
	import th from './Table/th.svelte';
	import tr from './Table/tr.svelte';
	import tbody from './Table/tbody.svelte';
	import li from './li.svelte';
	import img from './img.svelte';
	import code from './Code.svelte';

	export { h1, h2, p, table, td, th, tr, tbody, img, li, code };
</script>

<slot />
