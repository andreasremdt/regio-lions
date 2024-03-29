import { defineCollection, z } from "astro:content";

export let collections = {
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
      gallery: z
        .array(
          z.object({
            src: z.string(),
            alt: z.string().optional(),
          }),
        )
        .optional(),
    }),
  }),
  clubs: defineCollection({
    type: "data",
    schema: z.object({
      name: z.string(),
      clubs: z.array(
        z.object({
          name: z.string(),
          href: z.string(),
          image: z.string(),
        }),
      ),
    }),
  }),
};
