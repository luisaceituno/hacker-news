<script lang="ts">
	import type { HackerNewsItem } from '$lib/types/hacker-news-item';
	import { getItem, maxScore } from './item-store';
	import dayjs from 'dayjs';

	export let id: number;

	const itemPromise = getItem(id);
	let item: HackerNewsItem;

	itemPromise.then((i) => (item = i));
	$: opacity = (item?.score ?? 0) / $maxScore;
	$: commentsUrl = `https://news.ycombinator.com/item?id=${id}`;
	$: timeAgo = dayjs(new Date(1000 * (item?.time ?? 0))).fromNow();
</script>

<div>
	<div class="item">
		{#await itemPromise}
			<div class="title">[loading...]</div>
		{:then item}
			<div class="score" style="background-color: rgb(255 160 160 / {opacity}">
				{item.score}
			</div>
			<div class="body">
				<a href={item.url} target="_blank" rel="noreferrer">{item.title}</a>
				<div class="infos">
					<a href={commentsUrl} target="_blank" rel="noreferrer">
						{item.descendants ?? 0} Comments
					</a>
					<span>{timeAgo}</span>
				</div>
			</div>
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
		align-items: center;
	}
	.score {
		font-family: 'Courier New', Courier, monospace;
		width: 3rem;
		text-align: right;
		font-weight: bold;
		background-color: rgb(crimson);
		padding: 0.5rem;
	}
	.body {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		padding: 0.5rem;
	}
	.infos a {
		color: inherit;
	}
</style>
