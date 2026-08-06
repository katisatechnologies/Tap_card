'use client'

import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "What is NFC and why is this better than paper cards?",
      answer: "NFC lets phones open your IDORA profile with a simple tap. Unlike paper cards, your details stay updated, your links are interactive, and every interaction can become a lead."
    },
    {
      question: "Which phones support tapping?",
      answer: "Most modern iPhones and Android phones support NFC tapping. In practice, nearly all current business users can tap and open your profile instantly."
    },
    {
      question: "What if NFC is disabled on the phone?",
      answer: "If NFC is turned off or unsupported, customers can still scan the QR fallback and open the same profile. You never lose the sharing moment."
    },
    {
      question: "Do people need an app to use IDORA?",
      answer: "No app is required for visitors. They tap, your page opens in the browser, and they can call, message, or save contact immediately."
    },
    {
      question: "Can I update my profile after buying?",
      answer: "Yes. You can edit contact details, links, visuals, and CTAs from your dashboard. Your public profile updates in real time."
    },
    {
      question: "How does IDORA help with lead follow-up?",
      answer: "Visitors can submit lead details directly from your profile. In the dashboard you can manage statuses, priorities, timeline notes, and AI-assisted follow-up suggestions."
    },
    {
      question: "Can teams and agencies use IDORA at scale?",
      answer: "Yes. IDORA supports consistent team profiles, conversion-focused links, premium presentation options, and exportable lead data for operations."
    },
    {
      question: "Is IDORA only for contact sharing?",
      answer: "No. Contact sharing is the entry point. IDORA is positioned as a digital identity platform that grows into bookings, follow-up, analytics, and business conversion workflows."
    }
  ]

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0B0F1A] to-gray-900">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">NFC education and adoption FAQs</h2>
          <p className="text-xl text-gray-300">Short answers for first-time buyers in the Sri Lanka market.</p>
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
