'use client'
import { useState, useEffect } from 'react'
import { useLang } from './LanguageContext'

export default function Navbar() {
  const { lang, setLang, t } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: t.nav.home, href: '#hero' },
    { label: t.nav.formations, href: '#formations' },
    { label: t.nav.cv, href: '#cv' },
    { label: t.nav.contact, href: '#contact' },
    { label: 'DISC', href: '/test-disc' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0B1120]/95 backdrop-blur-md border-b border-white/5 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="text-white font-semibold text-lg tracking-tight hover:text-[#7C9CBF] transition-colors"
        >
          ClÃ©ment BoulÃ©
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                link.label === 'DISC'
                  ? 'text-[#7C9CBF] border border-[#7C9CBF]/40 px-3 py-1.5 rounded-full hover:bg-[#7C9CBF]/10'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}

          {/* Language toggle */}
          <button
            onClick={() => setLang(lang === 'en' ? 'fr' : 'en')}
            className="flex items-center gap-1.5 text-xs font-semibold text-white/50 hover:text-white/80 transition-colors border border-white/10 rounded-full px-3 py-1.5"
          >
            <span className={lang === 'en' ? 'text-white' : 'text-white/40'}>EN</span>
            <span className="text-white/20">|</span>
            <span className={lang === 'fr' ? 'text-white' : 'text-white/40'}>FR</span>
          </button>
        </div>

        {/* Mobile: lang toggle + hamburger */}
        <div className="flex md:hidden items-center gap-4">
          <button
            onClick={() => setLang(lang === 'en' ? 'fr' : 'en')}
            className="text-xs font-semibold text-white/60 border border-white/10 rounded-full px-2.5 py-1"
          >
            {lang === 'en' ? 'FR' : 'EN'}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white/70 hover:text-white p-1"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0F1A2E]/98 backdrop-blur-md border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
