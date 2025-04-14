import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/common/Button";
import ParallaxBackground from "@/components/common/ParallaxBackground";

interface ReadyToUnlockSectionProps {
  onBookDemo: () => void;
}

const ReadyToUnlockSection = ({ onBookDemo }: ReadyToUnlockSectionProps) => {
  return (
    <ParallaxBackground
      imageSrc="/image/image-bg-gradient.jpg"
      speed={0.3}
      overlay={true}
      overlayOpacity={0.2}
      className="py-32"
    >
      <div className="container max-w-[90rem] mx-auto px-[10px]">
        <div className="flex justify-center flex-wrap">
          <div className="basis-full md:basis-8/12">
            <div className="relative z-10 [padding-top:_clamp(52px,11vw,100px)] [padding-bottom:_clamp(42px,11vw,100px)]">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <motion.h2 
                  className="text-3xl md:text-5xl font-normal text-center mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <span className="text-[#5B5958] block mb-4">
                    Ready to unlock the power of AI for your business?
                  </span>
                  <span className="text-[#000000]">
                    Let's start the journey today!
                  </span>
                </motion.h2>
              </motion.div>

              <motion.img
                src="/image/d.png"
                className="[max-width:_clamp(126px,30vw,508px)] z-0 w-full absolute right-[20%] md:right-0 top-0 bottom-0"
                alt="DeeCogs Logo"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 0.5, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4 }}
              />

              <motion.div
                className="flex flex-col md:flex-row justify-center items-center gap-6 mt-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Button
                  text="Book a Demo"
                  variant="primary"
                  size="lg"
                  onClick={onBookDemo}
                  className="shadow-md"
                />
                
                <Button
                  text="Explore Solutions"
                  variant="outline"
                  size="lg"
                  href="/solutions"
                  icon={
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  }
                />
              </motion.div>
              
              <motion.div
                className="mt-16 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <p className="text-[#5B5958] text-lg">
                  Join over 100+ businesses already using DeeCogs AI solutions
                </p>
                
                <div className="flex flex-wrap justify-center items-center gap-8 mt-6">
                  {[1, 2, 3, 4].map((num) => (
                    <img
                      key={num}
                      src={`/image/client-${num}.png`}
                      alt={`Client ${num}`}
                      className="h-12 w-auto opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </ParallaxBackground>
  );
};

export default ReadyToUnlockSection;