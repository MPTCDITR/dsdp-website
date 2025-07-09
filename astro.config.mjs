// @ts-check
import react from "@astrojs/react";
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
      prefixDefaultLocale: false,
      redirectToDefaultLocale: true,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react()],
});
