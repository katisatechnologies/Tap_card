export default function ProductPreview() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-dark mb-4">What You Get</h2>
          <p className="text-xl text-gray-600">Premium card + Smart profile page</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Physical Card */}
          <div>
            <div className="bg-gradient-to-br from-dark to-gray-800 rounded-3xl p-8 shadow-2xl">
              <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 aspect-[1.6/1] flex flex-col justify-between">
                <div>
                  <div className="text-white text-2xl font-bold mb-2">TapShare</div>
                  <div className="text-white/80 text-sm">NFC Business Card</div>
                </div>
                <div className="text-right">
                  <div className="text-white text-xl font-bold">Your Name</div>
                  <div className="text-white/80">Your Business</div>
                </div>
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-gray-700">Premium PVC card with NFC chip</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-gray-700">Custom design with your branding</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-gray-700">Durable and water-resistant</span>
              </div>
            </div>
          </div>

          {/* Digital Profile */}
          <div>
            <div className="bg-white rounded-3xl shadow-2xl p-6 max-w-sm mx-auto border-8 border-gray-800">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4"></div>
                  <h3 className="text-2xl font-bold text-dark">Your Name</h3>
                  <p className="text-gray-600">Your Title / Business Name</p>
                </div>

                <div className="space-y-3">
                  <button className="w-full bg-green-500 text-white py-3 rounded-xl font-semibold hover:bg-green-600 transition">
                    💬 WhatsApp
                  </button>
                  <button className="w-full bg-blue-500 text-white py-3 rounded-xl font-semibold hover:bg-blue-600 transition">
                    📞 Call Now
                  </button>
                  <button className="w-full bg-gray-800 text-white py-3 rounded-xl font-semibold hover:bg-gray-900 transition">
                    📧 Email
                  </button>
                  <button className="w-full bg-primary text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition">
                    💾 Save Contact
                  </button>
                </div>

                <div className="flex justify-center space-x-4 pt-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600">f</span>
                  </div>
                  <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                    <span className="text-pink-600">in</span>
                  </div>
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600">ig</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span className="text-gray-700">Fully customizable profile page</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span className="text-gray-700">Update your details anytime online</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span className="text-gray-700">Add unlimited social media links</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
