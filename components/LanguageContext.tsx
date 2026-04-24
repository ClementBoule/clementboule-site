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
      badge: 'Trainer, consultant & coach',
      headline: 'Transform your business by acting on what matters',
      subtitle: 'I train and coach managers and teams — in French and English. On the ground, not just in theory. Built with you, not pulled from a catalog.',
      cta: 'Get in touch',
      disc: 'Take the DISC Test',
      discTeaser: 'Discover your DISC profile',
      discCta: 'Start the free test',
    },
    formations: {
      label: 'Training Programs',
      title: 'Tailored programs for your teams',
      subtitle: 'Operational, bilingual, and adapted to your context. Each module is customizable.',
      items: [
        {
          title: 'HR & Employer Brand',
          description: 'Align internal culture and external image to attract and retain talent. Your employees become your first ambassadors.',
        },
        {
          title: 'Professional Posture',
          description: 'Gestures, eye contact, public speaking. The keys to immediate impact in meetings, interviews, or with demanding clients.',
        },
        {
          title: 'Psychosocial Risk Prevention',
          description: 'Identify weak signals and act before crisis hits. An operational format for frontline managers.',
        },
        {
          title: 'Business Strategy',
          description: 'From diagnosis to concrete action plan. Prioritize, align teams, and drive your growth with clarity.',
        },
        {
          title: 'Soft Skills',
          description: 'Active listening, non-violent communication, conflict management. The human skills that truly make the difference.',
        },
        {
          title: "Spine'Up — Managerial Leadership",
          description: "A structured program to develop the managerial posture of your employees. Build the right stance to lead with impact and grow your career with clarity and confidence.",
        },
      ],
    },
    topClients: {
      label: 'They trust me',
      subtitle: 'Companies and institutions I have had the privilege of supporting.',
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
          description: 'Design and delivery of tailored training programs in leadership, HR, and soft skills for companies and public institutions.',
        },
        {
          role: 'Co-Founder',
          company: 'Mantractif',
          period: '2023 – present',
          description: 'Co-creation of a coaching and training company based in Île-de-France, focused on professional transformation.',
        },
        {
          role: 'Sports & Performance Coach',
          company: 'Independent — Innsbruck',
          period: '2016 – 2021',
          description: 'Individual and group coaching combining performance methods with mental development techniques.',
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
      subtitle: 'A project, a question, a partnership idea? Send me a message and I will get back to you within 48 hours.',
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
      badge: 'Formateur, consultant & coach',
      headline: 'Former des équipes qui changent vraiment',
      subtitle: "Je forme et j'accompagne managers et équipes — en français, en anglais. Sur le terrain, pas dans la théorie. Construit avec vous, pas tiré d'un catalogue.",
      cta: 'Me contacter',
      disc: 'Faire le test DISC',
      discTeaser: 'Découvrez votre profil DISC',
      discCta: 'Commencer le test gratuit',
    },
    formations: {
      label: 'Formations',
      title: 'Des programmes taillés pour vos équipes',
      subtitle: "Opérationnels, bilingues, construits sur votre réalité. Chaque module s'adapte à votre contexte.",
      items: [
        {
          title: 'RH & marque employeur',
          description: "Aligner ce que vous vivez en interne avec ce que vous montrez à l'extérieur. Vos collaborateurs deviennent vos meilleurs ambassadeurs.",
        },
        {
          title: 'Posture professionnelle',
          description: "Corps, voix, regard. Ce que vous dégagez avant même d'ouvrir la bouche. Les leviers d'un impact qui dure.",
        },
        {
          title: 'Prévention des RPS',
          description: "Voir les signaux avant la crise. Un format concret pour les managers en première ligne, pas pour les experts RH.",
        },
        {
          title: "Stratégie d'entreprise",
          description: "Du diagnostic à l'exécution. Savoir où aller, pourquoi, et comment embarquer tout le monde sans perdre la moitié en route.",
        },
        {
          title: 'Soft Skills',
          description: "Écoute, communication, conflits. Les compétences qu'on sous-estime jusqu'au jour où elles font vraiment la différence.",
        },
        {
          title: "Spine'Up — leadership managérial",
          description: "Un parcours pour les managers qui veulent trouver leur posture sans se dénaturer. Concret, progressif, et ça reste après la formation.",
        },
      ],
    },
    topClients: {
      label: 'Ils me font confiance',
      subtitle: "Entreprises et institutions avec qui j'ai travaillé.",
    },
    cv: {
      label: 'Parcours',
      title: "10 ans de formation et de coaching, en France et à l'international",
      experienceLabel: 'Expériences',
      educationLabel: 'Formation',
      experiences: [
        {
          role: 'Formateur indépendant',
          company: 'Freelance',
          period: '2022 – présent',
          description: "Conception et animation de formations sur-mesure en leadership, RH et soft skills. En entreprises et collectivités, en France et à l'étranger.",
        },
        {
          role: 'Co-fondateur',
          company: 'Mantractif',
          period: '2023 – présent',
          description: "Cofondateur d'une structure de coaching et formation en Île-de-France, axée sur le développement professionnel et le management.",
        },
        {
          role: 'Coach sportif & performance',
          company: 'Indépendant — Innsbruck',
          period: '2016 – 2021',
          description: 'Coaching individuel et collectif sur la performance et le développement mental. Autriche et Allemagne.',
        },
      ],
      education: [
        { degree: 'Certification management du changement', school: 'ESSEC', year: '2026' },
        { degree: 'La méthode Agile pour accompagner le changement', school: 'Excellence Formation', year: '2024' },
        { degree: 'BPJEPS AF', school: 'VAE', year: '2021' },
        { degree: 'Master 2 Intercultural Behavior Management', school: 'MCI Innsbruck', year: '2018' },
        { degree: 'Master 1 PGE International Business', school: 'Rennes School of Business', year: '2017' },
      ],
    },
    contact: {
      label: 'Contact',
      title: 'On travaille ensemble ?',
      subtitle: "Un projet, une question, une idée ? Envoyez-moi un message, je réponds sous 48h.",
      name: 'Nom',
      namePlaceholder: 'Votre nom complet',
      email: 'Email',
      emailPlaceholder: 'votre@email.com',
      message: 'Message',
      messagePlaceholder: 'Parlez-moi de votre projet...',
      send: 'Envoyer',
      sending: 'Envoi en cours...',
      success: 'Message envoyé ! Je reviens vers vous rapidement.',
      error: 'Une erreur est survenue. Réessayez ou écrivez directement à hello@clementboule.com',
    },
    footer: {
      tagline: 'Formateur · consultant · coach',
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
  const [lang, setLangState] = useState<Lang>('fr')

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
