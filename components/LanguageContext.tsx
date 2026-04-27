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
    footer: {
      mentions: 'Legal Notice',
      privacy: 'Privacy Policy',
    },
  },

  fr: {
    topClients: {
      subtitle: "Entreprises et institutions avec qui j'ai travaillé.",
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
