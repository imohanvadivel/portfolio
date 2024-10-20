type Article = {
	title: string;
	slug: string;
	url: string;
	description: string;
	date: string;
};

export function load() {
	const articles: Article[] = [];
	const paths = import.meta.glob('/src/routes/thoughts/articles/*.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];

		if (file && typeof file === 'object' && 'metadata' in file) {
			articles.push(file.metadata as Article);
		}
	}

	articles.sort((a, b) => (a.date > b.date ? -1 : 1));

	return { articles };
}

export const prerender = true;