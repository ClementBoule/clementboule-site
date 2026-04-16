'use client'
import { useEffect } from 'react'
import { useLang } from './LanguageContext'

/* ── Shared gradient / accent data ─────────────────────────────────────── */
export const GRADIENTS = [
  'from-[#3D6DB8] to-[#6B9ED4]',
  'from-[#E8836A] to-[#F5B08C]',
  'from-[#2E9E84] to-[#6FCFBB]',
  'from-[#7B5FC5] to-[#B09FE5]',
  'from-[#D4874A] to-[#F0BA70]',
  'from-[#7C1A2E] to-[#B04060]',
]

export const SHADOW_COLORS = [
  'shadow-[#3D6DB8]/25 hover:shadow-[#3D6DB8]/35',
  'shadow-[#E8836A]/25 hover:shadow-[#E8836A]/35',
  'shadow-[#2E9E84]/25 hover:shadow-[#2E9E84]/35',
  'shadow-[#7B5FC5]/25 hover:shadow-[#7B5FC5]/35',
  'shadow-[#D4874A]/25 hover:shadow-[#D4874A]/35',
  'shadow-[#7C1A2E]/25 hover:shadow-[#7C1A2E]/35',
]

const ACCENTS = ['#3D6DB8', '#E8836A', '#2E9E84', '#7B5FC5', '#D4874A', '#7C1A2E']

export const PHOTOS = [
  'https://images.unsplash.com/photo-1542744173-8e7e53415bb0',
  'https://images.unsplash.com/photo-1560439513-74b037a25d84',
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2',
  'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40',
  'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca',
  'https://images.unsplash.com/photo-1552664730-d307ca884978',
]

export const OVERLAYS = [
  'rgba(29,60,120,0.65)',
  'rgba(85,45,125,0.65)',
  'rgba(18,85,70,0.65)',
  'rgba(95,48,18,0.65)',
  'rgba(20,58,98,0.65)',
  'rgba(130,25,45,0.70)',
]

