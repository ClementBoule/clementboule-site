import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Formations from '@/components/Formations'
import TopClients from '@/components/TopClients'
import CV from '@/components/CV'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ChatBot from '@/components/ChatBot'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Formations />
      <TopClients />
      <CV />
      <Contact />
      <Footer />
      <ChatBot />
    </main>
  )
}
