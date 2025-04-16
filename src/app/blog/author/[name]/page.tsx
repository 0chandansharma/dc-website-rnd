// src/app/blog/author/[name]/page.tsx
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

const AuthorPage = () => {
  const params = useParams();
  const authorName = params.name as string;
  const decodedAuthorName = decodeURIComponent(authorName);
  
  const [authorPosts, setAuthorPosts] = useState([]);
  const [authorInfo, setAuthorInfo] = useState(null);
  
  // Filter posts based on author
  useEffect(() => {
    const filteredPosts = blogPosts.filter(post => 
      post.author.name.toLowerCase() === decodedAuthorName.toLowerCase()
    );
    
    if (filteredPosts.length > 0) {
      setAuthorInfo(filteredPosts[0].author);
    }
    
    setAuthorPosts(filteredPosts);
  }, [decodedAuthorName]);

  return (
    <Flowbite theme={{ theme: customTheme }}>
      <Header />
      
      <main className="pt-28 bg-gray-50">
        {/* Author Profile Section */}
        <section className="py-16 bg-white">
          <div className="container max-w-[90rem] mx-auto px-4">
            <motion.div 
              className="max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              {authorInfo && (
                <>
                  <div className="mb-6 flex justify-center">
                    <motion.img 
                      src={authorInfo.avatar} 
                      alt={authorInfo.name}
                      className="w-24 h-24 rounded-full object-cover border-2 border-[#FE6623]/20" 
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                  
                  <span className="bg-[#1316310D] rounded-[31px] py-2 px-4 text-sm text-[#000] inline-block mb-4">
                    Author
                  </span>
                  
                  <h1 className="text-4xl md:text-5xl font-normal mb-4">
                    {authorInfo.name}
                  </h1>
                  
                  {authorInfo.title && (
                    <p className="text-xl text-primary mb-6">{authorInfo.title}</p>
                  )}
                  
                  {authorInfo.bio && (
                    <p className="text-lg text-gray-600 mb-8">{authorInfo.bio}</p>
                  )}
                  
                  {authorInfo.socials && authorInfo.socials.length > 0 && (
                    <div className="flex justify-center gap-4 mb-6">
                      {authorInfo.socials.map(social => (
                        <a 
                          key={social.platform} 
                          href={social.url} 
                          className="text-gray-500 hover:text-primary transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            {social.platform === "linkedin" && (
                              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            )}
                            {social.platform === "twitter" && (
                              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                            )}
                          </svg>
                        </a>
                      ))}
                    </div>
                  )}
                  
                  <Link 
                    href="/blog" 
                    className="inline-flex items-center text-primary hover:underline"
                  >
                    <svg className="mr-2 w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                    <span>Back to all posts</span>
                  </Link>
                </>
              )}
            </motion.div>
          </div>
        </section>
        
        {/* Author's Posts Section */}
        <section className="py-16">
          <div className="container max-w-[90rem] mx-auto px-4">
            <motion.h2 
              className="text-3xl font-normal mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Articles by <span className="heading-orange">{decodedAuthorName}</span>
            </motion.h2>
            
            <div className="mt-4">
              {authorPosts.length === 0 ? (
                <motion.div 
                  className="text-center py-12 bg-white rounded-lg shadow-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <h2 className="text-2xl text-gray-700 mb-2">No posts found</h2>
                  <p className="text-gray-500">
                    This author hasn't published any posts yet.
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
                  {authorPosts.map((post, index) => (
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

export default AuthorPage;