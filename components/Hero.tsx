'use client'
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

          {/* Right: DISC teaser card */}
          <div className="relative">
            <div className="bg-[#0F1A2E]/60 border border-white/8 rounded-2xl p-8 backdrop-blur-sm shadow-2xl">
              <p className="text-xs font-semibold text-[#7C9CBF] uppercase tracking-widest mb-5">
                {t.hero.discTeaser}
              </p>

              {/* DISC bars */}
              <div className="space-y-4">
                {[
                  { label: 'D â Dominance', value: 85, color: '#E57373' },
                  { label: 'I â Influence', value: 62, color: '#FFB74D' },
                  { label: 'S â Steadiness', value: 45, color: '#81C784' },
                  { label: 'C â Conscientiousness', value: 70, color: '#64B5F6' },
                ].map(({ label, value, color }) => (
                  <div key={label} className="space-y-1.5">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-white/60 font-medium">{label}</span>
                      <span className="text-xs font-bold" style={{ color }}>{value}%</span>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{ width: `${value}%`, backgroundColor: color, opacity: 0.8 }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="/test-disc"
                className="mt-7 flex items-center justify-center gap-2 w-full border border-[#7C9CBF]/30 hover:border-[#7C9CBF]/60 text-[#7C9CBF] text-sm font-medium py-2.5 rounded-xl transition-all hover:bg-[#7C9CBF]/8"
              >
                {t.hero.discCta}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

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
