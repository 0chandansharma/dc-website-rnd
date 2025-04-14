// src/components/common/ContactModal.tsx
import React, { useState } from "react";
import { Button, Modal } from "flowbite-react";
import { motion, AnimatePresence } from "framer-motion";

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
  
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    
    // Clear error when typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };
  
  const validateForm = () => {
    let valid = true;
    const newErrors = { name: "", email: "", message: "" };
    
    if (!formState.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }
    
    if (!formState.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = "Invalid email format";
      valid = false;
    }
    
    if (!formState.message.trim()) {
      newErrors.message = "Message is required";
      valid = false;
    }
    
    setErrors(newErrors);
    return valid;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        
        // Reset form after 3 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
          setFormState({ name: "", email: "", phone: "", message: "" });
          setOpenModal(false);
        }, 3000);
      }, 1500);
    }
  };

  return (
    <Modal
      show={openModal}
      size="xxl"
      popup
      onClose={() => setOpenModal(false)}
      className="bg-black/50 backdrop-blur-sm"
    >
      <Modal.Header className="border-b border-gray-200/10" />

      <Modal.Body className="lg:px-[200px] lg:pb-[80px] relative">
        <AnimatePresence mode="wait">
          {submitSuccess ? (
            <motion.div 
              className="flex items-center justify-center h-full min-h-[400px] flex-col"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div 
                className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mb-6"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              >
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17L4 12" stroke="#10B981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.div>
              <motion.h3 
                className="text-3xl font-medium text-gray-900 mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Message Sent!
              </motion.h3>
              <motion.p 
                className="text-gray-600 text-center max-w-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Thank you for reaching out. We'll get back to you shortly.
              </motion.p>
            </motion.div>
          ) : (
            <motion.div 
              className="space-y-8 h-full flex items-center flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-full">
                <motion.h3 
                  className="text-black text-3xl lg:text-5xl leading-tight mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <span className="text-gray-700 block mb-2">
                    Get in touch with Us.
                  </span>
                  We are here to Assist you.
                </motion.h3>

                <form className="mt-8 lg:mt-16" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="relative group"
                    >
                      <input
                        type="text"
                        id="floating_name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        className={`block w-full px-0 py-4 text-black bg-transparent border-0 border-b-2 ${errors.name ? 'border-red-500' : 'border-gray-300'} appearance-none focus:outline-none focus:ring-0 focus:border-[#FE6623] peer`}
                        placeholder=" "
                      />
                      <label 
                        htmlFor="floating_name"
                        className={`absolute text-${errors.name ? 'red-500' : 'gray-500'} duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-${errors.name ? 'red-500' : '[#FE6623]'} peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
                      >
                        Your Name {errors.name ? `(${errors.name})` : ''}
                      </label>
                    </motion.div>
                    
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="relative group"
                    >
                      <input
                        type="email"
                        id="floating_email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        className={`block w-full px-0 py-4 text-black bg-transparent border-0 border-b-2 ${errors.email ? 'border-red-500' : 'border-gray-300'} appearance-none focus:outline-none focus:ring-0 focus:border-[#FE6623] peer`}
                        placeholder=" "
                      />
                      <label 
                        htmlFor="floating_email"
                        className={`absolute text-${errors.email ? 'red-500' : 'gray-500'} duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-${errors.email ? 'red-500' : '[#FE6623]'} peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
                      >
                        Email Address {errors.email ? `(${errors.email})` : ''}
                      </label>
                    </motion.div>
                    
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="relative group"
                    >
                      <input
                        type="text"
                        id="floating_phone"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        className="block w-full px-0 py-4 text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#FE6623] peer"
                        placeholder=" "
                      />
                      <label 
                        htmlFor="floating_phone"
                        className="absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FE6623] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Phone Number (optional)
                      </label>
                    </motion.div>
                    
                    <motion.div 
                      className="md:col-span-3 relative group"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      <textarea
                        id="floating_message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        className={`block min-h-[150px] w-full px-0 py-4 text-black bg-transparent border-0 border-b-2 ${errors.message ? 'border-red-500' : 'border-gray-300'} appearance-none focus:outline-none focus:ring-0 focus:border-[#FE6623] peer`}
                        placeholder=" "
                      ></textarea>
                      <label 
                        htmlFor="floating_message"
                        className={`absolute text-${errors.message ? 'red-500' : 'gray-500'} duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-${errors.message ? 'red-500' : '[#FE6623]'} peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
                      >
                        Message {errors.message ? `(${errors.message})` : ''}
                      </label>
                    </motion.div>

                    <motion.div 
                      className="md:col-span-3 mt-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                    >
                      <Button 
                        type="submit"
                        className="bg-[#fe6623] hover:bg-[#fe6623]/90 border-0 transition-all duration-300 rounded-full text-lg py-3 px-12"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Processing...
                          </>
                        ) : (
                          <span className="text-white">Send Message</span>
                        )}
                      </Button>
                    </motion.div>
                  </div>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-10">
          <motion.img
            src="/image/d-overlay.png"
            className="max-w-[700px] w-full"
            alt="DeeCogs Logo"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          />
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ContactModal;