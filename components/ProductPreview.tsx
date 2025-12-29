'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { MessageCircle, Phone, Mail, Download, Facebook, Instagram, Linkedin } from 'lucide-react'

export default function ProductPreview() {
  const [hoveredButton, setHoveredButton] = useState<number | null>(null)

  const buttons = [
    { 
      IconComponent: MessageCircle, 
      label: 'WhatsApp', 
      gradient: 'from-green-400 to-green-600',
      shadow: 'shadow-green-500/50',
      delay: 0.1 
    },
    { 
      IconComponent: Phone, 
      label: 'Call Now', 
      gradient: 'from-blue-400 to-blue-600',
      shadow: 'shadow-blue-500/50',
      delay: 0.2 
    },
    { 
      IconComponent: Mail, 
      label: 'Email', 
      gradient: 'from-gray-700 to-gray-900',
      shadow: 'shadow-gray-500/50',
      delay: 0.3 
    },
    { 
      IconComponent: Download, 
      label: 'Save Contact', 
      gradient: 'from-indigo-500 to-purple-600',
      shadow: 'shadow-indigo-500/50',
      delay: 0.4 
    },
  ]

  const socialIcons = [
    { IconComponent: Facebook, bg: 'bg-blue-100', text: 'text-blue-600', delay: 0.5 },
    { IconComponent: Linkedin, bg: 'bg-pink-100', text: 'text-pink-600', delay: 0.6 },
    { IconComponent: Instagram, bg: 'bg-purple-100', text: 'text-purple-600', delay: 0.7 },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-[#0B0F1A] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">What You Get</h2>
          <p className="text-xl text-gray-300">Premium card + Smart profile page</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Physical Card - Same as Hero */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex justify-center">
                {/* Rotating IDORA Card */}
                <div className="relative w-80 h-48 perspective-1000">
                  <div className="absolute inset-0 animate-rotate-slow preserve-3d">
                    <img
                      src="/images/idora-card.png"
                      alt="IDORA NFC Card"
                      className="w-full h-full object-contain rounded-2xl"
                    />
                  </div>
                </div>
            </div>

            <motion.div 
            className="mt-24 space-y-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              {['Premium PVC card with NFC chip', 'Custom design with your branding', 'Durable and water-resistant'].map((text, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center space-x-3 justify-center lg:justify-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <motion.div 
                    className="w-2 h-2 bg-indigo-600 rounded-full"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  />
                  <span className="text-white">{text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Digital Profile */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Phone Frame */}
            <motion.div 
              className="relative bg-gray-900 rounded-[3rem] shadow-2xl p-3 max-w-sm mx-auto"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Phone Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-3xl z-10"></div>
              
              {/* Phone Screen */}
              <div className="bg-gradient-to-b from-gray-50 to-white rounded-[2.5rem] overflow-hidden shadow-inner">
                <div className="px-6 py-8 space-y-6">
                  <motion.div 
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <motion.div 
                      className="w-24 h-24 bg-gradient-to-br from-blue-200 via-blue-800 to-black rounded-full mx-auto mb-4 shadow-lg ring-4 ring-white"
                      animate={{ 
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                      whileHover={{ scale: 1.1 }}
                    />
                    <motion.h3 
                      className="text-2xl font-bold text-gray-900"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      Your Name
                    </motion.h3>
                    <motion.p 
                      className="text-gray-500 text-sm mt-1"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      Your Title / Business Name
                    </motion.p>
                  </motion.div>

                  <div className="space-y-3">
                    {buttons.map((button, index) => {
                      const IconComponent = button.IconComponent
                      return (
                        <motion.button
                          key={index}
                          className={`w-full bg-gradient-to-r ${button.gradient} text-white py-4 px-5 rounded-2xl font-semibold transition-all relative overflow-hidden shadow-lg ${button.shadow} group`}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: button.delay }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          onHoverStart={() => setHoveredButton(index)}
                          onHoverEnd={() => setHoveredButton(null)}
                        >
                          <div className="flex items-center justify-center gap-3 relative z-10">
                            <motion.div
                              animate={hoveredButton === index ? { 
                                rotate: [0, -15, 15, -15, 0],
                                scale: [1, 1.2, 1.2, 1.2, 1]
                              } : {}}
                              transition={{ duration: 0.5 }}
                            >
                              <IconComponent className="w-5 h-5" strokeWidth={2.5} />
                            </motion.div>
                            <span className="text-base tracking-wide">{button.label}</span>
                          </div>
                          
                          {/* Shine effect on hover */}
                          {hoveredButton === index && (
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                              initial={{ x: '-100%' }}
                              animate={{ x: '200%' }}
                              transition={{ duration: 0.8, ease: "easeInOut" }}
                            />
                          )}
                          
                          {/* Glow effect */}
                          <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300 rounded-2xl"></div>
                        </motion.button>
                      )
                    })}
                  </div>

                  <motion.div 
                    className="flex justify-center gap-4 pt-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                  >
                    {socialIcons.map((social, index) => {
                      const IconComponent = social.IconComponent
                      return (
                        <motion.div
                          key={index}
                          className={`w-12 h-12 ${social.bg} rounded-2xl flex items-center justify-center cursor-pointer shadow-sm`}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: social.delay, type: "spring" }}
                          whileHover={{ scale: 1.15, rotate: 5 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <IconComponent className={`${social.text} w-5 h-5`} strokeWidth={2} />
                        </motion.div>
                      )
                    })}
                  </motion.div>
                </div>
              </div>
              
              {/* Phone Bottom Bar */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-gray-700 rounded-full"></div>
            </motion.div>
            
            <motion.div 
              className="mt-6 space-y-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              {['Fully customizable profile page', 'Update your details anytime online', 'Add unlimited social media links'].map((text, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center space-x-3 justify-center lg:justify-start"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <motion.div 
                    className="w-2 h-2 bg-green-500 rounded-full"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  />
                  <span className="text-white">{text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .preserve-3d {
          transform-style: preserve-3d;
        }
        
        @keyframes rotate-slow {
          0% {
            transform: rotateY(0deg);
          }
          100% {
            transform: rotateY(360deg);
          }
        }
        
        .animate-rotate-slow {
          animation: rotate-slow 8s linear infinite;
        }
      `}</style>
    </section>
  )
}