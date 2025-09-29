'use client'

import { useState } from 'react'
import { Mail, User, ArrowRight } from 'lucide-react'

const ContactUs = () => {
  const [sellerForm, setSellerForm] = useState({
    fullName: '',
    email: ''
  })
  
  const [buyerForm, setBuyerForm] = useState({
    fullName: '',
    email: ''
  })
  
  const [sellerSubmitting, setSellerSubmitting] = useState(false)
  const [buyerSubmitting, setBuyerSubmitting] = useState(false)
  const [sellerSuccess, setSellerSuccess] = useState(false)
  const [buyerSuccess, setBuyerSuccess] = useState(false)

  const handleSellerSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSellerSubmitting(true)
    
    try {
      const response = await fetch('/api/seller-waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          fullName: sellerForm.fullName,
          email: sellerForm.email
        })
      })
      
      if (response.ok) {
        setSellerSuccess(true)
        setSellerForm({ fullName: '', email: '' })
      }
    } catch (error) {
      console.error('Error submitting seller form:', error)
    } finally {
      setSellerSubmitting(false)
    }
  }

  const handleBuyerSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setBuyerSubmitting(true)
    
    try {
      const response = await fetch('/api/buyer-waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          fullName: buyerForm.fullName,
          email: buyerForm.email
        })
      })
      
      if (response.ok) {
        setBuyerSuccess(true)
        setBuyerForm({ fullName: '', email: '' })
      }
    } catch (error) {
      console.error('Error submitting buyer form:', error)
    } finally {
      setBuyerSubmitting(false)
    }
  }

  return (
    <section id="contact-us" className="bg-gray-50 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            Contact Us
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mt-3 sm:mt-4 max-w-2xl mx-auto px-2 sm:px-0">
            Join our community and be the first to know when we launch
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Seller Waitlist */}
          <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg">
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                Join the Waitlist to Become a Seller
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                Have robotics datasets to share? Join our seller community and monetize your data.
              </p>
            </div>

            {sellerSuccess ? (
              <div className="text-center py-6">
                <div className="text-green-600 mb-2">
                  <Mail className="w-12 h-12 mx-auto mb-3" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Thank you!</h4>
                <p className="text-gray-600">We'll be in touch about selling opportunities.</p>
              </div>
            ) : (
              <form onSubmit={handleSellerSubmit} className="space-y-6">
                <div>
                  <label htmlFor="seller-name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      id="seller-name"
                      type="text"
                      required
                      value={sellerForm.fullName}
                      onChange={(e) => setSellerForm({...sellerForm, fullName: e.target.value})}
                      className="w-full pl-10 pr-4 py-3 sm:py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-base"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="seller-email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      id="seller-email"
                      type="email"
                      required
                      value={sellerForm.email}
                      onChange={(e) => setSellerForm({...sellerForm, email: e.target.value})}
                      className="w-full pl-10 pr-4 py-3 sm:py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-base"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={sellerSubmitting}
                  className="w-full btn-primary group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="flex items-center justify-center gap-2">
                    {sellerSubmitting ? 'Joining...' : 'Join Seller Waitlist'}
                    {!sellerSubmitting && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />}
                  </span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column - Buyer Waitlist */}
          <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg">
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                Get Notified When Datasets are Available
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                Be the first to access premium robotics datasets when they become available.
              </p>
            </div>

            {buyerSuccess ? (
              <div className="text-center py-6">
                <div className="text-green-600 mb-2">
                  <Mail className="w-12 h-12 mx-auto mb-3" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Thank you!</h4>
                <p className="text-gray-600">We'll notify you when datasets are available.</p>
              </div>
            ) : (
              <form onSubmit={handleBuyerSubmit} className="space-y-6">
                <div>
                  <label htmlFor="buyer-name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      id="buyer-name"
                      type="text"
                      required
                      value={buyerForm.fullName}
                      onChange={(e) => setBuyerForm({...buyerForm, fullName: e.target.value})}
                      className="w-full pl-10 pr-4 py-3 sm:py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-base"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="buyer-email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      id="buyer-email"
                      type="email"
                      required
                      value={buyerForm.email}
                      onChange={(e) => setBuyerForm({...buyerForm, email: e.target.value})}
                      className="w-full pl-10 pr-4 py-3 sm:py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-base"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={buyerSubmitting}
                  className="w-full btn-primary group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="flex items-center justify-center gap-2">
                    {buyerSubmitting ? 'Joining...' : 'Get Notified'}
                    {!buyerSubmitting && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />}
                  </span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
