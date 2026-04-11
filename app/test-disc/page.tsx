'use client'
import { useState } from 'react'
import Link from 'next/link'

const questions = [
  {
    id: 1,
    text: "Face à un obstacle professionnel, votre réaction spontanée est de :",
    options: [
      { label: "Foncer et trouver une solution immédiatement", profile: 'D' },
      { label: "En parler à votre équipe pour trouver ensemble", profile: 'I' },
      { label: "Analyser calmement avant d'agir", profile: 'S' },
      { label: "Lister toutes les causes possibles avec méthode", profile: 'C' },
    ],
  },
  {
    id: 2,
    text: "En réunion, vous avez tendance à :",
    options: [
      { label: "Prendre les décisions et orienter le groupe", profile: 'D' },
      { label: "Animer et motiver l'énergie collective", profile: 'I' },
      { label: "Écouter attentivement avant de donner votre avis", profile: 'S' },
      { label: "Poser des questions précises et analyser les données", profile: 'C' },
    ],
  },
  {
    id: 3,
    text: "Vos collègues vous décrivent plutôt comme :",
    options: [
      { label: "Déterminé(e) et direct(e)", profile: 'D' },
      { label: "Enthousiaste et communicatif(ve)", profile: 'I' },
      { label: "Fiable et calme", profile: 'S' },
      { label: "Rigoureux(se) et précis(e)", profile: 'C' },
    ],
  },
  {
    id: 4,
    text: "Quand vous travaillez sur un projet, ce qui vous importe le plus c'est :",
    options: [
      { label: "Atteindre les objectifs rapidement", profile: 'D' },
      { label: "Créer une bonne dynamique d'équipe", profile: 'I' },
      { label: "Assurer la stabilité et la continuité", profile: 'S' },
      { label: "Garantir la qualité et l'exactitude", profile: 'C' },
    ],
  },
  {
    id: 5,
    text: "Sous pression, vous avez tendance à devenir :",
    options: [
      { label: "Autoritaire et impatient(e)", profile: 'D' },
      { label: "Dispersé(e) et émotionnel(le)", profile: 'I' },
      { label: "Passif(ve) et résistant(e) au changement", profile: 'S' },
      { label: "Sur-analytique et perfectionniste", profile: 'C' },
    ],
  },
  {
    id: 6,
    text: "Votre style de communication préféré est :",
    options: [
      { label: "Direct, concis, orienté résultats", profile: 'D' },
      { label: "Chaleureux, expressif, narratif", profile: 'I' },
      { label: "Patient, à l'écoute, posé", profile: 'S' },
      { label: "Structuré, factuel, détaillé", profile: 'C' },
    ],
  },
  {
    id: 7,
    text: "Dans votre environnement de travail idéal :",
    options: [
      { label: "Je suis autonome et j'ai du pouvoir de décision", profile: 'D' },
      { label: "L'ambiance est positive et collaborative", profile: 'I' },
      { label: "Les rôles sont clairs et le rythme prévisible", profile: 'S' },
      { label: "Les processus sont définis et la qualité prime", profile: 'C' },
    ],
  },
  {
    id: 8,
    text: "Ce qui vous motive le plus dans votre travail :",
    options: [
      { label: "Relever des défis et gagner", profile: 'D' },
      { label: "Inspirer et influencer les autres", profile: 'I' },
      { label: "Contribuer à un projet durable", profile: 'S' },
      { label: "Résoudre des problèmes complexes avec précision", profile: 'C' },
    ],
  },
  {
    id: 9,
    text: "Face à un changement inattendu, vous :",
    options: [
      { label: "Vous adaptez vite et prenez le contrôle", profile: 'D' },
      { label: "Voyez l'opportunité et enthousiasmez les autres", profile: 'I' },
      { label: "Prenez le temps de comprendre avant d'agir", profile: 'S' },
      { label: "Évaluez les risques et impacts minutieusement", profile: 'C' },
    ],
  },
  {
    id: 10,
    text: "En matière de prise de risque :",
    options: [
      { label: "Vous aimez prendre des risques calculés", profile: 'D' },
      { label: "Vous vous laissez guider par votre intuition", profile: 'I' },
      { label: "Vous préférez la prudence et la sécurité", profile: 'S' },
      { label: "Vous analysez en profondeur avant de décider", profile: 'C' },
    ],
  },
  {
    id: 11,
    text: "Votre approche du feedback :",
    options: [
      { label: "Vous donnez un feedback franc et direct", profile: 'D' },
      { label: "Vous commencez par les points positifs", profile: 'I' },
      { label: "Vous choisissez le bon moment avec soin", profile: 'S' },
      { label: "Vous structurez votre retour avec des faits", profile: 'C' },
    ],
  },
  {
    id: 12,
    text: "Ce qui vous frustre le plus au travail :",
    options: [
      { label: "L'inefficacité et la lenteur des décisions", profile: 'D' },
      { label: "L'atmosphère froide et le manque de reconnaissance", profile: 'I' },
      { label: "Le chaos et le manque de stabilité", profile: 'S' },
      { label: "L'imprécision et les erreurs non corrigées", profile: 'C' },
    ],
  },
]

