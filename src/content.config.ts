import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const artwork = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/artwork' }),
  schema: z.object({
    title: z.string(),
    medium: z.string(),
    year: z.number(),
    dimensions: z.string(),
    status: z.enum(['Available', 'Sold', 'Private Collection']).default('Available'),
    imagePath: z.string(),
    featured: z.boolean().default(false),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    headline: z.string().optional(),
    portraitImage: z.string().optional(),
    intro: z.string().optional(),
    email: z.string().optional(),
    location: z.string().optional(),
    instagram: z.string().optional(),
  }),
});

export const collections = { artwork, pages };
