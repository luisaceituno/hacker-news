<script lang="ts">
	import StoryListItem from '$lib/hn-item/hn-item.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1>Top Stories</h1>
{#each data.top.slice(0, 20) as item}
	<StoryListItem id={item} />
{/each}
