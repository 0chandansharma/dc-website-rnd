// src/components/blog/BlogSidebar.tsx
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { blogPosts } from '@/data/blogData';

interface BlogSidebarProps {
  currentSlug?: string;
}

const BlogSidebar: React.FC<BlogSidebarProps> = ({ currentSlug }) => {
  // Get recent posts excluding current
  const recentPosts = blogPosts
    .filter(post => post.slug !== currentSlug)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);
  
  // Get unique categories
  const categories = [...new Set(blogPosts.flatMap(post => post.categories))];
  
  // Get unique tags
  const tags = [...new Set(blogPosts.flatMap(post => post.tags || []))];
  
  return (
    <div className="space-y-8">
      {/* Search */}
      <motion.div 
        className="bg-white rounded-xl p-6 shadow-sm"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h3 className="text-lg font-medium mb-4">Search</h3>
        <form action="/blog/search" method="get">
          <div className="relative">
            <input
              type="text"
              name="q"
              placeholder="Search articles..."
              className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#FE6623] focus:border-transparent"
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
          </div>
        </form>
      </motion.div>
      
      {/* Recent Posts */}
      <motion.div 
        className="bg-white rounded-xl p-6 shadow-sm"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <h3 className="text-lg font-medium mb-4">Recent Posts</h3>
        <div className="space-y-4">
          {recentPosts.map((post) => (
            <Link 
              key={post.slug} 
              href={`/blog/${post.slug}`}
              className="flex items-start group"
            >
              <img 
                src={post.featuredImage} 
                alt={post.title} 
                className="w-16 h-16 object-cover rounded-md mr-3 flex-shrink-0"
              />
              <div>
                <h4 className="text-sm font-medium group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h4>
                <span className="text-xs text-gray-500">{post.date}</span>
              </div>
            </Link>
          ))}
        </div>
      </motion.div>
      
      {/* Categories */}
      <motion.div 
        className="bg-white rounded-xl p-6 shadow-sm"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <h3 className="text-lg font-medium mb-4">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <Link 
              key={category}
              href={`/blog/category/${encodeURIComponent(category)}`}
              className="block py-1 hover:text-primary transition-colors"
            >
              {category}
            </Link>
          ))}
        </div>
      </motion.div>
      
      {/* Tags */}
      <motion.div 
        className="bg-white rounded-xl p-6 shadow-sm"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <h3 className="text-lg font-medium mb-4">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Link 
              key={tag}
              href={`/blog/tag/${encodeURIComponent(tag)}`}
              className="bg-gray-100 text-gray-700 px-3 py-1 text-xs rounded-full hover:bg-[#FE6623]/10 hover:text-primary transition-colors"
            >
              {tag}
            </Link>
          ))}
        </div>
      </motion.div>
      
      {/* Subscribe Box */}
      <motion.div 
        className="bg-[#FE6623]/10 rounded-xl p-6 shadow-sm"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        <h3 className="text-lg font-medium mb-2">Subscribe to Updates</h3>
        <p className="text-sm text-gray-600 mb-4">
          Get the latest insights delivered straight to your inbox.
        </p>
        <form className="space-y-3">
          <input
            type="email"
            placeholder="Your email address"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FE6623] focus:border-transparent"
            required
          />
          <button
            type="submit"
            className="w-full bg-[#FE6623] text-white py-2 rounded-md hover:bg-[#FE6623]/90 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default BlogSidebar;