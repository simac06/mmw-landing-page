import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import icon from "astro-icon";
import sanity from "@sanity/astro";

import vercel from "@astrojs/vercel/serverless";
const SANITY_PROJECT_ID = import.meta.env.SANITY_PROJECT_ID;
const SANITY_DATASET = import.meta.env.SANITY_DATASET;
const SANITY_API_VER = import.meta.env.SANITY_API_VER;

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    react(),
    icon(),
    sanity({
      projectId: SANITY_PROJECT_ID,
      dataset: SANITY_DATASET,
      apiVersion: SANITY_API_VER,
      useCdn: true,
    }),
  ],
  output: "server",
  adapter: vercel(),
  site: "https://musicsmostwanted.com",
});
