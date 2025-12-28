'use client'

import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-[#0B0F1A]/95 backdrop-blur-sm z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-white">IDORA</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-gray-300 hover:text-primary transition">How It Works</a>
            <a href="#use-cases" className="text-gray-700 hover:text-primary transition">Use Cases</a>
            <a href="#pricing" className="text-gray-700 hover:text-primary transition">Pricing</a>
            <a href="#faq" className="text-gray-700 hover:text-primary transition">FAQ</a>
            <a 
              href="https://wa.me/94701200064?text=Hi!%20I%27m%20interested%20in%20IDORA%20NFC%20cards.%20I%20found%20you%20through%20your%20website%20and%20would%20like%20to%20learn%20more." 
              target="_blank"
              className="bg-primary text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 pt-2 pb-4 space-y-3">
            <a href="#how-it-works" className="block py-2 text-gray-700">How It Works</a>
            <a href="#use-cases" className="block py-2 text-gray-700">Use Cases</a>
            <a href="#pricing" className="block py-2 text-gray-700">Pricing</a>
            <a href="#faq" className="block py-2 text-gray-700">FAQ</a>
            <a 
              href="https://wa.me/94701200064?text=Hi!%20I%27m%20interested%20in%20IDORA%20NFC%20cards.%20I%20found%20you%20through%20your%20website%20and%20would%20like%20to%20learn%20more." 
              target="_blank"
              className="block bg-primary text-white px-6 py-2 rounded-full text-center"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
