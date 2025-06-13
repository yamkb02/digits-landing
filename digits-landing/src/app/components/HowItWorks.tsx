export default function HowItWorks() {
  const steps = [
    {
      title: "Create",
      description: "Design and launch new ad campaigns quickly with pre-built templates and intuitive campaign creation tools."
    },
    {
      title: "Adjust", 
      description: "Make adjustments to your campaigns as they run. Use real-time data to tweak targeting."
    },
    {
      title: "Analyze",
      description: "Gain comprehensive insights into your campaign performance with detailed analytics and reporting."
    },
    {
      title: "Automate",
      description: "Leverage AI-driven automation to continuously optimize your campaigns. Automatically adjust bids."
    }
  ]

  return (
    <section className="w-full bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-orange-500 font-semibold text-lg mb-4">How it works</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The most intuitive CRM in the market
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get started and using Convert is as easy as 1-2-3.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="mb-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-orange-500 font-bold text-xl">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 