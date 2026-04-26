'use client'
import { useState, useMemo, useEffect } from 'react'
import { useLang } from './LanguageContext'
import { formations, QUIZ_SLOT_RANK } from './formations-data'

// ─────────────────────────────────────────────────────────────────────────────
// MatchQuiz, mini-quiz de pré-qualification (3 questions → recommandation)
// Objectif CRO : convertir un visiteur passif en lead qualifié en 30 secondes.
// Mécanique : 3 choix chips → card de recommandation avec CTA mailto pré-rempli.
//
// V1.1, ajouts :
//   1. Warning soft si durée choisie < durée recommandée (pas de blocage).
//   2. Persistance sessionStorage (RGPD-exempt art. 82 LIL, pas de cookie).
//   3. Instrumentation analytics multi-vendor (Plausible / Umami / GTM dataLayer).
// ─────────────────────────────────────────────────────────────────────────────

type AudienceKey = 'codir' | 'managers' | 'teams' | 'self'
type DurationKey = 'half' | 'day' | 'twoThree' | 'program'

type Answers = {
  audience: AudienceKey | null
  topic: string | null // slug de formation
  duration: DurationKey | null
}

type Copy = {
  label: string
  title: string
  subtitle: string
  steps: {
    audience: { q: string; options: Record<AudienceKey, string> }
    topic: { q: string }
    duration: {
      q: string
      options: Record<DurationKey, string>
      // Sous-titre court par option, explicite ce que chaque slot signifie sur
      // le marché B2B intra (atelier découverte / module focus / format standard /
      // sur plusieurs mois). Évite que le visiteur cliquant "Demi-journée" pense
      // qu'on lui livrera 2 jours en condensé.
      optionsDesc?: Record<DurationKey, string>
    }
  }
  progress: (current: number, total: number) => string
  back: string
  result: {
    eyebrow: string
    headline: (formationTitle: string) => string
    summaryLabel: string
    primary: string
    secondary: string
    fallback: string
    restart: string
    audienceLabel: string
    durationLabel: string
    warningTitle: string
    warningBody: (officialFormat: string) => string
  }
  mailto: {
    subject: (formationTitle: string) => string
    bodyIntro: string
    bodyAudience: string
    bodyTopic: string
    bodyDuration: string
    bodyOutro: string
  }
}

const COPY: Record<'fr' | 'en', Copy> = {
  fr: {
    label: 'Vous cherchez quel format ?',
    title: 'On trouve ce qui vous va, en 3 clics',
    subtitle: "Trois questions rapides. Si la proposition vous parle, on en discute. Sinon vous repartez, sans rien donner.",
    steps: {
      audience: {
        q: 'Vous formez qui ?',
        options: {
          codir: 'Mon CODIR',
          managers: 'Mes managers',
          teams: 'Mes équipes',
          self: 'Moi-même',
        },
      },
      topic: { q: 'Sur quoi ?' },
      duration: {
        q: 'Vous avez combien de temps ?',
        options: {
          half: 'Demi-journée',
          day: '1 journée',
          twoThree: '2 à 3 jours',
          program: 'Parcours étalé',
        },
        optionsDesc: {
          half: 'Découvrir le sujet',
          day: "Aller à l'essentiel",
          twoThree: 'Le format complet',
          program: 'Étalé sur plusieurs mois',
        },
      },
    },
    progress: (c, t) => `Étape ${c} sur ${t}`,
    back: 'Retour',
    result: {
      eyebrow: 'Ma proposition',
      headline: (t) => `${t}, ça correspond à ce que vous décrivez.`,
      summaryLabel: 'Votre contexte',
      primary: 'En parler avec moi',
      secondary: 'Voir le programme',
      fallback: 'Rien ne colle ? Écrivez-moi directement.',
      restart: 'Refaire',
      audienceLabel: 'Pour',
      durationLabel: 'Format',
      warningTitle: 'On peut adapter',
      warningBody: (official) =>
        `Le format complet, c'est plutôt ${official}. On peut le condenser si c'est mieux pour vous, il suffit d'en parler.`,
    },
    mailto: {
      subject: (t) => `${t}, projet de formation`,
      bodyIntro: "Bonjour Clément,\n\nJ'ai utilisé le quiz sur votre site. Voici mon contexte :",
      bodyAudience: 'À former',
      bodyTopic: 'Sujet',
      bodyDuration: 'Format',
      bodyOutro: "\nOn peut en parler quand vous voulez. Merci !",
    },
  },
  en: {
    label: 'What format are you looking for?',
    title: 'Find what fits, in 3 clicks',
    subtitle: 'Three quick questions. If my suggestion fits, we can talk. If not, no strings attached.',
    steps: {
      audience: {
        q: 'Who do you want to train?',
        options: {
          codir: 'My executive team',
          managers: 'My managers',
          teams: 'My teams',
          self: 'Myself',
        },
      },
      topic: { q: 'On what?' },
      duration: {
        q: 'How much time do you have?',
        options: {
          half: 'Half-day',
          day: '1 full day',
          twoThree: '2 to 3 days',
          program: 'Extended program',
        },
        optionsDesc: {
          half: 'Discover the topic',
          day: 'Get to the essentials',
          twoThree: 'The full format',
          program: 'Spread over months',
        },
      },
    },
    progress: (c, t) => `Step ${c} of ${t}`,
    back: 'Back',
    result: {
      eyebrow: 'My suggestion',
      headline: (t) => `${t}, this matches what you described.`,
      summaryLabel: 'Your context',
      primary: "Let's talk",
      secondary: 'See the full program',
      fallback: 'Nothing fits? Write me directly.',
      restart: 'Start over',
      audienceLabel: 'For',
      durationLabel: 'Format',
      warningTitle: 'We can adjust',
      warningBody: (official) =>
        `The full format is usually ${official}. We can shorten it if that works better for you, just let me know.`,
    },
    mailto: {
      subject: (t) => `${t}, training project`,
      bodyIntro: "Hi Clément,\n\nI used the quiz on your site. Here's my context:",
      bodyAudience: 'To train',
      bodyTopic: 'Topic',
      bodyDuration: 'Format',
      bodyOutro: '\nHappy to chat anytime. Thanks!',
    },
  },
}

