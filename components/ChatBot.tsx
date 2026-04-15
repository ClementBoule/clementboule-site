'use client'
import { useState, useEffect, useRef, Fragment } from 'react'

/* ── Avatar — coupe courte professionnelle, dégradé côtés ──────────────── */
function LofiAvatar({ size = 64 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40" cy="40" r="40" fill="#EEF5FF"/>
      {/* Pantalon marine */}
      <path d="M22 75 L58 75 L55 62 L25 62Z" fill="#1E3A5F"/>
      {/* Ceinture */}
      <rect x="22" y="60" width="36" height="4" rx="2" fill="#152D4A"/>
      {/* Chemise */}
      <path d="M18 75 Q18 56 40 52 Q62 56 62 75" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="0.8"/>
      <path d="M36 52 L40 59 L44 52" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="0.8"/>
      <circle cx="40" cy="63" r="1" fill="#CBD5E1"/>
      <circle cx="40" cy="68" r="1" fill="#CBD5E1"/>
      {/* Cou */}
      <rect x="36" y="43" width="8" height="11" rx="4" fill="#F5C07A"/>
      {/* Tête */}
      <ellipse cx="40" cy="34" rx="14.5" ry="15" fill="#F5C07A"/>
      {/* Oreilles */}
      <ellipse cx="26" cy="34" rx="3" ry="4" fill="#F5C07A"/>
      <ellipse cx="54" cy="34" rx="3" ry="4" fill="#F5C07A"/>

      {/* ── Cheveux pro : undercut / coupe nette côtés, volume sur le dessus ── */}
      {/* Masse principale — dessus arrondi, raie à gauche */}
      <path d="M27 24 Q27 13 40 12.5 Q53 13 53 24 Q51 17 40 16 Q31 17 29 22Z" fill="#6B3F1A"/>
      {/* Volume côté gauche — effilé court */}
      <path d="M27 24 Q26 20 27 17 Q28 13 33 13 L31 22Z" fill="#6B3F1A"/>
      {/* Volume côté droit — effilé court symétrique */}
      <path d="M53 24 Q54 20 53 17 Q52 13 47 13 L49 22Z" fill="#6B3F1A"/>
      {/* Raie côté gauche — reflet clair */}
      <path d="M29 15 Q33 13 38 14.5 Q33 14 30 17Z" fill="#8B5E30" opacity="0.6"/>
      {/* Dégradé / undercut côtés — zone peau visible */}
      <path d="M26.5 26 Q26 22 27 19 Q27.5 22 28.5 25Z" fill="#F5C07A" opacity="0.5"/>
      <path d="M53.5 26 Q54 22 53 19 Q52.5 22 51.5 25Z" fill="#F5C07A" opacity="0.5"/>
      {/* Légère ombre pour volume 3D */}
      <path d="M38 13 Q40 12.5 42 13 Q41 12.8 40 12.8 Q39 12.8 38 13Z" fill="#4A2A0E" opacity="0.3"/>

      {/* Barbe courte 3 jours */}
      <path d="M30 41 Q32 47.5 40 48.5 Q48 47.5 50 41 Q47 44.5 40 45.5 Q33 44.5 30 41Z" fill="#D4935A" opacity="0.55"/>
      <path d="M33 44 Q36 47 40 47.5 Q44 47 47 44" stroke="#C47A2E" strokeWidth="0.5" opacity="0.4" fill="none"/>
      {/* Moustache */}
      <path d="M35.5 39.5 Q38 41 40 40.5 Q42 41 44.5 39.5 Q42 40.5 40 40 Q38 40.5 35.5 39.5Z" fill="#C47A2E" opacity="0.5"/>
      {/* Yeux */}
      <ellipse cx="34" cy="33.5" rx="2.8" ry="2.8" fill="#2C1810"/>
      <ellipse cx="46" cy="33.5" rx="2.8" ry="2.8" fill="#2C1810"/>
      <circle cx="33.2" cy="32.5" r="0.9" fill="white"/>
      <circle cx="45.2" cy="32.5" r="0.9" fill="white"/>
      {/* Sourcils */}
      <path d="M30.5 29.5 Q34 27.8 37.5 29" stroke="#5C3010" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
      <path d="M42.5 29 Q46 27.8 49.5 29.5" stroke="#5C3010" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
      {/* Sourire */}
      <path d="M35.5 39 Q40 43 44.5 39" stroke="#2C1810" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
      {/* Nez */}
      <path d="M39 36.5 Q37.5 38.5 39 39 Q41 39 42.5 38.5 Q41 38.5 40 36.5Z" fill="#E8A060" opacity="0.6"/>
    </svg>
  )
}

