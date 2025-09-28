'use client'

import { ArrowRight, Play } from 'lucide-react'

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-8">
      {/* Background Video Placeholder */}
      <div className="absolute inset-0 z-0">
        {/* Placeholder for background video - in a real implementation, you'd use a video element */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900">
          {/* Animated background elements to simulate data/robotics theme */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-blue-400/30 rounded-full animate-pulse"></div>
            <div className="absolute top-1/3 right-1/3 w-24 h-24 border border-green-400/30 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute bottom-1/4 left-1/3 w-40 h-40 border border-purple-400/30 rounded-full animate-pulse delay-2000"></div>
            <div className="absolute bottom-1/3 right-1/4 w-28 h-28 border border-cyan-400/30 rounded-full animate-pulse delay-3000"></div>
          </div>
        </div>
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="space-y-8">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight pb-8" style={{lineHeight: '1.2'}}>
            <span className="block text-white mb-6">The Marketplace for</span>
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent pb-4">
              Robotics Training Data
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Accelerate your robotics development with high-quality, diverse, and 
            ready-to-use datasets from the world's leading marketplace.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button className="btn-primary group min-w-[200px]">
              <span className="flex items-center justify-center gap-2">
                Explore Datasets
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </span>
            </button>
            
            <button className="btn-secondary group min-w-[200px]">
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
