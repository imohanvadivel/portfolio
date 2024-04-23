import { browser } from '$app/environment';
import { writable } from 'svelte/store';

type Pages = { name: string; url: string; active: boolean }[];

function PagesStore() {
	const pagesData = [
		{ name: 'Home', url: '/', active: true },
		{ name: 'About', url: '/about', active: false },
		{ name: 'Projects', url: '/projects', active: false },
		{ name: 'Thoughts', url: '/thoughts', active: false }
	];

	const { subscribe, update } = writable<Pages>(pagesData);

	function setActivePage(pathname: string) {
		update((pages) => {
			const newPages = pages.map((page) => {
				if (page.url === pathname) {
					page.active = true;
				} else {
					page.active = false;
				}
				return page;
			});
			return newPages;
		});
	}

	return {
		subscribe,
		setActivePage
	};
}

export const Pages = PagesStore();

// Theme (light and dark mode)
export const LightMode = writable(true);

LightMode.subscribe((mode) => {
	if (mode) {
		if (browser) {
			localStorage.setItem('lightMode', 'true');
			document.documentElement.classList.remove('dark-mode');

			const meta = document.querySelector('meta[name="theme-color"]') as HTMLMetaElement;
			if (meta) meta.content = '#FFFFFF';

			document.cookie = 'lightMode=true';
		}
	} else {
		if (browser) {
			localStorage.setItem('lightMode', 'false');
			document.documentElement.classList.add('dark-mode');

			const meta = document.querySelector('meta[name="theme-color"]') as HTMLMetaElement;
			if (meta) meta.content = '#191919';

			document.cookie = 'lightMode=false';
		}
	}
});

export function toggleMode(mode?: string | any) {
	LightMode.update((prev) => {
		if (mode === 'dark') {
			return prev ? !prev : prev;
		} else if (mode === 'light') {
			return prev ? prev : !prev;
		}
		return !prev;
	});
}
