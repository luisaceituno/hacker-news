import type { HackerNewsItem } from '$lib/types/hacker-news-item';
import { writable } from 'svelte/store';

export type HackerNewsItemIndex = { [id: number]: HackerNewsItem };

export const items: HackerNewsItemIndex = {};
export const maxScore = writable(0);

export async function getItem(id: number): Promise<HackerNewsItem> {
    if (!items[id]) {
        const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
        const item = await response.json()
        items[id] = item;
        updateMaxScore();
    }
    return items[id];
}

function updateMaxScore() {
    const scores = Object.values(items).map(it => it.score ?? 0);
    const max = Math.max(...scores);
    maxScore.set(max);
}