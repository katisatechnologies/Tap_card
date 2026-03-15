export default function Trust() {


  // Early customer feedback after launch
  const testimonials = [
    {
      quote: "IDORA made networking effortless for my team. Clients now save our contacts in seconds.",
      author: "Sahan P.",
      business: "Small Business Owner",
      rating: 5
    },
    {
      quote: "The profile page and vCard download flow are smooth and professional.",
      author: "Dilani W.",
      business: "Freelancer",
      rating: 5
    },
    {
      quote: "We started capturing leads directly from public profile visits. Huge upgrade from paper cards.",
      author: "Ruwan F.",
      business: "Event Attendee",
      rating: 5
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0B0F1A] to-gray-900">

      <div className="max-w-7xl mx-auto">
        {/* Live Announcement */}
        <div className="flex flex-col items-center justify-center mb-20">
          <div className="inline-flex items-center gap-2 bg-green-500/90 text-black font-semibold px-4 py-2 rounded-full shadow-md mb-4">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            Now Live in Sri Lanka
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">IDORA is officially launched</h2>
          <p className="text-lg text-gray-300 max-w-xl text-center">Businesses and professionals are already using IDORA to share digital profiles, activate cards securely, and capture more leads.</p>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Trusted by Local Businesses</h2>
          <p className="text-xl text-gray-300">See what our customers say</p>
        </div>

        {/* Customer Feedback */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-gray-600 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10">
              <div className="flex mb-4 justify-center">
                <span className="inline-block bg-blue-500/20 text-blue-300 text-xs px-3 py-1 rounded-full">Verified User Feedback</span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
              <div>
                <div className="font-bold text-white">{testimonial.author}</div>
                <div className="text-sm text-gray-400">{testimonial.business}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 text-center">
          <p className="text-gray-300 mb-6">Delivering across Sri Lanka</p>
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
