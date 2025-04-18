"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const ClientTestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);
  
  const testimonials = [
    {
      text: "I highly recommend DeeCogs' fintech solutions. Their bank statement analyzer, CIBIL report parser, and invoice parser are precise, efficient, and have streamlined our processes significantly.",
      author: "Akshay Kila",
      company: "Jumio",
      image: "/image/r-1.png",
      logo: "/image/jumio.png"
    },
    {
      text: "We partnered with DeeCogs' to customize their triage tool to fit our unique needs. The AI-powered triage system has significantly reduced our doctors' workload while improving patient care efficiency.",
      author: "Madhur Srivastava",
      company: "Real",
      image: "/image/madhur-srivastava.png",
      logo: "/image/real.png"
    },
    {
      text: "The Smart Note Tab has streamlined patient history summaries, reducing interaction time and workload, allowing me to focus more on diagnoses.",
      author: "Dr. Chetan",
      company: "Fateh Physiotherapy Clinic",
      image: ""
    },
    {
      text: "The Smart Note Tab from DeeCogs' has revolutionized my teaching by providing clear, structured, and engaging notes that enhance student learning.",
      author: "Dr. Bhagwan Sharma",
      company: "Bhagwan Sharma",
      image: "/image/Bhagwan-Sharma-c.png",
      logo: "/image/Bhagwan-Sharma.png"
    },
    {
      text: "DeeCogs' AI solutions have transformed how we approach data analysis, giving us insights we couldn't have discovered otherwise.",
      author: "Mr. Rudal Sharma",
      company: "Shobha Engineering Workshop",
      image: ""
    }
  ];

  return (
    <section className="what-our-clients bg-[#6e6e731f] [padding-top:_clamp(14px,4vw,84px)] [padding-bottom:_clamp(14px,4vw,84px)] relative overflow-hidden">
      <motion.div
        className="absolute w-full h-full top-0 left-0 bg-gradient-to-b from-transparent to-white/10 z-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />
      
      <div className="container max-w-[90rem] mx-auto px-[10px] relative z-10">
        <div className="flex justify-center">
          <div className="basis-full md:basis-11/12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="bg-[#1316310D] rounded-[31px] py-[8px] px-[16px] text-[13px] text-[#000] inline-block">
                Testimonials
              </span>
              <div className="flex [margin-bottom:_clamp(11px,2vw,26px)] [margin-top:_clamp(12px,2vw,28px)] flex-row flex-wrap lg:flex-nowrap items-start">
                <div className="grow">
                  <motion.h2 
                    className="[font-size:_clamp(17px,2vw,48px)] text-[#000000] leading-[1.2] font-normal"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <span>What our</span>{" "}
                    <span className="heading-orange">Clients</span> Say
                  </motion.h2>
                  <motion.p 
                    className="Helvetica-400 [margin-top:_clamp(12px,2vw,26px)] font-normal leading-[1.2] [font-size:_clamp(8px,2vw,22px)] lg:max-w-[518px] text-gray-800"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    Discover what our clients say about the transformative
                    impact of DeeCogs Technologies' AI solutions
                  </motion.p>
                </div>
                <div className="shrink-1 lg:shrink-0 mt-[15px] lg:mt-0 lg:text-end">
                  <motion.p 
                    className="[font-size:_clamp(6px,2vw,22px)] leading-[1.2] [margin-bottom:_clamp(8px,2vw,35px)] font-normal lg:max-w-[545px] text-[#0000007d]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    Our clients are at the heart of everything we do.
                    <span className="hidden lg:block">
                      Here's what they have to say about partnering with us.
                    </span>
                  </motion.p>
                  <motion.div 
                    className="flex mb-[23px] lg:justify-end flex-wrap items-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    {[1, 2, 3, 4].map((num) => (
                      <motion.div 
                        key={num} 
                        className={`${num > 1 ? "-ms-3 lg:-ms-5" : ""}`}
                        whileHover={{ scale: 1.1, zIndex: 10 }}
                      >
                        <img
                          src={`/image/client-${num}.png`}
                          className="max-w-full [width:_clamp(17px,4vw,64px)] [height:_clamp(17px,4vw,64px)] object-cover object-center rounded-full border-2 border-white"
                          alt={`Client ${num}`}
                        />
                      </motion.div>
                    ))}
                    <motion.div 
                      className="-ms-3 lg:-ms-5 rounded-[100%] bg-white [width:_clamp(17px,4vw,64px)] [height:_clamp(17px,4vw,64px)] flex justify-center items-center border-2 border-[#FE6623]"
                      whileHover={{ scale: 1.1 }}
                    >
                      <span className="[font-size:_clamp(6px,3vw,22px)] font-normal text-[#000000db]">
                        +24
                      </span>
                    </motion.div>
                  </motion.div>
                  
                  <motion.a 
                    className="text-primary [font-size:_clamp(8px,3vw,22px)] font-normal inline-flex items-center"
                    href="#"
                    whileHover={{ x: 5 }}
                  >
                    Read More
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </motion.a>
                </div>
              </div>
              
              <div className="mt-16">
                <Swiper
                  ref={swiperRef}
                  slidesPerView={1}
                  spaceBetween={30}
                  centeredSlides={true}
                  pagination={{
                    clickable: true,
                    dynamicBullets: true,
                  }}
                  breakpoints={{
                    640: {
                      slidesPerView: 1.2,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 30,
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 40,
                    },
                  }}
                  navigation={true}
                  modules={[Pagination, Navigation]}
                  className="testimonial-swiper"
                  onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                >
                  {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                      <motion.div 
                        className="rounded-xl bg-white p-8 shadow-lg h-full flex flex-col"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                      >
                        <div className="mb-6">
                          <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.722 6.065c.913.447 1.672 1.012 2.274 1.694.603.681 1.064 1.472 1.395 2.363.33.892.496 1.833.496 2.823 0 1.464-.286 2.818-.858 4.063-.573 1.245-1.42 2.333-2.54 3.264l-4.71 3.865 1.099 2.51h6.102l2.88-5.485-1.542-.682c1.038-.67 1.881-1.492 2.536-2.467.646-.965 1.164-1.995 1.568-3.091.394-1.086.684-2.177.88-3.264.188-1.087.284-2.103.284-3.05 0-1.443-.29-2.818-.871-4.13-.58-1.301-1.394-2.456-2.442-3.463l-4.307-3.865-2.244 5.915zM26.29 6.065c.913.447 1.671 1.012 2.275 1.694.603.681 1.071 1.472 1.402 2.363.33.892.496 1.833.496 2.823 0 1.464-.293 2.818-.872 4.063-.58 1.245-1.427 2.333-2.54 3.264l-4.71 3.865 1.099 2.51h6.102l2.88-5.485-1.547-.682c1.044-.67 1.894-1.492 2.54-2.467.647-.965 1.159-1.995 1.56-3.091.403-1.086.694-2.177.886-3.264.191-1.087.287-2.103.287-3.05 0-1.443-.29-2.818-.872-4.13-.581-1.301-1.395-2.456-2.442-3.463L28.534 0l-2.244 5.915z"/>
                          </svg>
                        </div>
                        
                        <p className="[font-size:_clamp(9px,3vw,18px)] font-normal text-[#000000bf] flex-grow">
                          {testimonial.text}
                        </p>

                        <div className="[margin-top:_clamp(10px,3vw,43px)] flex flex-wrap flex-row items-center">
                          {testimonial.image && (
                            <div className="shrink-0 me-[15px]">
                              <img
                                src={testimonial.image}
                                className="max-w-full [width:_clamp(21px,4vw,55px)] [height:_clamp(21px,4vw,55px)] object-cover object-center rounded-full border-2 border-[#FE6623]/20"
                                alt={testimonial.author}
                              />
                            </div>
                          )}
                          <div className="flex-grow">
                            {testimonial.logo && (
                              <img
                                src={testimonial.logo}
                                className="max-w-full [height:_clamp(11px,4vw,30px)] mb-2"
                                alt={testimonial.company}
                              />
                            )}
                            {!testimonial.logo && testimonial.company && (
                              <span className="[font-size:_clamp(9px,3vw,16px)] font-bold italic block text-[#000000cc]">
                                {testimonial.company}
                              </span>
                            )}
                            <span className="[font-size:_clamp(9px,3vw,16px)] block font-normal text-[#000000cc]">
                              {testimonial.author}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                
                <motion.div 
                  className="flex justify-center mt-12"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                >
                  <button 
                    className="bg-[#FE6623] text-white rounded-full py-3 px-8 hover:bg-[#FE6623]/90 transition-colors duration-300 shadow-md hover:shadow-lg"
                    onClick={() => {
                      window.location.href = "/testimonials";
                    }}
                  >
                    View All Testimonials
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonialsSection;