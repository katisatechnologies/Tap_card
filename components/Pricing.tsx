type FeatureKey = 'core' | 'nfc' | 'dashboard' | 'lead' | 'custom' | 'pipeline' | 'export' | 'exec';

const featureMatrix: { key: FeatureKey; label: string }[] = [
  { key: 'core', label: 'Core profile sharing' },
  { key: 'nfc', label: 'Tap-to-share NFC card' },
  { key: 'dashboard', label: 'Profile editing/dashboard' },
  { key: 'lead', label: 'Lead capture' },
  { key: 'custom', label: 'Advanced customization' },
  { key: 'pipeline', label: 'Lead status pipeline' },
  { key: 'export', label: 'Lead export (CSV)' },
  { key: 'exec', label: 'Executive personalization' },
];

type PlanFeatures = Record<FeatureKey, boolean>;

const plans: Array<{
  name: string;
  subtitle: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  features: PlanFeatures;
  cta: string;
  popular: boolean;
  badge: string | null;
  whatsappLink: string;
}> = [
  {
    name: "Basic",
    subtitle: "Core IDORA Platform",
    price: "LKR 4,700",
    originalPrice: "LKR 5,875",
    discount: "20% OFF",
    features: {
      core: true,
      nfc: true,
      dashboard: false,
      lead: false,
      custom: false,
      pipeline: false,
      export: false,
      exec: false,
    },
    cta: "Get Basic",
    popular: false,
    badge: null,
    whatsappLink: "https://wa.me/94701200064?text=Hi!%20I%27d%20like%20to%20get%20the%20Basic%20package%20for%20IDORA.%20Please%20share%20the%20next%20steps."
  },
  {
    name: "Gold",
    subtitle: "Basic + Lead Capture",
    price: "LKR 5,500",
    originalPrice: "LKR 6,875",
    discount: "20% OFF",
    features: {
      core: true,
      nfc: true,
      dashboard: false,
      lead: true,
      custom: false,
      pipeline: false,
      export: false,
      exec: false,
    },
    cta: "Get Gold",
    popular: true,
    badge: "MOST POPULAR",
    whatsappLink: "https://wa.me/94701200064?text=Hi!%20I%27d%20like%20to%20get%20the%20Gold%20package%20for%20IDORA,%20including%20lead%20capture.%20Please%20share%20the%20next%20steps."
  },
  {
    name: "Silver",
    subtitle: "Pending",
    price: "Coming Soon",
    features: {
      core: false,
      nfc: false,
      dashboard: false,
      lead: false,
      custom: false,
      pipeline: false,
      export: false,
      exec: false,
    },
    cta: "Pending",
    popular: false,
    badge: null,
    whatsappLink: "#"
  },
  {
    name: "Platinum",
    subtitle: "Pending",
    price: "Coming Soon",
    features: {
      core: false,
      nfc: false,
      dashboard: false,
      lead: false,
      custom: false,
      pipeline: false,
      export: false,
      exec: false,
    },
    cta: "Pending",
    popular: false,
    badge: null,
    whatsappLink: "#"
  }
];

