import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const resources = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/resources"}),
    schema: z.object({
        title: z.string(),
        author: z.string(),
    }),
})

export const collections = { resources };
