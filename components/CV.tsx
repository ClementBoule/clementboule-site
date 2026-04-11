'use client'
import { useLang } from './LanguageContext'

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
              {t.cv.experiences.map((exp: { role: string; company: string; period: string; description: string }, i: number) => (
                <div
                  key={i}
                  className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-2.5 before:h-2.5 before:rounded-full before:bg-gradient-to-br before:from-[#3D6DB8] before:to-[#6B9ED4] before:ring-4 before:ring-[#3D6DB8]/12"
                >
                  {i < t.cv.experiences.length - 1 && (
                    <div className="absolute left-[4px] top-5 bottom-0 w-px bg-[#3D6DB8]/15" />
                  )}
                  <div className="space-y-1 mb-2">
                    <p className="text-xs font-semibold text-[#3D6DB8]">{exp.period}</p>
                    <h4 className="text-base font-semibold text-[#1A2B4A]">{exp.role}</h4>
                    <p className="text-sm text-[#6B7E95] font-medium">{exp.company}</p>
                  </div>
                  <p className="text-sm text-[#8A9DB5] leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-sm font-semibold text-[#9AAABB] uppercase tracking-wider mb-8 flex items-center gap-3">
              <span className="inline-block w-8 h-px bg-[#3D6DB8]/25" />
              {t.cv.educationLabel}
            </h3>
            <div className="space-y-4">
              {t.cv.education.map((edu: { degree: string; school: string; year: string }, i: number) => (
                <div
                  key={i}
                  className="bg-white border border-[#3D6DB8]/10 rounded-2xl px-5 py-4 flex items-start gap-4 hover:border-[#3D6DB8]/25 hover:shadow-md hover:shadow-[#3D6DB8]/6 transition-all duration-200"
                >
                  <div className="mt-0.5 w-9 h-9 rounded-xl bg-gradient-to-br from-[#3D6DB8]/10 to-[#6B9ED4]/15 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-[#3D6DB8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-[#1A2B4A] leading-snug">{edu.degree}</p>
                    <p className="text-xs text-[#8A9DB5] mt-0.5">{edu.school}</p>
                  </div>
                  <span className="text-xs font-semibold text-[#3D6DB8]/70 flex-shrink-0 bg-[#3D6DB8]/8 px-2.5 py-1 rounded-lg">
                    {edu.year}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
