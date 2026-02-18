// @ts-check

import mdx from "@astrojs/mdx";
import node from "@astrojs/node";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL || "http://localhost:4321",
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
  security: {
    allowedDomains: [
      {
        hostname: "**.bunny.run",
        protocol: "https",
      },
    ],
  },
  integrations: [mdx(), sitemap()],
});
