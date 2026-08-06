type Plan = {
  name: string
  subtitle: string
  price: string
  bestFor: string
  highlights: string[]
  cta: string
  popular?: boolean
  whatsappLink: string
}

const plans: Plan[] = [
  {
    name: 'Basic',
    subtitle: 'Digital profile foundation',
    price: 'LKR 4,700',
    bestFor: 'Individuals starting their digital identity',
    highlights: [
      'Card activation and username profile setup',
      'Public profile with contact actions and social links',
      'One-tap vCard saving for faster follow-up'
    ],
    cta: 'Get Basic',
    whatsappLink: 'https://wa.me/94701200064?text=Hi!%20I%20want%20the%20Basic%20IDORA%20package.%20Please%20share%20the%20next%20steps.'
  },
  {
    name: 'Gold',
    subtitle: 'Profile + lead capture',
    price: 'LKR 5,500',
    bestFor: 'Professionals focused on conversion from meetings',
    highlights: [
      'Everything in Basic',
      'Lead capture directly from public profile visits',
      'Advanced profile customization for stronger trust'
    ],
    cta: 'Get Gold',
    popular: true,
    whatsappLink: 'https://wa.me/94701200064?text=Hi!%20I%20want%20the%20Gold%20IDORA%20package%20with%20lead%20capture.%20Please%20share%20the%20next%20steps.'
  },
  {
    name: 'Silver',
    subtitle: 'Pipeline operations',
    price: 'Custom quote',
    bestFor: 'Users tracking sales outcomes and follow-up process',
    highlights: [
      'Structured lead status and priority management',
      'Timeline notes for relationship context',
      'CSV export for reporting and CRM workflows'
    ],
    cta: 'Talk to Sales',
    whatsappLink: 'https://wa.me/94701200064?text=Hi!%20I%20want%20a%20custom%20quote%20for%20the%20Silver%20IDORA%20plan.%20Please%20share%20deployment%20options.'
  },
  {
    name: 'Platinum',
    subtitle: 'Executive conversion suite',
    price: 'Custom quote',
    bestFor: 'High-trust profiles with deeper engagement insights',
    highlights: [
      'Executive personalization and trust signals',
      'Premium engagement features and advanced CTA layer',
      'Profile view analytics for growth decisions'
    ],
    cta: 'Book Strategy Call',
    whatsappLink: 'https://wa.me/94701200064?text=Hi!%20I%20need%20a%20Platinum%20IDORA%20consultation%20for%20my%20business.%20Please%20share%20next%20steps.'
  }
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0B0F1A]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-cyan-500 to-emerald-500 text-black text-sm font-bold px-4 py-2 rounded-full mb-4">
            Package-Based Value Ladder
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Packages built for outcomes, not just features</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Start with the package that matches your sales process. Upgrade when you need deeper lead tracking, team workflows, and executive personalization.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative rounded-3xl border p-6 bg-gradient-to-b from-gray-900 to-black flex flex-col ${
                plan.popular
                  ? 'border-cyan-300 shadow-2xl shadow-cyan-500/20'
                  : 'border-gray-800'
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 right-4 bg-cyan-300 text-black text-xs font-bold px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}

              <h3 className="text-2xl font-bold text-white mb-1">{plan.name}</h3>
              <p className="text-cyan-200 text-sm mb-4">{plan.subtitle}</p>

              <p className="text-3xl font-bold text-white mb-3">{plan.price}</p>
              <p className="text-sm text-gray-300 mb-5">{plan.bestFor}</p>

              <ul className="space-y-3 mb-6 flex-1">
                {plan.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-200 text-sm">
                    <span className="w-2 h-2 mt-2 rounded-full bg-emerald-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href={plan.whatsappLink}
                target="_blank"
                className={`block w-full py-3 rounded-xl font-bold text-center transition ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-black hover:from-cyan-400 hover:to-emerald-400'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {plan.cta}
              </a>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-white/15 bg-white/5 p-6 text-center">
          <p className="text-white font-semibold mb-2">What you can expect after ordering</p>
          <p className="text-gray-300 text-sm sm:text-base">
            Founder-led onboarding, card activation support, and step-by-step setup guidance for your profile and conversion actions.
          </p>
        </div>
      </div>
    </section>
  )
}
