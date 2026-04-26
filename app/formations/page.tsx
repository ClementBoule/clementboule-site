import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { formations } from '../../components/formations-data'

// ─── Metadata SEO ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Formations, Clément Boulé, consultant & formateur',
  description:
    'Catalogue complet des 6 formations : RH & marque employeur, posture professionnelle, prévention RPS, stratégie d\'entreprise, soft skills, Spine Up. Sur-mesure pour équipes.',
  openGraph: {
    title: 'Formations, Clément Boulé',
    description: 'Catalogue complet des formations sur-mesure.',
    type: 'website',
  },
}

// Couleurs DA-C par slug, alignées sur Formations.tsx home
const COLOR_MAP: Record<string, { shadow: string; accent: string }> = {
  'rh-marque-employeur':     { shadow: 'var(--cb-sarcelle)',       accent: 'sarcelle' },
  'posture-professionnelle': { shadow: 'var(--cb-terracotta)',     accent: 'terracotta' },
  'prevention-rps':          { shadow: 'var(--cb-sarcelle-deep)',  accent: 'sarcelle-deep' },
  'strategie-entreprise':    { shadow: 'var(--cb-cardinal)',       accent: 'cardinal' },
  'soft-skills':             { shadow: 'var(--cb-terracotta)',     accent: 'terracotta' },
  'spine-up':                { shadow: 'var(--cb-sauge-deep)',     accent: 'sauge-deep' },
}

const ROTATIONS = ['-rotate-[0.6deg]', 'rotate-[0.5deg]', '-rotate-[0.4deg]', 'rotate-[0.7deg]', '-rotate-[0.3deg]', 'rotate-[0.4deg]']

// ─── Page liste ─────────────────────────────────────────────────────────────
export default function FormationsIndexPage() {
  return (
    <div className="min-h-screen bg-cb-sable">
      {/* Hero */}
      <section className="relative pt-28 md:pt-32 pb-12 md:pb-16 bg-cb-sable border-t-4 border-cb-encre overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-cb-encre-soft hover:text-cb-cardinal transition-colors mb-6"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Retour à l&apos;accueil
          </Link>

          <div className="grid md:grid-cols-[2fr_1fr] gap-10 items-end mb-10">
            <div>
              <span className="inline-block font-marker text-cb-cardinal text-lg -rotate-2 mb-3">
                ↓ Catalogue formations
              </span>
              <h1 className="font-anton text-5xl md:text-7xl lg:text-8xl uppercase leading-[0.92] text-cb-encre">
                Six <span className="inline-block bg-cb-sarcelle text-cb-sable px-3 py-0.5 -rotate-1 rounded-sm">formations</span>.<br />
                Sur-mesure.
              </h1>
            </div>
            <div className="text-base font-medium border-l-4 border-cb-cardinal pl-5 max-w-md text-cb-encre-soft">
              Chaque parcours est adapté à votre contexte, vos enjeux, votre calendrier. Présentiel, distanciel ou hybride. Individuel ou collectif.
            </div>
          </div>
        </div>
      </section>

      {/* Grille 6 cards brutalist */}
      <section className="py-12 md:py-16 bg-cb-sable">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
            {formations.map((f, i) => {
              const c = COLOR_MAP[f.slug] || COLOR_MAP['rh-marque-employeur']
              const rot = ROTATIONS[i % ROTATIONS.length]
              return (
                <Link
                  key={f.slug}
                  href={`/formations/${f.slug}`}
                  className={`group cb-formation-card relative bg-white border-[2.5px] border-cb-sauge-deep rounded flex flex-col ${rot} hover:rotate-0 hover:translate-x-[-3px] hover:translate-y-[-3px]`}
                  style={{ ['--accent' as any]: c.shadow }}
                >
                  <div className="relative aspect-[3/2] overflow-hidden border-b-[2.5px] border-cb-sauge-deep" style={{ backgroundColor: f.bg }}>
                    <span className={`absolute top-3 left-3 z-10 inline-block px-2.5 py-1 font-anton text-xs uppercase tracking-wider border-2 border-cb-sauge-deep rounded-sm bg-cb-sable text-cb-${c.accent}`}>
                      {f.tag}
                    </span>
                    <Image src={f.image} alt={f.title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
                  </div>
                  <div className="p-5 md:p-6 flex flex-col flex-1">
                    <h2 className="font-anton text-xl md:text-2xl uppercase leading-[1] mb-2 text-cb-encre">{f.title}</h2>
                    <p className="text-sm text-cb-encre-soft leading-snug mb-4 flex-1">{f.shortDescription}</p>
                    <span className="inline-flex items-center gap-1.5 font-anton text-xs uppercase tracking-widest text-cb-encre border-b-2 border-cb-sauge-deep self-start pb-1 group-hover:border-cb-cardinal transition-colors">
                      Voir le programme →
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA final brutalist sarcelle saturé */}
      <section className="py-20 md:py-24 bg-cb-sarcelle border-t-4 border-cb-encre relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, var(--cb-sarcelle-deep) 0, var(--cb-sarcelle-deep) 2px, transparent 2px, transparent 24px)',
        }} />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block font-marker text-cb-rose text-lg -rotate-2 mb-3">
            Besoin d&apos;un mix sur-mesure ?
          </span>
          <h2 className="font-anton text-4xl md:text-6xl lg:text-7xl uppercase leading-[0.95] text-cb-sable mb-6">
            Toutes les formations<br />
            <span className="inline-block bg-cb-encre text-cb-sable px-3 py-0.5 -rotate-1 rounded-sm">peuvent</span> être combinées.
          </h2>
          <p className="text-base md:text-lg text-cb-sable/90 leading-relaxed mb-8 max-w-2xl mx-auto font-medium">
            Adaptées, redessinées autour de vos enjeux réels. Premier échange gratuit et sans engagement.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-cb-cardinal text-cb-sable font-anton text-base md:text-lg uppercase tracking-wider border-[2.5px] border-cb-encre px-8 py-4 rounded-sm hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200"
            style={{ boxShadow: '6px 6px 0 var(--cb-encre)' }}
          >
            Discuter de votre besoin →
          </Link>
        </div>
      </section>
    </div>
  )
}
