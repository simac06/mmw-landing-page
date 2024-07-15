import { defineCollection, reference, z } from "astro:content";
import LinksTab from "../components/artistProfiles/links-tab/LinksTab.astro";
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
    links: z.array(
      z.object({
        type: z.string(),
        title: z.string(),
        releaseDate: z.string().optional(),
        presaveUrls: z
          .object({
            spotify: z.string().optional(), // Adjust these types if needed
            appleMusic: z.string().optional(),
            soundcloud: z.string().optional(),
            youtubeMusic: z.string().optional(),
            deezer: z.string().optional(),
            tidal: z.string().optional(),
            bandcamp: z.string().optional(),
            amazonMusic: z.string().optional(),
          })
          .optional(),
        image: z
          .object({
            src: z.string(),
            alt: z.string(),
          })
          .optional(),
      })
    ),
  }),
});

export const collections = {
  artist: artistCollection,
};
