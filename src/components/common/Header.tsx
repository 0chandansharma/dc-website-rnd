// src/components/common/Header.tsx
"use client";
import React, { useState, useEffect } from "react";
import { Navbar } from "flowbite-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/common/Button";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Navigation items with dropdown menus
  const navItems = [
    { 
      name: "Products", 
      path: "#",
      dropdown: [
        { name: "Docurate", path: "/products/docurate" },
        { name: "VisionTech", path: "/coming-soon/visiontech" },
        { name: "Fusio", path: "/coming-soon/fusio" },
        { name: "Rae", path: "/coming-soon/rae" },
        { name: "Notei", path: "/coming-soon/notei" }
      ]
    },
    { 
      name: "Solutions", 
      path: "#",
      dropdown: [
        { name: "Healthcare", path: "/coming-soon/healthcare" },
        { name: "Finance", path: "/coming-soon/finance" },
        { name: "Retail", path: "/coming-soon/retail" },
        { name: "Manufacturing", path: "/solutions/manufacturing" }
      ]
    },
    { 
      name: "Developers", 
      path: "#",
      dropdown: [
        { name: "Documentation", path: "/coming-soon/docs" },
        { name: "API References", path: "/coming-soon/api" },
        { name: "SDK", path: "/coming-soon/sdk" }
      ]
    },
    { 
      name: "Resources", 
      path: "#",
      dropdown: [
        { name: "Blog", path: "/blog" },
        { name: "Case Studies", path: "/coming-soon/case-studies" },
        { name: "Whitepapers", path: "/coming-soon/whitepapers" }
      ]
    },
    { 
      name: "Company", 
      path: "#",
      dropdown: [
        { name: "About Us", path: "/company/about" },
        { name: "Careers", path: "/company/careers" },
        { name: "Contact", path: "/company/contact" }
      ]
    },
  ];
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (index: number) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.header 
      className={`fixed w-full z-[100] transition-all duration-300 ${
        scrolled 
          ? 'bg-black/60 backdrop-blur-md py-2 shadow-lg' 
          : 'bg-black/20 backdrop-blur-sm py-4'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container max-w-[90rem] mx-auto px-5">
        <Navbar
          className="bg-transparent border-0 shadow-none py-0 flex items-center"
          rounded={false}
        >
          <Navbar.Brand as={Link} href="/">
            <motion.img
              src="/image/white-logo.png"
              className="h-12 md:h-16 lg:h-19"
              alt="DeeCogs Logo"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            />
          </Navbar.Brand>
          
          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center space-x-8 ml-auto">
            {navItems.map((item, index) => (
              <div key={`desktop-${item.name}`} className="relative group">
                <motion.div
                  className="relative"
                  onHoverStart={() => toggleDropdown(index)}
                  onHoverEnd={() => toggleDropdown(null)}
                >
                  <Link 
                    href={item.path}
                    className="text-white hover:text-primary transition-colors font-normal text-base py-2 flex items-center"
                  >
                    {item.name}
                    <motion.svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-4 w-4 ml-1" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                      animate={{ rotate: activeDropdown === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  </Link>
                
                  {/* Dropdown Menu (Desktop) */}
                  <AnimatePresence>
                    {activeDropdown === index && (
                      <motion.div 
                        className="absolute top-full left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-hidden z-50"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="py-1">
                          {item.dropdown.map((dropdownItem, itemIndex) => (
                            <motion.div
                              key={`desktop-dropdown-${item.name}-${dropdownItem.name}`}
                              whileHover={{ 
                                backgroundColor: "#f3f4f6", 
                                color: "#FE6623",
                                x: 5
                              }}
                              transition={{ duration: 0.2 }}
                            >
                              <Link
                                href={dropdownItem.path}
                                className="block px-4 py-2 text-sm text-gray-700"
                              >
                                {dropdownItem.name}
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            ))}
            
            <div className="ml-6 flex items-center space-x-4">
              <Button
                text="Login"
                variant="outline"
                size="sm"
                href="/login"
                className="text-white border-white hover:bg-primary hover:border-primary px-10"
                target="_blank"
              />
            </div>
          </div>
          
          {/* Mobile Menu Toggle */}
          <div className="xl:hidden ml-auto z-[100]">
            <button 
              onClick={handleMobileMenuToggle}
              className="text-white focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
          
          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
              className="xl:hidden fixed inset-0 w-screen h-screen bg-black/90 z-[9999] overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              >
                {/* Close button */}
                <motion.button
                  className="absolute top-6 right-6 text-white p-2 z-[10000]"
                  onClick={handleMobileMenuToggle}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
                
                <motion.ul
                  className="flex flex-col p-6 pt-20 text-base w-full items-start space-y-6 h-full overflow-y-auto"
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 100, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {navItems.map((item, index) => (
                    <motion.li 
                      key={`mobile-${item.name}`} 
                      className="w-full"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div>
                        <button
                          onClick={() => toggleDropdown(index)}
                          className="text-white hover:text-primary transition-colors font-normal flex items-center justify-between w-full py-2"
                        >
                          {item.name}
                          <motion.svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-4 w-4 ml-2"
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                            animate={{ rotate: activeDropdown === index ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </motion.svg>
                        </button>
                        
                        {/* Dropdown Menu (Mobile) */}
                        <AnimatePresence>
                          {activeDropdown === index && (
                            <motion.div 
                              className="mt-2 pl-4 space-y-2 bg-white/10 rounded-lg p-3"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              {item.dropdown.map((dropdownItem, itemIndex) => (
                                <motion.div
                                  key={`mobile-dropdown-${item.name}-${dropdownItem.name}`}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: itemIndex * 0.05 }}
                                >
                                  <Link
                                    href={dropdownItem.path}
                                    className="block py-2 text-sm text-white hover:text-primary transition-colors"
                                    onClick={handleMobileMenuToggle}
                                  >
                                    {dropdownItem.name}
                                  </Link>
                                </motion.div>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.li>
                  ))}

                  <motion.li 
                    className="mt-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Link
                      href="/login"
                      className="text-white font-normal text-sm border border-[#fe6623] py-2 px-4 rounded-full hover:bg-[#fe6623] transition-all duration-300 inline-block"
                      onClick={handleMobileMenuToggle}
                      target="_blank" 
                    >
                      Login
                    </Link>
                  </motion.li>
                </motion.ul>
              </motion.div>
            )}
          </AnimatePresence>
        </Navbar>
      </div>
    </motion.header>
  );
};

export default Header;