'use client'

import { Twitter, Linkedin, Github, Mail } from 'lucide-react'

const Footer = () => {
  const productLinks = [
    { name: "Browse Datasets", href: "#" },
    { name: "API Documentation", href: "#" },
    { name: "Dataset Upload", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Enterprise", href: "#" }
  ]

  const companyLinks = [
    { name: "About Us", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Press", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Contact", href: "#" }
  ]

  const legalLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Data License", href: "#" },
    { name: "Cookie Policy", href: "#" },
    { name: "GDPR", href: "#" }
  ]

  const socialLinks = [
    { name: "Twitter", href: "#", icon: Twitter },
    { name: "LinkedIn", href: "#", icon: Linkedin },
    { name: "GitHub", href: "#", icon: Github },
    { name: "Email", href: "#", icon: Mail }
  ]

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-white">RoboData</h3>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              The world's leading marketplace for robotics training data. 
              Empowering developers and researchers to build the future of robotics 
              with high-quality, diverse datasets.
            </p>
            
            {/* Newsletter Signup */}
            <div className="mb-6">
              <h4 className="text-white font-semibold mb-3">Stay Updated</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                />
                <button className="btn-primary whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="text-white font-semibold mb-4">Products</h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © 2025 RoboData Inc. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-6 pt-6 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
              <div className="flex flex-wrap gap-6">
                <span>🔒 Enterprise-grade security</span>
                <span>⚡ 99.9% uptime SLA</span>
                <span>🌍 Global CDN</span>
              </div>
              <div>
                <span>Made with ❤️ for the robotics community</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
