'use client'

// ─── Chiffres clés ────────────────────────────────────────────────────────────
// Source : 25 participants × 15 sessions × 5 ans d'activité
const STATS = [
  { value: '+1 800', label: 'participants formés' },
  { value: '5 ans', label: "d'expérience terrain" },
  { value: '15', label: 'sessions animées / an' },
  { value: 'FR / EN', label: 'Bilingue' },
]

const PILLARS = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
      </svg>
    ),
    title: 'Bilingue FR / EN',
    desc: 'Formations et accompagnements en français et en anglais. Adapté aux équipes internationales ou aux contextes cross-culturels.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
    title: 'Conçu sur-mesure',
    desc: 'Pas de catalogue standard. Chaque programme est construit à partir de vos enjeux réels, de votre secteur et de vos équipes.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: 'La posture avant le contenu',
    desc: "Ce qui change durablement, c'est comment les personnes se positionnent — pas juste ce qu'elles savent. L'ancrage comportemental est au cœur de chaque intervention.",
  },
]

// ─── Composant ──────────────────────────────────────────────────────────────
export default function Proof() {
  return (
    <section className="relative py-16 md:py-20 bg-white overflow-hidden">
      <style>{`
        @keyframes cbFadeUp2 {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-6">

        {/* Chiffres clés */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 mb-16 md:mb-20">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className="text-center"
              style={{ animation: `cbFadeUp2 0.5s ease both ${i * 80}ms` }}
            >
              <div className="text-3xl md:text-4xl font-extrabold text-[#1A2B4A] mb-1 tracking-tight">
                {s.value}
              </div>
              <div className="text-sm text-[#6B7E95] leading-snug">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Séparateur */}
        <div className="w-16 h-0.5 bg-[#3D6DB8]/30 mx-auto mb-14" />

        {/* 3 piliers différenciants */}
        <div
          className="text-center mb-10"
          style={{ animation: 'cbFadeUp2 0.5s ease both 320ms' }}
        >
          <p className="text-xs font-semibold text-[#3D6DB8] uppercase tracking-widest mb-3">
            Pourquoi travailler ensemble
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A2B4A] max-w-xl mx-auto leading-tight">
            Une approche qui change ce qui dure
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {PILLARS.map((p, i) => (
            <div
              key={p.title}
              className="group relative p-7 rounded-2xl border border-[#1A2B4A]/8 bg-[#F8FAFE] hover:bg-white hover:shadow-lg hover:border-[#3D6DB8]/20 transition-all duration-300"
              style={{ animation: `cbFadeUp2 0.55s ease both ${400 + i * 90}ms` }}
            >
              <div className="w-11 h-11 rounded-xl bg-[#3D6DB8]/10 flex items-center justify-center text-[#3D6DB8] mb-5 group-hover:bg-[#3D6DB8] group-hover:text-white transition-colors duration-300">
                {p.icon}
              </div>
              <h3 className="text-base font-bold text-[#1A2B4A] mb-2">{p.title}</h3>
              <p className="text-sm text-[#6B7E95] leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
