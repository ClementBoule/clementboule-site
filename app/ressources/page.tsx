import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FinalCTA from '@/components/FinalCTA'

export const metadata: Metadata = {
  title: 'Ressources',
  description: "Ressources gratuites de Clément Boulé : test DISC, formations, profils externes, références utiles.",
  alternates: { canonical: 'https://www.clementboule.fr/ressources' },
}

const RESSOURCES: {
  category: string
  title: string
  desc: string
  cta: string
  href: string
  tag: string
  color: string
  rot: string
  external?: boolean
  highlight?: boolean
}[] = [
  {
    category: 'Outil interactif',
    title: 'Test DISC gratuit',
    desc: "Découvrez votre profil comportemental DISC en 10 minutes. Indicatif, sans inscription.",
    cta: 'Faire le test →',
    href: '/test-disc',
    tag: 'Gratuit',
    color: 'sarcelle',
    rot: '-rotate-[0.5deg]',
    highlight: true,
  },
  {
    category: 'Formation',
    title: 'Les 6 thématiques',
    desc: "L'ensemble des modules proposés : RH, posture professionnelle, RPS, stratégie, soft skills, Spine'Up.",
    cta: 'Voir les formations →',
    href: '/formations',
    tag: 'Avec vous',
    color: 'terracotta',
    rot: 'rotate-[0.4deg]',
  },
  {
    category: 'Profil',
    title: 'À propos de Clément',
    desc: "Parcours, valeurs, expérience terrain. Tout ce qui compte pour évaluer si on peut travailler ensemble.",
    cta: 'Lire le profil →',
    href: '/a-propos',
    tag: 'Profil',
    color: 'sauge-deep',
    rot: '-rotate-[0.3deg]',
  },
  {
    category: 'FAQ',
    title: 'Questions fréquentes',
    desc: "Tarifs, formats, logistique, DISC, facturation, toutes les réponses avant de démarrer.",
    cta: 'Lire la FAQ →',
    href: '/faq',
    tag: 'Pratique',
    color: 'cardinal',
    rot: 'rotate-[0.5deg]',
  },
  {
    category: 'Lien externe',
    title: 'Profil LinkedIn',
    desc: "Recommandations clients, historique professionnel, posts sur le management et le développement.",
    cta: 'Voir LinkedIn →',
    href: 'https://www.linkedin.com/in/cl%C3%A9ment-boul%C3%A9/',
    tag: 'Externe',
    color: 'sarcelle-deep',
    rot: '-rotate-[0.4deg]',
    external: true,
  },
  {
    category: 'Lien externe',
    title: 'Profil Malt',
    desc: "Avis clients vérifiés, historique de missions, disponibilités et tarifs indicatifs sur Malt.",
    cta: 'Voir Malt →',
    href: 'https://www.malt.fr/profile/clementboule',
    tag: 'Externe',
    color: 'terracotta',
    rot: 'rotate-[0.3deg]',
    external: true,
  },
]

export default function Ressources() {
  return (
    <main className="min-h-screen bg-cb-sable">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 md:pt-32 pb-12 md:pb-16 bg-cb-sable border-t-4 border-cb-encre">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-[2fr_1fr] gap-10 items-end">
            <div>
              <span className="inline-block font-marker text-cb-cardinal text-lg -rotate-2 mb-3">
                ↓ Ressources
              </span>
              <h1 className="font-anton text-5xl md:text-7xl lg:text-8xl uppercase leading-[0.92] text-cb-encre">
                Outils &amp; <span className="inline-block bg-cb-sarcelle text-cb-sable px-3 py-0.5 -rotate-1 rounded-sm">références</span>.
              </h1>
            </div>
            <div className="text-base font-medium border-l-4 border-cb-cardinal pl-5 max-w-md text-cb-encre-soft">
              Tout ce qui peut vous aider à mieux comprendre mon approche et à décider si on travaille ensemble.
            </div>
          </div>
        </div>
      </section>

      {/* Cards brutalist polychromes */}
      <section className="py-12 md:py-16 bg-cb-creme border-t-4 border-cb-encre">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
            {RESSOURCES.map((r) => (
              <a
                key={r.title}
                href={r.href}
                target={r.external ? '_blank' : undefined}
                rel={r.external ? 'noopener noreferrer' : undefined}
                className={`group cb-formation-card flex flex-col bg-white border-[2.5px] border-cb-sauge-deep rounded-sm p-6 md:p-7 ${r.rot} hover:rotate-0 hover:translate-x-[-3px] hover:translate-y-[-3px]`}
                style={{ ['--accent' as any]: `var(--cb-${r.color})` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className={`inline-block font-anton text-xs uppercase tracking-wider px-2.5 py-1 border-2 border-cb-sauge-deep rounded-sm bg-cb-sable text-cb-${r.color}`}>
                    {r.tag}
                  </span>
                  {r.external && (
                    <svg className="w-4 h-4 text-cb-encre-soft" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  )}
                </div>
                <p className="font-anton text-xs uppercase tracking-widest text-cb-encre-soft mb-2">
                  {r.category}
                </p>
                <h2 className="font-anton text-xl md:text-2xl uppercase leading-tight text-cb-encre mb-3">
                  {r.title}
                </h2>
                <p className="text-sm text-cb-encre-soft leading-relaxed text-pretty mb-5 flex-1">
                  {r.desc}
                </p>
                <span className={`inline-flex items-center gap-1.5 font-anton text-xs uppercase tracking-widest text-cb-${r.color} border-b-2 border-cb-sauge-deep self-start pb-1 group-hover:border-cb-cardinal transition-colors`}>
                  {r.cta}
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
