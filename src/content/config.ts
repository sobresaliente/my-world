// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';
// 2. Define your collection(s)
const articleCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    menu: z.array(z.object({ title: z.string(), name: z.string() }))
  })
  /* ... */
});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  articles: articleCollection
};
