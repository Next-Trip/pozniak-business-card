import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const positionSchema = z.preprocess(
  (val) =>
    val === "" || val === null || val === undefined ? undefined : Number(val),
  z.number().optional(),
);

const eventCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/events" }),
  schema: z.object({
    position: positionSchema,
    title: z.string(),
    date: z.date(),
    button_text: z.string(),
    button_link: z.string(),
    description: z.string(),
  }),
});

const workshopCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/workshops" }),
  schema: z.object({
    position: positionSchema,
    title: z.string(),
    start_date: z.date(),
    end_date: z.date(),
    button_text: z.string(),
    button_link: z.string(),
    description: z.string(),
  }),
});

const pressCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/press" }),
  schema: z.object({
    position: positionSchema,
    quote: z.string(),
  }),
});

export const collections = {
  events: eventCollection,
  workshops: workshopCollection,
  press: pressCollection,
};
