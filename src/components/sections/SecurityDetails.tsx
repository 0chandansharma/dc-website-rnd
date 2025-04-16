import React from "react";
import { motion } from "framer-motion";
import { Shield, Lock, RadarIcon, KeyRoundIcon } from "lucide-react";

const SecurityDetails = () => {
  const securityFeatures = [
    {
      icon: Shield,
      title: "Data Encryption Protocols",
      description: "Advanced end-to-end encryption for data at rest and in transit, ensuring maximum protection.",
      details: [
        "256-bit AES encryption",
        "TLS 1.3 secure communication",
        "Encrypted data storage",
        "Secure key management"
      ],
      color: "text-blue-600"
    },
    {
      icon: Lock,
      title: "Compliance & Policy Management",
      description: "Rigorous data governance and compliance with international privacy standards.",
      details: [
        "GDPR compliance",
        "CCPA data protection",
        "Regular privacy audits",
        "Transparent data policies"
      ],
      color: "text-green-600"
    },
    {
      icon: RadarIcon,
      title: "Real-Time Threat Monitoring",
      description: "Continuous AI-powered security monitoring to detect and prevent potential threats.",
      details: [
        "24/7 security monitoring",
        "Machine learning threat detection",
        "Automated incident response",
        "Anomaly detection algorithms"
      ],
      color: "text-red-600"
    },
    {
      icon: KeyRoundIcon,
      title: "Access Control & Authentication",
      description: "Robust identity management and multi-factor authentication systems.",
      details: [
        "Role-based access control",
        "Multi-factor authentication",
        "Single Sign-On (SSO) support",
        "Adaptive authentication"
      ],
      color: "text-purple-600"
    }
  ];

  return (
    <section className="security-details py-20 bg-gray-50">
      <div className="container max-w-[90rem] mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="bg-[#1316310D] rounded-[31px] py-2 px-4 text-sm text-[#000] inline-block mb-4">
            Security Approach
          </span>
          <h2 className="text-4xl font-normal text-[#000000CC] mb-6">
            Comprehensive <span className="heading-orange">Security Framework</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our multi-layered security strategy is designed to protect your data with cutting-edge technologies and rigorous protocols.
          </p>
        </motion.div>

        {/* Security Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1 
              }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 h-full">
                <div className="flex items-center mb-6">
                  <feature.icon 
                    className={`w-12 h-12 mr-4 ${feature.color} group-hover:scale-110 transition-transform`} 
                  />
                  <h3 className="text-2xl font-semibold text-[#000000CC] group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <div className="border-t pt-6">
                  <h4 className="text-lg font-medium text-[#000000CC] mb-4">Key Aspects:</h4>
                  <ul className="space-y-2 text-gray-700">
                    {feature.details.map((detail, idx) => (
                      <li 
                        key={idx} 
                        className="flex items-center"
                      >
                        <svg 
                          className="w-4 h-4 mr-2 text-primary" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M5 13l4 4L19 7" 
                          />
                        </svg>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certification Section */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-normal text-[#000000CC] mb-8">
            Trusted <span className="heading-orange">Certifications</span>
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {['GDPR', 'ISO 27001', 'SOC 2', 'CCPA'].map((cert, index) => (
              <motion.div
                key={cert}
                className="bg-white shadow-md rounded-lg px-6 py-3 text-gray-700 font-semibold hover:shadow-lg transition-all"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1 
                }}
              >
                {cert}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="mt-20 bg-white rounded-2xl shadow-lg overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-12">
              <h3 className="text-3xl font-normal text-[#000000CC] mb-6">
                Need More <span className="heading-orange">Security Details?</span>
              </h3>
              <p className="text-gray-600 mb-6">
                Our dedicated security experts are ready to provide comprehensive insights and address your specific security concerns.
              </p>
              <motion.button
                className="bg-[#FE6623] text-white py-3 px-8 rounded-full font-medium hover:bg-[#FE6623]/90 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Speak with Security Team
              </motion.button>
            </div>
            <div className="bg-[#FE6623]/10 p-12 hidden md:block">
              <div className="flex items-center space-x-4">
                <Shield className="w-16 h-16 text-primary opacity-70" />
                <div>
                  <h4 className="text-xl font-semibold text-[#000000CC]">24/7 Security Support</h4>
                  <p className="text-gray-600">Immediate assistance for any security inquiries</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SecurityDetails;