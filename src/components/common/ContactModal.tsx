// src/components/common/ContactModal.tsx
"use client";
import React, { useState, useEffect } from "react";
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
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [openModal]);
  
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      // Your submit logic here
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitSuccess(true);
      setFormState({ name: "", email: "", phone: "", message: "" });
      
      setTimeout(() => {
        setSubmitSuccess(false);
        setOpenModal(false);
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError(error instanceof Error ? error.message : 'An unexpected error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!openModal) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-[9999]">
      {/* Backdrop overlay */}
      <motion.div 
        className="fixed inset-0 bg-black/70 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setOpenModal(false)}
      />
      
      {/* Modal content */}
      <motion.div
        className="relative z-[10000] w-full max-w-xl bg-white rounded-xl shadow-xl overflow-hidden"
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        transition={{ duration: 0.3 }}
      >
        {/* Close button */}
        <button
          className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700 focus:outline-none"
          onClick={() => setOpenModal(false)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="p-6 md:p-8">
          <AnimatePresence mode="wait">
            {submitSuccess ? (
              <motion.div 
                className="flex items-center justify-center h-full min-h-[300px] flex-col"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </motion.div>
                
                <h3 className="text-2xl font-medium text-gray-900 mb-2">Message Sent!</h3>
                <p className="text-gray-600 text-center">Thank you for reaching out. We'll get back to you shortly.</p>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-black text-xl lg:text-2xl leading-tight mb-6">
                  <span className="heading-orange block mb-2">
                    Get in touch with Us.
                  </span>
                  We are here to Assist you.
                </h3>

                {submitError && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
                    <p>{submitError}</p>
                  </div>
                )}

                <form className="mt-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 gap-4">
                    {/* Name Input */}
                    <div className="relative group">
                      <input
                        type="text"
                        id="floating_name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        onFocus={() => handleFocus('name')}
                        onBlur={() => handleBlur('name')}
                        className="block w-full px-0 py-2 text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#FE6623] peer"
                        placeholder=" "
                        required
                      />
                      <label 
                        htmlFor="floating_name"
                        className="absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Your Name
                      </label>
                      <span className="text-gray-500 text-xs mt-1 block">Enter your full name</span>
                    </div>
                    
                    {/* Email Input */}
                    <div className="relative group">
                      <input
                        type="email"
                        id="floating_email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        onFocus={() => handleFocus('email')}
                        onBlur={() => handleBlur('email')}
                        className="block w-full px-0 py-2 text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#FE6623] peer"
                        placeholder=" "
                        required
                      />
                      <label 
                        htmlFor="floating_email"
                        className="absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Email Address
                      </label>
                      <span className="text-gray-500 text-xs mt-1 block">We'll never share your email</span>
                    </div>
                    
                    {/* Phone Input */}
                    <div className="relative group">
                      <input
                        type="text"
                        id="floating_phone"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        onFocus={() => handleFocus('phone')}
                        onBlur={() => handleBlur('phone')}
                        className="block w-full px-0 py-2 text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#FE6623] peer"
                        placeholder=" "
                      />
                      <label 
                        htmlFor="floating_phone"
                        className="absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Phone Number (optional)
                      </label>
                      <span className="text-gray-500 text-xs mt-1 block">Optional contact number</span>
                    </div>
                    
                    {/* Message Textarea */}
                    <div className="relative group">
                      <textarea
                        id="floating_message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        onFocus={() => handleFocus('message')}
                        onBlur={() => handleBlur('message')}
                        className="block min-h-[100px] w-full px-0 py-2 text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#FE6623] peer"
                        placeholder=" "
                        required
                      ></textarea>
                      <label 
                        htmlFor="floating_message"
                        className="absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Message
                      </label>
                      <span className="text-gray-500 text-xs mt-1 block">Tell us how we can help you</span>
                    </div>

                    {/* Submit Button */}
                    <div className="mt-4 text-center">
                      <Button
                        text={isSubmitting ? "Sending..." : "Send Message"}
                        variant="primary"
                        size="md"
                        type="submit"
                        loading={isSubmitting}
                        disabled={isSubmitting}
                        className="w-full md:w-auto"
                      />
                    </div>
                  </div>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactModal;