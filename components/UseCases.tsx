export default function UseCases() {
  const cases = [
    {
      title: "Freelancers & Creatives",
      description: "Share your portfolio, WhatsApp, and booking links in one tap. Perfect for photographers, designers, and consultants.",
      icon: "🎨",
      color: "from-pink-400 to-rose-500"
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
      title: "Cafes & Restaurants",
      description: "Place your TapShare card on tables. Customers tap to save your contact, follow on social media, or leave a review.",
      icon: "☕",
      color: "from-orange-400 to-red-500"
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
              <div className={`relative rounded-2xl p-6 transition-all duration-300 ${index === 0 ? 'bg-gradient-to-br from-green-50 via-white to-rose-50 border-3 border-primary shadow-2xl shadow-blue-500/30 hover:shadow-blue-700/40 hover:scale-105 ring-4 ring-primary/10' : 'bg-white border-2 border-gray-100 opacity-50 cursor-not-allowed'}`}>
                {index === 0 && (
                  <>
                    <div className="absolute -top-3 -right-3 flex items-center gap-2 bg-gradient-to-r from-green-950 to-green-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg animate-pulse">
                      <span className="uppercase tracking-wider">🔥 Ongoing</span>
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 to-transparent rounded-2xl pointer-events-none"></div>
                  </>
                )}
                <div className={`relative w-16 h-16 bg-gradient-to-br ${useCase.color} rounded-xl flex items-center justify-center text-3xl mb-4 transition-all duration-300 ${index === 0 ? 'group-hover:scale-125 group-hover:rotate-6 shadow-lg' : ''}`}>
                  {useCase.icon}
                </div>
                <h3 className={`text-xl font-bold mb-3 ${index === 0 ? 'text-blue-950' : 'text-dark'}`}>{useCase.title}</h3>
                <p className={`leading-relaxed ${index === 0 ? 'text-gray-700' : 'text-gray-600'}`}>{useCase.description}</p>
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