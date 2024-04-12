import { defineCollection, reference, z } from "astro:content";
// 2. Define your collection(s)
const artistCollection = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    handle: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    socialMedia: z.object({
      twitter: z.string(),
      instagram: z.string(),
      tiktok: z.string(),
      youtube: z.string(),
    }),
  }),
});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  artist: artistCollection,
};
