'use client'
import { useState } from 'react'
import { useLanguage } from './LanguageContext'

const FAQ = {
  fr: [
    { q: "Tu travailles avec quel type de clients ?", a: "Business schools et grandes ecoles parisiennes, PME, grandes entreprises, associations et institutions publiques. Ce qui varie, c'est le secteur — pas l'exigence. Je travaille en francais et en anglais." },
    { q: "Tes formations sont financables OPCO ?", a: "Non. Je travaille en direct, sans Qualiopi. Ca me permet de construire des programmes vraiment sur-mesure, sans contrainte administrative." },
    { q: "Quelle est la duree minimale d'une intervention ?", a: "Une demi-journee (3h30) est le minimum. La plupart des modules se deploient sur 1 a 2 jours. Pour le coaching individuel, je propose des sequences de 3 a 6 seances." },
    { q: "Tu peux venir dans nos locaux ?", a: "Oui, je me deplace en Ile-de-France et dans toute la France selon les projets. Les frais de deplacement hors Paris sont mentionnes au devis." },
    { q: "C'est quoi le test DISC propose sur le site ?", a: "Un outil d'analyse comportementale gratuit et indicatif — 4 profils, 10 minutes, sans inscription. Utile pour comprendre comment vous fonctionnez en equipe ou en management." },
  ],
  en: [
    { q: "What type of clients do you work with?", a: "Paris business schools, SMEs, large corporations, associations and public institutions. What varies is the sector — not the standard. I work in both French and English." },
    { q: "Are your trainings eligible for OPCO funding?", a: "No. I work directly with clients, without Qualiopi certification. This lets me build truly tailored programmes without administrative constraints." },
    { q: "What is the minimum duration for an engagement?", a: "A half-day (3h30) is the minimum. Most modules run over 1 to 2 days. For individual coaching, I offer sequences of 3 to 6 sessions." },
    { q: "Can you come to our offices?", a: "Yes, I travel throughout the Paris region and across France. Travel expenses outside Paris are included in the quote." },
    { q: "What is the DISC test on the site?", a: "A free, indicative behavioural assessment tool — 4 profiles, 10 minutes, no sign-up. Useful for understanding how you function in teams or management." },
  ],
}

export default function HomeFAQ() {
  const { lang } = useLanguage()
  const items = FAQ[lang]
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold text-[#3D6DB8] uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A2B4A]">
            {lang === 'fr' ? 'Questions frequentes' : 'Frequently asked questions'}
          </h2>
        </div>

        <div className="divide-y divide-[#1A2B4A]/8">
          {items.map((item, i) => (
            <div key={i} className="py-5">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 text-left"
              >
                <span className="text-base font-semibold text-[#1A2B4A]">{item.q}</span>
                <svg
                  className={`w-5 h-5 text-[#3D6DB8] shrink-0 transition-transform ${open === i ? 'rotate-180' : ''}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {open === i && (
                <p className="mt-3 text-sm text-[#6B7E95] leading-relaxed">{item.a}</p>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="/faq"
            className="text-sm font-semibold text-[#3D6DB8] hover:underline inline-flex items-center gap-1"
          >
            {lang === 'fr' ? 'Toutes les questions' : 'All questions'}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
