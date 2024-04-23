export async function load({ params }) {
	const post = await import(`../articles/${params.slug}.md`);

	const content = post.default;

	return {
		content,
		...post.metadata
	};
}
