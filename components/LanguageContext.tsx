'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Lang = 'en' | 'fr'

// ─────────────────────────────────────────────────────────────────────────────
// Système de traduction.
//
// Périmètre actuel: uniquement les sections réellement consommées par les
// composants (CV.tsx, TopClients.tsx, Footer.tsx). Les autres composants
// (Hero, Proof, Formations, Process, MatchQuiz, HomeFAQ, FinalCTA, Navbar)
// gèrent leur traduction inline avec lang === 'fr' ? ... : ...
//
// Le contenu mort précédemment présent (hero/formations/contact/nav/tagline)
// a été retiré le 2026-04-27 dans le cadre du Lot 2A de la purge langage IA.
// Si un futur composant a besoin d'une de ces sections, l'ajouter ici en
// langage humain conforme à memory/copywriting.md.
// ─────────────────────────────────────────────────────────────────────────────

const translations = {
  en: {
    topClients: {
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
          description: 'I design and deliver training programs in leadership, HR, and soft skills, built with each client. For companies and public institutions, in France and abroad.',
        },
        {
          role: 'Co-Founder',
          company: 'Mantractif',
          period: '2023 – present',
          description: 'Co-creation of a coaching and training company based in Île-de-France, focused on professional transformation.',
        },
        {
          role: 'Sports & Performance Coach',
          company: 'Independent, Innsbruck',
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
    footer: {
      mentions: 'Legal Notice',
      privacy: 'Privacy Policy',
    },
  },

  fr: {
    topClients: {
      subtitle: "Entreprises et institutions avec qui j'ai travaillé.",
    },
    cv: {
      label: 'Parcours',
      title: "8 ans de formation et de coaching, en France et à l'international",
      experienceLabel: 'Expériences',
      educationLabel: 'Formation',
      experiences: [
        {
          role: 'Formateur indépendant',
          company: 'Freelance',
          period: '2022 – présent',
          description: "Je conçois et anime des formations en leadership, RH et soft skills, construites avec chaque client. En entreprises et en collectivités, en France et à l'étranger.",
        },
        {
          role: 'Co-fondateur',
          company: 'Mantractif',
          period: '2023 – présent',
          description: "Cofondateur d'une structure de coaching et formation en Île-de-France, axée sur le développement professionnel et le management.",
        },
        {
          role: 'Coach sportif & performance',
          company: 'Indépendant, Innsbruck',
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
    footer: {
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
