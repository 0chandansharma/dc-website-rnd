// src/components/common/Button.tsx
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface ButtonProps {
  onClick?: () => void;
  href?: string;
  text: string;
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg" | "login" |"compact";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  type?: "button" | "submit" | "reset";
  target?: string;
}

const Button = ({ 
  onClick, 
  href, 
  text, 
  className = "", 
  variant = "primary", 
  size = "md",
  icon,
  iconPosition = "right",
  disabled = false,
  loading = false,
  fullWidth = false,
  type = "button",
  target
}: ButtonProps) => {
  
  const getVariantClasses = () => {
    switch (variant) {
      case "primary":
        return "bg-primary text-white border-primary hover:bg-primary-hover hover:border-primary-hover";
      case "secondary":
        return "bg-white text-primary border-primary hover:bg-primary-50";
      case "outline":
        return "bg-transparent text-primary border-primary hover:bg-primary-50";
      case "ghost":
        return "bg-transparent text-primary border-transparent hover:bg-primary-50";
      default:
        return "bg-primary text-white border-primary hover:bg-primary-hover hover:border-primary-hover";
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
      case "login": // New size specifically for login
        return "py-2 px-10 text-base"; // Wider padding
      case "compact": // New size for buttons that need to be less wide
        return "py-2.5 px-5 text-base"; // Narrower padding
      default:
        return "py-2.5 px-6 text-base";
      }
  };
  
  const getWidthClass = () => fullWidth ? "w-full" : "";
  
  const getDisabledClass = () => disabled ? "opacity-50 cursor-not-allowed" : "";
  
  const baseClasses = "inline-flex items-center justify-center border transition-all duration-300 rounded-full font-medium focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2";
  
  const buttonClasses = `
    ${baseClasses}
    ${getVariantClasses()} 
    ${getSizeClasses()} 
    ${getWidthClass()}
    ${getDisabledClass()}
    ${className}
  `;
  
  const renderContent = () => (
    <>
      {loading && (
        <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      
      {icon && iconPosition === "left" && <span className="mr-2">{icon}</span>}
      <span>{text}</span>
      {icon && iconPosition === "right" && <span className="ml-2">{icon}</span>}
    </>
  );
  
  if (href) {
    return (
      <Link 
        href={href} 
        className={buttonClasses} 
        tabIndex={disabled ? -1 : 0}
        target={target} // Add this line
      >
        {renderContent()}
      </Link>
    );
  }
  
  return (
    <motion.button 
      onClick={disabled ? undefined : onClick} 
      className={buttonClasses}
      whileHover={disabled ? {} : { scale: 1.03 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
      disabled={disabled || loading}
      type={type}
    >
      {renderContent()}
    </motion.button>
  );
};

export default Button;