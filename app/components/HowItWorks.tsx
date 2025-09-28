'use client'

import { Search, CreditCard, Download } from 'lucide-react'

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Discover",
      description: "Browse our extensive catalog of high-quality robotics datasets. Use advanced filters to find exactly what you need for your project.",
      icon: Search,
      color: "from-blue-500 to-cyan-500"
    },
    {
      number: "02", 
      title: "Purchase",
      description: "Secure, instant purchasing with flexible licensing options. Choose from one-time purchases or subscription plans that fit your budget.",
      icon: CreditCard,
      color: "from-green-500 to-teal-500"
    },
    {
      number: "03",
      title: "Integrate",
      description: "Download your datasets immediately with comprehensive documentation, sample code, and integration guides to accelerate development.",
      icon: Download,
      color: "from-purple-500 to-pink-500"
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 gradient-bg">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Simple & Seamless Integration
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get started with robotics training data in minutes, not months. 
            Our streamlined process gets you from discovery to deployment fast.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Card */}
              <div className="relative z-10 text-center lg:text-left">
                {/* Step Number */}
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 mx-auto lg:mx-0">
                  <div className={`w-full h-full rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center`}>
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </div>
                </div>

                {/* Icon */}
                <div className="flex justify-center lg:justify-start mb-4">
                  <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-300 leading-relaxed max-w-sm mx-auto lg:mx-0">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-300 mb-6">
              Join thousands of developers and researchers already using RoboData 
              to accelerate their robotics projects.
            </p>
            <button className="btn-primary">
              Start Exploring Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
