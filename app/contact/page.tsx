import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description: "Contactez Clément Boulé — formateur consultant coach en entreprise à Paris. Réponse sous 24h.",
  alternates: { canonical: 'https://www.clementboule.fr/contact' },
}

export default function Contact() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20 bg-gradient-to-br from-[#F5F7FB] via-[#EEF3FA] to-[#F5F0FB]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">

            {/* Left — infos de contact */}
            <div>
              <p className="text-xs font-semibold text-[#3D6DB8] uppercase tracking-widest mb-4">Contact</p>
              <h1 className="text-4xl md:text-5xl font-bold text-[#1A2B4A] leading-tight mb-6">
                Parlons de votre projet
              </h1>
              <p className="text-base text-[#6B7E95] leading-relaxed mb-8">
                Décrivez votre besoin en quelques lignes — je vous réponds directement par email sous 24h.
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
                    <p className="text-sm text-[#6B7E95]">Paris, Île-de-France — déplacements France entière</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#3D6DB8]/10 flex items-center justify-center text-[#3D6DB8] shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#1A2B4A] mb-0.5">Délai de réponse</p>
                    <p className="text-sm text-[#6B7E95]">Sous 24h en semaine</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#3D6DB8]/10 flex items-center justify-center text-[#3D6DB8] shrink-0">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#1A2B4A] mb-0.5">Réseaux professionnels</p>
                    <div className="flex gap-3 mt-1">
                      <a href="https://www.linkedin.com/in/cl%C3%A9ment-boul%C3%A9/" target="_blank" rel="noopener noreferrer" className="text-sm text-[#3D6DB8] hover:underline">LinkedIn</a>
                      <span className="text-[#1A2B4A]/20">·</span>
                      <a href="https://www.malt.fr/profile/clementboule" target="_blank" rel="noopener noreferrer" className="text-sm text-[#3D6DB8] hover:underline">Malt</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — formulaire de contact */}
            <div className="bg-white rounded-2xl border border-[#1A2B4A]/8 shadow-sm p-8">
              <p className="text-sm font-semibold text-[#1A2B4A] mb-1">Envoyer un message</p>
              <p className="text-sm text-[#6B7E95] mb-6">
                Remplissez le formulaire — votre client email s&apos;ouvrira avec tout pré-rempli.
              </p>
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
