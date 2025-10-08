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

export type Query = {
  id: string;
  name: string;
  email: string;
  problemType: 'epfo' | 'esic' | 'estamps' | 'notarisation' | 'income-tax' | 'gst' | 'other';
  description: string;
  receivedAt: string;
  status: 'new' | 'read' | 'archived';
}
