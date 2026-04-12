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
      <div className="max-w-6xl mx-auto px-6 py-3.5 flex items-center gap-8">
        {/* Desktop nav — left aligned */}
        <div className="hidden md:flex items-center gap-5 flex-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm font-medium transition-all ${
                link.label === 'DISC'
                  ? 'text-white bg-gradient-to-r from-[#E8836A] to-[#F5B08C] px-3.5 py-1.5 rounded-full hover:shadow-md hover:shadow-[#E8836A]/25 hover:-translate-y-0.5'
                  : 'text-[#4A5B70] hover:text-[#1A2B4A]'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right controls */}
        <div className="hidden md:flex items-center gap-3 ml-auto">
          {/* Malt */}
          <a
            href="https://www.malt.fr/profile/clementboule?origin=dashboard_profile_name"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Malt"
            className="opacity-80 hover:opacity-100 hover:scale-110 transition-all"
          >
            <svg viewBox="0 0 44 44" className="w-6 h-6" fill="none">
              <rect x="19" y="4" width="6" height="36" rx="3" fill="#F5595A" transform="rotate(0 22 22)"/>
              <rect x="19" y="4" width="6" height="36" rx="3" fill="#F5595A" transform="rotate(60 22 22)"/>
              <rect x="19" y="4" width="6" height="36" rx="3" fill="#F5595A" transform="rotate(120 22 22)"/>
              <circle cx="22" cy="5" r="3.5" fill="#F5595A"/>
              <circle cx="22" cy="39" r="3.5" fill="#F5595A"/>
              <circle cx="9" cy="12.5" r="3.5" fill="#F5595A" transform="rotate(60 22 22)"/>
              <circle cx="35" cy="12.5" r="3.5" fill="#F5595A" transform="rotate(60 22 22)"/>
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/cl%C3%A9ment-boul%C3%A9/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="opacity-80 hover:opacity-100 hover:scale-110 transition-all"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
              <rect width="24" height="24" rx="4" fill="#0A66C2"/>
              <path
                d="M6.94 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z"
                fill="white"
              />
            </svg>
          </a>

          {/* Language toggle */}
          <button
            onClick={() => setLang(lang === 'en' ? 'fr' : 'en')}
            className="flex items-center gap-1 text-xs font-semibold text-[#6B7E95] hover:text-[#1A2B4A] transition-colors border border-[#3D6DB8]/20 rounded-full px-2.5 py-1.5 hover:border-[#3D6DB8]/40 hover:bg-[#3D6DB8]/5"
          >
            <span className={lang === 'en' ? 'text-[#1A2B4A]' : 'text-[#9AAABB]'}>EN</span>
            <span className="text-[#C8D4E0]">/</span>
            <span className={lang === 'fr' ? 'text-[#1A2B4A]' : 'text-[#9AAABB]'}>FR</span>
          </button>

          {/* Me contacter CTA */}
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#3D6DB8] to-[#5B8FD6] hover:from-[#2E5FA8] hover:to-[#4A7EC5] text-white text-sm font-semibold px-4 py-2 rounded-full transition-all shadow-md shadow-[#3D6DB8]/20 hover:shadow-[#3D6DB8]/30 hover:-translate-y-0.5"
          >
            {t.hero.cta}
          </a>
        </div>

        {/* Mobile right */}
        <div className="flex md:hidden items-center gap-3 ml-auto">
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
        <div className="md:hidden bg-white/98 backdrop-blur-md border-t border-[#3D6DB8]/10 px-6 py-5 flex flex-col gap-4">
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
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#3D6DB8] to-[#5B8FD6] text-white text-sm font-semibold px-4 py-2.5 rounded-full"
          >
            {t.hero.cta}
          </a>
          <div className="flex items-center gap-4 pt-1 border-t border-[#3D6DB8]/10">
            <a href="https://www.malt.fr/profile/clementboule" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-[#4A5B70] hover:text-[#F5595A] transition-colors">
              <svg viewBox="0 0 44 44" className="w-5 h-5" fill="none">
                <rect x="19" y="4" width="6" height="36" rx="3" fill="#F5595A" transform="rotate(0 22 22)"/>
                <rect x="19" y="4" width="6" height="36" rx="3" fill="#F5595A" transform="rotate(60 22 22)"/>
                <rect x="19" y="4" width="6" height="36" rx="3" fill="#F5595A" transform="rotate(120 22 22)"/>
              </svg>
              Malt
            </a>
            <a href="https://www.linkedin.com/in/cl%C3%A9ment-boul%C3%A9/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-[#4A5B70] hover:text-[#0A66C2] transition-colors">
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
                <rect width="24" height="24" rx="4" fill="#0A66C2"/>
                <path d="M6.94 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z" fill="white"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
