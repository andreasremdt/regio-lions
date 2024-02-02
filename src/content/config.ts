import { defineCollection, z } from "astro:content";

export const collections = {
  news: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string(),
      excerpt: z.string(),
      published: z.boolean(),
      created_at: z.date(),
      image: z
        .object({
          src: z.string(),
          alt: z.string().optional(),
          caption: z.string().optional(),
        })
        .optional(),
    }),
  }),
};