const profiles = {
  D: {
    name: 'Dominant',
    letter: 'D',
    color: '#E57373',
    bg: '#E57373',
    tagline: 'Le Conducteur',
    description: "Vous êtes orienté résultats, direct et compétitif. Naturellement à l'aise dans les rôles de leadership, vous aimez relever des défis et prendre des décisions rapides. Votre moteur : l'efficacité et la victoire.",
    strengths: ['Prise de décision rapide', 'Leadership naturel', 'Orientation résultats', 'Gestion de crise'],
    growth: ['Patience avec les autres', 'Écoute active', 'Délégation sans contrôle'],
    famous: ['Steve Jobs', 'Margaret Thatcher', 'Napoleon Bonaparte'],
  },
  I: {
    name: 'Influent',
    letter: 'I',
    color: '#FFB74D',
    bg: '#FFB74D',
    tagline: "L'Inspirateur",
    description: "Enthousiaste et communicatif, vous excellez à fédérer et motiver les équipes. Votre charisme naturel vous permet d'influencer et de convaincre. Vous êtes à l'aise dans les environnements sociaux et créatifs.",
    strengths: ['Communication', 'Créativité', 'Enthousiasme', 'Réseau et relations'],
    growth: ['Organisation', 'Suivi des détails', 'Respect des délais'],
    famous: ['Richard Branson', 'Oprah Winfrey', 'Bill Clinton'],
  },
  S: {
    name: 'Stable',
    letter: 'S',
    color: '#81C784',
    bg: '#81C784',
    tagline: 'Le Soutien',
    description: "Calme, fiable et patient, vous êtes le pilier de votre équipe. Vous construisez des relations solides sur le long terme et excellez dans les environnements stables. Votre loyauté et votre constance sont vos forces majeures.",
    strengths: ['Fiabilité', 'Écoute', "Travail d'équipe", 'Persévérance'],
    growth: ['Assertivité', 'Gestion du changement', 'Prise de décision rapide'],
    famous: ['Mère Teresa', 'Gandhi', 'Jimmy Carter'],
  },
  C: {
    name: 'Consciencieux',
    letter: 'C',
    color: '#64B5F6',
    bg: '#64B5F6',
    tagline: "L'Analyste",
    description: "Rigoureux et méthodique, vous avez un talent pour analyser des situations complexes et produire un travail de haute qualité. Vous êtes guidé par les faits, les données et les standards d'excellence.",
    strengths: ['Précision', 'Analyse', 'Qualité', 'Expertise technique'],
    growth: ['Flexibilité', 'Délégation', 'Communication des émotions'],
    famous: ['Bill Gates', 'Albert Einstein', 'Marie Curie'],
  },
}

type ProfileKey = 'D' | 'I' | 'S' | 'C'

function shuffleOptions(options: { label: string; profile: string }[]) {
  return [...options].sort(() => Math.random() - 0.5)
}

