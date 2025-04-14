import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const CollaboratorsSection = () => {
  const collaborators = [
    {
      src: "/image/our-collaborators-1.jpeg",
      alt: "Collaborator 1",
      maxWidth: "clamp(48px, 10vw, 128px)"
    },
    {
      src: "/image/our-collaborators-2.jpeg",
      alt: "Collaborator 2", 
      maxWidth: "clamp(48px, 10vw, 130px)"
    },
    {
      src: "/image/our-collaborators-3.png",
      alt: "Collaborator 3",
      maxWidth: "clamp(48px, 10vw, 80px)"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10
      }
    },
    hover: { 
      scale: 1.1,
      rotate: 5,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section className="our-collaborators-sec [padding-top:_clamp(36px,4vw,136px)] [padding-bottom:_clamp(36px,4vw,136px)]">
      <div className="container max-w-[90rem] mx-auto px-[10px]">
        <motion.div 
          className="flex justify-center flex-row flex-wrap"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="basis-full lg:basis-8/12">
            <div className="text-center">
              <h2 className="leading-[1] [font-size:_clamp(26px,2vw,48px)] [margin-bottom:_clamp(15px,2vw,26px)] text-[#505050] font-normal">
                Our Collaborators
              </h2>
              <p className="[font-size:_clamp(16px,2vw,22px)] [margin-bottom:_clamp(12px,2vw,55px)] text-[#000000bf] font-normal">
                We bring together the best of our network to help your
                business gain the competitive edge.
              </p>
            </div>
            <div className="flex justify-center flex-wrap flex-row">
              <div className="basis-8/12">
                <motion.div 
                  className="flex justify-between items-center flex-wrap flex-row"
                  variants={containerVariants}
                >
                  {collaborators.map((collaborator, index) => (
                    <motion.img
                      key={index}
                      src={collaborator.src}
                      alt={collaborator.alt}
                      className="w-full inline-block grayscale hover:grayscale-0 transition-all duration-300 ease-in-out"
                      style={{ maxWidth: collaborator.maxWidth }}
                      variants={itemVariants}
                      whileHover={{ 
                        scale: 1.1,
                        transition: { duration: 0.2 }
                      }}
                    />
                  ))}
                </motion.div>
              </div>
            </div>

            {/* New Collaboration Section */}
            <motion.div 
              className="mt-16 bg-[#F5F5F5] rounded-[24px] p-8 text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-[#505050] [font-size:_clamp(26px,2vw,48px)] mb-4 font-normal">
                Become Our Next Partner
              </h3>
              <p className="text-[#000000bf] [font-size:_clamp(16px,2vw,22px)] mb-6 font-normal">
                Interested in transforming industries with cutting-edge AI solutions? Let's explore collaboration opportunities.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href="/contact"
                  className="inline-block bg-[#FE6623] text-white [font-size:_clamp(14px,2vw,18px)] py-2 px-6 rounded-full hover:bg-[#FE6623E3] transition-colors duration-300"
                >
                  Let's Talk
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CollaboratorsSection;