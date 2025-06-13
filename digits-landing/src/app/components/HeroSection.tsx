import DashboardPreview from '../../components/dashboard-preview'

export default function HeroSection() {
  return (
    <div id="home" className="w-full bg-gradient-to-br from-orange-50 via-white to-orange-50 py-20 px-4 relative overflow-hidden mt-16">
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

        {/* Dashboard Preview */}
        <DashboardPreview />
      </div>
    </div>
  )
} 