// ────────────────────────────────────────────────────────────────────────────
// FORMATIONS — données centralisées
// Utilisé par : components/Formations.tsx + app/formations/[slug]/page.tsx
// ────────────────────────────────────────────────────────────────────────────

export type FormationPhase = {
  step: string
  title: string
  desc: string
  duration?: string
}

export type FormationWorkshop = {
  icon: string
  name: string
  desc: string
}

export type Formation = {
  slug: string
  tag: string
  // Couleur d'accent par formation (utilisée pour highlight, badge, CTA)
  accent: string // hex
  bg: string // background light tint
  // Image principale (à remplacer par tes aquarelles)
  image: string
  // Titre + accroche courte (pour la card home + meta)
  title: string
  shortDescription: string
  // Page détail
  intro: string // hook 2-3 phrases qui ouvre la page
  forWhom: string[] // personas cibles, 2-4 lignes
  outcomes: string[] // résultats concrets, 3-5 bullets
  phases: FormationPhase[] // programme étape par étape
  workshops: FormationWorkshop[] // ateliers et exercices
  tools: string[] // outils & frameworks utilisés
  format: {
    duration: string
    mode: string // présentiel / distanciel / mixte
    groupSize: string
    pricing: string // "Sur devis" par défaut
  }
}

// ─── 6 FORMATIONS ───────────────────────────────────────────────────────────
export const formations: Formation[] = [
  // ═══════════════════════════════════════════════════════════════════════
  // 1. RH & MARQUE EMPLOYEUR
  // ═══════════════════════════════════════════════════════════════════════
  {
    slug: 'rh-marque-employeur',
    tag: 'RH',
    accent: '#3D6DB8',
    bg: '#EEF3FA',
    image: '/illustrations/formations/rh-marque-employeur.png',
    title: 'RH & Marque Employeur',
    shortDescription:
      'Aligner culture interne et image externe pour attirer et fidéliser les talents. Vos collaborateurs deviennent vos premiers ambassadeurs.',
    intro:
      "Une marque employeur forte ne se décrète pas, elle se construit de l'intérieur. Cette formation aligne votre culture vécue avec votre promesse externe, pour transformer vos collaborateurs en ambassadeurs sincères.",
    forWhom: [
      "Directions RH & responsables marque employeur",
      "Dirigeants de PME en croissance qui peinent à recruter",
      "Managers qui veulent fidéliser leurs équipes au-delà du salaire",
    ],
    outcomes: [
      "Diagnostic clair de l'écart entre culture vécue et image perçue",
      "Plan d'action concret pour aligner discours et expérience collaborateur",
      "Outils pour mesurer l'attractivité et la fidélisation",
      "Cadre pour activer vos collaborateurs en relais d'opinion",
    ],
    phases: [
      {
        step: 'Phase 1',
        title: 'Diagnostic culturel',
        desc: "Audit de la perception interne vs externe via questionnaires, entretiens et analyse des canaux digitaux.",
        duration: '1 jour',
      },
      {
        step: 'Phase 2',
        title: 'Alignement stratégique',
        desc: "Atelier de co-construction de l'EVP (Employee Value Proposition) avec le COMEX et un panel collaborateurs.",
        duration: '1 jour',
      },
      {
        step: 'Phase 3',
        title: 'Activation opérationnelle',
        desc: "Plan de communication interne et externe, formation des managers, dispositif d'employee advocacy.",
        duration: '0,5 jour',
      },
    ],
    workshops: [
      { icon: '🎯', name: 'Atelier EVP', desc: "Co-construction de la promesse employeur en 3h." },
      { icon: '🪞', name: 'Audit culturel', desc: "Cartographie de la culture vécue vs affichée." },
      { icon: '📣', name: 'Employee Advocacy', desc: "Activer les collaborateurs comme ambassadeurs." },
    ],
    tools: [
      'Canvas EVP (Employee Value Proposition)',
      'Matrice de cohérence interne/externe',
      'Grille d\'audit Glassdoor / LinkedIn',
      'Templates de communication interne',
    ],
    format: {
      duration: '2,5 jours (modulable)',
      mode: 'Présentiel ou distanciel',
      groupSize: '8 à 15 participants',
      pricing: 'Sur devis',
    },
  },

  // ═══════════════════════════════════════════════════════════════════════
  // 2. POSTURE PROFESSIONNELLE
  // ═══════════════════════════════════════════════════════════════════════
  {
    slug: 'posture-professionnelle',
    tag: 'Posture',
    accent: '#7B3DB8',
    bg: '#F3EEFA',
    image: '/illustrations/formations/posture-professionnelle.png',
    title: 'Posture Professionnelle',
    shortDescription:
      "Gestes, regard, prise de parole. Les clés d'un impact immédiat en réunion, en entretien ou face à un client exigeant.",
    intro:
      "55% de l'impact d'un message passe par le non-verbal. Cette formation vous donne les leviers concrets pour incarner votre rôle, ajuster votre posture aux situations à enjeux et créer une présence qui marque.",
    forWhom: [
      "Managers nouvellement nommés qui doivent affirmer leur autorité",
      "Cadres confirmés en transition vers des postes à exposition",
      "Commerciaux et consultants en contact client haut niveau",
    ],
    outcomes: [
      "Identifier votre posture naturelle et ses points d'amélioration",
      "Maîtriser les ajustements voix / regard / corps selon les contextes",
      "Gérer le trac et les situations déstabilisantes",
      "Construire une présence cohérente sans jouer un rôle",
    ],
    phases: [
      {
        step: 'Phase 1',
        title: 'Conscience corporelle',
        desc: "Vidéo-feedback, exercices respiratoires, ancrage. Identification de vos automatismes.",
        duration: '0,5 jour',
      },
      {
        step: 'Phase 2',
        title: 'Construction de la posture',
        desc: "Travail voix, regard, gestuelle. Mises en situation filmées et débriefées.",
        duration: '1 jour',
      },
      {
        step: 'Phase 3',
        title: 'Mise en situation réelle',
        desc: "Simulations à enjeux : prise de parole, réunion difficile, négociation.",
        duration: '0,5 jour',
      },
    ],
    workshops: [
      { icon: '🎬', name: 'Vidéo-feedback', desc: "Auto-observation guidée et débriefing pair-à-pair." },
      { icon: '🎤', name: 'Pitch 90 secondes', desc: "Construire un message percutant et le délivrer avec impact." },
      { icon: '🧘', name: 'Ancrage & respiration', desc: "Techniques pour gérer le trac et garder la maîtrise." },
    ],
    tools: [
      'Méthode des 3V (Verbal / Vocal / Visuel)',
      'Grille d\'observation comportementale',
      'Caméra + retour pair-à-pair',
      'Cadre des "5 postures de management" (Mintzberg adapté)',
    ],
    format: {
      duration: '2 jours',
      mode: 'Présentiel uniquement (vidéo nécessaire)',
      groupSize: '6 à 10 participants',
      pricing: 'Sur devis',
    },
  },

  // ═══════════════════════════════════════════════════════════════════════
  // 3. PRÉVENTION DES RPS
  // ═══════════════════════════════════════════════════════════════════════
  {
    slug: 'prevention-rps',
    tag: 'Prévention',
    accent: '#16A34A',
    bg: '#EFF8F2',
    image: '/illustrations/formations/prevention-rps.png',
    title: 'Prévention des RPS',
    shortDescription:
      "Identifier les signaux faibles et agir avant la crise. Un format opérationnel pour les managers en première ligne.",
    intro:
      "Les Risques Psycho-Sociaux coûtent en moyenne 3% à 4% de la masse salariale (INRS). Cette formation outille les managers pour repérer les signaux d'alerte et agir tôt, avant l'arrêt maladie ou le départ.",
    forWhom: [
      "Managers de proximité confrontés à des équipes sous tension",
      "DRH et préventeurs en charge de la QVT",
      "CHSCT/CSE souhaitant un cadre opérationnel",
    ],
    outcomes: [
      "Connaître le cadre légal et les obligations de l'employeur",
      "Repérer les 6 familles de RPS (INRS) dans votre quotidien",
      "Mener un entretien de soutien sans devenir thérapeute",
      "Construire un dispositif de prévention adapté à votre contexte",
    ],
    phases: [
      {
        step: 'Phase 1',
        title: 'Cadre & repères',
        desc: "Modèle INRS, obligations légales, distinction stress / souffrance / harcèlement.",
        duration: '0,5 jour',
      },
      {
        step: 'Phase 2',
        title: 'Détection et écoute',
        desc: "Cas pratiques : repérer les signaux, conduire un entretien, mobiliser les ressources internes.",
        duration: '1 jour',
      },
      {
        step: 'Phase 3',
        title: 'Plan de prévention',
        desc: "Construction d'un plan d'action sur-mesure : indicateurs, gouvernance, communication.",
        duration: '0,5 jour',
      },
    ],
    workshops: [
      { icon: '🔍', name: 'Cartographie RPS', desc: "Identifier les facteurs de risque dans vos équipes." },
      { icon: '🗣️', name: 'Entretien de soutien', desc: "Méthode ALERTE pour cadrer un entretien sensible." },
      { icon: '🛡️', name: 'Plan de prévention', desc: "Construire un dispositif primaire / secondaire / tertiaire." },
    ],
    tools: [
      'Modèle INRS des 6 familles de RPS',
      'Méthode ALERTE (entretien de soutien)',
      'Indicateurs RPS (absentéisme, turnover, AT)',
      'Cartographie des ressources internes (médecine du travail, EAP, CSE)',
    ],
    format: {
      duration: '2 jours',
      mode: 'Présentiel ou distanciel',
      groupSize: '8 à 12 participants',
      pricing: 'Sur devis',
    },
  },

  // ═══════════════════════════════════════════════════════════════════════
  // 4. STRATÉGIE D'ENTREPRISE
  // ═══════════════════════════════════════════════════════════════════════
  {
    slug: 'strategie-entreprise',
    tag: 'Stratégie',
    accent: '#B8843D',
    bg: '#FAF4EB',
    image: '/illustrations/formations/strategie-entreprise.png',
    title: "Stratégie d'Entreprise",
    shortDescription:
      "Du diagnostic au plan d'action concret. Prioriser, aligner les équipes et piloter votre croissance avec clarté.",
    intro:
      "Beaucoup de stratégies meurent dans le PowerPoint du séminaire annuel. Cette formation vous donne les frameworks pour construire une stratégie qui s'exécute : claire, priorisée, alignée et pilotée.",
    forWhom: [
      "Dirigeants et CODIR en phase de structuration ou pivot",
      "Managers en charge d'un BU ou d'un projet transverse",
      "Comités de direction préparant un séminaire stratégique",
    ],
    outcomes: [
      "Cadrer votre vision et vos priorités à 3 ans",
      "Maîtriser 4 frameworks éprouvés (OKR, Wardley, BCG, Blue Ocean)",
      "Aligner votre COMEX et vos managers autour d'un cap commun",
      "Mettre en place un rituel de pilotage qui survit aux urgences",
    ],
    phases: [
      {
        step: 'Phase 1',
        title: 'Diagnostic stratégique',
        desc: "Analyse externe (marché, concurrence) et interne (forces, ressources). Identification des leviers.",
        duration: '1 jour',
      },
      {
        step: 'Phase 2',
        title: 'Construction de la vision',
        desc: "Atelier de définition de la cible 3 ans, des choix structurants et des renoncements assumés.",
        duration: '1 jour',
      },
      {
        step: 'Phase 3',
        title: 'Plan d\'exécution & pilotage',
        desc: "OKR, roadmap, rituels de revue. Outillage des managers pour faire vivre la stratégie au quotidien.",
        duration: '1 jour',
      },
    ],
    workshops: [
      { icon: '🗺️', name: 'Wardley Mapping', desc: "Cartographie de la chaîne de valeur et de son évolution." },
      { icon: '🎯', name: 'OKR Workshop', desc: "Définir 3 objectifs annuels avec key results mesurables." },
      { icon: '⚖️', name: 'Matrice de priorisation', desc: "Trancher entre les initiatives via Impact × Effort × Risque." },
    ],
    tools: [
      'OKR (Objectives & Key Results)',
      'Wardley Maps',
      'Matrice BCG / Ansoff',
      'Blue Ocean Strategy Canvas',
      'Business Model Canvas',
    ],
    format: {
      duration: '3 jours (modulable en séminaire)',
      mode: 'Présentiel recommandé',
      groupSize: 'COMEX (6-12 personnes) ou managers (10-15)',
      pricing: 'Sur devis',
    },
  },

  // ═══════════════════════════════════════════════════════════════════════
  // 5. SOFT SKILLS
  // ═══════════════════════════════════════════════════════════════════════
  {
    slug: 'soft-skills',
    tag: 'Humain',
    accent: '#DC2626',
    bg: '#FAEDED',
    image: '/illustrations/formations/soft-skills.png',
    title: 'Soft Skills',
    shortDescription:
      "Écoute active, communication non violente, gestion des conflits. Les compétences humaines qui font vraiment la différence.",
    intro:
      "Les hard skills vous font embaucher, les soft skills vous font évoluer. Cette formation muscle les compétences relationnelles qui font la différence en management, en commercial et en collaboration transverse.",
    forWhom: [
      "Managers transversaux ou matriciels",
      "Équipes commerciales et relation client",
      "Chefs de projet en environnement complexe",
    ],
    outcomes: [
      "Écouter activement sans projeter ni interpréter",
      "Formuler une demande ou un désaccord en CNV",
      "Désamorcer un conflit avant qu'il ne s'envenime",
      "Donner un feedback qui motive plutôt que démotive",
    ],
    phases: [
      {
        step: 'Phase 1',
        title: 'Écoute & présence',
        desc: "Exercices d'écoute active, reformulation, gestion des silences.",
        duration: '0,5 jour',
      },
      {
        step: 'Phase 2',
        title: 'Communication non violente',
        desc: "Méthode OSBD (Observation, Sentiment, Besoin, Demande). Mises en situation.",
        duration: '1 jour',
      },
      {
        step: 'Phase 3',
        title: 'Gestion des conflits & feedback',
        desc: "Cartographie des conflits, méthode DESC pour le feedback difficile.",
        duration: '0,5 jour',
      },
    ],
    workshops: [
      { icon: '👂', name: 'Écoute en miroir', desc: "Exercice de reformulation guidée." },
      { icon: '💬', name: 'OSBD CNV', desc: "Reformuler 3 situations conflictuelles en CNV." },
      { icon: '⚡', name: 'Feedback DESC', desc: "Donner un feedback difficile sans casser la relation." },
    ],
    tools: [
      'CNV (Marshall Rosenberg)',
      'Méthode DESC (feedback structuré)',
      'TKI (Thomas-Kilmann Conflict Mode)',
      'Roue des émotions (Plutchik)',
    ],
    format: {
      duration: '2 jours',
      mode: 'Présentiel ou distanciel',
      groupSize: '8 à 12 participants',
      pricing: 'Sur devis',
    },
  },

  // ═══════════════════════════════════════════════════════════════════════
  // 6. SPINE'UP — LEADERSHIP MANAGÉRIAL
  // ═══════════════════════════════════════════════════════════════════════
  {
    slug: 'spine-up',
    tag: "Spine'Up",
    accent: '#0F766E',
    bg: '#ECF6F4',
    image: '/illustrations/formations/spine-up.png',
    title: "Spine'Up — Leadership Managérial",
    shortDescription:
      "Un programme structuré pour développer la posture managériale de vos collaborateurs. Trouvez votre juste posture pour évoluer dans votre carrière avec impact et confiance.",
    intro:
      "Spine'Up est un parcours signature qui combine posture corporelle, leadership relationnel et stratégie de carrière. Pensé pour les managers qui veulent grandir sans se travestir.",
    forWhom: [
      "Managers en prise de poste ou en évolution rapide",
      "Talents identifiés en plan de succession",
      "Cadres confirmés cherchant à dépasser un plafond de verre",
    ],
    outcomes: [
      "Identifier vos signatures de leadership (style DISC + ancrages)",
      "Construire votre récit professionnel et vos arguments d'évolution",
      "Maîtriser les 5 postures clés du manager (Mintzberg adapté)",
      "Repartir avec un plan de carrière 18 mois et un kit d'argumentaires",
    ],
    phases: [
      {
        step: 'Module 1',
        title: 'Connaissance de soi',
        desc: "DISC, ancrages, valeurs. Cartographie de votre style naturel et de vos zones de confort.",
        duration: '1 jour',
      },
      {
        step: 'Module 2',
        title: 'Posture & présence',
        desc: "Travail corporel, voix, regard. Les 5 postures du manager selon le contexte.",
        duration: '1 jour',
      },
      {
        step: 'Module 3',
        title: 'Récit & influence',
        desc: "Construction du storytelling pro, argumentaire d'évolution, gestion des relations clés.",
        duration: '1 jour',
      },
      {
        step: 'Module 4',
        title: 'Plan de carrière',
        desc: "Plan d'action 18 mois, indicateurs, rituels de pilotage individuel.",
        duration: '0,5 jour',
      },
    ],
    workshops: [
      { icon: '🧭', name: 'Cartographie DISC', desc: "Diagnostic personnel approfondi en 35 questions." },
      { icon: '🎭', name: '5 postures', desc: "Travail des 5 rôles managériaux en mise en situation." },
      { icon: '📖', name: 'Storytelling pro', desc: "Construction d'un récit de carrière en 3 actes." },
      { icon: '🛤️', name: 'Roadmap 18 mois', desc: "Plan d'action concret avec jalons trimestriels." },
    ],
    tools: [
      'Test DISC + 15 sous-profils (méthode propriétaire)',
      'Modèle des 5 postures (Mintzberg adapté)',
      'Canvas de carrière 18 mois',
      'Argumentaire STAR (Situation, Task, Action, Result)',
    ],
    format: {
      duration: '3,5 jours étalés sur 3 mois',
      mode: 'Présentiel + suivi distanciel individuel',
      groupSize: '6 à 8 participants (cohorte fermée)',
      pricing: 'Sur devis (formation signature)',
    },
  },
]

// ─── HELPERS ────────────────────────────────────────────────────────────────

export function getFormation(slug: string): Formation | undefined {
  return formations.find((f) => f.slug === slug)
}

export function getFormationIndex(slug: string): number {
  return formations.findIndex((f) => f.slug === slug)
}

export function getNextFormation(slug: string): Formation {
  const idx = getFormationIndex(slug)
  return formations[(idx + 1) % formations.length]
}

export function getPrevFormation(slug: string): Formation {
  const idx = getFormationIndex(slug)
  return formations[(idx - 1 + formations.length) % formations.length]
}
