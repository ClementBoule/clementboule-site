'use client'
import { useState } from 'react'
import { useLang } from './LanguageContext'
import FormationModal, { ILLUSTRATIONS, GRADIENTS, SHADOW_COLORS } from './FormationModal'

function FormationCard({
  item,
  index,
  onClick,
}: {
  item: { title: string; description: string }
  index: number
  onClick: () => void
}) {
  return (
    <div
      onClick={onClick}
      className={`group relative h-72 rounded-3xl overflow-hidden cursor-pointer bg-gradient-to-br ${GRADIENTS[index]} shadow-xl ${SHADOW_COLORS[index]} hover:-translate-y-1.5 transition-all duration-300`}
      role="button"
      tabIndex={0}
      onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') onClick() }}
      aria-label={`Voir la formation : ${item.title}`}
    >
      {/* Background decorative orbs */}
      <div className="absolute -top-10 -right-10 w-44 h-44 rounded-full bg-white/10 pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-36 h-36 rounded-full bg-white/6 pointer-events-none" />

      {/* "Expand" hint dot — top right corner */}
      <div className="absolute top-4 right-4 w-7 h-7 rounded-full bg-white/15 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M2 6h8M6 2l4 4-4 4" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* Default face: illustration + title */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 p-6 transition-opacity duration-300 group-hover:opacity-0">
        <div className="drop-shadow-md flex items-center justify-center w-28 h-24">
          {ILLUSTRATIONS[index]}
        </div>
        <h3 className="text-white font-bold text-base text-center leading-snug drop-shadow px-2">
          {item.title}
        </h3>
      </div>

      {/* Hover face: description + CTA hint */}
      <div className="absolute inset-0 flex flex-col justify-center px-7 py-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-10 h-1 bg-white/60 rounded-full mb-5" />
        <h3 className="text-white font-bold text-lg mb-4 leading-snug">{item.title}</h3>
        <p className="text-white/88 text-sm leading-relaxed mb-5">{item.description}</p>
        <span className="inline-flex items-center gap-2 text-xs font-semibold text-white/70">
          <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
            <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          {/* label will be "En savoir plus" but we keep it agnostic to lang here */}
          Voir le programme
        </span>
      </div>
    </div>
  )
}

export default function Formations() {
  const { t } = useLang()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

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

        <div className="grid grid-cols-1 sm:grid-cols-6 gap-5">
          <div className="sm:col-span-2">
            <FormationCard item={t.formations.items[0]} index={0} onClick={() => setOpenIndex(0)} />
          </div>
          <div className="sm:col-span-2">
            <FormationCard item={t.formations.items[1]} index={1} onClick={() => setOpenIndex(1)} />
          </div>
          <div className="sm:col-span-2">
            <FormationCard item={t.formations.items[2]} index={2} onClick={() => setOpenIndex(2)} />
          </div>
          <div className="sm:col-start-2 sm:col-span-2">
            <FormationCard item={t.formations.items[3]} index={3} onClick={() => setOpenIndex3)} />
          </div>
          <div className="sm:col-span-2">
            <FormationCard item={t.formations.items[4]} index={4} onClick={() => setOpenIndex(4)} />
          </div>
        </div>
      </div>

      {/* Modal — rendered at section root so z-index stacking is clean */}
      {openIndex !== null && (
        <FormationModal index={openIndex} onClose={() => setOpenIndex(null)} />
      )}
    </section>
  )
}
