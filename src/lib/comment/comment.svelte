<script lang="ts">
	import { getItem } from '$lib/stores/item-store';
	import Loading from '$lib/loading/loading.svelte';
	import { timeAgo } from '$lib/times/times';

	export let id: number;
	export let depth: number = 0;

	const colors = ['rgb(160 200 255)'];

	let open = true;
	let showChildren = false;
	let comment = getItem(id);

	$: loading = $comment == null;
	$: timestamp = timeAgo($comment?.time);
	$: childCount = $comment?.kids?.length ?? 0;
</script>

<div class="comment" style="--color: {colors[depth % colors.length]};">
	{#if loading}
		<Loading />
	{:else if !$comment.deleted}
		<button class="title-bar" on:click={() => (open = !open)}>
			<div class="title">{$comment.by}</div>
			<div class="kids">({timestamp}) [{childCount}]</div>
		</button>
		{#if open}
			<div class="body">{@html $comment.text}</div>
			{#if showChildren || childCount == 0}
				{#each $comment.kids ?? [] as kid}
					<svelte:self id={kid} depth={depth + 1} />
				{/each}
			{:else}
				<button on:click={() => (showChildren = true)} class="more">{childCount} Children</button>
			{/if}
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
	.more {
		border: none;
		width: 100%;
		padding: 0.25rem;
		background: aliceblue;
		cursor: pointer;
	}
</style>
