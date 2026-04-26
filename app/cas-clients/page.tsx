import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Cas clients',
  description: "La page cas clients est en cours de rédaction.",
  alternates: { canonical: 'https://www.clementboule.fr/cas-clients' },
}

export default function CasClients() {
  return (
    <main className="min-h-screen bg-cb-sable">
      <Navbar />

      <section className="pt-28 md:pt-32 pb-12 bg-cb-sable border-t-4 border-cb-encre">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span className="inline-block font-marker text-cb-cardinal text-lg -rotate-2 mb-3">
            ↓ Cas clients
          </span>
          <h1 className="font-anton text-6xl md:text-8xl lg:text-9xl uppercase leading-[0.92] text-cb-encre">
            En <span className="inline-block bg-cb-terracotta text-cb-sable px-3 py-0.5 -rotate-1 rounded-sm">chantier</span>.
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-cb-creme border-t-4 border-cb-encre">
        <div className="max-w-3xl mx-auto px-6 flex justify-center">
          <div className="w-72 h-72 md:w-96 md:h-96" aria-hidden="true">
            <svg viewBox="0 0 320 360" className="w-full h-full">
              {/* Ombre du cône */}
              <ellipse cx="160" cy="332" rx="110" ry="14" fill="var(--cb-sauge-deep)" opacity="0.35" />
              {/* Base du cône (parallélépipède noir) */}
              <rect x="40" y="304" width="240" height="22" fill="var(--cb-encre)" stroke="var(--cb-encre)" strokeWidth="3" rx="2" />
              {/* Triangle principal du cône (orange terracotta) */}
              <polygon
                points="160,40 80,304 240,304"
                fill="var(--cb-terracotta)"
                stroke="var(--cb-encre)"
                strokeWidth="6"
                strokeLinejoin="round"
              />
              {/* Bandes blanches réfléchissantes */}
              <polygon
                points="115,154 205,154 213,180 107,180"
                fill="var(--cb-sable)"
                stroke="var(--cb-encre)"
                strokeWidth="3"
                strokeLinejoin="round"
              />
              <polygon
                points="100,224 220,224 228,250 92,250"
                fill="var(--cb-sable)"
                stroke="var(--cb-encre)"
                strokeWidth="3"
                strokeLinejoin="round"
              />
              {/* Petite étincelle / highlight sur la pointe */}
              <circle cx="160" cy="40" r="6" fill="var(--cb-cardinal)" stroke="var(--cb-encre)" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
