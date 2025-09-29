'use client'

import { ArrowRight, Play } from 'lucide-react'

const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-us')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="relative h-[45vh] flex items-center justify-center overflow-hidden pt-8 pb-1">
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-white"></div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="space-y-1">
          {/* Main Headline */}
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight pb-2" style={{lineHeight: '1.2'}}>
            <span className="block text-gray-900 mb-2">The Marketplace for</span>
            <span className="block text-gray-900 pb-1">
              Robotics Training Data
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Accelerate your robotics development with high-quality, diverse, and 
            ready-to-use datasets from the world's leading marketplace.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <button onClick={scrollToContact} className="btn-primary group min-w-[200px]">
              <span className="flex items-center justify-center gap-2">
                Explore Datasets
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </span>
            </button>
            
            <button onClick={scrollToContact} className="btn-secondary group min-w-[200px]">
              <span className="flex items-center justify-center gap-2">
                <Play className="w-5 h-5" />
                Become a Seller
              </span>
            </button>
          </div>

        </div>
      </div>

    </section>
  )
}

export default HeroSection
