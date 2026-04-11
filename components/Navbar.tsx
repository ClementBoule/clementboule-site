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
          ? 'bg-white/95 backdrop-blur-md border-b border-[#3D6DB8]/10 shadow-sm shadow-[#3D6DB8]/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="font-bold text-lg tracking-tight bg-gradient-to-r from-[#1A2B4A] to-[#3D6DB8] bg-clip-text text-transparent hover:from-[#3D6DB8] hover:to-[#6B9ED4] transition-all"
        >
          Clément Boulé
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                link.label === 'DISC'
                  ? 'text-white bg-gradient-to-r from-[#E8836A] to-[#F5B08C] px-4 py-1.5 rounded-full hover:shadow-md hover:shadow-[#E8836A]/25 hover:-translate-y-0.5'
                  : 'text-[#4A5B70] hover:text-[#1A2B4A]'
              }`}
            >
              {link.label}
            </a>
          ))}

          {/* Social icons */}
          <div className="flex items-center gap-2">
            {/* Malt */}
            <a
              href="https://www.malt.fr/profile/clementboule?origin=dashboard_profile_name"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Malt"
              className="opacity-70 hover:opacity-100 hover:scale-110 transition-all"
            >
              <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none">
                <rect width="32" height="32" rx="6" fill="#FC4B60"/>
                <path d="M16 5L27 16L16 27L5 16L16 5Z" fill="white"/>
                <path d="M16 9L23 16L16 23L9 16L16 9Z" fill="#FC4B60"/>
              </svg>
            </a>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/cl%C3%A9ment-boul%C3%A9/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="opacity-70 hover:opacity-100 hover:scale-110 transition-all"
            >
              <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none">
                <rect width="32" height="32" rx="6" fill="#0A66C2"/>
                <path d="M8 12h4v12H8V12zm2-1.5a2.25 2.25 0 110-4.5 2.25 2.25 0 010 4.5zM14 12h3.8v1.6h.05c.53-.95 1.83-1.95 3.77-1.95C25.2 11.65 26 14.1 26 17.3V24h-4v-6.1c0-1.45-.03-3.32-2.15-3.32-2.16 0-2.49 1.58-2.49 3.21V24H14V12z" fill="white"/>
              </svg>
            </a>
          </div>

          {/* Language toggle */}
          <button
            onClick={() => setLang(lang === 'en' ? 'fr' : 'en')}
            className="flex items-center gap-1.5 text-xs font-semibold text-[#6B7E95] hover:text-[#1A2B4A] transition-colors border border-[#3D6DB8]/20 rounded-full px-3 py-1.5 hover:border-[#3D6DB8]/40 hover:bg-[#3D6DB8]/5"
          >
            <span className={lang === 'en' ? 'text-[#1A2B4A]' : 'text-[#9AAABB]'}>EN</span>
            <span className="text-[#C8D4E0]">|</span>
            <span className={lang === 'fr' ? 'text-[#1A2B4A]' : 'text-[#9AAABB]'}>FR</span>
          </button>
        </div>

        {/* Mobile: lang toggle + hamburger */}
        <div className="flex md:hidden items-center gap-4">
          <button
            onClick={() => setLang(lang === 'en' ? 'fr' : 'en')}
            className="text-xs font-semibold text-[#4A5B70] border border-[#3D6DB8]/20 rounded-full px-2.5 py-1"
          >
            {lang === 'en' ? 'FR' : 'EN'}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[#4A5B70] hover:text-[#1A2B4A] p-1"
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
        <div className="md:hidden bg-white/98 backdrop-blur-md border-t border-[#3D6DB8]/10 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-[#4A5B70] hover:text-[#1A2B4A] transition-colors"
            >
              {link.label}
            </a>
          ))}
          {/* Social links */}
          <div className="flex items-center gap-4 pt-2 border-t border-[#3D6DB8]/10">
            <a
              href="https://www.malt.fr/profile/clementboule?origin=dashboard_profile_name"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-[#4A5B70] hover:text-[#FC4B60] transition-colors"
            >
              <svg viewBox="0 0 32 32" className="w-5 h-5" fill="none">
                <rect width="32" height="32" rx="6" fill="#FC4B60"/>
                <path d="M16 5L27 16L16 27L5 16L16 5Z" fill="white"/>
                <path d="M16 9L23 16L16 23L9 16L16 9Z" fill="#FC4B60"/>
              </svg>
              Malt
            </a>
            <a
              href="https://www.linkedin.com/in/cl%C3%A9ment-boul%C3%A9/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-[#4A5B70] hover:text-[#0A66C2] transition-colors"
            >
              <svg viewBox="0 0 32 32" className="w-5 h-5" fill="none">
                <rect width="32" height="32" rx="6" fill="#0A66C2"/>
                <path d="M8 12h4v12H8V12zm2-1.5a2.25 2.25 0 110-4.5 2.25 2.25 0 010 4.5zM14 12h3.8v1.6h.05c.53-.95 1.83-1.95 3.77-1.95C25.2 11.65 26 14.1 26 17.3V24h-4v-6.1c0-1.45-.03-3.32-2.15-3.32-2.16 0-2.49 1.58-2.49 3.21V24H14V12z" fill="white"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
