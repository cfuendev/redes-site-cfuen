import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import alpinejs from "@astrojs/alpinejs";
import lit from "@astrojs/lit";

// https://astro.build/config
export default defineConfig({
  site: "https://astroship.web3templates.com",
  integrations: [
    tailwind(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    mdx(),
    sitemap(),
    alpinejs(),
    lit(),
  ],
});