/* ── Types ─────────────────────────────────────────────────────────────────── */
type Message = { from: 'bot' | 'user'; text: string }
type Choice  = { label: string; next: string; icon?: string }
type Step    = {
  message: string
  choices?: Choice[]
  action?: 'contact' | 'disc' | 'restart'
  /* Données pour pré-remplissage formulaire de contact */
  contactSubject?: string
  contactMessage?: string
  /* Lien vers formation correspondante */
  formationAnchor?: string
}

/* ── Arbre de conversation ─────────────────────────────────────────────────── */
const TREE: Record<string, Step> = {
  start: {
    message: "Bonjour 👋 Je suis Clément ! Comment puis-je vous aider aujourd'hui ?",
    choices: [
      { icon: '🏢', label: 'Je représente une entreprise',  next: 'entreprise' },
      { icon: '🏛️', label: 'Association / Collectivité',    next: 'asso' },
      { icon: '🎓', label: 'École / Université',            next: 'ecole' },
      { icon: '👔', label: 'Je suis manager',               next: 'manager' },
      { icon: '📚', label: 'Je suis étudiant(e)',           next: 'etudiant' },
    ],
  },

  /* Entreprise */
  entreprise: {
    message: "Super ! Je travaille régulièrement avec des équipes RH et des dirigeants. Quel est votre enjeu principal ?",
    choices: [
      { icon: '🚀', label: 'Développer mes managers',   next: 'ent_managers' },
      { icon: '⚠️', label: 'Prévenir les RPS',          next: 'ent_rps' },
      { icon: '💡', label: 'Renforcer la culture',       next: 'ent_culture' },
      { icon: '🌍', label: 'Contexte bilingue FR/EN',   next: 'ent_bilingual' },
    ],
  },
  ent_managers: {
    message: "Je propose des formations sur mesure en leadership, soft skills et communication managériale — en FR ou EN, de 1 à 3 jours, adaptées à vos équipes.",
    choices: [
      { icon: '💬', label: "Discutons-en",        next: 'cta_ent_managers' },
      { icon: '📋', label: "Voir les formations", next: 'cta_formations' },
    ],
  },
  cta_ent_managers: {
    message: "Super ! Je vous prépare un message pré-rempli. Cliquez ci-dessous pour me contacter directement 👇",
    action: 'contact',
    contactSubject: "Formation Leadership & Management",
    contactMessage: "Bonjour Clément,\n\nJe représente une entreprise et je souhaite développer mes managers grâce à vos formations sur le leadership et les soft skills.\n\nPouvez-vous me contacter pour discuter d'un programme sur mesure ?\n\nCordialement,",
    formationAnchor: '#formations',
  },
  ent_rps: {
    message: "La prévention des risques psychosociaux passe par le diagnostic, la formation et le suivi. J'accompagne les équipes RH dans cette démarche.",
    choices: [{ icon: '💬', label: "Prenons RDV", next: 'cta_ent_rps' }],
  },
  cta_ent_rps: {
    message: "Je vous prépare un message axé RPS. Cliquez ci-dessous 👇",
    action: 'contact',
    contactSubject: "Prévention des Risques Psychosociaux (RPS)",
    contactMessage: "Bonjour Clément,\n\nNous souhaitons mettre en place un programme de prévention des RPS au sein de notre organisation.\n\nPouvez-vous nous proposer un accompagnement sur mesure ?\n\nCordialement,",
    formationAnchor: '#formations',
  },
  ent_culture: {
    message: "Marque employeur, onboarding, valeurs... J'aide à aligner ce que vous dites en externe avec ce que vivent vos collaborateurs au quotidien.",
    choices: [{ icon: '💬', label: "En savoir plus", next: 'cta_ent_culture' }],
  },
  cta_ent_culture: {
    message: "Je vous prépare un message sur la culture d'entreprise 👇",
    action: 'contact',
    contactSubject: "Marque Employeur & Culture d'Entreprise",
    contactMessage: "Bonjour Clément,\n\nNous souhaitons renforcer notre culture d'entreprise et travailler sur notre marque employeur.\n\nPouvez-vous nous présenter votre approche ?\n\nCordialement,",
    formationAnchor: '#formations',
  },
  ent_bilingual: {
    message: "Toutes mes formations sont disponibles en français ET en anglais. J'interviens dans des équipes internationales depuis plusieurs années.",
    choices: [{ icon: '💬', label: "Parfait, contactez-moi", next: 'cta_ent_bilingual' }],
  },
  cta_ent_bilingual: {
    message: "Message pré-rempli pour un contexte bilingue 👇",
    action: 'contact',
    contactSubject: "Formation Bilingue FR/EN",
    contactMessage: "Bonjour Clément,\n\nNotre équipe travaille dans un contexte international et nous cherchons des formations en français et en anglais.\n\nPouvez-vous nous proposer un programme adapté ?\n\nCordialement,",
    formationAnchor: '#formations',
  },

  /* Association */
  asso: {
    message: "Je travaille régulièrement avec le secteur associatif et public. Qu'est-ce qui vous amène ?",
    choices: [
      { icon: '🤝', label: 'Former des bénévoles',     next: 'asso_benevoles' },
      { icon: '📊', label: 'Accompagnement RH',        next: 'asso_rh' },
      { icon: '🗣️', label: 'Communication & posture', next: 'asso_comm' },
    ],
  },
  asso_benevoles: {
    message: "Je propose des modules adaptés aux bénévoles : posture professionnelle, communication non-violente, gestion de conflits.",
    choices: [{ icon: '💬', label: "Parlons-en", next: 'cta_asso_benevoles' }],
  },
  cta_asso_benevoles: {
    message: "Message pré-rempli pour la formation de bénévoles 👇",
    action: 'contact',
    contactSubject: "Formation Bénévoles — Posture & Communication",
    contactMessage: "Bonjour Clément,\n\nNous représentons une association et souhaitons former nos bénévoles en posture professionnelle et communication.\n\nPouvez-vous nous proposer un programme adapté ?\n\nCordialement,",
    formationAnchor: '#formations',
  },
  asso_rh: {
    message: "Je peux vous aider à structurer vos pratiques RH, prévenir les RPS et accompagner vos équipes dans les transitions.",
    choices: [{ icon: '💬', label: "Prenons RDV", next: 'cta_ent_rps' }],
  },
  asso_comm: {
    message: "Prendre la parole, convaincre, gérer les tensions... Des compétences clés pour les équipes associatives.",
    choices: [{ icon: '💬', label: "Contactez-moi", next: 'cta_asso_comm' }],
  },
  cta_asso_comm: {
    message: "Message pré-rempli sur communication & posture 👇",
    action: 'contact',
    contactSubject: "Formation Communication & Posture — Secteur Associatif",
    contactMessage: "Bonjour Clément,\n\nNous travaillons dans le secteur associatif et souhaitons renforcer les compétences en communication et prise de parole de nos équipes.\n\nPouvez-vous nous proposer un accompagnement ?\n\nCordialement,",
    formationAnchor: '#formations',
  },

  /* École */
  ecole: {
    message: "J'interviens dans de nombreuses écoles parisiennes (Albert School, ISCOM, IHEDREA...). Quel type d'intervention vous intéresse ?",
    choices: [
      { icon: '📝', label: 'Cours leadership / soft skills', next: 'ecole_cours' },
      { icon: '🧠', label: 'Coaching étudiant',             next: 'ecole_coaching' },
      { icon: '🤝', label: 'Partenariat école',             next: 'cta_ecole_partenariat' },
    ],
  },
  ecole_cours: {
    message: "Je donne des cours de leadership, développement personnel et soft skills — en français ou en anglais. Formats : amphi, atelier, module.",
    choices: [{ icon: '💬', label: "Discutons d'un programme", next: 'cta_ecole_cours' }],
  },
  cta_ecole_cours: {
    message: "Message pré-rempli pour un partenariat école 👇",
    action: 'contact',
    contactSubject: "Intervention École — Soft Skills & Leadership",
    contactMessage: "Bonjour Clément,\n\nNous représentons une école et souhaitons vous intégrer dans notre programme pédagogique pour des cours de leadership et soft skills.\n\nPouvez-vous nous présenter vos modalités d'intervention ?\n\nCordialement,",
    formationAnchor: '#formations',
  },
  ecole_coaching: {
    message: "Je propose du coaching individuel : clarifier son projet, préparer ses entretiens, gérer le stress avant les partiels ou les stages.",
    choices: [
      { icon: '💬', label: "Me contacter",        next: 'cta_ecole_coaching' },
      { icon: '🎯', label: "Passer le test DISC", next: 'cta_disc' },
    ],
  },
  cta_ecole_coaching: {
    message: "Message pré-rempli pour du coaching étudiant 👇",
    action: 'contact',
    contactSubject: "Coaching Individuel Étudiant",
    contactMessage: "Bonjour Clément,\n\nJe suis étudiant(e) et je souhaiterais bénéficier d'un coaching individuel pour clarifier mon projet professionnel et préparer mes entretiens.\n\nPouvez-vous me contacter pour discuter des modalités ?\n\nCordialement,",
  },
  cta_ecole_partenariat: {
    message: "Message pré-rempli pour un partenariat institutionnel 👇",
    action: 'contact',
    contactSubject: "Partenariat École / Université",
    contactMessage: "Bonjour Clément,\n\nNous souhaitons établir un partenariat avec vous pour des interventions régulières dans notre établissement.\n\nPouvez-vous nous présenter votre offre ?\n\nCordialement,",
    formationAnchor: '#formations',
  },

  /* Manager */
  manager: {
    message: "Bienvenue ! Je coache et forme des managers depuis plus de 10 ans. Qu'est-ce que vous cherchez ?",
    choices: [
      { icon: '💪', label: 'Développer mon leadership', next: 'mgr_leadership' },
      { icon: '🔄', label: 'Gérer le changement',       next: 'mgr_change' },
      { icon: '🧭', label: 'Mieux communiquer',         next: 'mgr_comm' },
    ],
  },
  mgr_leadership: {
    message: "Coaching individuel ou formation : trouver votre style de management, motiver votre équipe, communiquer avec impact.",
    choices: [
      { icon: '💬', label: "Prendre RDV",                  next: 'cta_mgr_leadership' },
      { icon: '🎯', label: "Découvrir mon profil DISC",    next: 'cta_disc' },
    ],
  },
  cta_mgr_leadership: {
    message: "Message pré-rempli sur le développement managérial 👇",
    action: 'contact',
    contactSubject: "Coaching Leadership Managérial — Spine'Up",
    contactMessage: "Bonjour Clément,\n\nJe suis manager et souhaite développer mon leadership et ma posture managériale.\n\nJe suis intéressé(e) par votre programme Spine'Up ou un coaching individuel. Pouvez-vous me contacter ?\n\nCordialement,",
    formationAnchor: '#formations',
  },
  mgr_change: {
    message: "J'accompagne les transformations : restructurations, fusion d'équipes, nouveaux outils. La méthode Agile au service du changement humain.",
    choices: [{ icon: '💬', label: "En savoir plus", next: 'cta_mgr_change' }],
  },
  cta_mgr_change: {
    message: "Message pré-rempli sur la gestion du changement 👇",
    action: 'contact',
    contactSubject: "Accompagnement au Changement — Management",
    contactMessage: "Bonjour Clément,\n\nNotre organisation traverse une période de transformation et je cherche un accompagnement pour gérer le changement avec mes équipes.\n\nPouvez-vous me présenter votre approche ?\n\nCordialement,",
    formationAnchor: '#formations',
  },
  mgr_comm: {
    message: "Communication assertive, feedback constructif, gestion des conflits... Des outils concrets pour gagner en impact au quotidien.",
    choices: [{ icon: '💬', label: "Parlons-en", next: 'cta_mgr_comm' }],
  },
  cta_mgr_comm: {
    message: "Message pré-rempli sur la communication managériale 👇",
    action: 'contact',
    contactSubject: "Formation Communication Managériale",
    contactMessage: "Bonjour Clément,\n\nJe souhaite améliorer ma communication managériale : assertivité, feedback, gestion des conflits.\n\nPouvez-vous me proposer un accompagnement adapté ?\n\nCordialement,",
    formationAnchor: '#formations',
  },

  /* Étudiant */
  etudiant: {
    message: "Bonjour ! Tu prépares ton avenir ? Je peux t'aider à mieux te connaître et à te positionner.",
    choices: [
      { icon: '🧭', label: "Coaching orientation",   next: 'etu_coaching' },
      { icon: '🎯', label: "Passer le test DISC",    next: 'cta_disc' },
      { icon: '📋', label: "Formations disponibles", next: 'cta_formations' },
    ],
  },
  etu_coaching: {
    message: "Je t'aide à clarifier ton projet pro, préparer tes entretiens et gagner en confiance. Séances en ligne ou en présentiel.",
    choices: [{ icon: '💬', label: "Me contacter", next: 'cta_ecole_coaching' }],
  },

  /* CTAs génériques */
  cta_disc: {
    message: "Le test DISC prend environ 10 minutes et vous donne un vrai aperçu de votre profil comportemental. Prêt(e) ?",
    action: 'disc',
  },
  cta_formations: {
    message: "Retrouvez tous mes programmes dans la section Formations de ce site 👇",
    action: 'contact',
    contactSubject: "Demande d'information — Formations",
    contactMessage: "Bonjour Clément,\n\nJe souhaite en savoir plus sur vos programmes de formation.\n\nPouvez-vous me contacter pour discuter de mes besoins ?\n\nCordialement,",
    formationAnchor: '#formations',
  },
}

