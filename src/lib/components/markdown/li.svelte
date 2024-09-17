<li>
	<slot />
</li>

<style>
	li {
		list-style: disc;
		/* overflow: hidden; */
		text-overflow: ellipsis;
	}
	li::marker {
		color: var(--color-text-secondary);
	}
</style>
