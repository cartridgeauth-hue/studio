import type { ImagePlaceholder } from './placeholder-images';

export type Author = {
  id: string;
  name: string;
  avatar: ImagePlaceholder;
  bio: string;
};

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: ImagePlaceholder;
  author: Author;
  publishedAt: string;
};
