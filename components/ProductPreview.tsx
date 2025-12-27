'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function ProductPreview() {
  const [hoveredButton, setHoveredButton] = useState<number | null>(null)

  const buttons = [
    { icon: '💬', label: 'WhatsApp', color: 'bg-green-500', hoverColor: 'hover:bg-green-600', delay: 0.1 },
    { icon: '📞', label: 'Call Now', color: 'bg-blue-500', hoverColor: 'hover:bg-blue-600', delay: 0.2 },
    { icon: '📧', label: 'Email', color: 'bg-gray-800', hoverColor: 'hover:bg-gray-900', delay: 0.3 },
    { icon: '💾', label: 'Save Contact', color: 'bg-primary', hoverColor: 'hover:bg-indigo-700', delay: 0.4 },
  ]

  const socialIcons = [
    { icon: 'f', bg: 'bg-blue-100', text: 'text-blue-600', delay: 0.5 },
    { icon: 'in', bg: 'bg-pink-100', text: 'text-pink-600', delay: 0.6 },
    { icon: 'ig', bg: 'bg-purple-100', text: 'text-purple-600', delay: 0.7 },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-indigo-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-dark mb-4">What You Get</h2>
          <p className="text-xl text-gray-600">Premium card + Smart profile page</p>
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
              {/* Dark background container for glassmorphic effect */}
              <div className="bg-gradient-to-br from-[#0B0F1A] to-gray-900 rounded-3xl p-10 shadow-2xl">
                {/* Rotating Glass Card from Hero - Exact Copy */}
                <div className="relative w-80 h-48 perspective-1000">
                  <div className="absolute inset-0 animate-rotate-slow preserve-3d">
                    {/* Glass Card */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 shadow-2xl p-6 flex flex-col justify-between">
                      {/* Card Content */}
                      <div className="flex justify-between items-start">
                        <div className="text-left">
                          <h3 className="text-white font-bold text-xl">TapCard</h3>
                          <p className="text-gray-300 text-sm">Smart NFC</p>
                        </div>
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-400 to-blue-500"></div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur"></div>
                        <div className="text-left">
                          <p className="text-white font-semibold text-base">Your Name</p>
                          <p className="text-gray-400 text-sm">tap to connect</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <motion.div 
              className="mt-6 space-y-3"
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
                    className="w-2 h-2 bg-primary rounded-full"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  />
                  <span className="text-gray-700">{text}</span>
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
            <motion.div 
              className="bg-white rounded-3xl shadow-2xl p-6 max-w-sm mx-auto border-8 border-gray-800"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="space-y-6">
                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <motion.div 
                    className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-pink-500 rounded-full mx-auto mb-4"
                    animate={{ 
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                    whileHover={{ scale: 1.1 }}
                  />
                  <motion.h3 
                    className="text-2xl font-bold text-dark"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    Your Name
                  </motion.h3>
                  <motion.p 
                    className="text-gray-600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    Your Title / Business Name
                  </motion.p>
                </motion.div>

                <div className="space-y-3">
                  {buttons.map((button, index) => (
                    <motion.button
                      key={index}
                      className={`w-full ${button.color} text-white py-3 rounded-xl font-semibold ${button.hoverColor} transition relative overflow-hidden`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: button.delay }}
                      whileHover={{ scale: 1.03, x: 5 }}
                      whileTap={{ scale: 0.98 }}
                      onHoverStart={() => setHoveredButton(index)}
                      onHoverEnd={() => setHoveredButton(null)}
                    >
                      <motion.span
                        className="inline-block mr-2"
                        animate={hoveredButton === index ? { rotate: [0, -10, 10, -10, 0] } : {}}
                        transition={{ duration: 0.5 }}
                      >
                        {button.icon}
                      </motion.span>
                      {button.label}
                      {hoveredButton === index && (
                        <motion.div
                          className="absolute inset-0 bg-white/20"
                          initial={{ x: '-100%' }}
                          animate={{ x: '100%' }}
                          transition={{ duration: 0.6 }}
                        />
                      )}
                    </motion.button>
                  ))}
                </div>

                <motion.div 
                  className="flex justify-center space-x-4 pt-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  {socialIcons.map((social, index) => (
                    <motion.div
                      key={index}
                      className={`w-10 h-10 ${social.bg} rounded-full flex items-center justify-center cursor-pointer`}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: social.delay, type: "spring" }}
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <span className={`${social.text} font-bold`}>{social.icon}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
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
                    className="w-2 h-2 bg-secondary rounded-full"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  />
                  <span className="text-gray-700">{text}</span>
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
