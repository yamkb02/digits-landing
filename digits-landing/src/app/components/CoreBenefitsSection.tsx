export default function CoreBenefitsSection() {
  const benefits = [
    {
      title: "Fast Onboarding",
      description: "Get your team up and running in days, not months. Our intuitive interface and guided setup process ensures quick adoption across your organization.",
      icon: "⚡",
      features: [
        "Quick setup wizard",
        "Pre-configured templates",
        "24/7 onboarding support",
        "Team training included"
      ]
    },
    {
      title: "Industry Standards",
      description: "Built with compliance in mind. Digits adheres to international standards and regulations, keeping your business audit-ready at all times.",
      icon: "🏆",
      features: [
        "ISO 27001 compliant",
        "GDPR ready",
        "SOX compliance",
        "Industry certifications"
      ]
    },
    {
      title: "Secure, Smart, Scalable",
      description: "Enterprise-grade security with AI-powered insights that grow with your business. Scale from startup to enterprise seamlessly.",
      icon: "🚀",
      features: [
        "End-to-end encryption",
        "AI-driven analytics",
        "Auto-scaling infrastructure",
        "99.9% uptime guarantee"
      ]
    }
  ]

  return (
    <section className="w-full bg-gradient-to-br from-orange-50 to-orange-100 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Core Benefits
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to transform your business operations, delivered with excellence.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-orange/20 to-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-4xl">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {benefit.description}
                </p>
              </div>
              
              <div className="space-y-3">
                {benefit.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    <div className="w-5 h-5 bg-cardinal-green rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Experience These Benefits?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of businesses that have transformed their operations with Digits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-colors">
                Start Free Trial
              </button>
              <button className="border-2 border-primary text-orange hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 