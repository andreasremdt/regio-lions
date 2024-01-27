import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import storyblok from "@storyblok/astro";
import basicSsl from "@vitejs/plugin-basic-ssl";
import { loadEnv } from "vite";

const env = loadEnv("", process.cwd(), "STORYBLOK");

export default defineConfig({
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true,
    },
  },
  integrations: [
    tailwind({ applyBaseStyles: false }),
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      components: {
        page: "components/page",
        article: "components/page",
        config: "components/config",
        hero: "components/hero",
        latest_news: "components/latest-news",
        all_news: "components/all-news",
        news_article: "components/news-article",
        page_header: "components/page-header",
        page_content: "components/page-content",
        club_links: "components/club-links",
        contact_form: "components/contact-form",
        short_introduction: "components/about-us",
        featured_image: "components/featured-image",
        our_goals: "components/our-goals",
        our_means: "components/our-means",
      },
      apiOptions: {
        region: "eu",
      },
    }),
  ],
});
