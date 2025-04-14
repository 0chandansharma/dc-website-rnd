// src/components/sections/HeroSection.tsx
"use client";
import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import Button from "@/components/common/Button";

interface HeroSectionProps {
  onBookDemo: () => void;
}

const HeroSection = ({ onBookDemo }: HeroSectionProps) => {
  const controls = useAnimation();
  const sliderRef = useRef<Slider>(null);
  
  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.2 }
    });
    
    // Add a scroll listener for parallax effect
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroSection = document.querySelector('.hero-bg');
      if (heroSection) {
        heroSection.style.backgroundPositionY = `${scrollY * 0.5}px`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);
  
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    swipeToSlide: true,
    autoplay: true,
    speed: 600,
    autoplaySpeed: 3000,
    arrows: false,
    cssEase: "cubic-bezier(0.645, 0.045, 0.355, 1)",
  };

  const headingItems = [
    "Risk Mitigation",
    "Hyper Automation",
    "Financial Analysis",
    "Complex Analysis",
    "Encoding"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="hero-bg min-h-screen flex items-center overflow-hidden relative">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 backdrop-filter backdrop-blur-sm"></div>
      
      <div className="container max-w-[90rem] relative z-10 mx-auto px-5">
        <motion.div 
          className="flex flex-col h-[85vh] justify-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="max-w-4xl"
            variants={itemVariants}
          >
            <motion.h1
              className="text-4xl md:text-5xl xl:text-7xl font-normal leading-tight text-white mb-2"
              variants={itemVariants}
            >
              Intelligent Systems
            </motion.h1>

            <motion.div
              className="flex items-center flex-wrap mb-8 text-4xl md:text-5xl xl:text-7xl font-normal leading-tight"
              variants={itemVariants}
            >
              <div className="flex items-center">
                <img
                  src="/image/Intelligent.png"
                  className="h-12 md:h-14 xl:h-16 mr-4"
                  alt="AI"
                />
                <span className="text-white mr-4">For</span>
              </div>

              <div className="relative h-[60px] md:h-[70px] xl:h-[80px] overflow-hidden flex items-center">
                <Slider ref={sliderRef} {...settings} className="w-full">
                  {headingItems.map((item, index) => (
                    <div key={index} className="!flex items-center">
                      <span className="text-[#1c77cb] font-medium">{item}</span>
                    </div>
                  ))}
                </Slider>
              </div>
            </motion.div>

            <motion.p
              className="text-lg md:text-xl text-gray-200 max-w-2xl mb-12"
              variants={itemVariants}
            >
              At DeeCogs Technologies we build AI-Driven solutions that transform challenges into opportunities—step into the future of innovation with us.
            </motion.p>

            <motion.div
              className="flex flex-wrap items-center gap-6"
              variants={itemVariants}
            >
              <Button 
                onClick={onBookDemo}
                text="Book a Demo"
                variant="primary"
                size="lg"
                className="shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              />
              
              <div className="hidden md:block h-14 w-px bg-white/30 mx-4"></div>
              
              <motion.a 
                href="#explore" 
                className="text-white group flex items-center gap-2"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="text-lg">Explore Our Solutions</span>
                <svg 
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-12 left-0 right-0 z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="container max-w-[90rem] mx-auto px-5">
            <div className="flex flex-wrap justify-between border-t border-white/20 pt-6 gap-4 md:gap-6 overflow-x-auto">
              {["LLMs", "NLP", "Edge Computing", "Machine Learning", "Computer Vision"].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                  className="text-gray-300 font-light text-base md:text-xl whitespace-nowrap"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;