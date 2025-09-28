import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import DataShowcase from './components/DataShowcase'
import HowItWorks from './components/HowItWorks'
import SocialProof from './components/SocialProof'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900">
      <Navbar />
      <HeroSection />
      <DataShowcase />
      <HowItWorks />
      <SocialProof />
      <FinalCTA />
      <Footer />
    </main>
  )
}
