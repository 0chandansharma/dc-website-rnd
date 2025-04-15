"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import { Flowbite } from "flowbite-react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { customTheme } from "@/utils/theme";

const AboutUsPage = () => {
  const controls = useAnimation();
  
  useEffect(() => {
    controls.start({ 
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8,
        staggerChildren: 0.2
      }
    });
  }, [controls]);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const teamMembers = [
    {
      name: "Jane Doe",
      position: "CEO & Founder",
      image: "/image/team/member1.jpg", // Replace with actual image path
      bio: "With over 15 years of experience in AI and machine learning, Jane leads our vision of creating transformative solutions."
    },
    {
      name: "John Smith",
      position: "CTO",
      image: "/image/team/member2.jpg", // Replace with actual image path
      bio: "A former senior AI researcher at top tech companies, John oversees our technological innovation and development."
    },
    {
      name: "Sarah Johnson",
      position: "Head of Product",
      image: "/image/team/member3.jpg", // Replace with actual image path
      bio: "Sarah brings extensive experience in product management with a focus on healthcare AI applications."
    },
    {
      name: "Michael Chen",
      position: "Lead AI Engineer",
      image: "/image/team/member4.jpg", // Replace with actual image path
      bio: "Michael specializes in computer vision and natural language processing, leading our engineering efforts."
    }
  ];

  const values = [
    {
      title: "Innovation",
      icon: "🚀",
      description: "We push the boundaries of what's possible with AI, constantly seeking creative solutions."
    },
    {
      title: "Integrity",
      icon: "🛡️",
      description: "We maintain the highest standards of ethics and transparency in all our practices."
    },
    {
      title: "Impact",
      icon: "✨",
      description: "We measure our success by the tangible positive impact we create for our clients and society."
    },
    {
      title: "Inclusion",
      icon: "🤝",
      description: "We champion diversity of thought, background, and expertise in our team and solutions."
    }
  ];

  return (
    <Flowbite theme={{ theme: customTheme }}>
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gray-50 to-gray-100 py-20">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="bg-[#1316310D] rounded-[31px] py-[8px] px-[16px] text-[13px] text-[#000] inline-block mb-4">
                About Us
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Pioneering the Future with <span className="heading-orange">AI Excellence</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                At DeeCogs, we're on a mission to transform industries through cutting-edge AI solutions that solve real-world challenges with uncompromising excellence.
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Our Story Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center">
              <motion.div 
                className="w-full lg:w-1/2 mb-10 lg:mb-0"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <span className="bg-[#1316310D] rounded-[31px] py-[8px] px-[16px] text-[13px] text-[#000] inline-block mb-4">
                  Our Journey
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  A Vision Born from <span className="heading-orange">Possibility</span>
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  Founded in 2020, DeeCogs began with a simple yet powerful vision: to make advanced AI accessible and impactful for businesses of all sizes. Our founders, a team of AI researchers and industry veterans, saw the potential for AI to transform how organizations operate and deliver value.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Starting with solutions in healthcare and finance, we quickly expanded to address challenges across multiple industries. Today, we're proud to be trusted partners to organizations worldwide, helping them harness the full potential of artificial intelligence.
                </p>
                <p className="text-lg text-gray-700">
                  Our journey is just beginning, and we're excited to continue pushing the boundaries of what's possible with AI-driven innovation.
                </p>
              </motion.div>
              
              <motion.div 
                className="w-full lg:w-1/2 pl-0 lg:pl-12"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative">
                  <motion.img 
                    src="/image/about-us-story.jpg" // Replace with actual image
                    alt="DeeCogs team working together" 
                    className="rounded-lg shadow-xl w-full"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-lg shadow-lg">
                    <div className="flex items-center">
                      <div className="text-[#FE6623] text-5xl font-bold mr-4">5+</div>
                      <p className="text-gray-800">Years of innovation and excellence in AI solutions</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Our Values Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center max-w-3xl mx-auto mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="bg-[#1316310D] rounded-[31px] py-[8px] px-[16px] text-[13px] text-[#000] inline-block mb-4">
                Our Values
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Guided by <span className="heading-orange">Principles</span> That Matter
              </h2>
              <p className="text-lg text-gray-700">
                Our core values shape everything we do, from how we develop our solutions to how we engage with our clients and each other.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div 
                  key={value.title}
                  className="bg-white rounded-xl p-8 shadow hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center max-w-3xl mx-auto mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="bg-[#1316310D] rounded-[31px] py-[8px] px-[16px] text-[13px] text-[#000] inline-block mb-4">
                Our Team
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Meet the <span className="heading-orange">Minds</span> Behind DeeCogs
              </h2>
              <p className="text-lg text-gray-700">
                Our diverse team of experts brings together decades of experience in AI, machine learning, and industry-specific knowledge.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div 
                  key={member.name}
                  className="bg-white rounded-xl shadow overflow-hidden hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-64 object-cover"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/300x400/f5f5f5/FE6623?text=${member.name.replace(' ', '+')}`;
                    }}
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-[#FE6623] mb-3">{member.position}</p>
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Stats Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "50+", label: "Enterprise Clients" },
                { number: "30+", label: "AI Solutions Deployed" },
                { number: "5+", label: "Industry Verticals" },
                { number: "98%", label: "Client Satisfaction" }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <motion.div 
                    className="text-5xl font-bold text-[#FE6623] mb-2"
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      type: "spring",
                      stiffness: 200,
                      damping: 10,
                      delay: 0.3 + (index * 0.1)
                    }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-xl">{stat.label}</div>
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
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                Join the innovative companies already leveraging our expertise to solve complex challenges and drive growth.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <motion.button
                  className="bg-[#FE6623] text-white py-3 px-8 rounded-full font-medium hover:bg-[#FE6623]/90 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Schedule a Demo
                </motion.button>
                <motion.button
                  className="border-2 border-[#FE6623] text-[#FE6623] py-3 px-8 rounded-full font-medium hover:bg-[#FE6623]/10 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </Flowbite>
  );
};

export default AboutUsPage;