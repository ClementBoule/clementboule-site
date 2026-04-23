import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FinalCTA from '@/components/FinalCTA'

export const metadata: Metadata = {
  title: 'Ressources',
  description: "Ressources gratuites de Clement Boule — test DISC, guides sur le management, le leadership et le developpement professionnel.",
  alternates: { canonical: 'https://www.clementboule.fr/ressources' },
}

const RESSOURCES = [
  {
    category: 'Outil interactif',
    title: 'Test DISC gratuit',
    desc: "Decouvrez votre profil comportemental DISC en 10 minutes. Outil indicatif, sans inscription, disponible en francais.",
    cta: 'Faire le test',
    href: '/test-disc',
    tag: 'Gratuit',
    highlight: true,
  },
  {
    category: 'Formation',
    title: 'Les 6 thematiques de formation',
    desc: "Decouvrez l'ensemble des modules proposes : RH, posture professionnelle, RPS, strategie, soft skills et Spine'Up.",
    cta: 'Voir les formations',
    href: '/formations',
    tag: 'Sur-mesure',
  },
  {
    category: 'Presentation',
    title: 'A propos de Clement Boule',
    desc: "Parcours professionnel, valeurs, experience terrain. Tout ce qui compte pour evaluer si on peut travailler ensemble.",
    cta: 'Lire le profil',
    href: '/a-propos',
    tag: 'Profil',
  },
  {
    category: 'FAQ',
    title: 'Questions frequentes',
    desc: "Tarifs, formats, logistique, DISC, facturation — toutes les reponses aux questions les plus courantes avant de demarrer.",
    cta: 'Lire la FAQ',
    href: '/faq',
    tag: 'Pratique',
  },
  {
    category: 'Reference externe',
    title: 'Profil LinkedIn',
    desc: "Recommandations clients, historique professionnel complet, posts sur le management et le developpement professionnel.",
    cta: 'Voir LinkedIn',
    href: 'https://www.linkedin.com/in/cl%C3%A9ment-boul%C3%A9/',
    tag: 'Externe',
    external: true,
  },
  {
    category: 'Reference externe',
    title: 'Profil Malt',
    desc: "Avis clients verifies, historique de missions, disponibilites et tarifs indicatifs sur la plateforme Malt.",
    cta: 'Voir Malt',
    href: 'https://www.malt.fr/profile/clementboule',
    tag: 'Externe',
    external: true,
  },
]

export default function Ressources() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-16 bg-gradient-to-br from-[#F5F7FB] via-[#EEF3FA] to-[#F5F0FB]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold text-[#3D6DB8] uppercase tracking-widest mb-4">Ressources</p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1A2B4A] leading-tight mb-6">
            Outils & references
          </h1>
          <p className="text-base text-[#6B7E95] leading-relaxed">
            Tout ce qui peut vous aider a mieux comprendre mon approche et a decider si on travaille ensemble.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {RESSOURCES.map((r) => (
              <a
                key={r.title}
                href={r.href}
                target={r.external ? '_blank' : undefined}
                rel={r.external ? 'noopener noreferrer' : undefined}
                className={`group flex flex-col p-7 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                  r.highlight
                    ? 'bg-[#3D6DB8] border-[#3D6DB8] text-white'
                    : 'bg-[#F5F7FB] border-[#1A2B4A]/6 hover:bg-white hover:border-[#3D6DB8]/20'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                    r.highlight
                      ? 'bg-white/20 text-white'
                      : 'bg-[#3D6DB8]/10 text-[#3D6DB8]'
                  }`}>
                    {r.tag}
                  </span>
                  {r.external && (
                    <svg className={`w-4 h-4 ${r.highlight ? 'text-white/60' : 'text-[#6B7E95]'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  )}
                </div>
                <p className={`text-xs font-semibold uppercase tracking-widest mb-2 ${r.highlight ? 'text-white/60' : 'text-[#6B7E95]'}`}>
                  {r.category}
                </p>
                <h2 className={`text-base font-bold mb-3 ${r.highlight ? 'text-white' : 'text-[#1A2B4A]'}`}>
                  {r.title}
                </h2>
                <p className={`text-sm leading-relaxed flex-1 mb-5 ${r.highlight ? 'text-white/80' : 'text-[#6B7E95]'}`}>
                  {r.desc}
                </p>
                <span className={`text-sm font-semibold inline-flex items-center gap-1 ${r.highlight ? 'text-white' : 'text-[#3D6DB8]'}`}>
                  {r.cta}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </main>
  )
}
