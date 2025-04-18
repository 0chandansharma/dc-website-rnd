// src/app/blog/tag/[tag]/page.tsx
import React from "react";
import { blogPosts } from "@/data/blogData";
import TagPageClient from "@/components/blog/TagPageClient";

// This function tells Next.js which paths to pre-render (optional)
export async function generateStaticParams() {
  const tags = [...new Set(blogPosts.flatMap(post => post.tags || []))];
  return tags.map(tag => ({
    tag: tag,
  }));
}

const TagPage = ({ params }: { params: { tag: string } }) => {
  const { tag } = params;
  const decodedTag = decodeURIComponent(tag);
  
  return <TagPageClient tag={decodedTag} />;
};

export default TagPage;