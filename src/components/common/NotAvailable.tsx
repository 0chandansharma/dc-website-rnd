// src/components/common/NotAvailable.tsx
"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

interface NotAvailableProps {
  title?: string;
  message?: string;
  pageName?: string;
  returnUrl?: string;
  returnText?: string;
}

const NotAvailable: React.FC<NotAvailableProps> = ({
  title = "Coming Soon",
  message = "This page is currently under development.",
  pageName = "",
  returnUrl = "/",
  returnText = "Return to Home"
}) => {
  return (
    <>
      <Header />
      
      <main className="pt-32 pb-20 min-h-[80vh] flex items-center">
        <div className="container max-w-[90rem] mx-auto px-5">
          <div className="flex flex-col items-center justify-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <span className="bg-[#1316310D] rounded-[31px] py-[8px] px-[16px] text-[13px] text-[#000] inline-block mb-4">
                {pageName || "Under Construction"}
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal mb-6">
                <span className="heading-orange">{title}</span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
                {message}
              </p>
              
              <div className="relative w-full max-w-md mx-auto h-64 mb-10">
                <motion.div
                  className="absolute inset-0 bg-[#FE6623]/10 rounded-full blur-3xl"
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
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{ 
                    rotate: [0, 5, 0, -5, 0],
                    y: [0, -10, 0, 10, 0]
                  }}
                  transition={{ 
                    duration: 10,
                    repeat: Infinity,
                    repeatType: "loop"
                  }}
                >
                  <img
                    src="/image/d.png"
                    alt="DeeCogs Logo"
                    className="w-32 h-32 md:w-40 md:h-40 object-contain opacity-70"
                  />
                </motion.div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    href={returnUrl}
                    className="inline-flex items-center justify-center bg-[#FE6623] text-white py-3 px-8 rounded-full hover:bg-[#FE6623]/90 transition-all shadow-sm hover:shadow-md"
                  >
                    <svg className="w-5 h-5 mr-2 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                    <span>{returnText}</span>
                  </Link>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    href="/company/contact"
                    className="inline-flex items-center justify-center bg-transparent text-primary border border-[#FE6623] py-3 px-8 rounded-full hover:bg-[#FE6623]/10 transition-all"
                  >
                    <span>Contact Us</span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
            
            {/* Subscription Form */}
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-sm max-w-md mx-auto w-full mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h3 className="text-xl font-medium mb-4">Get Notified When It's Ready</h3>
              <p className="text-gray-600 mb-4">
                Subscribe to our newsletter to receive updates about our products and services.
              </p>
              
              <form className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FE6623]/50 focus:border-[#FE6623]"
                    required
                  />
                </div>
                
                <motion.button
                  type="submit"
                  className="w-full bg-[#FE6623] text-white py-3 rounded-lg hover:bg-[#FE6623]/90 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Notify Me
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default NotAvailable;