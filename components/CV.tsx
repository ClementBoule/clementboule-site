'use client'
import { useLang } from './LanguageContext'

const accentColors = [
  {
    dot: 'before:from-[#3D6DB8] before:to-[#6B9ED4] before:ring-[#3D6DB8]/12',
    line: 'bg-[#3D6DB8]/15',
    period: 'text-[#3D6DB8]',
    periodBg: 'bg-[#3D6DB8]/8',
  },
  {
    dot: 'before:from-[#E8836A] before:to-[#F5AA88] before:ring-[#E8836A]/12',
    line: 'bg-[#E8836A]/15',
    period: 'text-[#C86A50]',
    periodBg: 'bg-[#E8836A]/8',
  },
  {
    dot: 'before:from-[#2E9E84] before:to-[#4FBFA6] before:ring-[#2E9E84]/12',
    line: 'bg-[#2E9E84]/15',
    period: 'text-[#2E9E84]',
    periodBg: 'bg-[#2E9E84]/8',
  },
  {
    dot: 'before:from-[#7B5FC5] before:to-[#A088E0] before:ring-[#7B5FC5]/12',
    line: 'bg-[#7B5FC5]/15',
    period: 'text-[#7B5FC5]',
    periodBg: 'bg-[#7B5FC5]/8',
  },
  {
    dot: 'before:from-[#D4874A] before:to-[#F0AA6A] before:ring-[#D4874A]/12',
    line: 'bg-[#D4874A]/15',
    period: 'text-[#D4874A]',
    periodBg: 'bg-[#D4874A]/8',
  },
]

const eduColors = [
  {
    iconBg: 'from-[#3D6DB8]/10 to-[#6B9ED4]/15',
    icon: 'text-[#3D6DB8]',
    year: 'text-[#3D6DB8]/80 bg-[#3D6DB8]/8',
    border: 'hover:border-[#3D6DB8]/30',
  },
  {
    iconBg: 'from-[#E8836A]/10 to-[#F5AA88]/15',
    icon: 'text-[#C86A50]',
    year: 'text-[#C86A50]/90 bg-[#E8836A]/8',
    border: 'hover:border-[#E8836A]/30',
  },
  {
    iconBg: 'from-[#2E9E84]/10 to-[#4FBFA6]/15',
    icon: 'text-[#2E9E84]',
    year: 'text-[#2E9E84]/90 bg-[#2E9E84]/8',
    border: 'hover:border-[#2E9E84]/30',
  },
  {
    iconBg: 'from-[#7B5FC5]/10 to-[#A088E0]/15',
    icon: 'text-[#7B5FC5]',
    year: 'text-[#7B5FC5]/90 bg-[#7B5FC5]/8',
    border: 'hover:border-[#7B5FC5]/30',
  },
  {
    iconBg: 'from-[#D4874A]/10 to-[#F0AA6A]/15',
    icon: 'text-[#D4874A]',
    year: 'text-[#D4874A]/90 bg-[#D4874A]/8',
    border: 'hover:border-[#D4874A]/30',
  },
]

export default function CV() {
  const { t } = useLang()

  return (
    <section id="cv" className="py-24 md:py-32 bg-[#F5F7FB]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <p className="text-xs font-semibold text-[#3D6DB8] uppercase tracking-widest mb-4">
            {t.cv.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A2B4A] leading-tight">
            {t.cv.title}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <h3 className="text-sm font-semibold text-[#9AAABB] uppercase tracking-wider mb-8 flex items-center gap-3">
              <span className="inline-block w-8 h-px bg-[#3D6DB8]/25" />
              {t.cv.experienceLabel}
            </h3>
            <div className="space-y-8">
              {t.cv.experiences.map((exp: { role: string; company: string; period: string; description: string }, i: number) => {
                const c = accentColors[i % accentColors.length]
                return (
                  <div
                    key={i}
                    className={`relative pl-6 before:absolute before:left-0 before:top-2 before:w-2.5 before:h-2.5 before:rounded-full before:bg-gradient-to-br before:ring-4 ${c.dot}`}
                  >
                    {i < t.cv.experiences.length - 1 && (
                      <div className={`absolute left-[4px] top-5 bottom-0 w-px ${c.line}`} />
                    )}
                    <div className="space-y-1 mb-2">
                      <p className={`text-xs font-semibold ${c.period}`}>{exp.period}</p>
                      <h4 className="text-base font-semibold text-[#1A2B4A]">{exp.role}</h4>
                      <p className="text-sm text-[#6B7E95] font-medium">{exp.company}</p>
                    </div>
                    <p className="text-sm text-[#8A9DB5] leading-relaxed">{exp.description}</p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-sm font-semibold text-[#9AAABB] uppercase tracking-wider mb-8 flex items-center gap-3">
              <span className="inline-block w-8 h-px bg-[#3D6DB8]/25" />
              {t.cv.educationLabel}
            </h3>
            <div className="space-y-4">
              {t.cv.education.map((edu: { degree: string; school: string; year: string }, i: number) => {
                const c = eduColors[i % eduColors.length]
                return (
                  <div
                    key={i}
                    className={`bg-white border border-[#3D6DB8]/10 rounded-2xl px-5 py-4 flex items-start gap-4 ${c.border} hover:shadow-md transition-all duration-200`}
                  >
                    <div className={`mt-0.5 w-9 h-9 rounded-xl bg-gradient-to-br ${c.iconBg} flex items-center justify-center flex-shrink-0`}>
                      <svg className={`w-4 h-4 ${c.icon}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-[#1A2B4A] leading-snug">{edu.degree}</p>
                      <p className="text-xs text-[#8A9DB5] mt-0.5">{edu.school}</p>
                    </div>
                    <span className={`text-xs font-semibold flex-shrink-0 px-2.5 py-1 rounded-lg ${c.year}`}>
                      {edu.year}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
