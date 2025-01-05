import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders';
import type { SchemaContext } from 'astro:content';

// Base speaker schema without ID for use in schedule
const createSpeakerSchema = ({ image }: SchemaContext) => z.object({
  name: z.string(),
  role: z.string().optional(),
  image: image(),
  bio: z.string().optional(),
});

const schedule = defineCollection({
  loader: file('src/content/schedule.yaml'),
  schema: ({ image }: SchemaContext) => z.object({
    id: z.string(),
    type: z.string(),
    description: z.string(),
    start: z.string(),
    end: z.string(),
    speakers: z.array(createSpeakerSchema({ image })).nullable().optional(),
  }),
});

const speakers = defineCollection({
  loader: file('src/content/speakers.yaml'),
  schema: ({ image }: SchemaContext) => createSpeakerSchema({ image }).extend({
    id: z.string(),
  }),});

export const collections = { schedule, speakers }; 