// ─── Constantes ──────────────────────────────────────────────────────────────
const AUDIENCE_ORDER: AudienceKey[] = ['codir', 'managers', 'teams', 'self']
const DURATION_ORDER: DurationKey[] = ['half', 'day', 'twoThree', 'program']

// La source de vérité du slot recommandé pour chaque formation est dans
// formations-data.ts (champ format.quizSlot). On utilise QUIZ_SLOT_RANK
// importé pour comparer "proposé vs recommandé" et déclencher le warning soft.

// Persistance sessionStorage (scope onglet, RGPD-exempt : storage strictement
// nécessaire au fonctionnement du service demandé par l'utilisateur).
const STORAGE_KEY = 'cb_matchquiz_v1'

type PersistedState = { step: number; answers: Answers }

function loadState(): PersistedState | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw)
    if (parsed && typeof parsed.step === 'number' && parsed.answers) {
      return parsed as PersistedState
    }
  } catch {
    // ignore
  }
  return null
}

function saveState(state: PersistedState) {
  if (typeof window === 'undefined') return
  try {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  } catch {
    // quota / private mode
  }
}

function clearState() {
  if (typeof window === 'undefined') return
  try {
    window.sessionStorage.removeItem(STORAGE_KEY)
  } catch {
    // ignore
  }
}

// ─── Analytics multi-vendor (no-op tant qu'aucun outil n'est installé) ───────
// Pattern défensif : détecte Plausible, Umami ou GTM dataLayer sur window.
// Si rien n'est branché, aucun appel réseau n'est émis.
function trackEvent(name: string, props?: Record<string, unknown>) {
  if (typeof window === 'undefined') return
  try {
    const w = window as unknown as {
      plausible?: (name: string, opts?: { props?: Record<string, unknown> }) => void
      umami?: { track?: (name: string, props?: Record<string, unknown>) => void }
      dataLayer?: Array<Record<string, unknown>>
    }
    if (typeof w.plausible === 'function') {
      w.plausible(name, props ? { props } : undefined)
    } else if (w.umami && typeof w.umami.track === 'function') {
      w.umami.track(name, props)
    } else if (Array.isArray(w.dataLayer)) {
      w.dataLayer.push({ event: name, ...(props || {}) })
    }
  } catch {
    // ignore
  }
}

// ─── Recommandation logic ────────────────────────────────────────────────────
function getRecommendation(answers: Answers) {
  if (!answers.topic) return null
  return formations.find((f) => f.slug === answers.topic) ?? null
}

