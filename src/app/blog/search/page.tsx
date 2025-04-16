// src/app/blog/search/page.tsx
"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import BlogCard from "@/components/blog/BlogCard";
import { blogPosts } from "@/data/blogData";
import { Flowbite } from "flowbite-react";
import { customTheme } from "@/utils/theme";

const BlogSearchResults = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  
  const [searchResults, setSearchResults] = useState([]);
  
  useEffect(() => {
    if (query) {
      const lowercasedQuery = query.toLowerCase();
      
      const results = blogPosts.filter(post => 
        post.title.toLowerCase().includes(lowercasedQuery) ||
        post.excerpt.toLowerCase().includes(lowercasedQuery) ||
        post.categories.some(cat => cat.toLowerCase().includes(lowercasedQuery)) ||
        (post.tags && post.tags.some(tag => tag.toLowerCase().includes(lowercasedQuery))) ||
        post.author.name.toLowerCase().includes(lowercasedQuery)
      );
      
      // Sort by relevance - posts with the query in the title come first
      results.sort((a, b) => {
        const aInTitle = a.title.toLowerCase().includes(lowercasedQuery);
        const bInTitle = b.title.toLowerCase().includes(lowercasedQuery);
        
        if (aInTitle && !bInTitle) return -1;
        if (!aInTitle && bInTitle) return 1;
        return 0;
      });
      
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [query]);

  return (
    <Flowbite theme={{ theme: customTheme }}>
      <Header />
      
      <main className="pt-28 bg-gray-50">
        {/* Hero Section */}
        <section className="py-16 bg-white">
          <div className="container max-w-[90rem] mx-auto px-4">
            <motion.div 
              className="text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="bg-[#1316310D] rounded-[31px] py-2 px-4 text-sm text-[#000] inline-block mb-4">
                Search Results
              </span>
              
              <h1 className="text-4xl md:text-5xl font-normal mb-6">
                Results for "{query}"
              </h1>
              
              <p className="text-lg text-gray-600 mb-8">
                Found {searchResults.length} {searchResults.length === 1 ? 'article' : 'articles'} 
                matching your search
              </p>
              
              {/* Search form */}
              <form 
                className="max-w-lg mx-auto mb-8"
                action="/blog/search"
                method="get"
              >
                <div className="relative">
                  <input
                    type="text"
                    name="q"
                    defaultValue={query}
                    placeholder="Search again..."
                    className="w-full px-5 py-3 pl-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FE6623] focus:border-[#FE6623]"
                  />
                  <svg
                    className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  <button 
                    type="submit"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-[#FE6623] text-white p-1 rounded-full hover:bg-[#FE6623]/90"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </form>
              
              <Link 
                href="/blog" 
                className="inline-flex items-center text-primary hover:underline"
              >
                <svg className="mr-2 w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
                <span>Back to all posts</span>
              </Link>
            </motion.div>
          </div>
        </section>
        
        {/* Results Grid */}
        <section className="py-16">
          <div className="container max-w-[90rem] mx-auto px-4">
            <div className="mt-4">
              {searchResults.length === 0 ? (
                <motion.div 
                  className="text-center py-12 bg-white rounded-lg shadow-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <h2 className="text-2xl text-gray-700 mb-2">No posts found</h2>
                  <p className="text-gray-500">
                    We couldn't find any posts matching your search.
                  </p>
                  <Link 
                    href="/blog" 
                    className="mt-4 inline-block text-primary"
                  >
                    View all posts
                  </Link>
                </motion.div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {searchResults.map((post, index) => (
                    <BlogCard 
                      key={post.slug} 
                      post={post} 
                      index={index}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </Flowbite>
  );
};

export default BlogSearchResults;