/* ── SVG Illustrations (shared with FormationCard) ─────────────────────── */
export const ILLUSTRATIONS = [
  /* 1 – RH & Marque Employeur */
  <svg key="rh" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M60 4 L70 10 L70 22 L60 28 L50 22 L50 10 Z" stroke="white" strokeWidth="1" strokeOpacity="0.18"/>
    <path d="M70 22 L80 28 L80 40 L70 46 L60 40 L60 28 Z" stroke="white" strokeWidth="1" strokeOpacity="0.14"/>
    <path d="M50 22 L60 28 L60 40 L50 46 L40 40 L40 28 Z" stroke="white" strokeWidth="1" strokeOpacity="0.14"/>
    <path d="M60 8 L62.2 14.8 L69.4 14.8 L63.6 19 L65.8 25.8 L60 21.6 L54.2 25.8 L56.4 19 L50.6 14.8 L57.8 14.8 Z" fill="white" fillOpacity="0.95"/>
    <circle cx="60" cy="50" r="11" fill="white" fillOpacity="0.92"/>
    <path d="M46 82 C46 68 52 62 60 62 C68 62 74 68 74 82" fill="white" fillOpacity="0.85"/>
    <circle cx="20" cy="56" r="8" fill="white" fillOpacity="0.6"/>
    <path d="M10 80 C10 70 14 65 20 65 C26 65 30 70 30 80" fill="white" fillOpacity="0.5"/>
    <circle cx="100" cy="56" r="8" fill="white" fillOpacity="0.6"/>
    <path d="M90 80 C90 70 94 65 100 65 C106 65 110 70 110 80" fill="white" fillOpacity="0.5"/>
    <path d="M30 63 Q43 55 48 52" stroke="white" strokeWidth="1.8" strokeOpacity="0.4" strokeLinecap="round"/>
    <path d="M90 63 Q77 55 72 52" stroke="white" strokeWidth="1.8" strokeOpacity="0.4" strokeLinecap="round"/>
    <circle cx="39" cy="59" r="1.8" fill="white" fillOpacity="0.4"/>
    <circle cx="81" cy="59" r="1.8" fill="white" fillOpacity="0.4"/>
  </svg>,

  /* 2 – Posture Professionnelle */
  <svg key="posture" viewBox="0 0 120 110" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 86 Q12 55 32 22" stroke="white" strokeWidth="1.8" strokeOpacity="0.2" strokeLinecap="round"/>
    <path d="M22 92 Q-2 55 22 16" stroke="white" strokeWidth="1" strokeOpacity="0.1" strokeLinecap="round"/>
    <path d="M88 86 Q108 55 88 22" stroke="white" strokeWidth="1.8" strokeOpacity="0.2" strokeLinecap="round"/>
    <path d="M98 92 Q122 55 98 16" stroke="white" strokeWidth="1" strokeOpacity="0.1" strokeLinecap="round"/>
    <circle cx="60" cy="22" r="12" fill="white" fillOpacity="0.95"/>
    <path d="M47 42 L52 37 L68 37 L73 42 L70 68 L50 68 Z" fill="white" fillOpacity="0.9"/>
    <path d="M50 48 L22 40" stroke="white" strokeWidth="4.5" strokeLinecap="round"/>
    <path d="M70 48 L98 40" stroke="white" strokeWidth="4.5" strokeLinecap="round"/>
    <path d="M54 68 L48 96" stroke="white" strokeWidth="4.5" strokeLinecap="round"/>
    <path d="M66 68 L72 96" stroke="white" strokeWidth="4.5" strokeLinecap="round"/>
    <path d="M20 40 L21.2 43.8 L25 45 L21.2 46.2 L20 50 L18.8 46.2 L15 45 L18.8 43.8 Z" fill="white" fillOpacity="0.6"/>
    <path d="M100 38 L101 41 L104 42 L101 43 L100 46 L99 43 L96 42 L99 41 Z" fill="white" fillOpacity="0.6"/>
  </svg>,

  /* 3 – Prévention RPS */
  <svg key="rps" viewBox="0 0 120 110" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M60 5 L97 23 L97 65 C97 90 60 108 60 108 C60 108 23 90 23 65 L23 23 Z" fill="white" fillOpacity="0.1"/>
    <path d="M60 12 L90 27 L90 63 C90 84 60 100 60 100 C60 100 30 84 30 63 L30 27 Z" fill="white" fillOpacity="0.88"/>
    <circle cx="60" cy="44" r="9.5" fill="#2E9E84" fillOpacity="0.65"/>
    <path d="M49 72 C49 63 54 57 60 57 C66 57 71 63 71 72" fill="#2E9E84" fillOpacity="0.65"/>
    <path d="M36 62 L42 62 L46 52 L50 72 L55 57 L60 62 L84 62" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.85"/>
    <path d="M14 40 L20 28 L17 34 L23 22" stroke="white" strokeWidth="1.8" strokeOpacity="0.4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M106 40 L100 28 L103 34 L97 22" stroke="white" strokeWidth="1.8" strokeOpacity="0.4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,

  /* 4 – Stratégie & Vision */
  <svg key="strategy" viewBox="0 0 120 110" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="18" y1="86" x2="95" y2="86" stroke="white" strokeOpacity="0.14" strokeWidth="1"/>
    <path d="M18 90 L46 34 L60 16 L74 34 L102 90 Z" fill="white" fillOpacity="0.88"/>
    <path d="M60 16 L70 33 L50 33 Z" fill="white" fillOpacity="0.35"/>
    <path d="M28 86 L38 70 L46 55 L54 40 L60 26" stroke="#7B5FC5" strokeWidth="2" strokeOpacity="0.5" strokeDasharray="3 3" strokeLinecap="round"/>
    <line x1="60" y1="16" x2="60" y2="4" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <path d="M60 4 L73 8.5 L60 13 Z" fill="white" fillOpacity="0.95"/>
    <circle cx="97" cy="22" r="13" fill="white" fillOpacity="0.08" stroke="white" strokeWidth="1" strokeOpacity="0.25"/>
    <line x1="97" y1="11" x2="97" y2="33" stroke="white" strokeWidth="1.5" strokeOpacity="0.55"/>
    <line x1="86" y1="22" x2="108" y2="22" stroke="white" strokeWidth="1.5" strokeOpacity="0.55"/>
    <circle cx="97" cy="22" r="2.8" fill="white" fillOpacity="0.9"/>
    <path d="M97 11 L100 17 L97 14 L94 17 Z" fill="white" fillOpacity="0.9"/>
  </svg>,

  /* 5 – Soft Skills */
  <svg key="soft" viewBox="0 0 120 110" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="60" cy="54" r="42" stroke="white" strokeOpacity="0.1" strokeWidth="1.2"/>
    <circle cx="60" cy="54" r="28" stroke="white" strokeOpacity="0.16" strokeWidth="1.2"/>
    <circle cx="60" cy="54" r="15" stroke="white" strokeOpacity="0.22" strokeWidth="1.2"/>
    <circle cx="22" cy="36" r="10" fill="white" fillOpacity="0.82"/>
    <path d="M10 72 C10 58 15 50 22 50 C29 50 34 58 34 72" fill="white" fillOpacity="0.75"/>
    <circle cx="98" cy="36" r="10" fill="white" fillOpacity="0.82"/>
    <path d="M86 72 C86 58 91 50 98 50 C105 50 110 58 110 72" fill="white" fillOpacity="0.75"/>
    <path d="M32 58 Q46 54 50 54" stroke="white" strokeWidth="1.8" strokeOpacity="0.45" strokeLinecap="round"/>
    <path d="M88 58 Q74 54 70 54" stroke="white" strokeWidth="1.8" strokeOpacity="0.45" strokeLinecap="round"/>
    <path d="M60 66 C60 66 42 54 42 43 C42 36.4 47.4 31 54 31 C57.3 31 60 33.5 60 33.5 C60 33.5 62.7 31 66 31 C72.6 31 78 36.4 78 43 C78 54 60 66 60 66 Z" fill="white" fillOpacity="0.95"/>
  </svg>,

  /* 6 – Spine'Up — Leadership Managérial */
  <svg key="spineup" viewBox="0 0 120 110" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="16" y="80" width="14" height="16" rx="3" fill="white" fillOpacity="0.28"/>
    <rect x="35" y="64" width="14" height="32" rx="3" fill="white" fillOpacity="0.45"/>
    <rect x="54" y="47" width="14" height="49" rx="3" fill="white" fillOpacity="0.65"/>
    <rect x="73" y="29" width="14" height="67" rx="3" fill="white" fillOpacity="0.82"/>
    <rect x="92" y="11" width="14" height="85" rx="3" fill="white" fillOpacity="0.95"/>
    <path d="M99 5 L100.5 9.5 L105 9.5 L101.5 12.2 L102.8 16.8 L99 14 L95.2 16.8 L96.5 12.2 L93 9.5 L97.5 9.5 Z" fill="white" fillOpacity="0.95"/>
    <path d="M20 88 Q43 72 57 55 Q71 38 93 19" stroke="white" strokeWidth="2" strokeOpacity="0.35" strokeLinecap="round" strokeDasharray="4 3"/>
    <circle cx="23" cy="88" r="2.5" fill="white" fillOpacity="0.5"/>
    <circle cx="57" cy="55" r="2.5" fill="white" fillOpacity="0.5"/>
  </svg>,
]

