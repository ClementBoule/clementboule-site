'use client'
import { useLang } from './LanguageContext'

// ─── Chiffres clés ────────────────────────────────────────────────────────────
const STATS_FR = [
  { value: '+1 800', label: 'participants formés', color: 'sarcelle', rot: '-rotate-[0.6deg]' },
  { value: '8 ans', label: "d'accompagnement", color: 'terracotta', rot: 'rotate-[0.4deg]' },
  { value: 'FR / EN', label: 'bilingue', color: 'sauge-deep', rot: '-rotate-[0.3deg]' },
]
const STATS_EN = [
  { value: '+1,800', label: 'people trained', color: 'sarcelle', rot: '-rotate-[0.6deg]' },
  { value: '8 yrs', label: 'of coaching', color: 'terracotta', rot: 'rotate-[0.4deg]' },
  { value: 'FR / EN', label: 'bilingual', color: 'sauge-deep', rot: '-rotate-[0.3deg]' },
]

const PILLARS_FR = [
  {
    tag: '01',
    title: 'Bilingue FR / EN',
    desc: "Je forme en français et en anglais. Pratique pour les équipes internationales ou les contextes multiculturels.",
    color: 'sarcelle',
    shadow: 'var(--cb-sarcelle)',
    rot: '-rotate-[0.5deg]',
  },
  {
    tag: '02',
    title: 'Conçu sur-mesure',
    desc: 'Pas de catalogue standard. Chaque programme est construit à partir de vos enjeux réels, de votre secteur et de vos équipes.',
    color: 'terracotta',
    shadow: 'var(--cb-terracotta)',
    rot: 'rotate-[0.6deg]',
  },
  {
    tag: '03',
    title: 'La posture avant le contenu',
    desc: "Ce qui change vraiment, c'est la façon dont les gens se positionnent, pas juste ce qu'ils savent. C'est ça qui reste après la formation.",
    color: 'sauge-deep',
    shadow: 'var(--cb-sauge-deep)',
    rot: '-rotate-[0.4deg]',
  },
]

const PILLARS_EN = [
  {
    tag: '01',
    title: 'Bilingual FR / EN',
    desc: 'I train in French and English. Useful for international teams or multicultural contexts.',
    color: 'sarcelle',
    shadow: 'var(--cb-sarcelle)',
    rot: '-rotate-[0.5deg]',
  },
  {
    tag: '02',
    title: 'Built for you',
    desc: 'No standard catalog. Every program is built from your real challenges, your sector, and your teams.',
    color: 'terracotta',
    shadow: 'var(--cb-terracotta)',
    rot: 'rotate-[0.6deg]',
  },
  {
    tag: '03',
    title: 'Posture before content',
    desc: "What really changes is how people position themselves, not just what they know. That's what stays after the training.",
    color: 'sauge-deep',
    shadow: 'var(--cb-sauge-deep)',
    rot: '-rotate-[0.4deg]',
  },
]

// ─── Composant ──────────────────────────────────────────────────────────────
export default function Proof() {
  const { lang } = useLang()
  const stats = lang === 'fr' ? STATS_FR : STATS_EN
  const pillars = lang === 'fr' ? PILLARS_FR : PILLARS_EN

  return (
    <section className="bg-cb-creme py-20 md:py-28 px-6 relative overflow-hidden border-t-4 border-cb-encre">
      <div className="max-w-7xl mx-auto">

        {/* Chiffres clés, Anton géants polychromes */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 mb-20 md:mb-24">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`text-center ${s.rot}`}
              style={{ animation: `cbFadeUp 0.6s ease both ${i * 100}ms` }}
            >
              <div className={`font-anton text-6xl md:text-7xl lg:text-8xl uppercase leading-[0.9] mb-2 text-cb-${s.color}`}>
                {s.value}
              </div>
              <div className="text-sm md:text-base font-medium text-cb-encre-soft uppercase tracking-widest">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Bande sauge traversante */}
        <div className="relative mb-14">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-cb-sauge -translate-y-1/2 pointer-events-none" />
          <div className="relative flex justify-center">
            <span className="bg-cb-creme px-6 font-marker text-cb-cardinal text-lg -rotate-2">
              {lang === 'fr' ? 'Pourquoi travailler ensemble →' : 'Why work together →'}
            </span>
          </div>
        </div>

        {/* Headline */}
        <div className="grid md:grid-cols-[2fr_1fr] gap-10 items-end mb-14">
          <h2 className="font-anton text-5xl md:text-6xl lg:text-7xl uppercase leading-[0.92] text-cb-encre">
            {lang === 'fr' ? (
              <>Ce qui fait la <span className="inline-block bg-cb-terracotta text-cb-sable px-3 py-0.5 -rotate-1 rounded-sm">différence</span>.</>
            ) : (
              <>What makes the <span className="inline-block bg-cb-terracotta text-cb-sable px-3 py-0.5 -rotate-1 rounded-sm">difference</span>.</>
            )}
          </h2>
          <div className="text-base font-medium border-l-4 border-cb-cardinal pl-5 max-w-md text-cb-encre-soft">
            {lang === 'fr'
              ? 'Trois marqueurs clairs. Aucune promesse vague.'
              : 'Three clear markers. No vague promises.'}
          </div>
        </div>

        {/* 3 piliers, cards brutalist */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-8">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className={`group relative bg-white border-[2.5px] border-cb-sauge-deep rounded p-7 md:p-8 transition-all duration-200 ${p.rot} hover:rotate-0 hover:translate-x-[-3px] hover:translate-y-[-3px]`}
              style={{
                boxShadow: `7px 7px 0 ${p.shadow}`,
                animation: `cbFadeUp 0.55s ease both ${300 + i * 90}ms`,
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = `12px 12px 0 ${p.shadow}` }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = `7px 7px 0 ${p.shadow}` }}
            >
              <span className={`inline-block font-anton text-xs uppercase tracking-wider px-2.5 py-1 mb-5 border-2 border-cb-sauge-deep rounded-sm bg-cb-sable text-cb-${p.color}`}>
                {p.tag}
              </span>
              <h3 className="font-anton text-2xl md:text-3xl uppercase leading-[1] mb-3 text-cb-encre">
                {p.title}
              </h3>
              <p className="text-sm md:text-base text-cb-encre-soft leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
