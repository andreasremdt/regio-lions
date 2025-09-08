import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://regio-lions.com",
  prefetch: { prefetchAll: true },
  integrations: [tailwind({ applyBaseStyles: false }), sitemap()],
  output: "server",
  image: { domains: ["ik.imagekit.io"] },
  adapter: vercel(),
});
