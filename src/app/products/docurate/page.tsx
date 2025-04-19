"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { Flowbite } from "flowbite-react";
import { customTheme } from "@/utils/theme";
import ContactModal from "@/components/common/ContactModal";

const DocuratePage = () => {
  const controls = useAnimation();
  const [openModal, setOpenModal] = useState(false);
  const capabilitiesSectionRef = useRef(null);
  
  useEffect(() => {
    controls.start({ 
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.8,
        staggerChildren: 0.2
      }
    });
  }, [controls]);

  const scrollToCapabilities = () => {
    if (capabilitiesSectionRef.current) {
      capabilitiesSectionRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <Flowbite theme={{ theme: customTheme }}>
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gray-100 to-gray-200 py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center">
              <motion.div 
                className="w-full lg:w-1/2 mb-10 lg:mb-0"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="bg-[#1316310D] rounded-[31px] py-[8px] px-[16px] text-[13px] text-[#000] inline-block mb-4">
                  AI OCR Solution
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  <span className="heading-orange">DOCURATE</span>
                </h1>
                <p className="text-xl text-gray-700 mb-8">
                  All-in-one AI OCR solution for automated document processing, analysis, and management.
                </p>
                <div className="flex flex-wrap gap-4">
                  <motion.button
                    className="bg-[#FE6623] text-white py-3 px-8 rounded-full font-medium hover:bg-[#FE6623]/90 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setOpenModal(true)} 
                  >
                    Book a Demo
                  </motion.button>
                  <motion.button
                    className="border-2 border-[#FE6623] text-primary py-3 px-8 rounded-full font-medium hover:bg-[#FE6623]/10 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={scrollToCapabilities}
                  >
                    Learn More
                    <svg className="inline-block ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.button>
                </div>
              </motion.div>
              
              <motion.div 
                className="w-full lg:w-1/2"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="relative">
                  <img 
                    src="/image/products/docurate-hero.png" 
                    alt="Docurate Platform Interface" 
                    // className="w-full rounded-lg shadow-xl"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section ref={capabilitiesSectionRef} className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="bg-[#1316310D] rounded-[31px] py-[8px] px-[16px] text-[13px] text-[#000] inline-block mb-4">
                Platform Capabilities
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Core <span className="heading-orange">Capabilities</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Docurate transforms document processing with AI-powered OCR technology and intelligent document management.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "📄",
                  title: "AI-Powered OCR",
                  description: "Extract text and data from documents with high accuracy using advanced optical character recognition."
                },
                {
                  icon: "🔄",
                  title: "Structured Data Parsing",
                  description: "Automatically convert unstructured documents into structured, usable data formats."
                },
                {
                  icon: "⚡",
                  title: "Real-time Data Comparison",
                  description: "Compare document data against databases in real-time for instant verification."
                },
                {
                  icon: "📚",
                  title: "Multi-Document Management",
                  description: "Handle various document types in a unified system with tailored processing rules."
                },
                {
                  icon: "⏱️",
                  title: "Batch & Real-Time Processing",
                  description: "Process documents individually or in bulk based on your business needs."
                },
                {
                  icon: "🔍",
                  title: "Error Detection & AI Accuracy",
                  description: "Identify inconsistencies and errors with advanced AI validation algorithms."
                },
                {
                  icon: "💬",
                  title: "AI Chat Bot",
                  description: "Interact with your documents through natural language queries and commands."
                },
                {
                  icon: "👁️",
                  title: "Vision API",
                  description: "Leverage computer vision to extract information from images and document scans."
                },
                {
                  icon: "🔧",
                  title: "Customizable Workflows",
                  description: "Design document processing workflows that adapt to your specific business requirements."
                }
              ].map((feature, index) => (
                <motion.div 
                  key={feature.title}
                  className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Use Cases Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="bg-[#1316310D] rounded-[31px] py-[8px] px-[16px] text-[13px] text-[#000] inline-block mb-4">
                Applications
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="heading-orange">Use Cases</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Docurate adapts to a wide range of document processing needs across industries.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "/image/products/receipt-icon.png",
                  title: "Receipt Processing",
                  description: "Automatically extract and categorize transaction details from receipts for expense tracking and reimbursement."
                },
                {
                  icon: "/image/products/bank-statement-icon.png",
                  title: "CIBIL Report Analysis",
                  description: "Parse credit reports to extract credit scores, history, and financial behavior metrics for loan processing."
                },
                {
                  icon: "/image/products/tax-icon.png",
                  title: "Tax Document Processing",
                  description: "Streamline handling of tax forms, returns, and filings with automated data extraction and verification."
                },
                {
                  icon: "/image/products/medical-icon.png",
                  title: "Medical Notes Digitization",
                  description: "Convert handwritten medical notes, prescriptions, and reports into structured, searchable digital records."
                },
                {
                  icon: "/image/products/invoice-icon.png",
                  title: "Invoice Management",
                  description: "Automate invoice processing with data extraction, validation, and integration with accounting systems."
                },
                {
                  icon: "/image/products/bank-statement-icon.png",
                  title: "Bank Statement Analysis",
                  description: "Extract transaction history, balances, and financial patterns from bank statements for financial assessment."
                }
              ].map((useCase, index) => (
                <motion.div 
                  key={useCase.title}
                  className="bg-white rounded-xl p-8 shadow hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="mb-6 h-16 flex items-center justify-center">
                    <img src={useCase.icon} alt={useCase.title} className="h-full object-contain" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-center">{useCase.title}</h3>
                  <p className="text-gray-600 text-center">{useCase.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Workflow Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="bg-[#1316310D] rounded-[31px] py-[8px] px-[16px] text-[13px] text-[#000] inline-block mb-4">
                How It Works
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="heading-orange">Streamlined</span> Workflow
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience a seamless document processing journey from upload to validation.
              </p>
            </motion.div>
            
            <div className="space-y-16">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <motion.div 
                  className="lg:w-1/2"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="bg-gray-100 p-4 rounded-xl">
                    <img 
                      src="/image/products/docurate-step1.png" 
                      alt="Create New Project" 
                      className="w-full rounded-lg shadow-md"
                    />
                  </div>
                </motion.div>
                <motion.div 
                  className="lg:w-1/2"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="inline-block bg-[#FE6623] text-white text-lg font-bold px-4 py-1 rounded-full mb-4">Step 1</div>
                  <h3 className="text-2xl font-bold mb-4">Create New Project</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <div className="text-primary font-bold mt-1">•</div>
                      <p>Add project name and select document type</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="text-primary font-bold mt-1">•</div>
                      <p>Upload documents – supports both single and bulk uploads</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="text-primary font-bold mt-1">•</div>
                      <p>Assign validators to the project</p>
                    </li>
                  </ul>
                </motion.div>
              </div>
              
              <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
                <motion.div 
                  className="lg:w-1/2"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="bg-gray-100 p-4 rounded-xl">
                    <img 
                      src="/image/products/docurate-step2.png" 
                      alt="Access Project Dashboard" 
                      className="w-full rounded-lg shadow-md"
                    />
                  </div>
                </motion.div>
                <motion.div 
                  className="lg:w-1/2"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="inline-block bg-[#FE6623] text-white text-lg font-bold px-4 py-1 rounded-full mb-4">Step 2</div>
                  <h3 className="text-2xl font-bold mb-4">Access Project Dashboard</h3>
                  <p className="text-gray-700 mb-4">
                    A centralized dashboard provides a complete overview of all projects and documents with real-time status updates.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <div className="text-primary font-bold mt-1">•</div>
                      <p>Monitor project progress and document status</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="text-primary font-bold mt-1">•</div>
                      <p>Track validation accuracy and AI performance</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="text-primary font-bold mt-1">•</div>
                      <p>Review documents requiring manual attention</p>
                    </li>
                  </ul>
                </motion.div>
              </div>
              
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <motion.div 
                  className="lg:w-1/2"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="bg-gray-100 p-4 rounded-xl">
                    <img 
                      src="/image/products/docurate-step3.png" 
                      alt="Preview Documents" 
                      className="w-full rounded-lg shadow-md"
                    />
                  </div>
                </motion.div>
                <motion.div 
                  className="lg:w-1/2"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="inline-block bg-[#FE6623] text-white text-lg font-bold px-4 py-1 rounded-full mb-4">Step 3</div>
                  <h3 className="text-2xl font-bold mb-4">Preview Documents</h3>
                  <p className="text-gray-700 mb-4">
                    Review processed documents with extracted data and validation status.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <div className="text-primary font-bold mt-1">•</div>
                      <p>See document details including type, progress, upload date, and validation date</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="text-primary font-bold mt-1">•</div>
                      <p>Check assignee information and AI accuracy percentage</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="text-primary font-bold mt-1">•</div>
                      <p>Review auto-action validation results and make adjustment decisions</p>
                    </li>
                  </ul>
                </motion.div>
              </div>
              
              <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
                <motion.div 
                  className="lg:w-1/2"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="bg-gray-100 p-4 rounded-xl">
                    <img 
                      src="/image/products/docurate-step4.png" 
                      alt="Edit Documents" 
                      className="w-full rounded-lg shadow-md"
                    />
                  </div>
                </motion.div>
                <motion.div 
                  className="lg:w-1/2"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="inline-block bg-[#FE6623] text-white text-lg font-bold px-4 py-1 rounded-full mb-4">Step 4</div>
                  <h3 className="text-2xl font-bold mb-4">Edit Documents</h3>
                  <p className="text-gray-700 mb-4">
                    Make corrections and validate document data with an intuitive editing interface.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <div className="text-primary font-bold mt-1">•</div>
                      <p>View project details and verification status</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="text-primary font-bold mt-1">•</div>
                      <p>Edit and correct OCR data with the interactive canvas</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="text-primary font-bold mt-1">•</div>
                      <p>Access other documents in the same project for cross-reference</p>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="bg-[#1316310D] rounded-[31px] py-[8px] px-[16px] text-[13px] text-[#000] inline-block mb-4">
                Key Benefits
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose <span className="heading-orange">Docurate</span>?
              </h2>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "⚡",
                  title: "Time Efficiency",
                  description: "Reduce document processing time by up to 90% with automated data extraction and validation."
                },
                {
                  icon: "📊",
                  title: "Enhanced Accuracy",
                  description: "Achieve over 98% accuracy in data extraction with AI-powered OCR and validation."
                },
                {
                  icon: "💰",
                  title: "Cost Reduction",
                  description: "Cut document processing costs by eliminating manual data entry and reducing errors."
                },
                {
                  icon: "🔄",
                  title: "Seamless Integration",
                  description: "Connect with existing systems through APIs for smooth data flow across your business."
                },
                {
                  icon: "📱",
                  title: "Multi-Platform Access",
                  description: "Access and process documents from any device with responsive web interfaces."
                },
                {
                  icon: "🔐",
                  title: "Enhanced Security",
                  description: "Protect sensitive document data with enterprise-grade security and access controls."
                }
              ].map((benefit, index) => (
                <motion.div 
                  key={benefit.title}
                  className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-[#FE6623]/10">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Document Processing?
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                Join leading organizations that have streamlined their operations with Docurate's intelligent document processing.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <motion.button
                  className="bg-[#FE6623] text-white py-3 px-8 rounded-full font-medium hover:bg-[#FE6623]/90 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setOpenModal(true)}
                >
                  Schedule a Demo
                  </motion.button>
                <Link href="/company/contact">
                  <motion.button
                    className="border-2 border-[#FE6623] text-primary py-3 px-8 rounded-full font-medium hover:bg-[#FE6623]/10 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Contact Sales
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
      <ContactModal openModal={openModal} setOpenModal={setOpenModal} />
    </Flowbite>
  );
};

export default DocuratePage;