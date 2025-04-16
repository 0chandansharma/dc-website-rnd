import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const CollaboratorsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const collaborators = [
    {
      src: "/image/our-collaborators-1.jpeg",
      alt: "Collaborator 1",
      maxWidth: "clamp(48px, 10vw, 128px)",
      name: "Partner One"
    },
    {
      src: "/image/our-collaborators-2.jpeg",
      alt: "Collaborator 2", 
      maxWidth: "clamp(48px, 10vw, 130px)",
      name: "Partner Two"
    },
    {
      src: "/image/our-collaborators-3.png",
      alt: "Collaborator 3",
      maxWidth: "clamp(48px, 10vw, 80px)",
      name: "Partner Three"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
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
        stiffness: 200,
        damping: 15
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="our-collaborators-sec [padding-top:_clamp(36px,4vw,136px)] [padding-bottom:_clamp(36px,4vw,136px)] bg-gradient-to-b from-white to-gray-50">
      <div className="container max-w-[90rem] mx-auto px-[10px]">
        <motion.div 
          className="flex justify-center flex-row flex-wrap"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="basis-full lg:basis-8/12">
            <motion.div className="text-center" variants={textVariants}>
              <motion.span 
                className="inline-block bg-[#1316310D] rounded-[31px] py-[8px] px-[16px] text-[13px] text-[#000] mb-4"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                Strategic Partnerships
              </motion.span>
              
              <h2 className="leading-[1] [font-size:_clamp(26px,2vw,48px)] [margin-bottom:_clamp(15px,2vw,26px)] text-[#505050] font-normal">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Our <span className="heading-orange">Collaborators</span>
                </motion.span>
              </h2>
              
              <motion.p 
                className="[font-size:_clamp(16px,2vw,22px)] [margin-bottom:_clamp(12px,2vw,55px)] text-[#000000bf] font-normal max-w-3xl mx-auto"
                variants={textVariants}
              >
                We bring together the best of our network to help your
                business gain the competitive edge.
              </motion.p>
            </motion.div>
            
            <motion.div 
              className="flex justify-center flex-wrap flex-row"
              variants={containerVariants}
            >
              <div className="basis-full md:basis-8/12">
                <motion.div 
                  className="relative flex justify-between items-center flex-wrap flex-row py-10 px-4 md:px-8 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all duration-500"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {collaborators.map((collaborator, index) => (
                    <motion.div
                      key={index}
                      className="relative p-4 transition-all duration-300"
                      variants={itemVariants}
                      whileHover={{ 
                        scale: 1.05,
                        transition: { duration: 0.2 }
                      }}
                      onHoverStart={() => setHoveredIndex(index)}
                      onHoverEnd={() => setHoveredIndex(null)}
                    >
                      <motion.img
                        src={collaborator.src}
                        alt={collaborator.alt}
                        className="w-full inline-block transition-all duration-500 ease-in-out"
                        style={{ 
                          maxWidth: collaborator.maxWidth,
                          filter: hoveredIndex === index ? "grayscale(0)" : "grayscale(100%)" 
                        }}
                        whileHover={{ scale: 1.1 }}
                      />
                      
                      {hoveredIndex === index && (
                        <motion.div
                          className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-[#FE6623] text-white rounded-full px-3 py-1 text-xs whitespace-nowrap"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                        >
                          {collaborator.name}
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>

            {/* New Collaboration Section with Animated Cards */}
            <motion.div 
              className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, staggerChildren: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Partnership Card */}
              <motion.div 
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
                }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#FE6623]/10 flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium text-gray-900">Become Our Next Partner</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Interested in transforming industries with cutting-edge AI solutions? Join our network of collaborators and innovators.
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    href="/contact"
                    className="inline-flex items-center bg-[#FE6623] text-white py-2 px-4 rounded-full hover:bg-[#FE6623E3] transition-colors duration-300"
                  >
                    <span>Let's Talk</span>
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </motion.div>
              </motion.div>
              
              {/* Testimonial Card */}
              <motion.div 
                className="bg-[#1316310D]/5 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
                }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#FE6623]/10 flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium text-gray-900">Partner Success Stories</h3>
                </div>
                
                <motion.div 
                  className="relative mb-6 pl-6 border-l-2 border-[#FE6623]/30"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <svg className="absolute top-0 left-0 w-4 h-4 -ml-2 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.999v10h-9.999z" />
                  </svg>
                  <p className="text-gray-600 italic">
                    "Partnering with DeeCogs has opened new horizons for our business. Their AI solutions have truly transformed our operations."
                  </p>
                  <p className="text-gray-700 font-medium mt-2">- Partner Company CEO</p>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    href="/testimonials"
                    className="inline-flex items-center text-primary hover:underline"
                  >
                    <span>Read more success stories</span>
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
            
            {/* Collaboration Stats */}
            <motion.div 
              className="mt-16 bg-white rounded-xl p-8 shadow-sm border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-normal text-center mb-8">
                The Power of <span className="heading-orange">Collaboration</span>
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { number: "15+", label: "Global Partners" },
                  { number: "30+", label: "Joint Projects" },
                  { number: "40%", label: "Growth Through Partnership" },
                  { number: "5+", label: "Industries Transformed" }
                ].map((stat, index) => (
                  <motion.div 
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + (index * 0.1) }}
                    whileHover={{ y: -5 }}
                  >
                    <motion.div 
                      className="text-3xl md:text-4xl font-bold text-primary"
                      initial={{ scale: 0.8 }}
                      whileInView={{ scale: 1 }}
                      transition={{ 
                        type: "spring",
                        stiffness: 200,
                        damping: 10,
                        delay: 0.3 + (index * 0.1)
                      }}
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CollaboratorsSection;