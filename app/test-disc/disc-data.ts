// ─── DISC DATA MODEL ────────────────────────────────────────────────────────
// Contient : types, couleurs, 4 profils principaux, 15 sous-profils,
//            questions Phase 1 & Phase 2, messages "Akinator", blend texts
// Source sous-profils : Assessments 24x7 — Cartographie des 15 principaux
//                       styles comportementaux (V1, 06/04/2022)

export type ProfileKey = 'D' | 'I' | 'S' | 'C'
export type TextSegment = { text: string; tag?: ProfileKey }

export const DISC_COLORS: Record<ProfileKey, { main: string; dark: string; bg: string; light: string }> = {
  D: { main: '#DC2626', dark: '#991B1B', bg: 'rgba(220,38,38,0.1)', light: '#FEE2E2' },
  I: { main: '#EAB308', dark: '#854D0E', bg: 'rgba(234,179,8,0.1)', light: '#FEF9C3' },
  S: { main: '#16A34A', dark: '#14532D', bg: 'rgba(22,163,74,0.1)', light: '#DCFCE7' },
  C: { main: '#2563EB', dark: '#1E3A8A', bg: 'rgba(37,99,235,0.1)', light: '#DBEAFE' },
}

// ─── 15 SOUS-PROFILS ──────────────────────────────────────────────────────
// Chaque sous-profil est mappé à une zone du disque DISC (dominant + secondaire)
// et contient les données enrichies du PDF Assessments 24x7

export type SubProfileKey =
  | 'evaluateur' | 'investigateur' | 'explorateur' | 'competiteur' | 'producteur'
  | 'inspirateur' | 'influenceur' | 'promoteur'
  | 'coach' | 'pacificateur' | 'planificateur'
  | 'factuel' | 'formaliste' | 'concretiseur' | 'technicien'

export interface SubProfile {
  key: SubProfileKey
  name: string
  nameEn: string
  zone: { dominant: ProfileKey; secondary: ProfileKey | null }
  // Position sur la cartographie (angle en degrés, distance du centre 0-1)
  mapPosition: { angle: number; radius: number }
  traits: string[]
  // Message "Akinator" — bulle de dialogue personnalisée
  akinatorMessage: string
  // Situations pro concrètes que ce profil vit au quotidien
  dailyInsight: string
}

