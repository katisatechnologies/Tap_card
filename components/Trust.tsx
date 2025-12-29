export default function Trust() {


  // Pre-launch interest/feedback (not real reviews)
  const testimonials = [
    {
      quote: "Excited to try IDORA for my business when it launches! The NFC card idea sounds super convenient.",
      author: "Sahan P.",
      business: "Small Business Owner",
      rating: 0
    },
    {
      quote: "Looking forward to a modern way to share my contact details. Subscribed for updates!",
      author: "Dilani W.",
      business: "Freelancer",
      rating: 0
    },
    {
      quote: "Hope this will make networking at events much easier. Can't wait for the launch!",
      author: "Ruwan F.",
      business: "Event Attendee",
      rating: 0
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0B0F1A] to-gray-900">

      <div className="max-w-7xl mx-auto">
        {/* Launch Announcement Placeholder */}
        <div className="flex flex-col items-center justify-center mb-20">
          <div className="inline-flex items-center gap-2 bg-yellow-500/90 text-black font-semibold px-4 py-2 rounded-full shadow-md mb-4 animate-pulse">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            Launching Soon
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">IDORA is almost here!</h2>
          <p className="text-lg text-gray-300 max-w-xl text-center">We're working hard to bring you the next generation of NFC business cards. Stay tuned for our official launch and be among the first to experience seamless digital networking in Sri Lanka.</p>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Trusted by Local Businesses</h2>
          <p className="text-xl text-gray-300">See what our customers say</p>
        </div>

        {/* Pre-launch Feedback */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-gray-600 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10">
              <div className="flex mb-4 justify-center">
                <span className="inline-block bg-blue-500/20 text-blue-300 text-xs px-3 py-1 rounded-full">Pre-launch Interest</span>
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