export default function DiscTest() {
  const [step, setStep] = useState<'intro' | 'test' | 'results'>('intro')
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState<Record<number, ProfileKey>>({})
  const [shuffled] = useState(() => questions.map(q => ({ ...q, options: shuffleOptions(q.options) })))
  const [selected, setSelected] = useState<string | null>(null)

  const handleAnswer = (profile: ProfileKey) => {
    setSelected(profile)
    setTimeout(() => {
      setAnswers(prev => ({ ...prev, [questions[current].id]: profile }))
      if (current < questions.length - 1) {
        setCurrent(c => c + 1)
        setSelected(null)
      } else {
        setStep('results')
      }
    }, 300)
  }

  const scores: Record<ProfileKey, number> = { D: 0, I: 0, S: 0, C: 0 }
  Object.values(answers).forEach(p => { scores[p]++ })
  const total = Object.values(scores).reduce((a, b) => a + b, 0) || 1
  const dominant = (Object.keys(scores) as ProfileKey[]).reduce((a, b) => scores[a] >= scores[b] ? a : b)

  const restart = () => {
    setStep('intro')
    setCurrent(0)
    setAnswers({})
    setSelected(null)
  }

  // ─── INTRO ────────────────────────────────────────────────────────────────
  if (step === 'intro') {
    return (
      <div className="min-h-screen bg-[#0B1120] flex flex-col">
        <nav className="px-6 py-5 flex items-center justify-between border-b border-white/5">
          <Link href="/" className="text-white/60 hover:text-white text-sm flex items-center gap-2 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Accueil
          </Link>
          <span className="text-xs text-white/30">Test DISC – Gratuit &amp; Confidentiel</span>
        </nav>

        <div className="flex-1 flex items-center justify-center px-6 py-16">
          <div className="max-w-2xl text-center space-y-8">
            {/* DISC badges */}
            <div className="flex items-center justify-center gap-3">
              {(['D', 'I', 'S', 'C'] as ProfileKey[]).map(l => (
                <div key={l} className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-[#0B1120] text-lg"
                  style={{ backgroundColor: profiles[l].color }}>
                  {l}
                </div>
              ))}
            </div>

            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Découvrez votre profil <span className="text-[#7C9CBF]">DISC</span>
              </h1>
              <p className="text-lg text-white/50 leading-relaxed">
                12 questions pour identifier votre style comportemental dominant et mieux comprendre comment vous interagissez avec les autres.
              </p>
            </div>

            {/* Info cards */}
            <div className="grid grid-cols-3 gap-4 text-sm">
              {[
                { icon: '⏱', label: '5 minutes', sub: 'environ' },
                { icon: '🔒', label: 'Confidentiel', sub: 'aucune donnée collectée' },
                { icon: '✓', label: 'Gratuit', sub: 'sans inscription' },
              ].map(({ icon, label, sub }) => (
                <div key={label} className="bg-[#0F1A2E]/60 border border-white/6 rounded-xl p-4">
                  <div className="text-2xl mb-1">{icon}</div>
                  <div className="font-semibold text-white">{label}</div>
                  <div className="text-white/35 text-xs">{sub}</div>
                </div>
              ))}
            </div>

            <button
              onClick={() => setStep('test')}
              className="inline-flex items-center gap-2 bg-[#7C9CBF] hover:bg-[#6A8EAF] text-[#0B1120] font-bold px-10 py-4 rounded-full text-lg transition-all shadow-lg shadow-[#7C9CBF]/20 hover:-translate-y-0.5"
            >
              Commencer le test
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>

            <p className="text-xs text-white/25">
              Ce test est basé sur le modèle DISC de William Moulton Marston. Il est fourni à titre indicatif.
            </p>
          </div>
        </div>
      </div>
    )
  }

  // ─── TEST ──────────────────────────────────────────────────────────────────
  if (step === 'test') {
    const q = shuffled[current]
    const progress = ((current) / questions.length) * 100

    return (
      <div className="min-h-screen bg-[#0B1120] flex flex-col">
        <nav className="px-6 py-5 flex items-center justify-between border-b border-white/5">
          <Link href="/" className="text-white/60 hover:text-white text-sm flex items-center gap-2 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Accueil
          </Link>
          <span className="text-xs text-white/40 font-medium">{current + 1} / {questions.length}</span>
        </nav>

        {/* Progress bar */}
        <div className="h-0.5 bg-white/5">
          <div className="h-full bg-[#7C9CBF] transition-all duration-500" style={{ width: `${progress}%` }} />
        </div>

        <div className="flex-1 flex items-center justify-center px-6 py-12">
          <div className="max-w-xl w-full space-y-8">
            {/* Question */}
            <div>
              <p className="text-xs font-semibold text-[#7C9CBF] uppercase tracking-widest mb-3">
                Question {current + 1}
              </p>
              <h2 className="text-xl md:text-2xl font-semibold text-white leading-snug">
                {q.text}
              </h2>
            </div>

            {/* Options */}
            <div className="space-y-3">
              {q.options.map((opt) => (
                <button
                  key={opt.profile}
                  onClick={() => handleAnswer(opt.profile as ProfileKey)}
                  className={`w-full text-left p-4 md:p-5 rounded-xl border transition-all duration-200 group ${
                    selected === opt.profile
                      ? 'border-[#7C9CBF] bg-[#7C9CBF]/15 text-white'
                      : 'border-white/8 bg-[#0F1A2E]/50 text-white/70 hover:border-white/20 hover:bg-[#0F1A2E]/80 hover:text-white'
                  }`}
                >
                  <span className="text-sm font-medium leading-relaxed">{opt.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  // ─── RESULTS ───────────────────────────────────────────────────────────────
  const profile = profiles[dominant]

  return (
    <div className="min-h-screen bg-[#0B1120]">
      <nav className="px-6 py-5 flex items-center justify-between border-b border-white/5">
        <Link href="/" className="text-white/60 hover:text-white text-sm flex items-center gap-2 transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Accueil
        </Link>
        <button onClick={restart} className="text-xs text-white/40 hover:text-white/70 transition-colors">
          Recommencer
        </button>
      </nav>

      <div className="max-w-3xl mx-auto px-6 py-16 space-y-12">
        {/* Hero result */}
        <div className="text-center space-y-4">
          <div
            className="w-24 h-24 rounded-full mx-auto flex items-center justify-center text-4xl font-bold text-[#0B1120] shadow-2xl"
            style={{ backgroundColor: profile.color, boxShadow: `0 0 60px ${profile.color}40` }}
          >
            {profile.letter}
          </div>
          <div>
            <p className="text-sm text-white/40 uppercase tracking-widest font-medium mb-1">{profile.tagline}</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Profil <span style={{ color: profile.color }}>{profile.name}</span>
            </h1>
          </div>
          <p className="text-white/55 leading-relaxed max-w-lg mx-auto">
            {profile.description}
          </p>
        </div>

        {/* Score bars */}
        <div className="bg-[#0F1A2E]/50 border border-white/6 rounded-2xl p-7 space-y-5">
          <h2 className="text-sm font-semibold text-white/40 uppercase tracking-wider">Répartition de vos résultats</h2>
          {(Object.keys(profiles) as ProfileKey[]).map(k => {
            const pct = Math.round((scores[k] / total) * 100)
            const p = profiles[k]
            return (
              <div key={k} className="space-y-1.5">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-[#0B1120]"
                      style={{ backgroundColor: p.color }}>
                      {k}
                    </div>
                    <span className="text-sm text-white/70 font-medium">{p.name}</span>
                    <span className="text-xs text-white/30">– {p.tagline}</span>
                  </div>
                  <span className="text-sm font-bold" style={{ color: p.color }}>{pct}%</span>
                </div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full rounded-full transition-all"
                    style={{ width: `${pct}%`, backgroundColor: p.color, opacity: 0.85 }} />
                </div>
              </div>
            )
          })}
        </div>

        {/* Strengths & growth */}
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="bg-[#0F1A2E]/50 border border-white/6 rounded-2xl p-6 space-y-4">
            <h3 className="text-sm font-semibold text-white/40 uppercase tracking-wider flex items-center gap-2">
              <span style={{ color: profile.color }}>✦</span> Vos forces
            </h3>
            <ul className="space-y-2">
              {profile.strengths.map(s => (
                <li key={s} className="flex items-center gap-2 text-sm text-white/70">
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: profile.color }} />
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#0F1A2E]/50 border border-white/6 rounded-2xl p-6 space-y-4">
            <h3 className="text-sm font-semibold text-white/40 uppercase tracking-wider flex items-center gap-2">
              <span className="text-[#7C9CBF]">→</span> Axes de développement
            </h3>
            <ul className="space-y-2">
              {profile.growth.map(g => (
                <li key={g} className="flex items-center gap-2 text-sm text-white/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7C9CBF] flex-shrink-0" />
                  {g}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Famous */}
        <div className="bg-[#0F1A2E]/40 border border-white/5 rounded-2xl p-6">
          <p className="text-xs text-white/30 uppercase tracking-wider mb-3">Profils similaires célèbres</p>
          <div className="flex flex-wrap gap-2">
            {profile.famous.map(f => (
              <span key={f} className="text-sm font-medium text-white/60 border border-white/8 rounded-full px-3 py-1">
                {f}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center space-y-4">
          <p className="text-white/45 text-sm">
            Envie d'aller plus loin avec votre profil DISC ?
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-[#7C9CBF] hover:bg-[#6A8EAF] text-[#0B1120] font-semibold px-6 py-3 rounded-full transition-all shadow-lg shadow-[#7C9CBF]/20 hover:-translate-y-0.5"
            >
              Me contacter
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <button
              onClick={restart}
              className="inline-flex items-center gap-2 border border-white/15 hover:border-white/30 text-white/60 hover:text-white font-medium px-6 py-3 rounded-full transition-all"
            >
              Recommencer
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
