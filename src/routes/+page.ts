import type { PageLoadEvent } from "./$types";

export async function load({ fetch }: PageLoadEvent) {
    return {
        top: await fetch("https://hacker-news.firebaseio.com/v0/topstories.json").then(r => r.json()) as number[]
    }
};