import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.date(),
      author: z.string(),
      image: image(),
      tags: z.array(z.string()),
    }),
});

const hero = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.date(),
      author: z.string(),
      image: image(), // builds the asset and gives .src
      tags: z.array(z.string()).default([]),
    }),
});

export const collections = {
  blog,
  hero,
};
