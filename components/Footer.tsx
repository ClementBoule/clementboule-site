'use client'
import { useLang } from './LanguageContext'

export default function Footer() {
  const { t } = useLang()
  return (
    <footer className="bg-[#1A2B4A] border-t border-white/6 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <p className="text-sm font-bold bg-gradient-to-r from-white to-[#6B9ED4] bg-clip-text text-transparent">
              Clément Boulé
            </p>
            <p className="text-xs text-white/35 mt-1">{t.footer.tagline}</p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-white/35">
            <a href="/mentions-legales" className="hover:text-white/60 transition-colors">
              {t.footer.mentions}
            </a>
            <a href="/politique-de-confidentialite" className="hover:text-white/60 transition-colors">
              {t.footer.privacy}
            </a>
            <a href="mailto:hello@clementboule.com" className="hover:text-[#6B9ED4] transition-colors">
              hello@clementboule.com
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-white/25">
            © {new Date().getFullYear()} Clément Boulé
          </p>
        </div>
      </div>
    </footer>
  )
}
