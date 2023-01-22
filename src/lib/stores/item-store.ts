import type { HackerNewsItem } from '$lib/types/hacker-news-item';
import { derived, writable, type Readable } from 'svelte/store';

export const items = writable<{ [id: number]: HackerNewsItem }>({});
export const maxScore = derived(items, items => Math.max(...Object.values(items).map(i => i.score ?? 0)));

export function getItem(id: number, svelteFetch: typeof fetch = fetch): Readable<HackerNewsItem> {
    items.subscribe(idx => {
        if (!idx[id]) fetchItem(id, svelteFetch);
    })();
    return derived(items, idx => idx[id]);
}

async function fetchItem(id: number, svelteFetch: typeof fetch) {
    const response = await svelteFetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
    const item = await response.json();
    items.update(items => ({ ...items, [id]: item }));
}
