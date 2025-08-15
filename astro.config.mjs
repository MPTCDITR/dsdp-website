// @ts-check
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || "http://localhost:4321",

  server: {
    host: "::",
  },
  i18n: {
    defaultLocale: "km",
    locales: ["en", "km"],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    react(),
    sitemap({
      changefreq: "weekly",
      priority: 0.9,
      lastmod: new Date("2025-08-15"),
    }),
  ],
});
