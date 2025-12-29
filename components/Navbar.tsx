'use client'

import { useState, useEffect } from 'react'

const navItems = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Use Cases', href: '#use-cases' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

const sections = [{ label: 'Hero', href: '#hero' }, ...navItems]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [active, setActive] = useState('#hero')

  useEffect(() => {
    const handleScroll = () => {
      sections.forEach(section => {
        const el = document.querySelector(section.href)
        if (!el) return

        const rect = el.getBoundingClientRect()
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(section.href)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const linkClass = (href: string) =>
    `transition font-medium ${
      active === href
        ? 'text-primary border-b-2 border-primary'
        : 'text-gray-300 hover:text-primary'
    }`

  return (
    <nav className="fixed top-0 w-full bg-[#0B0F1A]/95 backdrop-blur-sm z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <a
            href="#hero"
            onClick={() => {
              setActive('#hero')
              setIsOpen(false)
            }}
            className={`text-2xl font-bold transition ${
              active === '#hero' ? 'text-white' : 'text-white'
            }`}
          >
            IDORA
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => (
              <a
                key={item.href}
                href={item.href}
                className={linkClass(item.href)}
              >
                {item.label}
              </a>
            ))}

            <a
              href="https://wa.me/94701200064"
              target="_blank"
              className="bg-primary text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white text-2xl"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0B0F1A] border-t border-white/10">
          <div className="px-4 pt-3 pb-4 space-y-3">
            {navItems.map(item => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => {
                  setActive(item.href)
                  setIsOpen(false)
                }}
                className={`block py-2 transition ${
                  active === item.href
                    ? 'text-primary font-semibold'
                    : 'text-gray-300 hover:text-primary'
                }`}
              >
                {item.label}
              </a>
            ))}

            <a
              href="https://wa.me/94701200064"
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
