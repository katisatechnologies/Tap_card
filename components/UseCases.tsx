export default function UseCases() {
  const cases = [
    {
      title: "Cafes & Restaurants",
      description: "Place your TapShare card on tables. Customers tap to save your contact, follow on social media, or leave a review.",
      icon: "☕",
      color: "from-orange-400 to-red-500"
    },
    {
      title: "Events & Networking",
      description: "No more fumbling with paper cards. Share your details instantly at conferences, meetups, and trade shows.",
      icon: "🤝",
      color: "from-blue-400 to-purple-500"
    },
    {
      title: "Reception Desks",
      description: "Let visitors check in by tapping. Collect their details automatically without filling forms.",
      icon: "🏢",
      color: "from-green-400 to-teal-500"
    },
    {
      title: "Freelancers & Creatives",
      description: "Share your portfolio, WhatsApp, and booking links in one tap. Perfect for photographers, designers, and consultants.",
      icon: "🎨",
      color: "from-pink-400 to-rose-500"
    },
    {
      title: "Sales Teams",
      description: "Close deals faster. Share catalogs, price lists, and contact info without delays.",
      icon: "📊",
      color: "from-indigo-400 to-blue-500"
    },
    {
      title: "Small Businesses",
      description: "Perfect for boutiques, salons, gyms, clinics. Make every customer interaction memorable.",
      icon: "🛍️",
      color: "from-yellow-400 to-orange-500"
    }
  ]

  return (
    <section id="use-cases" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-dark mb-4">Who Uses TapShare?</h2>
          <p className="text-xl text-gray-600">Smart professionals across Sri Lanka</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((useCase, index) => (
            <div key={index} className="group">
              <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:shadow-xl transition hover:border-primary">
                <div className={`w-16 h-16 bg-gradient-to-br ${useCase.color} rounded-xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition`}>
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">{useCase.title}</h3>
                <p className="text-gray-600 leading-relaxed">{useCase.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 text-lg mb-6">Used by businesses in Colombo, Kandy, Galle, and beyond</p>
        </div>
      </div>
    </section>
  )
}
