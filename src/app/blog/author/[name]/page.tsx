// src/app/blog/author/[name]/page.tsx
import React from "react";
import { blogPosts } from "@/data/blogData";
import AuthorPageClient from "@/components/blog/AuthorPageClient";

// Optional: Generate static params
export async function generateStaticParams() {
  const authors = [...new Set(blogPosts.map(post => post.author.name))];
  return authors.map(name => ({
    name: name,
  }));
}

const AuthorPage = ({ params }: { params: { name: string } }) => {
  const { name } = params;
  const decodedAuthorName = decodeURIComponent(name);
  
  return <AuthorPageClient authorName={decodedAuthorName} />;
};

export default AuthorPage;