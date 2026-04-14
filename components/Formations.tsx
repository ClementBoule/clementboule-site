'use client'
import { useState, useRef, useEffect } from 'react'
import { useLang } from './LanguageContext'

const STYLES = `
@keyframes fadeUpIn {
  from { opacity: 0; transform: translateY(32px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes tagPop {
  0%   { transform: scale(0.8); opacity: 0; }
  60%  { transform: scale(1.08); }
  100% { transform: scale(1); opacity: 1; }
}
.formation-card-visible {
  animation: fadeUpIn 0.7s cubic-bezier(0.16,1,0.3,1) forwards;
}
`

type Formation = {
  tag: string
  tagColor: string
  tagBg: string
  title: string
  titleEn: string
  desc: string
  descEn: string
  img: string
  accent: string
}

const FORMATIONS: Formation[] = [
  {
    tag: 'RH',
    tagColor: '#1D4ED8',
    tagBg: '#DBEAFE',
    title: 'RH & Marque Employeur',
    titleEn: 'HR & Employer Branding',
    desc: "Aligner culture interne et image externe pour attirer et fidéliser les talents. Vos collaborateurs deviennent vos premiers ambassadeurs.",
    descEn: "Align internal culture and external image to attract and retain talent. Your employees become your best ambassadors.",
    img: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80',
    accent: '#3B82F6',
  },
  {
    tag: 'POSTURE',
    tagColor: '#7C3AED',
    tagBg: '#EDE9FE',
    title: 'Posture Professionnelle',
    titleEn: 'Professional Presence',
    desc: "Gestes, regard, prise de parole. Les clés d'un impact immédiat en réunion, en entretien ou face à un client exigeant.",
    descEn: "Body language, eye contact, public speaking. Keys to immediate impact in meetings, interviews, and client interactions.",
    img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80',
    accent: '#8B5CF6',
  },
  {
    tag: 'RPS',
    tagColor: '#059669',
    tagBg: '#D1FAE5',
    title: 'Prévention des RPS',
    titleEn: 'Psychosocial Risk Prevention',
    desc: "Identifier les signaux faibles, désamorcer les tensions et créer un environnement de travail sain et durable.",
    descEn: "Identify early warning signs, defuse tensions, and build a healthy, sustainable work environment.",
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80',
    accent: '#10B981',
  },
  {
    tag: 'STRATÉGIE',
    tagColor: '#B45309',
    tagBg: '#FEF3C7',
    title: 'Stratégie & Leadership',
    titleEn: 'Strategy & Leadership',
    desc: "Du diagnostic organisationnel au plan d'action concret. Accompagner les dirigeants dans leurs transformations.",
    descEn: "From organizational diagnosis to concrete action plan. Supporting leaders through transformations.",
    img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
    accent: '#F59E0B',
  },
  {
    tag: 'SOFT SKILLS',
    tagColor: '#DC2626',
    tagBg: '#FEE2E2',
    title: 'Soft Skills & Impact',
    titleEn: 'Soft Skills & Impact',
    desc: "Intelligence émotionnelle, communication assertive, gestion du stress. Les compétences qui font la différence au quotidien.",
    descEn: "Emotional intelligence, assertive communication, stress management. Skills that make a real difference.",
    img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80',
    accent: '#EF4444',
  },
]

function FormationCard({ f, index, lang }: { f: Formation; index: number; lang: string }) {
  const [hovered, setHovered] = useState(false)
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setTimeout(() => setVisible(true), index * 100) } },
      { threshold: 0.1 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [index])

  const title = lang === 'en' ? f.titleEn : f.title
  const desc  = lang === 'en' ? f.descEn  : f.desc

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative rounded-2xl overflow-hidden cursor-pointer"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(32px)',
        transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${index * 0.08}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${index * 0.08}s`,
        boxShadow: hovered
          ? `0 20px 60px -10px ${f.accent}35, 0 8px 24px -4px #1A2B4A18`
          : '0 4px 24px -4px #1A2B4A12',
        border: `1px solid ${hovered ? f.accent + '40' : '#E5EAF3'}`,
      }}
    >
      {/* Background photo */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
        style={{
          backgroundImage: `url(${f.img})`,
          transform: hovered ? 'scale(1.07)' : 'scale(1)',
        }}
      />
      {/* Dark overlay */}
      <div
        className="absolute inset-0 transition-all duration-500"
        style={{
          background: hovered
            ? `linear-gradient(160deg, ${f.accent}22 0%, rgba(15,23,42,0.82) 50%)`
            : 'linear-gradient(160deg, rgba(15,23,42,0.55) 0%, rgba(15,23,42,0.80) 100%)',
        }}
      />

      {/* Accent glow on hover */}
      <div
        className="absolute inset-x-0 bottom-0 h-1 transition-all duration-500"
        style={{
          background: `linear-gradient(90deg, transparent, ${f.accent}, transparent)`,
          opacity: hovered ? 1 : 0,
        }}
      />

      {/* Content */}
      <div className="relative p-6 flex flex-col justify-between min-h-[300px] md:min-h-[340px]">
        {/* Tag */}
        <div>
          <span
            className="inline-block text-[11px] font-bold tracking-widest uppercase px-3 py-1 rounded-full transition-all duration-300"
            style={{
              background: hovered ? f.accent : 'rgba(255,255,255,0.15)',
              color: hovered ? '#fff' : 'rgba(255,255,255,0.9)',
              backdropFilter: 'blur(8px)',
              boxShadow: hovered ? `0 0 12px ${f.accent}60` : 'none',
            }}
          >
            {f.tag}
          </span>
        </div>

        {/* Bottom content */}
        <div className="space-y-3">
          <h3
            className="text-xl md:text-2xl font-bold text-white leading-snug"
            style={{ textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}
          >
            {title}
          </h3>
          <p
            className="text-sm text-white/75 leading-relaxed transition-all duration-500"
            style={{
              maxHeight: hovered ? '120px' : '0px',
              opacity: hovered ? 1 : 0,
              overflow: 'hidden',
            }}
          >
            {desc}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-xs font-semibold text-white/80 hover:text-white transition-colors group"
          >
            <span
              className="transition-all duration-300"
              style={{ color: hovered ? f.accent : 'rgba(255,255,255,0.7)' }}
            >
              Me contacter →
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Formations() {
  const { t, lang } = useLang()

  return (
    <section id="formations" className="py-24 md:py-32 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #EBF0F8 0%, #F5F7FB 100%)' }}>
      <style>{STYLES}</style>

      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #1A2B4A 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Section accent line top */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#3D6DB8]/40 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#3D6DB8] mb-3">
            {t.formations?.label || 'FORMATIONS'}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A2B4A] mb-4">
            {t.formations?.title || 'Des programmes adaptés à vos équipes'}
          </h2>
          <p className="text-[#1A2B4A]/55 max-w-lg mx-auto text-base">
            {t.formations?.subtitle || 'Opérationnels, bilingues et adaptés à votre contexte. Chaque module est personnalisable.'}
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FORMATIONS.map((f, i) => (
            <FormationCard key={f.tag} f={f} index={i} lang={lang || 'fr'} />
          ))}
        </div>
      </div>
    </section>
  )
}
