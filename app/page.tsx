import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Proof from '@/components/Proof'
import Formations from '@/components/Formations'
import TopClients from '@/components/TopClients'
import CV from '@/components/CV'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

// Témoignages : section prête dans le code, activée dès réception des verbatims réels
// import Testimonials from '@/components/Testimonials'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Proof />
      <Formations />
      <TopClients />
      {/* <Testimonials /> */}
      <CV />
      <Contact />
      <Footer />
    </main>
  )
}
