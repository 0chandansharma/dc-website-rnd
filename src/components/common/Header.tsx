// src/components/common/Header.tsx
"use client";
import React, { useState, useEffect } from "react";
import { Navbar } from "flowbite-react";
import Link from "next/link";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  
  // Navigation items with dropdown menus
  const navItems = [
    { 
      name: "Products", 
      path: "/products",
      dropdown: [
        { name: "Docurate", path: "/products/docurate" },
        { name: "VisionTech", path: "/products/visiontech" },
        { name: "Fusio", path: "/products/fusio" },
        { name: "Rae", path: "/products/rae" },
        { name: "Notei", path: "/products/notei" }
      ]
    },
    { 
      name: "Solutions", 
      path: "/solutions",
      dropdown: [
        { name: "Healthcare", path: "/solutions/healthcare" },
        { name: "Finance", path: "/solutions/finance" },
        { name: "Retail", path: "/solutions/retail" },
        { name: "Manufacturing", path: "/solutions/manufacturing" }
      ]
    },
    { 
      name: "Developers", 
      path: "/developers",
      dropdown: [
        { name: "Documentation", path: "/developers/docs" },
        { name: "API References", path: "/developers/api" },
        { name: "SDK", path: "/developers/sdk" }
      ]
    },
    { 
      name: "Resources", 
      path: "/resources",
      dropdown: [
        { name: "Blog", path: "/resources/blog" },
        { name: "Case Studies", path: "/resources/case-studies" },
        { name: "Whitepapers", path: "/resources/whitepapers" }
      ]
    },
    { 
      name: "Company", 
      path: "/company",
      dropdown: [
        { name: "About Us", path: "/company/about" },
        { name: "Careers", path: "/company/careers" },
        { name: "Contact", path: "/company/contact" }
      ]
    }
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

  const toggleDropdown = (index) => {
    if (activeDropdown === index) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/50 backdrop-blur-sm py-2' : 'bg-transparent py-4'}`}>
      <div className="container max-w-[90rem] mx-auto px-5">
        <Navbar
          className="bg-transparent border-0 shadow-none py-0 flex items-center"
          rounded={false}
        >
          <Navbar.Brand as={Link} href="/">
            <img
              src="/image/white-logo.png"
              className="h-10 md:h-14"
              alt="DeeCogs Logo"
            />
          </Navbar.Brand>
          
          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center space-x-8 ml-auto">
            {navItems.map((item, index) => (
              <div key={item.name} className="relative group">
                <Link 
                  href={item.path}
                  className="text-white hover:text-[#FE6623] transition-colors font-normal text-base py-2 flex items-center"
                >
                  {item.name}
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 ml-1 transform group-hover:rotate-180 transition-transform duration-150" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                
                {/* Dropdown Menu (Desktop) */}
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left">
                  <div className="py-1">
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        href={dropdownItem.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#FE6623]"
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            
            <div className="ml-6 flex items-center space-x-4">
              <Link
                href="/login"
                className="text-white font-normal text-base border border-[#fe6623] py-2 px-6 rounded-full hover:bg-[#fe6623] transition-all duration-300"
              >
                Login
              </Link>
            </div>
          </div>
          
          {/* Mobile Menu Toggle */}
          <Navbar.Toggle className="focus:ring-0 text-white border-0 xl:hidden" />
          
          {/* Mobile Navigation */}
          <Navbar.Collapse className="xl:hidden">
            <ul className="flex flex-col p-4 text-base w-full mt-4 border-t border-white/20 bg-black/90 items-start space-y-6">
              <li className="self-end w-full flex justify-end">
                <Navbar.Toggle />
              </li>
              
              {navItems.map((item, index) => (
                <li key={item.name} className="w-full">
                  <div>
                    <button
                      onClick={() => toggleDropdown(index)}
                      className="text-white hover:text-[#FE6623] transition-colors font-normal flex items-center justify-between w-full"
                    >
                      {item.name}
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className={`h-4 w-4 ml-2 transform transition-transform duration-150 ${activeDropdown === index ? 'rotate-180' : ''}`}
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {/* Dropdown Menu (Mobile) */}
                    {activeDropdown === index && (
                      <div className="mt-2 pl-4 space-y-2">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.path}
                            className="block py-1 text-sm text-gray-300 hover:text-[#FE6623]"
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </li>
              ))}

              <li className="mt-6">
                <Link
                  href="/login"
                  className="text-white font-normal text-sm border border-[#fe6623] py-2 px-4 rounded-full hover:bg-[#fe6623] transition-all duration-300 inline-block"
                >
                  Login
                </Link>
              </li>
            </ul>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </header>
  );
};

export default Header;