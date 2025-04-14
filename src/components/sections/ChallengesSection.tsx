import React from "react";
import { motion } from "framer-motion";

const ChallengesSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -5,
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      borderColor: "#FE6623",
      transition: { 
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0.8, opacity: 0.5 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        duration: 0.4
      }
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <section className="the-challenges [padding-top:_clamp(54px,4vw,200px)] [padding-bottom:_clamp(54px,4vw,181px)]">
      <div className="container max-w-[90rem] mx-auto px-[10px]">
        <div className="flex justify-center">
          <div className="basis-full md:basis-11/12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={titleVariants}
            >
              <span className="bg-[#1316310D] rounded-[31px] py-[8px] px-[16px] text-[13px] text-[#000] inline-block">
                Challenges
              </span>

              <div className="flex [margin-bottom:_clamp(21px,2vw,75px)] [margin-top:_clamp(18px,2vw,30px)] lg:items-center flex-col lg:flex-row flex-wrap items-start">
                <div className="grow">
                  <h2 className="mb-[10px] lg:mb-[0px] [font-size:_clamp(17px,2vw,48px)] text-[#000000CC] leading-[1.2] font-normal">
                    <motion.span 
                      className="heading-orange"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      The Challenges
                    </motion.span> we
                    are<span className="block">addressing.</span>
                  </h2>
                </div>
                <div className="shrink-0">
                  <div className="lg:max-w-[444px] lg:ms-auto lg:text-end">
                    <span className="[font-size:_clamp(8px,2vw,22px)] block text-[#0000007D] leading-normal">
                      Transforming businesses by solving complex AI-driven
                      challenges tailored for industries.
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-3 gap-x-[12px] lg:gap-x-[36px] gap-y-[24px] lg:gap-y-[40px] place-items-stretch"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={containerVariants}
            >
              {[
                {
                  title: "Scaling Operations Efficiently",
                  description: "AI systems designed to scale alongside businesses, ensuring smooth and efficient operational growth.",
                  icon: "dollar"
                },
                {
                  title: "Improving Decision Accuracy",
                  description: "Data-driven analytics delivering real-time insights for more accurate and informed business decisions.",
                  icon: "plus"
                },
                {
                  title: "Simplifying Complex Data",
                  description: "Advanced AI analytics that transform complex data into clear, actionable business intelligence.",
                  icon: "document"
                },
                {
                  title: "Enhancing Security Systems",
                  description: "Intelligent systems that identify anomalies and patterns to provide robust security and fraud prevention.",
                  icon: "dollar"
                },
                {
                  title: "Reducing Operational Costs",
                  description: "Smart automation that streamlines workflows, optimizes processes, and significantly reduces expenses.",
                  icon: "plus"
                },
                {
                  title: "Personalizing Experiences",
                  description: "Adaptive AI engines that deliver tailored experiences based on individual customer needs and behaviors.",
                  icon: "document"
                }
              ].map((challenge, index) => (
                <motion.div 
                  key={index} 
                  className="flex flex-col justify-between [padding:_clamp(10px,2vw,30px)] border rounded-[24px] border-[#292C330F]"
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <div>
                    <h3 className="text-[#000000D9] leading-[1.3] font-normal [margin-bottom:_clamp(8px,2vw,40px)] [font-size:_clamp(8px,3vw,26px)]">
                      {challenge.title}
                    </h3>
                    <p className="text-[#000000BF] max-w-[363px] [font-size:_clamp(8px,2vw,18px)] [margin-bottom:_clamp(8px,2vw,40px)] font-normal">
                      {challenge.description}
                    </p>
                  </div>
                  <motion.div 
                    className="text-end"
                    variants={iconVariants}
                    whileHover="hover"
                  >
                    {challenge.icon === "dollar" && (
                      <svg
                        className="inline-block [width:_clamp(17px,5vw,45px)]"
                        viewBox="0 0 45 47"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.4388 28.6577L15.4388 28.6576L15.4332 28.6601L15.2786 28.7293C13.9876 29.2886 13.3733 30.8874 14.0192 32.1815C15.6789 35.5782 18.4316 36.8145 20.02 37.2778V37.882C20.02 39.2927 21.1272 40.45 22.5 40.45C23.9025 40.45 24.98 39.2617 24.98 37.882V37.4462C25.7852 37.2703 27.2436 36.8573 28.604 35.8997C30.2718 34.7259 31.775 32.7425 31.775 29.469C31.775 27.7517 31.4155 26.0974 30.3153 24.615C29.2197 23.1388 27.4297 21.8872 24.6724 20.8912L24.6724 20.8912L24.6661 20.889C22.6485 20.1905 21.2301 19.6521 20.3102 19.0317C19.8597 18.7279 19.5539 18.4201 19.3584 18.0876C19.1655 17.7595 19.0625 17.3779 19.0625 16.8965C19.0625 15.9056 19.5656 15.2338 20.2745 14.7875C21.0017 14.3297 21.9233 14.13 22.635 14.13C24.2851 14.13 25.2698 14.9387 25.8264 15.7277L25.8263 15.7278L25.8333 15.7372C26.501 16.638 27.6898 17.0084 28.7295 16.556L28.7321 16.5548C30.1929 15.9093 30.698 14.0397 29.7433 12.7469C28.8162 11.4722 27.3055 10.1254 24.98 9.58149V9.118C24.98 7.7073 23.8728 6.55 22.5 6.55C21.1272 6.55 20.02 7.7073 20.02 9.118V9.57146C17.1716 10.3253 15.6824 12.0375 14.9193 13.6315C14.1326 15.2748 14.125 16.7718 14.125 16.92C14.125 19.7908 15.4952 21.6442 17.1691 22.8774C18.6246 23.9497 20.3312 24.5668 21.5417 25.0045C21.6994 25.0615 21.8486 25.1155 21.9878 25.167C23.7575 25.8339 24.9644 26.4363 25.7289 27.1142C26.4616 27.7639 26.7925 28.4861 26.7925 29.469C26.7925 30.6253 26.2881 31.4245 25.5574 31.9509C24.8087 32.4903 23.804 32.7525 22.8375 32.7525C20.4834 32.7525 19.1988 31.1714 18.5143 29.8086L18.5143 29.8086L18.5119 29.8039C17.9273 28.6699 16.6192 28.1465 15.4388 28.6577ZM0.5 23.5C0.5 10.7834 10.3764 0.5 22.5 0.5C34.6236 0.5 44.5 10.7834 44.5 23.5C44.5 36.2166 34.6236 46.5 22.5 46.5C10.3764 46.5 0.5 36.2166 0.5 23.5Z"
                          fill="#131631"
                          fillOpacity="0.8"
                          stroke="url(#paint0_linear_1422_1693)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_1422_1693"
                            x1="22.5"
                            y1="0"
                            x2="22.5"
                            y2="47"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#131631" />
                            <stop offset="1" stopColor="#26211E" />
                          </linearGradient>
                        </defs>
                      </svg>
                    )}
                    {challenge.icon === "plus" && (
                      <svg
                        viewBox="0 0 43 45"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="inline-block [width:_clamp(17px,5vw,45px)]"
                      >
                        <path
                          d="M0.523889 5.00034V5C0.523889 2.50114 2.4505 0.5 4.77778 0.5H38.2222C40.5527 0.5 42.5 2.50448 42.5 5V40C42.5 42.4955 40.5527 44.5 38.2222 44.5H4.77778C2.44732 44.5 0.5 42.4955 0.5 40L0.523889 5.00034ZM26.7778 35V28H33.4444C35.0557 28 36.3333 26.6295 36.3333 25V20C36.3333 18.3705 35.0557 17 33.4444 17H26.7778V10C26.7778 8.37052 25.5001 7 23.8889 7H19.1111C17.4999 7 16.2222 8.37052 16.2222 10V17H9.55556C7.94435 17 6.66667 18.3705 6.66667 20V25C6.66667 26.6295 7.94435 28 9.55556 28H16.2222V35C16.2222 36.6295 17.4999 38 19.1111 38H23.8889C25.5001 38 26.7778 36.6295 26.7778 35Z"
                          fill="#131631"
                          fillOpacity="0.8"
                          stroke="url(#paint0_linear_1422_1698)"
                        ></path>
                        <defs>
                          <linearGradient
                            id="paint0_linear_1422_1698"
                            x1="21.5"
                            y1="0"
                            x2="21.5"
                            y2="45"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#131631"></stop>
                            <stop offset="1" stopColor="#26211E"></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                    )}
                    {challenge.icon === "document" && (
                      <svg
                        className="inline-block [width:_clamp(17px,5vw,45px)]"
                        viewBox="0 0 45 46"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {/* SVG path removed as requested */}
                        <path
                          d="M4.5 3.68182H4V4.18182V8.36364C4 9.2036 3.24652 9.95455 2.25 9.95455C1.25348 9.95455 0.5 9.2036 0.5 8.36364V2.09091C0.5 1.25095 1.25348 0.5 2.25 0.5H9C9.99652 0.5 10.75 1.25095 10.75 2.09091C10.75 2.93087 9.99652 3.68182 9 3.68182H4.5ZM41 4.18182V3.68182H40.5H36C35.0035 3.68182 34.25 2.93087 34.25 2.09091C34.25 1.25095 35.0035 0.5 36 0.5H42.75C43.7465 0.5 44.5 1.25095 44.5 2.09091V8.36364C44.5 9.2036 43.7465 9.95455 42.75 9.95455C41.7535 9.95455 41 9.2036 41 8.36364V4.18182ZM4 41.8182V42.3182H4.5H9C9.99652 42.3182 10.75 43.0691 10.75 43.9091C10.75 44.7491 9.99652 45.5 9 45.5H2.25C1.25348 45.5 0.5 44.7491 0.5 43.9091V37.6364C0.5 36.7964 1.25348 36.0455 2.25 36.0455C3.24652 36.0455 4 36.7964 4 37.6364V41.8182ZM40.5 42.3182H41V41.8182V37.6364C41 36.7964 41.7535 36.0455 42.75 36.0455C43.7465 36.0455 44.5 36.7964 44.5 37.6364V43.9091C44.5 44.7491 43.7465 45.5 42.75 45.5H36C35.0035 45.5 34.25 44.7491 34.25 43.9091C34.25 43.0691 35.0035 42.3182 36 42.3182H40.5ZM37.75 35.5455C37.75 37.5354 35.984 39.2273 33.75 39.2273H11.25C9.01598 39.2273 7.25 37.5354 7.25 35.5455V10.4545C7.25 8.46458 9.01598 6.77273 11.25 6.77273H33.75C35.984 6.77273 37.75 8.46459 37.75 10.4545V35.5455ZM15.25 16.7273C15.25 18.1873 16.5215 19.3182 18 19.3182H27C28.4785 19.3182 29.75 18.1873 29.75 16.7273C29.75 15.2672 28.4785 14.1364 27 14.1364H18C16.5215 14.1364 15.25 15.2672 15.25 16.7273ZM15.25 23C15.25 24.46 16.5215 25.5909 18 25.5909H27C28.4785 25.5909 29.75 24.46 29.75 23C29.75 21.54 28.4785 20.4091 27 20.4091H18C16.5215 20.4091 15.25 21.54 15.25 23ZM15.25 29.2727C15.25 30.7328 16.5215 31.8636 18 31.8636H27C28.4785 31.8636 29.75 30.7328 29.75 29.2727C29.75 27.8127 28.4785 26.6818 27 26.6818H18C16.5215 26.6818 15.25 27.8127 15.25 29.2727Z"
                          fill="#131631"
                          fillOpacity="0.8"
                          stroke="url(#paint0_linear_1422_1703)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_1422_1703"
                            x1="22.5"
                            y1="0"
                            x2="22.5"
                            y2="46"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#131631" />
                            <stop offset="1" stopColor="#26211E" />
                          </linearGradient>
                        </defs>
                      </svg>
                    )}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;