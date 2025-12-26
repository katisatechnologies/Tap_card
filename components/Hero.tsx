export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-dark mb-6 text-balance">
          Share Your Contact in One Tap
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto text-balance">
          No apps. No typing. Just tap your card and your contact details open instantly on any phone.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a 
            href="#pricing"
            className="bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition shadow-lg hover:shadow-xl w-full sm:w-auto"
          >
            Get Your TapShare Card
          </a>
          <a 
            href="#how-it-works"
            className="border-2 border-primary text-primary px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition w-full sm:w-auto"
          >
            See How It Works
          </a>
        </div>

        {/* Hero Visual */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-8 sm:p-12 shadow-2xl">
            <div className="bg-white rounded-2xl p-8 aspect-video flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg">
                  <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-2xl font-bold text-gray-800 mb-2">Tap Card</p>
                <p className="text-gray-600">Instant contact sharing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
