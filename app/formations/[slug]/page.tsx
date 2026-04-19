import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { formations, getFormation, getNextFormation, getPrevFormation } from '../../../components/formations-data'

// ─── Pré-génération statique des 6 slugs ────────────────────────────────────
export function generateStaticParams() {
  return formations.map((f) => ({ slug: f.slug }))
}

// ─── Metadata SEO dynamique ─────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const f = getFormation(slug)
  if (!f) return { title: 'Formation introuvable' }
  return {
    title: `${f.title} — Formation Clément Boulé`,
    description: f.shortDescription,
    openGraph: {
      title: `${f.title} — Formation`,
      description: f.shortDescription,
      images: [{ url: f.image, width: 1200, height: 630, alt: f.title }],
    },
  }
}

// ─── Page détail ────────────────────────────────────────────────────────────
export default async function FormationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const f = getFormation(slug)
  if (!f) notFound()

  const prev = getPrevFormation(slug)
  const next = getNextFormation(slug)

  // JSON-LD Schema.org Course
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: f.title,
    description: f.shortDescription,
    provider: {
      '@type': 'Person',
      name: 'Clément Boulé',
      url: 'https://www.clementboule.fr',
    },
    offers: {
      '@type': 'Offer',
      category: 'Professional Training',
      availability: 'https://schema.org/InStock',
    },
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: f.format.mode,
      courseWorkload: f.format.duration,
    },
  }

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ═══ HERO FORMATION ═══ */}
      <section
        className="relative pt-24 md:pt-28 pb-12 md:pb-16 overflow-hidden"
        style={{ backgroundColor: f.bg }}
      >
        <div className="max-w-6xl mx-auto px-6">
          {/* Breadcrumb + retour */}
          <Link
            href="/formations"
            className="inline-flex items-center gap-2 text-sm text-[#1A2B4A]/50 hover:text-[#1A2B4A] transition-colors mb-6"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Toutes les formations
          </Link>

          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <span
                className="inline-block text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-5"
                style={{
                  color: f.accent,
                  backgroundColor: 'rgba(255,255,255,0.85)',
                  border: `1px solid ${f.accent}33`,
                }}
              >
                {f.tag}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A2B4A] leading-tight tracking-tight mb-5">
                {f.title}
              </h1>
              <p className="text-lg text-[#4A5B70] leading-relaxed mb-8 max-w-xl">{f.intro}</p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:-translate-y-0.5 transition-all"
                  style={{ backgroundColor: f.accent, boxShadow: `0 8px 24px ${f.accent}55` }}
                >
                  Demander un devis
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="#programme"
                  className="inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-full border-2 hover:-translate-y-0.5 transition-all"
                  style={{ borderColor: `${f.accent}44`, color: f.accent }}
                >
                  Voir le programme
                </a>
              </div>
            </div>

            {/* Illustration */}
            <div className="relative flex justify-center md:justify-end">
              <div className="relative w-full max-w-md aspect-[4/5]">
                <Image
                  src={f.image}
                  alt={f.title}
                  fill
                  className="object-contain object-center mix-blend-multiply"
                  priority
                  sizes="(max-width: 768px) 100vw, 500px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ POUR QUI + RÉSULTATS (split 2 colonnes) ═══ */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16">
            {/* Pour qui ? */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1A2B4A] mb-6 flex items-center gap-3">
                <span
                  className="inline-block w-10 h-0.5 rounded-full"
                  style={{ backgroundColor: f.accent }}
                />
                Pour qui ?
              </h2>
              <ul className="space-y-3">
                {f.forWhom.map((p, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
                      style={{ backgroundColor: `${f.accent}15`, color: f.accent }}
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-[#4A5B70] leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Résultats concrets */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1A2B4A] mb-6 flex items-center gap-3">
                <span
                  className="inline-block w-10 h-0.5 rounded-full"
                  style={{ backgroundColor: f.accent }}
                />
                Ce que vous repartirez avec
              </h2>
              <ul className="space-y-3">
                {f.outcomes.map((o, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 text-lg mt-0.5" style={{ color: f.accent }}>
                      ▸
                    </span>
                    <span className="text-[#4A5B70] leading-relaxed font-medium">{o}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PROGRAMME — Phases ═══ */}
      <section id="programme" className="py-16 md:py-20" style={{ backgroundColor: f.bg + '50' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <p
              className="text-xs font-bold uppercase tracking-widest mb-3"
              style={{ color: f.accent }}
            >
              Programme détaillé
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A2B4A]">
              Une progression en {f.phases.length} {f.phases.length > 3 ? 'modules' : 'phases'}
            </h2>
          </div>

          <div className="space-y-4">
            {f.phases.map((p, i) => (
              <div
                key={i}
                className="flex flex-col md:flex-row gap-4 md:gap-6 bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-[#1A2B4A]/5"
              >
                <div className="md:w-48 flex-shrink-0">
                  <span
                    className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-2"
                    style={{ color: f.accent, backgroundColor: `${f.accent}12` }}
                  >
                    {p.step}
                  </span>
                  {p.duration && (
                    <p className="text-xs text-[#6B7E95]">Durée : {p.duration}</p>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-[#1A2B4A] mb-2">{p.title}</h3>
                  <p className="text-sm text-[#4A5B70] leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ATELIERS ═══ */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p
              className="text-xs font-bold uppercase tracking-widest mb-3"
              style={{ color: f.accent }}
            >
              Ateliers & exercices
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A2B4A]">
              Des mises en situation concrètes
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {f.workshops.map((w, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border-2 border-[#1A2B4A]/8 hover:border-transparent hover:shadow-lg transition-all"
                style={{ backgroundColor: 'white' }}
              >
                <div
                  className="inline-flex items-center justify-center w-12 h-12 rounded-xl text-2xl mb-4"
                  style={{ backgroundColor: `${f.accent}14` }}
                >
                  {w.icon}
                </div>
                <h3 className="text-base font-bold text-[#1A2B4A] mb-2">{w.name}</h3>
                <p className="text-sm text-[#6B7E95] leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ OUTILS + FORMAT (2 colonnes) ═══ */}
      <section className="py-16 md:py-20 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16">
            {/* Outils */}
            <div>
              <p
                className="text-xs font-bold uppercase tracking-widest mb-3"
                style={{ color: f.accent }}
              >
                Outils & frameworks
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1A2B4A] mb-6">
                Les méthodes utilisées
              </h2>
              <ul className="space-y-2">
                {f.tools.map((t, i) => (
                  <li
                    key={i}
                    className="text-sm text-[#4A5B70] px-4 py-3 rounded-xl bg-white border border-[#1A2B4A]/8"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            {/* Format */}
            <div>
              <p
                className="text-xs font-bold uppercase tracking-widest mb-3"
                style={{ color: f.accent }}
              >
                Format
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1A2B4A] mb-6">
                Modalités pratiques
              </h2>
              <div className="space-y-4">
                {[
                  { label: 'Durée', value: f.format.duration, icon: '⏱' },
                  { label: 'Mode', value: f.format.mode, icon: '📍' },
                  { label: 'Taille du groupe', value: f.format.groupSize, icon: '👥' },
                  { label: 'Tarif', value: f.format.pricing, icon: '💼' },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white border border-[#1A2B4A]/8"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <p className="text-xs text-[#6B7E95] uppercase tracking-widest font-semibold mb-1">
                        {item.label}
                      </p>
                      <p className="text-sm font-medium text-[#1A2B4A]">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CTA FINAL ═══ */}
      <section id="contact" className="py-16 md:py-20" style={{ backgroundColor: f.bg }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A2B4A] mb-4 leading-tight">
            On en parle ?
          </h2>
          <p className="text-[#4A5B70] leading-relaxed mb-8 max-w-xl mx-auto">
            Chaque formation est adaptée à votre contexte, vos enjeux et votre calendrier. Le devis est gratuit et vous repartez au minimum avec un cadre clarifié.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:-translate-y-0.5 transition-all"
            style={{ backgroundColor: f.accent, boxShadow: `0 10px 32px ${f.accent}55` }}
          >
            Discuter de votre besoin
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ═══ NAVIGATION PREV / NEXT ═══ */}
      <section className="py-12 border-t border-[#1A2B4A]/8">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-4">
          <Link
            href={`/formations/${prev.slug}`}
            className="group flex items-center gap-4 p-5 rounded-2xl border-2 border-[#1A2B4A]/8 hover:border-transparent hover:shadow-lg transition-all"
          >
            <svg
              className="w-5 h-5 text-[#1A2B4A]/40 group-hover:text-[#1A2B4A] transition-colors flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-[#6B7E95] uppercase tracking-widest font-semibold mb-1">
                Formation précédente
              </p>
              <p className="text-sm font-bold text-[#1A2B4A] truncate">{prev.title}</p>
            </div>
          </Link>

          <Link
            href={`/formations/${next.slug}`}
            className="group flex items-center gap-4 p-5 rounded-2xl border-2 border-[#1A2B4A]/8 hover:border-transparent hover:shadow-lg transition-all md:justify-end md:text-right"
          >
            <div className="flex-1 min-w-0">
              <p className="text-xs text-[#6B7E95] uppercase tracking-widest font-semibold mb-1">
                Formation suivante
              </p>
              <p className="text-sm font-bold text-[#1A2B4A] truncate">{next.title}</p>
            </div>
            <svg
              className="w-5 h-5 text-[#1A2B4A]/40 group-hover:text-[#1A2B4A] transition-colors flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        <div className="max-w-6xl mx-auto px-6 mt-6 text-center">
          <Link
            href="/formations"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#1A2B4A] hover:text-[#3D6DB8] transition-colors"
          >
            Voir toutes les formations
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  )
}
