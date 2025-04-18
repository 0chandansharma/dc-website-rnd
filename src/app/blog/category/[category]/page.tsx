// src/app/blog/category/[category]/page.tsx
import React from "react";
import { blogPosts } from "@/data/blogData";
import CategoryPageClient from "@/components/blog/CategoryPageClient";

// This function tells Next.js which paths to pre-render (optional)
export async function generateStaticParams() {
  const categories = [...new Set(blogPosts.flatMap(post => post.categories))];
  return categories.map(category => ({
    category: category,
  }));
}

const CategoryPage = ({ params }: { params: { category: string } }) => {
  const { category } = params;
  const decodedCategory = decodeURIComponent(category);
  
  return <CategoryPageClient category={decodedCategory} />;
};

export default CategoryPage;