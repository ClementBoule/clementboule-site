'use client'
import { useEffect, useRef, useState } from 'react'
import { useLang } from './LanguageContext'
import { CALENDLY_URL } from '../lib/cta-config'

const STEPS_FR = [
  { num: '01', title: 'Échange de cadrage', desc: 'Un appel de 30 minutes pour comprendre votre contexte, vos enjeux, ce que vous voulez changer.', badge: '30 min' },
  { num: '02', title: 'Diagnostic & propo', desc: "J'analyse vos besoins, je vous propose un programme sur-mesure : format, durée, objectifs mesurables.", badge: 'Définir ensemble' },
  { num: '03', title: 'On démarre', desc: "Présentiel ou distanciel. J'ajuste le contenu selon ce qui se passe vraiment dans le groupe.", badge: 'Union Européenne' },
  { num: '04', title: 'Bilan & suivi', desc: "Bilan après la formation. Je reste joignable pour les questions des semaines suivantes.", badge: 'Suivi inclus' },
]

const STEPS_EN = [
  { num: '01', title: 'Discovery call', desc: '30 minutes to understand your context, your challenges, what you want to change.', badge: '30 min' },
  { num: '02', title: 'Diagnosis & proposal', desc: 'I analyze your needs, I propose a tailored program: format, duration, measurable goals.', badge: 'Together' },
  { num: '03', title: 'We start', desc: "In-person or remote. I adjust the content based on what's really happening in the group.", badge: 'European Union' },
  { num: '04', title: 'Debrief & follow-up', desc: 'Debrief after training. I stay reachable for questions in the following weeks.', badge: 'Included' },
]

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => entry.isIntersecting && setInView(true), { threshold })
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, inView }
}

export default function Process() {
  const { lang } = useLang()
  const { ref, inView } = useInView()
  const steps = lang === 'fr' ? STEPS_FR : STEPS_EN

  return (
    <section ref={ref} className="bg-cb-sauge-deep text-cb-sable py-20 md:py-28 px-6 relative overflow-hidden border-t-4 border-cb-encre">
      <div className="absolute top-1/2 left-0 right-0 h-2 bg-cb-cardinal -translate-y-1/2 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto">
        <div className="grid md:grid-cols-[2fr_1fr] gap-10 items-end mb-14">
          <div>
            <span className="inline-block font-marker text-cb-rose text-lg -rotate-2 mb-3">
              {lang === 'fr' ? 'Comment on démarre →' : 'How we start →'}
            </span>
            <h2 className="font-anton text-5xl md:text-7xl lg:text-8xl uppercase leading-[0.92] text-cb-sable">
              {lang === 'fr' ? (
                <>Quatre étapes.<br />Pas une <span className="inline-block bg-cb-rose text-cb-encre px-3 py-0.5 -rotate-1 rounded-sm">de plus</span>.</>
              ) : (
                <>Four steps.<br />Not <span className="inline-block bg-cb-rose text-cb-encre px-3 py-0.5 -rotate-1 rounded-sm">one more</span>.</>
              )}
            </h2>
          </div>
          <div className="text-base font-medium border-l-4 border-cb-rose pl-5 max-w-md text-cb-sable/80">
            {lang === 'fr'
              ? "Du premier appel au bilan, je suis votre seul interlocuteur. Pas d'intermédiaire, pas de relais."
              : "From the first call to the debrief, I'm your only contact. No intermediaries, no handoffs."}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <div
              key={s.num}
              className="bg-cb-encre border-[3px] border-cb-sable rounded p-5 md:p-6 transition-transform duration-200 hover:-translate-y-1.5 relative"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(24px)',
                transition: `opacity 0.6s ease ${i * 0.08}s, transform 0.6s ease ${i * 0.08}s`,
              }}
            >
              <div className="font-anton text-7xl md:text-8xl text-cb-rose leading-none mb-3">{s.num}</div>
              <h3 className="font-anton text-xl uppercase mb-2.5 leading-tight">{s.title}</h3>
              <p className="text-sm text-cb-sable/80 leading-snug text-pretty mb-4">{s.desc}</p>
              <span className="inline-block px-2.5 py-1 border-2 border-cb-rose text-cb-rose font-bold text-[10px] uppercase tracking-widest rounded-sm">{s.badge}</span>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap gap-3 justify-center md:justify-start">
          {/* CTA primaire : composer mon format vers MatchQuiz */}
          <a
            href="/#quiz"
            className="inline-flex items-center gap-2 bg-cb-sarcelle text-cb-sable font-bold uppercase tracking-wider text-xs px-6 py-3.5 border-[2.5px] border-cb-sable rounded shadow-[4px_4px_0_var(--cb-rose)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[6px_6px_0_var(--cb-rose)] transition-all duration-150"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7l-3 3m0 0l-3-3m3 3V8" />
            </svg>
            {lang === 'fr' ? 'Composer mon format' : 'Compose my format'}
          </a>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-cb-sable text-cb-encre font-bold uppercase tracking-wider text-xs px-6 py-3.5 border-2 border-cb-sable rounded hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all duration-150"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {lang === 'fr' ? 'Réserver 30 min' : 'Book 30 min'}
          </a>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-transparent text-cb-sable font-bold uppercase tracking-wider text-xs px-6 py-3.5 border-2 border-cb-sable/60 rounded hover:border-cb-sable hover:bg-cb-sable/10 transition-all duration-150"
          >
            {lang === 'fr' ? "Ou m'écrire" : 'Or write to me'}
          </a>
        </div>
      </div>
    </section>
  )
}
