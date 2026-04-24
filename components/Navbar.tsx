'use client'
import { useState, useEffect } from 'react'
import { useLang } from './LanguageContext'
import { CALENDLY_URL } from '../lib/cta-config'

export default function Navbar() {
  const { lang, setLang, t } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 50)
    return () => clearTimeout(timer)
  }, [])

  const navLinks = [
    { label: lang === 'fr' ? 'Accueil' : 'Home', href: '/' },
    { label: lang === 'fr' ? 'Formations' : 'Training', href: '/formations' },
    { label: lang === 'fr' ? 'À propos' : 'About', href: '/a-propos' },
    { label: lang === 'fr' ? 'Cas clients' : 'Case studies', href: '/cas-clients' },
    { label: 'FAQ', href: '/faq' },
    { label: lang === 'fr' ? 'Contact' : 'Contact', href: '/contact' },
    { label: 'DISC', href: '/test-disc', special: true },
  ]

  const brand = scrolled
    ? 'text-white font-semibold text-lg tracking-tight hover:text-[#7C9CBF] transition-colors'
    : 'text-[#1A2B4A] font-semibold text-lg tracking-tight hover:text-[#3D6DB8] transition-colors'

  const linkBase = scrolled
    ? 'text-white/70 hover:text-white'
    : 'text-[#1A2B4A]/70 hover:text-[#1A2B4A]'

  const discLink = scrolled
    ? 'text-[#7C9CBF] border border-[#7C9CBF]/40 px-3 py-1 rounded-full hover:bg-[#7C9CBF]/10'
    : 'text-[#3D6DB8] border border-[#3D6DB8]/40 px-3 py-1 rounded-full hover:bg-[#3D6DB8]/10'

  const langBtn = scrolled
    ? 'flex items-center gap-1.5 text-xs font-semibold text-white/50 hover:text-white/80 transition-colors border border-white/10 rounded-full px-3 py-1.5'
    : 'flex items-center gap-1.5 text-xs font-semibold text-[#1A2B4A]/50 hover:text-[#1A2B4A]/80 transition-colors border border-[#1A2B4A]/10 rounded-full px-3 py-1.5'

  const langActive = scrolled ? 'text-white' : 'text-[#1A2B4A]'
  const langInactive = scrolled ? 'text-white/40' : 'text-[#1A2B4A]/40'
  const langSep = scrolled ? 'text-white/20' : 'text-[#1A2B4A]/20'

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0B1120]/95 backdrop-blur-md border-b border-white/5 shadow-lg'
          : 'bg-transparent'
      } ${mounted ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <a href="/" className={brand}>
          CB
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                link.special ? discLink : linkBase
              }`}
            >
              {link.label}
            </a>
          ))}

          {/* CTA — Réserver 30 min (Calendly) */}
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-full transition-all duration-200 hover:-translate-y-0.5 shadow-sm bg-[#3D6DB8] text-white hover:bg-[#2D5A9E]`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {lang === 'fr' ? 'Réserver 30 min' : 'Book 30 min'}
          </a>

          {/* Language switcher */}
          <button
            onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
            className={langBtn}
          >
            <span className={lang === 'en' ? langActive : langInactive}>EN</span>
            <span className={langSep}>|</span>
            <span className={lang === 'fr' ? langActive : langInactive}>FR</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`lg:hidden p-1 ${scrolled ? 'text-white/70 hover:text-white' : 'text-[#1A2B4A]/70 hover:text-[#1A2B4A]'}`}
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#0F1A2E]/98 backdrop-blur-md border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center justify-center gap-1.5 bg-[#3D6DB8] text-white font-semibold px-5 py-2.5 rounded-full text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {lang === 'fr' ? 'Réserver 30 min' : 'Book 30 min'}
          </a>
          <button
            onClick={() => { setLang(lang === 'fr' ? 'en' : 'fr'); setMenuOpen(false) }}
            className="text-xs font-semibold text-white/60 border border-white/10 rounded-full px-2.5 py-1 w-fit"
          >
            {lang === 'fr' ? 'EN' : 'FR'}
          </button>
        </div>
      )}
    </nav>
  )
          }
