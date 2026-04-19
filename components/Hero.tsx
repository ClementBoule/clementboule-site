'use client'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { useLang } from './LanguageContext'

// ─── FADE-IN ANIMATION ────────────────────────────────────────────────────────
function FadeIn({
  children,
  delay = 0,
  direction = 'up',
  className = '',
}: {
  children: React.ReactNode
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'down'
  className?: string
}) {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay)
    return () => clearTimeout(t)
  }, [delay])

  const transition =
    'opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)'
  const hidden =
    direction === 'left'
      ? { opacity: 0, transform: 'translateX(-40px)', transition }
      : direction === 'right'
      ? { opacity: 0, transform: 'translateX(40px)', transition }
      : direction === 'down'
      ? { opacity: 0, transform: 'translateY(-24px)', transition }
      : { opacity: 0, transform: 'translateY(24px)', transition }
  const shown = { opacity: 1, transform: 'none', transition }

  return (
    <div className={className} style={visible ? shown : hidden}>
      {children}
    </div>
  )
}

// ─── DISC LOGO (inline SVG) ──────────────────────────────────────────────────
function DiscLogo({ size = 120 }: { size?: number }) {
  const s = size
  const tileW = s * 0.23
  const tileH = s * 0.23
  const gap = s * 0.04
  const r = s * 0.04

  const tiles = [
    { x: 0, y: s * 0.06, w: tileW, h: tileH, fill: '#DC2626', letter: 'D', rot: -3 },
    { x: tileW + gap, y: 0, w: tileW * 1.06, h: tileH * 1.08, fill: '#EAB308', letter: 'I', rot: 2 },
    { x: (tileW + gap) * 2, y: s * 0.04, w: tileW, h: tileH, fill: '#16A34A', letter: 'S', rot: -2 },
    { x: (tileW + gap) * 3, y: s * 0.08, w: tileW * 0.97, h: tileH * 0.95, fill: '#2563EB', letter: 'C', rot: 3 },
  ]

  return (
    <svg
      width={s}
      height={s * 0.35}
      viewBox={`0 0 ${s} ${s * 0.35}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {tiles.map((t, i) => (
        <g key={i} transform={`rotate(${t.rot} ${t.x + t.w / 2} ${t.y + t.h / 2})`}>
          <rect x={t.x} y={t.y} width={t.w} height={t.h} rx={r} fill={t.fill} />
          <text
            x={t.x + t.w / 2}
            y={t.y + t.h * 0.68}
            textAnchor="middle"
            fill="white"
            fontSize={t.h * 0.55}
            fontWeight="bold"
            fontFamily="Arial, Helvetica, sans-serif"
          >
            {t.letter}
          </text>
        </g>
      ))}
    </svg>
  )
}

// ─── DISC SPARKS (4 particules aux couleurs DISC en orbite) ──────────────────
function DiscSparks() {
  return (
    <span aria-hidden className="disc-sparks pointer-events-none absolute inset-0 overflow-visible">
      <span className="disc-spark disc-spark-d" />
      <span className="disc-spark disc-spark-i" />
      <span className="disc-spark disc-spark-s" />
      <span className="disc-spark disc-spark-c" />
      <style jsx>{`
        .disc-spark {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 6px;
          height: 6px;
          border-radius: 9999px;
          transform-origin: 0 0;
          opacity: 0;
          filter: blur(0.3px);
          animation-play-state: var(--hero-anim-state, running);
        }
        .disc-spark-d {
          background: radial-gradient(circle, #F87171 0%, #DC2626 55%, transparent 85%);
          box-shadow: 0 0 8px rgba(220, 38, 38, 0.8), 0 0 14px rgba(220, 38, 38, 0.4);
          animation: disc-orbit 4.2s linear infinite;
        }
        .disc-spark-i {
          background: radial-gradient(circle, #FDE047 0%, #EAB308 55%, transparent 85%);
          box-shadow: 0 0 8px rgba(234, 179, 8, 0.8), 0 0 14px rgba(234, 179, 8, 0.4);
          animation: disc-orbit 5.2s linear infinite;
          animation-delay: -1.3s;
        }
        .disc-spark-s {
          background: radial-gradient(circle, #4ADE80 0%, #16A34A 55%, transparent 85%);
          box-shadow: 0 0 8px rgba(22, 163, 74, 0.8), 0 0 14px rgba(22, 163, 74, 0.4);
          animation: disc-orbit 4.6s linear infinite;
          animation-delay: -2.3s;
        }
        .disc-spark-c {
          background: radial-gradient(circle, #60A5FA 0%, #2563EB 55%, transparent 85%);
          box-shadow: 0 0 8px rgba(37, 99, 235, 0.8), 0 0 14px rgba(37, 99, 235, 0.4);
          animation: disc-orbit 5.6s linear infinite;
          animation-delay: -3.4s;
        }
        @keyframes disc-orbit {
          0% {
            transform: translate(-50%, -50%) rotate(0deg) translateX(75px) rotate(0deg) scale(0.6);
            opacity: 0;
          }
          8% { opacity: 1; }
          50% { transform: translate(-50%, -50%) rotate(180deg) translateX(105px) rotate(-180deg) scale(1); }
          92% { opacity: 1; }
          100% {
            transform: translate(-50%, -50%) rotate(360deg) translateX(75px) rotate(-360deg) scale(0.6);
            opacity: 0;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .disc-spark { animation: none !important; opacity: 0.55; }
          .disc-spark-d { transform: translate(-50%, -50%) translateX(90px) translateY(0); }
          .disc-spark-i { transform: translate(-50%, -50%) translateX(0) translateY(-40px); }
          .disc-spark-s { transform: translate(-50%, -50%) translateX(-90px) translateY(0); }
          .disc-spark-c { transform: translate(-50%, -50%) translateX(0) translateY(40px); }
        }
      `}</style>
    </span>
  )
}

// ─── MAGIC REVEAL TOGGLE (toutes tailles d'écran) ────────────────────────────
// Bouton élégant et magique : halo doré pulsant + 6 étincelles orbitales + baguette.
// Click pour basculer entre version pro et version sorcier.
function MagicToggle({
  active,
  onToggle,
  label,
}: {
  active: boolean
  onToggle: () => void
  label: string
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      aria-label={active ? 'Revenir à la version pro' : label}
      onClick={onToggle}
      className="magic-toggle group relative inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-white/85 backdrop-blur-sm border-2 border-[#C9A55C]/50 shadow-lg active:scale-95 hover:scale-[1.03] transition-transform duration-200 pointer-events-auto"
      style={{
        boxShadow: active
          ? '0 0 0 2px #C9A55C66, 0 10px 32px -6px #C9A55Caa, 0 0 50px -10px #F2D27Cbb'
          : '0 0 0 2px #C9A55C40, 0 8px 24px -6px #C9A55C80, 0 0 40px -12px #F2D27Caa',
      }}
    >
      {/* Halo pulsant doré */}
      <span
        aria-hidden
        className="magic-halo pointer-events-none absolute -inset-2 rounded-full"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(242, 210, 124, 0.55) 0%, rgba(201, 165, 92, 0.25) 40%, rgba(201, 165, 92, 0) 75%)',
        }}
      />

      {/* 6 étincelles orbitales */}
      <span aria-hidden className="pointer-events-none absolute inset-0">
        <span className="magic-spark magic-spark-1" />
        <span className="magic-spark magic-spark-2" />
        <span className="magic-spark magic-spark-3" />
        <span className="magic-spark magic-spark-4" />
        <span className="magic-spark magic-spark-5" />
        <span className="magic-spark magic-spark-6" />
      </span>

      {/* Icône baguette magique */}
      <svg
        className="relative w-6 h-6 text-[#B88A2F] shrink-0 drop-shadow-sm"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden
      >
        <path d="M4 20L16 8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M17 3l.9 2.1L20 6l-2.1.9L17 9l-.9-2.1L14 6l2.1-.9L17 3z" fill="currentColor" />
        <path d="M6 13l.5 1.2L7.7 14.7l-1.2.5L6 16.4l-.5-1.2L4.3 14.7l1.2-.5L6 13z" fill="currentColor" opacity="0.75" />
      </svg>

      <span className="relative text-sm font-semibold text-[#5A3E0E] tracking-tight">
        {active ? 'Version pro' : label}
      </span>

      <style jsx>{`
        .magic-halo {
          animation: magic-pulse 2.4s ease-in-out infinite;
          animation-play-state: var(--hero-anim-state, running);
        }
        .magic-spark {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 6px;
          height: 6px;
          border-radius: 9999px;
          background: radial-gradient(circle, #FEF3C7 0%, #F2D27C 40%, #C9A55C 75%, transparent 100%);
          box-shadow: 0 0 10px rgba(242, 210, 124, 1), 0 0 18px rgba(201, 165, 92, 0.6);
          transform-origin: 0 0;
          opacity: 0;
          animation-play-state: var(--hero-anim-state, running);
        }
        .magic-spark-1 { animation: magic-orbit 3.4s linear infinite; }
        .magic-spark-2 { animation: magic-orbit 4.2s linear infinite; animation-delay: -0.8s; width: 5px; height: 5px; }
        .magic-spark-3 { animation: magic-orbit 4.8s linear infinite; animation-delay: -1.6s; }
        .magic-spark-4 { animation: magic-orbit 3.8s linear infinite; animation-delay: -2.3s; width: 4px; height: 4px; }
        .magic-spark-5 { animation: magic-orbit 5.2s linear infinite; animation-delay: -3.0s; }
        .magic-spark-6 { animation: magic-orbit 4.4s linear infinite; animation-delay: -3.7s; width: 5px; height: 5px; }
        @keyframes magic-pulse {
          0%, 100% { opacity: 0.55; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.08); }
        }
        @keyframes magic-orbit {
          0% { transform: translate(-50%, -50%) rotate(0deg) translateX(58px) rotate(0deg) scale(0.7); opacity: 0; }
          8% { opacity: 1; }
          50% { transform: translate(-50%, -50%) rotate(180deg) translateX(85px) rotate(-180deg) scale(1.1); }
          92% { opacity: 1; }
          100% { transform: translate(-50%, -50%) rotate(360deg) translateX(58px) rotate(-360deg) scale(0.7); opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .magic-halo, .magic-spark { animation: none !important; }
          .magic-spark { opacity: 0.65; }
        }
      `}</style>
    </button>
  )
}

// ─── HERO COMPONENT ──────────────────────────────────────────────────────────
// Reveal SORCIER : déclenché au clic sur MagicToggle (PC + mobile, UX unifiée).
// Pas de tracking curseur (réduit cognitive overload + plus pro).
// Animations CSS pausées quand le hero sort du viewport (perf Core Web Vitals).
export default function Hero() {
  const { t } = useLang()
  const sectionRef = useRef<HTMLElement>(null)
  const [revealed, setRevealed] = useState(false)
  const [fabVisible, setFabVisible] = useState(true)

  // Sur mobile, cacher le FAB mage quand user scroll hors du hero
  useEffect(() => {
    const onScroll = () => {
      setFabVisible(window.scrollY < window.innerHeight * 0.8)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Pause les animations CSS quand le hero n'est plus visible (perf)
  useEffect(() => {
    const el = sectionRef.current
    if (!el || typeof IntersectionObserver === 'undefined') return
    const io = new IntersectionObserver(
      ([entry]) => {
        el.style.setProperty('--hero-anim-state', entry.isIntersecting ? 'running' : 'paused')
      },
      { threshold: 0.01 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-br from-[#F5F7FB] via-[#EEF3FA] to-[#F5F0FB]"
    >
      {/* Background blobs (partagés) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#6B9ED4]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-[#F5A98C]/18 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#B09FE5]/12 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* ═══ COUCHE PRO (visible quand revealed=false) ═══ */}
      <div
        className="relative max-w-6xl mx-auto px-6 pt-28 pb-24 w-full min-h-screen flex flex-col justify-center"
        style={{
          clipPath: revealed ? 'inset(0 100% 0 0)' : undefined,
          transition: 'clip-path 0.55s cubic-bezier(0.65, 0, 0.35, 1)',
        }}
      >
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Texte pro */}
          <div className="space-y-5">
            <FadeIn direction="left" delay={80}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-none tracking-tight text-[#1A2B4A]">
                Clément Boulé
              </h1>
            </FadeIn>
            <FadeIn direction="left" delay={200}>
              <p className="text-xl md:text-2xl font-semibold text-[#3D6DB8]">
                {t.hero.badge}
              </p>
            </FadeIn>
            <FadeIn direction="left" delay={320}>
              <p className="text-base text-[#6B7E95] leading-relaxed max-w-md pt-1">
                {t.hero.subtitle}
              </p>
            </FadeIn>
            <FadeIn direction="left" delay={440}>
              <div className="flex flex-wrap items-center gap-4 pt-3">
                <span className="relative inline-flex">
                  <DiscSparks />
                  <a
                    href="/test-disc"
                    className="relative z-10 inline-flex items-center gap-3 border border-[#1A2B4A]/15 hover:border-[#3D6DB8]/30 bg-white/70 hover:bg-white font-medium px-5 py-3 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-lg group"
                  >
                    <DiscLogo size={80} />
                    <span className="text-[#1A2B4A]/70 group-hover:text-[#1A2B4A] transition-colors">
                      {t.hero.disc}
                    </span>
                  </a>
                </span>
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={560}>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="https://www.linkedin.com/in/cl%C3%A9ment-boul%C3%A9/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[#0A66C2] hover:text-[#004182] font-medium transition-colors"
                >
                  <img src="/logos/linkedin.png" alt="LinkedIn" style={{ height: '20px', width: 'auto', objectFit: 'contain' }} />
                  LinkedIn
                </a>
                <span className="text-[#1A2B4A]/20">|</span>
                <a
                  href="https://www.malt.fr/profile/clementboule"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[#FC5656] hover:text-[#E03E3E] font-medium transition-colors"
                >
                  <img src="/logos/malt.png" alt="Malt" style={{ height: '20px', width: 'auto', objectFit: 'contain' }} />
                  Malt
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Illustration pro */}
          <FadeIn direction="right" delay={150} className="relative flex justify-center md:justify-end">
            <div className="relative w-[22rem] h-[480px] md:w-[30rem] md:h-[620px]">
              <Image
                src="/clement-illustration.png"
                alt="Clément Boulé — illustration portrait"
                fill
                className="object-contain object-center"
                priority
              />
            </div>
            <div
              className="absolute -bottom-6 -right-6 w-32 h-32 opacity-30 hidden md:block"
              style={{
                backgroundImage: 'radial-gradient(circle, #3D6DB8 1px, transparent 1px)',
                backgroundSize: '12px 12px',
              }}
            />
          </FadeIn>
        </div>
      </div>

      {/* ═══ COUCHE SORCIER (visible quand revealed=true) ═══ */}
      <div
        className="absolute inset-0"
        style={{
          clipPath: revealed ? 'inset(0 0 0 0)' : 'inset(0 0 0 100%)',
          transition: 'clip-path 0.55s cubic-bezier(0.65, 0, 0.35, 1)',
          pointerEvents: revealed ? 'auto' : 'none',
        }}
      >
        {/* Teinte légèrement plus chaude pour le côté sorcier */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FBF5F5] via-[#F5EEF3] to-[#F0EBF5] pointer-events-none" />

        {/* Blobs légèrement teintés */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#B09FE5]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-[#E5A98C]/18 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#9FB0E5]/15 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        </div>

        {/* Contenu sorcier (même layout que pro) */}
        <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-24 w-full min-h-screen flex flex-col justify-center">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Texte sorcier */}
            <div className="space-y-5">
              <FadeIn direction="left" delay={80}>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-none tracking-tight text-[#2D1A4A]">
                  Clément Boulé
                </h1>
              </FadeIn>
              <FadeIn direction="left" delay={200}>
                <p className="text-xl md:text-2xl font-semibold text-[#7B3DB8]">
                  Sorcier Formateur · Lvl 32
                </p>
              </FadeIn>
              <FadeIn direction="left" delay={320}>
                <p className="text-base text-[#6B5E7E] leading-relaxed max-w-md pt-1">
                  Maître en arts comportementaux et sciences de la communication.
                  Spécialisé en sorts DISC, enchantements d'équipe et potions de leadership.
                </p>
              </FadeIn>
              <FadeIn direction="left" delay={440}>
                <div className="flex flex-wrap items-center gap-4 pt-3">
                  <span className="relative inline-flex">
                    <DiscSparks />
                    <a
                      href="/test-disc"
                      className="relative z-10 inline-flex items-center gap-3 border border-[#7B3DB8]/25 hover:border-[#7B3DB8]/50 bg-white/70 hover:bg-white font-medium px-5 py-3 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-lg group"
                    >
                      <DiscLogo size={80} />
                      <span className="text-[#2D1A4A]/75 group-hover:text-[#2D1A4A] transition-colors">
                        Lancer le sortilège DISC
                      </span>
                    </a>
                  </span>
                </div>
              </FadeIn>
              <FadeIn direction="left" delay={560}>
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href="https://www.linkedin.com/in/cl%C3%A9ment-boul%C3%A9/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-medium text-[#7B3DB8]/80 hover:text-[#7B3DB8] bg-[#7B3DB8]/8 hover:bg-[#7B3DB8]/14 px-3 py-1.5 rounded-full border border-[#7B3DB8]/20 hover:border-[#7B3DB8]/40 transition-colors"
                  >
                    <img src="/logos/linkedin.png" alt="" style={{ height: '14px', width: 'auto', objectFit: 'contain' }} />
                    +2 500 XP en accompagnement
                  </a>
                  <a
                    href="https://www.malt.fr/profile/clementboule"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-medium text-[#B8843D]/80 hover:text-[#B8843D] bg-[#B8843D]/8 hover:bg-[#B8843D]/14 px-3 py-1.5 rounded-full border border-[#B8843D]/20 hover:border-[#B8843D]/40 transition-colors"
                  >
                    <img src="/logos/malt.png" alt="" style={{ height: '14px', width: 'auto', objectFit: 'contain' }} />
                    Guilde des Aventuriers
                  </a>
                </div>
              </FadeIn>
            </div>

            {/* Illustration sorcier */}
            <FadeIn direction="right" delay={150} className="relative flex justify-center md:justify-end">
              <div className="relative w-[22rem] h-[480px] md:w-[30rem] md:h-[620px]">
                <Image
                  src="/mage-illustration.png"
                  alt="Clément Boulé — Sorcier Formateur"
                  fill
                  className="object-contain object-center"
                  priority
                />
              </div>
              <div
                className="absolute -bottom-6 -right-6 w-32 h-32 opacity-30 hidden md:block"
                style={{
                  backgroundImage: 'radial-gradient(circle, #7B3DB8 1px, transparent 1px)',
                  backgroundSize: '12px 12px',
                }}
              />
            </FadeIn>
          </div>
        </div>
      </div>

      {/* ═══ BOUTON MAGIQUE (toutes tailles d'écran : reveal en clic) ═══ */}
      <FadeIn
        delay={700}
        className={`fixed bottom-24 right-6 md:absolute md:top-24 md:right-auto md:left-1/2 md:bottom-auto md:-translate-x-1/2 z-40 pointer-events-auto transition-opacity duration-500 ${fabVisible ? 'opacity-100' : 'opacity-0 pointer-events-none md:opacity-100 md:pointer-events-auto'}`}
      >
        <MagicToggle
          active={revealed}
          onToggle={() => setRevealed((v) => !v)}
          label="Révéler le sorcier"
        />
      </FadeIn>

      {/* Scroll indicator */}
      <FadeIn
        delay={900}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#9AAABB] animate-bounce z-30"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </FadeIn>
    </section>
  )
}
