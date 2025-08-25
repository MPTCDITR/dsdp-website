import { getCollection } from "astro:content";
import type { CollectionEntry } from "astro:content";

export async function getHeroPosts(
  lang: string,
): Promise<CollectionEntry<"hero">[]> {
  const allPosts = await getCollection("hero");
  return allPosts
    .filter((post) => post.slug.startsWith(lang + "/"))
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export function getPostLanguage(post: CollectionEntry<"hero">): string {
  return post.slug.split("/")[0];
}

export function getPostSlug(post: CollectionEntry<"hero">): string {
  return post.slug.split("/").slice(1).join("/");
}

export async function getHeroLatestPosts(
  lang: string,
): Promise<CollectionEntry<"hero">[]> {
  const allPosts = await getCollection("hero");
  return allPosts
    .filter((post) => post.slug.startsWith(lang + "/"))
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
    .slice(0, 3);
}

export async function getRemainingHeroPosts(
  lang: string,
): Promise<CollectionEntry<"hero">[]> {
  const allPosts = await getCollection("hero");
  return allPosts
    .filter((post) => post.slug.startsWith(lang + "/"))
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
    .slice(3);
}
