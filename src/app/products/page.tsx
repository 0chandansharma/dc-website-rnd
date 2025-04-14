"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { Flowbite } from "flowbite-react";
import { customTheme } from "@/utils/theme";

const ProductsPage = () => {
  // All products data
  const products = [
    {
      id: "docurate",
      category: "Vision Tech",
      title: "Docurate",
      description: "Streamlining complex data and unstructured information into actionable insights for seamless data management and analysis.",
      image: "/image/llm-1.png",
      link: "/products/docurate"
    },
    {
      id: "visiontech",
      category: "Vision Tech",
      title: "VisionTech",
      description: "Reforming visual data processing with our Vision Tech platform and delivering unparalleled image recognition and analysis.",
      image: "/image/llm-2.png",
      link: "/coming-soon"
    },
    {
      id: "fusio",
      category: "LLMs",
      title: "Fusio",
      description: "Harnessing the Power of multimodal LLMs for advanced data processing, seamlessly integrating different data types.",
      image: "/image/llm-3.png",
      link: "/coming-soon"
    },
    {
      id: "canse",
      category: "Healthcare",
      title: "Canse",
      subtitle: "(Cancer Prognostic Tool)",
      description: "Transforming oncology with AI-powered cancer prediction, enabling early detection, personalized treatment plans, and better outcomes.",
      image: "/image/llm-4.png",
      link: "/coming-soon"
    },
    {
      id: "notei",
      category: "Productivity",
      title: "Notei",
      description: "Deciphering medical data processing with AI, ensuring accurate analysis, seamless integration, and enhanced clinical workflows.",
      image: "/image/llm-5.png",
      link: "/coming-soon"
    }
  ];

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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <Flowbite theme={{ theme: customTheme }}>
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container max-w-[90rem] mx-auto px-5">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-[#1316310D] rounded-[31px] py-[8px] px-[16px] text-[13px] text-[#000] inline-block mb-4">
              Our Solutions
            </span>
            <h1 className="text-4xl md:text-5xl font-normal mb-6">
              <span className="heading-orange">Innovative</span> AI Products & Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive range of AI-powered solutions designed to transform challenges into opportunities across various industries.
            </p>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#FE6623]/10 text-[#FE6623] text-xs font-medium py-1 px-3 rounded-full">
                      {product.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h2 className="text-2xl font-medium mb-2 flex items-center">
                    {product.title}
                    {product.subtitle && (
                      <span className="text-sm text-gray-500 ml-2">{product.subtitle}</span>
                    )}
                  </h2>
                  
                  <p className="text-gray-600 mb-6">
                    {product.description}
                  </p>
                  
                  <motion.div
                    className="flex justify-between items-center pt-4 border-t border-gray-100"
                    whileHover={{ x: 5 }}
                  >
                    <Link
                      href={product.link}
                      className="text-[#FE6623] flex items-center font-medium hover:underline"
                    >
                      <span>Learn More</span>
                      <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                    
                    <motion.button
                      className="text-gray-400 hover:text-[#FE6623] p-2"
                      whileHover={{ rotate: 15, scale: 1.1 }}
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                      </svg>
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </Flowbite>
  );
};

export default ProductsPage;