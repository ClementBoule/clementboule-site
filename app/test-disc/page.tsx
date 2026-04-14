'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

type ProfileKey = 'D' | 'I' | 'S' | 'C'
type TextSegment = { text: string; tag?: ProfileKey }

const DISC_COLORS: Record<ProfileKey, { main: string; dark: string; bg: string }> = {
  D: { main: '#DC2626', dark: '#991B1B', bg: 'rgba(220,38,38,0.1)' },
  I: { main: '#EAB308', dark: '#854D0E', bg: 'rgba(234,179,8,0.1)' },
  S: { main: '#16A34A', dark: '#14532D', bg: 'rgba(22,163,74,0.1)' },
  C: { main: '#2563EB', dark: '#1E3A8A', bg: 'rgba(37,99,235,0.1)' },
}

const questions = [
  { id: 1, text: "Face à un obstacle professionnel, votre réaction spontanée est de :", options: [
    { label: "Foncer et trouver une solution immédiatement", profile: 'D' as ProfileKey },
    { label: "En parler à votre équipe pour trouver ensemble", profile: 'I' as ProfileKey },
    { label: "Analyser calmement avant d'agir", profile: 'S' as ProfileKey },
    { label: "Lister toutes les causes possibles avec méthode", profile: 'C' as ProfileKey },
  ]},
  { id: 2, text: "En réunion, vous avez tendance à :", options: [
    { label: "Prendre les décisions et orienter le groupe", profile: 'D' as ProfileKey },
    { label: "Animer et motiver l'énergie collective", profile: 'I' as ProfileKey },
    { label: "Écouter attentivement avant de donner votre avis", profile: 'S' as ProfileKey },
    { label: "Poser des questions précises et analyser les données", profile: 'C' as ProfileKey },
  ]},
  { id: 3, text: "Vos collègues vous décrivent plutôt comme :", options: [
    { label: "Déterminé(e) et direct(e)", profile: 'D' as ProfileKey },
    { label: "Enthousiaste et communicatif(ve)", profile: 'I' as ProfileKey },
    { label: "Fiable et calme", profile: 'S' as ProfileKey },
    { label: "Rigoureux(se) et précis(e)", profile: 'C' as ProfileKey },
  ]},
  { id: 4, text: "Quand vous travaillez sur un projet, ce qui vous importe le plus c'est :", options: [
    { label: "Atteindre les objectifs rapidement", profile: 'D' as ProfileKey },
    { label: "Créer une bonne dynamique d'équipe", profile: 'I' as ProfileKey },
    { label: "Assurer la stabilité et la continuité", profile: 'S' as ProfileKey },
    { label: "Garantir la qualité et l'exactitude", profile: 'C' as ProfileKey },
  ]},
  { id: 5, text: "Sous pression, vous avez tendance à devenir :", options: [
    { label: "Autoritaire et impatient(e)", profile: 'D' as ProfileKey },
    { label: "Dispersé(e) et émotionnel(le)", profile: 'I' as ProfileKey },
    { label: "Passif(ve) et résistant(e) au changement", profile: 'S' as ProfileKey },
    { label: "Sur-analytique et perfectionniste", profile: 'C' as ProfileKey },
  ]},
  { id: 6, text: "Votre style de communication préféré est :", options: [
    { label: "Direct, concis, orienté résultats", profile: 'D' as ProfileKey },
    { label: "Chaleureux, expressif, narratif", profile: 'I' as ProfileKey },
    { label: "Patient, à l'écoute, posé", profile: 'S' as ProfileKey },
    { label: "Structuré, factuel, détaillé", profile: 'C' as ProfileKey },
  ]},
  { id: 7, text: "Dans votre environnement de travail idéal :", options: [
    { label: "Je suis autonome et j'ai du pouvoir de décision", profile: 'D' as ProfileKey },
    { label: "L'ambiance est positive et collaborative", profile: 'I' as ProfileKey },
    { label: "Les rôles sont clairs et le rythme prévisible", profile: 'S' as ProfileKey },
    { label: "Les processus sont définis et la qualité prime", profile: 'C' as ProfileKey },
  ]},
  { id: 8, text: "Ce qui vous motive le plus dans votre travail :", options: [
    { label: "Relever des défis et gagner", profile: 'D' as ProfileKey },
    { label: "Inspirer et influencer les autres", profile: 'I' as ProfileKey },
    { label: "Contribuer à un projet durable", profile: 'S' as ProfileKey },
    { label: "Résoudre des problèmes complexes avec précision", profile: 'C' as ProfileKey },
  ]},
  { id: 9, text: "Face à un changement inattendu, vous :", options: [
    { label: "Vous adaptez vite et prenez le contrôle", profile: 'D' as ProfileKey },
    { label: "Voyez l'opportunité et enthousiasmez les autres", profile: 'I' as ProfileKey },
    { label: "Prenez le temps de comprendre avant d'agir", profile: 'S' as ProfileKey },
    { label: "Évaluez les risques et impacts minutieusement", profile: 'C' as ProfileKey },
  ]},
  { id: 10, text: "En matière de prise de risque :", options: [
    { label: "Vous aimez prendre des risques calculés", profile: 'D' as ProfileKey },
    { label: "Vous vous laissez guider par votre intuition", profile: 'I' as ProfileKey },
    { label: "Vous préférez la prudence et la sécurité", profile: 'S' as ProfileKey },
    { label: "Vous analysez en profondeur avant de décider", profile: 'C' as ProfileKey },
  ]},
  { id: 11, text: "Votre approche du feedback :", options: [
    { label: "Vous donnez un feedback franc et direct", profile: 'D' as ProfileKey },
    { label: "Vous commencez par les points positifs", profile: 'I' as ProfileKey },
    { label: "Vous choisissez le bon moment avec soin", profile: 'S' as ProfileKey },
    { label: "Vous structurez votre retour avec des faits", profile: 'C' as ProfileKey },
  ]},
  { id: 12, text: "Ce qui vous frustre le plus au travail :", options: [
    { label: "L'inefficacité et la lenteur des décisions", profile: 'D' as ProfileKey },
    { label: "L'atmosphère froide et le manque de reconnaissance", profile: 'I' as ProfileKey },
    { label: "Le chaos et le manque de stabilité", profile: 'S' as ProfileKey },
    { label: "L'imprécision et les erreurs non corrigées", profile: 'C' as ProfileKey },
  ]},
  { id: 13, text: "Quand vous prenez une décision importante, vous :", options: [
    { label: "Tranchez rapidement en vous fiant à votre instinct et votre expérience", profile: 'D' as ProfileKey },
    { label: "Consultez plusieurs personnes de votre réseau pour enrichir votre perspective", profile: 'I' as ProfileKey },
    { label: "Prenez le temps d'évaluer l'impact sur votre équipe et les parties prenantes", profile: 'S' as ProfileKey },
    { label: "Analysez méthodiquement toutes les données disponibles avant de trancher", profile: 'C' as ProfileKey },
  ]},
  { id: 14, text: "Pour motiver votre équipe, vous misez naturellement sur :", options: [
    { label: "Des objectifs ambitieux et la fierté de les atteindre ensemble", profile: 'D' as ProfileKey },
    { label: "Une ambiance positive et la célébration collective des succès", profile: 'I' as ProfileKey },
    { label: "La reconnaissance individuelle et un cadre de travail stable", profile: 'S' as ProfileKey },
    { label: "La clarté des attentes et l'excellence des processus", profile: 'C' as ProfileKey },
  ]},
  { id: 15, text: "Face à un désaccord professionnel, vous :", options: [
    { label: "Défendez votre position avec conviction et allez droit au but", profile: 'D' as ProfileKey },
    { label: "Cherchez un terrain d'entente par le dialogue ouvert", profile: 'I' as ProfileKey },
    { label: "Privilégiez le compromis pour préserver la relation et l'harmonie", profile: 'S' as ProfileKey },
    { label: "Présentez les arguments factuels pour résoudre le désaccord objectivement", profile: 'C' as ProfileKey },
  ]},
  { id: 16, text: "Votre rapport au changement en entreprise :", options: [
    { label: "Vous l'initiez vous-même — le statu quo vous frustre rapidement", profile: 'D' as ProfileKey },
    { label: "Vous l'adoptez avec enthousiasme si la vision derrière est claire", profile: 'I' as ProfileKey },
    { label: "Vous l'acceptez progressivement, à condition d'être accompagné(e)", profile: 'S' as ProfileKey },
    { label: "Vous l'évaluez rigoureusement avant d'y adhérer — risques et bénéfices inclus", profile: 'C' as ProfileKey },
  ]},
  { id: 17, text: "Pour vous, un bon manager c'est avant tout quelqu'un qui :", options: [
    { label: "Fixe un cap clair et fait confiance à son équipe pour y arriver", profile: 'D' as ProfileKey },
    { label: "Crée de l'engagement et donne envie de se dépasser", profile: 'I' as ProfileKey },
    { label: "Soutient chaque membre et construit un environnement sécurisant", profile: 'S' as ProfileKey },
    { label: "Établit des processus clairs et garantit l'excellence du travail produit", profile: 'C' as ProfileKey },
  ]},
  { id: 18, text: "En fin de journée, ce qui vous donne l'impression d'avoir bien travaillé :", options: [
    { label: "Avoir avancé concrètement et coché des objectifs importants", profile: 'D' as ProfileKey },
    { label: "Avoir eu des échanges stimulants et créé de la valeur relationnelle", profile: 'I' as ProfileKey },
    { label: "Avoir bien servi mon équipe et maintenu une atmosphère sereine", profile: 'S' as ProfileKey },
    { label: "Avoir produit un travail rigoureux, sans erreur, bien documenté", profile: 'C' as ProfileKey },
  ]},
  { id: 19, text: "Sur un projet nouveau, votre première action naturelle est de :", options: [
    { label: "Fixer les grandes lignes et vous lancer — vous affinerez en chemin", profile: 'D' as ProfileKey },
    { label: "Rassembler les personnes clés et construire l'élan collectif", profile: 'I' as ProfileKey },
    { label: "Clarifier les rôles, les étapes et le planning avant de démarrer", profile: 'S' as ProfileKey },
    { label: "Documenter les exigences, risques et critères de succès en détail", profile: 'C' as ProfileKey },
  ]},
  { id: 20, text: "Ce que vous aimez le moins dans le travail en équipe :", options: [
    { label: "Les réunions infinies sans décision ni responsable clair", profile: 'D' as ProfileKey },
    { label: "Les atmosphères froides, les conflits négatifs, le manque de chaleur humaine", profile: 'I' as ProfileKey },
    { label: "L'imprévisibilité et les règles du jeu qui changent sans préavis", profile: 'S' as ProfileKey },
    { label: "Le manque de rigueur, les erreurs répétées, l'approximation généralisée", profile: 'C' as ProfileKey },
  ]},
]

