<script lang="ts">
	import type { PageData } from './$types';
	import Comment from '$lib/comment/comment.svelte';

	export let data: PageData;
	const item = data.item;
</script>

{#if $item}
	<h1>
		<a href="/">[←]</a>
		<a href={$item.url} target="_blank" rel="noreferrer">{$item.title}</a>
		<a href={`https://news.ycombinator.com/item?id=${$item.id}`} target="_blank" rel="noreferrer"
			>[HN]</a
		>
	</h1>
	{@html $item.text ?? ''}
{/if}

{#each $item?.kids ?? [] as comment}
	<Comment id={comment} depth={0} />
{/each}
