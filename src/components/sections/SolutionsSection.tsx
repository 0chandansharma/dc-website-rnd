// src/components/sections/SolutionsSection.tsx
"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectCoverflow } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

const SolutionsSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const swiperRef = useRef<any>(null);
  const tabsRef = useRef<HTMLDivElement>(null);

  // Solutions data organized by tabs
  const solutionTabs = [
    {
      title: "Vision Tech",
      solutions: [
        {
          title: "Docurate",
          description: "Streamlining complex data and unstructured information into actionable insights for seamless...",
          image: "/image/llm-1.png",
          link: "/products/docurate"
        },
        {
          title: "VisionTech",
          description: "Reforming visual data processing with our Vision Tech platform and delivering unparalleled..",
          image: "/image/llm-2.png",
          link: "/coming-soon"
        },
        {
          title: "Fusio",
          description: "Harnessing the Power of multimodal LLMs for advanced data processing, seamlessly integrating...",
          image: "/image/llm-3.png",
          link: "/coming-soon"
        },
        {
          title: "Canse",
          subtitle: "(Cancer Prognostic Tool)",
          description: "Transforming oncology with AI-powered cancer prediction, enabling early detection, personalized...",
          image: "/image/llm-4.png",
          link: "/coming-soon"
        },
        {
          title: "Notei",
          description: "Deciphering medical data processing with AI, ensuring accurate analysis, seamless integration...",
          image: "/image/llm-5.png",
          link: "/coming-soon"
        }
      ]
    },
    {
      title: "LLMs",
      solutions: [
        {
          title: "Notei",
          description: "Deciphering medical data processing with AI, ensuring accurate analysis, seamless integration...",
          image: "/image/llm-5.png",
          link: "/coming-soon"
        },
        {
          title: "Canse",
          subtitle: "(Cancer Prognostic Tool)",
          description: "Transforming oncology with AI-powered cancer prediction, enabling early detection, personalized...",
          image: "/image/llm-4.png",
          link: "/coming-soon"
        },
        {
          title: "Docurate",
          description: "Streamlining complex data and unstructured information into actionable insights for seamless...",
          image: "/image/llm-1.png",
          link: "/coming-soon"
        },
        {
          title: "VisionTech",
          description: "Reforming visual data processing with our Vision Tech platform and delivering unparalleled..",
          image: "/image/llm-2.png",
          link: "/coming-soon"
        },
        {
          title: "Fusio",
          description: "Harnessing the Power of multimodal LLMs for advanced data processing, seamlessly integrating...",
          image: "/image/llm-3.png",
          link: "/coming-soon"
        }
      ]
    },
    {
      title: "Edge Computing",
      solutions: [
        {
          title: "Fusio",
          description: "Harnessing the Power of multimodal LLMs for advanced data processing, seamlessly integrating...",
          image: "/image/llm-3.png",
          link: "/coming-soon"
        },
        {
          title: "VisionTech",
          description: "Reforming visual data processing with our Vision Tech platform and delivering unparalleled..",
          image: "/image/llm-2.png",
          link: "/coming-soon"
        },
        {
          title: "Notei",
          description: "Deciphering medical data processing with AI, ensuring accurate analysis, seamless integration...",
          image: "/image/llm-5.png",
          link: "/coming-soon"
        },
        {
          title: "Docurate",
          description: "Streamlining complex data and unstructured information into actionable insights for seamless...",
          image: "/image/llm-1.png",
          link: "/coming-soon"
        },
        {
          title: "Canse",
          subtitle: "(Cancer Prognostic Tool)",
          description: "Transforming oncology with AI-powered cancer prediction, enabling early detection, personalized...",
          image: "/image/llm-4.png",
          link: "/coming-soon"
        }
      ]
    },
    {
      title: "Prediction Models",
      solutions: [
        {
          title: "Canse",
          subtitle: "(Cancer Prognostic Tool)",
          description: "Transforming oncology with AI-powered cancer prediction, enabling early detection, personalized...",
          image: "/image/llm-4.png",
          link: "/coming-soon"
        },
        {
          title: "Docurate",
          description: "Streamlining complex data and unstructured information into actionable insights for seamless...",
          image: "/image/llm-1.png",
          link: "/coming-soon"
        },
        {
          title: "VisionTech",
          description: "Reforming visual data processing with our Vision Tech platform and delivering unparalleled..",
          image: "/image/llm-2.png",
          link: "/coming-soon"
        },
        {
          title: "Fusio",
          description: "Harnessing the Power of multimodal LLMs for advanced data processing, seamlessly integrating...",
          image: "/image/llm-3.png",
          link: "/coming-soon"
        },
        {
          title: "Notei",
          description: "Deciphering medical data processing with AI, ensuring accurate analysis, seamless integration...",
          image: "/image/llm-5.png",
          link: "/coming-soon"
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

  return (
    <section className="delivering-ai-solutions [padding-top:_clamp(54px,4vw,192px)] [padding-bottom:_clamp(54px,4vw,110px)]">
      <div className="container max-w-[90rem] mx-auto px-[10px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="bg-[#1316310D] rounded-[31px] py-[8px] px-[16px] text-[13px] text-[#000] inline-block">
            Solutions
          </span>
          <div className="flex [margin-bottom:_clamp(15px,2vw,38px)] [margin-top:_clamp(12px,2vw,53px)] flex-row flex-wrap items-start">
            <div className="flex-grow">
              <motion.h2
                className="[font-size:_clamp(15px,2vw,46px)] text-[#000000CC] leading-[1.3] font-normal"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <span className="block">
                  Delivering AI solutions that are resilient
                </span>
                and{" "}
                <span className="heading-orange [font-size:_clamp(17px,2vw,48px)]">
                  Uncompromising
                </span>{" "}
                in achieving Excellence.
              </motion.h2>
            </div>
            <motion.div
              className="flex-shrink-0 hidden md:block"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Link
                href="#"
                className="text-[#FE6623] text-[18px] lg:text-[22px] explor-link flex items-center font-normal group"
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

          {/* Custom tabs with animated underline */}
          <div 
            ref={tabsRef}
            className="mb-12 overflow-x-auto no-scrollbar flex space-x-8 border-b border-gray-200"
          >
            {solutionTabs.map((tab, index) => (
              <button
                key={tab.title}
                onClick={() => handleTabChange(index)}
                className={`py-3 px-1 relative transition-all duration-300 whitespace-nowrap text-lg md:text-xl font-medium ${
                  activeTab === index ? "text-[#FE6623]" : "text-gray-600 hover:text-[#FE6623]"
                }`}
              >
                {tab.title}
                {activeTab === index && (
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FE6623]"
                    layoutId="activeTabLine"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                  />
                )}
              </button>
            ))}
          </div>

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
                  // In the SwiperSlide rendering part of SolutionsSection.tsx
                  <SwiperSlide key={`${activeTab}-${index}`}>
                    <motion.div
                      className="slider-column relative rounded-[24px] overflow-hidden shadow-lg group"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ 
                        opacity: 1, 
                        y: 0,
                        transition: { delay: index * 0.1, duration: 0.5 }
                      }}
                      whileHover={{ y: -5 }}
                    >
                      <div className="h-full w-full overflow-hidden">
                        <motion.img
                          src={solution.image}
                          className="w-full h-full object-cover object-center transition-transform duration-700"
                          alt={solution.title}
                          whileHover={{ scale: 1.05 }}
                        />
                      </div>
                      <motion.div
                        className="absolute w-full bottom-0 left-0 right-0 p-[14px]"
                        initial={{ y: 10, opacity: 0.9 }}
                        whileHover={{ y: 0, opacity: 1 }}
                      >
                        <div className="bg-[#292C334D] backdrop-blur-md rounded-[16px] p-4 lg:p-6 flex flex-col">
                          <div className="grow">
                            <h3 className="text-white [font-size:_clamp(12px,2vw,28px)] font-bold flex flex-wrap items-center">
                              {solution.title}
                              {solution.subtitle && (
                                <span className="inline-block ml-2 text-[#CED4D7] font-normal text-sm">
                                  {solution.subtitle}
                                </span>
                              )}
                            </h3>
                            <p className="text-[#CED4D7] line-1 Helvetica-400 w-full whitespace-normal [font-size:_clamp(11px,1.5vw,18px)] font-normal mt-2">
                              {solution.description}
                            </p>
                          </div>
                          <div className="shrink-0 mt-3 self-end">
                            <Link href={solution.link}>
                              <motion.div
                                className="bg-[#FE6623] text-white p-2 rounded-full flex items-center justify-center w-10 h-10"
                                whileHover={{ scale: 1.1, rotate: 90 }}
                                transition={{ type: "spring", stiffness: 300 }}
                              >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              </motion.div>
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  </SwiperSlide>
                  // <SwiperSlide key={`${activeTab}-${index}`}>
                  //   <motion.div
                  //     className="slider-column relative rounded-[24px] overflow-hidden shadow-lg h-[550px] group"
                  //     initial={{ opacity: 0, y: 20 }}
                  //     animate={{ 
                  //       opacity: 1, 
                  //       y: 0,
                  //       transition: { delay: index * 0.1, duration: 0.5 }
                  //     }}
                  //     whileHover={{ y: -5 }}
                  //   >
                  //     <div className="h-full w-full overflow-hidden">
                  //       <motion.img
                  //         src={solution.image}
                  //         className="w-full h-full object-cover object-center transition-transform duration-700"
                  //         alt={solution.title}
                  //         whileHover={{ scale: 1.05 }}
                  //       />
                  //     </div>
                  //     <motion.div
                  //       className="absolute w-full bottom-0 left-0 right-0 p-[14px]"
                  //       initial={{ y: 10, opacity: 0.9 }}
                  //       whileHover={{ y: 0, opacity: 1 }}
                  //     >
                  //       <div className="bg-[#292C334D] backdrop-blur-md rounded-[16px] lg:py-[28px] p-[15px] lg:px-[36px] flex flex-col">
                  //         <div className="grow">
                  //           <h3 className="text-white [font-size:_clamp(12px,2vw,32px)] font-bold flex flex-wrap items-center">
                  //             {solution.title}
                  //             {solution.subtitle && (
                  //               <span className="inline-block ml-2 text-[#CED4D7] font-normal text-base">
                  //                 {solution.subtitle}
                  //               </span>
                  //             )}
                  //           </h3>
                  //           <p className="text-[#CED4D7] line-1 Helvetica-400 w-full lg:max-w-[494px] whitespace-normal [font-size:_clamp(11px,2vw,22px)] font-normal mt-2">
                  //             {solution.description}
                  //           </p>
                  //         </div>
                  //         <div className="shrink-0 mt-4 self-end">
                  //           <Link href={solution.link}>
                  //             <motion.div
                  //               className="bg-[#FE6623] text-white p-3 rounded-full flex items-center justify-center w-12 h-12"
                  //               whileHover={{ scale: 1.1, rotate: 90 }}
                  //               transition={{ type: "spring", stiffness: 300 }}
                  //             >
                  //               <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  //                 <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  //               </svg>
                  //             </motion.div>
                  //           </Link>
                  //         </div>
                  //       </div>
                  //     </motion.div>
                  //   </motion.div>
                  // </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>
          </AnimatePresence>

          <motion.div
            className="text-center mt-[30px] lg:mt-[64px] md:hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Link
              href="#"
              className="inline-flex items-center text-[#FE6623] font-medium"
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