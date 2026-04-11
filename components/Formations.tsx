'use client'
import { useLang } from './LanguageContext'

const icons = [
  // Leadership
  <svg key="0" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>,
  // Communication
  <svg key="1" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>,
  // Strategy
  <svg key="2" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>,
  // DISC
  <svg key="3" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
  </svg>,
  // Coaching
  <svg key="4" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg>,
]

export default function Formations() {
  const { t } = useLang()

  return (
    <section id="formations" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <p className="text-xs font-semibold text-[#7C9CBF] uppercase tracking-widest mb-4">
            {t.formations.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight max-w-lg">
            {t.formations.title}
          </h2>
          <p className="mt-4 text-white/50 max-w-xl">
            {t.formations.subtitle}
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.formations.items.map((item: { title: string; description: string }, i: number) => (
            <div
              key={i}
              className="group relative bg-[#0F1A2E]/50 border border-white/6 rounded-2xl p-7 hover:border-[#7C9CBF]/25 hover:bg-[#0F1A2E]/80 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-[#7C9CBF]/10 border border-[#7C9CBF]/15 flex items-center justify-center text-[#7C9CBF] mb-6 group-hover:bg-[#7C9CBF]/15 transition-colors">
                {icons[i]}
              </div>

              <h3 className="text-base font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-white/45 leading-relaxed">
                {item.description}
              </p>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-7 right-7 h-px bg-gradient-to-r from-transparent via-[#7C9CBF]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
