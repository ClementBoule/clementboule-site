'use client'

import { useState } from 'react'
import { useLang } from './LanguageContext'
import ScrollReveal from './ScrollReveal'

/* Color accents per experience */
const expColors = [
  { accent: '#3D6DB8', bg: 'rgba(61,109,184,0.12)' },
  { accent: '#2D9B7B', bg: 'rgba(45,155,123,0.12)' },
  { accent: '#E8836A', bg: 'rgba(232,131,106,0.12)' },
]

const expLogos = [
  null,
  '/logos/mantractif.png',
  null,
]

const expScales = [1, 2.5, 1] // scale multipliers per experience logo

/* Education cards: color + logo */
const eduColors = [
  { accent: '#1A1A1A', bg: 'rgba(26,26,26,0.08)' },
  { accent: '#2E7DBF', bg: 'rgba(46,125,191,0.08)' },
  { accent: '#7C9CBF', bg: 'rgba(124,156,191,0.06)' },
  { accent: '#003F6C', bg: 'rgba(0,63,108,0.08)' },
  { accent: '#1E3A5F', bg: 'rgba(30,58,95,0.08)' },
]

const eduLogos = [
  '/logos/essec.png',
  '/logos/excellens.png',
  null,
  null,
  '/logos/rennes-sb.png',
]

const eduScales = [1, 1, 1, 1, 2.5] // rennes-sb needs zoom

