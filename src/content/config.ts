// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';
// 2. Define your collection(s)
const articleCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    menu: z.array(z.object({ title: z.string(), link: z.string() })),
    titlePage: z.string(),
    date: z.string()
  })
});

const digestCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    titlePage: z.string(),
    dates: z.string(),
    month: z.string()
  })
});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  articles: articleCollection,
  digests: digestCollection
};
