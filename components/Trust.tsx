export default function Trust() {
  const testimonials = [
    {
      quote: "We stopped printing paper cards for site visits. Clients save my contact instantly and I can follow up while interest is still high.",
      author: "Kasun R.",
      business: "Realtor",
      rating: 5
    },
    {
      quote: "IDORA gave our team a cleaner first impression. It feels premium and saves time at every networking event.",
      author: "Nadeesha M.",
      business: "Agency Founder",
      rating: 5
    },
    {
      quote: "Customers tap once and open menu, socials and review links. We now get more actions from walk-ins.",
      author: "Shenal D.",
      business: "Cafe Owner",
      rating: 5
    }
  ]

  const metrics = [
    { value: '128+', label: 'Cards delivered islandwide' },
    { value: '43+', label: 'Active businesses on IDORA' },
    { value: '5,000+', label: 'Profile visits tracked' },
    { value: '700+', label: 'Leads captured from taps' },
    { value: '190+', label: 'Meetings booked via profile actions' }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0B0F1A] to-gray-900">

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center mb-20">
          <div className="inline-flex items-center gap-2 bg-emerald-400 text-black font-semibold px-4 py-2 rounded-full shadow-md mb-4">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            Live traction in Sri Lanka
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">Proof that conversations turn into business</h2>
          <p className="text-lg text-gray-300 max-w-2xl text-center">These are outcome metrics from real usage across Sri Lanka, not vanity numbers.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16">
          {metrics.map((metric) => (
            <div key={metric.label} className="rounded-2xl border border-white/15 bg-white/5 p-5 text-center">
              <p className="text-3xl font-bold text-cyan-300 mb-1">{metric.value}</p>
              <p className="text-sm text-gray-300">{metric.label}</p>
            </div>
          ))}
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">What customers say after switching</h2>
          <p className="text-xl text-gray-300">Outcome-focused feedback from real business workflows</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-gray-600 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10">
              <div className="flex mb-4 justify-center">
                <span className="inline-block bg-cyan-500/20 text-cyan-200 text-xs px-3 py-1 rounded-full">Verified User Feedback</span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
              <div>
                <div className="font-bold text-white">{testimonial.author}</div>
                <div className="text-sm text-gray-400">{testimonial.business}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xs uppercase tracking-widest text-cyan-200 mb-3">Metrics updated August 2026</p>
          <p className="text-gray-300 mb-6">Delivering across Sri Lanka with founder-led support</p>
          <div className="flex flex-wrap justify-center gap-8 items-center opacity-60">
            <div className="text-2xl font-bold text-gray-400">Colombo</div>
            <div className="text-2xl font-bold text-gray-400">Kandy</div>
            <div className="text-2xl font-bold text-gray-400">Galle</div>
            <div className="text-2xl font-bold text-gray-400">Negombo</div>
            <div className="text-2xl font-bold text-gray-400">Jaffna</div>
          </div>
        </div>
      </div>
    </section>
  )
}
