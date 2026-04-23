'use client'
import { useLang } from './LanguageContext'

export default function Footer() {
  const { t, lang } = useLang()

  const links = [
    { label: lang === 'fr' ? 'Formations' : 'Training', href: '/formations' },
    { label: lang === 'fr' ? 'À propos' : 'About', href: '/a-propos' },
    { label: lang === 'fr' ? 'Cas clients' : 'Case studies', href: '/cas-clients' },
    { label: 'FAQ', href: '/faq' },
    { label: lang === 'fr' ? 'Ressources' : 'Resources', href: '/ressources' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <footer className="bg-[#1A2B4A] border-t border-white/6 py-14">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <p className="text-base font-bold bg-gradient-to-r from-white to-[#6B9ED4] bg-clip-text text-transparent mb-2">
              Clément Boulé
            </p>
            <p className="text-xs text-white/40 leading-relaxed max-w-xs">
              {lang === 'fr'
                ? 'Formateur, consultant et coach en entreprise. Paris, bilingue FR / EN.'
                : 'Corporate trainer, consultant and coach. Paris, bilingual FR / EN.'}
            </p>
          </div>

          {/* Nav links */}
          <div>
            <p className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-4">
              {lang === 'fr' ? 'Navigation' : 'Navigate'}
            </p>
            <div className="flex flex-col gap-2.5">
              {links.map((l) => (
                <a key={l.href} href={l.href} className="text-sm text-white/50 hover:text-white/80 transition-colors">
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-4">
              Contact
            </p>
            <div className="flex flex-col gap-2.5">
              <a href="mailto:hello@clementboule.com" className="text-sm text-white/50 hover:text-[#6B9ED4] transition-colors">
                hello@clementboule.com
              </a>
              <a
                href="https://www.linkedin.com/in/cl%C3%A9ment-boul%C3%A9/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/50 hover:text-[#6B9ED4] transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://www.malt.fr/profile/clementboule"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/50 hover:text-[#6B9ED4] transition-colors"
              >
                Malt
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/8 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/25">
          <p>© {new Date().getFullYear()} Clément Boulé</p>
          <div className="flex gap-6">
            <a href="/mentions-legales" className="hover:text-white/50 transition-colors">
              {t.footer.mentions}
            </a>
            <a href="/politique-de-confidentialite" className="hover:text-white/50 transition-colors">
              {t.footer.privacy}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
