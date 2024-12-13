import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders';
import type { SchemaContext } from 'astro:content';

const schedule = defineCollection({
  loader: file('src/content/schedule.yaml'),
  schema: ({ image }: SchemaContext) => z.object({
    id: z.string(),
    type: z.string(),
    description: z.string(),
    start: z.string(),
    end: z.string(),
    speaker: z.object({
      name: z.string(),
      role: z.string(),
      image: image(),
    }).nullable().optional(),
  }),
});

export const collections = { schedule }; 