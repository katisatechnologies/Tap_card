export default function Pricing() {
  const plans = [
    {
      name: "Single Card",
      price: "LKR 1,500",
      description: "Perfect for trying out",
      features: [
        "1 NFC Card",
        "Custom design",
        "Digital profile page",
        "Unlimited updates",
        "WhatsApp support"
      ],
      cta: "Order Now",
      popular: false
    },
    {
      name: "Business Pack",
      price: "LKR 12,000",
      description: "Best value for teams",
      features: [
        "10 NFC Cards",
        "Custom branding",
        "Individual profiles",
        "Unlimited updates",
        "Priority support",
        "Free delivery"
      ],
      cta: "Get Started",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations",
      features: [
        "Bulk orders (50+)",
        "Advanced branding",
        "Analytics dashboard",
        "Team management",
        "Dedicated support",
        "Volume discounts"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ]

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-[#0B0F1A]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Simple Pricing</h2>
          <p className="text-xl text-gray-300">No hidden fees. No subscriptions.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-gray-800/50 backdrop-blur-sm border rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl ${
                plan.popular ? 'border-primary ring-2 ring-primary/50 shadow-primary/20 transform scale-105' : 'border-gray-700 hover:border-gray-600'
              }`}
            >
              {plan.popular && (
                <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white text-center py-2 text-sm font-semibold">
                  MOST POPULAR
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-300 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-5 h-5 text-indigo-400 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a 
                  href="https://wa.me/94771234567?text=Hi! I want to order TapShare cards"
                  target="_blank"
                  className={`block text-center py-3 rounded-xl font-semibold transition ${
                    plan.popular
                      ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white hover:from-indigo-700 hover:to-blue-700 shadow-lg shadow-indigo-500/30'
                      : 'bg-gray-700 text-white hover:bg-gray-600 border border-gray-600'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-300 mb-4">All plans include:</p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300">
            <span>✓ Free shipping in Colombo</span>
            <span>✓ Lifetime card validity</span>
            <span>✓ No monthly fees</span>
          </div>
        </div>
      </div>
    </section>
  )
}
