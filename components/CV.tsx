'use client'
import { useState, useRef, useEffect } from 'react'
import { useLang } from './LanguageContext'

const STYLES = `
@keyframes fadeUpIn {
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes lineGrow {
  from { height: 0; }
  to   { height: 100%; }
}
@keyframes dotPop {
  0%   { transform: scale(0); opacity: 0; }
  60%  { transform: scale(1.2); }
  100% { transform: scale(1); opacity: 1; }
}
`

function useReveal(delay = 0) {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setTimeout(() => setVisible(true), delay) },
      { threshold: 0.1 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [delay])
  return { ref, visible }
}

/* ── Data ────────────────────────────────────────────────────────────────── */
const EXPERIENCES = [
  {
    period: '2022 – présent',
    periodEn: '2022 – present',
    role: 'Formateur Indépendant',
    roleEn: 'Independent Trainer',
    company: 'Freelance',
    desc: 'Conception et animation de formations sur-mesure en leadership, RH et soft skills pour entreprises et collectivités.',
    descEn: 'Design and delivery of tailored training in leadership, HR, and soft skills for businesses and public organizations.',
    logo: '/logos/exp-photo.jpg',
    logoFit: 'cover' as const,
    accent: '#3D6DB8',
    bg: 'rgba(61,109,184,0.08)',
    tags: ['Leadership', 'RH', 'Soft Skills'],
  },
  {
    period: '2023 – présent',
    periodEn: '2023 – present',
    role: 'Co-Fondateur',
    roleEn: 'Co-Founder',
    company: 'Mantractif',
    desc: "Co-création d'une société de coaching et formation basée en Île-de-France, centrée sur la transformation professionnelle.",
    descEn: 'Co-creation of a coaching and training company in Île-de-France focused on professional transformation.',
    logo: '/logos/exp-mantractif.png',
    logoFit: 'contain' as const,
    accent: '#2D9B7B',
    bg: 'rgba(45,155,123,0.08)',
    tags: ['Coaching', 'Entrepreneuriat', 'Formation'],
  },
  {
    period: '2018 – 2021',
    periodEn: '2018 – 2021',
    role: 'Coach Sportif & Performance',
    roleEn: 'Sports & Performance Coach',
    company: 'Indépendant — Innsbruck',
    desc: 'Coaching individuel et collectif alliant méthodes de performance et techniques de développement mental.',
    descEn: 'Individual and group coaching combining performance methods and mental development techniques.',
    logo: '/logos/exp-crossfit.png',
    logoFit: 'contain' as const,
    accent: '#E8836A',
    bg: 'rgba(232,131,106,0.08)',
    tags: ['Performance', 'Mental', 'Coaching'],
  },
]

const EDUCATION = [
  {
    year: '2026',
    title: 'Certification Management du Changement',
    titleEn: 'Change Management Certification',
    school: 'ESSEC',
    accent: '#1A1A2E',
  },
  {
    year: '2024',
    title: 'La méthode Agile pour accompagner le changement',
    titleEn: 'Agile Method for Change Management',
    school: 'Excellence Formation',
    accent: '#2E7DBF',
  },
  {
    year: '2021',
    title: 'BPJEPS AF',
    titleEn: 'BPJEPS AF',
    school: 'VAE',
    accent: '#7C9CBF',
  },
  {
    year: '2018',
    title: 'Master 2 Intercultural Behavior Management',
    titleEn: 'Master 2 Intercultural Behavior Management',
    school: 'MCI Innsbruck',
    accent: '#003F6C',
  },
  {
    year: '2017',
    title: 'Master 1 PGE International Business',
    titleEn: 'Master 1 PGE International Business',
    school: 'Rennes School of Business',
    accent: '#1E3A5F',
  },
]

