'use client'
import { useEffect, useRef, useState } from 'react'
import { useLang } from './LanguageContext'

// ─── Scroll-reveal hook ────────────────────────────────────────────────────────
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') { setInView(true); return }
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect() } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, inView }
}

// ─── Step icons ────────────────────────────────────────────────────────────────
const ICONS = [
  // 01 — Téléphone / échange
  <svg key="phone" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>,
  // 02 — Loupe / diagnostic
  <svg key="search" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
  </svg>,
  // 03 — Fusée / déploiement
  <svg key="rocket" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>,
  // 04 — Graphique / suivi
  <svg key="chart" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>,
]

// ─── Step data ─────────────────────────────────────────────────────────────────
const STEPS_FR = [
  {
    number: '01',
    title: 'Échange de cadrage',
    desc: "Un appel de 30 minutes pour comprendre votre contexte, vos enjeux et ce que vous voulez changer concrètement.",
    badge: '30 min',
    detail: 'Sans engagement',
  },
  {
    number: '02',
    title: 'Diagnostic & proposition',
    desc: "J'analyse vos besoins et vous propose un programme sur-mesure : format, durée, objectifs mesurables.",
    badge: '2–3 jours',
    detail: 'Devis sur-mesure',
  },
  {
    number: '03',
    title: 'Déploiement',
    desc: "Les sessions se déroulent en présentiel ou à distance. Chaque module est adapté à vos équipes en temps réel.",
    badge: 'Présentiel / Distanciel',
    detail: 'France entière',
  },
  {
    number: '04',
    title: 'Debriefing & suivi',
    desc: "Un bilan post-formation avec indicateurs concrets. Je reste disponible pour ancrer les acquis dans la durée.",
    badge: 'Suivi inclus',
    detail: '3 mois d\'accompagnement',
  },
]

const STEPS_EN = [
  {
    number: '01',
    title: 'Discovery call',
    desc: "A 30-minute call to understand your context, your challenges, and what you want to concretely change.",
    badge: '30 min',
    detail: 'No commitment',
  },
  {
    number: '02',
    title: 'Diagnosis & proposal',
    desc: "I analyze your needs and propose a tailored program: format, duration, measurable objectives.",
    badge: '2–3 days',
    detail: 'Custom quote',
  },
  {
    number: '03',
    title: 'Delivery',
    desc: "Sessions run in person or remotely. Each module is adapted to your teams in real time.",
    badge: 'In-person / Remote',
    detail: 'All of France',
  },
  {
    number: '04',
    title: 'Debrief & follow-up',
    desc: "A post-training review with concrete indicators. I stay available to anchor the learnings over time.",
    badge: 'Follow-up included',
    detail: '3 months support',
  },
]

// ─── Color palette per step ────────────────────────────────────────────────────
const PALETTE = [
  { accent: '#3D6DB8', glow: 'rgba(61,109,184,0.18)', light: '#EEF4FF', border: 'rgba(61,109,184,0.25)' },
  { accent: '#5B54D4', glow: 'rgba(91,84,212,0.18)',  light: '#EEECFF', border: 'rgba(91,84,212,0.25)' },
  { accent: '#8B3DB8', glow: 'rgba(139,61,184,0.18)', light: '#F4EEFF', border: 'rgba(139,61,184,0.25)' },
  { accent: '#1A2B4A', glow: 'rgba(26,43,74,0.15)',   light: '#EEF2F8', border: 'rgba(26,43,74,0.20)'  },
]

