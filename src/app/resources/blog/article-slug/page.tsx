"use client";
import React, { useRef, useState, useEffect } from "react";
import { Flowbite, Navbar } from "flowbite-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const customTheme = {
  navbar: {
    collapse: {
      base: "w-full xl:block xl:w-auto",
      hidden: {
        on: "hidden",
        off: "",
      },
    },
    toggle: {
      base: "inline-flex xl:hidden",
      icon: "text-white",
    },
  },
  modal: {
    content: {
      base: "relative h-screen w-full p-0",
      inner: "relative flex max-h-screen h-screen flex-col bg-white rounded-xl",
    },
    header: {
      base: "flex lg:!px-[200px] items-start justify-start",
      close: {
        base: "inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white",
        icon: "h-5 w-5",
      },
    },
  },
};

export default function BlogPost() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("struggles");
  const [openModal, setOpenModal] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  // Handle scroll for progress bar and header visibility
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const progress = (currentScroll / totalScroll) * 100;
      setScrollProgress(progress);
      
      // Handle header visibility based on scroll direction
      if (currentScroll > lastScrollY && currentScroll > 100) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }
      setLastScrollY(currentScroll);
      
      // Update active section based on scroll position
      const sections = ["struggles", "core-problems", "empowering", "future"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  
  // Scroll to section function
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 100,
        behavior: "smooth"
      });
    }
  };
  
  // Variants for animations
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  return (
    <>
      <Flowbite theme={{ theme: customTheme }}>
        {/* Progress bar at top of screen */}
        <div 
          className="fixed top-0 left-0 h-1 bg-[#FE6623] z-50"
          style={{ width: `${scrollProgress}%` }}
        ></div>
        
        {/* Header */}
        <motion.header 
          className={`fixed z-40 w-full bg-white shadow-sm transition-transform duration-300 ${isHeaderVisible ? 'translate-y-0' : '-translate-y-full'}`}
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto">
            <Navbar className="bg-white border-gray-200 py-3" rounded>
              <Navbar.Brand as={Link} href="/">
                <img
                  src="/image/black-logo.png"
                  className="h-[50px] md:h-[60px]"
                  alt="DeeCogs Logo"
                />
              </Navbar.Brand>
              <Navbar.Toggle />
              <Navbar.Collapse>
                <ul className="flex flex-col p-4 xl:p-0 text-[16px] xl:text-[14px] mt-0 border-t border-[#ffffffb3] bg-black xl:bg-transparent space-y-3 xl:space-y-0 xl:flex-row xl:space-x-8 rtl:space-x-reverse xl:mt-0 xl:border-0">
                  {["Company", "Products", "Solutions", "Developers", "Resources"].map((item) => (
                    <li key={item}>
                      <Link
                        href="#"
                        className="text-black font-normal tracking-[-0.54px] hover:text-primary transition-colors duration-300"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      href="#"
                      className="text-black font-normal text-[14px] xl:text-[14px] border py-[4px] px-[24px] rounded-xl border-[#fe6623] hover:bg-[#fe6623] hover:text-white transition-all duration-300"
                    >
                      Login
                    </Link>
                  </li>
                </ul>
              </Navbar.Collapse>
            </Navbar>
          </div>
        </motion.header>
        
        <main className="pt-20">
          <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
            {/* Floating share buttons */}
            <motion.div 
              className="fixed right-4 top-1/4 z-30 flex flex-col gap-3 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-md"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              {[
                { icon: "facebook", color: "#3b5998" },
                { icon: "twitter", color: "#1da1f2" },
                { icon: "linkedin", color: "#0077b5" },
                { icon: "email", color: "#ea4335" }
              ].map((social) => (
                <motion.button 
                  key={social.icon} 
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                  whileHover={{ scale: 1.1, backgroundColor: `${social.color}20` }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-5 h-5" style={{ color: social.color }} viewBox="0 0 24 24" fill="currentColor">
                    {social.icon === "facebook" && <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />}
                    {social.icon === "twitter" && <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />}
                    {social.icon === "linkedin" && <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />}
                    {social.icon === "email" && <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />}
                  </svg>
                </motion.button>
              ))}
            </motion.div>
            
            {/* Article Header */}
            <motion.div 
              className="mb-8"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div 
                className="text-sm text-gray-500 mt-10 flex items-center gap-2"
                variants={fadeIn}
              >
                <svg width="16" height="11" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.5" d="M6.5 11V12C6.5 12.4167 6.646 12.771 6.938 13.063C7.23 13.355 7.584 13.5007 8 13.5C8.416 13.4993 8.77033 13.3537 9.063 13.063C9.35567 12.7723 9.50133 12.418 9.5 12V11H10.5C10.9167 11 11.271 10.8543 11.563 10.563C11.855 10.2717 12.0007 9.91733 12 9.5C11.9993 9.08267 11.8537 8.72867 11.563 8.438C11.2723 8.14733 10.918 8.00133 10.5 8H9.5V7C9.5 6.58333 9.35433 6.22933 9.063 5.938C8.77167 5.64667 8.41733 5.50067 8 5.5C7.58267 5.49933 7.22867 5.64533 6.938 5.938C6.64733 6.23067 6.50133 6.58467 6.5 7V8H5.5C5.08333 8 4.72933 8.146 4.438 8.438C4.14667 8.73 4.00067 9.084 4 9.5C3.99933 9.916 4.14533 10.2703 4.438 10.563C4.73067 10.8557 5.08467 11.0013 5.5 11H6.5ZM2 17.5C1.45 17.5 0.979333 17.3043 0.588 16.913C0.196666 16.5217 0.000666667 16.0507 0 15.5V6.5C0 6.18333 0.0709998 5.88333 0.213 5.6C0.355 5.31667 0.550667 5.08333 0.8 4.9L6.8 0.4C7.15 0.133333 7.55 0 8 0C8.45 0 8.85 0.133333 9.2 0.4L15.2 4.9C15.45 5.08333 15.646 5.31667 15.788 5.6C15.93 5.88333 16.0007 6.18333 16 6.5V15.5C16 16.05 15.804 16.521 15.412 16.913C15.02 17.305 14.5493 17.5007 14 17.5H2Z" fill="#131631" />
                </svg>
                <motion.span 
                  className="text-primary font-medium"
                  whileHover={{ scale: 1.05 }}
                >
                  HEALTHCARE
                </motion.span>
              </motion.div>
              
              <motion.h1 
                className="text-4xl md:text-5xl font-normal mb-6 text-black-400 leading-[1.2]"
                variants={fadeIn}
              >
                <span className="heading-orange">
                  Streamlining Healthcare:
                </span> How DeeCogs is Transforming Patient Care and Reducing Wait Times
              </motion.h1>
              
              <motion.div 
                className="flex flex-wrap items-center gap-4 text-sm text-gray-500"
                variants={fadeIn}
              >
                <span>11 December 2024</span>
                <span>|</span>
                <span className="text-[#5297D7]">15 Min Read</span>
                <motion.div 
                  className="flex items-center gap-3 ml-auto"
                  whileHover={{ scale: 1.05 }}
                >
                  <button className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors">
                    <svg width="18" height="20" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path opacity="0.5" d="M20 27C18.8889 27 17.9444 26.6063 17.1667 25.8188C16.3889 25.0312 16 24.075 16 22.95C16 22.815 16.0333 22.5 16.1 22.005L6.73333 16.47C6.37778 16.8075 5.96667 17.0721 5.5 17.2638C5.03333 17.4555 4.53333 17.5509 4 17.55C2.88889 17.55 1.94444 17.1562 1.16667 16.3687C0.388889 15.5813 0 14.625 0 13.5C0 12.375 0.388889 11.4187 1.16667 10.6313C1.94444 9.84375 2.88889 9.45 4 9.45C4.53333 9.45 5.03333 9.54585 5.5 9.73755C5.96667 9.92925 6.37778 10.1934 6.73333 10.53L16.1 4.995C16.0556 4.8375 16.028 4.68585 16.0173 4.54005C16.0067 4.39425 16.0009 4.2309 16 4.05C16 2.925 16.3889 1.96875 17.1667 1.18125C17.9444 0.39375 18.8889 0 20 0C21.1111 0 22.0556 0.39375 22.8333 1.18125C23.6111 1.96875 24 2.925 24 4.05C24 5.175 23.6111 6.13125 22.8333 6.91875C22.0556 7.70625 21.1111 8.1 20 8.1C19.4667 8.1 18.9667 8.00415 18.5 7.81245C18.0333 7.62075 17.6222 7.3566 17.2667 7.02L7.9 12.555C7.94445 12.7125 7.97244 12.8646 7.984 13.0113C7.99556 13.158 8.00089 13.3209 8 13.5C7.99911 13.6791 7.99378 13.8425 7.984 13.9901C7.97422 14.1377 7.94622 14.2893 7.9 14.445L17.2667 19.98C17.6222 19.6425 18.0333 19.3783 18.5 19.1875C18.9667 18.9967 19.4667 18.9009 20 18.9C21.1111 18.9 22.0556 19.2938 22.8333 20.0813C23.6111 20.8687 24 21.825 24 22.95C24 24.075 23.6111 25.0312 22.8333 25.8188C22.0556 26.6063 21.1111 27 20 27Z" fill="#131631" />
                    </svg>
                    Share
                  </button>
                  <button className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors">
                    <svg width="18" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path opacity="0.5" d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z" fill="#131631" />
                    </svg>
                    Save
                  </button>
                </motion.div>
              </motion.div>
            </motion.div>
            
            {/* Table of Contents */}
            <motion.div 
              className="hidden md:block fixed left-0 top-32 w-[250px]"
              style={{
                position: 'sticky',
                alignSelf: 'flex-start',
                marginLeft: '-250px',
                height: '62px'
              }}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <div className="p-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm">
                <h3 className="text-[14px] font-medium text-[#525252] mb-4">Table of Contents:</h3>
                <ul className="space-y-3 text-[#525252]">
                  {[
                    { id: 'struggles', name: 'The Struggles of Healthcare' },
                    { id: 'core-problems', name: 'Addressing the Core Problems' },
                    { id: 'empowering', name: 'Empowering Patients' },
                    { id: 'future', name: 'Future Awaits' }
                  ].map((section) => (
                    <motion.li key={section.id}>
                      <motion.a
                        href={`#${section.id}`}
                        className={`flex items-start gap-2 text-[12px] font-normal transition-all duration-300 ${activeSection === section.id ? 'text-primary font-medium' : 'text-gray-600 hover:text-primary'}`}
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection(section.id);
                        }}
                        whileHover={{ x: 5 }}
                      >
                        <motion.span
                          animate={{ 
                            scale: activeSection === section.id ? [1, 1.2, 1] : 1,
                            color: activeSection === section.id ? "#FE6623" : "#525252"
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          •
                        </motion.span>
                        {section.name}
                      </motion.a>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Featured Image */}
            <motion.div 
              className="relative rounded-lg mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="/image/llm-1.png" 
                alt="Doctor with patient" 
                className="w-full h-[350px] object-cover rounded-lg shadow-md" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg"></div>
              <div className="absolute bottom-4 left-4 text-white text-sm bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
                Featured Image: AI-Driven Healthcare Solutions
              </div>
            </motion.div>
            
            {/* Article Content */}
            <article className="prose max-w-full mx-auto lg:space-y-2">
              {/* Section 1 */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <motion.h2 
                  id="struggles" 
                  className="text-3xl font-semibold mb-6 mt-20 text-gray-900 scroll-mt-32"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  The Struggles of Healthcare: Tackling Waiting Times and Hidden Costs
                </motion.h2>

                <motion.p 
                  className="text-gray-800 mb-20 leading-8 max-w-[850px] text-[16px] text-justify"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Imagine this: You're a patient who has waited for weeks to see a doctor, and now you're sitting in the waiting room. Finally, it's your turn, but as you walk into the doctor's office, something goes wrong. Your medical file, the one you've been carrying with you for months, is missing a crucial document. The doctor asks you for information, but it's nowhere to be found. Now, you have to wait even longer while a new round of tests is ordered. Not only does this delay your treatment, but it also costs you more time and money.
                </motion.p>

                <motion.p 
                  className="text-gray-800 mb-10 leading-8 max-w-[850px] text-[16px] text-justify"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  This scenario is far too common in healthcare. Long waiting times, missing documents, and confusion about treatment plans are everyday struggles for both patients and doctors. But perhaps one of the most frustrating issues is the lack of transparency regarding medications. Patients often have little understanding of the drugs they're prescribed — how much they should cost, what they're for, or even the right way to take them. This knowledge gap can lead to overcharging, wrong treatments, or confusion during the treatment process.
                </motion.p>
                
                {/* Pull quote */}
                <motion.blockquote 
                  className="border-l-4 border-[#FE6623] pl-4 italic text-xl text-gray-700 my-10"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  "The average patient spends over 18 minutes in a waiting room before seeing their doctor, with some specialties averaging wait times of 20+ days for an appointment."
                </motion.blockquote>
              </motion.div>
              
              {/* Section 2 */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <motion.h2 
                  id="core-problems" 
                  className="text-3xl font-semibold mb-6 text-gray-900 mt-[40px] scroll-mt-32"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  Addressing the Core Problems: Patient Time and Information Gaps
                </motion.h2>

                <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mt-10 mb-16">
                  <motion.img
                    className="w-[300px] h-[400px] object-cover rounded-lg shadow-md"
                    src="/image/image copy.png"
                    alt="Healthcare Challenges"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  />
                  <motion.p 
                    className="text-gray-800 leading-8 max-w-[850px] text-[16px] text-justify mt-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    We understand the frustrations that patients face. The loss of important documents, confusion
                    about treatment plans, and lack of understanding about medications are major obstacles to
                    effective healthcare. These problems not only harm patients but also make the doctor's job more
                    difficult, leading to unnecessary delays and mistakes.
                  </motion.p>
                </div>

                <motion.p 
                  className="text-gray-800 leading-8 max-w-[850px] text-[16px] text-justify mb-20"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  We are working on a solution that aims to address these challenges using AI and technology.
                  Our team is developing an innovative approach to simplify the doctor-patient experience by
                  reducing waiting times and offering greater transparency in healthcare.
                </motion.p>
                
                {/* Statistics cards */}
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-3 gap-4 my-12"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, staggerChildren: 0.1 }}
                >
                  {[
                    { number: "87%", text: "of patients report frustration with wait times" },
                    { number: "62%", text: "of medical errors are due to miscommunication" },
                    { number: "40%", text: "reduction in wait times with AI scheduling" }
                  ].map((stat, index) => (
                    <motion.div 
                      key={index}
                      className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                    >
                      <h3 className="text-4xl font-bold text-primary mb-2">{stat.number}</h3>
                      <p className="text-gray-700">{stat.text}</p>
                      </motion.div>
                 ))}
               </motion.div>
             </motion.div>
             
             {/* Section 3 */}
             <motion.div
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.8 }}
             >
               <motion.h2 
                 id="empowering" 
                 className="text-3xl font-semibold mb-6 text-gray-900 mt-40 scroll-mt-32"
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.5 }}
               >
                 Empowering Patients: No More Hidden Costs or Confusion
               </motion.h2>

               <motion.p 
                 className="text-gray-800 mb-16 mt-20 leading-8 max-w-[850px] text-[16px] text-justify"
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.5, delay: 0.2 }}
               >
                 A significant issue that many patients face is the lack of awareness about the medications they're prescribed.
                 Often, patients have little understanding of the drugs they're taking, including their prices, usage instructions,
                 and potential side effects. This knowledge gap can lead to confusion and, worse, exploitation. Patients sometimes
                 find themselves paying much more than they should for medications, or worse, being tricked into unnecessary treatments.
               </motion.p>

               <motion.div 
                 className="relative rounded-xl overflow-hidden mb-20 mt-10"
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.7 }}
               >
                 <img
                   src="/image/image copy 2.png"
                   className="w-full h-[300px] object-cover rounded-xl shadow-lg"
                   alt="Healthcare Solution"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
                 <div className="absolute bottom-6 left-6 text-white max-w-md">
                   <h4 className="text-xl font-semibold mb-2">AI-Powered Healthcare Solutions</h4>
                   <p className="text-sm text-white/90">Our platform provides transparent medication information and reduces administrative burden.</p>
                 </div>
               </motion.div>
               
               {/* Feature cards */}
               <motion.div 
                 className="grid grid-cols-1 md:grid-cols-2 gap-6 my-16"
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 viewport={{ once: true }}
                 transition={{ staggerChildren: 0.2 }}
               >
                 {[
                   { 
                     title: "Transparent Medication Information", 
                     description: "Patients receive clear details about their prescriptions, including pricing and alternatives.",
                     icon: "pill"
                   },
                   { 
                     title: "Streamlined Documentation", 
                     description: "AI-powered systems ensure all medical records are properly organized and accessible.",
                     icon: "document"
                   },
                   { 
                     title: "Reduced Wait Times", 
                     description: "Smart scheduling and digital pre-check-in reduce time spent in waiting rooms.",
                     icon: "clock"
                   },
                   { 
                     title: "Enhanced Communication", 
                     description: "Secure messaging systems improve doctor-patient communication and follow-up care.",
                     icon: "chat"
                   }
                 ].map((feature, index) => (
                   <motion.div 
                     key={feature.title}
                     className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: index * 0.1 }}
                     whileHover={{ y: -5, borderColor: "#FE6623" }}
                   >
                     <div className="flex items-start">
                       <div className="w-12 h-12 rounded-full bg-[#FE6623]/10 flex items-center justify-center mr-4 flex-shrink-0">
                         <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                           {feature.icon === "pill" && (
                             <path d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" strokeLinecap="round" strokeLinejoin="round" />
                           )}
                           {feature.icon === "document" && (
                             <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" />
                           )}
                           {feature.icon === "clock" && (
                             <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
                           )}
                           {feature.icon === "chat" && (
                             <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" strokeLinecap="round" strokeLinejoin="round" />
                           )}
                         </svg>
                       </div>
                       <div>
                         <h3 className="text-xl font-medium text-gray-900 mb-2">{feature.title}</h3>
                         <p className="text-gray-600">{feature.description}</p>
                       </div>
                     </div>
                   </motion.div>
                 ))}
               </motion.div>
             </motion.div>
             
             {/* Section 4 */}
             <motion.div
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.8 }}
             >
               <motion.h2 
                 id="future" 
                 className="text-3xl font-semibold mb-6 text-gray-900 mt-16 scroll-mt-32"
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.5 }}
               >
                 A Future Where Technology Works for Patients
               </motion.h2>

               <motion.p 
                 className="text-gray-800 mb-8 leading-8 max-w-[850px] text-[16px] text-justify"
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.5, delay: 0.2 }}
               >
                 At DeeCogs, we are dedicated to transforming healthcare by addressing the everyday challenges
                 that patients face through AI. From long waits and misplaced medical records to unclear treatment
                 plans and hidden costs, we understand the barriers that make accessing quality care frustrating.
               </motion.p>

               <motion.p 
                 className="text-gray-800 mb-8 leading-8 max-w-[850px] text-[16px] text-justify"
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.5, delay: 0.3 }}
               >
                 With us, healthcare becomes an experience designed around the patient. By tackling delays, confusion,
                 and inefficiencies, we ensure that every individual receives the care they need, when they need it,
                 without unnecessary stress.
               </motion.p>

               <motion.p 
                 className="text-gray-800 mb-16 leading-8 max-w-[850px] text-[16px] text-justify"
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.5, delay: 0.4 }}
               >
                 <i>Our commitment is simple: "A future where patients are empowered and cared for like never before."</i>
               </motion.p>
               
               {/* Call to action */}
               <motion.div 
                 className="bg-gradient-to-r from-[#FE6623]/10 to-[#FE6623]/5 p-8 rounded-xl my-12"
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.6 }}
               >
                 <h3 className="text-2xl font-semibold mb-4">Interested in our healthcare solutions?</h3>
                 <p className="text-gray-700 mb-6">Discover how DeeCogs can transform patient care at your healthcare facility.</p>
                 <motion.button 
                   className="bg-[#FE6623] text-white py-3 px-6 rounded-full hover:bg-[#FE6623]/90 transition-colors shadow-sm"
                   whileHover={{ scale: 1.05 }}
                   whileTap={{ scale: 0.95 }}
                 >
                   Request a Demo
                 </motion.button>
               </motion.div>

               <motion.svg
                 width="100%"
                 height="3"
                 opacity="0.5"
                 viewBox="0 0 988 6"
                 fill="none"
                 xmlns="http://www.w3.org/2000/svg"
                 className="mb-12 mt-20"
                 initial={{ width: 0 }}
                 whileInView={{ width: "100%" }}
                 viewport={{ once: true }}
                 transition={{ duration: 1.5 }}
               >
                 <path
                   d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM981.833 3C981.833 4.47276 983.027 5.66667 984.5 5.66667C985.973 5.66667 987.167 4.47276 987.167 3C987.167 1.52724 985.973 0.333333 984.5 0.333333C983.027 0.333333 981.833 1.52724 981.833 3ZM3 3.5H984.5V2.5H3V3.5Z"
                   fill="black"
                 />
               </motion.svg>
               
               {/* Author section */}
               <motion.div 
                 className="flex items-center gap-4 mt-8 mb-16 p-6 bg-gray-50 rounded-xl"
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.5 }}
                 whileHover={{ backgroundColor: "#FE6623/5" }}
               >
                 <img 
                   src="/image/author-avatar.jpg" 
                   alt="Author" 
                   className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-sm"
                 />
                 <div>
                   <h4 className="text-lg font-medium">Dr. Sarah Johnson</h4>
                   <p className="text-gray-600">Healthcare Technology Specialist at DeeCogs</p>
                   <div className="flex gap-2 mt-2">
                     {["linkedin", "twitter"].map(platform => (
                       <a 
                         key={platform} 
                         href="#" 
                         className="text-gray-500 hover:text-primary transition-colors"
                       >
                         <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                           {platform === "linkedin" && (
                             <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                           )}
                           {platform === "twitter" && (
                             <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                           )}
                         </svg>
                       </a>
                     ))}
                   </div>
                 </div>
               </motion.div>
             </motion.div>
           </article>
         </section>

         {/* Related Articles */}
         <section className="mt-12 bg-[#F9FAF8] py-16">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <motion.h3 
               className="text-4xl font-normal mb-10 text-black-400 leading-tight"
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5 }}
             >
               <span className="heading-orange">Read More</span>
             </motion.h3>
             
             <motion.div 
               className="flex overflow-x-auto pb-10 scrollbar-hide gap-6"
               style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: 0.2 }}
             >
               {[
                 {
                   title: "Data Science Meets Oncology",
                   excerpt: "One of the key outcomes of this initiative is the convergence of medical expertise and data science insights.",
                   tag: "Blog"
                 },
                 {
                   title: "AI in Healthcare",
                   excerpt: "Exploring how artificial intelligence is revolutionizing patient care and medical diagnostics.",
                   tag: "Blog"
                 },
                 {
                   title: "Future of Medicine",
                   excerpt: "Discover how technology is shaping the next generation of healthcare delivery and patient experience.",
                   tag: "Blog"
                 }
               ].map((article, index) => (
                 <motion.div 
                   key={index}
                   className="min-w-[350px] max-w-[450px] h-[330px] flex-shrink-0 bg-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-[20px] p-8 border border-gray-200 relative"
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                   whileHover={{ y: -10 }}
                 >
                   <span className="px-3 py-1 text-sm font-medium text-gray-600 bg-gray-100 rounded-md">
                     {article.tag}
                   </span>
                   <h3 className="text-2xl font-semibold mt-4">{article.title}</h3>
                   <p className="text-lg text-[#668BB3] mt-3">
                     {article.excerpt}
                   </p>
                   <motion.a 
                     href="#" 
                     className="text-primary text-xl absolute bottom-8 transition-colors duration-200 inline-flex items-center"
                     whileHover={{ x: 5 }}
                   >
                     <span className="mr-2">Read article</span>
                     <svg width="8" height="8" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M10.9324 3.51491V11.3718C10.9324 11.6647 11.0317 11.9104 11.2301 12.1089C11.4286 12.3074 11.674 12.4063 11.9662 12.4056C12.2584 12.4049 12.5038 12.3056 12.7023 12.1078C12.9008 11.91 13 11.6647 13 11.3718V1.0338C13 0.740888 12.9008 0.495534 12.7023 0.297734C12.5038 0.0999338 12.2584 0.000689198 11.9662 0H1.62823C1.33532 0 1.08962 0.0992446 0.891134 0.297734C0.692646 0.496223 0.593745 0.741577 0.594435 1.0338C0.595123 1.32602 0.694368 1.57172 0.892168 1.77089C1.08997 1.97007 1.33532 2.06897 1.62823 2.06759H9.48509L0.284296 11.2684C0.0947666 11.4579 0 11.6991 0 11.992C0 12.285 0.0947666 12.5262 0.284296 12.7157C0.473825 12.9052 0.715043 13 1.00795 13C1.30086 13 1.54208 12.9052 1.73161 12.7157L10.9324 3.51491Z" fill="currentColor" className="transition-colors duration-200" />
                     </svg>
                   </motion.a>
                 </motion.div>
               ))}
             </motion.div>
             
             <motion.div 
               className="text-center mt-8"
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: 0.5 }}
             >
               <motion.a 
                 href="/blog" 
                 className="inline-flex items-center text-primary font-medium hover:underline"
                 whileHover={{ x: 5 }}
               >
                 <span>Browse all articles</span>
                 <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                 </svg>
               </motion.a>
             </motion.div>
           </div>
         </section>

         {/* CTA Section */}
         <section className="bg-[url('/image/image-bg-gradient.jpg')] bg-cover bg-center py-24">
           <div className="container max-w-[90rem] mx-auto px-[10px]">
             <div className="flex justify-center flex-wrap">
               <div className="basis-full md:basis-8/12">
                 <motion.div 
                   className="relative z-10 py-12"
                   initial={{ opacity: 0 }}
                   whileInView={{ opacity: 1 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.6 }}
                 >
                   <motion.h2 
                     className="text-3xl md:text-4xl font-normal text-center mb-10"
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.6, delay: 0.2 }}
                   >
                     <span className="text-[#5B5958] block mb-2">
                       Ready to unlock the power of AI for your business?
                     </span>
                     Let's start the journey today!
                   </motion.h2>
                   
                   <motion.img
                     src="/image/d.png"
                     className="max-w-[400px] w-full absolute right-0 top-0 bottom-0 opacity-10 z-0"
                     alt="DeeCogs Logo"
                     initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                     animate={{ opacity: 0.1, scale: 1, rotate: 0 }}
                     transition={{ duration: 1 }}
                   />
                   
                   <motion.div 
                     className="text-center mt-10"
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.5, delay: 0.4 }}
                   >
                     <motion.a
                       className="bg-[#FE6623] text-white py-3 px-8 rounded-full inline-block hover:bg-[#FE6623]/90 transition-colors shadow-md"
                       href="#"
                       whileHover={{ scale: 1.05 }}
                       whileTap={{ scale: 0.95 }}
                       onClick={() => setOpenModal(true)}
                     >
                       Book a Demo
                     </motion.a>
                   </motion.div>
                 </motion.div>
               </div>
             </div>
           </div>
         </section>

         {/* Footer */}
         <footer className="bg-[url('/image/footer.jpg')] pt-[56px] lg:pt-[255px] relative bg-cover bg-center bg-no-repeat">
           <div className="container relative z-10 px-[10px] mx-auto">
             <motion.div 
               className="flex flex-wrap flex-row"
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, staggerChildren: 0.1 }}
             >
               <motion.div 
                 className="basis-full mb-[20px] lg:basis-5/12"
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.5 }}
               >
                 <div className="pe-[15px]">
                   <Link href="/">
                     <motion.img
                       src="/image/logo-footer.png"
                       className="max-w-[250px] lg:max-w-[400px] mb-[15px] lg:mb-[55px] block"
                       alt="DeeCogs Logo"
                       initial={{ opacity: 0 }}
                       animate={{ opacity: 1 }}
                       transition={{ duration: 0.5 }}
                       whileHover={{ filter: "brightness(1.1)" }}
                     />
                   </Link>

                   <motion.p 
                     className="text-[#000000bf] max-w-[531px] text-[16px] lg:text-[22px]"
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.5, delay: 0.2 }}
                   >
                     We craft AI-driven solutions to transform your challenges into
                     opportunities.
                   </motion.p>
                 </div>
               </motion.div>
               
               <motion.div 
                 className="basis-full lg:basis-7/12"
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.6, delay: 0.3 }}
               >
                 <div className="grid grid-cols-2 lg:grid-cols-4 gap-[10px] lg:gap-[15px]">
                   {[
                     {
                       title: "Company",
                       links: ["About Us", "Careers", "Contact Us", "Trust Centre", "Recognitions"]
                     },
                     {
                       title: "Resources",
                       links: ["Case Studies", "Publications", "Testimonials", "Blogs", "Videos"]
                     },
                     {
                       title: "Products",
                       links: ["Docurate", "VisionTech", "Fusio", "Rae", "Notei"]
                     },
                     {
                       title: "Solutions",
                       links: [
                         "Canse (Cancer Risk Predictor)",
                         "Therai (Cancer Prognostic Tool)",
                         "Excerli (Workout Platform)"
                       ]
                     }
                   ].map((column, columnIndex) => (
                     <div key={column.title}>
                       <h2 className="text-[20px] lg:text-[26px] font-bold mb-[15px] lg:mb-[46px] text-[#0000009c]">
                         {column.title}
                       </h2>
                       <ul className="m-0 p-0">
                         {column.links.map((link) => (
                           <motion.li 
                             key={link} 
                             className="mb-[10px] lg:mb-[24px]"
                             whileHover={{ x: 5 }}
                             transition={{ duration: 0.2 }}
                           >
                             <Link
                               href="#"
                               className="text-[#707070] text-[16px] lg:text-[20px] hover:text-primary transition-colors duration-300"
                             >
                               {link}
                             </Link>
                           </motion.li>
                         ))}
                       </ul>
                     </div>
                   ))}
                 </div>
               </motion.div>
             </motion.div>
             
             <motion.div 
               className="flex flex-wrap mt-[30px] lg:mt-[0px] mb-[30px] lg:mb-[80px] flex-row items-end justify-between lg:pe-[150px]"
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: 0.4 }}
             >
               <div className="basis-full pe-[15px] lg:basis-5/12">
                 <div className="max-w-[556px]">
                   <span className="text-[#0000008a] font-normal text-[26px] lg:text-[28px]">
                     For Latest Insights
                   </span>
                   <h3 className="text-[#000000] font-normal text-[32px] lg:text-[40px]">
                     Subscribe for Updates.
                   </h3>
                   <form className="mt-[30px] lg:mt-[50px]">
                     <div className="w-full relative group">
                       <input
                         type="email"
                         name="floating_email"
                         id="floating_email"
                         className="block arrow-bg-input pe-[35px] bg-no-repeat py-2.5 px-0 w-full text-[#000] bg-transparent border-0 border-b-2 border-[#000000bf] appearance-none focus:outline-none focus:ring-0 placeholder:text-[#000000bf] text-[20px] focus:border-[#FE6623] peer"
                         placeholder="Enter your email address.."
                         required
                       />
                       <motion.button
                         type="submit"
                         className="absolute right-0 top-1/2 -translate-y-1/2 bg-transparent border-none p-0"
                         whileHover={{ x: 5 }}
                         whileTap={{ scale: 0.95 }}
                       >
                         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M2 12L22 12" stroke="#FE6623" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                           <path d="M15 5L22 12L15 19" stroke="#FE6623" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                         </svg>
                       </motion.button>
                     </div>
                   </form>
                 </div>
               </div>
               
               <div className="basis-full mt-[15px] lg:mt-[0px] lg:basis-5/12">
                 <div className="flex flex-wrap justify-between lg:justify-end items-center">
                   {[
                     { href: "https://in.linkedin.com/company/deecogs", icon: "linkedin" },
                     { href: "https://x.com/Deecogs_ai", icon: "twitter" },
                     { href: "#", icon: "youtube" },
                     { href: "https://www.instagram.com/deecogs_/#", icon: "instagram" }
                   ].map((social, index) => (
                     <motion.div 
                       key={social.icon} 
                       className={`px-[15px] ${index === 0 ? 'ps-0' : ''} ${index === 3 ? 'pe-[0px]' : ''}`}
                       whileHover={{ scale: 1.1, y: -3 }}
                     >
                       <Link
                         className="text-[#55576A] hover:text-primary transition-colors duration-300"
                         href={social.href}
                       >
                         {/* Using the existing SVG elements from your code */}
                         {social.icon === "linkedin" && (
                           <svg
                             width="45"
                             height="50"
                             viewBox="0 0 55 54"
                             className="ftsvg"
                             fill="none"
                             xmlns="http://www.w3.org/2000/svg"
                           >
                             <path
                               d="M48.8889 0C50.5097 0 52.064 0.632141 53.2101 1.75736C54.3562 2.88258 55 4.4087 55 6V48C55 49.5913 54.3562 51.1174 53.2101 52.2426C52.064 53.3679 50.5097 54 48.8889 54H6.11111C4.49034 54 2.93596 53.3679 1.7899 52.2426C0.643847 51.1174 0 49.5913 0 48V6C0 4.4087 0.643847 2.88258 1.7899 1.75736C2.93596 0.632141 4.49034 0 6.11111 0H48.8889ZM47.3611 46.5V30.6C47.3611 28.0062 46.3116 25.5186 44.4436 23.6845C42.5755 21.8504 40.0419 20.82 37.4 20.82C34.8028 20.82 31.7778 22.38 30.3111 24.72V21.39H21.7861V46.5H30.3111V31.71C30.3111 29.4 32.2056 27.51 34.5583 27.51C35.6929 27.51 36.7809 27.9525 37.5832 28.7402C38.3854 29.5278 38.8361 30.5961 38.8361 31.71V46.5H47.3611ZM11.8556 16.68C13.217 16.68 14.5227 16.149 15.4854 15.2038C16.4481 14.2586 16.9889 12.9767 16.9889 11.64C16.9889 8.85 14.6972 6.57 11.8556 6.57C10.486 6.57 9.17255 7.10416 8.20413 8.05497C7.23572 9.00578 6.69167 10.2954 6.69167 11.64C6.69167 14.43 9.01389 16.68 11.8556 16.68ZM16.1028 46.5V21.39H7.63889V46.5H16.1028Z"
                               fill="currentColor"
                             />
                           </svg>
                         )}
                         {social.icon === "twitter" && (
                           <svg
                             width="45"
                             height="50"
                             viewBox="0 0 55 54"
                             fill="none"
                             className="ftsvg"
                             xmlns="http://www.w3.org/2000/svg"
                           >
                             <path
                               d="M0 0H6.25L43.75 54H37.5L0 0ZM11.25 0H17.5L55 54H48.75L11.25 0Z"
                               fill="currentColor"
                             />
                             <path
                               d="M5 0L17.5 0V5.4H5V0ZM37.5 54H50V48.6H37.5V54Z"
                               fill="currentColor"
                             />
                             <path
                               d="M43.75 0H52.5L10 54H1.25L43.75 0Z"
                               fill="currentColor"
                             />
                           </svg>
                         )}
                         {social.icon === "youtube" && (
                           <svg
                             width="60"
                             height="54"
                             viewBox="0 0 72 48"
                             fill="none"
                             className="ftsvg"
                             xmlns="http://www.w3.org/2000/svg"
                           >
                             <path
                               d="M28.8 34.2857L47.484 24L28.8 13.7143V34.2857ZM70.416 7.44C70.884 9.05143 71.208 11.2114 71.424 13.9543C71.676 16.6971 71.784 19.0629 71.784 21.12L72 24C72 31.5086 71.424 37.0286 70.416 40.56C69.516 43.6457 67.428 45.6343 64.188 46.4914C62.496 46.9371 59.4 47.2457 54.648 47.4514C49.968 47.6914 45.684 47.7943 41.724 47.7943L36 48C20.916 48 11.52 47.4514 7.812 46.4914C4.572 45.6343 2.484 43.6457 1.584 40.56C1.116 38.9486 0.792 36.7886 0.576 34.0457C0.324 31.3029 0.216 28.9371 0.216 26.88L0 24C0 16.4914 0.576 10.9714 1.584 7.44C2.484 4.35429 4.572 2.36571 7.812 1.50857C9.504 1.06286 12.6 0.754285 17.352 0.548571C22.032 0.308571 26.316 0.205714 30.276 0.205714L36 0C51.084 0 60.48 0.548572 64.188 1.50857C67.428 2.36571 69.516 4.35429 70.416 7.44Z"
                               fill="currentColor"
                             />
                           </svg>
                         )}
                         {social.icon === "instagram" && (
                           <svg
                             width="45"
                             height="50"
                             className="ftsvg"
                             viewBox="0 0 55 54"
                             fill="none"
                             xmlns="http://www.w3.org/2000/svg"
                           >
                             <path
                               d="M15.95 0H39.05C47.85 0 55 7.02 55 15.66V38.34C55 42.4933 53.3196 46.4765 50.3284 49.4133C47.3372 52.3501 43.2802 54 39.05 54H15.95C7.15 54 0 46.98 0 38.34V15.66C0 11.5067 1.68044 7.52353 4.67165 4.58671C7.66285 1.64989 11.7198 0 15.95 0ZM15.4 5.4C12.7744 5.4 10.2563 6.42407 8.39964 8.24692C6.54303 10.0698 5.5 12.5421 5.5 15.12V38.88C5.5 44.253 9.9275 48.6 15.4 48.6H39.6C42.2256 48.6 44.7437 47.5759 46.6004 45.7531C48.457 43.9302 49.5 41.4579 49.5 38.88V15.12C49.5 9.747 45.0725 5.4 39.6 5.4H15.4ZM41.9375 9.45C42.8492 9.45 43.7235 9.80558 44.3682 10.4385C45.0128 11.0715 45.375 11.9299 45.375 12.825C45.375 13.7201 45.0128 14.5786 44.3682 15.2115C43.7235 15.8444 42.8492 16.2 41.9375 16.2C41.0258 16.2 40.1515 15.8444 39.5068 15.2115C38.8622 14.5786 38.5 13.7201 38.5 12.825C38.5 11.9299 38.8622 11.0715 39.5068 10.4385C40.1515 9.80558 41.0258 9.45 41.9375 9.45ZM27.5 13.5C31.1467 13.5 34.6441 14.9223 37.2227 17.4541C39.8013 19.9858 41.25 23.4196 41.25 27C41.25 30.5804 39.8013 34.0142 37.2227 36.5459C34.6441 39.0777 31.1467 40.5 27.5 40.5C23.8533 40.5 20.3559 39.0777 17.7773 36.5459C15.1987 34.0142 13.75 30.5804 13.75 27C13.75 23.4196 15.1987 19.9858 17.7773 17.4541C20.3559 14.9223 23.8533 13.5 27.5 13.5ZM27.5 18.9C25.312 18.9 23.2135 19.7534 21.6664 21.2724C20.1192 22.7915 19.25 24.8517 19.25 27C19.25 29.1483 20.1192 31.2085 21.6664 32.7276C23.2135 34.2466 25.312 35.1 27.5 35.1C29.688 35.1 31.7865 34.2466 33.3336 32.7276C34.8808 31.2085 35.75 29.1483 35.75 27C35.75 24.8517 34.8808 22.7915 33.3336 21.2724C31.7865 19.7534 29.688 18.9 27.5 18.9Z"
                               fill="currentColor"
                             />
                           </svg>
                         )}
                       </Link>
                     </motion.div>
                   ))}
                 </div>
               </div>
             </motion.div>
             
             <motion.div
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5 }}
             >
               <hr className="border-0 h-[1px] bg-hr-gradient" />
             </motion.div>
             
             <motion.div 
               className="text-center py-[15px] lg:py-[32px]"
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: 0.2 }}
             >
               <span className="text-[#292C33] block mb-[32px] text-[14px]">
                 @2025 DeeCogs
               </span>
               <ul className="flex justify-center">
                 {["Legal", "Privacy", "Trust"].map((item) => (
                   <motion.li 
                     key={item} 
                     className="px-[32px]"
                     whileHover={{ y: -2 }}
                   >
                     <Link href="#" className="text-[#292C33] text-[14px] hover:text-primary transition-colors duration-300">
                       {item}
                     </Link>
                   </motion.li>
                 ))}
               </ul>
             </motion.div>
           </div>
           
           <motion.img
             src="/image/footer-shape.png"
             className="absolute max-w-[600px] md:max-w-[1280px] right-0 bottom-0 z-0"
             alt="Footer Shape"
             initial={{ opacity: 0, x: 100 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
           />
         </footer>
       </main>
     </Flowbite>
   </>
 );
}