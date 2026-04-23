'use client'
import { useLanguage } from './LanguageContext'

const STEPS = {
  fr: [
    { num: '01', title: 'Diagnostic', desc: "On commence par un echange pour comprendre votre contexte, vos equipes et vos objectifs reels. Pas de template — une vraie conversation." },
    { num: '02', title: 'Conception', desc: "Je construis un programme sur-mesure : contenu, format, duree, outils. Chaque module repond a un besoin identifie avec vous." },
    { num: '03', title: 'Animation', desc: "J'anime en direct, seul, avec une pedagogie active. Je m'adapte en temps reel a la dynamique du groupe." },
    { num: '04', title: 'Suivi', desc: "Bilan post-formation, points de progression, modules de suivi si necessaire. L'apprentissage ne s'arrete pas a la derniere slide." },
  ],
  en: [
    { num: '01', title: 'Diagnosis', desc: "We start with a conversation to understand your context, teams and real objectives. No template — a genuine exchange." },
    { num: '02', title: 'Design', desc: "I build a tailored programme: content, format, duration, tools. Each module addresses a need identified with you." },
    { num: '03', title: 'Delivery', desc: "I facilitate live, alone, with active pedagogy. I adapt in real time to the group dynamics." },
    { num: '04', title: 'Follow-up', desc: "Post-training debrief, progress checkpoints, follow-up modules if needed. Learning does not stop at the last slide." },
  ],
}

export default function Process() {
  const { lang } = useLanguage()
  const steps = STEPS[lang]

  return (
    <section className="py-20 bg-[#F5F7FB]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold text-[#3D6DB8] uppercase tracking-widest mb-3">
            {lang === 'fr' ? 'Ma methode' : 'My method'}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A2B4A]">
            {lang === 'fr' ? 'Comment je travaille' : 'How I work'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div key={step.num} className="bg-white rounded-2xl border border-[#1A2B4A]/6 p-6 relative">
              <span className="text-4xl font-black text-[#3D6DB8]/10 leading-none block mb-4">{step.num}</span>
              <h3 className="text-base font-bold text-[#1A2B4A] mb-2">{step.title}</h3>
              <p className="text-sm text-[#6B7E95] leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
