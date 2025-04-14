// src/components/common/ParallaxBackground.tsx
import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxBackgroundProps {
  imageSrc: string;
  speed?: number;
  className?: string;
  children?: React.ReactNode;
  overlay?: boolean;
  overlayColor?: string;
  overlayOpacity?: number;
}

const ParallaxBackground: React.FC<ParallaxBackgroundProps> = ({
  imageSrc,
  speed = 0.5,
  className = '',
  children,
  overlay = true,
  overlayColor = "#000000",
  overlayOpacity = 0.5
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', `${speed * 100}%`]);

  return (
    <div 
      ref={ref}
      className={`relative overflow-hidden ${className}`}
    >
      <motion.div
        className="absolute inset-0 h-full w-full"
        style={{
          backgroundImage: `url(${imageSrc})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          y
        }}
      />
      
      {overlay && (
        <div 
          className="absolute inset-0"
          style={{ 
            backgroundColor: overlayColor, 
            opacity: overlayOpacity 
          }}
        />
      )}
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default ParallaxBackground;