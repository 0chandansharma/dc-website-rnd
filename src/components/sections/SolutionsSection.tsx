// src/components/sections/SolutionsSection.tsx
"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectCoverflow } from "swiper/modules";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

const SolutionsSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const swiperRef = useRef<any>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  
  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  // Solutions data organized by tabs
  const solutionTabs = [
    {
      title: "Vision Tech",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      solutions: [
        {
          title: "Docurate",
          description: "Streamlining complex data and unstructured information into actionable insights for seamless...",
          image: "/image/llm-1.png",
          link: "/products/docurate",
          category: "Document Processing"
        },
        {
          title: "VisionTech",
          description: "Reforming visual data processing with our Vision Tech platform and delivering unparalleled..",
          image: "/image/llm-2.png",
          link: "/coming-soon",
          category: "Computer Vision"
        },
        {
          title: "Fusio",
          description: "Harnessing the Power of multimodal LLMs for advanced data processing, seamlessly integrating...",
          image: "/image/llm-3.png",
          link: "/coming-soon",
          category: "Data Fusion"
        },
        {
          title: "Canse",
          subtitle: "(Cancer Prognostic Tool)",
          description: "Transforming oncology with AI-powered cancer prediction, enabling early detection, personalized...",
          image: "/image/llm-4.png",
          link: "/coming-soon",
          category: "Healthcare"
        },
        {
          title: "Notei",
          description: "Deciphering medical data processing with AI, ensuring accurate analysis, seamless integration...",
          image: "/image/llm-5.png",
          link: "/coming-soon",
          category: "Medical Notes"
        }
      ]
    },
    {
      title: "LLMs",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      solutions: [
        {
          title: "Notei",
          description: "Deciphering medical data processing with AI, ensuring accurate analysis, seamless integration...",
          image: "/image/llm-5.png",
          link: "/coming-soon",
          category: "Medical Notes"
        },
        {
          title: "Canse",
          subtitle: "(Cancer Prognostic Tool)",
          description: "Transforming oncology with AI-powered cancer prediction, enabling early detection, personalized...",
          image: "/image/llm-4.png",
          link: "/coming-soon",
          category: "Healthcare"
        },
        {
          title: "Docurate",
          description: "Streamlining complex data and unstructured information into actionable insights for seamless...",
          image: "/image/llm-1.png",
          link: "/coming-soon",
          category: "Document Processing"
        },
        {
          title: "VisionTech",
          description: "Reforming visual data processing with our Vision Tech platform and delivering unparalleled..",
          image: "/image/llm-2.png",
          link: "/coming-soon",
          category: "Computer Vision"
        },
        {
          title: "Fusio",
          description: "Harnessing the Power of multimodal LLMs for advanced data processing, seamlessly integrating...",
          image: "/image/llm-3.png",
          link: "/coming-soon",
          category: "Data Fusion"
        }
      ]
    },
    {
      title: "Edge Computing",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      solutions: [
        {
          title: "Fusio",
          description: "Harnessing the Power of multimodal LLMs for advanced data processing, seamlessly integrating...",
          image: "/image/llm-3.png",
          link: "/coming-soon",
          category: "Data Fusion"
        },
        {
          title: "VisionTech",
          description: "Reforming visual data processing with our Vision Tech platform and delivering unparalleled..",
          image: "/image/llm-2.png",
          link: "/coming-soon",
          category: "Computer Vision"
        },
        {
          title: "Notei",
          description: "Deciphering medical data processing with AI, ensuring accurate analysis, seamless integration...",
          image: "/image/llm-5.png",
          link: "/coming-soon",
          category: "Medical Notes"
        },
        {
          title: "Docurate",
          description: "Streamlining complex data and unstructured information into actionable insights for seamless...",
          image: "/image/llm-1.png",
          link: "/coming-soon",
          category: "Document Processing"
        },
        {
          title: "Canse",
          subtitle: "(Cancer Prognostic Tool)",
          description: "Transforming oncology with AI-powered cancer prediction, enabling early detection, personalized...",
          image: "/image/llm-4.png",
          link: "/coming-soon",
          category: "Healthcare"
        }
      ]
    },
    {
      title: "Prediction Models",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      ),
      solutions: [
        {
          title: "Canse",
          subtitle: "(Cancer Prognostic Tool)",
          description: "Transforming oncology with AI-powered cancer prediction, enabling early detection, personalized...",
          image: "/image/llm-4.png",
          link: "/coming-soon",
          category: "Healthcare"
        },
        {
          title: "Docurate",
          description: "Streamlining complex data and unstructured information into actionable insights for seamless...",
          image: "/image/llm-1.png",
          link: "/coming-soon",
          category: "Document Processing"
        },
        {
          title: "VisionTech",
          description: "Reforming visual data processing with our Vision Tech platform and delivering unparalleled..",
          image: "/image/llm-2.png",
          link: "/coming-soon",
          category: "Computer Vision"
        },
        {
          title: "Fusio",
          description: "Harnessing the Power of multimodal LLMs for advanced data processing, seamlessly integrating...",
          image: "/image/llm-3.png",
          link: "/coming-soon",
          category: "Data Fusion"
        },
        {
          title: "Notei",
          description: "Deciphering medical data processing with AI, ensuring accurate analysis, seamless integration...",
          image: "/image/llm-5.png",
          link: "/coming-soon",
          category: "Medical Notes"
        }
      ]
    }
  ];

  // Handle tab changes
  const handleTabChange = (index) => {
    setActiveTab(index);
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(0);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const tabVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 10
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }
  };

  return (
    <section section id="solutions" className="delivering-ai-solutions relative [padding-top:_clamp(54px,4vw,192px)] [padding-bottom:_clamp(54px,4vw,160px)] bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#FE6623]/5 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[80px] -z-10"></div>
      
      <div className="container max-w-[90rem] mx-auto px-[10px] relative z-10">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="relative"
        >
          {/* Section heading */}
          <motion.div variants={headerVariants}>
            <motion.span 
              className="bg-[#1316310D] rounded-[31px] py-[8px] px-[16px] text-[13px] text-[#000] inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              Solutions
            </motion.span>
            
            <div className="flex [margin-bottom:_clamp(15px,2vw,38px)] [margin-top:_clamp(12px,2vw,53px)] flex-row flex-wrap items-start">
              <motion.div 
                className="flex-grow"
                variants={headerVariants}
              >
                <h2 className="[font-size:_clamp(15px,2vw,46px)] text-[#000000CC] leading-[1.3] font-normal">
                  <span className="block">
                    Delivering AI solutions that are resilient
                  </span>
                  and{" "}
                  <motion.span 
                    className="heading-orange [font-size:_clamp(17px,2vw,48px)]"
                    animate={{ 
                      color: ["#FE6623", "#ff8a59", "#FE6623"],
                      transition: { 
                        duration: 3, 
                        repeat: Infinity,
                        repeatType: "reverse"
                      }
                    }}
                  >
                    Uncompromising
                  </motion.span>{" "}
                  in achieving Excellence.
                </h2>
              </motion.div>
              
              <motion.div
                className="flex-shrink-0 hidden md:block"
                variants={headerVariants}
              >
                <Link
                  href="#"
                  className="text-primary text-[18px] lg:text-[22px] explor-link flex items-center font-normal group"
                >
                  <span>Explore All</span>
                  <motion.svg
                    className="ml-2 w-6 h-6"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.5 12L6.5 12"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13 7.5L17.5 12L13 16.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </motion.svg>
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Custom tabs with animated underline */}
          <motion.div 
            ref={tabsRef}
            className="mb-12 overflow-x-auto no-scrollbar flex space-x-2 md:space-x-8 border-b border-gray-200 relative"
            variants={tabVariants}
          >
            {solutionTabs.map((tab, index) => (
              <motion.button
                key={tab.title}
                onClick={() => handleTabChange(index)}
                className={`py-3 px-4 flex items-center gap-2 relative transition-all duration-300 whitespace-nowrap text-base md:text-lg font-medium ${
                  activeTab === index 
                    ? "text-primary border-[#FE6623]" 
                    : "text-gray-600 hover:text-gray-900"
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                variants={tabVariants}
              >
                <span className="hidden md:inline-block">{tab.icon}</span>
                {tab.title}
                {activeTab === index && (
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FE6623]"
                    layoutId="activeTabLine"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Swiper
                ref={swiperRef}
                slidesPerView={1.1}
                spaceBetween={15}
                centeredSlides={false}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                }}
                navigation={true}
                grabCursor={true}
                keyboard={{
                  enabled: true,
                }}
                breakpoints={{
                  640: { slidesPerView: 1.2, spaceBetween: 20 },
                  768: { slidesPerView: 2, spaceBetween: 30 },
                  1024: { slidesPerView: 2.5, spaceBetween: 40 },
                  1280: { slidesPerView: 3, spaceBetween: 50 }
                }}
                modules={[Pagination, Navigation, EffectCoverflow]}
                className="solutions-swiper !pb-20 !overflow-visible"
              >
                {solutionTabs[activeTab].solutions.map((solution, index) => (
                  <SwiperSlide key={`${activeTab}-${index}`}>
                    <motion.div
                      className="slider-column relative rounded-xl overflow-hidden shadow-lg group h-[450px]"
                      variants={cardVariants}
                      initial="hidden"
                      animate="visible"
                      whileHover="hover"
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="h-full w-full overflow-hidden">
                        <motion.img
                          src={solution.image}
                          className="w-full h-full object-cover object-center transition-transform duration-700"
                          alt={solution.title}
                          whileHover={{ scale: 1.05 }}
                        />
                        
                        {/* Category tag */}
                        <motion.div
                          className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 + index * 0.1 }}
                        >
                          {solution.category}
                        </motion.div>
                      </div>
                      
                      <motion.div
                        className="absolute w-full bottom-0 left-0 right-0 p-[14px]"
                        initial={{ y: 10, opacity: 0.9 }}
                        whileHover={{ y: 0, opacity: 1 }}
                      >
                        <motion.div 
                          className="bg-[#292C334D] backdrop-blur-md rounded-[16px] lg:py-[28px] p-[15px] lg:px-[36px] flex flex-col"
                          whileHover={{ backgroundColor: "rgba(41, 44, 51, 0.8)" }}
                        >
                          <div className="grow">
                            <h3 className="text-white [font-size:_clamp(12px,2vw,28px)] font-bold flex flex-wrap items-center">
                              {solution.title}
                              {solution.subtitle && (
                                <span className="inline-block ml-2 text-[#CED4D7] font-normal text-sm">
                                  {solution.subtitle}
                                </span>
                              )}
                            </h3>
                            <p className="text-[#CED4D7] line-1 Helvetica-400 w-full lg:max-w-[494px] whitespace-normal [font-size:_clamp(11px,2vw,18px)] font-normal mt-2">
                              {solution.description}
                            </p>
                          </div>
                          
                          <div className="shrink-0 mt-4 self-end flex items-center justify-between w-full">
                            <motion.span 
                              className="text-white/70 text-xs"
                              initial={{ opacity: 0 }}
                              whileHover={{ opacity: 1 }}
                            >
                              Click to explore →
                            </motion.span>
                            
                            <Link href={solution.link}>
                              <motion.div
                                className="bg-[#FE6623] text-white p-3 rounded-full flex items-center justify-center w-12 h-12 overflow-hidden"
                                whileHover={{ 
                                  scale: 1.1, 
                                  rotateZ: 90, 
                                  boxShadow: "0 0 15px rgba(254, 102, 35, 0.5)" 
                                }}
                                transition={{ type: "spring", stiffness: 300 }}
                              >
                                <motion.svg 
                                  width="20" 
                                  height="20" 
                                  viewBox="0 0 24 24" 
                                  fill="none"
                                  initial={{ pathLength: 0 }}
                                  animate={{ pathLength: 1 }}
                                  transition={{ duration: 1, delay: 0.5 }}
                                >
                                  <path 
                                    d="M5 12H19M19 12L12 5M19 12L12 19" 
                                    stroke="currentColor" 
                                    strokeWidth="2" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round"
                                  />
                                </motion.svg>
                              </motion.div>
                            </Link>
                          </div>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>
          </AnimatePresence>

          {/* Mobile "View All" button */}
          <motion.div
            className="text-center mt-[30px] lg:mt-[64px] md:hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Link
              href="#"
              className="inline-flex items-center text-primary font-medium bg-white px-6 py-3 rounded-full shadow-sm"
            >
              <span>Explore All Solutions</span>
              <svg
                className="ml-2 w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.5 12L6.5 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13 7.5L17.5 12L13 16.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionsSection;