import { writable } from "svelte/store";

const { subscribe, update } = writable(1);

export default {
    subscribe,
    increase: () => update(c => c + 1)
}