/* ── Formation details ────────────────────────────────────────────────────── */
interface ScheduleEntry { label: string; labelEn: string; items: string[]; itemsEn: string[] }
interface FormationDetail {
  title: string; titleEn: string
  objectives: string[]; objectivesEn: string[]
  format: string; formatEn: string
  duration: string
  audience: string; audienceEn: string
  schedule: ScheduleEntry[]
  contactSubject: string; contactMessage: string
}

export const FORMATION_DETAILS: FormationDetail[] = [
  /* 1 – RH & Marque Employeur */
  {
    title: 'RH & Marque Employeur',
    titleEn: 'HR & Employer Brand',
    objectives: [
      'Définir et valoriser votre marque employeur',
      'Optimiser les processus de recrutement',
      'Fidéliser et engager les collaborateurs',
      'Structurer une communication RH cohérente',
    ],
    objectivesEn: [
      'Define and promote your employer brand',
      'Optimize your recruitment pipeline',
      'Retain and engage your people',
      'Build consistent, credible HR communication',
    ],
    format: 'Inter / Intra-entreprise',
    formatEn: 'In-house / Open enrollment',
    duration: '2 jours · 14h',
    audience: 'DRH, RRH, Responsables recrutement',
    audienceEn: 'HR Directors, HR Managers, Recruiters',
    schedule: [
      {
        label: 'Jour 1 — Matin', labelEn: 'Day 1 — Morning',
        items: ['Fondamentaux de la marque employeur', 'Audit de l\'existant & analyse concurrentielle'],
        itemsEn: ['Employer brand fundamentals', 'Existing audit & competitive analysis'],
      },
      {
        label: 'Jour 1 — Après-midi', labelEn: 'Day 1 — Afternoon',
        items: ['Positionnement & valeurs employeur', 'Cas pratiques en sous-groupes'],
        itemsEn: ['Positioning & employer values', 'Group case studies'],
      },
      {
        label: 'Jour 2 — Matin', labelEn: 'Day 2 — Morning',
        items: ['Stratégie de contenu RH', 'Outils digitaux et canaux de diffusion'],
        itemsEn: ['HR content strategy', 'Digital tools & distribution channels'],
      },
      {
        label: 'Jour 2 — Après-midi', labelEn: 'Day 2 — Afternoon',
        items: ['Plan d\'action personnalisé', 'Restitution et engagements'],
        itemsEn: ['Personalised action plan', 'Wrap-up & commitments'],
      },
    ],
    contactSubject: 'Formation RH & Marque Employeur',
    contactMessage: 'Bonjour Clément,\n\nJe suis intéressé(e) par votre formation RH & Marque Employeur.\nPouvez-vous m\'envoyer les modalités (dates, tarifs, format intra/inter) ?\n\nCordialement,',
  },

  /* 2 – Posture Professionnelle & Prise de Parole */
  {
    title: 'Posture Professionnelle',
    titleEn: 'Professional Posture & Public Speaking',
    objectives: [
      'Affirmer sa posture de leader avec authenticité',
      'Développer son impact à l\'oral (voix, regard, geste)',
      'Gérer le stress et les situations de prise de parole',
      'Travailler sa communication non-verbale',
    ],
    objectivesEn: [
      'Project leadership presence authentically',
      'Develop vocal and physical impact',
      'Manage stress in high-stakes speaking situations',
      'Master non-verbal communication',
    ],
    format: 'Inter / Intra · Individuel ou groupe',
    formatEn: 'In-house / Open enrollment · Individual or group',
    duration: '1 jour · 7h',
    audience: 'Managers, cadres, commerciaux',
    audienceEn: 'Managers, executives, sales professionals',
    schedule: [
      {
        label: 'Matin', labelEn: 'Morning',
        items: ['Ancrage corporel & présence', 'Techniques vocales et de respiration', 'Langage non-verbal et regard'],
        itemsEn: ['Body grounding & presence', 'Vocal & breathing techniques', 'Non-verbal language & eye contact'],
      },
      {
        label: 'Après-midi', labelEn: 'Afternoon',
        items: ['Mises en situation filmées', 'Débriefing individuel & feedback', 'Plan de progression personnel'],
        itemsEn: ['Recorded speaking exercises', 'Individual debrief & feedback', 'Personal progression plan'],
      },
    ],
    contactSubject: 'Formation Posture Professionnelle & Prise de Parole',
    contactMessage: 'Bonjour Clément,\n\nJe souhaite en savoir plus sur la formation Posture Professionnelle & Prise de Parole.\nPouvez-vous me contacter pour discuter du format adapté à mon profil ?\n\nCordialement,',
  },

  /* 3 – Prévention des RPS */
  {
    title: 'Prévention des RPS',
    titleEn: 'Psychosocial Risk Prevention',
    objectives: [
      'Identifier les facteurs de risques psychosociaux',
      'Mettre en place un plan de prévention concret',
      'Former les managers aux signaux d\'alerte',
      'Créer une culture de bien-être au travail',
    ],
    objectivesEn: [
      'Identify psychosocial risk factors',
      'Build a concrete prevention plan',
      'Train managers to spot early warning signs',
      'Foster a healthy workplace culture',
    ],
    format: 'Intra-entreprise',
    formatEn: 'In-house only',
    duration: '1 jour · 7h',
    audience: 'Managers, DRH, représentants du personnel',
    audienceEn: 'Managers, HR Directors, employee representatives',
    schedule: [
      {
        label: 'Matin', labelEn: 'Morning',
        items: ['Définitions & cadre légal', 'Cartographie des risques en équipe', 'Signaux d\'alerte & indicateurs'],
        itemsEn: ['Definitions & legal framework', 'Team risk mapping', 'Warning signs & indicators'],
      },
      {
        label: 'Après-midi', labelEn: 'Afternoon',
        items: ['Outils de prévention primaire et secondaire', 'Cas pratiques & jeux de rôles', 'Construction du plan d\'action'],
        itemsEn: ['Primary & secondary prevention tools', 'Case studies & role plays', 'Action plan development'],
      },
    ],
    contactSubject: 'Formation Prévention des RPS',
    contactMessage: 'Bonjour Clément,\n\nNous souhaitons mettre en place une formation sur la prévention des risques psychosociaux dans notre organisation.\nPouvez-vous nous contacter pour discuter d\'une intervention intra-entreprise ?\n\nCordialement,',
  },

  /* 4 – Stratégie & Vision Business */
  {
    title: 'Stratégie & Vision Business',
    titleEn: 'Business Strategy & Vision',
    objectives: [
      'Construire une vision stratégique claire et mobilisatrice',
      'Aligner équipes et objectifs autour d\'une direction commune',
      'Développer la pensée systémique et l\'analyse stratégique',
      'Piloter le changement avec méthode et agilité',
    ],
    objectivesEn: [
      'Build a clear and compelling strategic vision',
      'Align teams and goals around a shared direction',
      'Develop systemic thinking and strategic analysis',
      'Lead change with method and agility',
    ],
    format: 'Intra-entreprise · Séminaire',
    formatEn: 'In-house · Executive seminar',
    duration: '2 jours · 14h',
    audience: 'Dirigeants, cadres supérieurs, chefs de projet',
    audienceEn: 'Executives, senior managers, project leaders',
    schedule: [
      {
        label: 'Jour 1 — Matin', labelEn: 'Day 1 — Morning',
        items: ['Outils de diagnostic stratégique (SWOT, PESTEL)', 'Lecture de l\'environnement concurrentiel'],
        itemsEn: ['Strategic diagnostic tools (SWOT, PESTEL)', 'Competitive environment analysis'],
      },
      {
        label: 'Jour 1 — Après-midi', labelEn: 'Day 1 — Afternoon',
        items: ['Définition de la vision et des priorités', 'Alignement managérial en atelier'],
        itemsEn: ['Vision & priorities definition', 'Management alignment workshop'],
      },
      {
        label: 'Jour 2 — Matin', labelEn: 'Day 2 — Morning',
        items: ['Planification & OKR (Objectives & Key Results)', 'Indicateurs de pilotage et tableaux de bord'],
        itemsEn: ['Planning & OKRs', 'Performance indicators & dashboards'],
      },
      {
        label: 'Jour 2 — Après-midi', labelEn: 'Day 2 — Afternoon',
        items: ['Conduite du changement & communication', 'Plan d\'action 90 jours & engagement'],
        itemsEn: ['Change management & communication', '90-day action plan & commitment'],
      },
    ],
    contactSubject: 'Formation Stratégie & Vision Business',
    contactMessage: 'Bonjour Clément,\n\nNous souhaitons organiser un séminaire Stratégie & Vision Business pour notre équipe dirigeante.\nPouvez-vous nous contacter pour un échange préalable ?\n\nCordialement,',
  },

  /* 5 – Soft Skills & Intelligence Relationnelle */
  {
    title: 'Soft Skills & Intelligence Relationnelle',
    titleEn: 'Soft Skills & Relational Intelligence',
    objectives: [
      'Renforcer sa communication interpersonnelle',
      'Développer son intelligence émotionnelle',
      'Améliorer la coopération et la cohésion en équipe',
      'Gérer les conflits avec assertivité',
    ],
    objectivesEn: [
      'Strengthen interpersonal communication',
      'Develop emotional intelligence',
      'Improve team cooperation and cohesion',
      'Handle conflicts assertively',
    ],
    format: 'Inter / Intra · Cohésion d\'équipe',
    formatEn: 'In-house / Open enrollment · Team building',
    duration: '2 jours · 14h',
    audience: 'Tous collaborateurs, équipes managériales',
    audienceEn: 'All employees, management teams',
    schedule: [
      {
        label: 'Jour 1 — Matin', labelEn: 'Day 1 — Morning',
        items: ['Connaissance de soi & styles de communication', 'Modèle DISC appliqué en équipe'],
        itemsEn: ['Self-awareness & communication styles', 'DISC model applied in team'],
      },
      {
        label: 'Jour 1 — Après-midi', labelEn: 'Day 1 — Afternoon',
        items: ['Écoute active & communication non-violente', 'Exercices de feedback constructif'],
        itemsEn: ['Active listening & non-violent communication', 'Constructive feedback exercises'],
      },
      {
        label: 'Jour 2 — Matin', labelEn: 'Day 2 — Morning',
        items: ['Intelligence émotionnelle & régulation', 'Empathie et posture de soutien'],
        itemsEn: ['Emotional intelligence & regulation', 'Empathy and supportive posture'],
      },
      {
        label: 'Jour 2 — Après-midi', labelEn: 'Day 2 — Afternoon',
        items: ['Gestion des conflits & assertivité', 'Coopération & plan d\'engagement collectif'],
        itemsEn: ['Conflict management & assertiveness', 'Team cooperation & collective commitment plan'],
      },
    ],
    contactSubject: 'Formation Soft Skills & Intelligence Relationnelle',
    contactMessage: 'Bonjour Clément,\n\nJe suis intéressé(e) par la formation Soft Skills & Intelligence Relationnelle.\nPouvez-vous me donner plus d\'informations sur les dates et modalités ?\n\nCordialement,',
  },

  /* 6 – Spine'Up — Leadership Managérial */
  {
    title: "Spine'Up — Leadership Managérial",
    titleEn: "Spine'Up — Managerial Leadership",
    objectives: [
      'Construire une posture de leader authentique et impactante',
      'Développer son autorité naturelle et son assertivité',
      'Maîtriser les outils du manager-coach',
      'Engager et motiver ses équipes dans la durée',
    ],
    objectivesEn: [
      'Build an authentic and impactful leadership posture',
      'Develop natural authority and assertiveness',
      'Master the manager-coach toolkit',
      'Engage and motivate teams over the long term',
    ],
    format: 'Intra / Coaching individuel',
    formatEn: 'In-house / Individual coaching',
    duration: '2 jours · 14h',
    audience: 'Managers, directeurs, cadres en évolution',
    audienceEn: 'Managers, directors, evolving executives',
    schedule: [
      {
        label: 'Jour 1 — Matin', labelEn: 'Day 1 — Morning',
        items: ['Diagnostic de posture managériale', 'Styles de leadership & impact'],
        itemsEn: ['Managerial posture diagnostic', 'Leadership styles & impact'],
      },
      {
        label: 'Jour 1 — Après-midi', labelEn: 'Day 1 — Afternoon',
        items: ['Communication ascendante et descendante', 'Gestion des situations difficiles'],
        itemsEn: ['Upward & downward communication', 'Handling difficult situations'],
      },
      {
        label: 'Jour 2 — Matin', labelEn: 'Day 2 — Morning',
        items: ['Posture de manager-coach', 'Feedback, reconnaissance et développement'],
        itemsEn: ['Manager-coach posture', 'Feedback, recognition & development'],
      },
      {
        label: 'Jour 2 — Après-midi', labelEn: 'Day 2 — Afternoon',
        items: ["Plan d'action personnel de leadership", 'Engagement et mise en pratique'],
        itemsEn: ['Personal leadership action plan', 'Commitment & implementation'],
      },
    ],
    contactSubject: "Formation Spine'Up — Leadership Managérial",
    contactMessage: "Bonjour Clément,\n\nJe suis intéressé(e) par le programme Spine'Up — Leadership Managérial.\nPouvez-vous me contacter pour discuter des modalités et d'un accompagnement personnalisé ?\n\nCordialement,",
  },
]

