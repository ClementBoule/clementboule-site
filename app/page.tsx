import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import MatchQuiz from '@/components/MatchQuiz'
import Proof from '@/components/Proof'
import TopClients from '@/components/TopClients'
import Formations from '@/components/Formations'
import Process from '@/components/Process'
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
      {/* MatchQuiz repositionné en #2 (après Hero) pour maximiser la visibilité du
          principal outil de conversion. Position précédente (entre Formations et
          Process) plaçait le quiz à ~57% de la hauteur de page → 45-70% des
          visiteurs ne le voyaient jamais (benchmark Nielsen Norman scroll depth). */}
      <MatchQuiz />
      <Proof />
      <TopClients />
      <Formations />
      <Process />
      {/* <Testimonials /> */}
      <HomeFAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}
