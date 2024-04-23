import { browser } from '$app/environment';


export function formatDate(date: string) {
	const dateObj = new Date(date);
	const formatter = new Intl.DateTimeFormat('en-Gb', {
		year: 'numeric',
		month: 'short',
		day: 'numeric'
	});

	return formatter.format(dateObj);
}

// Show or hide the grid line on the background
export const GridBg = {
	show() {
		if (!browser) return;
		document.documentElement.style.setProperty('--grid-bg-display', 'grid');
	},
	hide() {
		if (!browser) return;
		document.documentElement.style.setProperty('--grid-bg-display', 'none');
	}
};


