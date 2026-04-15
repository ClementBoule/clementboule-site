'use client'
import { useState, useRef, useEffect } from 'react'
import { useLang } from './LanguageContext'

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

const EXPERIENCES = [
  {
    period: '2022 \u2013 pr\u00e9sent', periodEn: '2022 \u2013 present',
    role: 'Formateur Ind\u00e9pendant', roleEn: 'Independent Trainer',
    company: 'Freelance',
    desc: 'Conception et animation de formations sur-mesure en leadership, RH et soft skills pour entreprises et collectivit\u00e9s.',
    descEn: 'Design and delivery of tailored training in leadership, HR, and soft skills for businesses and public organizations.',
    logo: '/logos/exp-photo.jpg', logoFit: 'cover' as const,
    accent: '#3D6DB8', bg: 'rgba(61,109,184,0.08)',
    tags: ['Leadership', 'RH', 'Soft Skills'],
  },
  {
    period: '2023 \u2013 pr\u00e9sent', periodEn: '2023 \u2013 present',
    role: 'Co-Fondateur', roleEn: 'Co-Founder',
    company: 'Mantractif',
    desc: "Co-cr\u00e9ation d\u2019une soci\u00e9t\u00e9 de coaching et formation bas\u00e9e en \u00cele-de-France, centr\u00e9e sur la transformation professionnelle.",
    descEn: 'Co-creation of a coaching and training company in \u00cele-de-France focused on professional transformation.',
    logo: '/logos/exp-mantractif.png', logoFit: 'contain' as const,
    accent: '#2D9B7B', bg: 'rgba(45,155,123,0.08)',
    tags: ['Coaching', 'Entrepreneuriat', 'Formation'],
  },
  {
    period: '2018 \u2013 2021', periodEn: '2018 \u2013 2021',
    role: 'Coach Sportif & Performance', roleEn: 'Sports & Performance Coach',
    company: 'Ind\u00e9pendant \u2014 Innsbruck',
    desc: 'Coaching individuel et collectif alliant m\u00e9thodes de performance et techniques de d\u00e9veloppement mental.',
    descEn: 'Individual and group coaching combining performance methods and mental development techniques.',
    logo: '/logos/exp-crossfit.png', logoFit: 'contain' as const,
    accent: '#E8836A', bg: 'rgba(232,131,106,0.08)',
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
    logo: '/logos/edu-essec.jpg',
  },
  {
    year: '2024',
    title: 'La m\u00e9thode Agile pour accompagner le changement',
    titleEn: 'Agile Method for Change Management',
    school: 'Excellence Formation',
    accent: '#2E7DBF',
    logo: '/logos/edu-excellens.png',
  },
  {
    year: '2021',
    title: 'BPJEPS AF',
    titleEn: 'BPJEPS AF',
    school: 'VAE',
    accent: '#7C9CBF',
    logo: '/logos/edu-normandie.png',
  },
  {
    year: '2018',
    title: 'Master 2 Intercultural Behavior Management',
    titleEn: 'Master 2 Intercultural Behavior Management',
    school: 'MCI Innsbruck',
    accent: '#003F6B',
    logo: '/logos/edu-mci.png',
  },
  {
    year: '2017',
    title: 'Master 1 PGE International Business',
    titleEn: 'Master 1 PGE International Business',
    school: 'Rennes School of Business',
    accent: '#1E3A5F',
    logo: '/logos/edu-rennes-sb.jpg',
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
        transition: `opacity 0.7s ease ${index * 0.1}s, transform 0.7s ease ${index * 0.1}s, border-color 0.3s, background 0.3s, box-shadow 0.3s`,
        borderLeft: `3px solid ${hovered ? exp.accent : exp.accent + '40'}`,
        background: hovered ? exp.bg : 'rgba(255,255,255,0.7)',
        boxShadow: hovered
          ? `0 16px 48px -8px ${exp.accent}22, 0 4px 16px -4px rgba(26,43,74,0.08)`
          : '0 2px 12px -4px rgba(26,43,74,0.06)',
      }}
      className="relative rounded-2xl p-6 md:p-8 backdrop-blur-sm"
    >
      <div className="flex flex-col sm:flex-row gap-5 items-start">
        {/* Logo — 80\u00d780 */}
        <div
          className="shrink-0 rounded-xl overflow-hidden border transition-all duration-300"
          style={{
            width: '80px',
            height: '80px',
            borderColor: hovered ? exp.accent + '40' : '#E5EAF3',
            background: exp.bg,
            boxShadow: hovered ? `0 4px 16px ${exp.accent}25` : 'none',
          }}
        >
          <img src={exp.logo} alt={exp.company} className="w-full h-full" style={{ objectFit: exp.logoFit }} />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
            <div>
              <h3 className="text-lg font-bold text-[#1A2B4A]">
                {lang === 'en' ? exp.roleEn : exp.role}
              </h3>
              <p className="text-sm font-medium mt-0.5" style={{ color: exp.accent }}>{exp.company}</p>
            </div>
            <span className="text-xs font-semibold px-3 py-1 rounded-full shrink-0"
              style={{ background: exp.bg, color: exp.accent }}>
              {lang === 'en' ? exp.periodEn : exp.period}
            </span>
          </div>
          <p className="text-sm text-[#1A2B4A]/60 leading-relaxed mb-3">
            {lang === 'en' ? exp.descEn : exp.desc}
          </p>
          <div className="flex flex-wrap gap-2">
            {exp.tags.map(tag => (
              <span key={tag} className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full transition-all duration-300"
                style={{
                  background: hovered ? exp.accent + '18' : '#F0F4FC',
                  color: hovered ? exp.accent : '#6B7A9A',
                  border: `1px solid ${hovered ? exp.accent + '30' : 'transparent'}`,
                }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ── Education card — style card plein, cohérent avec ExpCard ─────────── */
function EduCard({ edu, index, lang }: { edu: typeof EDUCATION[0]; index: number; lang: string }) {
  const [hovered, setHovered] = useState(false)
  const { ref, visible } = useReveal(index * 80)

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(20px)',
        transition: `opacity 0.6s ease ${index * 0.08}s, transform 0.6s ease ${index * 0.08}s, border-color 0.3s, background 0.3s, box-shadow 0.3s`,
        borderLeft: `3px solid ${hovered ? edu.accent : edu.accent + '40'}`,
        background: hovered ? edu.accent + '08' : 'rgba(255,255,255,0.7)',
        boxShadow: hovered
          ? `0 12px 36px -8px ${edu.accent}22, 0 4px 12px -4px rgba(26,43,74,0.06)`
          : '0 2px 10px -4px rgba(26,43,74,0.05)',
      }}
      className="relative rounded-2xl p-5 md:p-6 backdrop-blur-sm"
    >
      <div className="flex items-center gap-4">
        {/* Logo — 72\u00d772 harmonisé avec les logos exp */}
        <div
          className="shrink-0 rounded-xl overflow-hidden bg-white border transition-all duration-300"
          style={{
            width: '72px',
            height: '72px',
            borderColor: hovered ? edu.accent + '50' : '#E5EAF3',
            boxShadow: hovered ? `0 4px 14px ${edu.accent}28` : '0 2px 6px rgba(0,0,0,0.05)',
            transform: hovered ? 'scale(1.05)' : 'scale(1)',
          }}
        >
          <img src={edu.logo} alt={edu.school} className="w-full h-full object-contain p-1.5" />
        </div>

        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-[#1A2B4A] leading-snug">
            {lang === 'en' ? edu.titleEn : edu.title}
          </p>
          <p className="text-xs mt-1 font-medium" style={{ color: edu.accent + 'cc' }}>{edu.school}</p>
        </div>

        <span className="text-xs font-bold shrink-0 px-2.5 py-1 rounded-full"
          style={{ background: edu.accent + '12', color: edu.accent, border: `1px solid ${edu.accent}25` }}>
          {edu.year}
        </span>
      </div>
    </div>
  )
}

/* ── Main ─────────────────────────────────────────────────────────────────── */
export default function CV() {
  const { t, lang } = useLang()
  const { ref: headerRef, visible: headerVisible } = useReveal(0)

  return (
    <section id="cv" className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #DDEEFF 0%, #EEF5FF 40%, #F8FBFF 100%)' }}>
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, #1A2B4A 1.5px, transparent 1.5px)', backgroundSize: '36px 36px' }} />
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#3D6DB8]/30 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div ref={headerRef} style={{
          opacity: headerVisible ? 1 : 0,
          transform: headerVisible ? 'none' : 'translateY(24px)',
          transition: 'opacity 0.7s ease, transform 0.7s ease',
        }} className="mb-16">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#3D6DB8] mb-3">
            {t.cv?.label || 'PARCOURS'}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A2B4A]">
            {t.cv?.title || 'Une d\u00e9cennie de coaching et de formation bilingue'}
          </h2>
        </div>

        {/* Two equal-weight columns */}
        <div className="grid lg:grid-cols-[1fr,420px] gap-12 lg:gap-16">
          {/* Expériences */}
          <div>
            <p className="text-xs font-bold tracking-[0.15em] uppercase text-[#3D6DB8]/70 mb-6 flex items-center gap-2">
              <span className="w-6 h-[2px] bg-gradient-to-r from-[#3D6DB8] to-transparent rounded" />
              {t.cv?.experienceLabel || 'EXP\u00c9RIENCES'}
            </p>
            <div className="space-y-4">
              {EXPERIENCES.map((exp, i) => (
                <ExpCard key={exp.company} exp={exp} index={i} lang={lang || 'fr'} />
              ))}
            </div>
          </div>

          {/* Formation — même style card que expériences */}
          <div>
            <p className="text-xs font-bold tracking-[0.15em] uppercase text-[#3D6DB8]/70 mb-6 flex items-center gap-2">
              <span className="w-6 h-[2px] bg-gradient-to-r from-[#3D6DB8] to-transparent rounded" />
              {t.cv?.educationLabel || 'FORMATION'}
            </p>
            <div className="space-y-3">
              {EDUCATION.map((edu, i) => (
                <EduCard key={edu.year + edu.school} edu={edu} index={i} lang={lang || 'fr'} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
