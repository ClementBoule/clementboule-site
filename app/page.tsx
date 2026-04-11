import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Formations from '@/components/Formations'
import CV from '@/components/CV'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Formations />
      <CV />
      <Contact />
      <Footer />
    </main>
  )
}
