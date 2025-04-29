import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
  };
  
  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const pulseAnimation = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.05, 1],
      transition: { 
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  // Social media links data
  const socialLinks = [
    { href: "https://in.linkedin.com/company/deecogs", icon: "linkedin", ariaLabel: "LinkedIn" },
    { href: "https://x.com/Deecogs_ai", icon: "twitter", ariaLabel: "Twitter" },
    { href: "#", icon: "youtube", ariaLabel: "YouTube" },
    { href: "https://www.instagram.com/deecogs_/#", icon: "instagram", ariaLabel: "Instagram" }
  ];

  // Footer navigation data
  const footerNavigation = [
    {
      title: "Company",
      links: [
        { text: "About Us", href: "#" },
        { text: "Careers", href: "#" },
        { text: "Contact Us", href: "#" },
        { text: "Trust Centre", href: "#" },
        { text: "Recognitions", href: "#" }
      ]
    },
    {
      title: "Resources",
      links: [
        { text: "Case Studies", href: "#" },
        { text: "Publications", href: "#" },
        { text: "Testimonials", href: "#" },
        { text: "Blogs", href: "#" },
        { text: "Videos", href: "#" }
      ]
    },
    {
      title: "Products",
      links: [
        { text: "Docurate", href: "#" },
        { text: "VisionTech", href: "#" },
        { text: "Fusio", href: "#" },
        { text: "Rae", href: "#" },
        { text: "Notei", href: "#" }
      ]
    },
    {
      title: "Solutions",
      links: [
        { text: "Canse", href: "#" },
        { text: "Therai (Cancer Prognostic Tool)" , href: "#" },
        { text: "Excerli (Workout Platform)", href: "#" }
      ]
    }
  ];

  return (
    <footer className="bg-[url('/image/footer.jpg')] [padding-top:_clamp(88px,4vw,255px)] relative bg-cover bg-center bg-no-repeat">
      {/* Background gradient overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />
      
      <div className="container max-w-[85rem] mx-auto px-[10px] relative z-10">
        <motion.div 
          className="flex flex-wrap flex-row"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerChildren}
        >
          {/* Left Column - Logo and Social Links */}
          <motion.div 
            className="basis-full mb-[20px] lg:basis-5/12"
            variants={fadeInUp}
          >
            <div className="pe-[15px]">
              <Link href="/" className="block">
                <motion.img
                  src="/image/logo-footer.png"
                  className="[max-width:_clamp(200px,10vw,544px)] mb-[15px] lg:mb-[25px] block"
                  alt="DeeCogs Logo"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                  whileHover={{ filter: "brightness(1.1)" }}
                />
              </Link>

              <motion.p 
                className="text-[#838383] max-w-[520px] text-[14px] lg:text-[18px]"
                variants={fadeInUp}
              >
                We craft AI-driven solutions to transform your challenges into
                opportunities.
              </motion.p>

              <motion.div 
                className="flex flex-wrap mt-[30px] items-center"
                variants={staggerChildren}
              >
                {socialLinks.map((social, index) => (
                  <motion.div 
                    key={social.icon}
                    className={`px-[2px] lg:px-[6px] ${index === 0 ? 'ps-0' : ''} ${index === socialLinks.length-1 ? 'pe-[0px]' : ''}`}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.15, y: -3 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Link
                      className="text-[#6D6F7F] hover:text-primary transition-colors duration-300"
                      href={social.href}
                      aria-label={social.ariaLabel}
                    >
                      {/* SVG icons are preserved from your original code */}
                      {social.icon === "linkedin" && (
                        <svg
                          viewBox="0 0 55 54"
                          className="ftsvg [height:_clamp(17px,2vw,32px)]"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M48.8889 0C50.5097 0 52.064 0.632141 53.2101 1.75736C54.3562 2.88258 55 4.4087 55 6V48C55 49.5913 54.3562 51.1174 53.2101 52.2426C52.064 53.3679 50.5097 54 48.8889 54H6.11111C4.49034 54 2.93596 53.3679 1.7899 52.2426C0.643847 51.1174 0 49.5913 0 48V6C0 4.4087 0.643847 2.88258 1.7899 1.75736C2.93596 0.632141 4.49034 0 6.11111 0H48.8889ZM47.3611 46.5V30.6C47.3611 28.0062 46.3116 25.5186 44.4436 23.6845C42.5755 21.8504 40.0419 20.82 37.4 20.82C34.8028 20.82 31.7778 22.38 30.3111 24.72V21.39H21.7861V46.5H30.3111V31.71C30.3111 29.4 32.2056 27.51 34.5583 27.51C35.6929 27.51 36.7809 27.9525 37.5832 28.7402C38.3854 29.5278 38.8361 30.5961 38.8361 31.71V46.5H47.3611ZM11.8556 16.68C13.217 16.68 14.5227 16.149 15.4854 15.2038C16.4481 14.2586 16.9889 12.9767 16.9889 11.64C16.9889 8.85 14.6972 6.57 11.8556 6.57C10.486 6.57 9.17255 7.10416 8.20413 8.05497C7.23572 9.00578 6.69167 10.2954 6.69167 11.64C6.69167 14.43 9.01389 16.68 11.8556 16.68ZM16.1028 46.5V21.39H7.63889V46.5H16.1028Z"
                            fill="currentColor"
                          />
                        </svg>
                      )}
                      {social.icon === "twitter" && (
                        <svg
                          viewBox="0 0 55 54"
                          fill="none"
                          className="ftsvg [height:_clamp(17px,2vw,32px)]"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0 0H6.25L43.75 54H37.5L0 0ZM11.25 0H17.5L55 54H48.75L11.25 0Z"
                            fill="currentColor"
                          />
                          <path
                            d="M5 0L17.5 0V5.4H5V0ZM37.5 54H50V48.6H37.5V54Z"
                            fill="currentColor"
                          />
                          <path
                            d="M43.75 0H52.5L10 54H1.25L43.75 0Z"
                            fill="currentColor"
                          />
                        </svg>
                      )}
                      {social.icon === "youtube" && (
                        <svg
                          viewBox="0 0 72 48"
                          fill="none"
                          className="ftsvg [height:_clamp(17px,2vw,32px)]"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M28.8 34.2857L47.484 24L28.8 13.7143V34.2857ZM70.416 7.44C70.884 9.05143 71.208 11.2114 71.424 13.9543C71.676 16.6971 71.784 19.0629 71.784 21.12L72 24C72 31.5086 71.424 37.0286 70.416 40.56C69.516 43.6457 67.428 45.6343 64.188 46.4914C62.496 46.9371 59.4 47.2457 54.648 47.4514C49.968 47.6914 45.684 47.7943 41.724 47.7943L36 48C20.916 48 11.52 47.4514 7.812 46.4914C4.572 45.6343 2.484 43.6457 1.584 40.56C1.116 38.9486 0.792 36.7886 0.576 34.0457C0.324 31.3029 0.216 28.9371 0.216 26.88L0 24C0 16.4914 0.576 10.9714 1.584 7.44C2.484 4.35429 4.572 2.36571 7.812 1.50857C9.504 1.06286 12.6 0.754285 17.352 0.548571C22.032 0.308571 26.316 0.205714 30.276 0.205714L36 0C51.084 0 60.48 0.548572 64.188 1.50857C67.428 2.36571 69.516 4.35429 70.416 7.44Z"
                            fill="currentColor"
                          />
                        </svg>
                      )}
                      {social.icon === "instagram" && (
                        <svg
                          className="ftsvg [height:_clamp(17px,2vw,32px)]"
                          viewBox="0 0 55 54"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.95 0H39.05C47.85 0 55 7.02 55 15.66V38.34C55 42.4933 53.3196 46.4765 50.3284 49.4133C47.3372 52.3501 43.2802 54 39.05 54H15.95C7.15 54 0 46.98 0 38.34V15.66C0 11.5067 1.68044 7.52353 4.67165 4.58671C7.66285 1.64989 11.7198 0 15.95 0ZM15.4 5.4C12.7744 5.4 10.2563 6.42407 8.39964 8.24692C6.54303 10.0698 5.5 12.5421 5.5 15.12V38.88C5.5 44.253 9.9275 48.6 15.4 48.6H39.6C42.2256 48.6 44.7437 47.5759 46.6004 45.7531C48.457 43.9302 49.5 41.4579 49.5 38.88V15.12C49.5 9.747 45.0725 5.4 39.6 5.4H15.4ZM41.9375 9.45C42.8492 9.45 43.7235 9.80558 44.3682 10.4385C45.0128 11.0715 45.375 11.9299 45.375 12.825C45.375 13.7201 45.0128 14.5786 44.3682 15.2115C43.7235 15.8444 42.8492 16.2 41.9375 16.2C41.0258 16.2 40.1515 15.8444 39.5068 15.2115C38.8622 14.5786 38.5 13.7201 38.5 12.825C38.5 11.9299 38.8622 11.0715 39.5068 10.4385C40.1515 9.80558 41.0258 9.45 41.9375 9.45ZM27.5 13.5C31.1467 13.5 34.6441 14.9223 37.2227 17.4541C39.8013 19.9858 41.25 23.4196 41.25 27C41.25 30.5804 39.8013 34.0142 37.2227 36.5459C34.6441 39.0777 31.1467 40.5 27.5 40.5C23.8533 40.5 20.3559 39.0777 17.7773 36.5459C15.1987 34.0142 13.75 30.5804 13.75 27C13.75 23.4196 15.1987 19.9858 17.7773 17.4541C20.3559 14.9223 23.8533 13.5 27.5 13.5ZM27.5 18.9C25.312 18.9 23.2135 19.7534 21.6664 21.2724C20.1192 22.7915 19.25 24.8517 19.25 27C19.25 29.1483 20.1192 31.2085 21.6664 32.7276C23.2135 34.2466 25.312 35.1 27.5 35.1C29.688 35.1 31.7865 34.2466 33.3336 32.7276C34.8808 31.2085 35.75 29.1483 35.75 27C35.75 24.8517 34.8808 22.7915 33.3336 21.2724C31.7865 19.7534 29.688 18.9 27.5 18.9Z"
                            fill="currentColor"
                          />
                        </svg>
                      )}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
          
          {/* Right Column - Footer Links */}
          <motion.div 
            className="basis-full lg:basis-7/12"
            variants={fadeInUp}
          >
            <motion.div 
              className="grid grid-cols-2 lg:grid-cols-4 gap-[10px]"
              variants={staggerChildren}
            >
              {footerNavigation.map((column) => (
                <motion.div 
                  key={column.title} 
                  variants={fadeInUp}
                  className="mb-8"
                >
                  <h2 className="[font-size:_clamp(12px,2vw,20px)] font-bold mb-[12px] lg:mb-[36px] text-[#0000009c] relative">
                    {column.title}
                    <motion.span
                      className="absolute -bottom-2 left-0 h-[2px] bg-[#FE6623]/50"
                      initial={{ width: 0 }}
                      whileInView={{ width: "40%" }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    />
                  </h2>
                  <motion.ul 
                    className="m-0 p-0 space-y-3"
                    variants={staggerChildren}
                  >
                    {column.links.map((link) => (
                      <motion.li 
                        key={link.text} 
                        className="mb-[10px] lg:mb-[12px] transform"
                        variants={fadeInUp}
                        whileHover={{ x: 5, color: "#FE6623" }}
                        transition={{ duration: 0.2 }}
                      >
                        <Link
                          href={link.href}
                          className="text-[#707070] [font-size:_clamp(10px,2vw,16px)] hover:text-primary transition-colors duration-300 flex items-center"
                        >
                          <motion.span 
                            className="w-0 h-[1px] bg-[#FE6623] mr-0 opacity-0"
                            whileHover={{ width: 10, marginRight: 8, opacity: 1 }}
                            transition={{ duration: 0.3 }}
                          />
                          {link.text.includes("(") ? (
                            <>
                              {link.text.split("(")[0]}{" "}
                              <span className="text-[10px]">
                                ({link.text.split("(")[1]}
                              </span>
                            </>
                          ) : (
                            link.text
                          )}
                        </Link>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Subscribe Section */}
        <motion.div 
          className="flex flex-wrap mt-[30px] lg:mt-[0px] mb-[30px] lg:mb-[58px] flex-row items-end"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="basis-full pe-[15px] lg:basis-6/12">
            <motion.div 
              className="max-w-[556px]"
              variants={pulseAnimation}
              initial="initial"
              animate="animate"
            >
              <span className="text-[#0000008a] font-normal [font-size:_clamp(12px,2vw,24px)]">
                For Latest Insights
              </span>
              <h3 className="text-[#000000] font-normal leading-[1.3] [font-size:_clamp(16px,2vw,26px)]">
                Subscribe for Updates.
              </h3>
              <form className="mt-[20px] lg:mt-[40px]">
                <div className="w-full group relative">
                  <motion.input
                    type="email"
                    name="email"
                    id="floating_email"
                    className="block  pe-[35px] bg-no-repeat py-3 px-0 w-full text-[#000] bg-transparent border-0 border-b-2 border-p[#000000bf] appearance-none focus:outline-none focus:ring-0 placeholder:font-light placeholder:text-[#000000bf] text-[20px] focus:border-[#FE6623E3] peer"
                    placeholder="Enter your email address.."
                    required
                    whileFocus={{ 
                      borderColor: "#FE6623", 
                      transition: { duration: 0.3 } 
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  />
                  <motion.button
                    type="submit"
                    className="absolute right-0 top-1/2 -translate-y-1/2 text-primary hover:text-[#FE6623E3] transition-colors"
                    whileHover={{ scale: 1.1, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 12L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M15 5L22 12L15 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Footer Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.hr 
            className="border-0 h-[1px] bg-hr-gradient"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1 }}
          />
        </motion.div>
        
        <motion.div 
          className="text-center py-[15px] lg:py-[32px]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.span 
            className="text-[#292C33] block mb-[32px] text-[14px]"
            whileHover={{ color: "#FE6623" }}
          >
            @2025 DeeCogs
          </motion.span>
          <ul className="flex justify-center">
            {["Legal", "Privacy", "Trust"].map((item, index) => (
              <motion.li 
                key={item} 
                className="px-[32px]" 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                <Link 
                  href="#" 
                  className="text-[#292C33] text-[14px] hover:text-primary transition-colors relative group"
                >
                  {item}
                  <motion.span 
                    className="absolute -bottom-1 left-0 h-[1px] bg-[#FE6623] w-0 group-hover:w-full transition-all duration-300"
                    initial={{ width: "0%" }}
                    whileHover={{ width: "100%" }}
                  />
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
      
      {/* Footer Decoration */}
      <motion.img
        src="/image/footer-shape.png"
        className="absolute max-w-[315px] md:max-w-[1280px] right-0 bottom-0 z-0"
        alt="Footer decoration"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />
    </footer>
  );
};

export default Footer;