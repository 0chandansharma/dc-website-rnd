// src/components/blog/BlogPostClient.tsx
"use client";

import React, { useEffect } from "react";
import BlogPostLayout from "@/components/blog/BlogPostLayout";
import { Flowbite } from "flowbite-react";
import { customTheme } from "@/utils/theme";

// Client component for interactive elements
const BlogPostClient = ({ post, slug }) => {
  useEffect(() => {
    // Process content headings on client-side for table of contents
    const processHeadings = () => {
      const headings = document.querySelectorAll('.blog-content h2');
      headings.forEach(heading => {
        if (!heading.id) {
          const id = heading.textContent
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-');
          heading.id = id;
        }
        
        // Add scroll margin to make sure headings don't get hidden under fixed header
        heading.classList.add('scroll-mt-32');
      });
    };
    
    processHeadings();
  }, []);

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