// ─── Primitive : chip button ─────────────────────────────────────────────────
function Chip({
  label,
  description,
  selected,
  accent,
  onClick,
}: {
  label: string
  /** Sous-titre optionnel sous le label (ex: "Atelier découverte" pour
   *  qualifier l'option "Demi-journée" en étape 3 du quiz). */
  description?: string
  selected: boolean
  accent?: string
  onClick: () => void
}) {
  const activeAccent = accent ?? 'var(--cb-sarcelle)'
  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative text-left px-5 py-4 rounded-xl border text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
      style={{
        background: selected ? activeAccent : '#FFFFFF',
        color: selected ? 'var(--cb-sable)' : 'var(--cb-encre)',
        borderColor: selected ? activeAccent : 'var(--cb-sauge)',
        boxShadow: selected
          ? `4px 4px 0 ${activeAccent}`
          : '0 1px 2px rgba(0,0,0,0.05)',
        // @ts-expect-error focus ring color via CSS variable
        '--tw-ring-color': `${activeAccent}66`,
      }}
      onMouseEnter={(e) => {
        if (selected) return
        const el = e.currentTarget as HTMLElement
        el.style.borderColor = `${activeAccent}66`
        el.style.transform = 'translateY(-1px)'
      }}
      onMouseLeave={(e) => {
        if (selected) return
        const el = e.currentTarget as HTMLElement
        el.style.borderColor = 'var(--cb-sauge)'
        el.style.transform = 'translateY(0)'
      }}
    >
      <span className="block">{label}</span>
      {description && (
        <span
          className="block text-[11px] font-normal mt-0.5"
          style={{ opacity: selected ? 0.85 : 0.6 }}
        >
          {description}
        </span>
      )}
    </button>
  )
}

// ─── Progress dots ───────────────────────────────────────────────────────────
function ProgressDots({ step, total, accent }: { step: number; total: number; accent: string }) {
  return (
    <div className="flex items-center gap-2" aria-hidden="true">
      {Array.from({ length: total }).map((_, i) => (
        <span
          key={i}
          className="rounded-full transition-all duration-300"
          style={{
            width: i === step ? 24 : 8,
            height: 4,
            background: i <= step ? accent : 'var(--cb-sauge)',
          }}
        />
      ))}
    </div>
  )
}

