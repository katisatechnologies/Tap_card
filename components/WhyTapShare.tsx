export default function WhyTapShare() {
const comparisons = [
  {
    old: "Paper Cards",
    problem: "Get lost, damaged, outdated",
    solution: "One card. Update details anytime.",
    icon: "/images/paper-card.png"
  },
  {
    old: "WhatsApp Sharing",
    problem: "Awkward. Takes time. Needs typing.",
    solution: "Just tap. Done in 2 seconds.",
    icon: "/images/whatsapp.png"
  },
  {
    old: "QR Codes",
    problem: "Need to open camera. Bad lighting fails.",
    solution: "Works in dark. No camera needed.",
    icon: "/images/qr-code.png"
  }
];

  const benefits = [
    { label: "No App Required", icon: "✓" },
    { label: "Works on iPhone & Android", icon: "✓" },
    { label: "Lightning Fast", icon: "✓" },
    { label: "Looks Professional", icon: "✓" },
    { label: "Reusable Forever", icon: "✓" },
    { label: "Eco-Friendly", icon: "✓" },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-[#0B0F1A]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Why IDORA?</h2>
          <p className="text-xl text-gray-300">Better than every old method</p>
        </div>

        {/* Comparisons */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {comparisons.map((item, index) => (
            <div key={index} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-gray-600 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10">
            <div className="mb-4 w-16 h-16 flex items-center justify-center bg-white border border-gray-600 rounded-full p-3">
              <img src={item.icon} alt={item.old} className="w-10 h-10 object-contain" />
            </div>
            
              {/* Old Method Badge */}
              <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 rounded-lg px-3 py-1.5 mb-3">
                <span className="text-red-400 text-xs font-bold uppercase tracking-wide">Outdated</span>
                <span className="text-red-400 font-semibold text-sm">{item.old}</span>
              </div>
              
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">{item.problem}</p>
              
              {/* Modern Solution */}
              <div className="border-t border-gray-700 pt-4 mt-4">
                <div className="flex items-start gap-2">
                  <div className="w-6 h-6 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
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

        {/* Benefits Grid */}
        <div className="bg-dark rounded-3xl p-8 sm:p-12">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Everything You Need</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl">{benefit.icon}</span>
                </div>
                <span className="text-white text-lg">{benefit.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
