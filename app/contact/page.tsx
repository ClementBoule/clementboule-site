import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Contact',
  description: "Contactez Clement Boule — formateur consultant coach en entreprise a Paris. Reponse sous 24h.",
  alternates: { canonical: 'https://www.clementboule.fr/contact' },
}

export default function Contact() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20 bg-gradient-to-br from-[#F5F7FB] via-[#EEF3FA] to-[#F5F0FB]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left */}
            <div>
              <p className="text-xs font-semibold text-[#3D6DB8] uppercase tracking-widest mb-4">Contact</p>
              <h1 className="text-4xl md:text-5xl font-bold text-[#1A2B4A] leading-tight mb-6">
                Parlons de votre projet
              </h1>
              <p className="text-base text-[#6B7E95] leading-relaxed mb-8">
                Pas de formulaire interminable. Un echange direct pour comprendre votre contexte et voir comment je peux vous aider.
              </p>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#3D6DB8]/10 flex items-center justify-center text-[#3D6DB8] shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#1A2B4A] mb-0.5">Email</p>
                    <a href="mailto:hello@clementboule.com" className="text-sm text-[#3D6DB8] hover:underline">
                      hello@clementboule.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#3D6DB8]/10 flex items-center justify-center text-[#3D6DB8] shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#1A2B4A] mb-0.5">Localisation</p>
                    <p className="text-sm text-[#6B7E95]">Paris, Ile-de-France — deplacements France entiere</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#3D6DB8]/10 flex items-center justify-center text-[#3D6DB8] shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#1A2B4A] mb-0.5">Delai de reponse</p>
                    <p className="text-sm text-[#6B7E95]">Sous 24h en semaine</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#3D6DB8]/10 flex items-center justify-center text-[#3D6DB8] shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#1A2B4A] mb-0.5">LinkedIn & Malt</p>
                    <div className="flex gap-3 mt-1">
                      <a href="https://www.linkedin.com/in/cl%C3%A9ment-boul%C3%A9/" target="_blank" rel="noopener noreferrer" className="text-sm text-[#3D6DB8] hover:underline">LinkedIn</a>
                      <span className="text-[#1A2B4A]/20">·</span>
                      <a href="https://www.malt.fr/profile/clementboule" target="_blank" rel="noopener noreferrer" className="text-sm text-[#3D6DB8] hover:underline">Malt</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="bg-white rounded-2xl border border-[#1A2B4A]/8 shadow-sm p-8">
              <p className="text-sm font-semibold text-[#1A2B4A] mb-2">Envoyer un message</p>
              <p className="text-sm text-[#6B7E95] mb-6">
                Decrivez votre besoin en quelques lignes — je vous reponds directement par email.
              </p>
              <a
                href="mailto:hello@clementboule.com?subject=Demande%20de%20contact%20%E2%80%94%20clementboule.fr"
                className="inline-flex w-full items-center justify-center gap-2 bg-[#3D6DB8] text-white font-semibold px-6 py-3.5 rounded-full hover:bg-[#2D5A9E] hover:-translate-y-0.5 shadow-md transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Ecrire a hello@clementboule.com
              </a>
              <p className="text-xs text-[#6B7E95]/60 text-center mt-4">
                Ouvre votre client email habituel
              </p>

              <div className="mt-8 pt-6 border-t border-[#1A2B4A]/6">
                <p className="text-xs text-[#6B7E95] text-center">
                  Vous preferez LinkedIn ?
                  <a href="https://www.linkedin.com/in/cl%C3%A9ment-boul%C3%A9/" target="_blank" rel="noopener noreferrer" className="text-[#3D6DB8] hover:underline ml-1">
                    Ecrire en DM
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
