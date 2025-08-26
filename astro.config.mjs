// @ts-check
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import { loadEnv } from "vite";

const { PUBLIC_SITE_URL } = loadEnv(
  // @ts-ignore
  process.env.NODE_ENV,
  process.cwd(),
  "",
);

export default defineConfig({
  site: PUBLIC_SITE_URL || "https://dsdp.gov.kh",

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
