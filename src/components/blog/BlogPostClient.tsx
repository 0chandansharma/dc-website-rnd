// src/components/blog/BlogPostClient.tsx
"use client";

import React, { useEffect } from "react";
import BlogPostLayout from "@/components/blog/BlogPostLayout";
import { Flowbite } from "flowbite-react";
import { customTheme } from "@/utils/theme";

// Client component for interactive elements
useEffect(() => {
  // Extract headings for table of contents when component mounts
  if (post) {
    const extractHeadings = () => {
      // The issue is likely in this regex pattern
      // Let's improve it to better match your HTML structure
      const content = post.content;
      const headings = [];
      const regex = /<h2[^>]*>(.+?)<\/h2>/g;
      let match;
      
      while ((match = regex.exec(content)) !== null) {
        // Extract the text content from the heading
        const text = match[1].replace(/<[^>]*>/g, '');
        // Create an ID from the text (slug-friendly)
        const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        
        headings.push({
          id,
          text
        });
      }
      
      setTocItems(headings);
    };
    
    extractHeadings();
  }
}, [post]);

  if (!post) {
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