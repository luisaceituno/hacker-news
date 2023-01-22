<script lang="ts">
	import StoryListItem from '$lib/hn-item/hn-item.svelte';
	import type { PageData } from './$types';
	import page from '$lib/stores/pagination-store';

	export let data: PageData;
</script>

<h1>Top Stories</h1>
{#each data.top.slice(0, $page * 20) as item}
	<StoryListItem id={item} />
{/each}
<button on:click={() => page.increase()}>More</button>

<style>
	h1 {
		line-height: 1em;
		padding: 0 1rem 1rem;
		border-bottom: 0.25rem solid rgb(160 200 255);
	}
	button {
		width: 100%;
		padding: 1rem;
		background: rgb(160 200 255);
		font-family: 'Courier New', Courier, monospace;
		font-weight: bold;
		border: none;
		cursor: pointer;
		border-radius: 0.25rem;
		box-shadow: 0 0.25rem 0 rgb(86, 140, 211);
		transition: transform 0.2s ease-out, box-shadow 0.2s ease-out;
	}
	button:hover {
		transform: translateY(-0.25rem);
		box-shadow: 0 0.5rem 0 rgb(86, 140, 211);
	}
</style>