/* ── Helpers ───────────────────────────────────────────────────────────────── */
function buildContactURL(step: Step): string {
  const params = new URLSearchParams()
  if (step.contactSubject) params.set('subject', step.contactSubject)
  if (step.contactMessage) params.set('message', step.contactMessage)
  return `/#contact?${params.toString()}`
}

/* ── Main component ─────────────────────────────────────────────────────────── */
export default function ChatBot() {
  const [open, setOpen]               = useState(false)
  const [step, setStep]               = useState('start')
  const [messages, setMessages]       = useState([] as Message[])
  const [showChoices, setShowChoices] = useState(false)
  const [typing, setTyping]           = useState(false)
  const [mounted, setMounted]         = useState(false)
  const [pulse, setPulse]             = useState(true)
  const messagesEndRef                = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
    const t = setTimeout(() => setPulse(false), 8000)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (open && messages.length === 0) triggerStep('start')
  }, [open])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, typing])

  function triggerStep(key: string) {
    const s = TREE[key]
    if (!s) return
    setStep(key)
    setShowChoices(false)
    setTyping(true)
    setTimeout(() => {
      setTyping(false)
      setMessages(prev => [...prev, { from: 'bot', text: s.message }])
      setTimeout(() => setShowChoices(true), 120)
    }, 900)
  }

  function handleChoice(choice: Choice) {
    setMessages(prev => [...prev, { from: 'user', text: (choice.icon ? choice.icon + ' ' : '') + choice.label }])
    setShowChoices(false)
    setTimeout(() => triggerStep(choice.next), 350)
  }

  function handleAction(action: 'contact' | 'disc' | 'restart') {
    const currentStepData = TREE[step]
    if (action === 'contact') {
      setOpen(false)
      // Navigate with pre-filled params
      const url = currentStepData ? buildContactURL(currentStepData) : '/#contact'
      window.location.href = url
    } else if (action === 'disc') {
      window.location.href = '/test-disc'
    } else {
      restart()
    }
  }

  function restart() {
    setMessages([])
    setStep('start')
    setShowChoices(false)
    setTyping(false)
    setTimeout(() => triggerStep('start'), 80)
  }

  if (!mounted) return null
  const currentStep = TREE[step]

  return (
    <Fragment>
      {/* ── Floating button ── */}
      <div className="fixed bottom-6 right-6 z-50">
        {pulse && (
          <span className="absolute inset-0 rounded-full" style={{
            animation: 'cb-pulse-ring 1.8s ease-out infinite',
            background: 'rgba(61,109,184,0.4)',
          }}/>
        )}
        <button
          onClick={() => { setPulse(false); setOpen(o => !o) }}
          className="relative w-16 h-16 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110"
          style={{
            background: open ? 'linear-gradient(135deg,#1A2B4A,#0F1A30)' : 'linear-gradient(135deg,#3D6DB8,#6B9ED4)',
            boxShadow: open ? '0 4px 24px rgba(26,43,74,0.5)' : '0 4px 28px rgba(61,109,184,0.55)',
          }}
          aria-label={open ? 'Fermer le chat' : 'Discuter avec Clément'}
        >
          {open ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 4L16 16M16 4L4 16" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          ) : (
            <LofiAvatar size={50} />
          )}
        </button>
      </div>

      {/* ── Chat window — 480px large, 620px max-height ── */}
      {open && (
        <div
          className="cb-window fixed bottom-24 right-6 z-50 flex flex-col rounded-2xl shadow-2xl overflow-hidden"
          style={{
            width: 'min(480px, calc(100vw - 32px))',
            maxHeight: 'min(620px, calc(100vh - 120px))',
            background: 'linear-gradient(160deg,#0F1A30 0%,#0B1120 100%)',
            border: '1px solid rgba(61,109,184,0.3)',
          }}
        >
          {/* Header */}
          <div className="flex items-center gap-3 px-5 py-4 flex-shrink-0"
            style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
            <div className="w-11 h-11 rounded-full overflow-hidden flex-shrink-0" style={{ background: '#EEF5FF' }}>
              <LofiAvatar size={44} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-semibold leading-tight">Clément Boulé</p>
              <p className="text-xs flex items-center gap-1.5 mt-0.5" style={{ color: '#6B9ED4' }}>
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block"
                  style={{ animation: 'cb-bounce 2s ease-in-out infinite' }}/>
                Formateur · Coach · Disponible
              </p>
            </div>
            <button onClick={restart} title="Recommencer"
              className="flex items-center justify-center w-8 h-8 rounded-lg text-white/30 hover:text-white/70 hover:bg-white/5 transition-all text-base">
              ↺
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-5 py-4 space-y-3 min-h-0">
            {messages.map((msg, i) => (
              <div key={i} className={`cb-msg flex gap-2 ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.from === 'bot' && (
                  <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 mt-0.5" style={{ background: '#EEF5FF' }}>
                    <LofiAvatar size={32} />
                  </div>
                )}
                <div
                  className="max-w-[78%] px-4 py-2.5 text-sm leading-relaxed whitespace-pre-line"
                  style={{
                    borderRadius: msg.from === 'bot' ? '4px 16px 16px 16px' : '16px 4px 16px 16px',
                    background: msg.from === 'bot' ? 'rgba(61,109,184,0.18)' : 'rgba(255,255,255,0.1)',
                    bder: msg.from === 'bot' ? '1px solid rgba(61,109,184,0.25)' : '1px solid rgba(255,255,255,0.1)',
                    color: 'rgba(255,255,255,0.88)',
                  }}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0" style={{ background: '#EEF5FF' }}>
                  <LofiAvatar size={32} />
                </div>
                <div className="px-4 py-3" style={{
                  borderRadius: '4px 16px 16px 16px',
                  background: 'rgba(61,109,184,0.18)',
                  border: '1px solid rgba(61,109,184,0.25)',
                }}>
                  <div className="flex gap-1 items-center h-4">
                    {[0, 1, 2].map(j => (
                      <span key={j} className="w-1.5 h-1.5 rounded-full bg-white/50 inline-block"
                        style={{ animation: `cb-bounce 1.1s ease-in-out ${j * 0.18}s infinite` }}/>
                    ))}
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Choices / CTAs */}
          {showChoices && !typing && currentStep && (
            <div className="px-5 pb-5 pt-2 flex-shrink-0 space-y-2"
              style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
              {currentStep.action ? (
                <div className="space-y-2 pt-2">
                  {/* CTA principal — contact ou DISC */}
                  {currentStep.action === 'contact' && (
                    <Fragment>
                      <a
                        href={buildContactURL(currentStep)}
                        onClick={() => setOpen(false)}
                        className="block w-full py-3 rounded-xl text-sm font-semibold text-white text-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                        style={{ background: 'linear-gradient(135deg,#3D6DB8,#5B8DD4)', boxShadow: '0 4px 16px rgba(61,109,184,0.35)' }}
                      >
                        💬 M'envoyer un message
                      </a>
                      {currentStep.formationAnchor && (
                        <a
                          href={currentStep.formationAnchor}
                          onClick={() => setOpen(false)}
                          className="block w-full py-2.5 rounded-xl text-xs font-semibold text-center transition-all duration-200"
                          style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.65)' }}
                        >
                          📋 Voir les formations
                        </a>
                      )}
                    </Fragment>
                  )}
                  {currentStep.action === 'disc' && (
                    <button
                      onClick={() => handleAction('disc')}
                      className="w-full py-3 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                      style={{ background: 'linear-gradient(135deg,#6B21A8,#9333EA)', boxShadow: '0 4px 16px rgba(147,51,234,0.3)' }}
                    >
                      🎯 Passer le test DISC
                    </button>
                  )}
                  {/* Recommencer */}
                  <button
                    onClick={restart}
                    className="w-full py-2 rounded-xl text-xs transition-all"
                    style={{ color: 'rgba(255,255,255,0.4)', border: '1px solid rgba(255,255,255,0.08)' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.7)'; (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.2)' }}
                    onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.4)'; (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.08)' }}
                  >
                    ↩ Recommencer depuis le début
                  </button>
                </div>
              ) : (
                <div className="space-y-1.5 pt-1">
                  {currentStep.choices?.map((choice) => (
                    <button
                      key={choice.next}
                      onClick={() => handleChoice(choice)}
                      className="w-full text-left px-4 py-3 rounded-xl text-sm flex items-center gap-3 transition-all duration-200 hover:-translate-y-px"
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.09)',
                        color: 'rgba(255,255,255,0.78)',
                      }}
                      onMouseEnter={e => {
                        const b = e.currentTarget as HTMLButtonElement
                        b.style.background = 'rgba(61,109,184,0.18)'
                        b.style.borderColor = 'rgba(61,109,184,0.38)'
                        b.style.color = 'rgba(255,255,255,0.95)'
                      }}
                      onMouseLeave={e => {
                        const b = e.currentTarget as HTMLButtonElement
                        b.style.background = 'rgba(255,255,255,0.04)'
                        b.style.borderColor = 'rgba(255,255,255,0.09)'
                        b.style.color = 'rgba(255,255,255,0.78)'
                      }}
                    >
                      {choice.icon && <span className="text-base flex-shrink-0">{choice.icon}</span>}
                      <span className="flex-1">{choice.label}</span>
                      <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '1.1em' }}>›</span>
                    </button>
                  ))}
                             </div>
                )}
            </div>
            )}
          </div>
          )}
        </div>
      )}
    </Fragment>
  )
}
