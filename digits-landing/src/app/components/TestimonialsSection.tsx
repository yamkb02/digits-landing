export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Digits transformed our inventory management completely. We reduced stock-outs by 85% and improved our cash flow significantly.",
      name: "Sarah Johnson",
      title: "Operations Director",
      company: "Global Trade Solutions",
      avatar: "👩‍💼",
      metrics: "85% reduction in stock-outs"
    },
    {
      quote: "The financial reporting capabilities are incredible. We can now make data-driven decisions in real-time instead of waiting weeks for reports.",
      name: "Michael Chen",
      title: "CFO",
      company: "TechManufacturing Inc",
      avatar: "👨‍💼",
      metrics: "Real-time financial insights"
    },
    {
      quote: "Implementation was surprisingly smooth. The team was productive within days, not months. The ROI was evident immediately.",
      name: "Lisa Rodriguez",
      title: "IT Director",
      company: "Precision Parts Ltd",
      avatar: "👩‍💻",
      metrics: "Days to productivity"
    },
    {
      quote: "Finally, an ERP that doesn&apos;t require a PhD to use. Our entire team adopted it quickly, and productivity increased by 40%.",
      name: "David Thompson",
      title: "CEO",
      company: "Modern Manufacturing",
      avatar: "👨‍💼",
      metrics: "40% productivity increase"
    }
  ]

  return (
    <section className="w-full bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real businesses, real results. See how companies like yours are transforming their operations with Digits.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-3xl">
                    {testimonial.avatar}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {testimonial.title}
                  </p>
                  <p className="text-blue-600 font-medium text-sm">
                    {testimonial.company}
                  </p>
                </div>
              </div>
              
              <blockquote className="text-gray-700 leading-relaxed mb-6 text-lg">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4">
                <div className="text-center">
                  <div className="text-blue-600 font-bold text-xl mb-1">
                    🎯 Key Result
                  </div>
                  <div className="text-gray-700 font-medium">
                    {testimonial.metrics}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Join Thousands of Satisfied Customers
            </h3>
            <div className="flex justify-center items-center space-x-8 mb-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">500+</div>
                <div className="text-gray-600">Companies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">98%</div>
                <div className="text-gray-600">Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">4.9/5</div>
                <div className="text-gray-600">Rating</div>
              </div>
            </div>
            <p className="text-gray-600 mb-6">
              Ready to write your own success story?
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Start Your Success Story
            </button>
          </div>
        </div>
      </div>
    </section>
  )
} 