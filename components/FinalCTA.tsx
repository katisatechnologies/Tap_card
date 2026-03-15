export default function FinalCTA() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0B0F1A] via-indigo-950 to-blue-950 overflow-hidden">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance leading-tight">
          Start Sharing Your Contact the <span className="bg-gradient-to-r from-indigo-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">Smart Way</span>
        </h2>
        <p className="text-xl sm:text-2xl text-gray-300 mb-10 text-balance">
          Join hundreds of businesses and professionals using IDORA
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="https://wa.me/94701200064?text=Hi!%20I%27m%20ready%20to%20order%20IDORA%20NFC%20cards!%20I%27d%20like%20to%20discuss%20the%20details%20and%20place%20my%20order."
            target="_blank"
            className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:from-indigo-700 hover:to-blue-700 transition shadow-lg shadow-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/70 w-full sm:w-auto inline-flex items-center justify-center hover:scale-105 transform duration-300"
          >
            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Order on WhatsApp
          </a>
          <a 
            href="#pricing"
            className="border-2 border-indigo-400 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-indigo-500/20 transition w-full sm:w-auto backdrop-blur-sm hover:scale-105 transform duration-300"
          >
            See Pricing
          </a>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <p className="text-gray-300 mb-4">Fast delivery • No monthly fees • Lifetime validity</p>
        </div>
      </div>
    </section>
  )
}
