import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const SmartNoteTabSection = () => {
  const controls = useAnimation();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  
  // Features of Smart Note-Tab
  const features = [
    {
      icon: "📝",
      title: "Intelligent Note-Taking",
      description: "Convert handwritten notes to digital text with AI-powered recognition"
    },
    {
      icon: "🔍",
      title: "Smart Search",
      description: "Find any information instantly with semantic search capabilities"
    },
    {
      icon: "🔄",
      title: "Seamless Sync",
      description: "Access your notes across all devices with real-time synchronization"
    },
    {
      icon: "🧠",
      title: "AI Suggestions",
      description: "Receive intelligent content recommendations based on your notes"
    }
  ];

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

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

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 5,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut"
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="smart-note-tab py-[88px] lg:py-[120px] relative min-h-screen flex items-center overflow-hidden bg-[url('https://dcmedvectorstore.blob.core.windows.net/website-videos/End-to-End.gif')] bg-no-repeat bg-cover bg-center"
    >
      {/* Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30 backdrop-filter backdrop-blur-[2px]"></div>
      
      <div className="container max-w-[90rem] mx-auto px-[10px] relative z-10">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {/* Left content - Text */}
          <div className="order-2 lg:order-1">
            <motion.div className="text-center lg:text-left" variants={itemVariants}>
              <motion.span 
                className="inline-block bg-white/20 backdrop-blur-md rounded-[31px] py-[8px] px-[16px] text-[13px] text-white"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.3)" }}
              >
                Upcoming
              </motion.span>
              
              <motion.h2 
                className="[font-size:_clamp(15px,2vw,56px)] [margin-top:_clamp(15px,2vw,36px)] [margin-bottom:_clamp(15px,2vw,28px)] text-white leading-[1.2] font-normal"
                variants={itemVariants}
              >
                <span>Explore the</span>{" "}
                <span className="heading-orange relative inline-block">
                  Smart Note-Tab
                  <motion.span 
                    className="absolute -bottom-2 left-0 h-1 bg-[#FE6623] rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1, delay: 1 }}
                  />
                </span>
              </motion.h2>
              
              <motion.p 
                className="text-white/90 [font-size:_clamp(16px,2vw,28px)] leading-normal max-w-lg mx-auto lg:mx-0"
                variants={itemVariants}
              >
                Capture, Transform, Simplify—Smart Notes Redefined.
              </motion.p>
              
              {/* Features grid */}
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12"
                variants={containerVariants}
              >
                {features.map((feature, index) => (
                  <motion.div 
                    key={index}
                    className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-left border border-white/20 hover:bg-white/20 transition-all duration-300"
                    variants={itemVariants}
                    whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)" }}
                  >
                    <span className="text-3xl mb-4 block">{feature.icon}</span>
                    <h3 className="text-white text-xl font-medium mb-2">{feature.title}</h3>
                    <p className="text-white/80 text-sm">{feature.description}</p>
                  </motion.div>
                ))}
              </motion.div>
              
              {/* CTA Button */}
              <motion.div 
                className="mt-12 flex justify-center lg:justify-start"
                variants={itemVariants}
              >
                <motion.button
                  className="relative overflow-hidden bg-[#FE6623] text-white py-3 px-8 rounded-full inline-flex items-center shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.span 
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                  <span className="mr-2 relative z-10">Join the Waitlist</span>
                  <svg className="w-5 h-5 relative z-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Right content - Device mockup */}
          <motion.div 
            className="order-1 lg:order-2 flex justify-center"
            animate={floatingAnimation}
            variants={itemVariants}
          >
            <div className="relative">
              {/* Decorative circles */}
              <motion.div
                className="absolute -left-10 -top-10 w-32 h-32 rounded-full bg-[#FE6623]/20 blur-lg"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              
              <motion.div
                className="absolute -right-5 -bottom-5 w-24 h-24 rounded-full bg-blue-500/20 blur-lg"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 1
                }}
              />
              
              {/* Device mockup */}
              <motion.div 
                className="relative bg-gray-900 rounded-3xl p-2 shadow-2xl border-4 border-gray-800 max-w-sm"
                whileHover={{ rotateY: 10, rotateX: 5 }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                <div className="rounded-2xl overflow-hidden">
                  <img 
                    src="/image/smart-note-tab-preview.png" 
                    alt="Smart Note-Tab Preview" 
                    className="w-full"
                    onError={(e) => {
                      // Fallback for image error
                      e.currentTarget.src = "https://via.placeholder.com/450x600/1a1a1a/FE6623?text=Smart+Note-Tab";
                    }}
                  />
                </div>
                
                {/* Device controls */}
                <div className="absolute top-1/2 -right-3 transform -translate-y-1/2 space-y-2">
                  <div className="w-1.5 h-10 bg-gray-800 rounded-r-lg"></div>
                  <div className="w-1.5 h-10 bg-gray-800 rounded-r-lg"></div>
                </div>
                
                {/* Home button/sensor */}
                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-700 rounded-full"></div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Stats section */}
      </div>
    </section>
  );
};

export default SmartNoteTabSection;