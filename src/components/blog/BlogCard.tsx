// src/components/blog/BlogCard.tsx
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface BlogPost {
  title: string;
  slug: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  excerpt: string;
  featuredImage: string;
  categories: string[];
  readTime: string;
}

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, index }) => {
  return (
    <motion.div
      className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="relative h-48 md:h-56 overflow-hidden">
          <motion.img
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-700"
            whileHover={{ scale: 1.05 }}
          />
          {post.categories.length > 0 && (
            <div className="absolute top-4 left-4">
              <span className="bg-[#FE6623] text-white text-xs px-3 py-1 rounded-full">
                {post.categories[0]}
              </span>
            </div>
          )}
        </div>
      </Link>

      <div className="p-6">
        <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
          <div className="flex items-center">
            <img 
              src={post.author.avatar} 
              alt={post.author.name} 
              className="w-6 h-6 rounded-full mr-2" 
            />
            <span>{post.author.name}</span>
          </div>
          <div className="flex items-center gap-2">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </div>

        <Link href={`/blog/${post.slug}`} className="block group">
          <h3 className="text-xl font-medium mb-2 group-hover:text-[#FE6623] transition-colors">
            {post.title}
          </h3>
          <p className="text-gray-600 line-clamp-3 mb-4">
            {post.excerpt}
          </p>
          <div className="flex items-center font-medium text-[#FE6623]">
            <span>Read more</span>
            <svg 
              className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M14 5l7 7m0 0l-7 7m7-7H3" 
              />
            </svg>
          </div>
        </Link>
      </div>
    </motion.div>
  );
};

export default BlogCard;