// ─── Main component ──────────────────────────────────────────────────────────
export default function MatchQuiz() {
  const { lang } = useLang()
  const copy = COPY[lang]

  const [step, setStep] = useState(0) // 0,1,2 = questions ; 3 = résultat
  const [answers, setAnswers] = useState<Answers>({
    audience: null,
    topic: null,
    duration: null,
  })
  const [hydrated, setHydrated] = useState(false)

  // Hydratation depuis sessionStorage au mount
  useEffect(() => {
    const saved = loadState()
    if (saved) {
      setStep(saved.step)
      setAnswers(saved.answers)
    }
    setHydrated(true)
  }, [])

  // Sync sessionStorage à chaque changement
  useEffect(() => {
    if (!hydrated) return
    saveState({ step, answers })
  }, [step, answers, hydrated])

  const currentAccent = useMemo(() => {
    if (!answers.topic) return 'var(--cb-sarcelle)'
    return formations.find((f) => f.slug === answers.topic)?.accent ?? 'var(--cb-sarcelle)'
  }, [answers.topic])

  const reco = useMemo(() => getRecommendation(answers), [answers])

  // Warning durée : slot choisi < slot recommandé par la formation ?
  // (recommandation lue depuis formations-data.ts → format.quizSlot)
  const durationWarning = useMemo(() => {
    if (!reco || !answers.duration) return null
    const recoSlot = reco.format.quizSlot
    if (!recoSlot) return null
    if (QUIZ_SLOT_RANK[answers.duration] < QUIZ_SLOT_RANK[recoSlot]) {
      return { officialFormat: reco.format.duration }
    }
    return null
  }, [reco, answers.duration])

  // ─── Navigation ──────────────────────────────────────────────────────────
  const goNext = () => setStep((s) => Math.min(s + 1, 3))
  const goBack = () => setStep((s) => Math.max(s - 1, 0))
  const reset = () => {
    setAnswers({ audience: null, topic: null, duration: null })
    setStep(0)
    clearState()
    trackEvent('quiz_restart')
  }

  const pickAudience = (v: AudienceKey) => {
    setAnswers((p) => ({ ...p, audience: v }))
    trackEvent('quiz_step_complete', { step: 1, field: 'audience', value: v })
    if (step === 0 && !answers.audience) trackEvent('quiz_start')
    setTimeout(goNext, 180)
  }
  const pickTopic = (slug: string) => {
    setAnswers((p) => ({ ...p, topic: slug }))
    trackEvent('quiz_step_complete', { step: 2, field: 'topic', value: slug })
    setTimeout(goNext, 180)
  }
  const pickDuration = (v: DurationKey) => {
    setAnswers((p) => ({ ...p, duration: v }))
    trackEvent('quiz_step_complete', { step: 3, field: 'duration', value: v })
    setTimeout(() => {
      goNext()
      // quiz_complete émis une fois, au passage à l'écran résultat
      trackEvent('quiz_complete', {
        audience: answers.audience,
        topic: answers.topic,
        duration: v,
      })
    }, 180)
  }

  // ─── CTA primaire builder (redirige vers /contact avec contexte pre-rempli)
  // V2 : au lieu du mailto externe qui ouvrait le client mail natif,
  // on reste dans le flow. ContactForm lit ces params via useSearchParams.
  const ctaPrimaryHref = useMemo(() => {
    if (!reco || !answers.audience || !answers.duration) return '/contact'
    const audienceLabel = copy.steps.audience.options[answers.audience]
    const durationLabel = copy.steps.duration.options[answers.duration]
    const message = [
      copy.mailto.bodyIntro,
      '',
      `• ${copy.mailto.bodyAudience} : ${audienceLabel}`,
      `• ${copy.mailto.bodyTopic} : ${reco.title}`,
      `• ${copy.mailto.bodyDuration} : ${durationLabel}`,
      '',
      copy.mailto.bodyOutro,
    ].join('\n')
    const params = new URLSearchParams({
      type: 'Formation',
      message,
    })
    return `/contact?${params.toString()}`
  }, [reco, answers, copy])

  // ─── Rendu : header commun ───────────────────────────────────────────────
  const header = (
    <div className="text-center max-w-2xl mx-auto mb-10">
      <span className="inline-block font-marker text-cb-cardinal text-lg -rotate-2 mb-3">
        ↓ {copy.label}
      </span>
      <h2 className="font-anton text-4xl md:text-5xl lg:text-6xl uppercase leading-[0.95] text-cb-encre mb-4">
        {copy.title}
      </h2>
      <p className="text-sm md:text-base text-cb-encre-soft leading-relaxed">{copy.subtitle}</p>
    </div>
  )

  // ─── Rendu : étape question générique ────────────────────────────────────
  const renderStep = () => {
    if (step === 0) {
      return (
        <>
          <h3 className="font-anton text-2xl md:text-3xl uppercase leading-tight text-cb-encre mb-6 text-center">
            {copy.steps.audience.q}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
            {AUDIENCE_ORDER.map((key) => (
              <Chip
                key={key}
                label={copy.steps.audience.options[key]}
                selected={answers.audience === key}
                onClick={() => pickAudience(key)}
              />
            ))}
          </div>
        </>
      )
    }
    if (step === 1) {
      return (
        <>
          <h3 className="font-anton text-2xl md:text-3xl uppercase leading-tight text-cb-encre mb-6 text-center">
            {copy.steps.topic.q}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-4xl mx-auto">
            {formations.map((f) => (
              <Chip
                key={f.slug}
                label={f.title}
                selected={answers.topic === f.slug}
                accent={f.accent}
                onClick={() => pickTopic(f.slug)}
              />
            ))}
          </div>
        </>
      )
    }
    if (step === 2) {
      return (
        <>
          <h3 className="font-anton text-2xl md:text-3xl uppercase leading-tight text-cb-encre mb-6 text-center">
            {copy.steps.duration.q}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
            {DURATION_ORDER.map((key) => (
              <Chip
                key={key}
                label={copy.steps.duration.options[key]}
                description={copy.steps.duration.optionsDesc?.[key]}
                selected={answers.duration === key}
                accent={currentAccent}
                onClick={() => pickDuration(key)}
              />
            ))}
          </div>
        </>
      )
    }
    // step === 3 : résultat
    if (!reco || !answers.audience || !answers.duration) return null
    const audienceLabel = copy.steps.audience.options[answers.audience]
    const durationLabel = copy.steps.duration.options[answers.duration]
    return (
      <div
        className="max-w-3xl mx-auto"
        style={{
          animation: 'cbFadeUp 0.5s ease both',
        }}
      >
        <div
          className="rounded-2xl p-7 md:p-9"
          style={{
            background: 'var(--cb-sable)',
            border: `1px solid ${reco.accent}33`,
            boxShadow: `0 10px 32px ${reco.accent}1F, 0 1px 4px rgba(0,0,0,0.04)`,
          }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: reco.accent }}>
            {copy.result.eyebrow}
          </p>
          <h3 className="font-anton text-3xl md:text-4xl lg:text-5xl uppercase leading-tight text-cb-encre mb-5">
            {copy.result.headline(reco.title)}
          </h3>

          {/* Résumé des choix */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
            <div className="rounded-xl p-4" style={{ background: reco.bg }}>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-cb-encre-soft mb-1">
                {copy.result.audienceLabel}
              </p>
              <p className="text-sm font-semibold text-cb-encre">{audienceLabel}</p>
            </div>
            <div className="rounded-xl p-4" style={{ background: reco.bg }}>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-cb-encre-soft mb-1">
                {copy.result.durationLabel}
              </p>
              <p className="text-sm font-semibold text-cb-encre">{durationLabel}</p>
            </div>
            <div className="rounded-xl p-4" style={{ background: reco.bg }}>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-cb-encre-soft mb-1">
                {reco.tag}
              </p>
              <p className="text-sm font-semibold text-cb-encre">{reco.format.duration}</p>
            </div>
          </div>

          {/* Warning durée si incompatibilité soft */}
          {durationWarning && (
            <div
              className="mb-6 flex gap-3 p-4 rounded-xl"
              style={{
                background: '#FFF9EC',
                border: '1px solid #E8B84722',
              }}
              role="note"
            >
              <svg
                className="w-5 h-5 shrink-0 mt-0.5"
                fill="none"
                stroke="#B07B0B"
                strokeWidth={1.8}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m0 3.75h.008v.008H12v-.008zM12 2.25 2.25 20.25h19.5L12 2.25z"
                />
              </svg>
              <div>
                <p className="text-sm font-semibold text-cb-encre mb-1">
                  {copy.result.warningTitle}
                </p>
                <p className="text-xs text-cb-encre-soft leading-relaxed">
                  {copy.result.warningBody(durationWarning.officialFormat)}
                </p>
              </div>
            </div>
          )}

          {/* CTA primaire + secondaire */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={ctaPrimaryHref}
              onClick={() =>
                trackEvent('quiz_cta_primary_click', {
                  topic: reco.slug,
                  audience: answers.audience,
                  duration: answers.duration,
                })
              }
              className="inline-flex items-center justify-center gap-2 text-white font-semibold px-6 py-3.5 rounded-full hover:-translate-y-0.5 shadow-md hover:shadow-lg transition-all duration-200"
              style={{ background: reco.accent }}
            >
              {copy.result.primary}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href={`/formations/${reco.slug}`}
              onClick={() =>
                trackEvent('quiz_cta_secondary_click', { topic: reco.slug })
              }
              className="inline-flex items-center justify-center gap-2 font-semibold px-6 py-3.5 rounded-full border transition-all duration-200 hover:-translate-y-0.5"
              style={{
                color: reco.accent,
                borderColor: `${reco.accent}66`,
                background: 'var(--cb-sable)',
              }}
            >
              {copy.result.secondary}
            </a>
          </div>

          {/* Fallback + restart */}
          <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-cb-encre-soft">
            <a
              href="/contact"
              onClick={() => trackEvent('quiz_fallback_click')}
              className="hover:text-cb-encre underline underline-offset-2"
            >
              {copy.result.fallback}
            </a>
            <button
              type="button"
              onClick={reset}
              className="hover:text-cb-encre underline underline-offset-2 text-left sm:text-right"
            >
              {copy.result.restart}
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section
      id="quiz"
      className="py-20 md:py-28 relative overflow-hidden"
      style={{ background: '#FBF4DD' }}
      aria-label={copy.title}
    >
      {/* Keyframe inline pour l'animation */}
      <style>{`
        @keyframes cbFadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Background accent subtil */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full blur-3xl"
          style={{ background: `${currentAccent}0F` }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {header}

        {/* Progress + back */}
        {step < 3 && (
          <div className="flex items-center justify-between max-w-2xl mx-auto mb-6">
            <button
              type="button"
              onClick={goBack}
              disabled={step === 0}
              className="text-xs font-medium text-cb-encre-soft hover:text-cb-encre disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              ← {copy.back}
            </button>
            <div className="flex items-center gap-3">
              <span className="text-xs font-medium text-cb-encre-soft">
                {copy.progress(step + 1, 3)}
              </span>
              <ProgressDots step={step} total={3} accent={currentAccent} />
            </div>
          </div>
        )}

        {/* Step content */}
        <div
          key={step}
          style={{ animation: 'cbFadeUp 0.4s ease both' }}
        >
          {renderStep()}
        </div>
      </div>
    </section>
  )
}
