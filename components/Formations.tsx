'use client'
import { useLang } from './LanguageContext'

const gradients = [
  'from-[#3D6DB8] to-[#6B9ED4]',
  'from-[#E8836A] to-[#F5B08C]',
  'from-[#2E9E84] to-[#6FCFBB]',
  'from-[#7B5FC5] to-[#B09FE5]',
  'from-[#D4874A] to-[#F0BA70]',
]

const shadowColors = [
  'shadow-[#3D6DB8]/25 hover:shadow-[#3D6DB8]/35',
  'shadow-[#E8836A]/25 hover:shadow-[#E8836A]/35',
  'shadow-[#2E9E84]/25 hover:shadow-[#2E9E84]/35',
  'shadow-[#7B5FC5]/25 hover:shadow-[#7B5FC5]/35',
  'shadow-[#D4874A]/25 hover:shadow-[#D4874A]/35',
]

const illustrations = [
  <svg key="rh" viewBox="0 0 120 100" className="w-28 h-24" fill="none">
    <circle cx="60" cy="32" r="13" fill="white" fillOpacity="0.92" />
    <path d="M42 68c0-9.9 8.1-18 18-18s18 8.1 18 18" stroke="white" strokeWidth="3" strokeLinecap="round" />
    <circle cx="22" cy="44" r="10" fill="white" fillOpacity="0.6" />
    <path d="M10 72c0-6.6 5.4-12 12-12s12 5.4 12 12" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="98" cy="44" r="10" fill="white" fillOpacity="0.6" />
    <path d="M86 72c0-6.6 5.4-12 12-12s12 5.4 12 12" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="37" y1="48" x2="47" y2="52" stroke="white" strokeWidth="1.5" strokeOpacity="0.5" />
    <line x1="73" y1="52" x2="83" y2="48" stroke="white" strokeWidth="1.5" strokeOpacity="0.5" />
    <circle cx="60" cy="12" r="3" fill="white" fillOpacity="0.4" />
    <circle cx="28" cy="22" r="2" fill="white" fillOpacity="0.3" />
    <circle cx="92" cy="22" r="2" fill="white" fillOpacity="0.3" />
  </svg>,
  <svg key="posture" viewBox="0 0 120 110" className="w-28 h-24" fill="none">
    <circle cx="60" cy="22" r="13" fill="white" fillOpacity="0.92" />
    <rect x="50" y="40" width="20" height="28" rx="5" fill="white" fillOpacity="0.88" />
    <path d="M50 50 L28 42" stroke="white" strokeWidth="3.5" strokeLinecap="round" />
    <path d="M70 50 L92 42" stroke="white" strokeWidth="3.5" strokeLinecap="round" />
    <path d="M55 68 L48 90" stroke="white" strokeWidth="3.5" strokeLinecap="round" />
    <path d="M65 68 L72 90" stroke="white" strokeWidth="3.5" strokeLinecap="round" />
    <circle cx="60" cy="52" r="38" stroke="white" strokeWidth="1" strokeOpacity="0.15" strokeDasharray="4 3" />
    <circle cx="60" cy="52" r="52" stroke="white" strokeWidth="0.7" strokeOpacity="0.08" strokeDasharray="3 4" />
  </svg>,
  <svg key="rps" viewBox="0 0 120 110" className="w-28 h-24" fill="none">
    <path d="M60 12 L92 27 L92 60 C92 82 60 102 60 102 C60 102 28 82 28 60 L28 27 Z" fill="white" fillOpacity="0.88" />
    <path d="M60 79 C60 79 40 66 40 54 C40 47.4 45.4 42 52 42 C55.3 42 58.2 43.7 60 46.2 C61.8 43.7 64.7 42 68 42 C74.6 42 80 47.4 80 54 C80 66 60 79 60 79 Z" fill="#2E9E84" />
    <circle cx="18" cy="32" r="3.5" fill="white" fillOpacity="0.35" />
    <circle cx="102" cy="38" r="3" fill="white" fillOpacity="0.3" />
  </svg>,
  <svg key="strategy" viewBox="0 0 120 110" className="w-28 h-24" fill="none">
    <circle cx="54" cy="60" r="42" stroke="white" strokeWidth="2" strokeOpacity="0.3" />
    <circle cx="54" cy="60" r="28" stroke="white" strokeWidth="2" strokeOpacity="0.5" />
    <circle cx="54" cy="60" r="14" fill="white" fillOpacity="0.9" />
    <path d="M76 18 L76 46 L104 18 Z" fill="white" fillOpacity="0.88" />
    <line x1="54" y1="60" x2="90" y2="24" stroke="white" strokeWidth="3.5" strokeLinecap="round" />
    <circle cx="18" cy="28" r="3" fill="white" fillOpacity="0.28" />
    <circle cx="105" cy="95" r="2.5" fill="white" fillOpacity="0.22" />
  </svg>,
  <svg key="soft" viewBox="0 0 120 110" className="w-28 h-24" fill="none">
    <path d="M60 18 C44 18 30 29 30 46 C30 56 35 64 43 70 L43 86 L77 86 L77 70 C85 64 90 56 90 46 C90 29 76 18 60 18 Z" fill="white" fillOpacity="0.88" />
    <path d="M48 36 Q54 30 60 36 Q66 42 60 48 Q54 54 48 48 Q42 42 48 36 Z" fill="none" stroke="#7B5FC5" strokeWidth="1.8" strokeOpacity="0.45" />
    <path d="M66 35 Q75 33 77 41 Q79 50 71 54" stroke="#7B5FC5" strokeWidth="1.8" strokeOpacity="0.45" strokeLinecap="round" />
    <path d="M44 56 Q38 61 40 68" stroke="#7B5FC5" strokeWidth="1.8" strokeOpacity="0.45" strokeLinecap="round" />
    <path d="M60 97 C60 97 47 88 47 80 C47 75.6 50.7 72 55 72 C57.2 72 59.2 73.3 60 75.2 C60.8 73.3 62.8 72 65 72 C69.3 72 73 75.6 73 80 C73 88 60 97 60 97 Z" fill="#E8836A" />
    <line x1="60" y1="86" x2="60" y2="92" stroke="white" strokeWidth="2" strokeOpacity="0.6" />
    <circle cx="22" cy="42" r="3" fill="white" fillOpacity="0.3" />
    <circle cx="98" cy="38" r="2.5" fill="white" fillOpacity="0.25" />
  </svg>,
]

