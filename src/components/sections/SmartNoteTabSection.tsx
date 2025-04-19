import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface SmartNoteTabSectionProps {
  onBookDemo?: () => void;
}

const SmartNoteTabSection: React.FC<SmartNoteTabSectionProps> = ({ onBookDemo }) => {
  // Features of Smart Note-Tab
  const features = [
    {
      icon: "📝",
      title: "Intelligent Note-Taking",
      description: "Transform handwritten notes into digital text with AI recognition."
    },
    {
      icon: "🔍",
      title: "Smart Search",
      description: "Find information instantly with semantic search capabilities."
    },
    {
      icon: "🔄",
      title: "Seamless Sync",
      description: "Access notes across all devices with real-time synchronization."
    },
    {
      icon: "🧠",
      title: "AI Suggestions",
      description: "Get intelligent content recommendations based on your notes."
    }
  ];

  return (
    <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
      {/* Subtle background effect */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black/0 to-primary/20"></div>
        <div 
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: "radial-gradient(circle at 25% 25%, rgba(254, 102, 35, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)"
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-sm font-medium mb-4">
                Coming Soon
              </span>
              <h2 className="text-4xl font-normal mb-6">
                Introducing <span className="text-primary">Smart Note-Tab</span>
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Elevate your note-taking experience with AI-powered organization and intelligent insights, designed for professionals who value clarity and efficiency.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Features column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-8">
                {features.map((feature, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-xl">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-1 text-white">{feature.title}</h3>
                      <p className="text-gray-300">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                className="mt-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <Link 
                  href="company/contact"
                  className="inline-flex items-center bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary-hover transition-colors duration-300"
                >
                  <span className="mr-2">Join the Waitlist</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </motion.div>
            </motion.div>

            {/* Visual element */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative aspect-square max-w-md mx-auto">
                {/* Abstract representation of a tablet */}
                <motion.div 
                  className="absolute inset-10 rounded-xl bg-gradient-to-br from-primary/30 to-blue-600/30 backdrop-blur-sm border border-white/10 shadow-lg overflow-hidden"
                  animate={{ 
                    y: [0, -10, 0],
                    boxShadow: [
                      "0 0 20px rgba(254, 102, 35, 0.2)",
                      "0 0 30px rgba(254, 102, 35, 0.4)",
                      "0 0 20px rgba(254, 102, 35, 0.2)"
                    ]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    repeatType: "reverse" 
                  }}
                >
                  {/* Interface elements */}
                  <div className="absolute inset-2 flex flex-col">
                    {/* Header bar */}
                    <div className="h-6 bg-white/10 rounded-t-lg mb-2 flex items-center px-3">
                      <div className="w-2 h-2 rounded-full bg-white/40 mr-1"></div>
                      <div className="w-2 h-2 rounded-full bg-white/40 mr-1"></div>
                      <div className="w-2 h-2 rounded-full bg-white/40"></div>
                    </div>
                    
                    {/* Content area */}
                    <div className="flex-grow p-2">
                      {/* Note lines */}
                      {[...Array(6)].map((_, i) => (
                        <motion.div 
                          key={i}
                          className="h-4 bg-white/5 rounded mb-2 w-full overflow-hidden"
                          initial={{ width: "60%" }}
                          animate={{ width: ["60%", "85%", "60%"] }}
                          transition={{
                            duration: 3,
                            delay: i * 0.5,
                            repeat: Infinity,
                            repeatType: "reverse"
                          }}
                        >
                          <motion.div 
                            className="h-full bg-primary/20 rounded"
                            initial={{ width: "0%" }}
                            animate={{ width: ["0%", "100%", "0%"] }}
                            transition={{
                              duration: 5,
                              delay: i * 0.3,
                              repeat: Infinity,
                              repeatType: "reverse"
                            }}
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Background circles */}
                <motion.div
                  className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-primary/10 blur-xl"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{ 
                    duration: 6,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
                
                <motion.div
                  className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-blue-500/10 blur-xl"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.4, 0.2]
                  }}
                  transition={{ 
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 1
                  }}
                />
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 mt-10">
                {[
                  { value: "70%", label: "Productivity Boost" },
                  { value: "24/7", label: "Access Anywhere" }
                ].map((stat, index) => (
                  <motion.div 
                    key={index} 
                    className="text-center p-4 rounded-lg bg-white/5 backdrop-blur-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + (index * 0.1) }}
                    whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                  >
                    <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-gray-300 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SmartNoteTabSection;