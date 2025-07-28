// Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// Define a schema for blog posts
const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    author: z.string().default('Strahinja Becagol'),
    image: z.string().optional(),
    tags: z.array(z.string()).default(['qa']),
    draft: z.boolean().default(false),
  }),
});

// Export a single `collections` object to register your collection(s)
export const collections = {
  'blog': blogCollection,
};
