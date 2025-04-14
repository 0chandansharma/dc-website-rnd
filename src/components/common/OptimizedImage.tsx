import React from 'react';
import Image from 'next/image';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
  priority = false
}) => {
  // Check if image is external (starts with http or https)
  const isExternal = src.startsWith('http');
  
  return isExternal ? (
    <Image
      src={src}
      alt={alt}
      width={width || 1200}
      height={height || 800}
      className={className}
      priority={priority}
      unoptimized={isExternal}
    />
  ) : (
    <Image
      src={src}
      alt={alt}
      width={width || 1200}
      height={height || 800}
      className={className}
      priority={priority}
    />
  );
};

export default OptimizedImage;