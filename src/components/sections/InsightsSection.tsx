// src/components/sections/InsightsSection.tsx
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { blogPosts } from "@/data/blogData";
import Button from "@/components/common/Button";

const InsightsSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  
  // Get the most recent posts
  const recentPosts = [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);
  
  // Get featured post (first most recent)
  const featuredPost = recentPosts[0];
  // Get secondary posts
  const secondaryPosts = recentPosts.slice(1, 3);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section className="[padding-top:_clamp(53px,4vw,193px)] [padding-bottom:_clamp(47px,4vw,196px)] latest-insights bg-gradient-to-b from-white to-gray-50">
      <div className="container max-w-[90rem] mx-auto px-[10px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <div className="text-left">
            <motion.span 
              className="bg-[#1316310D] rounded-[31px] py-[8px] px-[16px] text-[13px] text-[#000] inline-block"
              variants={cardVariants}
            >
              Newsroom
            </motion.span>
            
            <motion.h2
              className="[font-size:_clamp(17px,2vw,48px)] text-[#000000CC] leading-[1.3] font-normal [margin-top:_clamp(12px,2vw,28px)] [margin-bottom:_clamp(15px,2vw,26px)]"
              variants={cardVariants}
            >
              <span>Latest</span>{" "}
              <span className="heading-orange">Insights</span>
            </motion.h2>
            
            <motion.p
              className="text-[#0000007D] [font-size:_clamp(8px,2vw,20px)] max-w-2xl"
              variants={cardVariants}
            >
              Stay up-to-date with the latest trends, research findings, and industry insights from our team of experts.
            </motion.p>
          </div>
          
          <div className="mt-[30px] md:mt-[60px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Featured Post - Large Card */}
              <motion.div
                className="relative overflow-hidden rounded-xl shadow-md group h-[500px]"
                variants={cardVariants}
                onHoverStart={() => setHoveredCard('featured')}
                onHoverEnd={() => setHoveredCard(null)}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
              >
                <Link href={`/blog/${featuredPost.slug}`} className="block h-full">
                  <div className="relative h-full w-full overflow-hidden">
                    <motion.img 
                      src={featuredPost.featuredImage} 
                      className="w-full h-full object-cover"
                      alt={featuredPost.title}
                      initial={{ scale: 1 }}
                      animate={{ scale: hoveredCard === 'featured' ? 1.05 : 1 }}
                      transition={{ duration: 0.4 }}
                    />
                    
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                    
                    <motion.div 
                      className="absolute w-full bottom-0 left-0 right-0 p-8 z-10"
                      initial={{ y: 10 }}
                      whileHover={{ y: 0 }}
                    >
                      <div className="flex flex-col">
                        <div className="flex items-center mb-2">
                          <span className="text-white/80 text-sm mr-2">
                            {featuredPost.date}
                          </span>
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FE6623]"></span>
                          <span className="text-white/80 text-sm ml-2">
                            {featuredPost.categories[0]}
                          </span>
                        </div>
                        
                        <h3 className="text-white text-2xl md:text-3xl font-medium mb-4">
                          {featuredPost.title}
                        </h3>
                        
                        <motion.p 
                          className="text-white/80 text-base mb-6 line-clamp-3"
                          initial={{ opacity: 0.7 }}
                          whileHover={{ opacity: 1 }}
                        >
                          {featuredPost.excerpt}
                        </motion.p>
                        
                        <div className="flex items-center gap-3">
                          <img 
                            src={featuredPost.author.avatar} 
                            alt={featuredPost.author.name} 
                            className="w-10 h-10 rounded-full object-cover border border-white/20" 
                          />
                          <div>
                            <span className="text-white text-sm block">{featuredPost.author.name}</span>
                            <span className="text-white/70 text-xs">{featuredPost.readTime}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </Link>
              </motion.div>
              
              {/* Secondary Posts - Vertical Stack */}
              <div className="flex flex-col space-y-8">
                {secondaryPosts.map((post, index) => (
                  <motion.div 
                    key={post.slug}
                    className="relative overflow-hidden rounded-xl shadow-md group h-[230px]"
                    variants={cardVariants}
                    onHoverStart={() => setHoveredCard(post.slug)}
                    onHoverEnd={() => setHoveredCard(null)}
                    whileHover={{ 
                      y: -5,
                      boxShadow: "0 15px 30px -10px rgba(0, 0, 0, 0.3)"
                    }}
                  >
                    <Link href={`/blog/${post.slug}`} className="block h-full">
                      <div className="relative h-full w-full overflow-hidden">
                        <motion.img 
                          src={post.featuredImage} 
                          className="w-full h-full object-cover"
                          alt={post.title}
                          initial={{ scale: 1 }}
                          animate={{ scale: hoveredCard === post.slug ? 1.05 : 1 }}
                          transition={{ duration: 0.4 }}
                        />
                        
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                        
                        <motion.div 
                          className="absolute w-full bottom-0 left-0 right-0 p-6 z-10"
                          initial={{ y: 5 }}
                          whileHover={{ y: 0 }}
                        >
                          <div className="flex flex-col">
                            <div className="flex items-center mb-1">
                              <span className="text-white/80 text-xs mr-2">
                                {post.date}
                              </span>
                              <span className="w-1 h-1 rounded-full bg-[#FE6623]"></span>
                              <span className="text-white/80 text-xs ml-2">
                                {post.categories[0]}
                              </span>
                            </div>
                            
                            <h3 className="text-white text-xl font-medium mb-1">
                              {post.title}
                            </h3>
                            
                            <motion.p 
                              className="text-white/80 text-sm mb-3 line-clamp-2"
                              initial={{ opacity: 0 }}
                              whileHover={{ opacity: 1 }}
                            >
                              {post.excerpt}
                            </motion.p>
                            
                            <motion.div 
                              className="text-primary text-sm font-medium"
                              whileHover={{ x: 5 }}
                            >
                              Read More →
                            </motion.div>
                          </div>
                        </motion.div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
              
            {/* View more and Newsletter sections */}
            <div className="mt-[30px] lg:mt-[64px] grid md:grid-cols-2 gap-8">
              {/* View more button */}
              <motion.div 
                className="flex flex-col justify-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Button 
                  text="Explore All Insights"
                  variant="outline"
                  size="md"
                  href="/blog"
                  className="text-primary border-primary hover:bg-primary-50 px-6"
                  icon={
                    <svg 
                      className="w-5 h-5" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  }
                />

                
                <div className="grid grid-cols-3 gap-4 mt-8">
                  {Object.keys([...new Set(blogPosts.flatMap(post => post.categories))].reduce((acc, category) => {
                    if (acc.length < 6) acc.push(category);
                    return acc;
                  }, [])).map((index) => {
                    const category = [...new Set(blogPosts.flatMap(post => post.categories))][index];
                    return (
                      <motion.Link
                        key={category}
                        href={`/blog?category=${category}`}
                        className="bg-white text-gray-700 py-2 px-4 rounded-full text-sm text-center border border-gray-200 hover:border-[#FE6623] hover:text-primary cursor-pointer transition-colors"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + (Number(index) * 0.05) }}
                        whileHover={{ y: -3 }}
                      >
                        {category}
                      </motion.Link>
                    );
                  })}
                </div>
              </motion.div>
              
              {/* Newsletter subscription */}
              <motion.div 
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <h3 className="text-xl font-medium mb-4">Subscribe to Our Newsletter</h3>
                <p className="text-gray-600 mb-6">
                  Get the latest insights delivered directly to your inbox. No spam, just valuable content.
                </p>
                
                <form className="space-y-4">
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full py-3 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FE6623]/50 focus:border-[#FE6623]"
                      required
                    />
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      id="privacy-policy"
                      name="privacy-policy"
                      type="checkbox"
                      className="h-4 w-4 text-primary focus:ring-[#FE6623]"
                      required
                    />
                    <label htmlFor="privacy-policy" className="ml-2 block text-sm text-gray-600">
                      I agree to the <Link href="#" className="text-primary hover:underline">privacy policy</Link>
                    </label>
                  </div>
                  
                  <Button
                    text="Subscribe Now"
                    variant="primary"
                    size="md"
                    type="submit"
                    className="px-6" // Reduced padding
                  />
                </form>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InsightsSection;