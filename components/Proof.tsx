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
      // Globe — portée internationale, bilinguisme
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    title: 'Bilingue FR / EN',
    desc: 'Formations et accompagnements en français et en anglais. Adapté aux équipes internationales ou aux contextes cross-culturels.',
  },
  {
    icon: (
      // Sliders — programme ajusté, sur-mesure
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    title: 'Conçu sur-mesure',
    desc: 'Pas de catalogue standard. Chaque programme est construit à partir de vos enjeux réels, de votre secteur et de vos équipes.',
  },
  {
    icon: (
      // Bouclier-check — ancrage comportemental, intégrité de la posture
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
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
