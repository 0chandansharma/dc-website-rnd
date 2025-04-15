import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionHeading from "@/components/common/SectionHeading";

const InsightsSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  
  // Sample blog posts with more complete data
  const blogPosts = [
    {
      id: 1,
      image: "/image/Insights-1.png",
      date: "13th December 2024",
      category: "Blog",
      title: "Enhancing Cancer Care",
      excerpt: "Exploring how AI-driven solutions are revolutionizing cancer treatment and care management for better patient outcomes.",
      link: "#"
    },
    {
      id: 2,
      image: "/image/Insights-2.png",
      date: "11th December 2024",
      category: "Blog",
      title: "Streamlining Healthcare",
      excerpt: "Discover how AI technologies are improving healthcare operations, reducing costs, and enhancing patient experiences.",
      link: "#"
    }
  ];

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

  const overlayVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 }
    },
    hover: {
      y: -5,
      transition: { duration: 0.2 }
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
          
        <div className="mt-[30px] md:mt-[100px]">
            <div className="basis-full">
              <motion.div 
                className="grid md:grid-cols-2 gap-8"
                variants={containerVariants}
              >
                {blogPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    className="relative overflow-hidden rounded-[24px] shadow-md group"
                    variants={cardVariants}
                    onHoverStart={() => setHoveredCard(post.id)}
                    onHoverEnd={() => setHoveredCard(null)}
                    whileHover={{ 
                      y: -10,
                      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                    }}
                  >
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <motion.img 
                        src={post.image} 
                        className="w-full h-full object-cover"
                        alt={post.title}
                        initial={{ scale: 1 }}
                        animate={{ scale: hoveredCard === post.id ? 1.05 : 1 }}
                        transition={{ duration: 0.4 }}
                      />
                      
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                      
                      <motion.div 
                        className="absolute w-full bottom-0 left-0 right-0 p-6 z-10"
                        variants={overlayVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                      >
                        <div className="flex flex-col">
                          <div className="flex items-center mb-2">
                            <span className="text-white/80 text-sm mr-2">
                              {post.date}
                            </span>
                            <span className="w-1.5 h-1.5 rounded-full bg-[#FE6623]"></span>
                            <span className="text-white/80 text-sm ml-2">
                              {post.category}
                            </span>
                          </div>
                          
                          <h3 className="text-white text-xl md:text-2xl font-medium mb-3">
                            {post.title}
                          </h3>
                          
                          <motion.p 
                            className="text-white/80 text-sm mb-4 max-w-md hidden md:block"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ 
                              opacity: hoveredCard === post.id ? 1 : 0,
                              height: hoveredCard === post.id ? "auto" : 0
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            {post.excerpt}
                          </motion.p>
                          
                          <motion.div 
                            className="flex justify-between items-center mt-auto"
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <Link 
                              href={post.link}
                              className="group inline-flex items-center text-white hover:text-[#FE6623] transition-colors"
                            >
                              <Link href="/blog/article-slug" 
                               className="mr-2">Read Article
                              </Link>
                              <motion.svg 
                                className="w-5 h-5" 
                                initial={{ x: 0 }}
                                animate={{ x: hoveredCard === post.id ? 5 : 0 }}
                                transition={{ duration: 0.2 }}
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                              </motion.svg>
                            </Link>
                            
                            <motion.div 
                              className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center"
                              whileHover={{ scale: 1.1, backgroundColor: "rgba(254, 102, 35, 0.2)" }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <motion.svg 
                                className="w-5 h-5 text-white" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                                whileHover={{ rotate: 15 }}
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                              </motion.svg>
                            </motion.div>
                          </motion.div>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              
              {/* More posts and newsletter section */}
              <div className="mt-[30px] lg:mt-[64px] grid md:grid-cols-2 gap-8">
                {/* View more button */}
                <motion.div 
                  className="flex flex-col justify-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Link
                      href="#"
                      className="inline-flex items-center justify-center bg-[#fe6623] text-white py-3 px-8 rounded-full hover:bg-[#fe6623]/90 transition-all shadow-sm hover:shadow-md"
                    >
                      <span className="mr-2">View More Insights</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </motion.div>
                  
                  <div className="grid grid-cols-3 gap-4 mt-8">
                    {['AI', 'Healthcare', 'FinTech', 'Security', 'Data', 'Innovation'].map((tag, index) => (
                      <motion.span
                        key={tag}
                        className="bg-white text-gray-700 py-2 px-4 rounded-full text-sm text-center border border-gray-200 hover:border-[#FE6623] hover:text-[#FE6623] cursor-pointer transition-colors"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + (index * 0.05) }}
                        whileHover={{ y: -3 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
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
                        className="h-4 w-4 text-[#FE6623] focus:ring-[#FE6623]"
                        required
                      />
                      <label htmlFor="privacy-policy" className="ml-2 block text-sm text-gray-600">
                        I agree to the <a href="#" className="text-[#FE6623] hover:underline">privacy policy</a>
                      </label>
                    </div>
                    
                    <motion.button
                      type="submit"
                      className="w-full bg-[#FE6623] text-white py-3 rounded-lg hover:bg-[#FE6623]/90 transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Subscribe Now
                    </motion.button>
                  </form>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InsightsSection;