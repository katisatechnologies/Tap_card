export default function Trust() {
  const stats = [
    { number: "500+", label: "Cards Delivered" },
    { number: "200+", label: "Happy Businesses" },
    { number: "10,000+", label: "Contacts Shared" }
  ]

  const testimonials = [
    {
      quote: "Our customers love it. They tap the card on the table and instantly have our menu and contact. Much better than paper cards.",
      author: "Chaminda P.",
      business: "Cafe Owner, Colombo 7",
      rating: 5
    },
    {
      quote: "As a freelance photographer, I meet new clients every week. TapShare makes me look professional and saves so much time.",
      author: "Ayesha R.",
      business: "Freelance Photographer",
      rating: 5
    },
    {
      quote: "We put these at our front desk. Visitors tap and get all our info. No more writing down numbers. Simple and modern.",
      author: "Ranil F.",
      business: "Business Center Manager",
      rating: 5
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Stats */}
        <div className="grid sm:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-gray-600 text-lg">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-dark mb-4">Trusted by Local Businesses</h2>
          <p className="text-xl text-gray-600">See what our customers say</p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-blue-50 rounded-2xl p-8">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
              <div>
                <div className="font-bold text-dark">{testimonial.author}</div>
                <div className="text-sm text-gray-600">{testimonial.business}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">Delivering across Sri Lanka</p>
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