export default function Pricing() {
    {
      name: "Basic",
      subtitle: "Core IDORA Platform",
      price: "LKR 4,700",
      originalPrice: "LKR 5,875",
      discount: "20% OFF",
      features: [
        "Tap-to-share digital profile via NFC",
        "Personalized profile pages (/u/username)",
  export default function Pricing() {
          core: true,
          nfc: true,
          dashboard: false,
          lead: true,
          custom: false,
          pipeline: false,
          export: false,
          exec: false,
        },
    },
    {
      name: "Gold",
      subtitle: "Basic + Lead Capture",
      price: "LKR 5,500",
      originalPrice: "LKR 6,875",
      discount: "20% OFF",
      features: [
        "Tap-to-share digital profile via NFC",
        "Personalized profile pages (/u/username)",
        "Secure card activation with inventory control",
        "Admin panel to manage users and card status",
        "vCard download for one-tap contact saving",
        "New lead capture flow from public profile visits"
      ],
      cta: "Get Gold",
      popular: true,
      badge: "MOST POPULAR",
      whatsappLink: "https://wa.me/94701200064?text=Hi!%20I%27d%20like%20to%20get%20the%20Gold%20package%20for%20IDORA,%20including%20lead%20capture.%20Please%20share%20the%20next%20steps."
    },
    {
      name: "Silver",
      subtitle: "Pending",
      price: "Coming Soon",
      features: [
        "Package details coming soon"
      ],
      cta: "Pending",
      popular: false,
      badge: null,
      whatsappLink: "#"
    },
    {
      name: "Platinum",
      subtitle: "Pending",
      price: "Coming Soon",
      features: [
        "Package details coming soon"
      ],
      cta: "Pending",
      popular: false,
      badge: null,
      whatsappLink: "#"
    }
  ]

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0B0F1A]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-indigo-600 to-blue-600 text-white text-sm font-bold px-4 py-2 rounded-full mb-4">
            ✅ IDORA is Live
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Choose Your IDORA Package</h2>
          <p className="text-xl text-gray-300">Basic and Gold are available now. Additional packages are coming soon.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className="relative bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-3xl overflow-visible transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/20 hover:border-gray-700 hover:-translate-y-2 flex flex-col"
            >
              {/* Badge on Card Frame */}
              {plan.badge && (
                <div className="absolute -top-3 -right-3 z-20">
                  <div className={`${
                    plan.popular 
                      ? 'bg-gradient-to-r from-yellow-500 to-yellow-600' 
                      : 'bg-gradient-to-r from-green-500 to-emerald-600'
                  } text-white text-xs font-bold px-4 py-2 rounded-full shadow-xl`}>
                    {plan.badge}
                  </div>
                </div>
              )}

              <div className="p-6 flex flex-col flex-1">
                {/* Header */}
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
                  <p className="text-sm text-gray-400">{plan.subtitle}</p>
                </div>

                {/* Card Image */}
                <div className="relative mb-6 rounded-2xl p-6 h-40 flex items-center justify-center">
                  <div className="relative w-full h-full perspective-500">
                    <div className="absolute inset-0 animate-float">
                      <img
                        src="/images/idora-card.png"
                        alt="IDORA NFC Card"
                        className="w-full h-full object-contain transform hover:scale-105 transition-transform rounded-2xl"
                      />
                    </div>
                  </div>
                </div>

                {/* Pricing */}
                <div className="mb-6 text-center">
                  <div className="bg-indigo-500/10 border border-indigo-500/30 rounded-xl py-3 px-4">
                    <p className="text-indigo-400 font-semibold text-sm">Price</p>
                    <p className="text-white text-lg font-bold">{plan.price}</p>
                    {plan.discount && (
                      <p className="text-green-400 text-xs font-semibold mt-1">{plan.discount}</p>
                    )}
                    {plan.originalPrice && (
                      <p className="text-gray-400 text-xs line-through mt-1">{plan.originalPrice}</p>
                    )}
                    <p className="text-gray-400 text-xs mt-1">{plan.subtitle === 'Pending' ? 'More details will be announced' : 'Available now'}</p>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-6 flex-1">
                  {featureMatrix.map((feature, idx) => (
                    plan.features[feature.key] && (
                      <li key={feature.key} className="flex items-start text-sm">
                        <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-300">{feature.label}</span>
                      </li>
                    )
                  ))}
                </ul>

                {/* CTA Button */}
                <a 
                  href={plan.whatsappLink}
                  target="_blank"
                  className={`block w-full py-3 rounded-xl font-bold text-center transition mt-auto ${
                    plan.subtitle === 'Pending'
                      ? 'bg-gray-700 text-gray-300 cursor-not-allowed pointer-events-none'
                      : 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white hover:from-indigo-700 hover:to-blue-700 shadow-lg shadow-indigo-500/30'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-300 mb-4">What you get with active packages:</p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300">
            <span>✓ NFC-powered smart sharing</span>
            <span>✓ Admin-managed card lifecycle</span>
            <span>✓ Instant contact save with vCard</span>
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
