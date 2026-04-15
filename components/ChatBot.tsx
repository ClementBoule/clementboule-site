th d="M30.5 29.5 Q34 27.8 37.5 29" stroke="#5C3010" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
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
