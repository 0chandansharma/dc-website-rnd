// src/components/common/ContactModal.tsx
import React from "react";
import { Button, Modal } from "flowbite-react";
import { motion } from "framer-motion";

interface ContactModalProps {
  openModal: boolean;
  setOpenModal: (open: boolean) => void;
}

const ContactModal = ({ openModal, setOpenModal }: ContactModalProps) => {
  const formFields = [
    { id: "name", label: "Your Name", type: "text", required: true },
    { id: "email", label: "Email Address", type: "email", required: true },
    { id: "phone", label: "Phone Number (optional)", type: "text", required: false },
  ];

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
        <motion.div 
          className="space-y-8 h-full flex items-center flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
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

            <form className="mt-8 lg:mt-16">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {formFields.map((field) => (
                  <motion.div 
                    key={field.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative group"
                  >
                    <input
                      type={field.type}
                      id={`floating_${field.id}`}
                      className="block w-full px-0 py-4 text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#FE6623] peer"
                      placeholder=" "
                      required={field.required}
                      name={`floating_${field.id}`}
                    />
                    <label 
                      htmlFor={`floating_${field.id}`}
                      className="absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FE6623] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      {field.label}
                    </label>
                  </motion.div>
                ))}
                
                <motion.div 
                  className="md:col-span-3 relative group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <textarea
                    id="floating_message"
                    className="block min-h-[150px] w-full px-0 py-4 text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#FE6623] peer"
                    placeholder=" "
                    required
                    name="floating_message"
                  ></textarea>
                  <label 
                    htmlFor="floating_message"
                    className="absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FE6623] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Message
                  </label>
                </motion.div>

                <motion.div 
                  className="md:col-span-3 mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Button 
                    className="bg-[#fe6623] hover:bg-[#fe6623]/90 border-0 transition-all duration-300 rounded-full text-lg py-3 px-12"
                  >
                    <span className="text-white">Send Message</span>
                  </Button>
                </motion.div>
              </div>
            </form>
          </div>
        </motion.div>
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-10">
          <img
            src="/image/d-overlay.png"
            className="max-w-[700px] w-full"
            alt="DeeCogs Logo"
          />
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ContactModal;