import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind({ applyBaseStyles: false })],
  image: {
    domains: ["ik.imagekit.io"],
  },
});
