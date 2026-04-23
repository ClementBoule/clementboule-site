'use client'
import { useState } from 'react'
import { useLang } from './LanguageContext'

const FAQ_FR = [
  {
    q: "Tu proposes des formations finançables OPCO ?",
    a: "Non. Je travaille en direct avec mes clients — pas de certification Qualiopi, pas de parcours OPCO. Ça me permet de construire des programmes vraiment sur-mesure, sans contrainte administrative, et de m'adapter en temps réel. Si votre besoin est un catalogue standard financé, je ne suis probablement pas le bon interlocuteur.",
  },
  {
    q: "Tu interviens en anglais ?",
    a: "Oui. Je suis bilingue FR / EN et j'anime régulièrement des formations, des coachings et des conférences en anglais — notamment pour des business schools et des équipes internationales.",
  },
  {
    q: "Quelle est la durée minimale d'une intervention ?",
    a: "Une demi-journée (3h30) est le format minimum pour créer une vraie dynamique de groupe. La plupart de mes modules se déploient sur 1 à 2 jours. Pour le coaching individuel, je travaille sur des séquences de 3 à 6 séances.",
  },
  {
    q: "Tu travailles avec des grandes écoles ?",
    a: "Oui, c'est une part importante de mon activité. J'interviens dans plusieurs business schools et grandes écoles parisiennes, sur des modules de management, leadership et développement des compétences.",
  },
  {
    q: "Comment se passe la facturation ?",
    a: "Je suis auto-entrepreneur. Je facture à la journée ou au module selon le projet. Tout est défini et validé dans un devis avant toute intervention.",
  },
]

const FAQ_EN = [
  {
    q: "Do you offer government-funded training programs?",
    a: "No. I work directly with my clients — no Qualiopi certification, no subsidized programs. This allows me to build truly tailored programs, without administrative constraints, and to adapt in real time. If your need is a standard funded catalog, I'm probably not the right fit.",
  },
  {
    q: "Do you train in English?",
    a: "Yes. I'm bilingual FR / EN and I regularly deliver training, coaching, and talks in English — especially for business schools and international teams.",
  },
  {
    q: "What is the minimum duration of an engagement?",
    a: "A half-day (3.5h) is the minimum format to create real group dynamics. Most of my modules run over 1 to 2 days. For individual coaching, I work in sequences of 3 to 6 sessions.",
  },
  {
    q: "Do you work with business schools?",
    a: "Yes, it's a significant part of my activity. I deliver programs in several Parisian business schools and grandes écoles, covering management, leadership, and skills development.",
  },
  {
    q: "How does billing work?",
    a: "I operate as a self-employed consultant. I bill per day or per module depending on the project. Everything is defined and validated in a quote before any engagement.",
  },
]

export default function HomeFAQ() {
  const { lang } = useLang()
  const faq = lang === 'fr' ? FAQ_FR : FAQ_EN
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold text-[#3D6DB8] uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A2B4A] leading-tight">
            {lang === 'fr' ? 'Questions fréquentes' : 'Frequently asked questions'}
          </h2>
        </div>

        <div className="divide-y divide-[#1A2B4A]/8">
          {faq.map((item, i) => (
            <div key={i} className="py-5">
              <button
                className="w-full flex items-start justify-between gap-4 text-left group"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className={`text-base font-semibold transition-colors ${open === i ? 'text-[#3D6DB8]' : 'text-[#1A2B4A] group-hover:text-[#3D6DB8]'}`}>
                  {item.q}
                </span>
                <svg
                  className={`w-5 h-5 shrink-0 text-[#3D6DB8] mt-0.5 transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {open === i && (
                <p className="mt-3 text-sm text-[#6B7E95] leading-relaxed pr-8">
                  {item.a}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="/faq" className="text-sm font-semibold text-[#3D6DB8] hover:underline">
            {lang === 'fr' ? 'Voir toutes les questions →' : 'See all questions →'}
          </a>
        </div>
      </div>
    </section>
  )
}
