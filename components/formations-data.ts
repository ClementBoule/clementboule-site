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

// ─── 6 FORMATIONS ─────────────────────────────────────────────────────────────

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
    title: 'RH & marque employeur',
    shortDescription: "Aligner ce que vous vivez en interne avec ce que vous montrez à l'extérieur. Vos collaborateurs deviennent vos meilleurs ambassadeurs.",
    intro: "La marque employeur, c'est rarement un problème de communication. C'est un problème d'alignement. Ce que vous promettez à l'extérieur doit coller avec ce que vivent vos équipes au quotidien. Cette formation travaille exactement sur cet écart.",
    forWhom: [
      "DRH et responsables marque employeur qui veulent aller au-delà des affiches",
      "Dirigeants de PME qui peinent à recruter malgré une bonne réputation terrain",
      "Managers qui veulent fidéliser leurs équipes sans forcément augmenter les salaires",
    ],
    outcomes: [
      "Mettre le doigt sur l'écart entre ce que vous affichez et ce que vos équipes vivent vraiment",
      "Construire une promesse employeur qui tient la route face à vos propres collaborateurs",
      "Outiller vos managers pour qu'ils deviennent des relais crédibles, pas des porte-paroles forcés",
      "Mesurer ce qui change concrètement sur l'attractivité et la fidélisation",
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
      "Grille d'audit Glassdoor / LinkedIn",
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
    title: 'Posture professionnelle',
    shortDescription: "Corps, voix, regard. Ce que vous dégagez avant même d'ouvrir la bouche. Les leviers d'un impact qui dure.",
    intro: "Avant même d'ouvrir la bouche, vous avez déjà dit quelque chose. Cette formation travaille sur ce que vous dégagez : le corps, la voix, le regard. Pas pour jouer un rôle, mais pour être pleinement à votre place.",
    forWhom: [
      "Managers nouvellement nommés qui veulent asseoir leur légitimité sans forcer",
      "Cadres en transition vers des postes à forte exposition",
      "Commerciaux et consultants en face à face avec des clients exigeants",
    ],
    outcomes: [
      "Voir ce que vous dégagez naturellement et l'effet que ça produit chez les autres",
      "Ajuster voix, regard et posture selon les situations à enjeux",
      "Garder la maîtrise quand la pression monte",
      "Être vous-même, pas une version corrigée de quelqu'un d'autre",
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
      "Grille d'observation comportementale",
      'Caméra + retour pair-à-pair',
      "Cadre des \"5 postures de management\" (Mintzberg adapté)",
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
    shortDescription: "Voir les signaux avant la crise. Un format concret pour les managers en première ligne, pas pour les experts RH.",
    intro: "Les RPS ne débarquent pas du jour au lendemain. Les signaux étaient là avant. Cette formation apprend aux managers à les lire et à agir tôt, avant l'arrêt maladie ou le départ. Cadre INRS, méthode terrain.",
    forWhom: [
      "Managers de proximité avec des équipes sous pression",
      "DRH et référents QVT qui cherchent un outil concret, pas un guide de 200 pages",
      "Membres de CSE/CHSCT en charge de la prévention",
    ],
    outcomes: [
      "Connaître le cadre légal sans vous noyer dans le juridique",
      "Repérer les 6 familles de risques dans votre quotidien de manager",
      "Conduire un entretien de soutien sans jouer au psy",
      "Mettre en place un dispositif de prévention adapté à votre taille et votre secteur",
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
    title: "Stratégie d'entreprise",
    shortDescription: "Du diagnostic à l'exécution. Savoir où aller, pourquoi, et comment embarquer tout le monde sans perdre la moitié en route.",
    intro: "La plupart des stratégies sont bonnes sur le papier. Là où ça coince, c'est à l'exécution. Cette formation donne aux dirigeants et managers les outils pour construire une stratégie que les équipes comprennent, qui se pilote vraiment et qui résiste au terrain.",
    forWhom: [
      "Dirigeants et CODIR en phase de structuration ou de pivot",
      "Managers en charge d'un BU ou d'un projet transverse",
      "Comités de direction qui préparent leur séminaire stratégique",
    ],
    outcomes: [
      "Cadrer votre vision à 3 ans de façon claire et partageable",
      "Utiliser les bons frameworks sans vous noyer dedans (OKR, BCG, Blue Ocean...)",
      "Aligner votre CODIR et vos managers sur un cap commun",
      "Mettre en place un pilotage qui tient dans la durée, pas juste jusqu'au prochain séminaire",
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
        title: "Plan d'exécution & pilotage",
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
    shortDescription: "Écoute, communication, conflits. Les compétences qu'on sous-estime jusqu'au jour où elles font vraiment la différence.",
    intro: "Ce sont les compétences absentes des fiches de poste mais présentes dans chaque décision de recrutement. L'écoute, la communication, la gestion des conflits. Cette formation les rend concrètes et praticables dès le lendemain.",
    forWhom: [
      "Managers transversaux ou matriciels qui gèrent sans autorité hiérarchique",
      "Équipes commerciales et relation client sous pression",
      "Chefs de projet dans des environnements complexes",
    ],
    outcomes: [
      "Écouter vraiment, sans préparer sa réponse pendant que l'autre parle encore",
      "Formuler un désaccord ou une demande sans déclencher une guerre froide",
      "Désamorcer un conflit avant qu'il parasite tout le reste",
      "Donner un feedback qui fait avancer au lieu de braquer",
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
    title: "Spine'Up — leadership managérial",
    shortDescription: "Un parcours pour les managers qui veulent trouver leur posture sans se dénaturer. Concret, progressif, et ça reste après la formation.",
    intro: "Spine'Up est un parcours de développement managérial que j'ai construit à partir de ce que je vois en entreprise : des managers compétents qui ne savent pas comment occuper leur place. Pas un problème de compétences. Un problème de posture. Ce programme travaille exactement là-dessus.",
    forWhom: [
      "Managers en prise de poste qui veulent partir du bon pied",
      "Talents identifiés en plan de succession qui préparent leur prochaine étape",
      "Cadres confirmés qui sentent qu'ils plafonnent sans comprendre pourquoi",
    ],
    outcomes: [
      "Comprendre votre style naturel de management avec le profil DISC",
      "Construire votre présence managériale sans copier quelqu'un d'autre",
      "Avoir un récit professionnel clair pour vos entretiens et vos ambitions",
      "Repartir avec un plan de développement sur 18 mois, actionnable",
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
      "Test DISC + 15 sous-profils (méthode propriétaire)",
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

// ─── HELPERS ──────────────────────────────────────────────────────────────────

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
