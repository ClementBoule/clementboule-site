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
  /* ── 1. HR & Employer Brand — "The Network" ── */
  <svg key="rh" viewBox="0 0 120 100" className="w-28 h-24" fill="none">
    {/* Hexagonal grid — background texture */}
    <path d="M60 4 L70 10 L70 22 L60 28 L50 22 L50 10 Z"
      stroke="white" strokeWidth="1" strokeOpacity="0.18" />
    <path d="M70 22 L80 28 L80 40 L70 46 L60 40 L60 28 Z"
      stroke="white" strokeWidth="1" strokeOpacity="0.14" />
    <path d="M50 22 L60 28 L60 40 L50 46 L40 40 L40 28 Z"
      stroke="white" strokeWidth="1" strokeOpacity="0.14" />

    {/* Star / employer brand badge */}
    <path d="M60 8 L62.2 14.8 L69.4 14.8 L63.6 19 L65.8 25.8 L60 21.6 L54.2 25.8 L56.4 19 L50.6 14.8 L57.8 14.8 Z"
      fill="white" fillOpacity="0.95" />

    {/* Central person */}
    <circle cx="60" cy="50" r="11" fill="white" fillOpacity="0.92" />
    <path d="M46 82 C46 68 52 62 60 62 C68 62 74 68 74 82"
      fill="white" fillOpacity="0.85" />

    {/* Left person */}
    <circle cx="20" cy="56" r="8" fill="white" fillOpacity="0.6" />
    <path d="M10 80 C10 70 14 65 20 65 C26 65 30 70 30 80"
      fill="white" fillOpacity="0.5" />

    {/* Right person */}
    <circle cx="100" cy="56" r="8" fill="white" fillOpacity="0.6" />
    <path d="M90 80 C90 70 94 65 100 65 C106 65 110 70 110 80"
      fill="white" fillOpacity="0.5" />

    {/* Connection arcs */}
    <path d="M30 63 Q43 55 48 52" stroke="white" strokeWidth="1.8"
      strokeOpacity="0.4" strokeLinecap="round" />
    <path d="M90 63 Q77 55 72 52" stroke="white" strokeWidth="1.8"
      strokeOpacity="0.4" strokeLinecap="round" />
    <circle cx="39" cy="59" r="1.8" fill="white" fillOpacity="0.4" />
    <circle cx="81" cy="59" r="1.8" fill="white" fillOpacity="0.4" />

    {/* Ambient dots */}
    <circle cx="10" cy="30" r="2.2" fill="white" fillOpacity="0.22" />
    <circle cx="110" cy="26" r="2" fill="white" fillOpacity="0.18" />
  </svg>,

  /* ── 2. Professional Posture — "The Presence" ── */
  <svg key="posture" viewBox="0 0 120 110" className="w-28 h-24" fill="none">
    {/* Concentric resonance arcs — left */}
    <path d="M32 86 Q12 55 32 22" stroke="white" strokeWidth="1.8"
      strokeOpacity="0.2" strokeLinecap="round" />
    <path d="M22 92 Q-2 55 22 16" stroke="white" strokeWidth="1"
      strokeOpacity="0.1" strokeLinecap="round" />
    {/* Concentric resonance arcs — right */}
    <path d="M88 86 Q108 55 88 22" stroke="white" strokeWidth="1.8"
      strokeOpacity="0.2" strokeLinecap="round" />
    <path d="M98 92 Q122 55 98 16" stroke="white" strokeWidth="1"
      strokeOpacity="0.1" strokeLinecap="round" />

    {/* Head */}
    <circle cx="60" cy="22" r="12" fill="white" fillOpacity="0.95" />
    {/* Torso */}
    <path d="M47 42 L52 37 L68 37 L73 42 L70 68 L50 68 Z"
      fill="white" fillOpacity="0.9" />
    {/* Left arm — wide open gesture */}
    <path d="M50 48 L22 40" stroke="white" strokeWidth="4.5" strokeLinecap="round" />
    {/* Right arm */}
    <path d="M70 48 L98 40" stroke="white" strokeWidth="4.5" strokeLinecap="round" />
    {/* Legs */}
    <path d="M54 68 L48 96" stroke="white" strokeWidth="4.5" strokeLinecap="round" />
    <path d="M66 68 L72 96" stroke="white" strokeWidth="4.5" strokeLinecap="round" />

    {/* Star sparkles */}
    <path d="M20 40 L21.2 43.8 L25 45 L21.2 46.2 L20 50 L18.8 46.2 L15 45 L18.8 43.8 Z"
      fill="white" fillOpacity="0.6" />
    <path d="M100 38 L101 41 L104 42 L101 43 L100 46 L99 43 L96 42 L99 41 Z"
      fill="white" fillOpacity="0.6" />
    <circle cx="36" cy="20" r="2" fill="white" fillOpacity="0.35" />
    <circle cx="84" cy="18" r="2" fill="white" fillOpacity="0.35" />
  </svg>,

  /* ── 3. Psychosocial Risk Prevention — "The Shield" ── */
  <svg key="rps" viewBox="0 0 120 110" className="w-28 h-24" fill="none">
    {/* Shield glow layer */}
    <path d="M60 5 L97 23 L97 65 C97 90 60 108 60 108
             C60 108 23 90 23 65 L23 23 Z"
      fill="white" fillOpacity="0.1" />
    {/* Shield main */}
    <path d="M60 12 L90 27 L90 63 C90 84 60 100 60 100
             C60 100 30 84 30 63 L30 27 Z"
      fill="white" fillOpacity="0.88" />

    {/* Person inside */}
    <circle cx="60" cy="44" r="9.5" fill="#2E9E84" fillOpacity="0.65" />
    <path d="M49 72 C49 63 54 57 60 57 C66 57 71 63 71 72"
      fill="#2E9E84" fillOpacity="0.65" />

    {/* ECG / heartbeat line */}
    <path d="M36 62 L42 62 L46 52 L50 72 L55 57 L60 62 L84 62"
      stroke="white" strokeWidth="2.2" strokeLinecap="round"
      strokeLinejoin="round" strokeOpacity="0.85" />

    {/* Lightning bolts deflected outside */}
    <path d="M14 40 L20 28 L17 34 L23 22" stroke="white" strokeWidth="1.8"
      strokeOpacity="0.4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M106 40 L100 28 L103 34 L97 22" stroke="white" strokeWidth="1.8"
      strokeOpacity="0.4" strokeLinecap="round" strokeLinejoin="round" />
    {/* Deflection marks (ricochet) */}
    <path d="M24 42 L28 38" stroke="white" strokeWidth="1.5"
      strokeOpacity="0.3" strokeLinecap="round" />
    <path d="M96 42 L92 38" stroke="white" strokeWidth="1.5"
      strokeOpacity="0.3" strokeLinecap="round" />
  </svg>,

  /* ── 4. Business Strategy — "The Summit" ── */
  <svg key="strategy" viewBox="0 0 120 110" className="w-28 h-24" fill="none">
    {/* Planning grid */}
    <line x1="18" y1="86" x2="95" y2="86" stroke="white" strokeOpacity="0.14" strokeWidth="1" />
    <line x1="18" y1="94" x2="95" y2="94" stroke="white" strokeOpacity="0.1" strokeWidth="1" />
    {['28','44','60','76','92'].map(x => (
      <line key={x} x1={x} y1="78" x2={x} y2="97"
        stroke="white" strokeOpacity="0.11" strokeWidth="1" />
    ))}

    {/* Mountain silhouette */}
    <path d="M18 90 L46 34 L60 16 L74 34 L102 90 Z"
      fill="white" fillOpacity="0.88" />
    {/* Snow cap */}
    <path d="M60 16 L70 33 L50 33 Z"
      fill="white" fillOpacity="0.35" />

    {/* Ascending dotted path */}
    <path d="M28 86 L38 70 L46 55 L54 40 L60 26"
      stroke="#7B5FC5" strokeWidth="2" strokeOpacity="0.5"
      strokeDasharray="3 3" strokeLinecap="round" />

    {/* Flag at peak */}
    <line x1="60" y1="16" x2="60" y2="4" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <path d="M60 4 L73 8.5 L60 13 Z" fill="white" fillOpacity="0.95" />

    {/* Compass rose — top right */}
    <circle cx="97" cy="22" r="13" fill="white" fillOpacity="0.08"
      stroke="white" strokeWidth="1" strokeOpacity="0.25" />
    <line x1="97" y1="11" x2="97" y2="33" stroke="white" strokeWidth="1.5" strokeOpacity="0.55" />
    <line x1="86" y1="22" x2="108" y2="22" stroke="white" strokeWidth="1.5" strokeOpacity="0.55" />
    <circle cx="97" cy="22" r="2.8" fill="white" fillOpacity="0.9" />
    {/* North arrow head */}
    <path d="97 11 L100 17 L97 14 L94 17 Z" fill="white" fillOpacity="0.9" />
  </svg>,

  /* ── 5. Soft Skills — "The Connection" ── */
  <svg key="soft" viewBox="0 0 120 110" className="w-28 h-24" fill="none">
    {/* Ripple rings at connection point */}
    <circle cx="60" cy="54" r="42" stroke="white" strokeOpacity="0.1" strokeWidth="1.2" />
    <circle cx="60" cy="54" r="28" stroke="white" strokeOpacity="0.16" strokeWidth="1.2" />
    <circle cx="60" cy="54" r="15" stroke="white" strokeOpacity="0.22" strokeWidth="1.2" />

    {/* Left person silhouette */}
    <circle cx="22" cy="36" r="10" fill="white" fillOpacity="0.82" />
    <path d="M10 72 C10 58 15 50 22 50 C29 50 34 58 34 72"
      fill="white" fillOpacity="0.75" />

    {/* Right person silhouette */}
    <circle cx="98" cy="36" r="10" fill="white" fillOpacity="0.82" />
    <path d="M86 72 C86 58 91 50 98 50 C105 50 110 58 110 72"
      fill="white" fillOpacity="0.75" />

    {/* Connection lines from each person toward heart */}
    <path d="M32 58 Q46 54 50 54" stroke="white" strokeWidth="1.8"
      strokeOpacity="0.45" strokeLinecap="round" />
    <path d="M88 58 Q74 54 70 54" stroke="white" strokeWidth="1.8"
      strokeOpacity="0.45" strokeLinecap="round" />

    {/* Heart at center */}
    <path d="M60 66 C60 66 42 54 42 43 C42 36.4 47.4 31 54 31
             C57.3 31 60 33.5 60 33.5 C60 33.5 62.7 31 66 31
             C72.6 31 78 36.4 78 43 C78 54 60 66 60 66 Z"
      fill="white" fillOpacity="0.95" />

    {/* Growth sprout above heart */}
    <path d="M60 31 C60 25 64 20 60 13" stroke="white" strokeWidth="2"
      strokeLinecap="round" strokeOpacity="0.5" />
    <path d="M60 22 C60 22 55 18 52 12" stroke="white" strokeWidth="1.5"
      strokeLinecap="round" strokeOpacity="0.35" />
    <path d="M60 22 C60 22 65 18 68 12" stroke="white" strokeWidth="1.5"
      strokeLinecap="round" strokeOpacity="0.35" />

    {/* Ambient dots */}
    <circle cx="10" cy="85" r="2" fill="white" fillOpacity="0.2" />
    <circle cx="110" cy="85" r="2" fill="white" fillOpacity="0.2" />
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
      {/* Background decorative orbs */}
      <div className="absolute -top-10 -right-10 w-44 h-44 rounded-full bg-white/10 pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-36 h-36 rounded-full bg-white/6 pointer-events-none" />

      {/* Default face: illustration + title */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 p-6 transition-opacity duration-300 group-hover:opacity-0">
        <div className="drop-shadow-md flex items-center justify-center">
          {illustrations[index]}
        </div>
        <h3 className="text-white font-bold text-base text-center leading-snug drop-shadow px-2">
          {item.title}
        </h3>
      </div>

      {/* Hover face: text description */}
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
