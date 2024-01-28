import type { MenuLink, StoryblokBlock } from "@/types/storyblok";
import { useStoryblokApi } from "@storyblok/astro";
import { isPreview } from "@/lib/utils";

export async function getMenuLinks(type: "header" | "footer") {
  const storyblokApi = useStoryblokApi();

  const { data } = await storyblokApi.getStory("config", {
    version: isPreview() ? "draft" : "published",
    resolve_links: "url",
  });

  return (data.story.content.menu as MenuLink[]).filter((link) => {
    if (
      (type === "footer" && link.is_in_footer) ||
      (type === "header" && !link.is_in_footer)
    )
      return true;

    return false;
  });
}

export async function getNews(limit: number = Infinity) {
  const storyblokApi = useStoryblokApi();

  const { data } = await storyblokApi.getStories({
    starts_with: "news",
    is_startpage: false,
    version: isPreview() ? "draft" : "published",
  });

  return data.stories.slice(0, limit);
}

export async function getAllLinks() {
  const storyblokApi = useStoryblokApi();

  const { data } = await storyblokApi.get("cdn/links", {
    version: isPreview() ? "draft" : "published",
  });

  return Object.values(data.links) as StoryblokBlock[];
}

export async function getPage(slug?: string) {
  const storyblokApi = useStoryblokApi();

  const { data } = await storyblokApi.get(
    `cdn/stories/${slug === undefined ? "home" : slug}`,
    {
      version: isPreview() ? "draft" : "published",
    },
  );

  return data.story;
}
