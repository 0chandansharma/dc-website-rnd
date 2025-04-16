// src/components/sections/SpecializeSection.tsx
import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Button from "@/components/common/Button";
interface SpecializeSectionProps {
  onBookDemo: () => void;
}

const SpecializeSection = ({ onBookDemo }: SpecializeSectionProps) => {
  // Mouse position for parallax effect on background
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Transform mouse position into subtle parallax values
  const backgroundX = useTransform(mouseX, [-500, 500], [10, -10]);
  const backgroundY = useTransform(mouseY, [-500, 500], [10, -10]);
  
  // Handle mouse move for parallax effect
  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX - window.innerWidth / 2);
    mouseY.set(e.clientY - window.innerHeight / 2);
  };
  
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
  
  // Features data
  const features = [
    { title: "AI-Driven Solutions", description: "Leveraging advanced machine learning to solve complex business challenges" },
    { title: "Scalable Architecture", description: "Building systems that grow with your business needs" },
    { title: "Secure By Design", description: "Implementing robust security measures at every level" },
    { title: "Data-Powered Insights", description: "Transforming raw data into actionable business intelligence" }
  ];

  return (
    <section 
      className="we-specialize-sec relative bg-[url('https://dcmedvectorstore.blob.core.windows.net/website-videos/we-specialize.gif')] bg-no-repeat bg-cover bg-center [padding-top:_clamp(29px,4vw,238px)] [padding-bottom:_clamp(28px,4vw,198px)] min-h-screen flex items-center"
      onMouseMove={handleMouseMove}
    >
      {/* Animated overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"
        animate={{ opacity: [0.2, 0.3, 0.2] }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          repeatType: "reverse" 
        }}
      />
      
      {/* Background with subtle parallax effect */}
      <motion.div 
        className="absolute inset-0 bg-[url('https://dcmedvectorstore.blob.core.windows.net/website-videos/we-specialize.gif')] bg-no-repeat bg-cover bg-center"
        style={{ 
          backgroundPositionX: backgroundX,
          backgroundPositionY: backgroundY,
          opacity: 0.2 
        }}
      />
      
      <div className="container max-w-[90rem] mx-auto px-[10px] relative z-10">
        <div className="flex flex-wrap flex-row">
          <div className="basis-full md:basis-8/12 lg:basis-6/12">
            {/* Content Box */}
            <motion.div
              className="bg-[#FFFFFFEE] backdrop-blur-sm border rounded-xl shadow-2xl hover:shadow-3xl transition-shadow duration-500 ease-in-out overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.3,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
            >
              <motion.div
                className="pt-xl [padding-bottom:_clamp(20px,4vw,62px)] [padding-left:_clamp(20px,4vw,42px)] [padding-right:_clamp(20px,4vw,42px)]"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {/* Badge */}
                <motion.span 
                  className="bg-[#1316310D] rounded-[31px] py-[8px] px-[16px] text-[13px] text-[#000] inline-block"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, backgroundColor: "#FE6623", color: "#FFF" }}
                >
                  Who we are
                </motion.span>

                {/* Title */}
                <motion.div variants={itemVariants}>
                  <motion.h2
                    className="[font-size:_clamp(26px,2vw,46px)] [padding-top:_clamp(8px,4vw,24px)] leading-[1.3] text-[#000] relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  >
                    We specialize in{" "}
                    <motion.span 
                      className="heading-orange relative"
                      animate={{ 
                        backgroundPosition: ["0% 0%", "100% 100%"],
                      }}
                      transition={{ 
                        duration: 8, 
                        repeat: Infinity, 
                        repeatType: "reverse" 
                      }}
                    >
                      Cutting-Edge
                      <motion.span
                        className="absolute -bottom-1 left-0 h-[3px] bg-[#FE6623]"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1, delay: 1 }}
                      />
                    </motion.span>
                  </motion.h2>

                  <motion.h2
                    className="[font-size:_clamp(26px,2vw,46px)] [padding-bottom:_clamp(8px,4vw,31px)] leading-[1.3] text-[#000]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    <motion.span 
                      className="heading-orange"
                      whileHover={{ scale: 1.02 }}
                    >
                      AI Solutions
                    </motion.span>
                  </motion.h2>
                </motion.div>

                {/* Description */}
                <motion.p
                  className="[font-size:_clamp(8px,2vw,22px)] [margin-bottom:_clamp(21px,2vw,40px)] font-normal leading-normal text-gray-800"
                  variants={itemVariants}
                >
                  A forward-thinking AI company dedicated to delivering intelligent, scalable solutions. Driving innovation and progress across diverse industries with expertise and impact.
                </motion.p>
                
                {/* Features Grid */}
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 gap-4 [margin-bottom:_clamp(21px,2vw,40px)]"
                  variants={containerVariants}
                >
                  {features.map((feature, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-start"
                      variants={itemVariants}
                      whileHover={{ x: 5 }}
                    >
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FE6623]/10 flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-[#000000] font-medium mb-1">{feature.title}</h3>
                        <p className="text-gray-800 text-sm">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Button */}
                <Button 
                    onClick={onBookDemo}
                    text="Book a Demo"
                    variant="primary"
                    size="lg"
                    icon={
                      <svg 
                        className="w-5 h-5" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    }
                  />
              </motion.div>
            </motion.div>
          </div>
          
          {/* Animated decoration for larger screens */}
          <div className="hidden lg:block basis-6/12">
            <motion.div 
              className="flex justify-center items-center h-full"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              <div className="relative">
                <motion.div 
                  className="absolute inset-0 bg-[#FE6623]/10 blur-3xl rounded-full"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
                <motion.div
                  className="w-64 h-64 md:w-96 md:h-96 rounded-full bg-[#FE6623]/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-center"
                  animate={{ 
                    rotate: 360
                  }}
                  transition={{ 
                    duration: 40,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <div>
                    <h3 className="text-white text-xl md:text-3xl font-semibold">AI-Driven</h3>
                    <p className="text-white/80 text-sm md:text-base mt-2">Innovation</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecializeSection;