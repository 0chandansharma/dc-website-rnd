// src/types/blog.ts
export interface Author {
    name: string;
    title: string;
    avatar: string;
    bio: string;
    socials?: {
      platform: string;
      url: string;
    }[];
  }
  
  export interface BlogPost {
    title: string;
    slug: string;
    author: Author;
    date: string;
    excerpt: string;
    content: string;
    featuredImage: string;
    categories: string[];
    tags: string[];
    readTime: string;
  }