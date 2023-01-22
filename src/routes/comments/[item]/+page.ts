import { getItem } from "$lib/stores/item-store";
import type { PageLoadEvent } from "./$types";

export async function load({ fetch, params }: PageLoadEvent) {
    const id = params.item;
    const item = await getItem(+id, fetch);

    Promise.allSettled((item.kids ?? []).map(kid => getItem(kid, fetch)));
    return {
        item,
    }
};
