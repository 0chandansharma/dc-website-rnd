// src/components/common/AnimatedCard.tsx
import React, { ReactNode } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface AnimatedCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  image?: string;
  link?: string;
  className?: string;
  delay?: number;
  hoverEffect?: 'scale' | 'lift' | 'glow' | 'border' | 'none';
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({
  title,
  description,
  icon,
  image,
  link,
  className = '',
  delay = 0,
  hoverEffect = 'scale'
}) => {
  const getHoverAnimations = () => {
    switch(hoverEffect) {
      case 'scale':
        return { scale: 1.03 };
      case 'lift':
        return { y: -10 };
      case 'glow':
        return { boxShadow: "0 0 15px rgba(254, 102, 35, 0.5)" };
      case 'border':
        return { borderColor: "#FE6623" };
      case 'none':
        return {};
      default:
        return { scale: 1.03 };
    }
  };

  const cardContent = (
    <>
      {image && (
        <div className="mb-6 overflow-hidden rounded-lg">
          <motion.img 
            src={image} 
            alt={title} 
            className="w-full h-auto"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      )}
      
      <div className="flex items-start">
        {icon && (
          <div className="flex-shrink-0 mr-4">
            {icon}
          </div>
        )}
        
        <div>
          <h3 className="text-xl md:text-2xl font-medium mb-2 text-gray-900">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
      
      {link && (
        <div className="mt-4">
          <motion.div 
            className="inline-flex items-center text-primary"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <span>Learn more</span>
            <svg 
              className="w-4 h-4 ml-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M14 5l7 7m0 0l-7 7m7-7H3" 
              />
            </svg>
          </motion.div>
        </div>
      )}
    </>
  );

  return (
    <motion.div
      className={`bg-white p-6 rounded-xl border border-gray-200 transition-all duration-300 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={getHoverAnimations()}
    >
      {link ? (
        <Link href={link} className="block h-full">
          {cardContent}
        </Link>
      ) : (
        cardContent
      )}
    </motion.div>
  );
};

export default AnimatedCard;