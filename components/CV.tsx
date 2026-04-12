'use client'

import { useLang } from './LanguageContext'
import ScrollReveal from './ScrollReveal'

/* ── Color accents per experience (matched to brand logos) ── */
const expColors = [
  { accent: '#3D6DB8', bg: 'rgba(61,109,184,0.12)' },   /* Freelance — blue */
  { accent: '#2D9B7B', bg: 'rgba(45,155,123,0.12)' },   /* Mantractif — teal */
  { accent: '#E8836A', bg: 'rgba(232,131,106,0.12)' },   /* Coach Innsbruck — coral */
]

const expLogos = [
  null,                          /* Freelance — no logo */
  '/logos/mantractif.png',       /* Mantractif */
  '/logos/crossfit-innsbruck.png', /* CrossFit Innsbruck */
]

/* ── Education cards: color + logo ── */
const eduColors = [
  { accent: '#1A1A1A', bg: 'rgba(26,26,26,0.25)' },     /* ESSEC — black */
  { accent: '#2E7DBF', bg: 'rgba(46,125,191,0.15)' },    /* Excellens — blue */
  { accent: '#7C9CBF', bg: 'rgba(124,156,191,0.10)' },   /* VAE — neutral */
  { accent: '#003F6C', bg: 'rgba(0,63,108,0.20)' },      /* MCI — navy */
  { accent: '#1E3A5F', bg: 'rgba(30,58,95,0.18)' },      /* Rennes SB — dark blue */
]

const eduLogos = [
  '/logos/essec.png',
  '/logos/excellens.png',
  null,  /* VAE — no logo */
  '/logos/mci.png',
  '/logos/rennes-sb.png',
]

export default function CV() {
  const { t } = useLang()

  return (
    <section id="cv" className="py-24 md:py-32 bg-[#0F1A2E]/30">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <ScrollReveal>
          <div className="mb-16">
            <p className="text-xs font-semibold text-[#7C9CBF] uppercase tracking-widest mb-4">
              {t.cv.label}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              {t.cv.title}
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <ScrollReveal delay={80}>
              <h3 className="text-sm font-semibold text-white/40 uppercase tracking-wider mb-8 flex items-center gap-3">
                <span className="inline-block w-8 h-px bg-white/20" />
                {t.cv.experienceLabel}
              </h3>
            </ScrollReveal>

            <div className="space-y-8">
              {t.cv.experiences.map((exp: { role: string; company: string; period: string; description: string }, i: number) => {
                const color = expColors[i] ?? expColors[0]
                const logo = expLogos[i]
                return (
                  <ScrollReveal key={i} delay={100 + i * 70}>
                    <div
                      className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:rounded-full before:ring-4 group cursor-default"
                      style={{
                        '--dot-color': color.accent,
                        '--ring-color': color.bg,
                      } as React.CSSProperties & Record<string, string>}
                    >
                      <div
                        className="absolute left-0 top-2 w-2 h-2 rounded-full"
                        style={{ backgroundColor: color.accent, boxShadow: `0 0 0 4px ${color.bg}` }}
                      />
                      {i < t.cv.experiences.length - 1 && (
                        <div className="absolute left-[3px] top-4 bottom-0 w-px bg-white/6" />
                      )}

                      <div className="flex items-start gap-4 mb-2">
                        {logo && (
                          <div className="w-14 h-14 rounded-xl bg-white/10 backdrop-blur-sm p-1.5 flex-shrink-0 mt-0.5 shadow-md border border-white/10 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none rounded-xl" />
                            <img
                              src={logo}
                              alt=""
                              className="w-full h-full object-contain relative z-10 drop-shadow-sm"
                            />
                          </div>
                        )}
                        <div className="space-y-1">
                          <p className="text-xs font-medium" style={{ color: color.accent }}>{exp.period}</p>
                          <h4 className="text-base font-semibold text-white group-hover:text-[#A8C4E0] transition-colors duration-200">{exp.role}</h4>
                          <p className="text-sm text-white/50 font-medium">{exp.company}</p>
                        </div>
                      </div>
                      <p className="text-sm text-white/40 leading-relaxed group-hover:text-white/60 transition-colors duration-200">{exp.description}</p>
                    </div>
                  </ScrollReveal>
                )
              })}
            </div>
          </div>

          {/* Education */}
          <div>
            <ScrollReveal delay={120}>
              <h3 className="text-sm font-semibold text-white/40 uppercase tracking-wider mb-8 flex items-center gap-3">
                <span className="inline-block w-8 h-px bg-white/20" />
                {t.cv.educationLabel}
              </h3>
            </ScrollReveal>

            <div className="space-y-5">
              {t.cv.education.map((edu: { degree: string; school: string; year: string }, i: number) => {
                const color = eduColors[i] ?? eduColors[2]
                const logo = eduLogos[i]
                return (
                  <ScrollReveal key={i} delay={140 + i * 60}>
                    <div
                      className="border rounded-xl px-5 py-4 flex items-start gap-4 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 cursor-default"
                      style={{
                        backgroundColor: color.bg,
                        borderColor: `${color.accent}20`,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = `${color.accent}40`
                        e.currentTarget.style.boxShadow = `0 8px 24px ${color.accent}15`
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = `${color.accent}20`
                        e.currentTarget.style.boxShadow = 'none'
                      }}
                    >
                      <div
                        className="mt-0.5 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden relative shadow-sm border border-white/5"
                        style={{ backgroundColor: `${color.accent}15`, width: '3.25rem', height: '3.25rem' }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent pointer-events-none rounded-xl" />
                        {logo ? (
                          <img src={logo} alt="" className="w-10 h-10 object-contain relative z-10 drop-shadow-sm" />
                        ) : (
                          <svg className="w-4 h-4" style={{ color: color.accent }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                          </svg>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-white leading-snug">{edu.degree}</p>
                        <p className="text-xs text-white/45 mt-0.5">{edu.school}</p>
                      </div>
                      <span className="text-xs font-medium flex-shrink-0" style={{ color: `${color.accent}90` }}>{edu.year}</span>
                    </div>
                  </ScrollReveal>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
