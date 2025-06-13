export default function TargetAudienceSection() {
  const personas = [
    {
      title: "Trading Companies",
      description: "Import/export businesses needing seamless inventory and supplier management",
      icon: "🌍",
      tags: ["Global Supply Chain", "Multi-Currency", "Compliance"]
    },
    {
      title: "Manufacturing",
      description: "Production facilities requiring integrated planning and quality control",
      icon: "🏭",
      tags: ["Production Planning", "Quality Control", "Material Management"]
    },
    {
      title: "Inventory-Heavy Businesses",
      description: "Companies with complex stock management and warehouse operations",
      icon: "📦",
      tags: ["Warehouse Management", "Stock Control", "Logistics"]
    },
    {
      title: "Tech-Forward Companies",
      description: "Modern businesses ready to embrace digital transformation",
      icon: "💻",
      tags: ["Digital First", "API Integration", "Cloud Native"]
    }
  ]

  return (
    <section className="w-full bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Who It&apos;s For
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Digits is built for modern businesses that demand efficiency, growth, and competitive advantage.
          </p>
        </div>

        {/* Personas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {personas.map((persona, index) => (
            <div key={index} className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">
                  {persona.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {persona.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {persona.description}
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {persona.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Does your business fit one of these profiles?
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg">
            Discover Your Perfect Fit
          </button>
        </div>
      </div>
    </section>
  )
} 