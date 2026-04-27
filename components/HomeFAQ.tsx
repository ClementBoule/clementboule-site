'use client'
import { useState } from 'react'
import { useLang } from './LanguageContext'

const FAQ_FR = [
  {
    q: "Vous proposez des formations finançables OPCO ?",
    a: "Non. Je travaille en direct avec mes clients, sans Qualiopi ni OPCO. Ça me permet de construire des programmes adaptés à votre contexte, sans contrainte administrative, et d'ajuster en cours de route. Si votre besoin est un catalogue standard financé, je ne suis probablement pas le bon interlocuteur.",
  },
  {
    q: "Vous intervenez en anglais ?",
    a: "Oui. Je suis bilingue FR / EN et j'anime régulièrement des formations, des coachings et des conférences en anglais, notamment pour des business schools et des équipes internationales.",
  },
  {
    q: "Quelle est la durée minimale d'une intervention ?",
    a: "Une demi-journée (3h30) est le minimum pour créer une dynamique de groupe utile. La plupart de mes modules durent 1 à 2 jours. Pour le coaching individuel, je travaille sur des séquences de 3 à 6 séances.",
  },
  {
    q: "Vous travaillez avec des grandes écoles ?",
    a: "Oui, c'est une part importante de mon activité. J'interviens dans plusieurs business schools et grandes écoles parisiennes, sur du management et du développement des compétences.",
  },
  {
    q: "Comment se passe la facturation ?",
    a: "Je facture à la journée ou au module selon le projet. Tout est défini et validé dans un devis avant toute intervention. Statut juridique précisé en mentions légales.",
  },
]

const FAQ_EN = [
  {
    q: "Do you offer government-funded training programs?",
    a: "No. I work directly with my clients, without Qualiopi certification or OPCO funding. It lets me build programs adapted to your context, without administrative constraints, and adjust as we go. If you need a standard funded catalog, I'm probably not the right fit.",
  },
  {
    q: "Do you train in English?",
    a: "Yes. I'm bilingual FR / EN and I regularly deliver training, coaching, and talks in English, especially for business schools and international teams.",
  },
  {
    q: "What is the minimum duration of an engagement?",
    a: "A half-day (3.5h) is the minimum to create a useful group dynamic. Most of my modules last 1 to 2 days. For individual coaching, I work in sequences of 3 to 6 sessions.",
  },
  {
    q: "Do you work with business schools?",
    a: "Yes, it's a significant part of my activity. I deliver programs in several Parisian business schools and grandes écoles, on management and skills development.",
  },
  {
    q: "How does billing work?",
    a: "I bill per day or per module depending on the project. Everything is defined and validated in a quote before any engagement.",
  },
]

export default function HomeFAQ() {
  const { lang } = useLang()
  const faq = lang === 'fr' ? FAQ_FR : FAQ_EN
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="bg-cb-creme py-20 md:py-28 px-6 relative overflow-hidden border-t-4 border-cb-encre">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block font-marker text-cb-cardinal text-lg -rotate-2 mb-3">
            {lang === 'fr' ? 'Vos questions →' : 'Your questions →'}
          </span>
          <h2 className="font-anton text-5xl md:text-6xl lg:text-7xl uppercase leading-[0.92] text-cb-encre">
            {lang === 'fr' ? (
              <>Questions <span className="inline-block bg-cb-sarcelle text-cb-sable px-3 py-0.5 -rotate-1 rounded-sm">fréquentes</span>.</>
            ) : (
              <>Frequently <span className="inline-block bg-cb-sarcelle text-cb-sable px-3 py-0.5 -rotate-1 rounded-sm">asked</span>.</>
            )}
          </h2>
        </div>

        {/* Liste accordéons brutalist */}
        <div className="space-y-4">
          {faq.map((item, i) => {
            const isOpen = open === i
            return (
              <div
                key={i}
                className={`bg-white border-[2.5px] border-cb-sauge-deep rounded transition-all duration-200 ${isOpen ? '' : 'hover:translate-x-[-2px] hover:translate-y-[-2px]'}`}
                style={{
                  boxShadow: isOpen ? `8px 8px 0 var(--cb-sarcelle)` : `5px 5px 0 var(--cb-sauge)`,
                  animation: `cbFadeUp 0.5s ease both ${i * 70}ms`,
                }}
              >
                <button
                  className="w-full flex items-start justify-between gap-4 text-left p-5 md:p-6 group"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className={`font-anton text-lg md:text-xl uppercase leading-tight ${isOpen ? 'text-cb-sarcelle-deep' : 'text-cb-encre group-hover:text-cb-sarcelle-deep'} transition-colors`}>
                    {item.q}
                  </span>
                  <span className={`shrink-0 mt-1 w-8 h-8 border-2 border-cb-sauge-deep rounded-sm flex items-center justify-center font-anton text-lg transition-all ${isOpen ? 'bg-cb-sarcelle text-cb-sable rotate-45' : 'bg-cb-sable text-cb-encre'}`}>
                    +
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 md:px-6 pb-5 md:pb-6 -mt-2">
                    <div className="border-t-2 border-cb-sauge pt-4">
                      <p className="text-sm md:text-base text-cb-encre-soft leading-relaxed text-pretty">
                        {item.a}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* CTA "voir toutes" */}
        <div className="mt-12 text-center">
          <a
            href="/faq"
            className="inline-block font-anton text-base md:text-lg uppercase tracking-wider text-cb-encre border-b-[3px] border-cb-cardinal pb-1 hover:translate-y-[-2px] transition-transform"
          >
            {lang === 'fr' ? 'Voir toutes les questions →' : 'See all questions →'}
          </a>
        </div>

      </div>
    </section>
  )
}
