export default function ComingSoonSection() {
  const futureFeatures = [
    {
      title: "Digi AI Assistant",
      description: "Your intelligent business companion that understands your operations and provides actionable insights.",
      icon: "🤖",
      features: [
        "Natural language queries",
        "Predictive recommendations",
        "Automated decision support",
        "Voice-activated commands"
      ],
      timeline: "Q2 2024",
      status: "In Development"
    },
    {
      title: "AI Migration Tools",
      description: "Seamlessly migrate from legacy systems with AI-powered data mapping and validation.",
      icon: "🔄",
      features: [
        "Automated data mapping",
        "Legacy system connectors",
        "Data validation & cleanup",
        "Zero-downtime migration"
      ],
      timeline: "Q3 2024",
      status: "Planning"
    },
    {
      title: "DigiTree Community",
      description: "Connect with other Digits users, share best practices, and access collaborative resources.",
      icon: "🌳",
      features: [
        "User forums & discussions",
        "Template marketplace",
        "Best practice sharing",
        "Expert-led workshops"
      ],
      timeline: "Q4 2024",
      status: "Research"
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Development":
        return "bg-cardinal-green/20 text-cardinal-green border-cardinal-green/30"
      case "Planning":
        return "bg-orange/20 text-orange border-orange/30"
      case "Research":
        return "bg-cardinal-secondary/20 text-orange border-cardinal-secondary/30"
      default:
        return "bg-gray-100 text-gray-800 border-gray-300"
    }
  }

  return (
    <section className="w-full bg-gradient-to-br from-gray-900 to-gray-800 py-20 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange/10 to-orange/5"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/5 opacity-40"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Coming Soon
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The future of business management is here. Get ready for revolutionary features that will transform how you work.
          </p>
        </div>

        {/* Roadmap Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {futureFeatures.map((feature, index) => (
            <div key={index} className="relative">
              {/* Connecting Line (hidden on mobile) */}
              {index < futureFeatures.length - 1 && (
                <div className="hidden lg:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-orange to-cardinal-secondary z-0"></div>
              )}
              
              <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 relative z-10">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange to-cardinal-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 text-4xl transform hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-2 border ${getStatusColor(feature.status)}`}>
                    {feature.status}
                  </div>
                  <div className="text-sm text-orange font-medium mb-4">
                    Expected: {feature.timeline}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 text-center">
                  {feature.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed text-center">
                  {feature.description}
                </p>
                
                <ul className="space-y-3">
                  {feature.features.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center">
                      <div className="w-5 h-5 bg-gradient-to-r from-orange to-cardinal-secondary rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Early Access CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary to-orange rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              🚀 Get Early Access
            </h3>
            <p className="text-xl text-orange-100 mb-6 max-w-2xl mx-auto">
              Be among the first to experience these revolutionary features. Join our early access program.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors shadow-lg">
                Join Early Access
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-orange px-8 py-4 rounded-lg font-semibold transition-colors">
                Get Notified
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}