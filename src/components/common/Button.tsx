import React from "react";
import Link from "next/link";

interface ButtonProps {
  onClick?: () => void;
  href?: string;
  text: string;
  className?: string;
}

const Button = ({ onClick, href, text, className = "" }: ButtonProps) => {
  const defaultClass = "bg-[#FE6623E3] leading-[1.2] [padding-left:_clamp(2px,2vw,20px)] [padding-right:_clamp(2px,2vw,20px)] [padding-top:_clamp(1px,2vw,7px)] [padding-bottom:_clamp(1px,2vw,7px)] [font-size:_clamp(8px,2vw,22px)] border border-[#FE6623] rounded-[32px] inline-block text-[#ffffffe6]";
  
  if (href) {
    return (
      <Link href={href} className={`${defaultClass} ${className}`}>
        {text}
      </Link>
    );
  }
  
  return (
    <button onClick={onClick} className={`${defaultClass} ${className}`}>
      {text}
    </button>
  );
};

export default Button;