'use client'
import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import {
  type ProfileKey,
  type SubProfileKey,
  type Phase2Question,
  DISC_COLORS,
  profiles,
  subProfiles,
  blendTexts,
  questionsPhase1,
  questionsPhase2,
  subProfileMapping,
} from './disc-data'
import DiscMap from './DiscMap'
import DiscContactSection from './DiscContactSection'

// ─── Utilities ───────────────────────────────────────────────────────────

function shuffleOptions<T>(options: T[]): T[] {
  return [...options].sort(() => Math.random() - 0.5)
}

function renderSegments(
  segments: { text: string; tag?: ProfileKey }[],
  scores: Record<ProfileKey, number>,
  total: number
) {
  return segments.map((seg, i) => {
    if (!seg.tag) return <span key={i}>{seg.text}</span>
    const pct = scores[seg.tag] / total
    const opacity = Math.min(pct * 1.5, 0.42)
    const hex = Math.round(opacity * 255).toString(16).padStart(2, '0')
    const mainColor = DISC_COLORS[seg.tag].main
    return (
      <span
        key={i}
        style={{
          backgroundColor: `${mainColor}${hex}`,
          borderRadius: '3px',
          padding: '0 2px',
          transition: 'background-color 0.3s',
        }}
      >
        {seg.text}
      </span>
    )
  })
}

// ─── Types ───────────────────────────────────────────────────────────────

type Step = 'intro' | 'test' | 'open' | 'results-phase1' | 'phase2' | 'results-final'

// ─── Main Component ─────────────────────────────────────────────────────

