import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Neural - The Marketplace for Robotics Training Data',
  description: 'Accelerate your robotics development with high-quality, diverse, and ready-to-use datasets from the leading marketplace for robotics training data.',
  keywords: 'robotics, training data, machine learning, AI, datasets, automation',
  authors: [{ name: 'Neural Inc.' }],
  creator: 'Neural Inc.',
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://robodata.com',
    siteName: 'Neural',
    title: 'Neural - The Marketplace for Robotics Training Data',
    description: 'Accelerate your robotics development with high-quality, diverse, and ready-to-use datasets.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Neural - Robotics Training Data Marketplace',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Neural - The Marketplace for Robotics Training Data',
    description: 'Accelerate your robotics development with high-quality, diverse, and ready-to-use datasets.',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
