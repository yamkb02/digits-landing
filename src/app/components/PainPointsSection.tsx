export default function PainPointsSection() {
  const painPoints = [
    {
      title: "Outdated Systems Slow You Down",
      description: "Legacy software crashes, requires constant maintenance, and can't keep up with modern business needs.",
      icon: "🐌"
    },
    {
      title: "Paper-Based Chaos",
      description: "Manual processes lead to errors, lost documents, and wasted time searching for information.",
      icon: "📄"
    },
    {
      title: "No Real-Time Insights",
      description: "Making decisions with outdated data puts your business at a competitive disadvantage.",
      icon: "📊"
    },
    {
      title: "Disconnected Systems",
      description: "Multiple tools that don't talk to each other create data silos and inefficient workflows.",
      icon: "🔗"
    },
    {
      title: "Limited Scalability",
      description: "Your current system breaks down as your business grows, creating operational bottlenecks.",
      icon: "📈"
    },
    {
      title: "Security Vulnerabilities",
      description: "Outdated systems expose your business to data breaches and compliance issues.",
      icon: "🔒"
    }
  ]

  return (
    <section id="why-digits" className="w-full bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Digits?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stop letting outdated systems hold your business back. Here&apos;s what you&apos;re dealing with right now:
          </p>
        </div>

        {/* Pain Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {painPoints.map((point, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-2xl">
                    {point.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {point.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Solution Teaser */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              There&apos;s a Better Way
            </h3>
            <p className="text-xl text-blue-100 mb-6">
              Digits solves these problems with modern, integrated, and intelligent ERP solutions.
            </p>
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
              See How Digits Helps
            </button>
          </div>
        </div>
      </div>
    </section>
  )
} 