import { defineCollection, z, reference } from 'astro:content';
import { glob } from 'astro/loaders';

const days = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/days' }),
  schema: z.object({
    name: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    timeSlots: z.array(z.object({
      type: z.string().nullable(),
      description: z.string().nullable(),
      speaker: reference('speakers').nullable(),
      start: z.string(),
      end: z.string(),
    })),
  }),
});

const speakers = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/speakers' }),
  schema: ({ image }) => z.object({
    name: z.string(),
    role: z.string(),
    image: image(),
  }),
});

export const collections = { days, speakers }; 