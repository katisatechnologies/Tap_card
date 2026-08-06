export default function UseCases() {
  const cases = [
    {
      title: "Realtors",
      description: "Turn every property visit into a saved contact, captured lead, and follow-up opportunity before the client leaves.",
      icon: "/images/palette.png",
      color: "from-cyan-700 to-blue-400"
    },
    {
      title: "Agencies and Teams",
      description: "Give every team member a premium digital profile while preserving a single brand standard and faster inbound conversion.",
      icon: "/images/users.png",
      color: "from-emerald-700 to-cyan-300"
    },
    {
      title: "Cafes and Retail",
      description: "Customers tap once to open menu, location, social links, and review actions without waiting or scanning under bad light.",
      icon: "/images/building.png",
      color: "from-orange-500 to-yellow-300"
    },
    {
      title: "Freelancers and Creators",
      description: "Share portfolio, booking links, WhatsApp, and socials from one page so meetings become direct project conversations.",
      icon: "/images/coffee.png",
      color: "from-purple-600 to-pink-400"
    },
    {
      title: "Sales Professionals",
      description: "Capture lead details quickly, update status in your pipeline, and keep follow-up momentum after each conversation.",
      icon: "/images/briefcase.png",
      color: "from-sky-500 to-indigo-300"
    },
    {
      title: "Founders and Operators",
      description: "Present a verified, modern first impression that can evolve from contact sharing to bookings, payments, and analytics.",
      icon: "/images/store.png",
      color: "from-lime-500 to-emerald-300"
    }
  ];

  return (
    <section id="use-cases" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0B0F1A] to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Real-world conversion stories</h2>
          <p className="text-xl text-gray-300">IDORA fits the moments where first impressions decide revenue.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {cases.map((useCase, index) => (
            <div key={index} className="group h-full">
              <div
                className="relative h-full flex flex-col rounded-2xl p-6 transition-all duration-300 bg-gradient-to-br from-slate-900/80 via-gray-800/60 to-cyan-950/60 border border-white/15 hover:border-cyan-300/40 hover:shadow-2xl hover:shadow-cyan-500/20 hover:scale-[1.02] backdrop-blur-sm"
              >
                <>
                  <div className="absolute -top-3 -right-3 flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-emerald-400 text-black text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                    <span className="uppercase tracking-wider">Live Use Case</span>
                  </div>
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/5 to-transparent rounded-2xl pointer-events-none"></div>
                </>

                <div
                  className={`relative w-16 h-16 bg-gradient-to-br ${useCase.color} rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-125 group-hover:rotate-6 shadow-lg`}
                >
                  <img
                    src={useCase.icon}
                    alt={useCase.title}
                    className="w-10 h-10 object-contain"
                  />
                </div>

                <h3 className="text-xl font-bold mb-3 text-white">
                  {useCase.title}
                </h3>

                <p className="leading-relaxed mt-auto text-gray-300">
                  {useCase.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-300 text-lg mb-6">From networking events to retail counters, each tap becomes a measurable business touchpoint.</p>
        </div>
      </div>
    </section>
  );
}