export const subProfiles: Record<SubProfileKey, SubProfile> = {
  // ─── ZONE D (Rouge) ─────────────────────────────────────────────────
  evaluateur: {
    key: 'evaluateur',
    name: "L'Évaluateur",
    nameEn: 'The Appraiser',
    zone: { dominant: 'D', secondary: 'C' },
    mapPosition: { angle: 45, radius: 0.85 },
    traits: [
      "Approche créative pour des objectifs pratiques et réalistes",
      "Mobilise par la persuasion plutôt que par la force",
      "Sait expliquer ses idées et les étapes pour les atteindre",
      "Organisé avec un plan d'action séquencé",
      "Peut exprimer ouvertement son mécontentement envers les non-contributeurs",
    ],
    akinatorMessage: "Vous êtes celui qui, en réunion, a déjà la solution en tête pendant que les autres posent encore le problème — mais vous savez aussi la vendre avec finesse. Le souci ? Quand votre collègue « touche-à-tout » débarque avec une idée non structurée, vous sentez monter cette impatience... Parlons-en ?",
    dailyInsight: "Vous passez probablement vos journées à transformer des visions floues en plans concrets, tout en gérant la frustration face aux collègues qui ne suivent pas le rythme.",
  },
  investigateur: {
    key: 'investigateur',
    name: "L'Investigateur",
    nameEn: 'The Investigator',
    zone: { dominant: 'C', secondary: 'D' },
    mapPosition: { angle: 60, radius: 0.7 },
    traits: [
      "Constance, objectivité et analyse",
      "Poursuit ses objectifs avec persévérance",
      "Excelle dans les projets complexes et techniques",
      "S'appuie sur la logique plutôt que sur l'émotion",
      "Peut être perçu comme manquant de tact et de chaleur",
    ],
    akinatorMessage: "Vous êtes la personne qu'on appelle quand le projet déraille et que personne ne comprend pourquoi. Votre cerveau détecte les failles comme un scanner. Mais avouez-le : quand votre manager vous demande de « faire confiance au process » sans données, ça vous rend dingue. On en discute ?",
    dailyInsight: "Votre quotidien oscille entre l'analyse approfondie et la frustration face aux décisions prises sans données suffisantes.",
  },
  explorateur: {
    key: 'explorateur',
    name: "L'Explorateur",
    nameEn: 'The Creative',
    zone: { dominant: 'D', secondary: 'I' },
    mapPosition: { angle: 25, radius: 0.6 },
    traits: [
      "Comportements parfois contradictoires",
      "Veut des résultats rapides ET parfaits",
      "Passe de l'agressivité à la sensibilité",
      "Décisions routinières rapides, prudent sur les grosses décisions",
      "Peut paraître émotionnellement distant et étonnamment direct",
    ],
    akinatorMessage: "Vous êtes un paradoxe ambulant au bureau : ultra-direct le matin en comité de direction, et étonnamment à l'écoute l'après-midi avec votre équipe. Vos collègues ne savent jamais quelle version d'eux ils vont croiser. Et vous ? Vous vous demandez comment unifier tout ça. Parlons-en.",
    dailyInsight: "Vous naviguez entre l'urgence des résultats et le besoin de perfection, ce qui crée parfois des messages contradictoires pour votre entourage pro.",
  },
  competiteur: {
    key: 'competiteur',
    name: 'Le Compétiteur',
    nameEn: 'The Results Oriented',
    zone: { dominant: 'D', secondary: null },
    mapPosition: { angle: 15, radius: 0.95 },
    traits: [
      "Grande confiance en soi, parfois perçue comme arrogance",
      "Aime les challenges et surmonter les difficultés",
      "Recherche les tâches difficiles et les postes à responsabilité",
      "Considère les règles comme des lignes directrices générales",
      "Agit rapidement, peut devenir impatient avec les méthodiques",
    ],
    akinatorMessage: "On vous a déjà dit que vous étiez « trop direct » ? Vous, vous appelez ça de l'efficacité. Le problème, c'est que votre N+1 aimerait que vous « embarquiez davantage l'équipe dans la décision ». Traduction : ralentir. Et ça, ça vous coûte. Je connais bien ce dilemme.",
    dailyInsight: "Vos journées sont rythmées par l'action et la décision. Le vrai défi : convaincre sans imposer.",
  },
  producteur: {
    key: 'producteur',
    name: 'Le Producteur',
    nameEn: 'The Producer',
    zone: { dominant: 'D', secondary: 'S' },
    mapPosition: { angle: 350, radius: 0.8 },
    traits: [
      "Suit sa propre voie, cherche de nouveaux projets et défis",
      "Autonome, résout ses problèmes sans demander d'aide",
      "Son indépendance favorise l'innovation",
      "Le contrôle est important, peut se défendre si mis au défi",
      "Grandes attentes envers les autres, très critique si déçu",
    ],
    akinatorMessage: "Vous êtes le genre à avoir 3 projets en parallèle, tous sous contrôle. Votre patron adore vos résultats mais s'inquiète de votre « capacité à déléguer ». Vous, vous vous dites : « Si je délègue, ça sera mal fait. » On connaît ce schéma — et on sait comment en sortir.",
    dailyInsight: "Indépendant et productif, vous excellez en solo mais le management d'équipe vous confronte à vos limites de patience.",
  },

  // ─── ZONE I (Jaune) ─────────────────────────────────────────────────
  inspirateur: {
    key: 'inspirateur',
    name: "L'Inspirateur",
    nameEn: 'The Inspirational',
    zone: { dominant: 'I', secondary: 'D' },
    mapPosition: { angle: 335, radius: 0.7 },
    traits: [
      "Tente d'influencer les pensées et actions des autres",
      "Sait orienter vers un résultat prédéterminé",
      "Prépare le terrain avant d'annoncer son objectif",
      "Forte capacité de persuasion, peut donner le sentiment de manipulation",
      "Peut chercher à intimider et ignorer les décisions des autres",
    ],
    akinatorMessage: "Vous êtes celui ou celle qui transforme un simple brief en aventure collective. Votre énergie est contagieuse — mais certains collègues trouvent que vous « en faites trop » ou que vous « manipulez l'ambiance ». Ce n'est pas ça. C'est juste que votre cerveau voit les leviers relationnels que les autres ne voient pas. Discutons de comment canaliser ça.",
    dailyInsight: "Votre talent naturel pour influencer et motiver est votre superpower — mais il peut être perçu comme de la manipulation par les profils plus analytiques.",
  },
  influenceur: {
    key: 'influenceur',
    name: "L'Influenceur",
    nameEn: 'The Persuader',
    zone: { dominant: 'I', secondary: null },
    mapPosition: { angle: 315, radius: 0.9 },
    traits: [
      "Aime travailler avec les autres",
      "Perçu comme amical, même en cherchant ses objectifs personnels",
      "Obtient le respect et le soutien des autres",
      "Aime les journées variées",
      "Peut être trop optimiste et surestimer sa capacité à influencer",
    ],
    akinatorMessage: "Tout le monde vous adore au bureau. Vous êtes le premier qu'on invite au déjeuner, celui qui détend l'atmosphère en réunion. Mais quand il faut s'asseoir seul devant un tableur pendant 3 heures... c'est une autre histoire. Et le pire ? Votre boss vous dit de « mieux vous organiser ». On sait exactement comment transformer cette énergie sociale en productivité structurée.",
    dailyInsight: "Vous brillez dans l'interaction mais luttez avec les tâches solitaires et le suivi administratif.",
  },
  promoteur: {
    key: 'promoteur',
    name: 'Le Promoteur',
    nameEn: 'The Promoter',
    zone: { dominant: 'I', secondary: 'S' },
    mapPosition: { angle: 295, radius: 0.75 },
    traits: [
      "Nombreux contacts personnels qui soutiennent ses efforts",
      "Extraverti, socialement à l'aise",
      "S'appuie avec enthousiasme sur ses contacts",
      "Très optimiste, peut avoir des jugements erronés sur les autres",
      "Déterminé dans la poursuite de ses objectifs",
    ],
    akinatorMessage: "Votre carnet d'adresses est votre arme secrète. Vous connaissez toujours « quelqu'un qui connaît quelqu'un ». Mais soyons honnêtes : quand il faut passer de la relation au livrable concret, ça coince parfois. Votre manager aimerait que vos belles promesses se transforment plus vite en résultats mesurables. On peut travailler là-dessus.",
    dailyInsight: "Votre réseau est votre force, mais la conversion de l'enthousiasme en résultats tangibles reste votre challenge.",
  },

  // ─── ZONE S (Vert) ──────────────────────────────────────────────────
  coach: {
    key: 'coach',
    name: 'Le Coach',
    nameEn: 'The Counselor',
    zone: { dominant: 'S', secondary: 'I' },
    mapPosition: { angle: 275, radius: 0.65 },
    traits: [
      "Habile pour résoudre les problèmes de personnes",
      "Perçu comme chaleureux, empathique et perspicace",
      "Construit des relations personnelles dans la durée",
      "Reconnu pour sa discrétion et ses contributions",
      "Peut se montrer trop indulgent et trop modéré",
    ],
    akinatorMessage: "Vous êtes la personne vers qui tout le monde se tourne quand « ça ne va pas dans l'équipe ». Votre bureau est un confessionnal professionnel. Le problème ? Vous absorbez les tensions des autres et vous rentrez épuisé(e) le soir. Et quand il faut recadrer quelqu'un, vous repoussez à demain... puis à la semaine prochaine. Ça vous parle ?",
    dailyInsight: "Vous excellez dans l'accompagnement humain mais peinez à poser des limites claires et à gérer les confrontations nécessaires.",
  },
  pacificateur: {
    key: 'pacificateur',
    name: 'Le Pacificateur',
    nameEn: 'The Agent',
    zone: { dominant: 'S', secondary: null },
    mapPosition: { angle: 250, radius: 0.85 },
    traits: [
      "Équilibre entre nourrir les liens interpersonnels et poursuivre les objectifs",
      "Apporte son soutien, fait que les autres se sentent impliqués",
      "Bien organisé, produit des résultats efficaces",
      "Aime rendre service et prendre en charge pour les autres",
      "Fuit les conflits et évite les personnes très affirmées",
    ],
    akinatorMessage: "Vous êtes le ciment invisible de votre équipe. Sans vous, tout s'effondrerait — mais personne ne le réalise vraiment. Quand un conflit éclate entre deux collègues, c'est vous qui faites la navette diplomatique. Le problème : vous avez du mal à dire « non » et votre charge mentale explose. On connaît cette dynamique — et il y a des solutions concrètes.",
    dailyInsight: "Vous maintenez l'harmonie du groupe au prix de votre propre énergie et de vos propres besoins.",
  },
  planificateur: {
    key: 'planificateur',
    name: 'Le Planificateur',
    nameEn: 'The Planner',
    zone: { dominant: 'S', secondary: 'C' },
    mapPosition: { angle: 230, radius: 0.7 },
    traits: [
      "Développe de bonnes relations avec la plupart des personnes",
      "Modération et discrétion le caractérisent",
      "Prévenant, serviable et patient",
      "Construit des relations solides avec un nombre limité de personnes",
      "Efficace dans les domaines nécessitant une expertise spécialisée",
    ],
    akinatorMessage: "Vous êtes le genre à préparer un plan B... et un plan C, juste au cas où. Votre rigueur rassure tout le monde. Mais quand votre manager débarque avec un « changement de cap immédiat », vous sentez votre estomac se nouer. L'imprévu, c'est votre kryptonite. Et pourtant, dans un monde qui change tout le temps, c'est une compétence à développer. On en parle ?",
    dailyInsight: "Méthodique et fiable, vous excellez dans l'exécution planifiée mais le changement soudain vous déstabilise.",
  },

  // ─── ZONE C (Bleu) ──────────────────────────────────────────────────
  factuel: {
    key: 'factuel',
    name: 'Le Factuel',
    nameEn: 'The Factual',
    zone: { dominant: 'C', secondary: null },
    mapPosition: { angle: 120, radius: 0.85 },
    traits: [
      "Sens de la qualité très développé, raisonnement rationnel",
      "Privilégie la logique et les faits, suit aussi son intuition",
      "Se préparer avant d'agir est essentiel",
      "Peut sembler timide, travaille bien avec des gens de qualité",
      "Évite les situations conflictuelles, peut retarder les décisions",
    ],
    akinatorMessage: "Vous êtes celui ou celle qui repère la faute dans le rapport que tout le monde a validé. Votre sens du détail est chirurgical. Mais quand votre collègue I (le bavard enthousiaste) vous interrompt pour la 3ème fois en une heure avec « une super idée », vous serrez les dents. La question : comment collaborer avec des profils opposés sans perdre en qualité ?",
    dailyInsight: "Votre rigueur est votre marque de fabrique, mais la collaboration avec des profils plus spontanés vous demande une énergie considérable.",
  },
  formaliste: {
    key: 'formaliste',
    name: 'Le Formaliste',
    nameEn: 'The Perfectionist',
    zone: { dominant: 'C', secondary: 'S' },
    mapPosition: { angle: 140, radius: 0.7 },
    traits: [
      "S'appuie sur des procédures et approches structurées",
      "Soucieux du détail et recherche la perfection",
      "A besoin de connaître les attentes et échéances pour s'organiser",
      "Peut s'enliser dans les détails et retarder les décisions",
      "Se méfie des compliments personnels et des flatteries",
    ],
    akinatorMessage: "Votre boîte mail est organisée en 47 dossiers, vos fichiers sont nommés selon une convention que vous seul comprenez, et vous avez un process pour tout. Le chaos ambiant vous fait physiquement mal. Quand votre boss vous dit « Envoie-moi un truc rapide, ça fera l'affaire », vous ne pouvez pas. Parce que « ça fait l'affaire » n'est pas dans votre vocabulaire. Discutons de cet équilibre.",
    dailyInsight: "Votre perfectionnisme produit un travail impeccable mais vous met sous pression constante et peut ralentir l'équipe.",
  },
  concretiseur: {
    key: 'concretiseur',
    name: 'Le Concrétiseur',
    nameEn: 'The Achiever',
    zone: { dominant: 'C', secondary: 'D' },
    mapPosition: { angle: 80, radius: 0.65 },
    traits: [
      "Sens aigu de la responsabilité, attaché aux résultats",
      "Vif intérêt pour la qualité du travail effectué",
      "Peut décider de réaliser lui-même plutôt que de déléguer",
      "Reprend les tâches déléguées pour s'assurer de la qualité",
      "Grande efficacité, attend reconnaissance et récompense",
    ],
    akinatorMessage: "Vous êtes un perfectionniste d'action : vous voulez que ce soit parfait ET terminé dans les délais. Résultat ? Vous finissez souvent par tout refaire vous-même parce que « c'est plus rapide que d'expliquer ». Votre équipe se sent dépossédée, et vous, vous êtes épuisé(e). Ce cercle vicieux, on peut le casser ensemble.",
    dailyInsight: "Vous combinez exigence de qualité et sens des résultats — mais la délégation reste votre talon d'Achille.",
  },
  technicien: {
    key: 'technicien',
    name: 'Le Technicien',
    nameEn: 'The Technician',
    zone: { dominant: 'C', secondary: 'I' },
    mapPosition: { angle: 100, radius: 0.75 },
    traits: [
      "Recherche des projets dans ses domaines d'expertise",
      "Remet constamment en question son travail et ses résultats",
      "Aime faire des recherches, connaissances dans de nombreux domaines",
      "Facile à travailler sauf si on remet en question son expertise",
      "Attentif à la qualité de sa production, exige le même niveau des autres",
    ],
    akinatorMessage: "Vous êtes l'expert. Celui ou celle qu'on consulte quand le sujet est technique et que personne n'y comprend rien. Votre fierté professionnelle, c'est votre expertise. Mais quand un junior ose remettre en question votre méthode... ça pique. Et votre manager voudrait que vous soyez « plus flexible ». On peut travailler sur cette tension entre expertise et adaptabilité.",
    dailyInsight: "Votre expertise fait autorité, mais la remise en question de vos méthodes vous met sur la défensive.",
  },
}

