// src/components/common/Button.tsx
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface ButtonProps {
  onClick?: () => void;
  href?: string;
  text: string;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
}

const Button = ({ 
  onClick, 
  href, 
  text, 
  className = "", 
  variant = "primary", 
  size = "md",
  icon
}: ButtonProps) => {
  
  const getVariantClasses = () => {
    switch (variant) {
      case "primary":
        return "bg-[#FE6623] text-white border-[#FE6623] hover:bg-transparent";
      case "secondary":
        return "bg-transparent text-white border-[#FE6623] hover:bg-[#FE6623]";
      case "outline":
        return "bg-transparent text-[#FE6623] border-[#FE6623] hover:bg-[#FE6623] hover:text-white";
      default:
        return "bg-[#FE6623] text-white border-[#FE6623] hover:bg-transparent";
    }
  };
  
  const getSizeClasses = () => {
    switch (size) {
      case "sm":
        return "py-2 px-4 text-sm";
      case "md":
        return "py-2.5 px-6 text-base";
      case "lg":
        return "py-3 px-8 text-lg";
      default:
        return "py-2.5 px-6 text-base";
    }
  };
  
  const buttonClasses = `inline-flex items-center justify-center border transition-all duration-300 rounded-full shadow-sm ${getVariantClasses()} ${getSizeClasses()} ${className}`;
  
  const content = (
    <>
      <span>{text}</span>
      {icon && <span className="ml-2">{icon}</span>}
    </>
  );
  
  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {content}
      </Link>
    );
  }
  
  return (
    <motion.button 
      onClick={onClick} 
      className={buttonClasses}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      {content}
    </motion.button>
  );
};

export default Button;