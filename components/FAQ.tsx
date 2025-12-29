'use client'

import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "Does it work on iPhone?",
      answer: "Yes! IDORA works on all iPhones (iPhone 7 and newer) and all Android phones with NFC. No app download needed."
    },
    {
      question: "Do customers need to download an app?",
      answer: "No. When someone taps your card, a webpage opens instantly in their browser. They can save your contact directly from there."
    },
    {
      question: "Can I update my details later?",
      answer: "Yes. You can update your contact info, social media links, and profile anytime from your dashboard. Changes reflect immediately."
    },
    {
      question: "What if I lose my card?",
      answer: "You can deactivate the lost card from your account and order a replacement. Your profile and data remain safe."
    },
    {
      question: "How long does delivery take?",
      answer: "Delivery within Colombo takes 2-3 days. Other cities in Sri Lanka take 3-5 days. We use reliable courier services."
    },
    {
      question: "Can I customize the card design?",
      answer: "Yes! You can add your logo, choose colors, and customize the design. We'll send you a preview before printing."
    },
    {
      question: "Is there a monthly fee?",
      answer: "No subscriptions. You pay once for the card and profile setup. That's it. Update your details forever at no extra cost."
    },
    {
      question: "What if NFC doesn't work?",
      answer: "Every IDORA card also includes a QR code backup. If NFC fails, people can scan the QR code instead."
    }
  ]

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0B0F1A] to-gray-900">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Questions?</h2>
          <p className="text-xl text-gray-300">Everything you need to know</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-700 rounded-xl overflow-hidden bg-gray-800/50">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-800 transition"
              >
                <span className="font-semibold text-white text-lg pr-4">{faq.question}</span>
                <svg 
                  className={`w-6 h-6 text-primary flex-shrink-0 transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-300 mb-4">Still have questions?</p>
          <a 
            href="https://wa.me/94701200064?text=Hi!%20I%20have%20a%20question%20about%20IDORA.%20I%20was%20reading%20your%20FAQ%20and%20need%20more%20information."
            target="_blank"
            className="inline-flex items-center text-primary font-semibold hover:text-blue-700 transition"
          >
            Message us on WhatsApp
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
