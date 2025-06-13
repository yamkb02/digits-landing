export default function NotesSection() {
  const features = [
    {
      title: "Categorize contacts",
      description: "Monitor your team's productivity by viewing completed tasks and active projects."
    },
    {
      title: "Organize meeting notes", 
      description: "Use detailed task views, checklists, and due dates to stay on top of your projects."
    },
    {
      title: "Collaborate in real time",
      description: "Assign tasks, share notes, and engage in real-time discussions with your team."
    }
  ]

  return (
    <section className="w-full bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-orange-500 font-semibold text-lg mb-4">Notes</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Capture meeting notes & collaborate with ease
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Organize all of your notes and contact in one central place
          </p>
        </div>

        {/* Features Grid */}  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="text-orange-500 text-2xl">
                  {index === 0 && "👥"}
                  {index === 1 && "📝"}
                  {index === 2 && "🤝"}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 