const profiles: Record<ProfileKey, {
  name: string; letter: ProfileKey; tagline: string
  paragraphs: TextSegment[][]
  strengths: string[]; growth: string[]; famous: string[]
}> = {
  D: {
    name: 'Dominant', letter: 'D', tagline: 'Le Conducteur',
    paragraphs: [
      [
        { text: "Vous êtes un profil Dominant — un leader né qui " },
        { text: "avance à toute vitesse vers ses objectifs", tag: 'D' },
        { text: ". Votre première impulsion face à tout défi est de " },
        { text: "prendre les choses en main et d'agir sans hésitation", tag: 'D' },
        { text: ". Là où d'autres tergiversent, " },
        { text: "vous décidez", tag: 'D' },
        { text: ". Cette capacité à trancher rapidement est votre plus grand atout en situation de crise, de pression forte ou de compétition intense." },
      ],
      [
        { text: "Dans un environnement professionnel, vous cherchez avant tout " },
        { text: "l'autonomie et le contrôle", tag: 'D' },
        { text: ". Vous n'aimez pas être micro-managé et préférez être jugé sur " },
        { text: "vos résultats plutôt que sur vos méthodes", tag: 'D' },
        { text: ". " },
        { text: "La compétition vous stimule", tag: 'D' },
        { text: " plutôt qu'elle ne vous intimide. Votre directness peut parfois être perçue comme de la brutalité, mais c'est avant tout votre manière d'être efficace et de respecter le temps de chacun." },
      ],
      [
        { text: "Votre zone de croissance se trouve dans " },
        { text: "l'écoute active et la patience relationnelle", tag: 'S' },
        { text: ". Apprendre à " },
        { text: "comprendre les besoins de vos collaborateurs", tag: 'S' },
        { text: " avant d'agir peut démultiplier votre impact. " },
        { text: "Intégrer davantage d'analyse avant de décider", tag: 'C' },
        { text: " et prendre le temps de " },
        { text: "construire l'enthousiasme collectif", tag: 'I' },
        { text: " vous permettra de devenir un leader qui inspire durablement, au-delà de la seule performance immédiate." },
      ],
    ],
    strengths: ['Prise de décision rapide', 'Leadership naturel', 'Orientation résultats', 'Gestion de crise', 'Vision stratégique'],
    growth: ['Patience avec les autres', 'Écoute active', 'Délégation sans contrôle', 'Empathie managériale'],
    famous: ['Steve Jobs', 'Margaret Thatcher', 'Elon Musk', 'Napoleon'],
  },
  I: {
    name: 'Influent', letter: 'I', tagline: "L'Inspirateur",
    paragraphs: [
      [
        { text: "Vous êtes un profil Influent — le catalyseur social de tout groupe. " },
        { text: "Votre énergie est contagieuse, votre enthousiasme communicatif", tag: 'I' },
        { text: ", et " },
        { text: "votre capacité à connecter avec les autres est un don rare", tag: 'I' },
        { text: ". Là où certains voient des obstacles, vous voyez des opportunités d'" },
        { text: "engager, de motiver et de fédérer autour d'une vision commune", tag: 'I' },
        { text: "." },
      ],
      [
        { text: "Dans un contexte professionnel, vous excellez dans tous les rôles qui impliquent " },
        { text: "du contact humain, de la persuasion et de la créativité", tag: 'I' },
        { text: ". Vous avez une capacité naturelle à " },
        { text: "lire l'énergie d'une salle et à l'ajuster à votre avantage", tag: 'I' },
        { text: ". " },
        { text: "Votre charisme vous ouvre des portes", tag: 'I' },
        { text: " que d'autres n'imaginent même pas frapper." },
      ],
      [
        { text: "Votre axe de développement principal concerne " },
        { text: "la rigueur et la méthode dans les tâches solitaires", tag: 'C' },
        { text: ". Développer " },
        { text: "des systèmes pour assurer le suivi de vos engagements", tag: 'C' },
        { text: " et " },
        { text: "la gestion de vos priorités avec discipline", tag: 'D' },
        { text: " vous permettra de transformer votre potentiel d'influenceur naturel en vp�ritable force de résultats durables. " },
        { text: "Un ancrage dans la stabilité", tag: 'S' },
        { text: " renforcera encore davantage votre crédibilité." },
      ],
    ],
    strengths: ['Communication naturelle', 'Créativité', 'Enthousiasme fédérateur', 'Réseau et relations', 'Persuasion'],
    growth: ['Organisation personnelle', 'Suivi des détails', 'Respect des délais', 'Ancrage dans les données'],
    famous: ['Richard Branson', 'Oprah Winfrey', 'Bill Clinton', 'Tony Robbins'],
  },
  S: {
    name: 'Stable', letter: 'S', tagline: 'Le Soutien',
    paragraphs: [
      [
        { text: "Vous êtes un profil Stable — " },
        { text: "l'ancre indispensable de tout collectif qui fonctionne", tag: 'S' },
        { text: ". " },
        { text: "Votre calme face à la tempête, votre loyauté sans faille", tag: 'S' },
        { text: " et " },
        { text: "votre capacité à créer des environnements sécurisants", tag: 'S' },
        { text: " font de vous un collaborateur ou un manager d'une valeur inestimable. Les équipes les plus performantes ont toujours besoin d'un profil S pour tenir dans la durée." },
      ],
      [
        { text: "Dans votre travail quotidien, vous excellez dans " },
        { text: "la construction de relations profondes et durables", tag: 'S' },
        { text: ". Vous êtes celui ou celle " },
        { text: "sur qui on peut compter, qui tient ses engagements", tag: 'S' },
        { text: " et qui prend le temps de vraiment comprendre ses collègues. " },
        { text: "Cette empathie naturelle", tag: 'S' },
        { text: " vous rend précieux dans des contextes de " },
        { text: "médiation, de formation ou d'accompagnement", tag: 'I' },
        { text: "." },
      ],
      [
        { text: "Votre principale zone de développement est " },
        { text: "l'assertivité : exprimer vos idées et désaccords avec confiance", tag: 'D' },
        { text: ". Apprendre à " },
        { text: "défendre vos positions sans attendre qu'on vous le demande", tag: 'D' },
        { text: " est un levier puissant. " },
        { text: "Développer votre tolérance au changement et à l'incertitude", tag: 'C' },
        { text: " vous permettra de saisir des opportunités que vous auriez autrement laissées passer par excès de prudence." },
      ],
    ],
    strengths: ['Fiabilité exceptionnelle', 'Écoute profonde', 'Travail en équipe', 'Persévérance', 'Intelligence émotionnelle'],
    growth: ['Assertivité', 'Gestion du changement', 'Prise de décision rapide', 'Expression des désaccords'],
    famous: ['Mère Teresa', 'Gandhi', 'Jimmy Carter', 'Nelson Mandela'],
  },
  C: {
    name: 'Consciencieux', letter: 'C', tagline: "L'Analyste",
    paragraphs: [
      [
        { text: "Vous êtes un profil Consciencieux — " },
        { text: "l'architecte de la précision dans tout ce que vous entreprendrez", tag: 'C' },
        { text: ". " },
        { text: "Votre cerveau est naturellement câblé pour détecter les incohérences, anticiper les problèmes", tag: 'C' },
        { text: " et " },
        { text: "produire un travail d'une qualité irréprochable", tag: 'C' },
        { text: ". Dans un monde où l'approximation est devenue la norme, vous êtes une exception précieuse." },
      ],
      [
        { text: "Dans votre environnement professionnel, vous excellez dans les domaines qui exigent " },
        { text: "rigueur et expertise approfondie", tag: 'C' },
        { text: ". Vous prenez le temps de " },
        { text: "vraiment comprendre avant d'agir", tag: 'C' },
        { text: ", ce qui vous permet d'éviter des erreurs coûteuses que d'autres commettent par précipitation. " },
        { text: "Votre analyse approfondie est un atout stratégique", tag: 'C' },
        { text: " — surtout dans des contextes à forts enjeux." },
      ],
      [
        { text: "Votre défi principal est de trouver le bon équilibre entre " },
        { text: "la quête de perfection et l'action imparfaite", tag: 'D' },
        { text: ". Apprendre à " },
        { text: "communiquer vos analyses de manière accessible et engageante", tag: 'I' },
        { text: " aux profils moins analytiques, et à " },
        { text: "décider avec des informations incomplètes", tag: 'D' },
        { text: " en vous appuyant sur " },
        { text: "la confiance relationnelle de votre équipe", tag: 'S' },
        { text: ", vous permettra d'exercer une influence bien plus large que votre seul domaine d'expertise." },
      ],
    ],
    strengths: ['Précision et exactitude', 'Analyse systémique', 'Qualité du travail', 'Expertise technique', 'Pensée critique'],
    growth: ["Flexibilité face à l'incertitude", 'Délégation', 'Communication vulgarisée', "Tolérance à l'imperfection"],
    famous: ['Bill Gates', 'Albert Einstein', 'Marie Curie', 'Warren Buffett'],
  },
}

