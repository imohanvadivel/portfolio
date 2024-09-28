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

// Function to get the value from cookies
function getCookie(name:string) {
	if (!browser) return null; // Ensure it's running on the client
	const value = `; ${document.cookie}`;
	const parts = value.split(`; ${name}=`);
	if (parts.length === 2) return parts.pop().split(';').shift();
	return null;
}

// Initialize the theme from cookies
const storedThemeFromCookies = browser ? getCookie('lightMode') : null;
const initialTheme = storedThemeFromCookies === 'false' ? false : true; // Default to light mode if not set

// Create a writable store for LightMode
export const LightMode = writable(initialTheme);

// Subscribe to changes in the LightMode store
LightMode.subscribe((mode) => {
	if (browser) {
			// Save the preference in both localStorage and cookies
			localStorage.setItem('lightMode', mode ? 'true' : 'false');
			document.cookie = `lightMode=${mode};path=/;`;

			// Toggle the dark-mode class
			document.documentElement.classList.toggle('dark-mode', !mode);

			// Update meta theme-color tag for mobile browsers
			const meta = document.querySelector('meta[name="theme-color"]') as HTMLMetaElement;
			if (meta) {
					meta.content = mode ? '#FFFFFF' : '#191919';
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
