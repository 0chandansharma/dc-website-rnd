// src/components/blog/BlogPostClient.tsx (Client Component)
"use client";

import React from "react";
import BlogPostLayout from "@/components/blog/BlogPostLayout";
import { Flowbite } from "flowbite-react";
import { customTheme } from "@/utils/theme";

// Client component for interactive elements
const BlogPostClient = ({ post, slug }) => {
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

export default BlogPostClient;