export default function DiscTest() {
  const [step, setStep] = useState<Step>('intro')
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState<Record<number, ProfileKey>>({})
  const [shuffled] = useState(() => questionsPhase1.map(q => ({ ...q, options: shuffleOptions(q.options) })))
  const [selected, setSelected] = useState<ProfileKey | null>(null)
  const [hovered, setHovered] = useState<ProfileKey | null>(null)
  const [openAnswer, setOpenAnswer] = useState('')
  const [mounted, setMounted] = useState(false)

  // Phase 2 state
  const [phase2Current, setPhase2Current] = useState(0)
  const [phase2Answers, setPhase2Answers] = useState<Record<number, SubProfileKey[]>>({})
  const [phase2Selected, setPhase2Selected] = useState<{ q: number; idx: number } | null>(null)
  const [identifiedSubProfile, setIdentifiedSubProfile] = useState<SubProfileKey | null>(null)

  useEffect(() => { const t = setTimeout(() => setMounted(true), 60); return () => clearTimeout(t) }, [])

  // ─── Scoring Phase 1 ──────────────────────────────────────────────────

  const scores: Record<ProfileKey, number> = { D: 0, I: 0, S: 0, C: 0 }
  Object.values(answers).forEach(p => { scores[p]++ })
  const total = Object.values(scores).reduce((a, b) => a + b, 0) || 1
  const dominant = (Object.keys(scores) as ProfileKey[]).reduce((a, b) => scores[a] >= scores[b] ? a : b)
  const sortedProfiles = (Object.keys(scores) as ProfileKey[]).sort((a, b) => scores[b] - scores[a])
  const secondary = sortedProfiles[1]

  // ─── Phase 2 questions filtering ──────────────────────────────────────

  const phase2Questions = useMemo(() => {
    return questionsPhase2
      .filter(q => q.forDominants.includes(dominant))
      .map(q => ({ ...q, options: shuffleOptions(q.options) }))
  }, [dominant])

  // ─── Phase 2 Scoring, determine sub-profile ─────────────────────────

  const computeSubProfile = (): SubProfileKey => {
    const subScores: Partial<Record<SubProfileKey, number>> = {}

    // Compter les favoris de chaque réponse
    Object.values(phase2Answers).forEach(favors => {
      favors.forEach(sp => {
        subScores[sp] = (subScores[sp] || 0) + 1
      })
    })

    // Filtrer uniquement les sous-profils possibles pour cette combinaison D+S
    const mappingKey = `${dominant}-${secondary}`
    const possibleSubProfiles = subProfileMapping[mappingKey] || [mappingKey.split('-')[0] as SubProfileKey]

    // Trouver le sous-profil avec le score le plus élevé parmi les possibles
    let best: SubProfileKey = possibleSubProfiles[0] || 'competiteur'
    let bestScore = 0

    for (const sp of Object.keys(subScores) as SubProfileKey[]) {
      if (possibleSubProfiles.includes(sp) && (subScores[sp] || 0) > bestScore) {
        best = sp
        bestScore = subScores[sp] || 0
      }
    }

    // Si aucun score parmi les possibles, prendre le premier possible
    if (bestScore === 0 && possibleSubProfiles.length > 0) {
      best = possibleSubProfiles[0]
    }

    return best
  }

  // ─── Handlers ─────────────────────────────────────────────────────────

  const handleAnswer = (profile: ProfileKey) => {
    if (selected) return
    setSelected(profile)
    setTimeout(() => {
      setAnswers(prev => ({ ...prev, [questionsPhase1[current].id]: profile }))
      if (current < questionsPhase1.length - 1) {
        setCurrent(c => c + 1)
        setSelected(null)
        setHovered(null)
      } else {
        setStep('open')
      }
    }, 380)
  }

  const handlePhase2Answer = (questionId: number, optionIdx: number, favors: SubProfileKey[]) => {
    if (phase2Selected !== null) return
    setPhase2Selected({ q: questionId, idx: optionIdx })
    setTimeout(() => {
      setPhase2Answers(prev => ({ ...prev, [questionId]: favors }))
      if (phase2Current < phase2Questions.length - 1) {
        setPhase2Current(c => c + 1)
        setPhase2Selected(null)
      } else {
        // Calculer le sous-profil
        const result = computeSubProfile()
        setIdentifiedSubProfile(result)
        setStep('results-final')
      }
    }, 380)
  }

  const startPhase2 = () => {
    setPhase2Current(0)
    setPhase2Answers({})
    setPhase2Selected(null)
    setStep('phase2')
  }

  const restart = () => {
    setStep('intro')
    setCurrent(0)
    setAnswers({})
    setSelected(null)
    setHovered(null)
    setOpenAnswer('')
    setPhase2Current(0)
    setPhase2Answers({})
    setPhase2Selected(null)
    setIdentifiedSubProfile(null)
    setMounted(false)
    setTimeout(() => setMounted(true), 60)
  }

  const ANIM_CSS = `
    @keyframes popIn {
      0%   { opacity: 0; transform: scale(0.3) translateY(28px); }
      65%  { transform: scale(1.12) translateY(-5px); }
      100% { opacity: 1; transform: scale(1) translateY(0); }
    }
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(18px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes slideIn {
      from { opacity: 0; transform: translateX(14px); }
      to   { opacity: 1; transform: translateX(0); }
    }
    @keyframes barGrow {
      from { width: 0; }
    }
    @keyframes heroIn {
      0%   { opacity: 0; transform: scale(0.7) translateY(12px); }
      70%  { transform: scale(1.06) translateY(-3px); }
      100% { opacity: 1; transform: scale(1) translateY(0); }
    }
    @keyframes pulse-ring {
      0% { transform: scale(1); opacity: 0.6; }
      100% { transform: scale(1.5); opacity: 0; }
    }
  `

  // ═══════════════════════════════════════════════════════════════════════
  // INTRO
  // ═══════════════════════════════════════════════════════════════════════

  if (step === 'intro') {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <style>{ANIM_CSS}</style>
        <nav className="px-6 py-5 flex items-center justify-between border-b border-cb-sauge">
          <Link href="/" className="text-cb-encre-soft/70 hover:text-cb-encre text-sm flex items-center gap-2 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Retour au site
          </Link>
          <span className="text-xs text-cb-encre-soft/70 font-medium">Test DISC · Gratuit & Confidentiel</span>
        </nav>
        <div className="flex-1 flex items-center justify-center px-6 py-16">
          <div className="max-w-2xl w-full text-center">
            <div className="flex items-end justify-center gap-3 mb-12">
              {(['D', 'I', 'S', 'C'] as ProfileKey[]).map((l, i) => (
                <div key={l} style={{ animation: `popIn 0.55s cubic-bezier(0.34,1.56,0.64,1) ${i * 90}ms both` }}>
                  <div
                    className="rounded-2xl flex items-center justify-center font-black text-3xl text-white shadow-xl flex-shrink-0"
                    style={{
                      width: [80, 96, 88, 80][i],
                      height: [80, 96, 88, 80][i],
                      backgroundColor: DISC_COLORS[l].main,
                      boxShadow: `0 12px 32px ${DISC_COLORS[l].main}45`,
                      transform: `rotate(${['-3deg', '2deg', '-2deg', '3deg'][i]})`,
                    }}
                  >
                    {l}
                  </div>
                </div>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-cb-encre mb-4 leading-tight" style={{ animation: 'fadeUp 0.5s ease 380ms both' }}>
              Quel est votre profil{' '}
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(90deg, #DC2626 0%, #D97706 33%, #16A34A 66%, #2563EB 100%)' }}
              >
                DISC
              </span>
              &nbsp;?
            </h1>
            <p className="text-lg text-cb-encre-soft leading-relaxed mb-10 max-w-xl mx-auto" style={{ animation: 'fadeUp 0.5s ease 480ms both' }}>
              20 questions pour découvrir votre style comportemental dominant, puis une analyse approfondie en 15 sous-profils pour aller plus loin.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-10" style={{ animation: 'fadeUp 0.5s ease 560ms both' }}>
              {[
                { icon: '⏱', text: '8–12 min (2 phases)' },
                { icon: '🔒', text: 'Aucune donnée collectée' },
                { icon: '✓', text: 'Gratuit, sans inscription' },
                { icon: '🎯', text: '15 sous-profils' },
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-center gap-2 bg-cb-creme border border-cb-sauge rounded-full px-4 py-2 text-sm text-cb-encre-soft">
                  <span>{icon}</span>
                  <span className="font-medium">{text}</span>
                </div>
              ))}
            </div>
            <button
              onClick={() => setStep('test')}
              className="inline-flex items-center gap-3 text-white font-bold px-10 py-4 rounded-2xl text-lg transition-all hover:-translate-y-1 hover:shadow-2xl"
              style={{
                background: 'linear-gradient(135deg, #DC2626 0%, #D97706 100%)',
                boxShadow: '0 8px 32px rgba(220,38,38,0.35)',
                animation: 'fadeUp 0.5s ease 640ms both',
              }}
            >
              Commencer le test
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <p className="text-xs text-cb-encre-soft/70 mt-6 leading-relaxed">
              Basé sur le modèle DISC de William Moulton Marston · Fourni à titre indicatif
            </p>
          </div>
        </div>
      </div>
    )
  }

  // ═══════════════════════════════════════════════════════════════════════
  // TEST PHASE 1
  // ═══════════════════════════════════════════════════════════════════════

  if (step === 'test') {
    const q = shuffled[current]
    const progressPct = ((current + 1) / questionsPhase1.length) * 100
    return (
      <div className="min-h-screen bg-cb-creme flex flex-col">
        <style>{ANIM_CSS}</style>
        <nav className="bg-white border-b border-cb-sauge px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-cb-encre-soft/70 hover:text-cb-encre text-sm flex items-center gap-2 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Accueil
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-xs text-cb-encre-soft/70 font-medium">Phase 1</span>
            <span className="text-sm font-bold text-cb-encre">
              {current + 1}
              <span className="text-cb-encre-soft/70 font-normal"> / {questionsPhase1.length}</span>
            </span>
          </div>
        </nav>
        <div className="bg-white px-6 pt-3 pb-5 border-b border-gray-50">
          <div className="max-w-2xl mx-auto">
            <div className="relative h-3 bg-cb-sable rounded-full overflow-hidden mb-3">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${progressPct}%`,
                  background: 'linear-gradient(90deg, #DC2626, #D97706, #16A34A, #2563EB)',
                  transition: 'width 0.5s cubic-bezier(0.4,0,0.2,1)',
                }}
              />
            </div>
            <div className="flex justify-between px-0.5">
              {questionsPhase1.map((_, i) => (
                <div
                  key={i}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i <= current ? 8 : 5,
                    height: i <= current ? 8 : 5,
                    backgroundColor: i < current ? '#16A34A' : i === current ? '#D97706' : '#D1D5DB',
                    marginTop: i <= current ? 0 : 1.5,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex-1 flex items-start justify-center px-6 py-8 md:py-12">
          <div className="max-w-2xl w-full space-y-5">
            <div key={current} className="bg-white rounded-2xl p-7 md:p-9 shadow-sm border border-cb-sauge" style={{ animation: 'slideIn 0.28s ease both' }}>
              <p className="text-xs font-bold text-cb-encre-soft/70 uppercase tracking-widest mb-4">
                Question {current + 1} sur {questionsPhase1.length}
              </p>
              <h2 className="text-xl md:text-2xl font-bold text-cb-encre leading-snug">
                {q.text}
              </h2>
            </div>
            <div className="space-y-3">
              {q.options.map((opt, idx) => {
                // Phase 1 neutre : pas de couleur DISC pour ne pas influencer la reponse
                const isSelected = selected === opt.profile
                const isHov = hovered === opt.profile && !selected
                const active = isSelected || isHov
                return (
                  <button
                    key={opt.label}
                    onClick={() => handleAnswer(opt.profile)}
                    onMouseEnter={() => !selected && setHovered(opt.profile)}
                    onMouseLeave={() => setHovered(null)}
                    disabled={!!selected}
                    className="w-full text-left rounded-xl border-2 transition-all duration-200 flex items-center gap-4"
                    style={{
                      padding: '18px 20px',
                      backgroundColor: active ? '#F9FAFB' : 'white',
                      borderColor: active ? '#9CA3AF' : '#E5E7EB',
                      boxShadow: active ? '0 4px 16px rgba(0,0,0,0.06)' : 'none',
                      transform: isSelected ? 'scale(1.01)' : 'scale(1)',
                      animation: `fadeUp 0.22s ease ${idx * 60}ms both`,
                    }}
                  >
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 transition-all duration-200"
                      style={{ backgroundColor: active ? '#374151' : '#F3F4F6', color: active ? 'white' : '#9CA3AF' }}
                    >
                      {String.fromCharCode(65 + idx)}
                    </div>
                    <span
                      className="text-sm md:text-base font-medium leading-relaxed transition-colors duration-200"
                      style={{ color: active ? '#111827' : '#374151' }}
                    >
                      {opt.label}
                    </span>
                    {isSelected && (
                      <div className="ml-auto flex-shrink-0">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#374151' }}>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    )}
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }

  // ═══════════════════════════════════════════════════════════════════════
  // QUESTION OUVERTE
  // ═══════════════════════════════════════════════════════════════════════

  if (step === 'open') {
    const color = DISC_COLORS[dominant]
    return (
      <div className="min-h-screen bg-cb-creme flex flex-col">
        <style>{ANIM_CSS}</style>
        <nav className="bg-white border-b border-cb-sauge px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-cb-encre-soft/70 hover:text-cb-encre text-sm flex items-center gap-2 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Accueil
          </Link>
          <span className="text-xs font-medium text-cb-encre-soft/70">Phase 1 terminée ✓</span>
        </nav>
        <div className="flex-1 flex items-center justify-center px-6 py-12">
          <div className="max-w-2xl w-full space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-cb-sauge">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-black text-white flex-shrink-0"
                  style={{ backgroundColor: color.main }}
                >
                  ?
                </div>
                <p className="text-xs font-bold text-cb-encre-soft/70 uppercase tracking-widest">
                  Question ouverte · Facultative
                </p>
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-cb-encre leading-snug mb-2">
                Quel est le plus grand défi de management ou de collaboration que vous traversez en ce moment ?
              </h2>
              <p className="text-sm text-cb-encre-soft/70 mb-6 flex items-center gap-1.5">
                <span>🔒</span>
                <span>Non conservé · utilisé uniquement pour contextualiser votre résultat dans cette page</span>
              </p>
              <textarea
                value={openAnswer}
                onChange={(e) => setOpenAnswer(e.target.value)}
                placeholder="Ex : je manage une équipe en pleine croissance, nous traversons une restructuration, j'ai du mal à déléguer…"
                className="w-full border-2 border-cb-sauge rounded-xl p-4 text-sm text-cb-encre resize-none focus:outline-none transition-colors leading-relaxed"
                style={{ minHeight: 110 }}
                onFocus={(e) => e.target.style.borderColor = color.main}
                onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
              />
            </div>
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setStep('results-phase1')}
                className="text-sm text-cb-encre-soft/70 hover:text-cb-encre-soft px-5 py-3 rounded-xl border border-cb-sauge hover:border-cb-sauge-deep transition-all"
              >
                Passer cette étape
              </button>
              <button
                onClick={() => setStep('results-phase1')}
                className="inline-flex items-center gap-2 text-white font-bold px-7 py-3 rounded-xl transition-all hover:-translate-y-0.5"
                style={{
                  backgroundColor: color.main,
                  boxShadow: `0 4px 20px ${color.main}45`,
                }}
              >
                Voir mes résultats
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // ═══════════════════════════════════════════════════════════════════════
  // PHASE 2, Questions complémentaires
  // ═══════════════════════════════════════════════════════════════════════

  if (step === 'phase2') {
    const q = phase2Questions[phase2Current]
    if (!q) {
      // Fallback si pas de questions
      const result = computeSubProfile()
      setIdentifiedSubProfile(result)
      setStep('results-final')
      return null
    }
    const progressPct = ((phase2Current + 1) / phase2Questions.length) * 100
    const color = DISC_COLORS[dominant]

    return (
      <div className="min-h-screen bg-cb-creme flex flex-col">
        <style>{ANIM_CSS}</style>
        <nav className="bg-white border-b border-cb-sauge px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-cb-encre-soft/70 hover:text-cb-encre text-sm flex items-center gap-2 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Accueil
          </Link>
          <div className="flex items-center gap-3">
            <span
              className="text-xs font-bold px-2 py-0.5 rounded-full text-white"
              style={{ backgroundColor: color.main }}
            >
              Phase 2
            </span>
            <span className="text-sm font-bold text-cb-encre">
              {phase2Current + 1}
              <span className="text-cb-encre-soft/70 font-normal"> / {phase2Questions.length}</span>
            </span>
          </div>
        </nav>
        <div className="bg-white px-6 pt-3 pb-5 border-b border-gray-50">
          <div className="max-w-2xl mx-auto">
            <div className="relative h-3 bg-cb-sable rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{
                  width: `${progressPct}%`,
                  backgroundColor: color.main,
                }}
              />
            </div>
          </div>
        </div>
        <div className="flex-1 flex items-start justify-center px-6 py-8 md:py-12">
          <div className="max-w-2xl w-full space-y-5">
            <div key={phase2Current} className="bg-white rounded-2xl p-7 md:p-9 shadow-sm border border-cb-sauge" style={{ animation: 'slideIn 0.28s ease both' }}>
              <div className="flex items-center gap-2 mb-4">
                <span
                  className="text-xs font-bold px-2 py-0.5 rounded-full text-white"
                  style={{ backgroundColor: color.main }}
                >
                  Affinage
                </span>
                <p className="text-xs font-bold text-cb-encre-soft/70 uppercase tracking-widest">
                  Question {phase2Current + 1} sur {phase2Questions.length}
                </p>
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-cb-encre leading-snug">
                {q.text}
              </h2>
            </div>
            <div className="space-y-3">
              {q.options.map((opt, idx) => {
                const isSelected = phase2Selected?.q === q.id && phase2Selected?.idx === idx
                // Couleur de l'option basée sur le profil DISC dominant des sous-profils favorisés
                const optDominant = opt.favors.length > 0 ? subProfiles[opt.favors[0]].zone.dominant : dominant
                const optColor = DISC_COLORS[optDominant]
                return (
                  <button
                    key={opt.label}
                    onClick={() => handlePhase2Answer(q.id, idx, opt.favors)}
                    disabled={phase2Selected !== null}
                    className="w-full text-left rounded-xl border-2 transition-all duration-200 flex items-center gap-4"
                    style={{
                      padding: '18px 20px',
                      backgroundColor: isSelected ? optColor.bg : 'white',
                      borderColor: isSelected ? optColor.main : '#E5E7EB',
                      boxShadow: isSelected ? `0 4px 24px ${optColor.main}22` : 'none',
                      animation: `fadeUp 0.22s ease ${idx * 60}ms both`,
                    }}
                  >
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 transition-all duration-200"
                      style={{ backgroundColor: isSelected ? optColor.main : '#F3F4F6', color: isSelected ? 'white' : '#9CA3AF' }}
                    >
                      {String.fromCharCode(65 + idx)}
                    </div>
                    <span
                      className="text-sm md:text-base font-medium leading-relaxed transition-colors duration-200"
                      style={{ color: isSelected ? optColor.dark : '#374151' }}
                    >
                      {opt.label}
                    </span>
                    {isSelected && (
                      <div className="ml-auto flex-shrink-0">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: optColor.main }}>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    )}
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }

  // ═══════════════════════════════════════════════════════════════════════
  // RESULTS, Phase 1 (avec cartographie teasing) ou Final (après Phase 2)
  // ═══════════════════════════════════════════════════════════════════════

  const isFinal = step === 'results-final'
  const profile = profiles[dominant]
  const color = DISC_COLORS[dominant]
  const blendKey = `${dominant}-${secondary}`
  const blendSentence = blendTexts[blendKey]
  const secondaryPct = Math.round((scores[secondary] / total) * 100)
  const sp = identifiedSubProfile ? subProfiles[identifiedSubProfile] : null

  return (
    <div className="min-h-screen bg-cb-creme">
      <style>{ANIM_CSS}</style>

      {/* ─── Hero Header ─── */}
      <div
        className="relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${color.main} 0%, ${color.dark} 100%)` }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        <nav className="relative px-6 py-5 flex items-center justify-between">
          <Link href="/" className="text-white/70 hover:text-white text-sm flex items-center gap-2 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Accueil
          </Link>
          <div className="flex items-center gap-3">
            {isFinal && (
              <span className="text-xs font-bold bg-white/20 text-white px-2.5 py-1 rounded-full">
                Profil complet
              </span>
            )}
            <button
              onClick={restart}
              className="text-xs text-white/60 hover:text-white/90 transition-colors border border-white/25 rounded-full px-4 py-1.5"
            >
              Recommencer
            </button>
          </div>
        </nav>
        <div className="relative max-w-3xl mx-auto px-6 pt-6 pb-20 text-center">
          <div
            className="w-28 h-28 rounded-3xl mx-auto flex items-center justify-center text-6xl font-black text-white mb-6 shadow-2xl"
            style={{
              backgroundColor: 'rgba(255,255,255,0.18)',
              backdropFilter: 'blur(10px)',
              border: '2px solid rgba(255,255,255,0.3)',
              animation: 'heroIn 0.65s cubic-bezier(0.34,1.56,0.64,1) 80ms both',
            }}
          >
            {profile.letter}
          </div>
          <p className="text-white/60 text-xs uppercase tracking-widest font-bold mb-2" style={{ animation: 'fadeUp 0.45s ease 300ms both' }}>{profile.tagline}</p>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4" style={{ animation: 'fadeUp 0.45s ease 380ms both' }}>
            Profil {profile.name}
            {sp && (
              <span className="block text-xl md:text-2xl font-bold text-white/80 mt-2">
                Sous-profil : {sp.name}
              </span>
            )}
          </h1>
          {blendSentence && (
            <p className="text-white/80 text-sm max-w-md mx-auto leading-relaxed mt-2 mb-2 italic" style={{ animation: 'fadeUp 0.45s ease 460ms both' }}>
              {blendSentence}
            </p>
          )}
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 -mt-6 pb-16 space-y-6">

        {/* ─── Cartographie DISC ─── */}
        <div className="bg-white rounded-2xl p-7 shadow-xl border border-cb-sauge" style={{ animation: 'fadeUp 0.5s ease 100ms both' }}>
          <h2 className="text-xs font-bold text-cb-encre-soft/70 uppercase tracking-wider mb-2">
            Votre position sur la cartographie DISC
          </h2>
          {!isFinal && (
            <p className="text-sm text-cb-encre-soft mb-4">
              Les <span className="font-bold text-cb-encre-soft/70">?</span> représentent des sous-profils que vous pouvez débloquer en Phase 2.
            </p>
          )}
          <DiscMap
            scores={scores}
            dominant={dominant}
            secondary={secondary}
            phase2Unlocked={isFinal}
            identifiedSubProfile={identifiedSubProfile}
            onLockedClick={!isFinal ? startPhase2 : undefined}
          />
        </div>

        {/* ─── CTA Phase 2 (si pas encore fait) ─── */}
        {!isFinal && (
          <div
            className="rounded-2xl p-8 text-center space-y-4"
            style={{
              background: `linear-gradient(135deg, ${color.main}10, ${color.dark}08)`,
              border: `2px dashed ${color.main}30`,
              animation: 'fadeUp 0.5s ease 180ms both',
            }}
          >
            <div className="flex justify-center mb-2">
              <div className="flex -space-x-2">
                {[color.main, `${color.main}88`, `${color.main}44`].map((c, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-black text-sm border-2 border-white"
                    style={{ backgroundColor: c }}
                  >
                    ?
                  </div>
                ))}
              </div>
            </div>
            <p className="text-cb-encre text-lg font-bold">
              Découvrez votre sous-profil parmi les 15 styles comportementaux
            </p>
            <p className="text-cb-encre-soft text-sm max-w-md mx-auto leading-relaxed">
              {phase2Questions.length} questions supplémentaires pour affiner votre profil {profile.name} et identifier votre style comportemental précis.
            </p>
            <button
              onClick={startPhase2}
              className="inline-flex items-center gap-2 text-white font-bold px-8 py-3.5 rounded-xl transition-all hover:-translate-y-0.5"
              style={{ backgroundColor: color.main, boxShadow: `0 4px 20px ${color.main}45` }}
            >
              Affiner mon profil, Phase 2
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        )}

        {/* ─── Sous-profil détaillé (après Phase 2) ─── */}
        {isFinal && sp && (
          <div className="bg-white rounded-2xl p-7 shadow-sm border border-cb-sauge" style={{ animation: 'fadeUp 0.5s ease 160ms both' }}>
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-black text-white"
                style={{ backgroundColor: color.main }}
              >
                {profile.letter}
              </div>
              <div>
                <h2 className="text-lg font-bold text-cb-encre">{sp.name}</h2>
                <p className="text-xs text-cb-encre-soft/70">{sp.nameEn}</p>
              </div>
            </div>
            <ul className="space-y-3 mb-5">
              {sp.traits.map((trait, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-cb-encre">
                  <span className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: color.main }} />
                  {trait}
                </li>
              ))}
            </ul>
            <div
              className="rounded-xl p-4 text-sm leading-relaxed"
              style={{ backgroundColor: color.bg, border: `1px solid ${color.main}22` }}
            >
              <p className="text-cb-encre-soft italic">{sp.dailyInsight}</p>
            </div>
          </div>
        )}

        {/* ─── Score distribution ─── */}
        <div className="bg-white rounded-2xl p-7 shadow-sm border border-cb-sauge" style={{ animation: 'fadeUp 0.5s ease 200ms both' }}>
          <h2 className="text-xs font-bold text-cb-encre-soft/70 uppercase tracking-wider mb-6">Répartition de vos scores</h2>
          <div className="space-y-5">
            {(Object.keys(profiles) as ProfileKey[]).sort((a, b) => scores[b] - scores[a]).map(k => {
              const pct = Math.round((scores[k] / total) * 100)
              const p = profiles[k]
              const c = DISC_COLORS[k]
              return (
                <div key={k}>
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center text-sm font-black text-white flex-shrink-0"
                        style={{ backgroundColor: c.main }}
                      >
                        {k}
                      </div>
                      <div>
                        <span className="text-sm font-bold text-cb-encre">{p.name}</span>
                        <span className="text-xs text-cb-encre-soft/70 ml-2">· {p.tagline}</span>
                      </div>
                    </div>
                    <span className="text-xl font-black tabular-nums" style={{ color: c.main }}>{pct}%</span>
                  </div>
                  <div className="h-3 bg-cb-sable rounded-full overflow-hidden">
                    <div className="h-full rounded-full transition-all duration-700" style={{ width: mounted ? `${pct}%` : '0%', backgroundColor: c.main }} />
                  </div>
                </div>
              )
            })}
          </div>
          {secondaryPct >= 15 && (
            <div
              className="mt-6 rounded-xl p-4 text-sm leading-relaxed"
              style={{ backgroundColor: DISC_COLORS[secondary].bg, border: `1px solid ${DISC_COLORS[secondary].main}33` }}
            >
              <span className="font-bold" style={{ color: DISC_COLORS[secondary].main }}>
                Dimension secondaire notable ({secondary} · {secondaryPct}%) :
              </span>
              <span className="text-cb-encre-soft ml-1">
                {blendSentence || `Votre profil ${secondary} vient nuancer et enrichir votre dominante ${dominant}.`}
              </span>
            </div>
          )}
        </div>

        {/* ─── Contexte ouvert ─── */}
        {openAnswer.trim() && (
          <div className="bg-white rounded-2xl p-7 shadow-sm border border-cb-sauge" style={{ animation: 'fadeUp 0.5s ease 320ms both' }}>
            <p className="text-xs font-bold text-cb-encre-soft/70 uppercase tracking-wider mb-3 flex items-center gap-2">
              <span>💬</span> Votre contexte
            </p>
            <p className="text-cb-encre text-sm leading-relaxed italic">&ldquo;{openAnswer.trim()}&rdquo;</p>
            <p className="text-xs text-cb-encre-soft/70 mt-4 flex items-center gap-1">
              <span>🔒</span>
              <span>Cette réponse n'est pas conservée, elle disparaîtra à la fermeture de cette page.</span>
            </p>
          </div>
        )}

        {/* ─── Description détaillée avec surlignage ─── */}
        <div className="bg-white rounded-2xl p-7 shadow-sm border border-cb-sauge" style={{ animation: 'fadeUp 0.5s ease 380ms both' }}>
          <h2 className="text-sm font-bold text-cb-encre flex items-center gap-2 mb-5">
            <span
              className="w-6 h-6 rounded-lg flex items-center justify-center text-xs font-black text-white"
              style={{ backgroundColor: color.main }}
            >
              {profile.letter}
            </span>
            Votre profil en détail
          </h2>
          <div className="space-y-1 mb-4">
            <div className="flex flex-wrap gap-2 text-xs text-cb-encre-soft/70">
              {(Object.keys(DISC_COLORS) as ProfileKey[]).map(k => (
                <span key={k} className="flex items-center gap-1">
                  <span
                    className="inline-block w-3 h-3 rounded-sm"
                    style={{ backgroundColor: `${DISC_COLORS[k].main}55` }}
                  />
                  {profiles[k].name}
                </span>
              ))}
              <span>— les passages surlignés reflètent vos scores</span>
            </div>
          </div>
          <div className="space-y-5">
            {profile.paragraphs.map((para, i) => (
              <p key={i} className="text-cb-encre-soft leading-relaxed text-[15px]">
                {renderSegments(para, scores, total)}
              </p>
            ))}
          </div>
        </div>

        {/* ─── Forces & Développement ─── */}
        <div className="grid sm:grid-cols-2 gap-5" style={{ animation: 'fadeUp 0.5s ease 460ms both' }}>
          <div className="bg-white rounded-2xl p-7 shadow-sm border border-cb-sauge">
            <h3 className="text-xs font-bold text-cb-encre-soft/70 uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] text-white font-bold" style={{ backgroundColor: color.main }}>✓</span>
              Vos forces
            </h3>
            <ul className="space-y-3">
              {profile.strengths.map(s => (
                <li key={s} className="flex items-start gap-3 text-sm text-cb-encre">
                  <span className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: color.main }} />
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-2xl p-7 shadow-sm border border-cb-sauge">
            <h3 className="text-xs font-bold text-cb-encre-soft/70 uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-[10px] text-cb-encre-soft font-bold">↑</span>
              Axes de développement
            </h3>
            <ul className="space-y-3">
              {profile.growth.map(g => (
                <li key={g} className="flex items-start gap-3 text-sm text-cb-encre">
                  <span className="w-2 h-2 rounded-full mt-1.5 bg-gray-300 flex-shrink-0" />
                  {g}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ─── Profils célèbres ─── */}
        <div className="bg-white rounded-2xl p-7 shadow-sm border border-cb-sauge" style={{ animation: 'fadeUp 0.5s ease 540ms both' }}>
          <p className="text-xs text-cb-encre-soft/70 uppercase tracking-wider font-bold mb-4">Profils similaires célèbres</p>
          <div className="flex flex-wrap gap-2">
            {profile.famous.map(f => (
              <span
                key={f}
                className="text-sm font-semibold border-2 rounded-xl px-4 py-2"
                style={{ borderColor: color.main, color: color.main, backgroundColor: color.bg }}
              >
                {f}
              </span>
            ))}
          </div>
        </div>

        {/* ─── Section Contact "Akinator" ─── */}
        <div style={{ animation: 'fadeUp 0.5s ease 620ms both' }}>
          <DiscContactSection
            dominant={dominant}
            secondary={secondary}
            subProfile={identifiedSubProfile}
            scores={scores}
          />
        </div>

        {/* ─── Disclaimer ─── */}
        <p className="text-center text-xs text-cb-encre-soft/70 leading-relaxed">
          Ce test est basé sur le modèle DISC de William Moulton Marston.<br />
          Cartographie des 15 sous-profils inspirée d'Assessments 24x7.<br />
          Il est fourni à titre indicatif et ne remplace pas un bilan professionnel certifié.
        </p>
      </div>
    </div>
  )
}
