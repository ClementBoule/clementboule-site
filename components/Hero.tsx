'use client'
import Image from 'next/image'
import { useLang } from './LanguageContext'

export default function Hero() {
  const { t } = useLang()

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Background gradient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#7C9CBF]/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-[#5B8AB5]/6 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 text-xs font-medium text-[#7C9CBF] border border-[#7C9CBF]/25 bg-[#7C9CBF]/8 rounded-full px-4 py-1.5 tracking-wide uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7C9CBF]" />
              {t.hero.badge}
            </div>

            {/* Main headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
              {t.hero.headline}
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-white/55 leading-relaxed max-w-md">
              {t.hero.subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#7C9CBF] hover:bg-[#6A8EAF] text-[#0B1120] font-semibold px-6 py-3 rounded-full transition-all shadow-lg shadow-[#7C9CBF]/20 hover:shadow-[#7C9CBF]/30 hover:-translate-y-0.5"
              >
                {t.hero.cta}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="/test-disc"
                className="inline-flex items-center gap-2 border border-white/15 hover:border-white/30 text-white/70 hover:text-white font-medium px-6 py-3 rounded-full transition-all hover:bg-white/5"
              >
                {t.hero.disc}
                <svg className="w-4 h-4 text-[#7C9CBF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Photo */}
          <div className="relative flex justify-center md:justify-end">
            {/* Glow behind photo */}
            <div className="absolute inset-0 bg-[#7C9CBF]/10 rounded-3xl blur-2xl scale-90" />

            {/* Photo frame */}
            <div className="relative w-72 h-96 md:w-80 md:h-[440px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/40">
              <Image
                src="/clement.jpg"
                alt="ClÃ©ment BoulÃ©"
                fill
                className="object-cover object-top"
                priority
              />
              {/* Subtle gradient overlay at bottom */}
              <div className="absolute insex-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0B1120]/60 to-transparent" />
            </div>

            {/* DISC pill floating badge */}
            <a
              href="/test-disc"
              className="absolute -bottom-4 left-1/2 md:left-4 -translate-x-1/2 md:translate-x-0 flex items-center gap-2 bg-[#0F1A2E]/90 border border-[#7C9CBF]/30 backdrop-blur-sm text-[#7C9CBF] text-xs font-semibold px-4 py-2 rounded-full shadow-lg hover:border-[#7C9CBF]/60 transition-all whitespace-nowrap"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#7C9CBF] animate-pulse" />
              {t.hero.discCta}
            </a>

            {/* Decorative dot grid */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 opacity-20"
              style={{
                backgroundImage: 'radial-gradient(circle, #7C9CBF 1px, transparent 1px)',
                backgroundSize: '12px 12px',
              }}
            />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/25 animate-bounce">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  )
}
