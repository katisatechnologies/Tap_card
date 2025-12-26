export default function WhyTapShare() {
  const comparisons = [
    {
      old: "Paper Cards",
      problem: "Get lost, damaged, outdated",
      solution: "One card. Update details anytime.",
      icon: "📇"
    },
    {
      old: "WhatsApp Sharing",
      problem: "Awkward. Takes time. Needs typing.",
      solution: "Just tap. Done in 2 seconds.",
      icon: "💬"
    },
    {
      old: "QR Codes",
      problem: "Need to open camera. Bad lighting fails.",
      solution: "Works in dark. No camera needed.",
      icon: "📱"
    }
  ]

  const benefits = [
    { label: "No App Required", icon: "✓" },
    { label: "Works on iPhone & Android", icon: "✓" },
    { label: "Lightning Fast", icon: "✓" },
    { label: "Looks Professional", icon: "✓" },
    { label: "Reusable Forever", icon: "✓" },
    { label: "Eco-Friendly", icon: "✓" },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-dark mb-4">Why TapShare?</h2>
          <p className="text-xl text-gray-600">Better than every old method</p>
        </div>

        {/* Comparisons */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {comparisons.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-4xl mb-4">{item.icon}</div>
              <div className="text-red-500 font-semibold mb-2 line-through">{item.old}</div>
              <p className="text-gray-600 text-sm mb-4">{item.problem}</p>
              <div className="border-t pt-4">
                <p className="text-primary font-bold text-lg">{item.solution}</p>
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
