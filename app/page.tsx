import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import DataShowcase from './components/DataShowcase'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <DataShowcase />
      <Footer />
    </main>
  )
}
