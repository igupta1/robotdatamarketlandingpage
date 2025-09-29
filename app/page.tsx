import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import DataShowcase from './components/DataShowcase'
import ContactUs from './components/ContactUs'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <DataShowcase />
      <ContactUs />
    </main>
  )
}
