"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Flowbite } from "flowbite-react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { customTheme } from "@/utils/theme";

const CareersPage = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // You'll need to implement or connect to a form submission API
      // This is a placeholder for actual email sending logic
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formState,
          recipient: "chandan@deecogs.com",
          subject: `Job Application for ${formState.position}`,
        }),
      });
      
      if (response.ok) {
        setSubmitSuccess(true);
        setFormState({
          name: "",
          email: "",
          phone: "",
          position: "",
          message: ""
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Current job openings
  const jobOpenings = [
    {
      title: "AI Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "We're looking for an experienced AI Engineer to develop and implement AI models and algorithms."
    },
    {
      title: "Frontend Developer",
      department: "Engineering",
      location: "Hybrid",
      type: "Full-time",
      description: "Join our frontend team to build responsive and intuitive user interfaces for our AI products."
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "On-site",
      type: "Full-time",
      description: "Lead the strategy and execution of our AI product roadmap and drive business growth."
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
                Careers
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Join Our <span className="heading-orange">Team</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Build your career at DeeCogs and help us shape the future of AI technology.
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Current Openings Section */}
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
                Open Positions
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Current <span className="heading-orange">Openings</span>
              </h2>
              <p className="text-lg text-gray-700">
                Explore opportunities to make an impact and grow with us.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {jobOpenings.map((job, index) => (
                <motion.div 
                  key={job.title}
                  className="bg-white rounded-xl p-8 shadow border border-gray-100 hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="bg-[#FE6623]/10 rounded-full py-1 px-4 text-primary text-sm font-medium inline-block mb-4">
                    {job.department}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{job.title}</h3>
                  <div className="flex items-center mb-4 text-gray-600 text-sm">
                    <span className="mr-3">{job.location}</span>
                    <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                    <span className="ml-3">{job.type}</span>
                  </div>
                  <p className="text-gray-700 mb-6">{job.description}</p>
                  <button 
                    className="text-primary font-medium hover:underline"
                    onClick={() => {
                      document.getElementById('application-form').scrollIntoView({ 
                        behavior: 'smooth'
                      });
                      setFormState(prev => ({...prev, position: job.title}));
                    }}
                  >
                    Apply Now →
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Application Form Section */}
        <section id="application-form" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center max-w-3xl mx-auto mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="bg-[#1316310D] rounded-[31px] py-[8px] px-[16px] text-[13px] text-[#000] inline-block mb-4">
                Apply Now
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Start Your <span className="heading-orange">Journey</span> With Us
              </h2>
              <p className="text-lg text-gray-700">
                Fill out the form below to apply for a position at DeeCogs.
              </p>
            </motion.div>
            
            {submitSuccess ? (
              <motion.div 
                className="bg-green-50 border border-green-200 rounded-xl p-8 text-center max-w-xl mx-auto"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Application Submitted!</h3>
                <p className="text-gray-600">
                  Thank you for your interest in joining DeeCogs. We've received your application and will get back to you soon.
                </p>
              </motion.div>
            ) : (
              <motion.div 
                className="max-w-3xl mx-auto bg-white rounded-xl shadow p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-[#FE6623] focus:border-[#FE6623]"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-700 mb-2">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-[#FE6623] focus:border-[#FE6623]"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-[#FE6623] focus:border-[#FE6623]"
                      />
                    </div>
                    <div>
                      <label htmlFor="position" className="block text-gray-700 mb-2">Position *</label>
                      <select
                        id="position"
                        name="position"
                        value={formState.position}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-[#FE6623] focus:border-[#FE6623]"
                        required
                      >
                        <option value="">Select Position</option>
                        {jobOpenings.map(job => (
                          <option key={job.title} value={job.title}>{job.title}</option>
                        ))}
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 mb-2">Why do you want to join DeeCogs? *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-[#FE6623] focus:border-[#FE6623]"
                      required
                    ></textarea>
                  </div>
                  
                  <div className="flex items-center mb-6">
                    <input
                      id="resume"
                      name="resume"
                      type="file"
                      className="w-full text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:bg-[#FE6623]/10 file:text-primary hover:file:bg-[#FE6623]/20"
                    />
                  </div>
                  
                  <div className="text-center">
                    <motion.button
                      type="submit"
                      className="bg-[#FE6623] text-white py-3 px-12 rounded-full font-medium hover:bg-[#FE6623]/90 transition-all duration-300 inline-flex items-center"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Submitting...
                        </>
                      ) : (
                        "Submit Application"
                      )}
                    </motion.button>
                  </div>
                </form>
              </motion.div>
            )}
          </div>
        </section>
        
        {/* Company Culture Section */}
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
                Life at DeeCogs
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our <span className="heading-orange">Culture</span>
              </h2>
              <p className="text-lg text-gray-700">
                We foster a culture of innovation, continuous learning, and collaboration.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Innovation First",
                  description: "We encourage creative thinking and embrace new technologies to stay at the forefront of AI innovation."
                },
                {
                  title: "Work-Life Balance",
                  description: "We value your personal time and believe that balanced employees are happier, healthier, and more productive."
                },
                {
                  title: "Growth Opportunities",
                  description: "We invest in our team's professional development with learning resources, mentorship, and career advancement paths."
                }
              ].map((item, index) => (
                <motion.div 
                  key={item.title}
                  className="bg-gray-50 rounded-xl p-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </Flowbite>
  );
};

export default CareersPage;