import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const artwork = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/artwork' }),
  schema: z.object({
    title: z.string(),
    medium: z.string(),
    year: z.number(),
    dimensions: z.string(),
    imagePath: z.string(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { artwork };
