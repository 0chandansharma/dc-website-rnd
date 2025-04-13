import React from "react";
import Link from "next/link";
import { motion } from "framer-motion"; // Importing Framer Motion

interface SpecializeSectionProps {
  onBookDemo: () => void;
}

const SpecializeSection = ({ onBookDemo }: SpecializeSectionProps) => {
  return (
    <section className="we-specialize-sec bg-[url('https://dcmedvectorstore.blob.core.windows.net/website-videos/we-specialize.gif')] bg-no-repeat bg-cover bg-center [padding-top:_clamp(29px,4vw,238px)] [padding-bottom:_clamp(28px,4vw,198px)]">
      <div className="container max-w-[90rem] mx-auto px-[10px]">
        <div className="flex flex-wrap flex-row">
          <div className="basis-full md:basis-8/12 lg:basis-6/12">
            {/* Animated Content Box with Shadow */}
            <motion.div
              className="bg-[#FFFFFFAD] border [padding-top:_clamp(20px,4vw,62px)] [padding-bottom:_clamp(20px,4vw,62px)] [padding-left:_clamp(20px,4vw,42px)] [padding-right:_clamp(20px,4vw,42px)] rounded-[24px] shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <div>
                <span className="bg-[#1316310D] rounded-[31px] py-[8px] px-[16px] text-[13px] text-[#000]">
                  Who we are
                </span>

                {/* Animated Title */}
                <motion.h2
                  className="[font-size:_clamp(26px,2vw,46px)] [padding-top:_clamp(8px,4vw,24px)] leading-[1.3] text-[#000]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  We specialize in{" "}
                  <span className="heading-orange">Cutting-Edge </span>
                </motion.h2>

                <motion.h2
                  className="[font-size:_clamp(26px,2vw,46px)] [padding-bottom:_clamp(8px,4vw,31px)] leading-[1.3] text-[#000]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <span className="heading-orange">AI Solutions</span>
                </motion.h2>
              </div>

              {/* Animated Description */}
              <motion.p
                className="[font-size:_clamp(8px,2vw,22px)] [margin-bottom:_clamp(21px,2vw,57px)] Helvetica-400 font-normal leading-normal text-[#000000BF]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.7 }}
              >
                A forward-thinking AI company dedicated to delivering intelligent, scalable solutions. Driving innovation and progress across diverse industries with expertise and impact.
              </motion.p>

              {/* Animated Button */}
              <motion.a
                className="bg-[#FE6623E3] leading-[1.2] [padding-left:_clamp(2px,2vw,20px)] [padding-right:_clamp(2px,2vw,20px)] [padding-top:_clamp(1px,2vw,7px)] [padding-bottom:_clamp(1px,2vw,7px)] [font-size:_clamp(8px,2vw,22px)] border border-[#FE6623] rounded-[32px] inline-block text-[#ffffffe6] hover:scale-105 transition-all duration-300"
                href="#"
                onClick={onBookDemo}
                whileHover={{ scale: 1.05, backgroundColor: "#fe6623" }} // Hover effect
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                Book a Demo
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Optional: Adding a decorative graphic below the section */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="fill-current text-[#FE6623]"
        >
          <path d="M0,0 C50,100 50,100 100,0 Z" />
        </svg>
      </div>
    </section>
  );
};

export default SpecializeSection;
