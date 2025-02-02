import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders';
import type { SchemaContext } from 'astro:content';

const schedule = defineCollection({
  loader: file('src/content/schedule.yaml'),
  schema: z.object({
    id: z.string(),
    type: z.string(),
    description: z.string(),
    details: z.string().optional(),
    start: z.string(),
    end: z.string(),
    speakers: z.array(z.string()).optional(),
  }),
});

const speakers = defineCollection({
  loader: file('src/content/speakers.yaml'),
  schema: ({ image }: SchemaContext) => z.object({
    id: z.string(),
    name: z.string(),
    role: z.string().optional(),
    image: image().optional(),
    bio: z.string().optional(),
  }),
});

export const collections = { schedule, speakers }; 