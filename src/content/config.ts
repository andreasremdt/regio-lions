import { defineCollection, z } from "astro:content";

export const collections = {
  news: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string(),
      excerpt: z.string(),
      image: z.string().optional(),
    }),
  }),
};