interface FormationItem {
  title: string
  description: string
}

function FormationCard({ item, index }: { item: FormationItem; index: number }) {
  return (
    <div
      className={`group relative h-72 rounded-3xl overflow-hidden cursor-default bg-gradient-to-br ${gradients[index]} shadow-xl ${shadowColors[index]} hover:-translate-y-1.5 transition-all duration-300`}
    >
      <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10 pointer-events-none" />
      <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-white/8 pointer-events-none" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 p-6 transition-opacity duration-300 group-hover:opacity-0">
        <div className="drop-shadow-md flex items-center justify-center">
          {illustrations[index]}
        </div>
        <h3 className="text-white font-bold text-base text-center leading-snug drop-shadow px-2">
          {item.title}
        </h3>
      </div>
      <div className="absolute inset-0 flex flex-col justify-center px-7 py-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-10 h-1 bg-white/60 rounded-full mb-5" />
        <h3 className="text-white font-bold text-lg mb-4 leading-snug">
          {item.title}
        </h3>
        <p className="text-white/88 text-sm leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  )
}

export default function Formations() {
  const { t } = useLang()
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
            <FormationCard item={t.formations.items[0]} index={0} />
          </div>
          <div className="sm:col-span-2">
            <FormationCard item={t.formations.items[1]} index={1} />
          </div>
          <div className="sm:col-span-2">
            <FormationCard item={t.formations.items[2]} index={2} />
          </div>
          <div className="sm:col-start-2 sm:col-span-2">
            <FormationCard item={t.formations.items[3]} index={3} />
          </div>
          <div className="sm:col-span-2">
            <FormationCard item={t.formations.items[4]} index={4} />
          </div>
        </div>
      </div>
    </section>
  )
}
