export default function CTASection() {
  return (
    <section className="w-full bg-gradient-to-r from-primary to-orange py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Take Control of Your Business Today
        </h2>
        <p className="text-xl text-orange-100 mb-12 max-w-2xl mx-auto">
          Join a growing number of businesses moving to Digits ERP. Transform your operations with intelligent automation.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="bg-white text-orange hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg">
            Start Free Trial
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-orange px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
            Schedule a Demo
          </button>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-4 border border-white border-opacity-20">
            <div className="text-3xl mb-2">⚡</div>
            <div className="text-white font-semibold">Fast Onboarding</div>
            <div className="text-orange-100 text-sm">Setup in days, not months</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-4 border border-white border-opacity-20">
            <div className="text-3xl mb-2">🔒</div>
            <div className="text-white font-semibold">Enterprise Security</div>
            <div className="text-orange-100 text-sm">Bank-level encryption</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-4 border border-white border-opacity-20">
            <div className="text-3xl mb-2">📞</div>
            <div className="text-white font-semibold">24/7 Support</div>
            <div className="text-orange-100 text-sm">Expert help when you need it</div>
          </div>
        </div>
      </div>
    </section>
  )
} 