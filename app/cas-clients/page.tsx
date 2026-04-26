import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FinalCTA from '@/components/FinalCTA'

export const metadata: Metadata = {
  title: 'Cas clients',
  description: "La page cas clients est en cours de rédaction. Pour l'instant, parlons directement de votre projet.",
  alternates: { canonical: 'https://www.clementboule.fr/cas-clients' },
}

export default function CasClients() {
  return (
    <main className="min-h-screen bg-cb-sable">
      <Navbar />

      {/* Hero en chantier */}
      <section className="pt-28 md:pt-32 pb-20 md:pb-24 bg-cb-sable border-t-4 border-cb-encre">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span className="inline-block font-marker text-cb-cardinal text-lg -rotate-2 mb-3">
            ↓ Cas clients
          </span>
          <h1 className="font-anton text-6xl md:text-8xl lg:text-9xl uppercase leading-[0.92] text-cb-encre mb-8">
            En <span className="inline-block bg-cb-terracotta text-cb-sable px-3 py-0.5 -rotate-1 rounded-sm">chantier</span>.
          </h1>
        </div>
      </section>

      {/* Illustration centrale chantier */}
      <section className="py-12 md:py-20 bg-cb-creme border-t-4 border-cb-encre">
        <div className="max-w-3xl mx-auto px-6">

          {/* Illustration SVG panneau de chantier brutaliste */}
          <div className="flex justify-center mb-12">
            <div
              className="relative w-72 h-72 md:w-96 md:h-96 -rotate-[3deg]"
              aria-hidden="true"
            >
              <svg viewBox="0 0 320 320" className="w-full h-full">
                {/* Diamond panneau cône terracotta + sauge */}
                <g transform="translate(160 160) rotate(45)">
                  {/* Ombre décalée */}
                  <rect
                    x="-100" y="-100" width="200" height="200"
                    fill="var(--cb-sauge-deep)"
                    transform="translate(10 10)"
                  />
                  {/* Panneau */}
                  <rect
                    x="-100" y="-100" width="200" height="200"
                    fill="var(--cb-terracotta)"
                    stroke="var(--cb-encre)" strokeWidth="6"
                  />
                  {/* Bandes blanches diagonales */}
                  <rect x="-100" y="-50" width="200" height="14" fill="var(--cb-sable)" />
                  <rect x="-100" y="36" width="200" height="14" fill="var(--cb-sable)" />
                </g>
                {/* Picto pelle (centré, droit) */}
                <g transform="translate(160 160)" fill="none" stroke="var(--cb-encre)" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="-30" y1="40" x2="30" y2="-40" />
                  <path d="M30 -40 L48 -52 L60 -36 L42 -22 Z" fill="var(--cb-encre)" />
                  <rect x="-46" y="34" width="32" height="18" rx="3" fill="var(--cb-encre)" transform="rotate(-45 -30 43)" />
                </g>
                {/* Petites étincelles autour */}
                <g fill="var(--cb-cardinal)">
                  <circle cx="50" cy="60" r="6" />
                  <circle cx="270" cy="80" r="5" />
                  <circle cx="60" cy="260" r="4" />
                  <circle cx="280" cy="240" r="6" />
                </g>
              </svg>
            </div>
          </div>

          {/* Texte */}
          <div
            className="bg-white border-[2.5px] border-cb-sauge-deep rounded-sm p-6 md:p-10 -rotate-[0.4deg]"
            style={{ boxShadow: '8px 8px 0 var(--cb-cardinal)' }}
          >
            <p className="font-anton text-2xl md:text-3xl uppercase leading-tight text-cb-encre mb-5">
              Les vrais cas clients arrivent.
            </p>
            <p className="text-base md:text-lg text-cb-encre-soft leading-relaxed mb-4 font-medium">
              Anonymisation des entreprises, autorisation des contacts, vérification des chiffres.
            </p>
            <p className="text-base md:text-lg text-cb-encre-soft leading-relaxed">
              Je préfère prendre le temps de les écrire correctement plutôt que de remplir cette page avec du vague. En attendant, le mieux est qu&apos;on parle directement de votre projet.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-cb-sarcelle text-cb-sable font-anton text-sm uppercase tracking-wider border-[2.5px] border-cb-encre px-5 py-3 rounded-sm hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200"
                style={{ boxShadow: '5px 5px 0 var(--cb-encre)' }}
              >
                Discuter de votre projet →
              </a>
              <a
                href="/formations"
                className="inline-flex items-center gap-2 bg-cb-sable text-cb-encre font-anton text-sm uppercase tracking-wider border-[2.5px] border-cb-sauge-deep px-5 py-3 rounded-sm hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200"
                style={{ boxShadow: '5px 5px 0 var(--cb-sauge-deep)' }}
              >
                Voir les formations
              </a>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </main>
  )
}
