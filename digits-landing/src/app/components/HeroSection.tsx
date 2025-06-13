export default function HeroSection() {
  return (
    <div className="w-full bg-gradient-to-br from-orange-50 via-white to-orange-50 py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-r from-orange/10 to-orange/5"></div>
      </div>
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
          Run Your Business, <br />
          <span className="text-orange">Not Your System.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
          Digits is the modern ERP system built for businesses that want smarter operations, deeper insights, and scalable growth.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Get Started Free
          </button>
          <button className="border-2 border-primary text-orange hover:bg-primary hover:text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
            Book a Demo
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto transform hover:scale-105 transition-transform duration-500">
          <div className="bg-gradient-to-r from-orange to-orange rounded-lg p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold">Digits Dashboard</h3>
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-white rounded-full opacity-50"></div>
                <div className="w-3 h-3 bg-white rounded-full opacity-75"></div>
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="bg-white bg-opacity-20 rounded-lg p-3">
                <div className="text-2xl mb-1">📦</div>
                <div className="text-sm">Procurement</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-3">
                <div className="text-2xl mb-1">📊</div>
                <div className="text-sm">Inventory</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-3">
                <div className="text-2xl mb-1">💰</div>
                <div className="text-sm">Sales</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-3">
                <div className="text-2xl mb-1">📈</div>
                <div className="text-sm">Analytics</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 