import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import Link from "next/link";

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

  return (
    <section 
      ref={sectionRef}
      className="py-20 lg:py-32 relative overflow-hidden bg-gradient-to-b from-[#111827] to-[#1F2937]"
    >
      {/* Reduced quality background with optimized load */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: "url('https://dcmedvectorstore.blob.core.windows.net/website-videos/End-to-End.gif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "blur(2px)"
        }}
      />
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50"></div>
      
      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {/* Text Content */}
          <motion.div variants={itemVariants} className="text-center lg:text-left">
            <motion.span 
              className="inline-block bg-white/10 backdrop-blur-sm rounded-full py-2 px-4 text-sm text-white mb-4"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
            >
              Coming Soon
            </motion.span>
            
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl text-white font-normal mb-6"
              variants={itemVariants}
            >
              Introducing <span className="heading-orange">Smart Note-Tab</span>
            </motion.h2>
            
            <motion.p 
              className="text-white/90 text-lg mb-10 max-w-lg mx-auto lg:mx-0"
              variants={itemVariants}
            >
              Capture, transform, and simplify your note-taking experience with our AI-powered Smart Note-Tab. Designed for professionals who need seamless organization and intelligent insights.
            </motion.p>
            
            {/* Features grid - simplified */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10"
              variants={containerVariants}
            >
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-5 text-left border border-white/10 hover:border-white/30 transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <span className="text-2xl mb-3 block">{feature.icon}</span>
                  <h3 className="text-white text-lg font-medium mb-2">{feature.title}</h3>
                  <p className="text-white/70 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
            
            {/* CTA Button */}
            <motion.div variants={itemVariants}>
              <Link 
                href="#"
                className="inline-flex items-center bg-[#FE6623] text-white py-3 px-6 rounded-full hover:bg-[#FE6623]/90 transition-all shadow-lg"
              >
                <span className="mr-2">Join the Waitlist</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Abstract Visual Element - Replacing actual tablet mockup */}
          <motion.div 
            className="hidden lg:flex justify-center items-center"
            variants={itemVariants}
          >
            <motion.div 
              className="relative w-96 h-96"
              animate={{ 
                y: [0, -20, 0],
                transition: { 
                  duration: 4, 
                  repeat: Infinity,
                  repeatType: "reverse" 
                }
              }}
            >
              {/* Animated circles */}
              <motion.div
                className="absolute top-10 left-10 w-40 h-40 rounded-full bg-[#FE6623]/20 blur-xl"
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
                className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-blue-500/20 blur-xl"
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 1
                }}
              />
              
              {/* Abstract central element */}
              <motion.div 
                className="absolute inset-0 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
              >
                <svg width="300" height="300" viewBox="0 0 300 300">
                  <motion.circle
                    cx="150"
                    cy="150"
                    r="100"
                    fill="transparent"
                    stroke="#FE6623"
                    strokeWidth="2"
                    strokeDasharray="50 10"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  <motion.circle
                    cx="150"
                    cy="150"
                    r="70"
                    fill="transparent"
                    stroke="#fff"
                    strokeWidth="1"
                    strokeDasharray="20 5"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: -360 }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  <motion.path
                    d="M150,60 L150,240 M60,150 L240,150"
                    stroke="#FE6623"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2, delay: 0.5 }}
                  />
                  <motion.circle
                    cx="150"
                    cy="150"
                    r="30"
                    fill="#FE6623"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 10,
                      delay: 1
                    }}
                  />
                </svg>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Stats section - Minimal alternative */}
        <motion.div 
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          {[
            { value: "60%", label: "Time Saved" },
            { value: "85%", label: "User Satisfaction" },
            { value: "3x", label: "Productivity Boost" },
            { value: "24/7", label: "Access Anywhere" }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              className="text-center"
              whileHover={{ y: -5 }}
            >
              <motion.div 
                className="text-3xl md:text-4xl font-bold text-[#FE6623]"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ 
                  delay: 0.7 + (index * 0.1), 
                  duration: 0.5 
                }}
              >
                {stat.value}
              </motion.div>
              <div className="text-white/70 mt-2">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SmartNoteTabSection;