/* ── Helpers ─────────────────────────────────────────────────────────────── */
function buildContactURL(detail: FormationDetail): string {
  const p = new URLSearchParams()
  p.set('subject', detail.contactSubject)
  p.set('message', detail.contactMessage)
  return `/#contact?${p.toString()}`
}

/* ── Modal component ─────────────────────────────────────────────────────── */
interface Props {
  index: number
  onClose: () => void
}

export default function FormationModal({ index, onClose }: Props) {
  const { lang } = useLang()
  const detail = FORMATION_DETAILS[index]
  const gradient = GRADIENTS[index]
  const accent = ACCENTS[index]
  const illustration = ILLUSTRATIONS[index]
  const isFr = lang !== 'en'

  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  const title = isFr ? detail.title : detail.titleEn
  const objectives = isFr ? detail.objectives : detail.objectivesEn
  const format = isFr ? detail.format : detail.formatEn
  const audience = isFr ? detail.audience : detail.audienceEn

  return (
    /* Overlay */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(10,18,35,0.82)', backdropFilter: 'blur(6px)' }}
      onClick={onClose}
    >
      {/* Card — stop propagation so inner clicks don't close */}
      <div
        className="relative w-full max-w-4xl max-h-[90vh] rounded-3xl overflow-hidden flex flex-col"
        style={{
          background: '#F8FBFF',
          boxShadow: `0 32px 80px -8px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.08)`,
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* ── Header gradient band ── */}
        <div className={`relative flex-shrink-0 bg-gradient-to-br ${gradient} px-8 pt-8 pb-6`}>
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all"
            aria-label="Fermer"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 2L14 14M14 2L2 14" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
            </svg>
          </button>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            {/* Illustration */}
            <div className="shrink-0 w-20 h-20 flex items-center justify-center drop-shadow-lg">
              <div style={{ width: 80, height: 80, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {illustration}
              </div>
            </div>

            <div className="flex-1">
              <p className="text-xs font-bold tracking-[0.18em] uppercase text-white/60 mb-1">
                {isFr ? 'FORMATION' : 'TRAINING'}
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">{title}</h2>

              {/* Key info badges */}
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-white/15 text-white/90">
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                    <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M6 3.5V6L7.5 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  {detail.duration}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-white/15 text-white/90">
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                    <rect x="1" y="2.5" width="10" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.4"/>
                    <path d="M1 5h10" stroke="currentColor" strokeWidth="1.2"/>
                    <path d="M4 1v3M8 1v3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                  </svg>
                  {format}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Scrollable body ── */}
        <div className="flex-1 overflow-y-auto">
          <div className="grid md:grid-cols-[1fr,1fr] gap-0 divide-y md:divide-y-0 md:divide-x divide-[#E5EAF3]">
            {/* Left: objectives + audience */}
            <div className="px-7 py-7">
              {/* Objectifs */}
              <p className="text-xs font-bold tracking-[0.16em] uppercase mb-4" style={{ color: accent }}>
                {isFr ? 'OBJECTIFS' : 'OBJECTIVES'}
              </p>
              <ul className="space-y-3">
                {objectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-white text-[10px] font-bold"
                      style={{ background: accent }}
                    >
                      ✓
                    </span>
                    <span className="text-sm text-[#1A2B4A]/75 leading-relaxed">{obj}</span>
                  </li>
                ))}
              </ul>

              {/* Public cible */}
              <div className="mt-7 pt-6 border-t border-[#E5EAF3]">
                <p className="text-xs font-bold tracking-[0.16em] uppercase mb-3" style={{ color: accent }}>
                  {isFr ? 'PUBLIC CIBLE' : 'TARGET AUDIENCE'}
                </p>
                <p className="text-sm text-[#1A2B4A]/70 leading-relaxed">{audience}</p>
              </div>
            </div>

            {/* Right: programme */}
            <div className="px-7 py-7">
              <p className="text-xs font-bold tracking-[0.16em] uppercase mb-4" style={{ color: accent }}>
                {isFr ? 'PROGRAMME' : 'SCHEDULE'}
              </p>
              <div className="space-y-4">
                {detail.schedule.map((entry, i) => (
                  <div key={i}>
                    <p className="text-xs font-semibold text-[#1A2B4A]/45 uppercase tracking-wide mb-2">
                      {isFr ? entry.label : entry.labelEn}
                    </p>
                    <ul className="space-y-1.5">
                      {(isFr ? entry.items : entry.itemsEn).map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-[#1A2B4A]/70 leading-snug">
                          <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: accent + '80' }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                    {i < detail.schedule.length - 1 && (
                      <div className="mt-4 border-t border-dashed border-[#E5EAF3]" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Footer CTA ── */}
        <div className="flex-shrink-0 border-t border-[#E5EAF3] px-7 py-5 bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-[#1A2B4A]">
              {isFr ? 'Cette formation vous intéresse ?' : 'Interested in this training?'}
            </p>
            <p className="text-xs text-[#1A2B4A]/45 mt-0.5">
              {isFr ? 'Je réponds sous 48h avec un devis personnalisé.' : 'I\'ll reply within 48h with a custom quote.'}
            </p>
          </div>
          <a
            href={buildContactURL(detail)}
            onClick={onClose}
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
            style={{ background: accent, boxShadow: `0 4px 16px ${accent}40` }}
          >
            {isFr ? 'Envoyer un message' : 'Send a message'}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}
