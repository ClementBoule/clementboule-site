'use client'
import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useLang } from './LanguageContext'

// âââ FADE-IN ANIMATION ââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
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

// âââ DISC LOGO (inline SVG) ââââââââââââââââââââââââââââââââââââââââââââââââââ
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

// âââ HERO COMPONENT ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
// Effet balayage vertical : barre qui suit le curseur en X
// Ã gauche de la barre = version pro, Ã  droite = version sorcier
export default function Hero() {
  const { t } = useLang()
  const sectionRef = useRef<HTMLElement>(null)
  const [splitX, setSplitX] = useState<number | null>(null)
  const rafRef = useRef<number>(0)

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
    rafRef.current = requestAnimationFrame(() => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      setSplitX(e.clientX - rect.left)
    })
  }, [])

  const handleMouseLeave = useCallback(() => {
    setSplitX(null)
  }, [])

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    el.addEventListener('mousemove', handleMouseMove, { passive: true })
    el.addEventListener('mouseleave', handleMouseLeave)
    return () => {
      el.removeEventListener('mousemove', handleMouseMove)
      el.removeEventListener('mouseleave', handleMouseLeave)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [handleMouseMove, handleMouseLeave])

  const isRevealing = splitX !== null

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-br from-[#F5F7FB] via-[#EEF3FA] to-[#F5F0FB]"
    >
      {/* Background blobs (partagÃ©s) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#6B9ED4]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-[#F5A98C]/18 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#B09FE5]/12 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* âââ COUCHE PRO (visible par dÃ©faut, masquÃ©e Ã  droite de la barre) âââ */}
      <div
        className="relative max-w-6xl mx-auto px-6 pt-28 pb-20 w-full"
        style={
          isRevealing
            ? { clipPath: `inset(0 calc(100% - ${splitX}px) 0 0)` }
            : undefined
        }
      >
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Texte pro */}
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
            <div className="relative w-80 h-[420px] md:w-96 md:h-[520px]">
              <Image
                src="/clement-illustration.png"
                alt="ClÃ©ment BoulÃ© â illustration portrait"
                fill
                className="object-contain object-center"
                priority
              />
            </div>
            <div
              className="absolute -bottom-6 -right-6 w-32 h-32 opacity-30"
              style={{
                backgroundImage: 'radial-gradient(circle, #3D6DB8 1px, transparent 1px)',
                backgroundSize: '12px 12px',
              }}
            />
          </FadeIn>
        </div>
      </div>

      {/* âââ COUCHE SORCIER (masquÃ©e par dÃ©faut, visible Ã  droite de la barre) âââ */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          clipPath: isRevealing
            ? `inset(0 0 0 ${splitX}px)`
            : 'inset(0 0 0 100%)',
          transition: isRevealing ? 'none' : 'clip-path 0.4s ease-in',
        }}
      >
        {/* Teinte lÃ©gÃ¨rement plus chaude pour le cÃ´tÃ© sorcier */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FBF5F5] via-[#F5EEF3] to-[#F0EBF5] pointer-events-none" />

        {/* Blobs lÃ©gÃ¨rement teintÃ©s */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#B09FE5]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-[#E5A98C]/18 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#9FB0E5]/15 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        </div>

        {/* Contenu sorcier (mÃªme layout) */}
        <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-20 w-full min-h-screen flex flex-col justify-center">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Texte sorcier */}
            <div className="space-y-5">
              <div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-none tracking-tight text-[#2D1A4A]">
                  ClÃ©ment BoulÃ©
                </h1>
              </div>
              <div>
                <p className="text-xl md:text-2xl font-semibold text-[#7B3DB8]">
                  Sorcier Formateur Â· Lvl 32
                </p>
              </div>
              <div>
                <p className="text-base text-[#6B5E7E] leading-relaxed max-w-md pt-1">
                  MaÃ®tre en arts comportementaux et sciences de la communication.
                  SpÃ©cialisÃ© en sorts DISC, enchantements d'Ã©quipe et potions de leadership.
                </p>
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-4 pt-3">
                  <a
                    href="/test-disc"
                    className="inline-flex items-center gap-3 border border-[#7B3DB8]/20 bg-white/60 font-medium px-5 py-3 rounded-full"
                  >
                    <DiscLogo size={80} />
                    <span className="text-[#2D1A4A]/70">
                      Lancer le sortilÃ¨ge DISC
                    </span>
                  </a>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3 pt-2">
                  <span className="text-xs font-medium text-[#7B3DB8]/60 bg-[#7B3DB8]/8 px-3 py-1.5 rounded-full border border-[#7B3DB8]/15">
                    +2 500 XP en accompagnement
                  </span>
                  <span className="text-xs font-medium text-[#B8843D]/60 bg-[#B8843D]/8 px-3 py-1.5 rounded-full border border-[#B8843D]/15">
                    Guilde des Formateurs
                  </span>
                </div>
              </div>
            </div>

            {/* Illustration sorcier */}
            <div className="relative flex justify-center md:justify-end">
              <div className="relative w-80 h-[420px] md:w-96 md:h-[520px]">
                <Image
                  src="/mage-illustration.png"
                  alt="ClÃ©ment BoulÃ© â Sorcier Formateur"
                  fill
                  className="object-contain object-center"
                  priority
                />
              </div>
              <div
                className="absolute -bottom-6 -right-6 w-32 h-32 opacity-30"
                style={{
                  backgroundImage: 'radial-gradient(circle, #7B3DB8 1px, transparent 1px)',
                  backgroundSize: '12px 12px',
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* âââ BARRE DE SÃPARATION âââ */}
      {isRevealing && (
        <div
          className="absolute top-0 bottom-0 z-30 pointer-events-none"
          style={{
            left: `${splitX}px`,
            width: '2px',
            background: 'linear-gradient(180deg, transparent, rgba(123, 61, 184, 0.3) 20%, rgba(123, 61, 184, 0.3) 80%, transparent)',
          }}
        />
      )}

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
