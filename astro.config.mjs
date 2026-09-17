// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://veronikapozniak.com",

  prefetch: {
    prefetchAll: true,
    defaultStrategy: "hover",
  },

  vite: {
    plugins: [tailwindcss()],
    build: {
      cssCodeSplit: true,
      target: "es2022",
      chunkSizeWarningLimit: 1500,
    },
  },

  session: false,

  fonts: [
    {
      provider: fontProviders.google(),
      name: "EB Garamond",
      cssVariable: "--font-eb-garamond",
      subsets: ["latin", "cyrillic", "latin-ext"],
    },
    {
      provider: fontProviders.google(),
      name: "Inter",
      cssVariable: "--font-inter",
      subsets: ["latin", "cyrillic", "latin-ext"],
    },
  ],

  integrations: [
    icon({
      include: {
        mdi: [
          "instagram",
          "facebook",
          "youtube",
          "email-outline",
          "menu",
          "close",
          "arrow-forward",
          "chevron-left",
          "chevron-right",
          "radio",
          "newspaper-variant-outline",
          "download",
        ],
      },
    }),
    sitemap({
      filter: (page) => !page.includes("/admin"),
    }),
  ],

  i18n: {
    locales: ["uk", "en", "cs"],
    defaultLocale: "en",
  },

  adapter: cloudflare(),
});