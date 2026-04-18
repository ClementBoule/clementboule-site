'use client'
import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'
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

// ─── DISC LOGO (inline SVG) ───────────────────────────────────────────────────
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

// ─── HERO COMPONENT ───────────────────────────────────────────────────────────
// Deux couches : normal (dessous) + wizard (dessus, révélé au curseur)
export default function Hero() {
  const { t } = useLang()
  const sectionRef = useRef<HTMLElement>(null)
  const [mouse, setMouse] = useState({ x: -9999, y: -9999 })
  const [isHovering, setIsHovering] = useState(false)
  const rafRef = useRef<number>(0)

  // Rayon du cercle de reveal en px
  const REVEAL_RADIUS = 180

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
    rafRef.current = requestAnimationFrame(() => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      setMouse({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    })
  }, [])

  const handleMouseEnter = useCallback(() => setIsHovering(true), [])
  const handleMouseLeave = useCallback(() => {
    setIsHovering(false)
    setMouse({ x: -9999, y: -9999 })
  }, [])

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    el.addEventListener('mousemove', handleMouseMove, { passive: true })
    el.addEventListener('mouseenter', handleMouseEnter)
    el.addEventListener('mouseleave', handleMouseLeave)
    return () => {
      el.removeEventListener('mousemove', handleMouseMove)
      el.removeEventListener('mouseenter', handleMouseEnter)
      el.removeEventListener('mouseleave', handleMouseLeave)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [handleMouseMove, handleMouseEnter, handleMouseLeave])

  // ── Clip-path pour la couche wizard ──
  const clipPath = isHovering
    ? `circle(${REVEAL_RADIUS}px at ${mouse.x}px ${mouse.y}px)`
    : `circle(0px at ${mouse.x}px ${mouse.y}px)`

  // ── Contenu partagé : blobs de fond ──
  const BackgroundBlobs = ({ wizard = false }: { wizard?: boolean }) => (
    <div className="absolute inset-0 pointer-events-none">
      {wizard ? (
        <>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-amber-400/18 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-indigo-500/15 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        </>
      ) : (
        <>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#6B9ED4]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-[#F5A98C]/18 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#B09FE5]/12 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        </>
      )}
    </div>
  )

  // ── Texte normal (couche dessous) ──
  const NormalText = () => (
    <div className="space-y-5">
      <FadeIn direction="left" delay={80}>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-none tracking-tight text-[#1A2B4A]">
          Clement Boule
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
          <a
            href="/test-disc"
            className="inline-flex items-center gap-3 border border-[#1A2B4A]/15 hover:border-[#3D6DB8]/30 bg-white/60 hover:bg-white font-medium px-5 py-3 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-lg group"
          >
            <DiscLogo size={80} />
            <span className="text-[#1A2B4A]/70 group-hover:text-[#1A2B4A] transition-colors">
              {t.hero.disc}
            </span>
          </a>
        </div>
      </FadeIn>

      <FadeIn direction="left" delay={560}>
        <div className="flex items-center gap-4 pt-2">
          <a
            href="https://www.linkedin.com/in/cl%C3%A9ment-boul%C3%A9/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-[#0A66C2] hover:text-[#004182] font-medium transition-colors"
          >
            <img
              src="/logos/linkedin.png"
              alt="LinkedIn"
              style={{ height: '20px', width: 'auto', objectFit: 'contain' }}
            />
            LinkedIn
          </a>
          <span className="text-[#1A2B4A]/20">|</span>
          <a
            href="https://www.malt.fr/profile/clementboule"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-[#FC5656] hover:text-[#E03E3E] font-medium transition-colors"
          >
            <img
              src="/logos/malt.png"
              alt="Malt"
              style={{ height: '20px', width: 'auto', objectFit: 'contain' }}
            />
            Malt
          </a>
        </div>
      </FadeIn>
    </div>
  )

  // ── Texte wizard (couche dessus, révélé) ──
  const WizardText = () => (
    <div className="space-y-5">
      <div>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-amber-500 to-indigo-600">
          Clément Boulé
        </h1>
      </div>

      <div>
        <p className="text-xl md:text-2xl font-semibold text-purple-500">
          Sorcier Formateur · Lvl 32
        </p>
      </div>

      <div>
        <p className="text-base text-purple-400/80 leading-relaxed max-w-md pt-1">
          Maître en arts comportementaux et sciences de la communication.
          Spécialisé en sorts DISC, enchantements d'équipe et potions de leadership.
        </p>
      </div>

      <div>
        <div className="flex flex-wrap items-center gap-4 pt-3">
          <a
            href="/test-disc"
            className="inline-flex items-center gap-3 border border-purple-400/30 bg-purple-500/10 hover:bg-purple-500/20 font-medium px-5 py-3 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-purple-500/20 group"
          >
            <DiscLogo size={80} />
            <span className="text-purple-300 group-hover:text-purple-100 transition-colors">
              Lancer le sortilège DISC
            </span>
          </a>
        </div>
      </div>

      <div>
        <div className="flex items-center gap-3 pt-2">
          <span className="text-xs font-mono text-purple-400/60 bg-purple-500/10 px-3 py-1.5 rounded-full border border-purple-500/20">
            +2 500 XP en accompagnement
          </span>
          <span className="text-xs font-mono text-amber-400/60 bg-amber-500/10 px-3 py-1.5 rounded-full border border-amber-500/20">
            Guilde des Formateurs
          </span>
        </div>
      </div>
    </div>
  )

  // ── Illustration normale ──
  const NormalIllustration = () => (
    <FadeIn direction="right" delay={150} className="relative flex justify-center md:justify-end">
      <div className="relative w-80 h-[420px] md:w-96 md:h-[520px]">
        <Image
          src="/clement-illustration.png"
          alt="Clément Boulé — illustration portrait"
          fill
          className="object-contain object-center"
          priority
        />
      </div>

      {/* Decorative dot grid */}
      <div
        className="absolute -bottom-6 -right-6 w-32 h-32 opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle, #3D6DB8 1px, transparent 1px)',
          backgroundSize: '12px 12px',
        }}
      />
    </FadeIn>
  )

  // ── Illustration wizard ──
  const WizardIllustration = () => (
    <div className="relative flex justify-center md:justify-end">
      <div className="relative w-80 h-[420px] md:w-96 md:h-[520px]">
        <Image
          src="/mage-illustration.png"
          alt="Clément Boulé — Sorcier Formateur"
          fill
          className="object-contain object-center"
          priority
        />
      </div>

      {/* Decorative sparkles */}
      <div
        className="absolute -bottom-6 -right-6 w-32 h-32 opacity-40"
        style={{
          backgroundImage: 'radial-gradient(circle, #A855F7 1.5px, transparent 1.5px)',
          backgroundSize: '14px 14px',
        }}
      />
    </div>
  )

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ cursor: 'crosshair' }}
    >
      {/* ═══ COUCHE NORMALE (dessous) ═══ */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F5F7FB] via-[#EEF3FA] to-[#F5F0FB]">
        <BackgroundBlobs />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-20 z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <NormalText />
          <NormalIllustration />
        </div>
      </div>

      {/* ═══ COUCHE WIZARD (dessus, clip-path reveal) ═══ */}
      <div
        className="absolute inset-0 z-20 pointer-events-none"
        style={{
          clipPath,
          transition: isHovering
            ? 'clip-path 0.08s ease-out'
            : 'clip-path 0.4s ease-in',
        }}
      >
        {/* Fond wizard sombre */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F0A1E] via-[#1A1035] to-[#0D1525]">
          <BackgroundBlobs wizard />
        </div>

        {/* Contenu wizard positionné identiquement */}
        <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-20 min-h-screen flex flex-col justify-center">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <WizardText />
            <WizardIllustration />
          </div>
        </div>

        {/* Anneau lumineux au bord du cercle */}
        {isHovering && (
          <div
            className="absolute pointer-events-none"
            style={{
              left: mouse.x - REVEAL_RADIUS - 4,
              top: mouse.y - REVEAL_RADIUS - 4,
              width: (REVEAL_RADIUS + 4) * 2,
              height: (REVEAL_RADIUS + 4) * 2,
              borderRadius: '50%',
              border: '2px solid rgba(168, 85, 247, 0.4)',
              boxShadow: '0 0 30px rgba(168, 85, 247, 0.15), inset 0 0 30px rgba(168, 85, 247, 0.08)',
              transition: 'opacity 0.3s',
            }}
          />
        )}
      </div>

      {/* Scroll indicator */}
      <FadeIn
        delay={900}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#9AAABB] animate-bounce z-30"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </FadeIn>
    </section>
  )
}
