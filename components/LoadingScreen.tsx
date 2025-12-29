'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function LoadingScreen({ onLoadingComplete }: { onLoadingComplete: () => void }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(onLoadingComplete, 500)
          return 100
        }
        return prev + 1
      })
    }, 60)

    return () => clearInterval(interval)
  }, [onLoadingComplete])

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-gradient-to-br from-[#0B0F1A] via-gray-900 to-[#0B0F1A] flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: progress >= 100 ? 0 : 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center relative">
        {/* Animated background glow */}
        <motion.div
          className="absolute -inset-32 bg-gradient-to-r from-indigo-500/20 to-blue-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        {/* Main content */}
        <div className="relative">
          {/* Card animation */}
          <motion.div
            className="mb-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="relative w-64 h-40 mx-auto perspective-1000"
              animate={{ rotateY: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <img
                src="/images/idora-card.png"
                alt="IDORA NFC Card"
                className="w-full h-full object-contain preserve-3d rounded-2xl"
              />
            </motion.div>
          </motion.div>

          {/* Brand name */}
          <motion.h1
            className="text-5xl font-bold text-white mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            IDORA
          </motion.h1>

          {/* Tagline */}
          <motion.p
            className="text-gray-400 text-lg mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Share Your Contact in One Tap
          </motion.p>

          {/* NFC Wave animation */}
          <motion.div className="flex justify-center mb-6">
            <div className="relative w-16 h-16">
              <motion.div
                className="absolute inset-0 border-2 border-indigo-400 rounded-full"
                animate={{ scale: [0.8, 1.5], opacity: [0.8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="absolute inset-0 border-2 border-blue-400 rounded-full"
                animate={{ scale: [0.8, 1.5], opacity: [0.8, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              />
              <motion.div
                className="absolute inset-0 border-2 border-blue-400 rounded-full"
                animate={{ scale: [0.8, 1.5], opacity: [0.8, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-blue-200 rounded-full"></div>
            </div>
          </motion.div>

          {/* Progress bar */}
          <div className="w-64 mx-auto">
            <div className="h-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-indigo-400 to-blue-200"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <motion.p
              className="text-gray-500 text-sm mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              Loading experience...
            </motion.p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .preserve-3d {
          transform-style: preserve-3d;
        }
      `}</style>
    </motion.div>
  )
}
