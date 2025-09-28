'use client'

import { ArrowRight, CheckCircle } from 'lucide-react'

const FinalCTA = () => {
  const benefits = [
    "Instant access to premium datasets",
    "Comprehensive documentation & support", 
    "Flexible licensing for any project size",
    "Regular updates and new releases"
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden shadow-xl">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-100/30 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-purple-100/30 to-transparent rounded-full blur-3xl"></div>
          
          {/* Content */}
          <div className="relative z-10">
            {/* Header */}
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Ready to Build{' '}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Smarter Robots?
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join thousands of developers, researchers, and companies using Neural 
              to accelerate their robotics projects and bring innovative solutions to life.
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 max-w-2xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 text-left">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button className="btn-primary group text-lg px-8 py-4 mb-6">
              <span className="flex items-center justify-center gap-2">
                Get Started Now
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-200" />
              </span>
            </button>

            <div className="text-gray-600 text-sm">
              No setup fees • Cancel anytime • 30-day money-back guarantee
            </div>

            {/* Trust indicators */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  <span>SSL Secured</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                  <span>SOC 2 Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                  <span>GDPR Ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FinalCTA
