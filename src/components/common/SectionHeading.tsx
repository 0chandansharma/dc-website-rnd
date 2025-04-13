import React from "react";

interface SectionHeadingProps {
  tag?: string;
  title: React.ReactNode;
  subtitle?: string;
  className?: string;
}

const SectionHeading = ({ tag, title, subtitle, className = "" }: SectionHeadingProps) => {
  return (
    <div className={className}>
      {tag && (
        <span className="bg-[#1316310D] rounded-[31px] py-[8px] px-[16px] text-[13px] text-[#000]">
          {tag}
        </span>
      )}
      <h2 className="[font-size:_clamp(15px,2vw,48px)] mt-[12px] lg:mt-[39px] text-[#000000CC] leading-normal font-normal">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[#707070] [font-size:_clamp(16px,2vw,28px)] leading-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;