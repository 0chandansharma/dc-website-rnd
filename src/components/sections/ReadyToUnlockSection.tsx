import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/common/Button";
import ParallaxBackground from "@/components/common/ParallaxBackground";

interface ReadyToUnlockSectionProps {
  onBookDemo: () => void;
}

const ReadyToUnlockSection = ({ onBookDemo }: ReadyToUnlockSectionProps) => {
  // Animation variants
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
    hidden: { opacity: 0, y: 30 },
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

  const clientLogos = [
    { src: "/image/client-1.png", alt: "Client 1" },
    { src: "/image/client-2.png", alt: "Client 2" },
    { src: "/image/client-3.png", alt: "Client 3" },
    { src: "/image/client-4.png", alt: "Client 4" }
  ];

  return (
    <ParallaxBackground
      imageSrc="/image/image-bg-gradient.jpg"
      speed={0.1}
      overlay={true}
      overlayOpacity={0.01}
      className="py-32 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-20 left-10 w-40 h-40 bg-[#FE6623]/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 20, 0],
          y: [0, -20, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "mirror" }}
      />
      
      <motion.div 
        className="absolute bottom-20 right-10 w-64 h-64 bg-[#FE6623]/5 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -30, 0],
          y: [0, 30, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "mirror", delay: 1 }}
      />

      <div className="container max-w-[90rem] mx-auto px-[10px]">
        <motion.div 
          className="flex justify-center flex-wrap relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <div className="basis-full md:basis-10/12 lg:basis-8/12">
            <div className="relative z-10 [padding-top:_clamp(20px,4vw,60px)] [padding-bottom:_clamp(20px,4vw,60px)]">
              <motion.div
                className="relative"
                variants={itemVariants}
              >
                <motion.h2 
                  className="text-3xl md:text-4xl font-normal text-center mb-6"
                  variants={itemVariants}
                >
                  <motion.span 
                    className="text-[#5B5958] block mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    Ready to unlock the power of AI for your business?
                  </motion.span>
                  <motion.span 
                    className="text-[#000000] relative inline-block"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    Let's start the journey today!
                    <motion.span 
                      className="absolute -bottom-2 left-0 h-1 bg-[#FE6623]"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.8 }}
                    />
                  </motion.span>
                </motion.h2>
              </motion.div>

              <motion.div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10"
                variants={itemVariants}
              >
                <motion.img
                  src="/image/d.png"
                  className="opacity-30 [max-width:_clamp(126px,30vw,508px)] w-full"
                  alt="DeeCogs Logo"
                  animate={{ 
                    rotate: [0, 5, 0, -5, 0],
                    scale: [1, 1.05, 1, 1.05, 1]
                  }}
                  transition={{ duration: 20, repeat: Infinity, repeatType: "loop" }}
                />
              </motion.div>

              <motion.div
                className="flex flex-col md:flex-row justify-center items-center gap-6 mt-12"
                variants={itemVariants}
              >
                <Button
                    text="Book a Demo"
                    variant="primary"
                    size="lg"
                    onClick={onBookDemo}
                    className="shadow-primary"
                    icon={
                      <svg 
                        className="w-5 h-5" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    }
                    iconPosition="right"
                  />

                  <Button
                    text="Explore Solutions"
                    variant="outline"
                    size="lg"
                    href="/solutions"
                    className="backdrop-blur-sm"
                    icon={
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    }
                    iconPosition="right"
                  />
              </motion.div>
              
              <motion.div
                className="mt-16 text-center"
                variants={itemVariants}
              >
                <motion.p 
                  className="text-[#5B5958] text-lg mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  Join over 100+ businesses already using DeeCogs AI solutions
                </motion.p>
                
                <motion.div 
                  className="flex flex-wrap justify-center items-center gap-8"
                  variants={containerVariants}
                >
                  {clientLogos.map((logo, index) => (
                    <motion.img
                      key={index}
                      src={logo.src}
                      alt={logo.alt}
                      className="h-12 w-auto transition-all duration-300"
                      style={{ 
                        filter: "grayscale(100%)",
                        opacity: 0.7
                      }}
                      whileHover={{ 
                        filter: "grayscale(0%)",
                        opacity: 1,
                        scale: 1.1
                      }}
                      variants={itemVariants}
                      transition={{ delay: index * 0.1 }}
                    />
                  ))}
                </motion.div>
              </motion.div>
              
              {/* New: Success metrics */}
              <motion.div 
                className="mt-16 py-8 px-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    { value: "98%", label: "Client Satisfaction" },
                    { value: "40%", label: "Average ROI" },
                    { value: "3x", label: "Productivity Increase" },
                    { value: "60%", label: "Cost Reduction" }
                  ].map((stat, index) => (
                    <motion.div 
                      key={index} 
                      className="text-center"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + (index * 0.1) }}
                      whileHover={{ y: -5 }}
                    >
                      <motion.div 
                        className="text-3xl md:text-4xl font-bold text-primary"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                          delay: 0.8 + (index * 0.1),
                          duration: 0.8 
                        }}
                      >
                        {stat.value}
                      </motion.div>
                      <div className="text-gray-700 mt-2">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <motion.div 
        className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white/10 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      />
    </ParallaxBackground>
  );
};

export default ReadyToUnlockSection;