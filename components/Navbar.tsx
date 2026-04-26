'use client'
import { useState, useEffect } from 'react'
import { useLang } from './LanguageContext'
import { CALENDLY_URL } from '../lib/cta-config'

export default function Navbar() {
  const { lang, setLang } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50)
    return () => clearTimeout(t)
  }, [])

  const navLinks = [
    { label: lang === 'fr' ? 'Accueil' : 'Home', href: '/' },
    { label: lang === 'fr' ? 'Formations' : 'Training', href: '/formations' },
    { label: lang === 'fr' ? 'À propos' : 'About', href: '/a-propos' },
    { label: lang === 'fr' ? 'Cas clients' : 'Cases', href: '/cas-clients' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
    { label: 'DISC', href: '/test-disc', special: true },
  ]

  return (
    <nav
      className={`sticky top-0 z-50 bg-cb-sable border-b-[2.5px] border-cb-sauge-deep transition-opacity duration-300 ${
        mounted ? 'opacity-100' : 'opacity-0'
      } ${scrolled ? 'shadow-[0_4px_0_0_var(--cb-sauge)]' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 font-anton text-2xl tracking-tight uppercase text-cb-encre hover:text-cb-sauge-deep transition-colors">
          <span className="inline-block w-3.5 h-3.5 rounded-full bg-cb-sarcelle" />
          Clément Boulé
        </a>
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-xs font-bold uppercase tracking-[0.06em] transition-colors ${
                link.special
                  ? 'text-cb-cardinal border-2 border-cb-cardinal/40 px-3 py-1 rounded-full hover:bg-cb-cardinal hover:text-cb-sable hover:border-cb-cardinal'
                  : 'text-cb-encre hover:text-cb-sauge-deep'
              }`}
            >
              {link.label}
            </a>
          ))}
          {/* CTA primaire mis en valeur : sarcelle saturé, ombre cardinal */}
          <a
            href="/#quiz"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.06em] px-4 py-2 border-[2.5px] border-cb-encre bg-cb-sarcelle text-cb-sable rounded hover:bg-cb-sarcelle-deep transition-all duration-150 shadow-[4px_4px_0_var(--cb-cardinal)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[6px_6px_0_var(--cb-cardinal)]"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7l-3 3m0 0l-3-3m3 3V8" />
            </svg>
            {lang === 'fr' ? 'Trouver mon format' : 'Find my format'}
          </a>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.06em] px-4 py-2 border-2 border-cb-encre bg-cb-encre text-cb-sable rounded hover:bg-cb-sauge-deep hover:border-cb-sauge-deep transition-all duration-150"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {lang === 'fr' ? 'Réserver 30 min' : 'Book 30 min'}
          </a>
          <button
            onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
            className="flex items-center gap-1.5 text-xs font-bold text-cb-encre/60 hover:text-cb-encre transition-colors border-2 border-cb-encre/15 rounded-full px-3 py-1"
          >
            <span className={lang === 'en' ? 'text-cb-encre' : 'text-cb-encre/40'}>EN</span>
            <span className="text-cb-encre/20">|</span>
            <span className={lang === 'fr' ? 'text-cb-encre' : 'text-cb-encre/40'}>FR</span>
          </button>
        </div>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden p-1 text-cb-encre"
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {menuOpen && (
        <div className="lg:hidden bg-cb-sable border-t-2 border-cb-sauge-deep px-6 py-5 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-bold uppercase tracking-wider text-cb-encre hover:text-cb-sauge-deep py-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/#quiz"
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center justify-center gap-1.5 border-[2.5px] border-cb-encre bg-cb-sarcelle text-cb-sable font-bold uppercase tracking-wider px-5 py-2.5 rounded text-xs shadow-[4px_4px_0_var(--cb-cardinal)]"
          >
            {lang === 'fr' ? 'Trouver mon format' : 'Find my format'}
          </a>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center justify-center gap-1.5 bg-cb-encre text-cb-sable font-bold uppercase tracking-wider px-5 py-2.5 rounded text-xs"
          >
            {lang === 'fr' ? 'Réserver 30 min' : 'Book 30 min'}
          </a>
          <button
            onClick={() => { setLang(lang === 'fr' ? 'en' : 'fr'); setMenuOpen(false) }}
            className="text-xs font-bold text-cb-encre/60 border border-cb-encre/15 rounded-full px-3 py-1 w-fit"
          >
            {lang === 'fr' ? 'EN' : 'FR'}
          </button>
        </div>
      )}
    </nav>
  )
}
