import type { StoryblokLink } from "@/types/storyblok";

export function formatDate(date: Date | string) {
  const toFormat = typeof date === "string" ? new Date(date) : date;

  return new Intl.DateTimeFormat("de-DE", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(toFormat);
}

export function formatLink(link?: StoryblokLink | string) {
  if (!link) return;

  if (typeof link === "string") return link.startsWith("/") ? link : `/${link}`;

  if (link.linktype === "url") return link.cached_url;

  if (link.cached_url === "home") return "/";

  return `/${link.cached_url}`;
}

export function isPreview() {
  return import.meta.env.STORYBLOK_IS_PREVIEW === "true";
}
