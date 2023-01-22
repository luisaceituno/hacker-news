<script lang="ts">
	import { getItem } from '$lib/stores/item-store';
	import Loading from '$lib/loading/loading.svelte';
	import type { HackerNewsItem } from '$lib/types/hacker-news-item';
	import { timeAgo } from '$lib/times/times';

	export let id: number;
	export let depth: number = 0;

	const colors = ['rgb(160 200 255)'];

	let open = depth < 1;
	let comment: HackerNewsItem;

	$: loading = comment == null;
	$: timestamp = timeAgo(comment?.time);

	getItem(id).then((c) => (comment = c));
</script>

<div class="comment" style="--color: {colors[depth % colors.length]};">
	{#if loading}
		<Loading />
	{:else}
		<button class="title-bar" on:click={() => (open = !open)}>
			<div class="title">{comment.by}</div>
			<div class="kids">({timestamp}) [{comment.kids?.length ?? 0}]</div>
		</button>
		{#if open}
			<div class="body">{@html comment.text}</div>
			{#each comment.kids ?? [] as kid}
				<svelte:self id={kid} depth={depth + 1} />
			{/each}
		{/if}
	{/if}
</div>

<style>
	.comment {
		border-left: 0.5rem solid var(--color);
		margin-left: 1px;
		margin-top: 1px;
	}
	.title-bar {
		display: flex;
		justify-content: space-between;
		width: 100%;
		border: none;
		font-weight: bold;
		padding: 0.5rem;
		background: var(--color);
		cursor: pointer;
	}
	.body {
		padding: 0.5rem;
	}
</style>
