// src/app/blog/[slug]/page.tsx
"use client";

import React from "react";
import { useParams } from "next/navigation";
import BlogPostLayout from "@/components/blog/BlogPostLayout";
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
const BlogPostPage = () => {
  const params = useParams();
  const slug = params.slug as string;
  
  // Find post content
  const post = blogPosts.find(post => post.slug === slug);
  
  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <Flowbite theme={{ theme: customTheme }}>
      <BlogPostLayout slug={slug}>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </BlogPostLayout>
    </Flowbite>
  );
};

export default BlogPostPage;