// src/components/blog/BlogPostClient.tsx
"use client";

import React, { useState, useEffect } from "react";
import BlogPostLayout from "@/components/blog/BlogPostLayout";
import { Flowbite } from "flowbite-react";
import { customTheme } from "@/utils/theme";
import { blogPosts } from "@/data/blogData";

interface BlogPostClientProps {
  post?: any;
  slug: string;
}

const BlogPostClient: React.FC<BlogPostClientProps> = ({ post, slug }) => {
  const [tocItems, setTocItems] = useState<{id: string, text: string}[]>([]);
  const [currentPost, setCurrentPost] = useState(post);
  
  // If post isn't passed as a prop, find it from the slug
  useEffect(() => {
    if (!currentPost && slug) {
      const foundPost = blogPosts.find(p => p.slug === slug);
      setCurrentPost(foundPost);
    }
  }, [currentPost, slug]);

  useEffect(() => {
    // Extract headings for table of contents when component mounts
    if (currentPost) {
      const extractHeadings = () => {
        const content = currentPost.content;
        const headings = [];
        // Find sections with IDs and h2 tags
        const regex = /<section id="([^"]+)"[\s\S]*?<h2[^>]*>([\s\S]*?)<\/h2>/g;
        let match;
        
        while ((match = regex.exec(content)) !== null) {
          // Extract the ID and clean the text of any HTML tags
          const id = match[1];
          const text = match[2].replace(/<[^>]*>/g, '').trim();
          
          headings.push({
            id,
            text
          });
        }
        
        setTocItems(headings);
      };
      
      extractHeadings();
    }
  }, [currentPost]);

  if (!currentPost) {
    return <div>Post not found</div>;
  }

  return (
    <Flowbite theme={{ theme: customTheme }}>
      <BlogPostLayout slug={slug}>
        {/* We're handling the content in BlogPostLayout instead */}
      </BlogPostLayout>
    </Flowbite>
  );
};

export default BlogPostClient;