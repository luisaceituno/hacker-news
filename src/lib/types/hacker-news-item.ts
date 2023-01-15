export interface HackerNewsItem {
    id?: string,
    title?: string,
    type?: "story" | "comment",
    text?: string,
    kids?: string[],
    url?: string,
}