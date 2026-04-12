'use client'
import { useLang } from './LanguageContext'
import ScrollReveal from './ScrollReveal'

/* ── Photo backgrounds per card ── */
const photos = [
  'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=85',
  'https://images.unsplash.com/photo-1560439513-74b037a25d84?auto=format&fit=crop&w=800&q=85',
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=85',
  'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=85',
  'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=800&q=85',
  'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=85',
]

/* Dark tinted overlays */
const overlays = [
  'rgba(29,60,120,0.62)',
  'rgba(85,45,125,0.62)',
  'rgba(18,85,70,0.62)',
  'rgba(95,48,18,0.62)',
  'rgba(20,58,98,0.62)',
  'rgba(130,25,45,0.68)',
]

const tags = ['RH', 'Posture', 'Prévention', 'Stratégie', 'Humain', "Spine'Up"]

interface FormationItem {
  title: string
  description: string
}

function FormationCard({ item, index }: { item: FormationItem; index: number }) {
  const overlay = overlays[index] ?? 'rgba(20,40,80,0.65)'
  const photo = photos[index] ?? photos[0]
  const tag = tags[index] ?? ''

  return (
    <div
      className="group relative overflow-hidden cursor-default rounded-3xl shadow-xl h-72 hover:-translate-y-1.5 transition-all duration-300"
      style={{
        backgroundImage: `linear-gradient(160deg, ${overlay}, rgba(0,0,0,0.45)), url('${photo}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Tag */}
      <div className="absolute top-5 left-5 z-10">
        <span className="text-[10px] font-bold uppercase tracking-widest text-white/80 border border-white/20 rounded-full px-3 py-1 bg-white/10 backdrop-blur-sm">
          {tag}
        </span>
      </div>

      {/* Default state: title at bottom */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 transition-opacity duration-300 group-hover:opacity-0">
        <h3 className="text-white font-bold text-lg leading-snug drop-shadow-lg">
          {item.title}
        </h3>
        <div className="mt-2 flex items-center gap-1.5 text-white/45 text-xs font-medium">
          <span>En savoir plus</span>
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      {/* Hover state: description */}
      <div className="absolute inset-0 flex flex-col justify-center px-7 py-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/15">
        <div className="w-8 h-0.5 bg-white/60 rounded-full mb-4" />
        <h3 className="text-white font-bold text-base mb-3 leading-snug">
          {item.title}
        </h3>
        <p className="text-white/85 text-sm leading-relaxed">
          {item.description}
        </p>
        <a
          href="#contact"
          className="mt-5 inline-flex items-center gap-1.5 text-white text-xs font-semibold border border-white/30 rounded-full px-4 py-1.5 hover:bg-white/15 transition-all w-fit"
        >
          Me contacter
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
  )
}

export default function Formations() {
  const { t } = useLang()
  const items = t.formations.items

  return (
    <section id="formations" className="py-24 md:py-32 bg-[#EBF0F8]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <ScrollReveal className="mb-16 text-center">
          <p className="text-xs font-semibold text-[#3D6DB8] uppercase tracking-widest mb-4">
            {t.formations.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A2B4A] leading-tight max-w-2xl mx-auto">
            {t.formations.title}
          </h2>
          <p className="mt-4 text-[#6B7E95] max-w-xl mx-auto leading-relaxed">
            {t.formations.subtitle}
          </p>
        </ScrollReveal>

        {/* 3 × 2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {items.map((item, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <FormationCard item={item} index={i} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
