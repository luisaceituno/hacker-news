<script lang="ts">
	import type { HackerNewsItem } from '$lib/types/hacker-news-item';

	export let id: string;

	async function fetchItem(): Promise<HackerNewsItem> {
		const resp = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
		return (await resp.json()) as HackerNewsItem;
	}
</script>

<div>
	{#await fetchItem()}
		...
	{:then item}
		<a href="story/{id}">{item.title}</a>
	{/await}
</div>
