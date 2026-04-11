'use client'
import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Lang = 'en' | 'fr'

const translations = {
  en: {
    nav: {
      home: 'Home',
      formations: 'Training',
      cv: 'Profile',
      contact: 'Contact',
    },
    hero: {
      badge: 'Trainer & Consultant',
      headline: 'Transform your business by acting on what matters',
      subtitle:
        'From strategic diagnosis to concrete HR transformations — I help companies navigate their challenges by building lasting, engaging company cultures.',
      cta: 'Get in touch',
      disc: 'Take the DISC Test',
      discTeaser: 'Discover your DISC profile',
      discCta: 'Start the free test',
    },
    formations: {
      label: 'Training Programs',
      title: 'Tailored programs for your teams',
      subtitle:
        'Operational, bilingual, and adapted to your context. Each module is customizable.',
      items: [
        {
          title: 'HR & Employer Brand',
          description:
            'Align internal culture and external image to attract and retain talent. Your employees become your first ambassadors.',
        },
        {
          title: 'Professional Posture',
          description:
            'Gestures, eye contact, public speaking. The keys to immediate impact in meetings, interviews, or with demanding clients.',
        },
        {
          title: 'Psychosocial Risk Prevention',
          description:
            'Identify weak signals and act before crisis hits. An operational format for frontline managers.',
        },
        {
          title: 'Business Strategy',
          description:
            'From diagnosis to concrete action plan. Prioritize, align teams, and drive your growth with clarity.',
        },
        {
          title: 'Soft Skills',
          description:
            'Active listening, non-violent communication, conflict management. The human skills that truly make the difference.',
        },
      ],
    },
    cv: {
      label: 'Profile',
      title: 'A decade of bilingual coaching & training',
      experienceLabel: 'Experience',
      educationLabel: 'Education',
      experiences: [
        {
          role: 'Independent Trainer',
          company: 'Freelance',
          period: '2022 – present',
          description:
            'Design and delivery of tailored training programs in leadership, HR, and soft skills for companies and public institutions.',
        },
        {
          role: 'Co-Founder',
          company: 'Mantractif',
          period: '2023 – present',
          description:
            'Co-creation of a coaching and training company based in Île-de-France, focused on professional transformation.',
        },
        {
          role: 'Sports & Performance Coach',
          company: 'Independent — Innsbruck',
          period: '2018 – 2021',
          description:
            'Individual and group coaching combining performance methods with mental development techniques.',
        },
      ],
      education: [
        { degree: 'Change Management Certification', school: 'ESSEC', year: '2026' },
        { degree: 'Agile Method for Change Management', school: 'Excellence Formation', year: '2024' },
        { degree: 'BPJEPS AF', school: 'VAE', year: '2021' },
        { degree: 'M2 Intercultural Behavior Management', school: 'MCI Innsbruck', year: '2018' },
        { degree: 'M1 International Business (PGE)', school: 'Rennes School of Business', year: '2017' },
      ],
    },
    contact: {
      label: 'Contact',
      title: "Let's work together",
      subtitle:
        'A project, a question, a partnership idea? Send me a message and I will get back to you within 48 hours.',
      name: 'Name',
      namePlaceholder: 'Your full name',
      email: 'Email',
      emailPlaceholder: 'your@email.com',
      message: 'Message',
      messagePlaceholder: 'Tell me about your project or question...',
      send: 'Send message',
      sending: 'Sending...',
      success: 'Message sent! I will get back to you shortly.',
      error: 'An error occurred. Please try again or write to hello@clementboule.com',
    },
    footer: {
      tagline: 'Trainer · Consultant · Coach',
      mentions: 'Legal Notice',
      privacy: 'Privacy Policy',
    },
  },
  fr: {
    nav: {
      home: 'Accueil',
      formations: 'Formations',
      cv: 'Parcours',
      contact: 'Contact',
    },
    hero: {
      badge: 'Formateur & Consultant',
      headline: 'Transformez votre entreprise en agissant sur ce qui compte',
      subtitle:
        "Du diagnostic stratégique aux transformations RH concrètes — j'accompagne les entreprises à traverser leurs défis en construisant des cultures d'entreprise durables et engageantes.",
      cta: 'Me contacter',
      disc: 'Faire le test DISC',
      discTeaser: 'Découvrez votre profil DISC',
      discCta: 'Commencer le test gratuit',
    },
    formations: {
      label: 'Formations',
      title: 'Des programmes adaptés à vos équipes',
      subtitle:
        'Opérationnels, bilingues et adaptés à votre contexte. Chaque module est personnalisable.',
      items: [
        {
          title: 'RH & Marque Employeur',
          description:
            "Aligner culture interne et image externe pour attirer et fidéliser les talents. Vos collaborateurs deviennent vos premiers ambassadeurs.",
        },
        {
          title: 'Posture Professionnelle',
          description:
            "Gestes, regard, prise de parole. Les clés d'un impact immédiat en réunion, en entretien ou face à un client exigeant.",
        },
        {
          title: 'Prévention des RPS',
          description:
            'Identifier les signaux faibles et agir avant la crise. Un format opérationnel pour les managers en première ligne.',
        },
        {
          title: "Stratégie d'Entreprise",
          description:
            "Du diagnostic au plan d'action concret. Prioriser, aligner les équipes et piloter votre croissance avec clarté.",
        },
        {
          title: 'Soft Skills',
          description:
            'Écoute active, communication non violente, gestion des conflits. Les compétences humaines qui font vraiment la différence.',
        },
      ],
    },
    cv: {
      label: 'Parcours',
      title: 'Une décennie de coaching et de formation bilingue',
      experienceLabel: 'Expériences',
      educationLabel: 'Formation',
      experiences: [
        {
          role: 'Formateur Indépendant',
          company: 'Freelance',
          period: '2022 – présent',
          description:
            'Conception et animation de formations sur-mesure en leadership, RH et soft skills pour entreprises et collectivités.',
        },
        {
          role: 'Co-Fondateur',
          company: 'Mantractif',
          period: '2023 – présent',
          description:
            "Co-création d'une société de coaching et formation basée en Île-de-France, centrée sur la transformation professionnelle.",
        },
        {
          role: 'Coach Sportif & Performance',
          company: 'Indépendant — Innsbruck',
          period: '2018 – 2021',
          description:
            'Coaching individuel et collectif alliant méthodes de performance et techniques de développement mental.',
        },
      ],
      education: [
        { degree: 'Certification Management du Changement', school: 'ESSEC', year: '2026' },
        { degree: 'La méthode Agile pour accompagner le changement', school: 'Excellence Formation', year: '2024' },
        { degree: 'BPJEPS AF', school: 'VAE', year: '2021' },
        { degree: 'Master 2 Intercultural Behavior Management', school: 'MCI Innsbruck', year: '2018' },
        { degree: 'Master 1 PGE International Business', school: 'Rennes School of Business', year: '2017' },
      ],
    },
    contact: {
      label: 'Contact',
      title: 'Travaillons ensemble',
      subtitle:
        'Un projet, une question, une idée de partenariat ? Envoyez-moi un message, je reviens vers vous sous 48h.',
      name: 'Nom',
      namePlaceholder: 'Votre nom complet',
      email: 'Email',
      emailPlaceholder: 'votre@email.com',
      message: 'Message',
      messagePlaceholder: 'Parlez-moi de votre projet ou votre question...',
      send: 'Envoyer le message',
      sending: 'Envoi en cours...',
      success: 'Message envoyé ! Je reviens vers vous rapidement.',
      error: 'Une erreur est survenue. Réessayez ou écrivez à hello@clementboule.com',
    },
    footer: {
      tagline: 'Formateur · Consultant · Coach',
      mentions: 'Mentions légales',
      privacy: 'Politique de confidentialité',
    },
  },
}

type Translations = typeof translations.en

const LanguageContext = createContext<{
  lang: Lang
  setLang: (l: Lang) => void
  t: Translations
}>({
  lang: 'en',
  setLang: () => {},
  t: translations.en,
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en')

  useEffect(() => {
    const saved = localStorage.getItem('lang') as Lang
    if (saved === 'fr' || saved === 'en') setLangState(saved)
  }, [])

  const setLang = (l: Lang) => {
    setLangState(l)
    localStorage.setItem('lang', l)
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLang = () => useContext(LanguageContext)
