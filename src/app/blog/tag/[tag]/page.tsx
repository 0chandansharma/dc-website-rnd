// src/app/blog/tag/[tag]/page.tsx
"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import BlogCard from "@/components/blog/BlogCard";
import { blogPosts } from "@/data/blogData";
import { Flowbite } from "flowbite-react";
import { customTheme } from "@/utils/theme";
import Link from "next/link";

const TagPage = () => {
  const params = useParams();
  const tag = params.tag as string;
  const decodedTag = decodeURIComponent(tag);
  
  const [filteredPosts, setFilteredPosts] = useState([]);
  
  // Filter posts based on tag
  useEffect(() => {
    const tagPosts = blogPosts.filter(post => 
      post.tags && post.tags.some(t => 
        t.toLowerCase() === decodedTag.toLowerCase()
      )
    );
    
    setFilteredPosts(tagPosts);
  }, [decodedTag]);

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
                Topic
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal mb-6">
                <span className="heading-orange">{decodedTag}</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Explore our latest insights and articles about {decodedTag}
                </p>
              <Link 
                href="/blog" 
                className="inline-flex items-center text-[#FE6623] hover:underline"
              >
                <svg className="mr-2 w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
                <span>Back to all posts</span>
              </Link>
            </motion.div>
          </div>
        </section>
        
        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="container max-w-[90rem] mx-auto px-4">
            <div className="mt-4">
              {filteredPosts.length === 0 ? (
                <motion.div 
                  className="text-center py-12 bg-white rounded-lg shadow-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <h2 className="text-2xl text-gray-700 mb-2">No posts found</h2>
                  <p className="text-gray-500">
                    There are no posts with this tag yet.
                  </p>
                  <Link 
                    href="/blog" 
                    className="mt-4 inline-block text-[#FE6623]"
                  >
                    View all posts
                  </Link>
                </motion.div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPosts.map((post, index) => (
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

export default TagPage;