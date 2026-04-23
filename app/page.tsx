import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Proof from '@/components/Proof'
import Formations from '@/components/Formations'
import Process from '@/components/Process'
import TopClients from '@/components/TopClients'
import HomeFAQ from '@/components/HomeFAQ'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

// Témoignages : section prête, activée dès réception des verbatims réels
// import Testimonials from '@/components/Testimonials'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Proof />
      <Formations />
      <Process />
      <TopClients />
      {/* <Testimonials /> */}
      <HomeFAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}