const blendTexts: Partial<Record<string, string>> = {
  'D-I': "Votre dynamisme décisionnel se teinte d'un vrai sens du collectif — vous savez autant décider que fédérer.",
  'D-S': "Votre force motrice est tempérée par une conscience des équipes — vous visez l'impact sans sacrifier la cohésion.",
  'D-C': "Votre orientation résultats s'appuie sur un sens de la rigueur — vous décidez vite, mais sur des bases solides.",
  'I-D': "Votre énergie relationnelle porte une vraie détermination — vous inspirez, et vous passez à l'action.",
  'I-S': "Votre enthousiasme naturel est ancré dans une vraie stabilité — vous motivez tout en créant un environnement sécurisant.",
  'I-C': "Votre créativité communicante coexiste avec un sens du détail — vous avez le flair ET la rigueur.",
  'S-D': "Votre fiabilité naturelle s'accompagne d'une vraie force décisionnelle — vous construisez dans la durée avec des objectifs clairs.",
  'S-I': "Votre soutien chaleureux se double d'un vrai enthousiasme — vous créez des liens profonds ET vous motivez.",
  'S-C': "Votre constance et votre rigueur font de vous un collaborateur fiable et précis — la combinaison idéale pour les projets exigeants.",
  'C-D': "Votre précision analytique est activée par un sens de l'urgence — vous analysez vite et décidez sur des bases solides.",
  'C-I': "Votre rigueur est portée par une vraie connexion humaine — vous savez rendre le complexe accessible et engageant.",
  'C-S': "Votre expertise est ancrée dans une vraie loyauté — vous livrez un travail de qualité tout en prenant soin des relations.",
}

