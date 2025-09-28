import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import DataShowcase from './components/DataShowcase'
import HowItWorks from './components/HowItWorks'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900">
      <Navbar />
      <HeroSection />
      <DataShowcase />
      <HowItWorks />
      <Footer />
    </main>
  )
}
