<script lang="ts">
	import StoryListItem from '$lib/hn-item/hn-item.svelte';
	import type { PageData } from './$types';
	import { page, mainScrollPosition } from '$lib/stores/pagination-store';
	import { onDestroy, onMount } from 'svelte';

	export let data: PageData;

	let yPos = 0;

	onMount(() => {
		setTimeout(() => (yPos = $mainScrollPosition));
	});
	onDestroy(() => {
		mainScrollPosition.update(yPos);
	});
</script>

<h1>Top Stories</h1>
{#each data.top.slice(0, $page * 20) as item}
	<StoryListItem id={item} />
{/each}
<button on:click={() => page.increase()}>More</button>

<svelte:window bind:scrollY={yPos} />

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
