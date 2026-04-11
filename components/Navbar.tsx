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
        <div className="hidden md:flex items-center gap-8">
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
        </div>
      )}
    </nav>
  )
}
