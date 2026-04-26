import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { formations, getFormation, getNextFormation, getPrevFormation, QUIZ_SLOT_LABELS } from '../../../components/formations-data'

// ─── Pré-génération statique des 6 slugs ──────────────────────────────────────
export function generateStaticParams() {
  return formations.map((f) => ({ slug: f.slug }))
}

// ─── Metadata SEO dynamique ────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const f = getFormation(slug)
  if (!f) return { title: 'Formation introuvable' }
  return {
    title: `${f.title}, Formation Clément Boulé`,
    description: f.shortDescription,
    openGraph: {
      title: `${f.title}, Formation`,
      description: f.shortDescription,
      images: [{ url: f.image, width: 1200, height: 630, alt: f.title }],
    },
  }
}

// ─── Page détail ──────────────────────────────────────────────────────────────
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
    <div className="min-h-screen bg-cb-sable">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ─── HERO FORMATION ─── */}
      <section
        className="relative pt-28 md:pt-32 pb-12 md:pb-16 overflow-hidden border-t-4 border-cb-encre"
        style={{ backgroundColor: f.bg }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <Link
            href="/formations"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-cb-encre-soft hover:text-cb-cardinal transition-colors mb-6"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Toutes les formations
          </Link>

          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <span
                className="inline-block font-anton text-xs uppercase tracking-wider px-2.5 py-1 mb-5 border-2 border-cb-sauge-deep rounded-sm bg-cb-sable"
                style={{ color: f.accent }}
              >
                {f.tag}
              </span>
              <h1 className="font-anton text-5xl md:text-6xl lg:text-7xl uppercase leading-[0.92] text-cb-encre mb-6">
                {f.title}
              </h1>
              <p className="text-base md:text-lg text-cb-encre-soft leading-relaxed mb-8 max-w-xl border-l-4 border-cb-cardinal pl-5">
                {f.intro}
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 text-cb-sable font-anton text-sm uppercase tracking-wider border-[2.5px] border-cb-encre px-5 py-3 rounded-sm hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200"
                  style={{ backgroundColor: f.accent, boxShadow: '5px 5px 0 var(--cb-encre)' }}
                >
                  Demander un devis →
                </a>
                <a
                  href="#programme"
                  className="inline-flex items-center gap-2 bg-cb-sable text-cb-encre font-anton text-sm uppercase tracking-wider border-[2.5px] border-cb-sauge-deep px-5 py-3 rounded-sm hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200"
                  style={{ boxShadow: '5px 5px 0 var(--cb-sauge-deep)' }}
                >
                  Voir le programme
                </a>
              </div>
            </div>

            {/* Image en frame brutalist creme */}
            <div className="relative flex justify-center md:justify-end">
              <div
                className="relative w-full max-w-md aspect-[4/5] bg-cb-creme border-[2.5px] border-cb-sauge-deep rounded-sm overflow-hidden -rotate-[1deg]"
                style={{ boxShadow: `10px 10px 0 ${f.accent}` }}
              >
                <Image
                  src={f.image}
                  alt={f.title}
                  fill
                  className="object-contain object-center p-6"
                  priority
                  sizes="(max-width: 768px) 100vw, 500px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── POUR QUI + RÉSULTATS ─── */}
      <section className="py-16 md:py-20 bg-cb-sable border-t-4 border-cb-encre">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-10">
            <div
              className="bg-white border-[2.5px] border-cb-sauge-deep rounded-sm p-6 md:p-8 -rotate-[0.3deg]"
              style={{ boxShadow: `7px 7px 0 ${f.accent}` }}
            >
              <span className="inline-block font-marker text-cb-cardinal text-lg -rotate-2 mb-3">
                Pour qui →
              </span>
              <h2 className="font-anton text-3xl md:text-4xl uppercase leading-[0.95] text-cb-encre mb-6">
                Les profils visés
              </h2>
              <ul className="space-y-3">
                {f.forWhom.map((p, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className="flex-shrink-0 w-6 h-6 border-2 border-cb-sauge-deep rounded-sm flex items-center justify-center mt-0.5 bg-cb-sable"
                      style={{ color: f.accent }}
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-cb-encre-soft leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="bg-white border-[2.5px] border-cb-sauge-deep rounded-sm p-6 md:p-8 rotate-[0.4deg]"
              style={{ boxShadow: '7px 7px 0 var(--cb-cardinal)' }}
            >
              <span className="inline-block font-marker text-cb-cardinal text-lg -rotate-2 mb-3">
                Résultats →
              </span>
              <h2 className="font-anton text-3xl md:text-4xl uppercase leading-[0.95] text-cb-encre mb-6">
                Ce que vous repartirez avec
              </h2>
              <ul className="space-y-3">
                {f.outcomes.map((o, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 mt-1 text-cb-cardinal">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                    <span className="text-cb-encre-soft leading-relaxed font-medium">{o}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROGRAMME ─── */}
      <section id="programme" className="py-16 md:py-20 bg-cb-creme border-t-4 border-cb-encre">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block font-marker text-cb-cardinal text-lg -rotate-2 mb-3">
              Programme →
            </span>
            <h2 className="font-anton text-4xl md:text-5xl lg:text-6xl uppercase leading-[0.95] text-cb-encre">
              Une progression en{' '}
              <span className="inline-block bg-cb-sarcelle text-cb-sable px-3 py-0.5 -rotate-1 rounded-sm">
                {f.phases.length}
              </span>{' '}
              {f.phases.length > 3 ? 'modules' : 'phases'}.
            </h2>
          </div>

          <div className="space-y-5">
            {f.phases.map((p, i) => (
              <div
                key={i}
                className={`flex flex-col md:flex-row gap-4 md:gap-6 bg-white border-[2.5px] border-cb-sauge-deep rounded-sm p-6 md:p-8 ${i % 2 === 0 ? '-rotate-[0.3deg]' : 'rotate-[0.3deg]'}`}
                style={{ boxShadow: `5px 5px 0 ${f.accent}` }}
              >
                <div className="md:w-52 flex-shrink-0">
                  <span
                    className="inline-block font-anton text-xs uppercase tracking-wider px-2.5 py-1 mb-2 border-2 border-cb-sauge-deep rounded-sm bg-cb-sable"
                    style={{ color: f.accent }}
                  >
                    {p.step}
                  </span>
                  {p.duration && <p className="text-xs text-cb-encre-soft font-medium">Durée : {p.duration}</p>}
                </div>
                <div className="flex-1">
                  <h3 className="font-anton text-xl md:text-2xl uppercase leading-tight text-cb-encre mb-2">{p.title}</h3>
                  <p className="text-sm md:text-base text-cb-encre-soft leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ATELIERS ─── */}
      <section className="py-16 md:py-20 bg-cb-sable border-t-4 border-cb-encre">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block font-marker text-cb-cardinal text-lg -rotate-2 mb-3">
              Ateliers →
            </span>
            <h2 className="font-anton text-4xl md:text-5xl lg:text-6xl uppercase leading-[0.95] text-cb-encre">
              Des mises en{' '}
              <span className="inline-block bg-cb-terracotta text-cb-sable px-3 py-0.5 -rotate-1 rounded-sm">
                situation
              </span>{' '}
              concrètes.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {f.workshops.map((w, i) => {
              const rot = i % 3 === 0 ? '-rotate-[0.4deg]' : i % 3 === 1 ? 'rotate-[0.5deg]' : '-rotate-[0.3deg]'
              return (
                <div
                  key={i}
                  className={`bg-cb-creme border-[2.5px] border-cb-sauge-deep rounded-sm p-6 ${rot} hover:rotate-0 hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200`}
                  style={{ boxShadow: `5px 5px 0 ${f.accent}` }}
                >
                  <div
                    className="inline-flex items-center justify-center w-12 h-12 border-2 border-cb-sauge-deep rounded-sm text-2xl mb-4 bg-cb-sable"
                  >
                    {w.icon}
                  </div>
                  <h3 className="font-anton text-lg md:text-xl uppercase leading-tight text-cb-encre mb-2">{w.name}</h3>
                  <p className="text-sm text-cb-encre-soft leading-relaxed">{w.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── OUTILS + FORMAT ─── */}
      <section className="py-16 md:py-20 bg-cb-creme border-t-4 border-cb-encre">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16">
            <div>
              <span className="inline-block font-marker text-cb-cardinal text-lg -rotate-2 mb-3">
                Outils →
              </span>
              <h2 className="font-anton text-3xl md:text-4xl uppercase leading-[0.95] text-cb-encre mb-6">
                Les méthodes utilisées
              </h2>
              <ul className="space-y-3">
                {f.tools.map((t, i) => (
                  <li
                    key={i}
                    className={`text-sm md:text-base font-medium text-cb-encre px-4 py-3 bg-white border-[2.5px] border-cb-sauge-deep rounded-sm ${i % 2 === 0 ? '-rotate-[0.2deg]' : 'rotate-[0.2deg]'}`}
                    style={{ boxShadow: '4px 4px 0 var(--cb-sauge)' }}
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="inline-block font-marker text-cb-cardinal text-lg -rotate-2 mb-3">
                Format →
              </span>
              <h2 className="font-anton text-3xl md:text-4xl uppercase leading-[0.95] text-cb-encre mb-6">
                Modalités pratiques
              </h2>
              <div className="space-y-4">
                {/* Card Durée, slot quiz prominent */}
                <div
                  className="flex items-start gap-4 p-4 bg-white border-[2.5px] border-cb-sauge-deep rounded-sm -rotate-[0.3deg]"
                  style={{ boxShadow: `5px 5px 0 ${f.accent}` }}
                >
                  <span className="mt-0.5 flex-shrink-0 w-10 h-10 bg-cb-sable border-2 border-cb-sauge-deep rounded-sm flex items-center justify-center" style={{ color: f.accent }}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  <div className="flex-1">
                    <p className="font-anton text-xs uppercase tracking-widest text-cb-encre mb-2">Durée</p>
                    <span
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 border-2 border-cb-sauge-deep rounded-sm bg-cb-sable font-anton text-xs uppercase tracking-wider"
                      style={{ color: f.accent }}
                    >
                      {QUIZ_SLOT_LABELS[f.format.quizSlot]}
                    </span>
                    <p className="text-xs text-cb-encre-soft mt-1.5 font-medium">{f.format.duration}</p>
                  </div>
                </div>

                {[
                  {
                    label: 'Mode',
                    value: f.format.mode,
                    rot: 'rotate-[0.3deg]',
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    ),
                  },
                  {
                    label: 'Taille du groupe',
                    value: f.format.groupSize,
                    rot: '-rotate-[0.3deg]',
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    ),
                  },
                  {
                    label: 'Tarif',
                    value: f.format.pricing,
                    rot: 'rotate-[0.4deg]',
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
                      </svg>
                    ),
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`flex items-start gap-4 p-4 bg-white border-[2.5px] border-cb-sauge-deep rounded-sm ${item.rot}`}
                    style={{ boxShadow: '4px 4px 0 var(--cb-sauge)' }}
                  >
                    <span className="mt-0.5 flex-shrink-0 w-10 h-10 bg-cb-sable border-2 border-cb-sauge-deep rounded-sm flex items-center justify-center text-cb-sarcelle-deep">
                      {item.icon}
                    </span>
                    <div>
                      <p className="font-anton text-xs uppercase tracking-widest text-cb-encre mb-1">{item.label}</p>
                      <p className="text-sm font-medium text-cb-encre-soft">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA FINAL accent formation ─── */}
      <section className="py-20 md:py-24 border-t-4 border-cb-encre relative overflow-hidden" style={{ backgroundColor: f.accent }}>
        <div className="absolute inset-0 opacity-15" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, var(--cb-encre) 0, var(--cb-encre) 2px, transparent 2px, transparent 24px)',
        }} />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block font-marker text-cb-rose text-lg -rotate-2 mb-3">
            On en parle ?
          </span>
          <h2 className="font-anton text-4xl md:text-6xl lg:text-7xl uppercase leading-[0.95] text-cb-sable mb-6">
            Cette formation correspond<br />
            à <span className="inline-block bg-cb-encre text-cb-sable px-3 py-0.5 -rotate-1 rounded-sm">vos enjeux</span> ?
          </h2>
          <p className="text-base md:text-lg text-cb-sable/90 leading-relaxed mb-8 max-w-2xl mx-auto font-medium">
            Chaque programme est construit sur-mesure. Devis gratuit, premier échange sans engagement.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-cb-sable text-cb-encre font-anton text-base md:text-lg uppercase tracking-wider border-[2.5px] border-cb-encre px-7 py-3.5 rounded-sm hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200"
              style={{ boxShadow: '6px 6px 0 var(--cb-encre)' }}
            >
              Discuter de votre besoin →
            </Link>
            <a
              href="https://calendly.com/clementboule"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-cb-encre text-cb-sable font-anton text-base md:text-lg uppercase tracking-wider border-[2.5px] border-cb-encre px-7 py-3.5 rounded-sm hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200"
              style={{ boxShadow: '6px 6px 0 var(--cb-sable)' }}
            >
              Prendre RDV
            </a>
          </div>
        </div>
      </section>

      {/* ─── NAVIGATION PREV / NEXT ─── */}
      <section className="py-12 bg-cb-sable border-t-4 border-cb-encre">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-4">
          <Link
            href={`/formations/${prev.slug}`}
            className="group flex items-center gap-4 p-5 bg-white border-[2.5px] border-cb-sauge-deep rounded-sm hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all -rotate-[0.3deg] hover:rotate-0"
            style={{ boxShadow: '5px 5px 0 var(--cb-sauge)' }}
          >
            <svg className="w-5 h-5 text-cb-encre-soft group-hover:text-cb-cardinal transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            <div className="flex-1 min-w-0">
              <p className="font-anton text-xs uppercase tracking-widest text-cb-cardinal mb-1">← Précédente</p>
              <p className="font-anton text-base uppercase leading-tight text-cb-encre truncate">{prev.title}</p>
            </div>
          </Link>

          <Link
            href={`/formations/${next.slug}`}
            className="group flex items-center gap-4 p-5 bg-white border-[2.5px] border-cb-sauge-deep rounded-sm hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all md:justify-end md:text-right rotate-[0.3deg] hover:rotate-0"
            style={{ boxShadow: '5px 5px 0 var(--cb-sauge)' }}
          >
            <div className="flex-1 min-w-0">
              <p className="font-anton text-xs uppercase tracking-widest text-cb-cardinal mb-1">Suivante →</p>
              <p className="font-anton text-base uppercase leading-tight text-cb-encre truncate">{next.title}</p>
            </div>
            <svg className="w-5 h-5 text-cb-encre-soft group-hover:text-cb-cardinal transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        <div className="max-w-6xl mx-auto px-6 mt-8 text-center">
          <Link
            href="/formations"
            className="inline-block font-anton text-base md:text-lg uppercase tracking-wider text-cb-encre border-b-[3px] border-cb-cardinal pb-1 hover:translate-y-[-2px] transition-transform"
          >
            Voir toutes les formations →
          </Link>
        </div>
      </section>
    </div>
  )
}