/* ── Experience card ─────────────────────────────────────────────────────── */
function ExpCard({ exp, index, lang }: { exp: typeof EXPERIENCES[0]; index: number; lang: string }) {
  const [hovered, setHovered] = useState(false)
  const { ref, visible } = useReveal(index * 120)

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(28px)',
        transition: `opacity 0.7s ease ${index * 0.1}s, transform 0.7s ease ${index * 0.1}s`,
        borderLeft: `3px solid ${hovered ? exp.accent : exp.accent + '40'}`,
        background: hovered ? exp.bg : 'rgba(255,255,255,0.7)',
        boxShadow: hovered
          ? `0 16px 48px -8px ${exp.accent}20, 0 4px 16px -4px rgba(26,43,74,0.08)`
          : '0 2px 12px -4px rgba(26,43,74,0.06)',
        transition2: 'all 0.35s cubic-bezier(0.16,1,0.3,1)',
      }}
      className="relative rounded-2xl p-6 md:p-8 backdrop-blur-sm"
    >
      <div className="flex flex-col sm:flex-row gap-6 items-start">
        {/* Logo */}
        <div
          className="shrink-0 w-16 h-16 rounded-xl overflow-hidden border"
          style={{
            borderColor: hovered ? exp.accent + '40' : '#E5EAF3',
            background: exp.bg,
          }}
        >
          <img
            src={exp.logo}
            alt={exp.company}
            className="w-full h-full"
            style={{ objectFit: exp.logoFit }}
          />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
            <div>
              <h3 className="text-lg font-bold text-[#1A2B4A]">
                {lang === 'en' ? exp.roleEn : exp.role}
              </h3>
              <p className="text-sm font-medium" style={{ color: exp.accent }}>
                {exp.company}
              </p>
            </div>
            <span
              className="text-xs font-semibold px-3 py-1 rounded-full shrink-0"
              style={{ background: exp.bg, color: exp.accent }}
            >
              {lang === 'en' ? exp.periodEn : exp.period}
            </span>
          </div>
          <p className="text-sm text-[#1A2B4A]/60 leading-relaxed mb-3">
            {lang === 'en' ? exp.descEn : exp.desc}
          </p>
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {exp.tags.map(tag => (
              <span
                key={tag}
                className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full"
                style={{
                  background: hovered ? exp.accent + '18' : '#F0F4FC',
                  color: hovered ? exp.accent : '#6B7A9A',
                  border: `1px solid ${hovered ? exp.accent + '30' : 'transparent'}`,
                  transition: 'all 0.3s ease',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ── Education timeline item ─────────────────────────────────────────────── */
function EduItem({ edu, index, lang }: { edu: typeof EDUCATION[0]; index: number; lang: string }) {
  const [hovered, setHovered] = useState(false)
  const { ref, visible } = useReveal(index * 80)

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative pl-8 pb-6 last:pb-0"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateX(-16px)',
        transition: `opacity 0.6s ease ${index * 0.08}s, transform 0.6s ease ${index * 0.08}s`,
      }}
    >
      {/* Timeline dot */}
      <div
        className="absolute left-0 top-1 w-3 h-3 rounded-full border-2 transition-all duration-300"
        style={{
          background: hovered ? edu.accent : '#fff',
          borderColor: hovered ? edu.accent : '#CBD5E1',
          transform: hovered ? 'scale(1.3)' : 'scale(1)',
          boxShadow: hovered ? `0 0 0 4px ${edu.accent}20` : 'none',
        }}
      />
      {/* Timeline line */}
      {index < EDUCATION.length - 1 && (
        <div
          className="absolute left-[5px] top-4 w-[2px] bg-gradient-to-b from-[#CBD5E1] to-transparent"
          style={{ height: 'calc(100% - 4px)' }}
        />
      )}

      <div
        className="rounded-xl p-4 transition-all duration-300"
        style={{
          background: hovered ? edu.accent + '08' : 'rgba(255,255,255,0.5)',
          border: `1px solid ${hovered ? edu.accent + '25' : 'transparent'}`,
        }}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="text-sm font-semibold text-[#1A2B4A] leading-snug">
              {lang === 'en' ? edu.titleEn : edu.title}
            </p>
            <p className="text-xs mt-0.5 font-medium" style={{ color: edu.accent + 'cc' }}>
              {edu.school}
            </p>
          </div>
          <span
            className="text-xs font-bold shrink-0 px-2.5 py-1 rounded-full"
            style={{ background: edu.accent + '12', color: edu.accent }}
          >
            {edu.year}
          </span>
        </div>
      </div>
    </div>
  )
}

/* ── Main CV component ───────────────────────────────────────────────────── */
export default function CV() {
  const { t, lang } = useLang()
  const { ref: headerRef, visible: headerVisible } = useReveal(0)

  return (
    <section
      id="cv"
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #DDEEFF 0%, #EEF5FF 40%, #F8FBFF 100%)' }}
    >
      <style>{STYLES}</style>

      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #1A2B4A 1.5px, transparent 1.5px)',
          backgroundSize: '36px 36px',
        }}
      />
      {/* Accent lines */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#3D6DB8]/30 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <div
          ref={headerRef}
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? 'none' : 'translateY(24px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
          className="mb-16"
        >
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#3D6DB8] mb-3">
            {t.cv?.label || 'PARCOURS'}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A2B4A]">
            {t.cv?.title || 'Une décennie de coaching et de formation bilingue'}
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1fr,380px] gap-12 lg:gap-16">
          {/* ── Left: Experiences ── */}
          <div>
            <p className="text-xs font-bold tracking-[0.15em] uppercase text-[#3D6DB8]/70 mb-6 flex items-center gap-2">
              <span className="w-6 h-[2px] bg-gradient-to-r from-[#3D6DB8] to-transparent rounded" />
              {t.cv?.expLabel || 'EXPÉRIENCES'}
            </p>
            <div className="space-y-4">
              {EXPERIENCES.map((exp, i) => (
                <ExpCard key={exp.company} exp={exp} index={i} lang={lang || 'fr'} />
              ))}
            </div>
          </div>

          {/* ── Right: Education timeline ── */}
          <div>
            <p className="text-xs font-bold tracking-[0.15em] uppercase text-[#3D6DB8]/70 mb-6 flex items-center gap-2">
              <span className="w-6 h-[2px] bg-gradient-to-r from-[#3D6DB8] to-transparent rounded" />
              {t.cv?.eduLabel || 'FORMATION'}
            </p>
            <div className="relative">
              {EDUCATION.map((edu, i) => (
                <EduItem key={edu.year + edu.school} edu={edu} index={i} lang={lang || 'fr'} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
