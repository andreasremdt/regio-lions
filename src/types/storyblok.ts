import type { ISbRichtext, SbBlokData } from "@storyblok/astro";

// Storyblok
export type StoryblokLink = {
  id: string;
  url: string;
  linktype: string;
  fieldtype: string;
  cached_url: string;
  target?: string;
  rel?: string;
};

export type StoryblokImage = {
  id: string;
  filename: string;
  alt?: string;
  name?: string;
  title?: string;
};

export type StoryblokBlock = {
  id: number;
  uuid: string;
  slug: string;
  path?: string;
  parent_id: number;
  name: string;
  is_folder: boolean;
  published: boolean;
  is_startpage: boolean;
  position: number;
  real_path: string;
};

// Generic
export type Fact = {
  heading: string;
  text: string;
};

export type Club = {
  name: string;
  image: StoryblokImage;
  url: StoryblokLink;
};

export type News = {
  title: string;
  description: string;
  content: ISbRichtext;
  gallery?: StoryblokImage[];
  image?: StoryblokImage;
};

// Components
export type AboutUs = {
  heading: string;
  content: ISbRichtext;
  facts?: Fact[];
};

export type ClubLinks = {
  heading: string;
  clubs?: Club[];
};

export type PageHeader = {
  heading: string;
  description: string;
};

export type PageContent = {
  content: ISbRichtext;
};

export type ContactForm = {
  button_text: string;
  success_heading: string;
  success_content: string;
  error_heading: string;
  error_content: string;
};

export type FeaturedImage = {
  image: StoryblokImage;
};

export type Hero = {
  headline: string;
  body: string;
  button_text?: string;
  button_link?: string;
  images?: StoryblokImage[];
};

export type LatestNews = {
  heading: string;
  description: string;
  news: {
    created_at: string;
    name: string;
    slug: string;
    full_slug: string;
    content: {
      title: string;
      image?: StoryblokImage;
    };
  }[];
  button_link: string;
  button_text: string;
};

export type OurGoals = {
  heading: string;
  description: string;
  goals: Fact[];
};

export type OurMeans = {
  heading: string;
  description: string;
  content: ISbRichtext;
  image: StoryblokImage;
};

export type Page = {
  body?: SbBlokData[];
};

export type MenuLink = {
  name: string;
  is_in_footer: boolean;
  link: StoryblokLink;
};
