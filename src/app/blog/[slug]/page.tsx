// src/app/blog/[slug]/page.tsx
import React from "react";
import { blogPosts } from "@/data/blogData";
import { Flowbite } from "flowbite-react";
import { customTheme } from "@/utils/theme";
import BlogPostClient from "@/components/blog/BlogPostClient";

// This function tells Next.js which paths to pre-render
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

const BlogPostPage = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  
  // Find post content
  const post = blogPosts.find(post => post.slug === slug);
  
  return <BlogPostClient post={post} slug={slug} />;
};

export default BlogPostPage;