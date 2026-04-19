import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { formations } from '../../components/formations-data'

// ─── Metadata SEO ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Formations — Clément Boulé, consultant & formateur',
  description:
    'Catalogue complet des 6 formations : RH & marque employeur, posture professionnelle, prévention RPS, stratégie d\'entreprise, soft skills, Spine Up. Sur-mesure pour équipes.',
  openGraph: {
    title: 'Formations — Clément Boulé',
    description: 'Catalogue complet des formations sur-mesure.',
    type: 'website',
  },
}

// ─── Page liste ─────────────────────────────────────────────────────────────
export default function FormationsIndexPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ═══ HERO ═══ */}
      <section className="relative pt-24 md:pt-28 pb-12 md:pb-16 bg-gradient-to-b from-[#F5F0FB] via-[#F1F4FA] to-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[#1A2B4A]/50 hover:text-[#1A2B4A] transition-colors mb-8"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Retour à l&apos;accueil
          </Link>
          <p className="text-xs font-bold text-[#3D6DB8] uppercase tracking-widest mb-4">
            Catalogue formations
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A2B4A] leading-tight tracking-tight mb-5">
            6 formations sur-mesure pour vos équipes
          </h1>
          <p className="text-lg text-[#4A5B70] leading-relaxed max-w-2xl mx-auto">
            Chaque parcours est adapté à votre contexte, vos enjeux et votre calendrier. Formations animées en présentiel, distanciel ou hybride — de l&apos;individuel au collectif.
          </p>
        </div>
      </section>

      {/* ═══ GRID COMPLÈTE 6 FORMATIONS ═══ */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {formations.map((f) => (
              <Link
                key={f.slug}
                href={`/formations/${f.slug}`}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-[#1A2B4A]/8 shadow-sm hover:shadow-xl hover:-translate-y-1.5 hover:border-transparent transition-all duration-300"
                style={{ backgroundColor: f.bg }}
              >
                <div className="absolute top-4 left-4 z-10">
                  <span
                    className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full backdrop-blur-sm"
                    style={{
                      color: f.accent,
                      backgroundColor: 'rgba(255,255,255,0.85)',
                      border: `1px solid ${f.accent}33`,
                    }}
                  >
                    {f.tag}
                  </span>
                </div>
                <div className="relative aspect-[4/3] w-full overflow-hidden flex items-center justify-center">
                  <Image
                    src={f.image}
                    alt={f.title}
                    fill
                    className="object-contain object-center p-6 transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="flex flex-col flex-1 p-6 pt-2 bg-white/70 backdrop-blur-sm">
                  <h2 className="text-lg font-bold text-[#1A2B4A] leading-snug mb-2">{f.title}</h2>
                  <p className="text-sm text-[#6B7E95] leading-relaxed mb-4 flex-1">{f.shortDescription}</p>
                  <div
                    className="inline-flex items-center gap-1.5 text-xs font-semibold transition-colors"
                    style={{ color: f.accent }}
                  >
                    <span>Voir le détail</span>
                    <svg
                      className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { formations } from '../../components/formations-data'

// ─── Metadata SEO ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Formations — Clément Boulé, consultant & formateur',
  description:
    'Catalogue complet des 6 formations : RH & marque employeur, posture professionnelle, prévention RPS, stratégie d\'entreprise, soft skills, Spine Up. Sur-mesure pour équipes.',
  openGraph: {
    title: 'Formations — Clément Boulé',
    description: 'Catalogue complet des formations sur-mesure.',
    type: 'website',
  },
}

// ─── Page liste ─────────────────────────────────────────────────────────────
export default function FormationsIndexPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ═══ HERO ═══ */}
      <section className="relative pt-24 md:pt-28 pb-12 md:pb-16 bg-gradient-to-b from-[#F5F0FB] via-[#F1F4FA] to-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[#1A2B4A]/50 hover:text-[#1A2B4A] transition-colors mb-8"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Retour à l&apos;accueil
          </Link>
          <p className="text-xs font-bold text-[#3D6DB8] uppercase tracking-widest mb-4">
            Catalogue formations
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A2B4A] leading-tight tracking-tight mb-5">
            6 formations sur-mesure pour vos équipes
          </h1>
          <p className="text-lg text-[#4A5B70] leading-relaxed max-w-2xl mx-auto">
            Chaque parcours est adapté à votre contexte, vos enjeux et votre calendrier. Formations animées en présentiel, distanciel ou hybride — de l&apos;individuel au collectif.
          </p>
        </div>
      </section>

      {/* ═══ GRID COMPLÈTE 6 FORMATIONS ═══ */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {formations.map((f) => (
              <Link
                key={f.slug}
                href={`/formations/${f.slug}`}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-[#1A2B4A]/8 shadow-sm hover:shadow-xl hover:-translate-y-1.5 hover:border-transparent transition-all duration-300"
                style={{ backgroundColor: f.bg }}
              >
                <div className="absolute top-4 left-4 z-10">
                  <span
                    className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full backdrop-blur-sm"
                    style={{
                      color: f.accent,
                      backgroundColor: 'rgba(255,255,255,0.85)',
                      border: `1px solid ${f.accent}33`,
                    }}
                  >
                    {f.tag}
                  </span>
                </div>
                <div className="relative aspect-[4/3] w-full overflow-hidden flex items-center justify-center">
                  <Image
                    src={f.image}
                    alt={f.title}
                    fill
                    className="object-contain object-center p-6 transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="flex flex-col flex-1 p-6 pt-2 bg-white/70 backdrop-blur-sm">
                  <h2 className="text-lg font-bold text-[#1A2B4A] leading-snug mb-2">{f.title}</h2>
                  <p className="text-sm text-[#6B7E95] leading-relaxed mb-4 flex-1">{f.shortDescription}</p>
                  <div
                    className="inline-flex items-center gap-1.5 text-xs font-semibold transition-colors"
                    style={{ color: f.accent }}
                  >
                    <span>Voir le détail</span>
                    <svg
                      className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA FINAL ═══ */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-white to-[#F5F0FB]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A2B4A] mb-4 leading-tight">
            Besoin d&apos;une formation hybride ou sur-mesure ?
          </h2>
          <p className="text-[#4A5B70] leading-relaxed mb-8 max-w-xl mx-auto">
            Toutes les formations peuvent être combinées, adaptées ou redessinées autour de vos enjeux réels. Le premier échange est gratuit et sans engagement.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:-translate-y-0.5 transition-all bg-[#1A2B4A] hover:bg-[#3D6DB8]"
          >
            Discuter de votre besoin
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  )
}


      {/* ═══ CTA FINAL ═══ */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-white to-[#F5F0FB]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A2B4A] mb-4 leading-tight">
            Besoin d&apos;une formation hybride ou sur-mesure ?
          </h2>
          <p className="text-[#4A5B70] leading-relaxed mb-8 max-w-xl mx-auto">
            Toutes les formations peuvent être combinées, adaptées ou redessinées autour de vos enjeux réels. Le premier échange est gratuit et sans engagement.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:-translate-y-0.5 transition-all bg-[#1A2B4A] hover:bg-[#3D6DB8]"
          >
            Discuter de votre besoin
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  )
}