// ─── Single step card ──────────────────────────────────────────────────────────
function StepCard({
  step,
  index,
  inView,
}: {
  step: typeof STEPS_FR[0]
  index: number
  inView: boolean
}) {
  const { accent, glow, light, border } = PALETTE[index]

  return (
    <div
      className="relative flex flex-col"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(32px)',
        transition: `opacity 0.65s ease ${index * 120}ms, transform 0.65s ease ${index * 120}ms`,
      }}
    >
      {/* Card */}
      <div
        className="group relative flex-1 bg-white rounded-2xl p-7 cursor-default"
        style={{
          border: `1px solid ${border}`,
          boxShadow: `0 2px 16px ${glow}, 0 1px 4px rgba(0,0,0,0.04)`,
          transition: 'transform 0.25s ease, box-shadow 0.25s ease',
        }}
        onMouseEnter={e => {
          const el = e.currentTarget as HTMLElement
          el.style.transform = 'translateY(-4px)'
          el.style.boxShadow = `0 12px 32px ${glow}, 0 2px 8px rgba(0,0,0,0.06)`
        }}
        onMouseLeave={e => {
          const el = e.currentTarget as HTMLElement
          el.style.transform = 'translateY(0)'
          el.style.boxShadow = `0 2px 16px ${glow}, 0 1px 4px rgba(0,0,0,0.04)`
        }}
      >
        {/* Colored top bar */}
        <div
          className="absolute top-0 left-6 right-6 h-0.5 rounded-full"
          style={{ background: `linear-gradient(90deg, ${accent}, transparent)` }}
        />

        {/* Number watermark */}
        <span
          className="absolute top-4 right-5 text-6xl font-black leading-none select-none pointer-events-none"
          style={{ color: accent, opacity: 0.07, fontVariantNumeric: 'tabular-nums' }}
        >
          {step.number}
        </span>

        {/* Icon circle */}
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
          style={{ background: light, color: accent }}
        >
          {ICONS[index]}
        </div>

        {/* Badge pills */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span
            className="inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-full"
            style={{ background: light, color: accent }}
          >
            {step.badge}
          </span>
          <span className="inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-full bg-[#F5F7FB] text-[#6B7E95]">
            {step.detail}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base font-bold text-[#1A2B4A] mb-2 leading-snug">
          {step.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-[#6B7E95] leading-relaxed">
          {step.desc}
        </p>
      </div>
    </div>
  )
}

// ─── Animated connector arrow ──────────────────────────────────────────────────
function Connector({ inView, index }: { inView: boolean; index: number }) {
  return (
    <div
      className="hidden lg:flex items-center justify-center self-start mt-[3.75rem] shrink-0 w-8"
      style={{
        opacity: inView ? 1 : 0,
        transition: `opacity 0.5s ease ${index * 120 + 300}ms`,
      }}
    >
      <svg width="32" height="16" viewBox="0 0 32 16" fill="none">
        <defs>
          <linearGradient id={`arr-${index}`} x1="0" y1="0" x2="32" y2="0">
            <stop offset="0%" stopColor={PALETTE[index].accent} stopOpacity="0.5" />
            <stop offset="100%" stopColor={PALETTE[index + 1]?.accent ?? PALETTE[index].accent} stopOpacity="0.8" />
          </linearGradient>
        </defs>
        <path
          d="M0 8 H24 M18 2 L28 8 L18 14"
          stroke={`url(#arr-${index})`}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}

// ─── Main component ────────────────────────────────────────────────────────────
export default function Process() {
  const { lang } = useLang()
  const steps = lang === 'fr' ? STEPS_FR : STEPS_EN
  const { ref, inView } = useInView(0.1)

  return (
    <section className="py-20 md:py-28 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #ffffff 0%, #F0F4FB 100%)' }}>

      {/* Subtle background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#3D6DB8]/4 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Header */}
        <div
          className="text-center max-w-xl mx-auto mb-16"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
          ref={ref}
        >
          <p className="text-xs font-semibold text-[#3D6DB8] uppercase tracking-widest mb-3">
            {lang === 'fr' ? 'Comment ça marche' : 'How it works'}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A2B4A] leading-tight mb-4">
            {lang === 'fr'
              ? "De l'intention à l'impact, en 4 étapes"
              : 'From intention to impact, in 4 steps'}
          </h2>
          <p className="text-sm text-[#6B7E95] leading-relaxed">
            {lang === 'fr'
              ? "Un premier appel de 30 minutes suffit pour démarrer. Le reste se construit avec vous."
              : "A first 30-minute call is enough to get started. The rest is built with you."}
          </p>
        </div>

        {/* Progress line (desktop only) */}
        <div className="hidden lg:block relative mb-3 mx-[calc(12.5%+16px)]">
          <div className="absolute top-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-[#3D6DB8]/20 via-[#8B3DB8]/20 to-[#1A2B4A]/10" />
          <div
            className="absolute top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-[#3D6DB8] via-[#8B3DB8] to-[#1A2B4A]"
            style={{
              width: inView ? '100%' : '0%',
              transition: 'width 1.2s cubic-bezier(0.4,0,0.2,1) 200ms',
            }}
          />
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, i) => (
            <StepCard key={step.number} step={step} index={i} inView={inView} />
          ))}
        </div>

        {/* Mobile vertical timeline connector (visible only on small screens) */}
        <style>{`
          @media (max-width: 767px) {
            .process-timeline::before {
              content: '';
              position: absolute;
              left: 28px;
              top: 0;
              bottom: 0;
              width: 2px;
              background: linear-gradient(180deg, #3D6DB8, #8B3DB8, #1A2B4A);
              opacity: 0.15;
              border-radius: 9999px;
            }
          }
        `}</style>

        {/* CTA block */}
        <div
          className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity 0.65s ease 600ms, transform 0.65s ease 600ms',
          }}
        >
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#3D6DB8] text-white font-semibold px-7 py-3.5 rounded-full hover:bg-[#2D5A9E] hover:-translate-y-0.5 shadow-md hover:shadow-lg transition-all duration-200"
          >
            {lang === 'fr' ? 'Démarrer par un appel de 30 min' : 'Start with a 30-min call'}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <p className="text-xs text-[#6B7E95]">
            {lang === 'fr' ? 'Sans engagement · Réponse sous 24h' : 'No commitment · Reply within 24h'}
          </p>
        </div>

      </div>
    </section>
  )
}
