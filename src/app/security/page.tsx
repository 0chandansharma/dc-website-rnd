"use client";

import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import SecurityDetails from "@/components/sections/SecurityDetails";
import ContactModal from "@/components/common/ContactModal";

const SecurityPage = () => {
  const [openModal, setOpenModal] = React.useState(false);

  return (
    <div className="bg-white">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-[#FFFAF8] py-20">
          <div className="container max-w-[90rem] mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <span className="bg-[#1316310D] rounded-[31px] py-2 px-4 text-sm text-[#000] inline-block mb-4">
                Security & Privacy
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-[#000000CC] mb-6">
                Comprehensive <span className="heading-orange">Data Protection</span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
                At DeeCogs, we are committed to maintaining the highest standards of data security and privacy, ensuring your information remains protected at every step.
              </p>
              
              <div className="flex justify-center space-x-4">
                <motion.button
                  className="bg-[#FE6623] text-white py-3 px-8 rounded-full font-medium hover:bg-[#FE6623]/90 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setOpenModal(true)}
                >
                  Contact Security Team
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Security Details Component */}
        <SecurityDetails />
      </main>
      
      <Footer />
      <ContactModal openModal={openModal} setOpenModal={setOpenModal} />
    </div>
  );
};

export default SecurityPage;