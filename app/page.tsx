import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import DataShowcase from './components/DataShowcase'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <DataShowcase />
    </main>
  )
}
