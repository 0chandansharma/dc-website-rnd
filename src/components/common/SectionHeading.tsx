// src/components/common/SectionHeading.tsx
import React from "react";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  tag?: string;
  title: React.ReactNode;
  subtitle?: string;
  className?: string;
  alignment?: "left" | "center" | "right";
}

const SectionHeading = ({ 
  tag, 
  title, 
  subtitle, 
  className = "",
  alignment = "left" 
}: SectionHeadingProps) => {
  
  const getAlignmentClasses = () => {
    switch (alignment) {
      case "center":
        return "text-center";
      case "right":
        return "text-right";
      default:
        return "text-left";
    }
  };
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className={`${getAlignmentClasses()} ${className}`}
    >
      {tag && (
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="inline-block bg-black/5 rounded-full py-2 px-4 text-sm text-black/80 font-medium mb-4"
        >
          {tag}
        </motion.span>
      )}
      
      <motion.h2 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-3xl md:text-4xl lg:text-5xl leading-tight font-normal text-black/80 mb-4"
      >
        {title}
      </motion.h2>
      
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionHeading;