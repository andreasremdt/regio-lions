import { getCollection } from "astro:content";

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat("de-DE", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(date);
}

export async function getNews(limit = Infinity) {
  const news = await getCollection("news");

  return news
    .filter((entry) => Boolean(entry.body))
    .sort((a, b) => b.data.created_at.getTime() - a.data.created_at.getTime())
    .slice(0, limit);
}
