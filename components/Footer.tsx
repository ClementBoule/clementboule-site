'use client'
import { useLang } from './LanguageContext'

export default function Footer() {
  const { t, lang } = useLang()

  const navLinks = [
    { label: lang === 'fr' ? 'Formations' : 'Training', href: '/formations' },
    { label: lang === 'fr' ? 'À propos' : 'About', href: '/a-propos' },
    { label: lang === 'fr' ? 'Cas clients' : 'Cases', href: '/cas-clients' },
    { label: 'FAQ', href: '/faq' },
    { label: lang === 'fr' ? 'Ressources' : 'Resources', href: '/ressources' },
    { label: 'Test DISC', href: '/test-disc' },
  ]

  return (
    <footer className="bg-cb-encre text-cb-sable border-t-4 border-cb-encre py-14 md:py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr] gap-10 mb-10">
          <div>
            <div className="font-anton text-4xl md:text-6xl uppercase leading-[0.92]">
              Clément<br />
              <span className="text-cb-rose">Boulé.</span>
            </div>
            <p className="text-sm text-cb-sable/60 mt-4 max-w-xs leading-relaxed text-pretty">
              {lang === 'fr'
                ? 'Formateur, consultant et coach. Bilingue FR/EN. Bonjour si vous voulez discuter sans formulaire.'
                : 'Trainer, consultant and coach. Bilingual FR/EN. Say hi if you want to talk without a form.'}
            </p>
          </div>

          <div>
            <h4 className="font-anton text-base uppercase tracking-wider text-cb-rose mb-4">
              {lang === 'fr' ? 'Navigation' : 'Navigation'}
            </h4>
            <ul className="space-y-2 text-sm text-cb-sable/70">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-cb-cardinal transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-anton text-base uppercase tracking-wider text-cb-rose mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-cb-sable/70">
              <li><a href="mailto:hello@clementboule.com" className="hover:text-cb-cardinal transition-colors">hello@clementboule.com</a></li>
              <li>
                <a href="https://www.linkedin.com/in/cl%C3%A9ment-boul%C3%A9/" target="_blank" rel="noopener noreferrer" className="hover:text-cb-cardinal transition-colors">LinkedIn →</a>
              </li>
              <li>
                <a href="https://www.malt.fr/profile/clementboule" target="_blank" rel="noopener noreferrer" className="hover:text-cb-cardinal transition-colors">Malt →</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-cb-cardinal transition-colors">{lang === 'fr' ? 'Réserver un appel' : 'Book a call'}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-cb-sable/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-cb-sable/50">
          <span>© {new Date().getFullYear()} Clément Boulé</span>
          <div className="flex flex-wrap gap-5">
            <a href="/mentions-legales" className="hover:text-cb-rose transition-colors">{t.footer.mentions}</a>
            <a href="/politique-de-confidentialite" className="hover:text-cb-rose transition-colors">{t.footer.privacy}</a>
            <span className="font-marker text-cb-rose">made with care, not with templates</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
