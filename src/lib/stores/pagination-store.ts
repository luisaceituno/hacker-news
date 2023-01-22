import { writable } from "svelte/store";

const pageStore = writable(1);
const mainScrollPositionStore = writable(0);

export const page = {
    subscribe: pageStore.subscribe,
    increase: () => pageStore.update(c => c + 1)
}

export const mainScrollPosition = {
    subscribe: mainScrollPositionStore.subscribe,
    update: (pos: number) => mainScrollPositionStore.set(pos)
}