// ─── MAPPING DOMINANT+SECONDAIRE → SOUS-PROFILS POSSIBLES ─────────────────
// Utilisé après Phase 1 pour savoir quels sous-profils sont dans la zone
// de l'utilisateur (et poser les bonnes questions en Phase 2)

export const subProfileMapping: Record<string, SubProfileKey[]> = {
  // Dominant D
  'D-C': ['evaluateur', 'concretiseur'],
  'D-I': ['explorateur', 'inspirateur'],
  'D-S': ['producteur', 'competiteur'],
  'D-D': ['competiteur'],
  // Dominant I
  'I-D': ['inspirateur', 'explorateur'],
  'I-S': ['promoteur', 'coach'],
  'I-C': ['influenceur', 'technicien'],
  'I-I': ['influenceur'],
  // Dominant S
  'S-I': ['coach', 'pacificateur'],
  'S-C': ['planificateur', 'formaliste'],
  'S-D': ['pacificateur', 'producteur'],
  'S-S': ['pacificateur'],
  // Dominant C
  'C-D': ['investigateur', 'concretiseur'],
  'C-I': ['factuel', 'technicien'],
  'C-S': ['formaliste', 'planificateur'],
  'C-C': ['factuel'],
}

// ─── QUESTIONS PHASE 1 (test actuel, 20 questions) ────────────────────────

