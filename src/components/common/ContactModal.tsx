// src/components/common/ContactModal.tsx
import React, { useState } from "react";
import { Modal } from "flowbite-react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/common/Button";

interface ContactModalProps {
  openModal: boolean;
  setOpenModal: (open: boolean) => void;
}

const ContactModal = ({ openModal, setOpenModal }: ContactModalProps) => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  
  const [formFocus, setFormFocus] = useState({
    name: false,
    email: false,
    phone: false,
    message: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleFocus = (field: string) => {
    setFormFocus(prev => ({ ...prev, [field]: true }));
  };
  
  const handleBlur = (field: string) => {
    setFormFocus(prev => ({ ...prev, [field]: false }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form after success
      setTimeout(() => {
        setSubmitSuccess(false);
        setFormState({ name: "", email: "", phone: "", message: "" });
        setOpenModal(false);
      }, 3000);
    }, 1500);
  };

  // Animation variants
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      transition: { duration: 0.3, ease: "easeIn" }
    }
  };
  
  const contentVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2,
        when: "beforeChildren" 
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    }
  };
  
  const successVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { 
      opacity: 1, 
      scale: [0.5, 1.1, 1],
      transition: { 
        duration: 0.6,
        times: [0, 0.7, 1]
      }
    }
  };

  return (
    <Modal
      show={openModal}
      size="l" // Changed to medium size for half-screen effect
      popup
      onClose={() => setOpenModal(false)}
      className="bg-black/50 backdrop-blur-sm max-w-screen-md mx-auto" // Added max-width and centered
    >
      <Modal.Header className="border-b border-gray-200/10" />

      <AnimatePresence mode="wait">
        <motion.div
          key={submitSuccess ? "success" : "form"}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={modalVariants}
          className="relative px-6 lg:px-10 py-8" // Adjusted padding for half-screen
        >
          {submitSuccess ? (
            <motion.div 
              className="flex items-center justify-center h-full min-h-[300px] flex-col"
              variants={successVariants}
            >
              <motion.div 
                className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                <motion.svg 
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
                  width="32" 
                  height="32" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.path 
                    d="M5 13l4 4L19 7" 
                    stroke="#10B981" 
                    strokeWidth="3" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </motion.svg>
              </motion.div>
              
              <motion.h3 
                className="text-2xl font-medium text-gray-900 mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Message Sent!
              </motion.h3>
              
              <motion.p 
                className="text-gray-600 text-center max-w-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                Thank you for reaching out. We'll get back to you shortly.
              </motion.p>
            </motion.div>
          ) : (
            <motion.div 
              className="space-y-6 h-full flex items-center flex-wrap py-4"
              variants={contentVariants}
            >
              <div className="w-full">
                <motion.h3 
                  className="text-black text-2xl lg:text-3xl leading-tight mb-6"
                  variants={itemVariants}
                >
                  <span className="heading-orange block mb-2">
                    Get in touch with Us.
                  </span>
                  We are here to Assist you.
                </motion.h3>

                <form className="mt-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 gap-6">
                    {/* Name Input */}
                    <motion.div 
                      variants={itemVariants}
                      className="relative group"
                    >
                      <motion.span
                        className={`absolute bottom-0 left-0 w-0 h-0.5 bg-[#FE6623] transition-all duration-300 ${formFocus.name || formState.name ? 'w-full' : ''}`}
                        animate={{ width: formFocus.name || formState.name ? "100%" : "0%" }}
                        transition={{ duration: 0.3 }}
                      />
                      <input
                        type="text"
                        id="floating_name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        onFocus={() => handleFocus('name')}
                        onBlur={() => handleBlur('name')}
                        className="block w-full px-0 py-3 text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#FE6623] peer"
                        placeholder=" "
                        required
                      />
                      <label 
                        htmlFor="floating_name"
                        className={`absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
                      >
                        Your Name
                      </label>
                      {/* Added visible helper text */}
                      <span className="text-gray-500 text-xs mt-1 block">Enter your full name</span>
                    </motion.div>
                    
                    {/* Email Input */}
                    <motion.div 
                      variants={itemVariants}
                      className="relative group"
                    >
                      <motion.span
                        className={`absolute bottom-0 left-0 w-0 h-0.5 bg-[#FE6623] transition-all duration-300 ${formFocus.email || formState.email ? 'w-full' : ''}`}
                        animate={{ width: formFocus.email || formState.email ? "100%" : "0%" }}
                        transition={{ duration: 0.3 }}
                      />
                      <input
                        type="email"
                        id="floating_email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        onFocus={() => handleFocus('email')}
                        onBlur={() => handleBlur('email')}
                        className="block w-full px-0 py-3 text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#FE6623] peer"
                        placeholder=" "
                        required
                      />
                      <label 
                        htmlFor="floating_email"
                        className={`absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
                      >
                        Email Address
                      </label>
                      {/* Added visible helper text */}
                      <span className="text-gray-500 text-xs mt-1 block">We'll never share your email</span>
                    </motion.div>
                    
                    {/* Phone Input */}
                    <motion.div 
                      variants={itemVariants}
                      className="relative group"
                    >
                      <motion.span
                        className={`absolute bottom-0 left-0 w-0 h-0.5 bg-[#FE6623] transition-all duration-300 ${formFocus.phone || formState.phone ? 'w-full' : ''}`}
                        animate={{ width: formFocus.phone || formState.phone ? "100%" : "0%" }}
                        transition={{ duration: 0.3 }}
                      />
                      <input
                        type="text"
                        id="floating_phone"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        onFocus={() => handleFocus('phone')}
                        onBlur={() => handleBlur('phone')}
                        className="block w-full px-0 py-3 text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#FE6623] peer"
                        placeholder=" "
                      />
                      <label 
                        htmlFor="floating_phone"
                        className={`absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
                      >
                        Phone Number (optional)
                      </label>
                      {/* Added visible helper text */}
                      <span className="text-gray-500 text-xs mt-1 block">Optional contact number</span>
                    </motion.div>
                    
                    {/* Message Textarea */}
                    <motion.div 
                      className="relative group"
                      variants={itemVariants}
                    >
                      <motion.span
                        className={`absolute bottom-0 left-0 w-0 h-0.5 bg-[#FE6623] transition-all duration-300 ${formFocus.message || formState.message ? 'w-full' : ''}`}
                        animate={{ width: formFocus.message || formState.message ? "100%" : "0%" }}
                        transition={{ duration: 0.3 }}
                      />
                      <textarea
                        id="floating_message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        onFocus={() => handleFocus('message')}
                        onBlur={() => handleBlur('message')}
                        className="block min-h-[120px] w-full px-0 py-3 text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#FE6623] peer"
                        placeholder=" "
                        required
                      ></textarea>
                      <label 
                        htmlFor="floating_message"
                        className={`absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
                      >
                        Message
                      </label>
                      {/* Added visible helper text */}
                      <span className="text-gray-500 text-xs mt-1 block">Tell us how we can help you</span>
                    </motion.div>

                    {/* Submit Button */}
                    <motion.div 
                      className="mt-6 text-center"
                      variants={itemVariants}
                    >
                      <Button
                          text={isSubmitting ? "Sending..." : "Send Message"}
                          variant="primary"
                          size="lg"
                          type="submit"
                          loading={isSubmitting}
                          disabled={isSubmitting}
                          className="shadow-primary"
                        />
                    </motion.div>
                  </div>
                </form>
              </div>
            </motion.div>
          )}
          
          {/* Background decoration - made smaller for half-screen modal */}
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-full max-w-[300px]"
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ 
              opacity: 0.08,
              scale: 1,
              rotate: 0,
              transition: { duration: 1.2 }
            }}
          >
            <img
              src="/image/d-overlay.png"
              className="w-full"
              alt="DeeCogs Logo"
            />
          </motion.div>
          
          {/* Close button with animation */}
          <motion.button
            onClick={() => setOpenModal(false)}
            className="absolute top-4 right-4 p-2 rounded-full text-gray-700 hover:bg-gray-100 transition-colors z-20"
            whileHover={{ rotate: 90, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </motion.button>
        </motion.div>
      </AnimatePresence>
    </Modal>
  );
};

export default ContactModal;