export default function CV() {
  const { t } = useLang()
  const [hoveredExp, setHoveredExp] = useState<number | null>(null)
  const [hoveredEdu, setHoveredEdu] = useState<number | null>(null)

  return (
    <section
      id="cv"
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #DDEEFF 0%, #EEF5FF 40%, #F8FBFF 100%)' }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <ScrollReveal>
          <div className="mb-16">
            <p className="text-xs font-semibold text-[#3D6DB8] uppercase tracking-widest mb-4">
              {t.cv.label}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A2B4A] leading-tight">
              {t.cv.title}
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <ScrollReveal delay={80}>
              <h3 className="text-sm font-semibold text-[#1A2B4A]/40 uppercase tracking-wider mb-8 flex items-center gap-3">
                <span className="inline-block w-8 h-px bg-[#1A2B4A]/20" />
                {t.cv.experienceLabel}
              </h3>
            </ScrollReveal>

            <div className="space-y-6">
              {t.cv.experiences.map((exp: { role: string; company: string; period: string; description: string }, i: number) => {
                const color = expColors[i] ?? expColors[0]
                const logo = expLogos[i]
                const expScale = expScales[i] ?? 1
                const isHovered = hoveredExp === i

                return (
                  <ScrollReveal key={i} delay={100 + i * 70}>
                    <div
                      className="relative cursor-default transition-all duration-300 rounded-xl p-4 pl-10"
                      style={{
                        backgroundColor: isHovered ? `${color.accent}08` : 'transparent',
                        boxShadow: isHovered ? `0 4px 20px ${color.accent}10` : 'none',
                      }}
                      onMouseEnter={() => setHoveredExp(i)}
                      onMouseLeave={() => setHoveredExp(null)}
                    >
                      <div
                        className="absolute left-4 top-5 w-2.5 h-2.5 rounded-full transition-all duration-300"
                        style={{
                          backgroundColor: color.accent,
                          boxShadow: isHovered ? `0 0 0 6px ${color.bg}` : `0 0 0 4px ${color.bg}`,
                          transform: isHovered ? 'scale(1.3)' : 'scale(1)',
                        }}
                      />
                      {i < t.cv.experiences.length - 1 && (
                        <div className="absolute left-[19px] top-8 bottom-0 w-px bg-[#1A2B4A]/10" />
                      )}

                      <div className="flex items-start gap-5 mb-2">
                        {logo && (
                          <div
                            className="rounded-2xl bg-white p-3 flex-shrink-0 mt-0.5 relative overflow-hidden transition-all duration-300"
                            style={{
                              width: '8rem',
                              height: '3.2rem',
                              border: `2px solid ${isHovered ? color.accent : 'rgba(26,43,74,0.1)'}`,
                              boxShadow: isHovered ? `0 8px 24px ${color.accent}25` : '0 2px 8px rgba(0,0,0,0.08)',
                              transform: isHovered ? 'scale(1.06)' : 'scale(1)',
                            }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent pointer-events-none rounded-2xl" />
                            <img src={logo} alt="" className="w-full h-full object-contain relative z-10" style={{ transform: `scale(${expScale})`, transformOrigin: 'center center' }} />
                          </div>
                        )}
                        <div className="space-y-1 flex-1">
                          <p className="text-xs font-medium" style={{ color: color.accent }}>{exp.period}</p>
                          <h4
                            className="text-base font-semibold transition-colors duration-200"
                            style={{ color: isHovered ? color.accent : '#1A2B4A' }}
                          >{exp.role}</h4>
                          <p className="text-sm font-medium" style={{ color: '#6B7E95' }}>{exp.company}</p>
                        </div>
                      </div>
                      <p
                        className="text-sm leading-relaxed transition-colors duration-200"
                        style={{ color: isHovered ? '#4A5B70' : '#9AAABB' }}
                      >{exp.description}</p>
                    </div>
                  </ScrollReveal>
                )
              })}
            </div>
          </div>

          {/* Education */}
          <div>
            <ScrollReveal delay={120}>
              <h3 className="text-sm font-semibold text-[#1A2B4A]/40 uppercase tracking-wider mb-8 flex items-center gap-3">
                <span className="inline-block w-8 h-px bg-[#1A2B4A]/20" />
                {t.cv.educationLabel}
              </h3>
            </ScrollReveal>

            <div className="space-y-4">
              {t.cv.education.map((edu: { degree: string; school: string; year: string }, i: number) => {
                const color = eduColors[i] ?? eduColors[2]
                const logo = eduLogos[i]
            const eduScale = eduScales[i] ?? 1
                const isHovered = hoveredEdu === i

                return (
                  <ScrollReveal key={i} delay={140 + i * 60}>
                    <div
                      className="rounded-2xl px-5 py-4 flex items-center gap-5 transition-all duration-300 cursor-default bg-white/70 backdrop-blur-sm"
                      style={{
                        border: `2px solid ${isHovered ? color.accent : color.accent + '18'}`,
                        boxShadow: isHovered ? `0 10px 30px ${color.accent}20` : '0 2px 8px rgba(0,0,0,0.06)',
                        transform: isHovered ? 'translateY(-3px) scale(1.01)' : 'none',
                        backgroundColor: isHovered ? `${color.accent}06` : 'rgba(255,255,255,0.7)',
                      }}
                      onMouseEnter={() => setHoveredEdu(i)}
                      onMouseLeave={() => setHoveredEdu(null)}
                    >
                      <div
                        className="rounded-2xl flex items-center justify-center flex-shrink-0 relative overflow-hidden transition-all duration-300"
                        style={{
                          backgroundColor: logo ? '#ffffff' : `${color.accent}08`,
                          width: '5rem',
                          height: '5rem',
                          border: `2px solid ${isHovered ? color.accent : color.accent + '20'}`,
                          transform: isHovered ? 'scale(1.08)' : 'scale(1)',
                          boxShadow: isHovered ? `0 4px 16px ${color.accent}20` : '0 2px 4px rgba(0,0,0,0.05)',
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent pointer-events-none rounded-2xl" />
                        {logo ? (
                          <img src={logo} alt="" className="w-28 h-11 object-contain relative z-10 p-1" style={{ transform: `scale(${eduScale})`, transformOrigin: 'center center' }} />
                        ) : (
                          <svg className="w-6 h-6" style={{ color: color.accent }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                          </svg>
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-[#1A2B4A] leading-snug">{edu.degree}</p>
                        <p className="text-xs text-[#6B7E95] mt-1">{edu.school}</p>
                      </div>
                      <span
                        className="text-xs font-semibold flex-shrink-0 transition-colors duration-200"
                        style={{ color: isHovered ? color.accent : color.accent + '70' }}
                      >{edu.year}</span>
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
