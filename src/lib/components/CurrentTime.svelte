<script lang="ts">
	import { readable } from 'svelte/store';
	import worldIcon from '$lib/assets/icons/world.svg';

	// Current Time (GMT +5.30)
	export const Time = readable('00:00:00', (set: any) => {
		const interval = setInterval(() => {
			const currentTime = new Date();
			const timezoneOffset = 5.5 * 60 * 60 * 1000;
			const currentTimeWithOffset = new Date(currentTime.getTime() + timezoneOffset);

			let hours = `${currentTimeWithOffset.getUTCHours()}`.padStart(2, '0');
			let minutes = `${currentTimeWithOffset.getUTCMinutes()}`.padStart(2, '0');
			let seconds = `${currentTimeWithOffset.getUTCSeconds()}`.padStart(2, '0');

			set(`${hours}:${minutes}:${seconds}`);
		}, 1000);

		return () => clearInterval(interval);
	});
</script>

<small>
	{@html worldIcon}

	<time>{$Time} IST</time>
</small>

<style>
	small {
		display: inline-flex;
		align-items: center;
		column-gap: 0.4rem;
	}
	time {
		font-variant-numeric: tabular-nums;
	}
</style>