export const questionsPhase1 = [
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

// ─── QUESTIONS PHASE 2 (affinage sous-profil) ─────────────────────────────
// 12 questions situationnelles qui discriminent entre les sous-profils
// à l'intérieur de chaque quadrant. Chaque réponse est tagguée avec
// un ou deux sous-profils qu'elle favorise.

export interface Phase2Option {
  label: string
  favors: SubProfileKey[]
}

export interface Phase2Question {
  id: number
  text: string
  // Concerne quels profils dominants (pour ne poser que les questions pertinentes)
  forDominants: ProfileKey[]
  options: Phase2Option[]
}

export const questionsPhase2: Phase2Question[] = [
  // ─── Questions universelles (posées à tous) ──────────────────────────
  {
    id: 101,
    text: "Quand on vous confie une tâche importante, votre premier réflexe est de :",
    forDominants: ['D', 'I', 'S', 'C'],
    options: [
      { label: "Créer un plan d'action structuré avec des étapes claires", favors: ['evaluateur', 'planificateur', 'formaliste'] },
      { label: "Identifier les personnes clés à impliquer et les mobiliser", favors: ['coach', 'promoteur', 'inspirateur'] },
      { label: "Analyser en profondeur le sujet avant de commencer", favors: ['investigateur', 'factuel', 'technicien'] },
      { label: "Foncer et ajuster en chemin — l'action prime", favors: ['competiteur', 'producteur', 'explorateur'] },
    ],
  },
  {
    id: 102,
    text: "Face à un collègue qui ne tient pas ses engagements, vous :",
    forDominants: ['D', 'I', 'S', 'C'],
    options: [
      { label: "Le recadrez directement et sans détour", favors: ['competiteur', 'producteur', 'concretiseur'] },
      { label: "Essayez de comprendre sa situation avant de réagir", favors: ['coach', 'pacificateur', 'planificateur'] },
      { label: "Reprenez la tâche vous-même pour garantir le résultat", favors: ['concretiseur', 'technicien', 'producteur'] },
      { label: "En discutez de manière constructive en proposant des solutions", favors: ['evaluateur', 'influenceur', 'inspirateur'] },
    ],
  },
  {
    id: 103,
    text: "Votre rapport à la délégation :",
    forDominants: ['D', 'I', 'S', 'C'],
    options: [
      { label: "Je délègue facilement si la personne est compétente", favors: ['inspirateur', 'influenceur', 'evaluateur'] },
      { label: "Je préfère faire moi-même — c'est plus rapide et mieux fait", favors: ['producteur', 'concretiseur', 'technicien'] },
      { label: "Je délègue en accompagnant étroitement la personne", favors: ['coach', 'planificateur', 'formaliste'] },
      { label: "Je délègue et je contrôle le résultat final", favors: ['competiteur', 'investigateur', 'factuel'] },
    ],
  },
  {
    id: 104,
    text: "Ce qui vous distingue le plus dans votre travail :",
    forDominants: ['D', 'I', 'S', 'C'],
    options: [
      { label: "Ma capacité à transformer une idée en plan concret et actionnable", favors: ['evaluateur', 'concretiseur', 'planificateur'] },
      { label: "Mon talent pour convaincre et embarquer les autres", favors: ['inspirateur', 'influenceur', 'promoteur'] },
      { label: "Ma fiabilité — on sait qu'avec moi, ce sera fait et bien fait", favors: ['pacificateur', 'formaliste', 'producteur'] },
      { label: "Mon expertise technique et ma rigueur intellectuelle", favors: ['technicien', 'investigateur', 'factuel'] },
    ],
  },

  // ─── Questions pour discriminer dans le quadrant D ───────────────────
  {
    id: 105,
    text: "Dans un projet d'équipe, votre rôle naturel est plutôt :",
    forDominants: ['D', 'I'],
    options: [
      { label: "Le stratège — je conçois le plan et j'orchestre l'exécution", favors: ['evaluateur', 'investigateur'] },
      { label: "Le challenger — je pousse l'équipe vers des objectifs ambitieux", favors: ['competiteur', 'producteur'] },
      { label: "Le catalyseur — je crée l'énergie et l'envie de se dépasser", favors: ['inspirateur', 'influenceur'] },
      { label: "L'innovateur — je vois des connexions que les autres ne voient pas", favors: ['explorateur', 'technicien'] },
    ],
  },
  {
    id: 106,
    text: "Quand vous n'êtes pas d'accord avec votre hiérarchie :",
    forDominants: ['D', 'C'],
    options: [
      { label: "Je construis un argumentaire factuel imparable et je le présente", favors: ['evaluateur', 'investigateur', 'factuel'] },
      { label: "J'agis selon ma conviction et je m'excuse après si nécessaire", favors: ['competiteur', 'producteur'] },
      { label: "Je teste ma position auprès d'alliés avant de la défendre", favors: ['inspirateur', 'explorateur'] },
      { label: "Je documente précisément les risques de la décision actuelle", favors: ['formaliste', 'concretiseur', 'technicien'] },
    ],
  },

  // ─── Questions pour discriminer dans le quadrant I ───────────────────
  {
    id: 107,
    text: "Votre manière de créer du lien avec un nouveau collègue :",
    forDominants: ['I', 'S'],
    options: [
      { label: "Je l'invite à déjeuner et j'apprends à le connaître personnellement", favors: ['promoteur', 'influenceur', 'coach'] },
      { label: "Je lui propose mon aide sur un projet concret dès les premiers jours", favors: ['pacificateur', 'planificateur', 'concretiseur'] },
      { label: "Je lui montre les ficelles et deviens son mentor informel", favors: ['coach', 'inspirateur', 'evaluateur'] },
      { label: "Je l'observe d'abord, puis je noue la relation progressivement", favors: ['factuel', 'formaliste', 'planificateur'] },
    ],
  },
  {
    id: 108,
    text: "Votre plus grande force en situation de crise :",
    forDominants: ['I', 'D'],
    options: [
      { label: "Je garde le cap et je prends les décisions que personne n'ose prendre", favors: ['competiteur', 'producteur', 'concretiseur'] },
      { label: "Je maintiens le moral de l'équipe et la cohésion du groupe", favors: ['promoteur', 'coach', 'pacificateur'] },
      { label: "Je trouve des solutions créatives auxquelles personne n'avait pensé", favors: ['explorateur', 'inspirateur', 'influenceur'] },
      { label: "J'analyse froidement la situation et j'identifie la cause racine", favors: ['investigateur', 'factuel', 'technicien'] },
    ],
  },

  // ─── Questions pour discriminer dans le quadrant S ───────────────────
  {
    id: 109,
    text: "Dans un contexte de changement organisationnel :",
    forDominants: ['S', 'C'],
    options: [
      { label: "Je veille à ce que personne ne soit laissé de côté dans la transition", favors: ['pacificateur', 'coach'] },
      { label: "Je m'assure que les nouveaux process sont documentés et clairs", favors: ['planificateur', 'formaliste'] },
      { label: "Je m'adapte en silence et j'observe avant de m'engager", favors: ['factuel', 'investigateur'] },
      { label: "Je prends le lead pour structurer la transition de A à Z", favors: ['evaluateur', 'concretiseur'] },
    ],
  },
  {
    id: 110,
    text: "Ce qui vous donne le plus de satisfaction professionnelle :",
    forDominants: ['S', 'I'],
    options: [
      { label: "Voir un collaborateur progresser grâce à mon accompagnement", favors: ['coach', 'pacificateur'] },
      { label: "Livrer un projet complexe dans les temps et sans accroc", favors: ['planificateur', 'concretiseur', 'producteur'] },
      { label: "Créer une dynamique d'équipe où tout le monde s'épanouit", favors: ['promoteur', 'influenceur', 'coach'] },
      { label: "Être reconnu pour mon expertise et la qualité de mon travail", favors: ['technicien', 'formaliste', 'factuel'] },
    ],
  },

  // ─── Questions pour discriminer dans le quadrant C ───────────────────
  {
    id: 111,
    text: "Quand vous repérez une erreur dans le travail d'un collègue :",
    forDominants: ['C', 'D'],
    options: [
      { label: "Je la corrige moi-même discrètement", favors: ['concretiseur', 'formaliste'] },
      { label: "Je la signale avec précision et je propose une correction", favors: ['investigateur', 'factuel', 'evaluateur'] },
      { label: "J'en fais un cas d'école pour améliorer le process global", favors: ['technicien', 'evaluateur'] },
      { label: "Je choisis le bon moment pour en parler sans blesser", favors: ['coach', 'pacificateur', 'planificateur'] },
    ],
  },
  {
    id: 112,
    text: "Votre rapport à l'expertise et à l'apprentissage :",
    forDominants: ['C', 'S'],
    options: [
      { label: "Je suis un expert profond — je creuse un sujet jusqu'au bout", favors: ['technicien', 'investigateur'] },
      { label: "Je suis un généraliste rigoureux — je maîtrise les fondamentaux de chaque sujet", favors: ['factuel', 'formaliste'] },
      { label: "J'apprends en faisant — la théorie m'ennuie sans la pratique", favors: ['concretiseur', 'producteur', 'explorateur'] },
      { label: "J'apprends en transmettant — enseigner me force à structurer", favors: ['coach', 'evaluateur', 'planificateur'] },
    ],
  },
]

// ─── PROFILS PRINCIPAUX (descriptions, forces, axes) ──────────────────────

export const profiles: Record<ProfileKey, {
  name: string; letter: ProfileKey; tagline: string
  paragraphs: TextSegment[][]
  strengths: string[]; growth: string[]; famous: string[]
  // Message Phase 1 — version courte avant Phase 2
  teaser: string
}> = {
  D: {
    name: 'Dominant', letter: 'D', tagline: 'Le Conducteur',
    teaser: "Vous foncez, vous décidez, vous menez. Mais quel type de leader êtes-vous exactement ?",
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
    teaser: "Vous connectez, vous motivez, vous fédérez. Mais de quelle manière influencez-vous vraiment ?",
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
        { text: " vous permettra de transformer votre potentiel d'influenceur naturel en véritable force de résultats durables. " },
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
    teaser: "Vous soutenez, vous stabilisez, vous construisez dans la durée. Mais quel est votre mode d'accompagnement ?",
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
    teaser: "Vous analysez, vous structurez, vous garantissez la qualité. Mais quel est votre style d'expertise ?",
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

// ─── BLEND TEXTS ──────────────────────────────────────────────────────────

export const blendTexts: Partial<Record<string, string>> = {
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

// ─── MESSAGES AKINATOR PAR PROFIL DOMINANT ─────────────────────────────────
// Utilisés en Phase 1 (avant Phase 2) pour la bulle du mage

export const akinatorByDominant: Record<ProfileKey, string> = {
  D: "Alors comme ça, vous êtes le genre à décider en 3 secondes pendant que les autres font encore le tour de table ? Je vois ce profil tous les jours en formation. Votre force, c'est l'action. Votre angle mort ? Les gens que vous laissez derrière dans le virage. On peut travailler là-dessus — si vous avez 5 minutes (je sais que vous n'en avez que 2).",
  I: "Vous êtes l'énergie de la salle, celui ou celle qui relance la conversation quand ça s'enlise. Tout le monde vous apprécie... mais quand il faut rester 2 heures seul(e) sur un rapport Excel, c'est un autre combat. Je connais bien ce profil — et je sais comment transformer votre talent relationnel en résultats concrets.",
  S: "Vous êtes le pilier silencieux de votre équipe. Celui ou celle sur qui tout repose — mais que personne ne voit vraiment. Quand un conflit éclate, c'est vous qui faites tampon. Quand quelqu'un démissionne, c'est vous qui tenez le fort. Le problème ? Vous ne savez pas dire non. Et ça vous coûte cher. Parlons-en.",
  C: "Votre boîte mail est triée, vos fichiers sont nommés, et vous avez repéré 3 erreurs dans ce test (oui, j'exagère — mais à peine). Vous êtes l'expert que tout le monde consulte en dernier recours. Le défi ? Apprendre à communiquer votre analyse aux gens pressés sans qu'ils décrochent à la diapo 2.",
}
