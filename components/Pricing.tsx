export default function Pricing() {
  const plans = [
    {
      name: "Single Card",
      subtitle: "Smart Business Card",
      features: [
        "1 NFC Card",
        "Custom design",
        "Digital profile page",
        "Unlimited updates",
        "WhatsApp support"
      ],
      cta: "Pre-Order Now",
      popular: false,
      badge: null,
      whatsappLink: "https://wa.me/94701200064?text=Hi!%20I%27d%20like%20to%20pre-order%20the%20Single%20Card%20from%20IDORA.%20I%27m%20interested%20in%201%20NFC%20card%20with%20custom%20design.%20Please%20share%20more%20details!"
    },
    {
      name: "Business Pack",
      subtitle: "Smart Business Card",
      features: [
        "10 NFC Cards",
        "Custom branding",
        "Individual profiles",
        "Unlimited updates",
        "Priority support",
        "Free delivery"
      ],
      cta: "Pre-Order Now",
      popular: true,
      badge: "MOST POPULAR",
      whatsappLink: "https://wa.me/94701200064?text=Hi!%20I%27d%20like%20to%20pre-order%20the%20Business%20Pack%20from%20IDORA.%20I%27m%20interested%20in%2010%20NFC%20cards%20with%20custom%20branding%20for%20my%20team.%20Please%20share%20pricing%20and%20details!"
    },
    {
      name: "Company Card",
      subtitle: "Smart Business Card",
      features: [
        "5 NFC Cards",
        "Company branding",
        "Individual profiles",
        "Unlimited updates",
        "Priority support"
      ],
      cta: "Pre-Order Now",
      popular: false,
      badge: null,
      whatsappLink: "https://wa.me/94701200064?text=Hi!%20I%27d%20like%20to%20pre-order%20the%20Company%20Card%20pack%20from%20IDORA.%20I%27m%20interested%20in%205%20NFC%20cards%20with%20company%20branding.%20Please%20provide%20more%20information!"
    },
    {
      name: "Custom Card",
      subtitle: "Smart Business Card",
      features: [
        "Fully customizable design",
        "Premium materials",
        "Digital profile page",
        "Choose any profile type",
        "Priority support"
      ],
      cta: "Pre-Order Now",
      popular: false,
      badge: "BEST VALUE",
      whatsappLink: "https://wa.me/94701200064?text=Hi!%20I%27d%20like%20to%20pre-order%20a%20Custom%20Card%20from%20IDORA.%20I%27m%20interested%20in%20a%20fully%20customizable%20design%20with%20premium%20materials.%20Let%27s%20discuss%20my%20requirements!"
    }
  ]

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0B0F1A]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-indigo-600 to-blue-600 text-white text-sm font-bold px-4 py-2 rounded-full mb-4">
            🚀 Coming Soon - Pre-Order Now!
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Choose Your IDORA Card</h2>
          <p className="text-xl text-gray-300">Reserve your card now. Special launch pricing for early birds!</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className="relative bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/20 hover:border-gray-700 hover:-translate-y-2"
            >
              <div className="p-6">
                {/* Header with Badge */}
                <div className="text-center mb-4 min-h-[60px]">
                  {plan.badge && (
                    <div className={`inline-block mb-2 ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-yellow-500 to-yellow-600' 
                        : 'bg-gradient-to-r from-green-500 to-emerald-600'
                    } text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg`}>
                      {plan.badge}
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
                  <p className="text-sm text-gray-400">{plan.subtitle}</p>
                </div>

                {/* Card Image */}
                <div className="relative mb-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 h-40 flex items-center justify-center">
                  <div className="relative w-full h-full perspective-500">
                    <div className="absolute inset-0 animate-float">
                      <div className="w-full h-full rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 shadow-2xl p-4 flex flex-col justify-between transform hover:scale-105 transition-transform">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="text-white font-bold text-sm">IDORA</p>
                            <p className="text-gray-400 text-xs">NFC Card</p>
                          </div>
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 to-blue-500"></div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded bg-white/20 backdrop-blur"></div>
                          <div>
                            <p className="text-white text-xs font-semibold">Your Name</p>
                            <p className="text-gray-400 text-xs">tap to connect</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pre-Order Notice */}
                <div className="mb-6 text-center">
                  <div className="bg-indigo-500/10 border border-indigo-500/30 rounded-xl py-3 px-4">
                    <p className="text-indigo-400 font-semibold text-sm">Launch Price</p>
                    <p className="text-white text-lg font-bold">Coming Soon</p>
                    <p className="text-gray-400 text-xs mt-1">Early bird discount available</p>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a 
                  href={plan.whatsappLink}
                  target="_blank"
                  className="block w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-3 rounded-xl font-bold text-center hover:from-indigo-700 hover:to-blue-700 transition shadow-lg shadow-indigo-500/30"
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-300 mb-4">All plans will include:</p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300">
            <span>✓ Free shipping in Colombo</span>
            <span>✓ Lifetime card validity</span>
            <span>✓ No monthly fees</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .perspective-500 {
          perspective: 500px;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotateY(-15deg);
          }
          50% {
            transform: translateY(-10px) rotateY(-15deg);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
