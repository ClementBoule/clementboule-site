'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useLang } from './LanguageContext'

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

  const transition = 'opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)'
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

/* Inline DISC logo matching the user's image style: 4 tilted rounded tiles */
function DiscLogo({ size = 120 }: { size?: number }) {
  const s = size
  const tileW = s * 0.23
  const tileH = s * 0.23
  const gap = s * 0.04
  const r = s * 0.04

  const tiles = [
    { x: 0, y: s*0.06, w: tileW, h: tileH, fill: '#DC2626', letter: 'D', rot: -3 },
    { x: tileW + gap, y: 0, w: tileW*1.06, h: tileH*1.08, fill: '#EAB308', letter: 'I', rot: 2 },
    { x: (tileW + gap)*2, y: s*0.04, w: tileW, h: tileH, fill: '#16A34A', letter: 'S', rot: -2 },
    { x: (tileW + gap)*3, y: s*0.08, w: tileW*0.97, h: tileH*0.95, fill: '#2563EB', letter: 'C', rot: 3 },
  ]

  return (
    <svg width={s} height={s * 0.35} viewBox={`0 0 ${s} ${s * 0.35}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      {tiles.map((t, i) => (
        <g key={i} transform={`rotate(${t.rot} ${t.x + t.w/2} ${t.y + t.h/2})`}>
          <rect x={t.x} y={t.y} width={t.w} height={t.h} rx={r} fill={t.fill} />
          <text
            x={t.x + t.w/2}
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

export default function Hero() {
  const { t } = useLang()

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-br from-[#F5F7FB] via-[#EEF3FA] to-[#F5F0FB]"
    >
      {/* Background gradient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#6B9ED4]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-[#F5A98C]/18 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#B09FE5]/12 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div className="space-y-5">
            {/* Name */}
            <FadeIn direction="left" delay={80}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-none tracking-tight text-[#1A2B4A]">
                Clement Boule
              </h1>
            </FadeIn>

            {/* Role subtitle */}
            <FadeIn direction="left" delay={200}>
              <p className="text-xl md:text-2xl font-semibold text-[#3D6DB8]">
                {t.hero.badge}
              </p>
            </FadeIn>

            {/* Main tagline */}
            <FadeIn direction="left" delay={320}>
              <p className="text-base text-[#6B7E95] leading-relaxed max-w-md pt-1">
                {t.hero.subtitle}
              </p>
            </FadeIn>

            {/* CTAs */}
            <FadeIn direction="left" delay={440}>
              <div className="flex flex-wrap items-center gap-4 pt-3">
                {/* DISC Test CTA with logo */}
                <a
                  href="/test-disc"
                  className="inline-flex items-center gap-3 border border-[#1A2B4A]/15 hover:border-[#3D6DB8]/30 bg-white/60 hover:bg-white font-medium px-5 py-3 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-lg group"
                >
                  <DiscLogo size={80} />
                  <span className="text-[#1A2B4A]/70 group-hover:text-[#1A2B4A] transition-colors">{t.hero.disc}</span>
                </a>
              </div>
            </FadeIn>

            {/* Social links: LinkedIn + Malt */}
            <FadeIn direction="left" delay={560}>
              <div className="flex items-center gap-4 pt-2">
                <a
                  href="https://www.linkedin.com/in/cl%C3%A9ment-boul%C3%A9/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[#0A66C2] hover:text-[#004182] font-medium transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
                <span className="text-[#1A2B4A]/20">|</span>
                <a
                  href="https://www.malt.fr/profile/clementboule"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[#FC5656] hover:text-[#E03E3E] font-medium transition-colors"
                >
                  <svg className="w-5 h-5" viewBox="0 0 20 16" fill="currentColor">
                    <path d="M0 16L5 0h3L3 16zM3 16L8 0l2 5.5L12 0l5 16h-3l-2-6.5-2 6.5zm9-16h3l5 16h-3z" />
                  </svg>
                  Malt
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Right: Photo */}
          <FadeIn direction="right" delay={150} className="relative flex justify-center md:justify-end">
            {/* Glow behind photo */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#6B9ED4]/25 to-[#F5A98C]/20 rounded-3xl blur-2xl scale-90" />

            {/* Photo frame */}
            <div className="relative w-72 h-96 md:w-80 md:h-[460px] rounded-2xl overflow-hidden border border-[#3D6DB8]/15 shadow-2xl shadow-[#1A2B4A]/15 hover:shadow-[#3D6DB8]/20 hover:border-[#3D6DB8]/25 transition-all duration-500">
              <Image
                src="/clement.jpg"
                alt="Clement Boule"
                fill
                className="object-cover object-top"
                priority
              />
              {/* Subtle gradient overlay at bottom */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#1A2B4A]/30 to-transparent" />
            </div>

            {/* DISC pill floating badge */}
            <a
              href="/test-disc"
              className="absolute -bottom-4 left-1/2 md:left-4 -translate-x-1/2 md:translate-x-0 flex items-center gap-2 bg-white border border-[#3D6DB8]/20 shadow-lg shadow-[#1A2B4A]/10 backdrop-blur-sm text-[#1A2B4A]/70 text-xs font-semibold px-4 py-2 rounded-full hover:border-[#3D6DB8]/40 hover:shadow-[#3D6DB8]/15 hover:-translate-y-0.5 transition-all whitespace-nowrap"
            >
              <DiscLogo size={40} />
              {t.hero.discCta}
            </a>

            {/* Decorative dot grid */}
            <div
              className="absolute -bottom-6 -right-6 w-32 h-32 opacity-30"
              style={{
                backgroundImage: 'radial-gradient(circle, #3D6DB8 1px, transparent 1px)',
                backgroundSize: '12px 12px',
              }}
            />
          </FadeIn>
        </div>

        {/* Scroll indicator */}
        <FadeIn delay={900} className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#9AAABB] animate-bounce">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </FadeIn>
      </div>
    </section>
  )
}
