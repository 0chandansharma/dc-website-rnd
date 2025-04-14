import React from "react";
import { motion } from "framer-motion";
import AnimatedCard from "@/components/common/AnimatedCard";
import { useRouter } from 'next/navigation';


const EncryptionSection = () => {
  const router = useRouter();
  const handleLearnMoreSecurity = () => {
    router.push('/security');
  };
  const securityFeatures = [
    {
      icon: (
        <svg className="h-12 w-12 text-[#FE6623]" viewBox="0 0 63 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7.875 79.3984C5.70938 79.3984 3.85547 78.6617 2.31328 77.1883C0.771094 75.7149 0 73.9437 0 71.8746V34.2556C0 32.1865 0.771094 30.4153 2.31328 28.9419C3.85547 27.4685 5.70938 26.7318 7.875 26.7318H11.8125V19.208C11.8125 14.004 13.732 9.56808 17.5711 5.90022C21.4102 2.23237 26.0531 0.398438 31.5 0.398438C36.9469 0.398438 41.5898 2.23237 45.4289 5.90022C49.268 9.56808 51.1875 14.004 51.1875 19.208V26.7318H55.125C57.2906 26.7318 59.1445 27.4685 60.6867 28.9419C62.2289 30.4153 63 32.1865 63 34.2556V71.8746C63 73.9437 62.2289 75.7149 60.6867 77.1883C59.1445 78.6617 57.2906 79.3984 55.125 79.3984H7.875ZM7.875 71.8746H55.125V34.2556H7.875V71.8746ZM31.5 60.5889C33.6656 60.5889 35.5195 59.8522 37.0617 58.3788C38.6039 56.9054 39.375 55.1342 39.375 53.0651C39.375 50.9961 38.6039 49.2248 37.0617 47.7514C35.5195 46.278 33.6656 45.5413 31.5 45.5413C29.3344 45.5413 27.4805 46.278 25.9383 47.7514C24.3961 49.2248 23.625 50.9961 23.625 53.0651C23.625 55.1342 24.3961 56.9054 25.9383 58.3788C27.4805 59.8522 29.3344 60.5889 31.5 60.5889ZM19.6875 26.7318H43.3125V19.208C43.3125 16.073 42.1641 13.4084 39.8672 11.2139C37.5703 9.01947 34.7812 7.92225 31.5 7.92225C28.2188 7.92225 25.4297 9.01947 23.1328 11.2139C20.8359 13.4084 19.6875 16.073 19.6875 19.208V26.7318Z"
            fill="currentColor"
          />
        </svg>
      ),
      title: "Data Encryption & Storage",
      description: "We use data-encryption to protect sensitive data, ensuring compliance with international standards."
    },
    {
      icon: (
        <svg className="h-12 w-12 text-[#FE6623]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
          <path d="M64 464c-8.8 0-16-7.2-16-16L48 64c0-8.8 7.2-16 16-16l160 0 0 80c0 17.7 14.3 32 32 32l80 0 0 288c0 8.8-7.2 16-16 16L64 464zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-293.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0L64 0zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0z" fill="currentColor"/>
        </svg>
      ),
      title: "Policies and Consent",
      description: "We use data policies, obtain consent from users, and use anonymization for maximum privacy."
    },
    {
      icon: (
        <svg className="h-12 w-12 text-[#FE6623]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64L0 400c0 44.2 35.8 80 80 80l400 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 416c-8.8 0-16-7.2-16-16L64 64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z" fill="currentColor"/>
        </svg>
      ),
      title: "Real-Time Monitoring",
      description: "We have deployed AI monitoring to detect and neutralize real-time cyber threats."
    },
    {
      icon: (
        <svg className="h-12 w-12 text-[#FE6623]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M509.1 247.7L394.5 133.1c-10.7-10.7-23.8-16.9-38.1-16.9H61.8c-14.3 0-27.4 6.2-38.1 16.9L2.9 247.7c-10.7 10.7-10.7 27.9 0 38.6L117.5 394.5c10.7 10.7 23.8 16.9 38.1 16.9h294.6c14.3 0 27.4-6.2 38.1-16.9L509.1 286.3c10.7-10.7 10.7-27.9 0-38.6zM314.1 357.3H197.9c-11.4 0-21.4-9.3-21.4-21.4s9.3-21.4 21.4-21.4h116.2c11.4 0 21.4 9.3 21.4 21.4s-9.3 21.4-21.4 21.4z" fill="currentColor"/>
        </svg>
      ),
      title: "Access Control & Authentication",
      description: "Role-based access control ensures only authorized users can access sensitive information."
    }
  ];

  return (
    <section className="ensuring-sec relative bg-[#FFFAF8] [padding-top:_clamp(17px,4vw,71px)] [padding-bottom:_clamp(17px,4vw,128px)] overflow-hidden">
      <motion.div 
        className="absolute -right-40 -top-40 w-96 h-96 rounded-full bg-[#FE6623]/5 blur-3xl z-0"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <div className="container max-w-[90rem] mx-auto px-[10px] relative z-10">
        <div className="flex justify-center">
          <div className="basis-full md:basis-11/12">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <span className="bg-[#1316310D] rounded-[31px] py-[8px] px-[16px] text-[13px] text-[#000] inline-block mb-4">
                Privacy & Security
              </span>
              <h2 className="[font-size:_clamp(15px,2vw,48px)] text-[#000000CC] leading-[1.3] font-normal">
                <span>Ensuring</span>{" "}
                <span className="heading-orange">End-to-End</span> Encryption
              </h2>
              <motion.p
                className="max-w-2xl mx-auto text-gray-600 mt-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Your data security is our top priority. We implement multiple layers of protection to ensure your information remains private and secure.
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 [margin-top:_clamp(40px,2vw,107px)]">
              {securityFeatures.map((feature, index) => (
                <AnimatedCard
                  key={feature.title}
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                  delay={index * 0.1}
                  hoverEffect="glow"
                  className="bg-[#F5F5F5] border border-gray-200 hover:border-[#FE6623]/30 group transition-all duration-300 
                    hover:shadow-md hover:bg-white/90 
                    transform hover:-translate-y-2 
                    ease-in-out"
                />
              ))}
            </div>
            
            <motion.div 
              className="text-center mt-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <motion.button
                className="bg-transparent text-[#FE6623] border border-[#FE6623] 
                  hover:bg-[#FE6623]/10 hover:text-[#FE6623] 
                  transition-colors duration-300 
                  rounded-full py-3 px-8 
                  inline-flex items-center 
                  group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleLearnMoreSecurity}
              >
                
                <span>Learn More About Our Security</span>
                <svg 
                  className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
      
      <motion.div 
        className="absolute -left-40 -bottom-40 w-96 h-96 rounded-full bg-[#FE6623]/5 blur-3xl z-0"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 2
        }}
      />
    </section>
  );
};

export default EncryptionSection;