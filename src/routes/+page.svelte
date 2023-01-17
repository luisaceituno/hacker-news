<script lang="ts">
	import StoryListItem from '$lib/hn-item/hn-item.svelte';
	import type { PageData } from './$types';
	import dayjs from 'dayjs';
	import relativeTime from 'dayjs/plugin/relativeTime';

	export let data: PageData;

	dayjs.extend(relativeTime);
	let page = 1;
</script>

<h1>Top Stories</h1>
{#each data.top.slice(0, page * 20) as item}
	<StoryListItem id={item} />
{/each}
<button on:click={() => page++}>More</button>
