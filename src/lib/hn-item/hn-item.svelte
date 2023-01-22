<script lang="ts">
	import Loading from '$lib/loading/loading.svelte';
	import { getItem, maxScore } from '$lib/stores/item-store';
	import { timeAgo } from '$lib/times/times';

	export let id: number;

	let item = getItem(id);

	$: opacity = ($item?.score ?? 0) / $maxScore;
	$: commentsUrl = `comments/${id}`;
	$: timestamp = timeAgo($item?.time);
</script>

<div>
	<div class="item">
		{#if !$item}
			<div class="loading"><Loading /></div>
		{:else}
			<div class="score" style="background-color: rgb(160 200 255 / {opacity})">
				{$item.score}
			</div>
			<div class="body">
				<a href={$item.url} target="_blank" rel="noreferrer">{$item.title}</a>
				<div class="infos">
					<a href={commentsUrl}>
						{$item.descendants ?? 0} Comments
					</a>
					<span>{timestamp}</span>
				</div>
			</div>
		{/if}
	</div>
</div>

<style>
	.loading {
		padding: 1rem;
	}
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
		flex-shrink: 0;
		text-align: right;
		font-weight: bold;
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
