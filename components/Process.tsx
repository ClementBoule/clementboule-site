'use client'
import { useLang } from './LanguageContext'

const STEPS_FR = [
  {
    number: '01',
    title: 'Échange de cadrage',
    desc: "Un appel de 30 minutes pour comprendre votre contexte, vos enjeux et ce que vous voulez changer concrètement.",
  },
  {
    number: '02',
    title: 'Diagnostic & proposition',
    desc: "J'analyse vos besoins et vous propose un programme sur-mesure : format, durée, objectifs mesurables.",
  },
  {
    number: '03',
    title: 'Déploiement',
    desc: "Les sessions se déroulent en présentiel ou à distance. Chaque module est adapté à vos équipes en temps réel.",
  },
  {
    number: '04',
    title: 'Debriefing & suivi',
    desc: "Un bilan post-formation avec indicateurs concrets. Je reste disponible pour ancrer les acquis dans la durée.",
  },
]

const STEPS_EN = [
  {
    number: '01',
    title: 'Discovery call',
    desc: "A 30-minute call to understand your context, your challenges, and what you want to concretely change.",
  },
  {
    number: '02',
    title: 'Diagnosis & proposal',
    desc: "I analyze your needs and propose a tailored program: format, duration, measurable objectives.",
  },
  {
    number: '03',
    title: 'Delivery',
    desc: "Sessions run in person or remotely. Each module is adapted to your teams in real time.",
  },
  {
    number: '04',
    title: 'Debrief & follow-up',
    desc: "A post-training review with concrete indicators. I stay available to anchor the learnings over time.",
  },
]

export default function Process() {
  const { lang } = useLang()
  const steps = lang === 'fr' ? STEPS_FR : STEPS_EN

  return (
    <section className="py-20 md:py-28 bg-[#F5F7FB]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="text-xs font-semibold text-[#3D6DB8] uppercase tracking-widest mb-3">
            {lang === 'fr' ? 'Comment ça marche' : 'How it works'}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A2B4A] leading-tight">
            {lang === 'fr' ? 'De l\'intention à l\'impact, en 4 étapes' : 'From intention to impact, in 4 steps'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="relative p-7 bg-white rounded-2xl border border-[#1A2B4A]/6 hover:shadow-md hover:border-[#3D6DB8]/20 transition-all duration-300"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {/* Connector line (hidden on last) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-9 left-full w-full h-px bg-gradient-to-r from-[#3D6DB8]/20 to-transparent -z-0 pointer-events-none" />
              )}
              <span className="inline-block text-4xl font-extrabold text-[#3D6DB8]/15 mb-4 leading-none">
                {step.number}
              </span>
              <h3 className="text-base font-bold text-[#1A2B4A] mb-2">{step.title}</h3>
              <p className="text-sm text-[#6B7E95] leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#3D6DB8] text-white font-semibold px-7 py-3.5 rounded-full hover:bg-[#2D5A9E] hover:-translate-y-0.5 shadow-md hover:shadow-lg transition-all duration-200"
          >
            {lang === 'fr' ? 'Démarrer un projet' : 'Start a project'}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
