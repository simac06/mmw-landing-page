import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import icon from "astro-icon";
import sanity from "@sanity/astro";
import { loadEnv } from "vite";

import vercel from "@astrojs/vercel/serverless";

const env = loadEnv("", process.cwd(), "SANITY");

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    react(),
    icon(),
    sanity({
      projectId: env.SANITY_PROJECT_ID,
      dataset: env.SANITY_DATASET,
      apiVersion: env.SANITY_API_VER,
      useCdn: true,
    }),
  ],
  output: "server",
  adapter: vercel(),
  site: "https://mmw-landing-page.vercel.app",
});
