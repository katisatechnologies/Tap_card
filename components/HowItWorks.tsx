export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Tap",
      description: "A customer taps your IDORA card. No app, no typing.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      )
    },
    {
      number: "02",
      title: "Profile Opens",
      description: "Your full digital identity appears in seconds.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      number: "03",
      title: "Contact Saved",
      description: "They save your contact through vCard in one tap.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      )
    },
    {
      number: "04",
      title: "Lead Captured",
      description: "Visitors can submit details so follow-up starts fast.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-4l-4 4v-4z" />
        </svg>
      )
    }
  ]

  const demoIdeas = [
    'Realtor: Open house to saved contact in 10 seconds',
    'Cafe: Tap for menu, location, review and socials',
    'Freelancer: Portfolio, booking and WhatsApp from one profile',
    'Agency: Team member profile with brand-consistent links'
  ]

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0B0F1A] to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">The 10-second product story</h2>
          <p className="text-xl text-gray-300">Show this once and customers understand why IDORA wins over paper cards.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 text-center hover:shadow-xl hover:shadow-cyan-500/10 hover:border-gray-600 transition-all duration-300 h-full">
                <div className="text-cyan-300 mb-4 flex justify-center">
                  {step.icon}
                </div>
                <div className="text-4xl font-bold text-cyan-500/30 mb-3">{step.number}</div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 grid lg:grid-cols-2 gap-8 items-stretch">
          <div className="bg-white/5 border border-white/15 rounded-2xl p-6">
            <h3 className="text-2xl font-bold text-white mb-4">How businesses use IDORA in real life</h3>
            <div className="space-y-3">
              {demoIdeas.map((idea) => (
                <div key={idea} className="flex items-start gap-3 rounded-xl bg-black/20 border border-white/10 p-3">
                  <span className="w-2 h-2 mt-2 rounded-full bg-emerald-300" />
                  <p className="text-gray-200">{idea}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/5 border border-white/15 rounded-2xl p-6">
            <h3 className="text-2xl font-bold text-white mb-4">Built for fast adoption in Sri Lanka</h3>
            <p className="text-gray-200 mb-4">
              Buyers usually decide after one live tap. IDORA keeps this simple with NFC convenience and a QR fallback when needed.
            </p>
            <p className="text-cyan-200 font-semibold">
              Zero app install. Zero typing. One clean first impression.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
