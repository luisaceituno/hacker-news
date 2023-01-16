<script lang="ts">
	import type { HackerNewsItem } from '$lib/types/hacker-news-item';

	export let id: string;

	async function fetchItem(): Promise<HackerNewsItem> {
		const resp = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
		return (await resp.json()) as HackerNewsItem;
	}
</script>

<div>
	<div class="item">
		{#await fetchItem()}
			[loading...]
		{:then item}
			<div class="score">{item.score}</div>
			<a href={item.url} target="_blank" rel="noreferrer">{item.title}</a>
		{:catch error}
			<div>error: {error}</div>
		{/await}
	</div>
</div>

<style>
	.item {
		display: flex;
		flex-direction: row;
		gap: 0.5rem;
		margin: 1rem;
	}
	.score {
		font-family: 'Courier New', Courier, monospace;
		width: 3rem;
		text-align: right;
		font-weight: bold;
	}
</style>
