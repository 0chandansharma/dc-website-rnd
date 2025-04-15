// src/components/blog/RelatedPosts.tsx
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

interface RelatedPostsProps {
  posts: BlogPost[];
}

const RelatedPosts: React.FC<RelatedPostsProps> = ({ posts }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container max-w-[90rem] mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-2xl md:text-3xl font-normal mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Related <span className="heading-orange">Posts</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {posts.map((post, index) => (
              <motion.div 
                key={post.slug}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="h-40 overflow-hidden">
                    <img 
                      src={post.featuredImage}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-medium mb-2 hover:text-[#FE6623] transition-colors">
                      {post.title}
                    </h3>
                    <div className="flex items-center text-sm text-gray-500">
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedPosts;