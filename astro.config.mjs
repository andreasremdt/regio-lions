import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind({ applyBaseStyles: false })],
  output: "hybrid",
  image: {
    domains: ["ik.imagekit.io"],
  },
});
