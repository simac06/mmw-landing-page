import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import icon from "astro-icon";
import sanity from "@sanity/astro";
import { loadEnv } from "vite";
import dotenv from "dotenv";

import vercel from "@astrojs/vercel/serverless";

dotenv.config();

export default defineConfig({
  integrations: [
    tailwind(),
    react(),
    icon(),
    sanity({
      projectId: process.env.SANITY_PROJECT_ID,
      dataset: process.env.SANITY_DATASET,
      apiVersion: process.env.SANITY_API_VER,
      useCdn: false,
    }),
  ],
  output: "server",
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
  vite: {
    define: {
      "import.meta.env.SANITY_STUDIO_API_PROJECT_ID": JSON.stringify(
        process.env.SANITY_PROJECT_ID
      ),
      "import.meta.env.SANITY_STUDIO_API_DATASET": JSON.stringify(
        process.env.SANITY_DATASET
      ),
    },
  },
  site: "https://mmw-landing-page.vercel.app",
});
