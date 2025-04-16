// src/components/blog/BlogPostLayout.tsx
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import RelatedPosts from '@/components/blog/RelatedPosts';
import { blogPosts } from '@/data/blogData';

interface BlogPostLayoutProps {
  slug: string;
  children: React.ReactNode;
}

const BlogPostLayout: React.FC<BlogPostLayoutProps> = ({ slug, children }) => {
  // Find the current post data
  const post = blogPosts.find(post => post.slug === slug);
  
  if (!post) {
    return <div>Post not found</div>;
  }
  
  // Find related posts (same category, excluding current post)
  const relatedPosts = blogPosts
    .filter(p => 
      p.slug !== slug && 
      p.categories.some(cat => post.categories.includes(cat))
    )
    .slice(0, 3);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <>
      <Header />
      
      <main className="pt-20">
        {/* Progress bar at top of screen */}
        <motion.div 
          className="fixed top-0 left-0 h-1 bg-[#FE6623] z-50 origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
          style={{ 
            transformOrigin: "left",
            width: "100%" 
          }}
        />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gray-50 to-gray-100 py-20">
          <div className="container max-w-4xl mx-auto px-4">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="text-center"
            >
              <div className="text-sm text-gray-500 mt-10 flex items-center justify-center gap-2">
                <svg width="16" height="11" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.5" d="M6.5 11V12C6.5 12.4167 6.646 12.771 6.938 13.063C7.23 13.355 7.584 13.5007 8 13.5C8.416 13.4993 8.77033 13.3537 9.063 13.063C9.35567 12.7723 9.50133 12.418 9.5 12V11H10.5C10.9167 11 11.271 10.8543 11.563 10.563C11.855 10.2717 12.0007 9.91733 12 9.5C11.9993 9.08267 11.8537 8.72867 11.563 8.438C11.2723 8.14733 10.918 8.00133 10.5 8H9.5V7C9.5 6.58333 9.35433 6.22933 9.063 5.938C8.77167 5.64667 8.41733 5.50067 8 5.5C7.58267 5.49933 7.22867 5.64533 6.938 5.938C6.64733 6.23067 6.50133 6.58467 6.5 7V8H5.5C5.08333 8 4.72933 8.146 4.438 8.438C4.14667 8.73 4.00067 9.084 4 9.5C3.99933 9.916 4.14533 10.2703 4.438 10.563C4.73067 10.8557 5.08467 11.0013 5.5 11H6.5Z" fill="#131631" />
                </svg>
                {post.categories.map(category => (
                  <motion.span 
                    key={category}
                    className="text-[#FE6623] font-medium uppercase"
                    whileHover={{ scale: 1.05 }}
                  >
                    {category}
                  </motion.span>
                ))}
              </div>
              
              <h1 className="text-4xl md:text-5xl font-normal mb-6 text-black-400 leading-[1.2]">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <img 
                    src={post.author.avatar} 
                    alt={post.author.name} 
                    className="w-8 h-8 rounded-full" 
                  />
                  <span>{post.author.name}</span>
                </div>
                <span>|</span>
                <span>{post.date}</span>
                <span>|</span>
                <span className="text-[#5297D7]">{post.readTime}</span>
                <div className="ml-auto flex items-center gap-3">
                  <motion.button 
                    className="flex items-center gap-2 text-gray-600 hover:text-[#FE6623] transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    <svg width="18" height="20" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path opacity="0.5" d="M20 27C18.8889 27 17.9444 26.6063 17.1667 25.8188C16.3889 25.0312 16 24.075 16 22.95C16 22.815 16.0333 22.5 16.1 22.005L6.73333 16.47C6.37778 16.8075 5.96667 17.0721 5.5 17.2638C5.03333 17.4555 4.53333 17.5509 4 17.55C2.88889 17.55 1.94444 17.1562 1.16667 16.3687C0.388889 15.5813 0 14.625 0 13.5C0 12.375 0.388889 11.4187 1.16667 10.6313C1.94444 9.84375 2.88889 9.45 4 9.45C4.53333 9.45 5.03333 9.54585 5.5 9.73755C5.96667 9.92925 6.37778 10.1934 6.73333 10.53L16.1 4.995C16.0556 4.8375 16.028 4.68585 16.0173 4.54005C16.0067 4.39425 16.0009 4.2309 16 4.05C16 2.925 16.3889 1.96875 17.1667 1.18125C17.9444 0.39375 18.8889 0 20 0C21.1111 0 22.0556 0.39375 22.8333 1.18125C23.6111 1.96875 24 2.925 24 4.05C24 5.175 23.6111 6.13125 22.8333 6.91875C22.0556 7.70625 21.1111 8.1 20 8.1C19.4667 8.1 18.9667 8.00415 18.5 7.81245C18.0333 7.62075 17.6222 7.3566 17.2667 7.02L7.9 12.555C7.94445 12.7125 7.97244 12.8646 7.984 13.0113C7.99556 13.158 8.00089 13.3209 8 13.5C7.99911 13.6791 7.99378 13.8425 7.984 13.9901C7.97422 14.1377 7.94622 14.2893 7.9 14.445L17.2667 19.98C17.6222 19.6425 18.0333 19.3783 18.5 19.1875C18.9667 18.9967 19.4667 18.9009 20 18.9C21.1111 18.9 22.0556 19.2938 22.8333 20.0813C23.6111 20.8687 24 21.825 24 22.95C24 24.075 23.6111 25.0312 22.8333 25.8188C22.0556 26.6063 21.1111 27 20 27Z" fill="#131631" />
                    </svg>
                    Share
                  </motion.button>
                  <motion.button 
                    className="flex items-center gap-2 text-gray-600 hover:text-[#FE6623] transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    <svg width="18" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path opacity="0.5" d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z" fill="#131631" />
                    </svg>
                    Save
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Featured Image */}
        <motion.div 
          className="relative rounded-lg mb-10 max-w-4xl mx-auto my-10 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src={post.featuredImage} 
            alt={post.title} 
            className="w-full h-[350px] object-cover rounded-lg shadow-md" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg"></div>
        </motion.div>
        
        {/* Table of Contents - Left Side */}
        <div className="relative mx-auto max-w-4xl px-4">
          <motion.div 
            className="hidden md:block fixed left-0 top-32 w-[250px]"
            style={{
              position: 'sticky',
              alignSelf: 'flex-start',
              marginLeft: '-250px',
              height: '62px'
            }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div className="p-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm">
              <h3 className="text-[14px] font-medium text-[#525252] mb-4">Table of Contents:</h3>
              <ul className="space-y-3 text-[#525252]">
                {/* This would be dynamically generated based on headers */}
                <motion.li>
                  <motion.a
                    href="#section1"
                    className="flex items-start gap-2 text-[12px] font-normal transition-all duration-300 text-gray-600 hover:text-[#FE6623]"
                    whileHover={{ x: 5 }}
                  >
                    <motion.span>•</motion.span>
                    Introduction
                  </motion.a>
                </motion.li>
                {/* Add more sections as needed */}
              </ul>
            </div>
          </motion.div>
        
          {/* Article Content */}
          <article className="prose max-w-full mx-auto lg:space-y-2">
            {children}
          </article>
        </div>
        
        {/* Author section */}
        <motion.div 
          className="flex items-center gap-4 mt-8 mb-16 p-6 bg-gray-50 rounded-xl max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          whileHover={{ backgroundColor: "#FE6623/5" }}
        >
          <img 
            src={post.author.avatar} 
            alt={post.author.name} 
            className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-sm"
          />
          <div>
            <h4 className="text-lg font-medium">{post.author.name}</h4>
            <p className="text-gray-600">{post.author.title}</p>
            <div className="flex gap-2 mt-2">
              {post.author.socials?.map(social => (
                <a 
                  key={social.platform} 
                  href={social.url} 
                  className="text-gray-500 hover:text-[#FE6623] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
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
          </div>
        </motion.div>
      </main>
      
      {/* Related Posts Section */}
      {relatedPosts.length > 0 && <RelatedPosts posts={relatedPosts} />}
      
      <Footer />
    </>
  );
};

export default BlogPostLayout;