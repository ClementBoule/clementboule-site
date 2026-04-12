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
                Clément Boulé
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
              <div className="flex flex-wrap gap-4 pt-3">
                <a
                  href="/test-disc"
                  className="inline-flex items-center gap-3 border border-[#1A2B4A]/15 hover:border-[#3D6DB8]/30 bg-white/60 hover:bg-white font-medium px-5 py-3 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-lg group"
                >
                  {/* DISC 4-square logo */}
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                    <rect x="1" y="1" width="12" height="12" rx="3" fill="#DC2626" />
                    <rect x="15" y="1" width="12" height="12" rx="3" fill="#EAB308" />
                    <rect x="1" y="15" width="12" height="12" rx="3" fill="#16A34A" />
                    <rect x="15" y="15" width="12" height="12" rx="3" fill="#2563EB" />
                    <text x="7" y="10" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold" fontFamily="sans-serif">D</text>
                    <text x="21" y="10" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold" fontFamily="sans-serif">I</text>
                    <text x="7" y="24" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold" fontFamily="sans-serif">S</text>
                    <text x="21" y="24" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold" fontFamily="sans-serif">C</text>
                  </svg>
                  <span className="text-[#1A2B4A]/70 group-hover:text-[#1A2B4A] transition-colors">{t.hero.disc}</span>
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
                alt="Clément Boulé"
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
              <svg width="16" height="16" viewBox="0 0 28 28" fill="none" className="flex-shrink-0">
                <rect x="1" y="1" width="12" height="12" rx="3" fill="#DC2626" />
                <rect x="15" y="1" width="12" height="12" rx="3" fill="#EAB308" />
                <rect x="1" y="15" width="12" height="12" rx="3" fill="#16A34A" />
                <rect x="15" y="15" width="12" height="12" rx="3" fill="#2563EB" />
              </svg>
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
