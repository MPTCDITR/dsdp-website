// @ts-check
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

const siteUrl = import.meta.env.SITE_URL || "https://dsdp.gov.kh";

export default defineConfig({
  site: siteUrl,

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
