export default function FeaturesSection() {
  const modules = [
    {
      title: "Purchasing & Procurement",
      description: "Streamline your supplier relationships and purchase orders with intelligent automation.",
      icon: "🛒",
      color: "blue",
      features: [
        "Automated RFQ generation",
        "Supplier performance tracking",
        "Purchase order management",
        "Contract management"
      ]
    },
    {
      title: "Inventory Management",
      description: "Real-time inventory tracking with smart alerts and automated reordering.",
      icon: "📦",
      color: "green",
      features: [
        "Multi-location tracking",
        "Automatic reorder points",
        "Barcode scanning",
        "Stock movement history"
      ]
    },
    {
      title: "Sales & CRM",
      description: "Manage your entire sales pipeline from leads to revenue recognition.",
      icon: "💰",
      color: "purple",
      features: [
        "Lead management",
        "Quote generation",
        "Sales forecasting",
        "Customer portal"
      ]
    },
    {
      title: "Financial Management",
      description: "Complete accounting suite with real-time financial reporting and analytics.",
      icon: "📊",
      color: "orange",
      features: [
        "General ledger",
        "Accounts receivable/payable",
        "Financial reporting",
        "Multi-currency support"
      ]
    },
    {
      title: "Manufacturing",
      description: "Production planning and quality control for manufacturing operations.",
      icon: "🏭",
      color: "red",
      features: [
        "Production scheduling",
        "Bill of materials",
        "Quality control",
        "Work order management"
      ]
    },
    {
      title: "Project Management",
      description: "Complete project lifecycle management with resource allocation and tracking.",
      icon: "📋",
      color: "indigo",
      features: [
        "Task management",
        "Resource planning",
        "Time tracking",
        "Milestone tracking"
      ]
    }
  ]

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return 'from-blue-500 to-blue-600'
      case 'green':
        return 'from-green-500 to-green-600'
      case 'purple':
        return 'from-purple-500 to-purple-600'
      case 'orange':
        return 'from-orange-500 to-orange-600'
      case 'red':
        return 'from-red-500 to-red-600'
      case 'indigo':
        return 'from-indigo-500 to-indigo-600'
      default:
        return 'from-gray-500 to-gray-600'
    }
  }

  return (
    <section id="features" className="w-full bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Modules & Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete ERP functionality designed for modern businesses. Every module works together seamlessly.
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module, index) => (
            <div key={index} className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100">
              <div className={`w-16 h-16 bg-gradient-to-r ${getColorClasses(module.color)} rounded-xl flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {module.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {module.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {module.description}
              </p>
              
              <ul className="space-y-2">
                {module.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm">
                    <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Integration Note */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              🔗 All Modules Work Together
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
              Unlike disconnected systems, every Digits module shares the same data foundation. Changes in one area automatically update across all relevant modules.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Explore Integration Benefits
            </button>
          </div>
        </div>
      </div>
    </section>
  )
} 