function shuffleOptions(options: { label: string; profile: ProfileKey }[]) {
  return [...options].sort(() => Math.random() - 0.5)
}

function renderSegments(
  segments: TextSegment[],
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

export default function DiscTest() {
  const [step, setStep] = useState<'intro' | 'test' | 'open' | 'results'>('intro')
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState<Record<number, ProfileKey>>({})
  const [shuffled] = useState(() => questions.map(q => ({ ...q, options: shuffleOptions(q.options) })))
  const [selected, setSelected] = useState<ProfileKey | null>(null)
  const [hovered, setHovered] = useState<ProfileKey | null>(null)
  const [openAnswer, setOpenAnswer] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => { const t = setTimeout(() => setMounted(true), 60); return () => clearTimeout(t) }, [])

  const handleAnswer = (profile: ProfileKey) => {
    if (selected) return
    setSelected(profile)
    setTimeout(() => {
      setAnswers(prev => ({ ...prev, [questions[current].id]: profile }))
      if (current < questions.length - 1) {
        setCurrent(c => c + 1)
        setSelected(null)
        setHovered(null)
      } else {
        setStep('open')
      }
    }, 380)
  }

  const scores: Record<ProfileKey, number> = { D: 0, I: 0, S: 0, C: 0 }
  Object.values(answers).forEach(p => { scores[p]++ })
  const total = Object.values(scores).reduce((a, b) => a + b, 0) || 1
  const dominant = (Object.keys(scores) as ProfileKey[]).reduce((a, b) => scores[a] >= scores[b] ? a : b)
  const sortedProfiles = (Object.keys(scores) as ProfileKey[]).sort((a, b) => scores[b] - scores[a])
  const secondary = sortedProfiles[1]

  const restart = () => {
    setStep('intro')
    setCurrent(0)
    setAnswers({})
    setSelected(null)
    setHovered(null)
    setOpenAnswer('')
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
  `

  // ─── INTRO ───────────────────────────────────────────────────────────────
  if (step === 'intro') {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <style>{ANIM_CSS}</style>
        <nav className="px-6 py-5 flex items-center justify-between border-b border-gray-100">
          <Link href="/" className="text-gray-400 hover:text-gray-700 text-sm flex items-center gap-2 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Retour au site
          </Link>
          <span className="text-xs text-gray-400 font-medium">Test DISC · Gratuit & Confidentiel</span>
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
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 leading-tight" style={{ animation: 'fadeUp 0.5s ease 380ms both' }}>
              Quel est votre profil{' '}
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(90deg, #DC2626 0%, #D97706 33%, #16A34A 66%, #2563EB 100%)' }}
              >
                DISC
              </span>
              &nbsp;?
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed mb-10 max-w-xl mx-auto" style={{ animation: 'fadeUp 0.5s ease 480ms both' }}>
              20 questions pour découvrir votre style comportemental dominant et mieux comprendre comment vous interagissez avec les autres au travail.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-10" style={{ animation: 'fadeUp 0.5s ease 560ms both' }}>
              {[
                { icon: '⏱', text: '8 minutes environ' },
                { icon: '🔒', text: 'Aucune donnée collectée' },
                { icon: '✓', text: 'Gratuit, sans inscription' },
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-600">
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
            <p className="text-xs text-gray-400 mt-6 leading-relaxed">
              Basé sur le modèle DISC de William Moulton Marston · Fourni à titre indicatif
            </p>
          </div>
        </div>
      </div>
    )
  }

  // ─── TEST ────────────────────────────────────────────────────────────────
  if (step === 'test') {
    const q = shuffled[current]
    const progressPct = ((current + 1) / questions.length) * 100
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <style>{ANIM_CSS}</style>
        <nav className="bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-gray-400 hover:text-gray-700 text-sm flex items-center gap-2 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Accueil
          </Link>
          <span className="text-sm font-bold text-gray-800">
            {current + 1}
            <span className="text-gray-400 font-normal"> / {questions.length}</span>
          </span>
        </nav>
        <div className="bg-white px-6 pt-3 pb-5 border-b border-gray-50">
          <div className="max-w-2xl mx-auto">
            <div className="relative h-3 bg-gray-100 rounded-full overflow-hidden mb-3">
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
              {questions.map((_, i) => (
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
            <div key={current} className="bg-white rounded-2xl p-7 md:p-9 shadow-sm border border-gray-100" style={{ animation: 'slideIn 0.28s ease both' }}>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                Question {current + 1} sur {questions.length}
              </p>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 leading-snug">
                {q.text}
              </h2>
            </div>
            <div className="space-y-3">
              {q.options.map((opt, idx) => {
                const color = DISC_COLORS[opt.profile]
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
                      backgroundColor: active ? color.bg : 'white',
                      borderColor: active ? color.main : '#E5E7EB',
                      boxShadow: active ? `0 4px 24px ${color.main}22` : 'none',
                      transform: isSelected ? 'scale(1.01)' : 'scale(1)',
                      animation: `fadeUp 0.22s ease ${idx * 60}ms both`,
                    }}
                  >
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 transition-all duration-200"
                      style={{ backgroundColor: active ? color.main : '#F3F4F6', color: active ? 'white' : '#9CA3AF' }}
                    >
                      {String.fromCharCode(65 + idx)}
                    </div>
                    <span
                      className="text-sm md:text-base font-medium leading-relaxed transition-colors duration-200"
                      style={{ color: active ? color.dark : '#374151' }}
                    >
                      {opt.label}
                    </span>
                    {isSelected && (
                      <div className="ml-auto flex-shrink-0">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: color.main }}>
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

  // ─── QUESTION OUVERTE ────────────────────────────────────────────────────
  if (step === 'open') {
    const color = DISC_COLORS[dominant]
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <style>{ANIM_CSS}</style>
        <nav className="bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-gray-400 hover:text-gray-700 text-sm flex items-center gap-2 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Accueil
          </Link>
          <span className="text-xs font-medium text-gray-400">Presque terminé ✓</span>
        </nav>
        <div className="flex-1 flex items-center justify-center px-6 py-12">
          <div className="max-w-2xl w-full space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-black text-white flex-shrink-0"
                  style={{ backgroundColor: color.main }}
                >
                  ?
                </div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                  Question ouverte · Facultative
                </p>
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 leading-snug mb-2">
                Quel est le plus grand défi de management ou de collaboration que vous traversez en ce moment ?
              </h2>
              <p className="text-sm text-gray-400 mb-6 flex items-center gap-1.5">
                <span>🔒</span>
                <span>Non conservé · utilisé uniquement pour contextualiser votre résultat dans cette page</span>
              </p>
              <textarea
                value={openAnswer}
                onChange={(e) => setOpenAnswer(e.target.value)}
                placeholder="Ex : je manage une équipe en pleine croissance, nous traversons une restructuration, j'ai du mal à déléguer…"
                className="w-full border-2 border-gray-200 rounded-xl p-4 text-sm text-gray-700 resize-none focus:outline-none transition-colors leading-relaxed"
                style={{ minHeight: 110 }}
                onFocus={(e) => e.target.style.borderColor = color.main}
                onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
              />
            </div>
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setStep('results')}
                className="text-sm text-gray-400 hover:text-gray-600 px-5 py-3 rounded-xl border border-gray-200 hover:border-gray-300 transition-all"
              >
                Passer cette étape
              </button>
              <button
                onClick={() => setStep('results')}
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

  // ─── RÉSULTATS ───────────────────────────────────────────────────────────
  const profile = profiles[dominant]
  const color = DISC_COLORS[dominant]
  const blendKey = `${dominant}-${secondary}`
  const blendSentence = blendTexts[blendKey]
  const secondaryPct = Math.round((scores[secondary] / total) * 100)

  return (
    <div className="min-h-screen bg-gray-50">
      <style>{ANIM_CSS}</style>
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
          <button
            onClick={restart}
            className="text-xs text-white/60 hover:text-white/90 transition-colors border border-white/25 rounded-full px-4 py-1.5"
          >
            Recommencer
          </button>
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
          </h1>
          {blendSentence && (
            <p className="text-white/80 text-sm max-w-md mx-auto leading-relaxed mt-2 mb-2 italic" style={{ animation: 'fadeUp 0.45s ease 460ms both' }}>
              {blendSentence}
            </p>
          )}
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 -mt-6 pb-16 space-y-6">
        {/* Score distribution */}
        <div className="bg-white rounded-2xl p-7 shadow-xl border border-gray-100" style={{ animation: 'fadeUp 0.5s ease 200ms both' }}>
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-6">Répartition de vos scores</h2>
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
                        <span className="text-sm font-bold text-gray-900">{p.name}</span>
                        <span className="text-xs text-gray-400 ml-2">· {p.tagline}</span>
                      </div>
                    </div>
                    <span className="text-xl font-black tabular-nums" style={{ color: c.main }}>{pct}%</span>
                  </div>
                  <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full rounded-full transition-all duration-700" style={{ width: mounted ? `${pct}%` : '0%', backgroundColor: c.main }} />
                  </div>
                </div>
              )
            })}
          </div>
          {/* Blend note */}
          {secondaryPct >= 15 && (
            <div
              className="mt-6 rounded-xl p-4 text-sm leading-relaxed"
              style={{ backgroundColor: DISC_COLORS[secondary].bg, border: `1px solid ${DISC_COLORS[secondary].main}33` }}
            >
              <span className="font-bold" style={{ color: DISC_COLORS[secondary].main }}>
                Dimension secondaire notable ({secondary} · {secondaryPct}%) :
              </span>
              <span className="text-gray-600 ml-1">
                {blendSentence || `Votre profil ${secondary} vient nuancer et enrichir votre dominante ${dominant}.`}
              </span>
            </div>
          )}
        </div>

        {/* Contexte ouvert */}
        {openAnswer.trim() && (
          <div className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100" style={{ animation: 'fadeUp 0.5s ease 320ms both' }}>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
              <span>💬</span> Votre contexte
            </p>
            <p className="text-gray-700 text-sm leading-relaxed italic">"{openAnswer.trim()}"</p>
            <p className="text-xs text-gray-400 mt-4 flex items-center gap-1">
              <span>🔒</span>
              <span>Cette réponse n'est pas conservée — elle disparaîtra à la fermeture de cette page.</span>
            </p>
          </div>
        )}

        {/* Description détaillée avec surlignage */}
        <div className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100" style={{ animation: 'fadeUp 0.5s ease 380ms both' }}>
          <h2 className="text-sm font-bold text-gray-900 flex items-center gap-2 mb-5">
            <span
              className="w-6 h-6 rounded-lg flex items-center justify-center text-xs font-black text-white"
              style={{ backgroundColor: color.main }}
            >
              {profile.letter}
            </span>
            Votre profil en détail
          </h2>
          <div className="space-y-1 mb-4">
            <div className="flex flex-wrap gap-2 text-xs text-gray-400">
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
              <p key={i} className="text-gray-600 leading-relaxed text-[15px]">
                {renderSegments(para, scores, total)}
              </p>
            ))}
          </div>
        </div>

        {/* Forces & Développement */}
        <div className="grid sm:grid-cols-2 gap-5" style={{ animation: 'fadeUp 0.5s ease 460ms both' }}>
          <div className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] text-white font-bold" style={{ backgroundColor: color.main }}>✓</span>
              Vos forces
            </h3>
            <ul className="space-y-3">
              {profile.strengths.map(s => (
                <li key={s} className="flex items-start gap-3 text-sm text-gray-700">
                  <span className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: color.main }} />
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-[10px] text-gray-600 font-bold">↑</span>
              Axes de développement
            </h3>
            <ul className="space-y-3">
              {profile.growth.map(g => (
                <li key={g} className="flex items-start gap-3 text-sm text-gray-700">
                  <span className="w-2 h-2 rounded-full mt-1.5 bg-gray-300 flex-shrink-0" />
                  {g}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Profils célèbres */}
        <div className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100" style={{ animation: 'fadeUp 0.5s ease 540ms both' }}>
          <p className="text-xs text-gray-400 uppercase tracking-wider font-bold mb-4">Profils similaires célèbres</p>
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

        {/* CTA */}
        <div
          className="rounded-2xl p-8 text-center space-y-4"
          style={{ background: `linear-gradient(135deg, ${color.main}12, ${color.dark}08)`, border: `1px solid ${color.main}22`, animation: 'fadeUp 0.5s ease 620ms both' }}
        >
          <p className="text-gray-900 text-lg font-bold">Envie d'approfondir votre profil DISC ?</p>
          <p className="text-gray-500 text-sm max-w-md mx-auto leading-relaxed">
            Je propose des séances individuelles et des ateliers d'équipe basés sur le modèle DISC pour développer la connaissance de soi et améliorer la dynamique collective.
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-2">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 text-white font-bold px-7 py-3 rounded-xl transition-all hover:-translate-y-0.5"
              style={{ backgroundColor: color.main, boxShadow: `0 4px 20px ${color.main}45` }}
            >
              Discuter de votre profil {profile.name}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <button
              onClick={restart}
              className="inline-flex items-center gap-2 font-semibold px-7 py-3 rounded-xl border-2 transition-all hover:-translate-y-0.5"
              style={{ borderColor: color.main, color: color.main }}
            >
              Recommencer le test
            </button>
          </div>
        </div>

        <p className="text-center text-xs text-gray-400 leading-relaxed">
          Ce test est basé sur le modèle DISC de William Moulton Marston.<br />
          Il est fourni à titre indicatif et ne remplace pas un bilan professionnel certifié.
        </p>
      </div>
    </div>
  )
}
