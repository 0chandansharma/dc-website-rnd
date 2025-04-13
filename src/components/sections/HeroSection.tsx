"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion"; // For animation

interface HeroSectionProps {
  onBookDemo: () => void;
}

const HeroSection = ({ onBookDemo }: HeroSectionProps) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    swipeToSlide: true,
    autoplay: true,
    speed: 300,
    autoplaySpeed: 2000,
    arrows: false,
    cssEase: "linear",
  };

  return (
    <section className="hero-bg h-[390px] md:h-screen overflow-hidden relative">
      {/* Animated Container */}
      <div className="container max-w-[90rem] relative z-10 mx-auto px-[10px] flex flex-col justify-end h-full">
        <div className="flex flex-row">
          <div className="basis-full">
            <motion.h1
              className="[font-size:_clamp(24px,4vw,80px)] mb-[0] font-normal leading-[1.3] text-[#ffffffb3]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Intelligent Systems
            </motion.h1>

            {/* Animated Slider Section */}
            <motion.div
              className="[font-size:_clamp(24px,4vw,80px)] [margin-bottom:_clamp(17px,2vw,48px)] font-normal leading-[1.3] text-[#ffffffb3]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className="flex items-center flex-wrap flex-row">
                <div>
                  <img
                    src="/image/AI.svg"
                    className="max-w-full h-[26px] md:h-[40px] xl:h-[61px]"
                    alt="Intelligent Systems"
                  />
                </div>
                <div>
                  <span className="px-[15px] leading-[] xl:px-[24px]">For</span>
                </div>

                <div className="max-w-[220px] relative z-0 md:max-w-[400px] xl:max-w-[700px]">
                  <Slider {...settings}>
                    <div>
                      <span className="text-[#1c77cb] leading-[]">Hyper Automation.</span>
                    </div>
                    <div>
                      <span className="text-[#1c77cb] leading-[]">Risk Mitigation</span>
                    </div>
                    <div>
                      <span className="text-[#1c77cb] leading-[]">Encoding</span>
                    </div>
                    <div>
                      <span className="text-[#1c77cb] leading-[]">Financial Analysis</span>
                    </div>
                    <div>
                      <span className="text-[#1c77cb]">Complex Analysis</span>
                    </div>
                  </Slider>
                </div>
              </div>
            </motion.div>

            {/* Description and Call to Action Button */}
            <div className="flex flex-wrap flex-col md:flex-row md:items-center">
              <div>
                <motion.p
                  className="max-w-[581px] mb-[18px] xl:mb-[0px] text-[#C3C3C5] [font-size:_clamp(8.5px,3vw,22px)] Helvetica-400 font-normal leading-[1.3]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.7 }}
                >
                  At DeeCogs Technologies we build AI-Driven solutions that transform challenges into opportunities—step into the future of innovation with us.
                </motion.p>
              </div>
              <div className="h-[92px] hidden md:block [margin-left:_clamp(30px,2vw,58px)] [margin-right:_clamp(30px,2vw,58px)] border border-[#ffffff]"></div>

              <div className="flex-shrink-0">
                <button
                  className="bg-[#fe6623e3] hover:!bg-[#fe6623e3] [padding-left:_clamp(2px,2vw,20px)] [padding-right:_clamp(2px,2vw,20px)] [padding-top:_clamp(1px,2vw,7px)] [padding-bottom:_clamp(1px,2vw,7px)] [font-size:_clamp(8px,2vw,22px)] border border-[#fe6623] hover:bottom-[#fff] leading-[1] rounded-[32px] inline-block text-[#ffffffe6]"
                  onClick={onBookDemo}
                >
                  Book a Demo
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Footer with new gradient background */}
        <div className="flex flex-wrap justify-between [margin-top:_clamp(18px,2vw,97px)] border-t border-[#ffffffb3] pb-[13px] lg:pt-[13px] lg:pb-[38px] gap-[5px] lg:gap-[10px]">
          <div>
            <motion.span
              className="text-[#AAAAAD] helvetica-light font-thin [font-size:_clamp(12px,2vw,24px)]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              LLMs
            </motion.span>
          </div>
          <div>
            <motion.span
              className="text-[#AAAAAD] helvetica-light font-thin [font-size:_clamp(12px,2vw,24px)]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.1 }}
            >
              NLP
            </motion.span>
          </div>
          <div>
            <motion.span
              className="text-[#AAAAAD] helvetica-light font-thin [font-size:_clamp(12px,2vw,24px)]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              Edge Computing
            </motion.span>
          </div>
          <div>
            <motion.span
              className="text-[#AAAAAD] helvetica-light font-thin [font-size:_clamp(12px,2vw,24px)]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.3 }}
            >
              Machine Learning
            </motion.span>
          </div>
          <div>
            <motion.span
              className="text-[#AAAAAD] helvetica-light font-thin [font-size:_clamp(12px,2vw,24px)]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.4 }}
            >
              Computer Vision
            </motion.span>
          </div>
        </div>
      </div>

      {/* Background with subtle motion */}
      <img
        src="/image/hero-bg.png"
        className="w-full opacity-[25%] absolute z-0 left-0 right-0 top-0 bottom-0"
        alt=""
      />
    </section>
  );
};

export default HeroSection;
