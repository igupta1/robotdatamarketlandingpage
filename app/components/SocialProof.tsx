'use client'

const SocialProof = () => {
  // Placeholder company logos - in a real implementation, these would be actual logo images
  const companies = [
    { name: "TechCorp", width: "w-32", height: "h-8" },
    { name: "RoboTech", width: "w-28", height: "h-8" },
    { name: "AutoSys", width: "w-36", height: "h-8" },
    { name: "DataMind", width: "w-32", height: "h-8" },
    { name: "FutureLabs", width: "w-40", height: "h-8" },
    { name: "NextGen", width: "w-32", height: "h-8" }
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Powering the next generation of robotics at world-class companies
          </p>
        </div>

        {/* Company Logos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {companies.map((company, index) => (
            <div
              key={index}
              className="flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
            >
              {/* Placeholder logo - replace with actual company logos */}
              <div className={`${company.width} ${company.height} bg-gray-400 rounded flex items-center justify-center`}>
                <span className="text-gray-800 font-bold text-sm">{company.name}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial Section */}
        <div className="mt-16 text-center">
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 max-w-4xl mx-auto">
            <blockquote className="text-xl md:text-2xl text-gray-200 mb-6 leading-relaxed">
              "RoboData has revolutionized our development process. The quality and diversity 
              of their datasets helped us reduce our training time by 70% and improve our model 
              accuracy significantly."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">JS</span>
              </div>
              <div className="text-left">
                <div className="text-white font-semibold">Dr. Jane Smith</div>
                <div className="text-gray-400 text-sm">Chief AI Officer, TechCorp</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">99.8%</div>
            <div className="text-gray-400">Customer Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
            <div className="text-gray-400">Expert Support</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">50+</div>
            <div className="text-gray-400">Countries Served</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SocialProof
