export default function WhyTapShare() {
const comparisons = [
  {
    old: "Paper Cards",
    problem: "Thrown away, outdated, impossible to track",
    solution: "One profile link you can update anytime, with measurable results.",
    icon: "/images/paper-card.png"
  },
  {
    old: "Manual WhatsApp Sharing",
    problem: "Typing numbers and names breaks momentum",
    solution: "One tap opens call, email, WhatsApp and socials instantly.",
    icon: "/images/whatsapp.png"
  },
  {
    old: "Static QR-Only Flow",
    problem: "No lead pipeline, no follow-up context",
    solution: "Capture lead details and move them through a real status pipeline.",
    icon: "/images/qr-code.png"
  }
];

  const benefits = [
    { label: "Public digital profile with one-tap actions", icon: "01" },
    { label: "Lead capture form from every profile visit", icon: "02" },
    { label: "Dashboard with live mobile preview", icon: "03" },
    { label: "Lead statuses: NEW, CONTACTED, INTERESTED, WON, LOST", icon: "04" },
    { label: "AI-assisted follow-up suggestions", icon: "05" },
    { label: "View analytics and CSV lead export", icon: "06" },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-[#0B0F1A]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">You are not buying an NFC card</h2>
          <p className="text-xl text-gray-300">You are building a digital identity system that converts first meetings into business.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {comparisons.map((item, index) => (
            <div key={index} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-gray-600 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10">
              <div className="mb-4 w-16 h-16 flex items-center justify-center 
                  bg-gradient-to-tr from-gray-100 to-blue-900 rounded-full p-3 
                  shadow-lg transform transition-transform duration-300 hover:scale-110">
                <img src={item.icon} alt={item.old} className="w-10 h-10 object-contain" />
              </div>
                            
              <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 rounded-lg px-3 py-1.5 mb-3">
                <span className="text-red-400 text-xs font-bold uppercase tracking-wide">Outdated</span>
                <span className="text-red-400 font-semibold text-sm">{item.old}</span>
              </div>
              
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">{item.problem}</p>
              
              <div className="border-t border-gray-700 pt-4 mt-4">
                <div className="flex items-start gap-2">
                  <div className="w-6 h-6 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-white font-semibold text-base leading-relaxed">{item.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-dark rounded-3xl p-8 sm:p-12 border border-white/10">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">IDORA platform roadmap value</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-cyan-500 text-black rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-sm">{benefit.icon}</span>
                </div>
                <span className="text-white">{benefit.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
