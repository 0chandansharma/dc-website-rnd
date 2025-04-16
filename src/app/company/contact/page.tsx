"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Flowbite } from "flowbite-react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { customTheme } from "@/utils/theme";

const ContactPage = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
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
      // Simulate API call - replace with actual form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitSuccess(true);
      setFormState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Contact information
  const contactInfo = [
    {
      title: "Email Us",
      icon: (
        <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      info: "info@deecogs.com",
      link: "mailto:info@deecogs.com"
    },
    {
      title: "Call Us",
      icon: (
        <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      info: "+91 123 456 7890",
      link: "tel:+911234567890"
    },
    {
      title: "Location",
      icon: (
        <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      info: "Delhi, India",
      link: "https://maps.google.com/?q=Delhi,India"
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
                Contact Us
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Get in <span className="heading-orange">Touch</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                We'd love to hear from you. Reach out to our team for any questions or inquiries.
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Contact Info Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {contactInfo.map((item, index) => (
                <motion.a 
                  key={item.title}
                  href={item.link}
                  className="bg-gray-50 rounded-xl p-8 text-center flex flex-col items-center hover:shadow-md transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-14 h-14 rounded-full bg-[#FE6623]/10 flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-700">{item.info}</p>
                </motion.a>
              ))}
            </div>
          </div>
        </section>
        
        {/* Contact Form Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <span className="bg-[#1316310D] rounded-[31px] py-[8px] px-[16px] text-[13px] text-[#000] inline-block mb-4">
                  Send a Message
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  We're Here to <span className="heading-orange">Help</span>
                </h2>
                <p className="text-lg text-gray-700 mb-8">
                  Have questions or want to learn more about our AI solutions? Fill out the form, and we'll get back to you as soon as possible.
                </p>
                
                <div className="hidden lg:block">
                  <img 
                    src="/image/contact-illustration.svg" 
                    alt="Contact us illustration" 
                    className="max-w-full"
                    onError={(e) => {
                      e.currentTarget.src = "https://via.placeholder.com/500x400/f5f5f5/FE6623?text=Contact+Us";
                    }}
                  />
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                {submitSuccess ? (
                  <motion.div 
                    className="bg-white rounded-xl p-8 shadow-md text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Message Sent!</h3>
                    <p className="text-gray-600 mb-6">
                      Thanks for reaching out. We've received your message and will get back to you soon.
                    </p>
                    <motion.button
                      onClick={() => setSubmitSuccess(false)}
                      className="text-primary font-medium hover:underline"
                      whileHover={{ scale: 1.05 }}
                    >
                      Send another message
                    </motion.button>
                  </motion.div>
                ) : (
                  <div className="bg-white rounded-xl p-8 shadow-md">
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
                          <label htmlFor="subject" className="block text-gray-700 mb-2">Subject *</label>
                          <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formState.subject}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-[#FE6623] focus:border-[#FE6623]"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <label htmlFor="message" className="block text-gray-700 mb-2">Message *</label>
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
                              Sending...
                            </>
                          ) : (
                            "Send Message"
                          )}
                        </motion.button>
                      </div>
                    </form>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="rounded-xl overflow-hidden shadow-md h-[400px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448181.1637471963!2d76.81306771365197!3d28.647279935262464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1650450813993!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="DeeCogs Location"
              ></iframe>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
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
                FAQs
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Frequently Asked <span className="heading-orange">Questions</span>
              </h2>
              <p className="text-lg text-gray-700">
                Find answers to common questions about our services and solutions.
              </p>
            </motion.div>
            
            <div className="max-w-3xl mx-auto">
              {[
                {
                  question: "What makes DeeCogs' AI solutions different?",
                  answer: "DeeCogs combines cutting-edge AI technology with deep industry expertise to create solutions that are not only technically advanced but also tailored to specific business challenges. Our approach focuses on delivering measurable results and seamless integration with existing systems."
                },
                {
                  question: "How can I request a demo of your products?",
                  answer: "You can request a demo by filling out the contact form above, specifying which product you're interested in, or by emailing us directly at info@deecogs.com. Our team will get back to you to schedule a personalized demonstration."
                },
                {
                  question: "Do you offer customized AI solutions?",
                  answer: "Yes, we specialize in creating customized AI solutions tailored to your specific business needs. We begin with a thorough consultation to understand your challenges, then develop a solution that integrates seamlessly with your existing systems and processes."
                },
                {
                  question: "What industries do you serve?",
                  answer: "We serve a wide range of industries including healthcare, finance, manufacturing, retail, and more. Our AI solutions are adaptable and can be customized to address specific challenges across various sectors."
                }
              ].map((faq, index) => (
                <motion.div 
                  key={index}
                  className="mb-6 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <details className="group">
                    <summary className="flex justify-between items-center p-6 cursor-pointer">
                      <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                      <span className="text-primary transition-transform duration-300 group-open:rotate-180">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </summary>
                    <div className="px-6 pb-6 pt-0 text-gray-700">
                      <p>{faq.answer}</p>
                    </div>
                  </details>
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

export default ContactPage;