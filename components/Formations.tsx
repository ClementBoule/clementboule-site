'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useLang } from './LanguageContext'
import ScrollReveal from './ScrollReveal'
import { formations } from './formations-data'

// ─── Card formation ─────────────────────────────────────────────────────────
function FormationCard({
  slug,
  tag,
  accent,
  bg,
  image,
  title,
  shortDescription,
}: {
  slug: string
  tag: string
  accent: string
  bg: string
  image: string
  title: string
  shortDescription: string
}) {
  return (
    <Link
      href={`/formations/${slug}`}
      className="group relative flex flex-col overflow-hidden rounded-3xl bg-white border border-[#1A2B4A]/8 shadow-sm hover:shadow-xl hover:-translate-y-1.5 hover:border-transparent transition-all duration-300"
      style={{ backgroundColor: bg }}
    >
      {/* Tag */}
      <div className="absolute top-4 left-4 z-10">
        <span
          className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full backdrop-blur-sm"
          style={{
            color: accent,
            backgroundColor: 'rgba(255,255,255,0.85)',
            border: `1px solid ${accent}33`,
          }}
        >
          {tag}
        </span>
      </div>

      {/* Illustration zone */}
      <div className="relative aspect-[4/3] w-full overflow-hidden flex items-center justify-center">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain object-center p-6 transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Texte */}
      <div className="flex flex-col flex-1 p-6 pt-2 bg-white/70 backdrop-blur-sm">
        <h3 className="text-lg font-bold text-[#1A2B4A] leading-snug mb-2">{title}</h3>
        <p className="text-sm text-[#6B7E95] leading-relaxed mb-4 flex-1">{shortDescription}</p>
        <div
          className="inline-flex items-center gap-1.5 text-xs font-semibold transition-colors"
          style={{ color: accent }}
        >
          <span>En savoir plus</span>
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
  )
}

// ─── Section Formations ─────────────────────────────────────────────────────
export default function Formations() {
  const { t } = useLang()

  return (
    <section
      id="formations"
      className="relative py-16 md:py-20 bg-gradient-to-b from-[#F5F0FB] via-[#F1F4FA] to-[#EBF0F8]"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <ScrollReveal className="mb-10 md:mb-14 text-center">
          <p className="text-xs font-semibold text-[#3D6DB8] uppercase tracking-widest mb-3">
            {t.formations.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A2B4A] leading-tight max-w-2xl mx-auto">
            {t.formations.title}
          </h2>
          <p className="mt-4 text-[#6B7E95] max-w-xl mx-auto leading-relaxed">
            {t.formations.subtitle}
          </p>
        </ScrollReveal>

        {/* Grid 1 / 2 / 3 colonnes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {formations.map((f, i) => (
            <ScrollReveal key={f.slug} delay={i * 70}>
              <FormationCard
                slug={f.slug}
                tag={f.tag}
                accent={f.accent}
                bg={f.bg}
                image={f.image}
                title={f.title}
                shortDescription={f.shortDescription}
              />
            </ScrollReveal>
          ))}
        </div>

        {/* CTA centre : voir toutes les formations */}
        <ScrollReveal delay={500} className="mt-12 text-center">
          <Link
            href="/formations"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#1A2B4A] hover:text-[#3D6DB8] transition-colors"
          >
            <span>Voir toutes les formations en détail</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  )
}
