// src/components/blog/BlogPageClient.tsx
"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import BlogCard from "@/components/blog/BlogCard";
import BlogFilter from "@/components/blog/BlogFilter";
import { blogPosts } from "@/data/blogData";
import { Flowbite } from "flowbite-react";
import { customTheme } from "@/utils/theme";

const BlogPageClient = () => {
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  
  // Filter posts based on category and search term
  useEffect(() => {
    let result = [...blogPosts];
    
    if (selectedCategory !== "all") {
      result = result.filter(post => 
        post.categories.includes(selectedCategory)
      );
    }
    
    if (searchTerm) {
      const lowercasedTerm = searchTerm.toLowerCase();
      result = result.filter(post =>
        post.title.toLowerCase().includes(lowercasedTerm) ||
        post.excerpt.toLowerCase().includes(lowercasedTerm) ||
        post.categories.some(cat => cat.toLowerCase().includes(lowercasedTerm))
      );
    }
    
    setFilteredPosts(result);
    setCurrentPage(1); // Reset to first page when filtering
  }, [selectedCategory, searchTerm]);

  // Get current posts for pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

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
                Our Blog
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal mb-6">
                Insights & <span className="heading-orange">Perspectives</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Explore our latest thoughts, innovations, and expertise on AI, machine learning, and digital transformation.
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Blog Filters & Posts */}
        <section className="py-16">
          <div className="container max-w-[90rem] mx-auto px-4">
            {/* Filters */}
            <BlogFilter 
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
            
            {/* Blog Posts Grid */}
            <div className="mt-12">
              {filteredPosts.length === 0 ? (
                <motion.div 
                  className="text-center py-12 bg-white rounded-lg shadow-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <h2 className="text-2xl text-gray-700 mb-2">No posts found</h2>
                  <p className="text-gray-500">
                    Try adjusting your search or filter to find what you're looking for.
                  </p>
                  <button 
                    className="mt-4 text-primary"
                    onClick={() => {
                      setSelectedCategory("all");
                      setSearchTerm("");
                    }}
                  >
                    Reset Filters
                  </button>
                </motion.div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {currentPosts.map((post, index) => (
                    <BlogCard 
                      key={post.slug} 
                      post={post} 
                      index={index}
                    />
                  ))}
                </div>
              )}
            </div>
            
            {/* Pagination */}
            {filteredPosts.length > 0 && (
              <div className="mt-16 flex justify-center">
                <nav aria-label="Blog pagination">
                  <ul className="inline-flex items-center -space-x-px">
                    <li>
                      <button
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className={`block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 ${
                          currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                      >
                        <span className="sr-only">Previous</span>
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                      </button>
                    </li>

                    {Array.from({ length: totalPages }).map((_, i) => (
                      <li key={i + 1}>
                        <button
                          onClick={() => setCurrentPage(i + 1)}
                          aria-current={currentPage === i + 1 ? "page" : undefined}
                          className={`px-3 py-2 leading-tight border ${
                            currentPage === i + 1
                              ? 'z-10 text-white border-[#FE6623] bg-[#FE6623] hover:bg-[#FE6623]/90'
                              : 'text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700'
                          }`}
                        >
                          {i + 1}
                        </button>
                      </li>
                    ))}

                    <li>
                      <button
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className={`block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 ${
                          currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                      >
                        <span className="sr-only">Next</span>
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                        </svg>
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>
            )}
            
            {/* Subscribe to Blog */}
            <motion.div 
              className="mt-20 bg-white rounded-xl p-8 shadow-sm max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-normal mb-4">
                Stay Updated with Our <span className="heading-orange">Latest</span> Posts
              </h2>
              <p className="text-gray-600 mb-6">
                Subscribe to our newsletter and never miss new blog posts, updates, and insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 justify-center">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#FE6623] focus:border-transparent max-w-xs sm:max-w-md w-full"
                />
                <motion.button 
                  className="bg-[#FE6623] text-white rounded-full px-6 py-3 hover:bg-[#FE6623]/90 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </Flowbite>
  );
};

export default BlogPageClient;