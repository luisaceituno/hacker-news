import { getItem } from "$lib/stores/item-store";
import type { PageLoadEvent } from "./$types";

export async function load({ fetch, params }: PageLoadEvent) {
    const id = params.item;
    return {
        item: getItem(+id, fetch),
    }
};
