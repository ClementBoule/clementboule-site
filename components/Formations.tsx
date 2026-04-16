'use client'
import { useState, useEffect } from 'react'
import { useLang } from './LanguageContext'
import FormationModal, { ILLUSTRATIONS, FORMATION_DETAILS, PHOTOS, OVERLAYS } from './FormationModal'

function FormationCard({
  item,
  index,
  onClick,
}: {
  item: { title: string; description: string }
  index: number
  onClick: () => void
}) {
  const [hovered, setHovered] = useState(false)
  const detail = FORMATION_DETAILS[index]

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      role="button"
      tabIndex={0}
      onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') onClick() }}
      aria-label={`Voir la formation : ${item.title}`}
      className="group relative rounded-3xl overflow-hidden cursor-pointer shadow-xl"
      style={{
        backgroundImage: `linear-gradient(to bottom, ${OVERLAYS[index]} 0%, rgba(0,0,0,0.55) 100%), url(${PHOTOS[index]}?w=800&q=80&fit=crop)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        maxHeight: hovered ? '640px' : '288px',
        minHeight: '288px',
        transition: 'max-height 0.5s cubic-bezier(0.4,0,0.2,1), box-shadow 0.3s ease, transform 0.3s ease',
        transform: hovered ? 'translateY(-6px)' : 'none',
        willChange: 'max-height, transform',
        boxShadow: hovered
          ? '0 24px 48px -8px rgba(0,0,0,0.45)'
          : '0 8px 24px -4px rgba(0,0,0,0.3)',
      }}
    >
      {/* ── Default face: illustration + title ── */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center gap-5 p-6 pointer-events-none"
        style={{
          opacity: hovered ? 0 : 1,
          transition: 'opacity 0.2s ease',
        }}
      >
        <div className="drop-shadow-md flex items-center justify-center w-28 h-24">
          {ILLUSTRATIONS[index]}
        </div>
        <h3 className="text-white font-bold text-base text-center leading-snug drop-shadow px-2">
          {item.title}
        </h3>
      </div>

      {/* ── Hover face: rich detail ── */}
      <div
        className="flex flex-col px-7 py-6 pointer-events-none"
        style={{
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.22s ease 0.12s',
          minHeight: '288px',
        }}
      >
        {/* Title + accent bar */}
        <div className="w-8 h-1 bg-white/70 rounded-full mb-4" />
        <h3 className="text-white font-bold text-lg leading-snug mb-3">{item.title}</h3>

        {/* Duration + format pills */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/90 px-2.5 py-1 rounded-lg"
            style={{ background: 'rgba(0,0,0,0.28)' }}
          >
            <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
              <circle cx="6" cy="6" r="5" stroke="white" strokeWidth="1.3"/>
              <path d="M6 3.5V6.2L7.8 8" stroke="white" strokeWidth="1.3" strokeLinecap="round"/>
            </svg>
            {detail?.duration || '–'}
          </span>
          <span
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/90 px-2.5 py-1 rounded-lg"
            style={{ background: 'rgba(0,0,0,0.28)' }}
          >
            <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
              <path d="M2 3h8M2 6h6M2 9h4" stroke="white" strokeWidth="1.3" strokeLinecap="round"/>
            </svg>
            {detail?.format || '–'}
          </span>
        </div>

        {/* Description */}
        <p className="text-white/80 text-sm leading-relaxed mb-4">
          {item.description}
        </p>

        {/* Top 3 objectives */}
        {detail?.objectives && (
          <ul className="space-y-2 mb-4">
            {detail.objectives.slice(0, 3).map((obj, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-0.5 w-4 h-4 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 text-[9px] font-bold text-white">
                  {i + 1}
                </span>
                <span className="text-white/88 text-xs leading-snug">{obj}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Audience */}
        {detail?.audience && (
          <p className="text-white/55 text-xs mb-5">
            <span className="font-semibold text-white/75">Public · </span>{detail.audience}
          </p>
        )}

        {/* CTA hint */}
        <span className="mt-auto inline-flex items-center gap-2 text-xs font-semibold text-white/80">
          <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
            <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Voir le programme complet
        </span>
      </div>
    </div>
  )
}

export default function Formations() {
  const { t } = useLang()
  const [openIndex, setOpenIndex] = useState(null as null | number)

  // Auto-open modal if chatbot passed ?open=N
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const open = params.get('open')
    if (open !== null) {
      const idx = parseInt(open, 10)
      if (idx >= 0 && idx < 6) {
        setTimeout(() => setOpenIndex(idx), 400)
        const url = new URL(window.location.href)
        url.searchParams.delete('open')
        window.history.replaceState({}, '', url.toString())
      }
    }
  }, [])

  return (
    <section id="formations" className="py-24 md:py-32 bg-[#EBF0F8]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16 text-center">
          <p className="text-xs font-semibold text-[#3D6DB8] uppercase tracking-widest mb-4">
            {t.formations.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A2B4A] leading-tight max-w-2xl mx-auto">
            {t.formations.title}
          </h2>
          <p className="mt-4 text-[#6B7E95] max-w-xl mx-auto leading-relaxed">
            {t.formations.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {[0, 1, 2, 3, 4, 5].map(i => (
            <FormationCard
              key={i}
              item={t.formations.items[i]}
              index={i}
              onClick={() => setOpenIndex(i)}
            />
          ))}
        </div>
      </div>

      {/* Modal — rendered at section root so z-index stacking is clean */}
      {openIndex !== null && (
        <FormationModal index={openIndex} onClose={() => setOpenIndex(null)} />
      )}
    </section>
  )
}
