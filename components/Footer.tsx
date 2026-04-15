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

            {/* Social links */}
            <div className="flex flex-col gap-2.5 mt-4">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/cl%C3%A9ment-boul%C3%A9/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-white/40 hover:text-[#0A66C2] transition-colors duration-200"
              >
                <span className="w-6 h-6 rounded-md flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(255,255,255,0.08)' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </span>
                LinkedIn
              </a>

              {/* Malt */}
              <a
                href="https://www.malt.fr/profile/clementboule"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-white/40 hover:text-[#FC5656] transition-colors duration-200"
              >
                <span className="w-6 h-6 rounded-md flex items-center justify-center shrink-0 overflow-hidden"
                  style={{ background: 'rgba(255,255,255,0.08)' }}>
                  <svg width="13" height="13" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 1L18.66 6.5V13.5L10 19L1.34 13.5V6.5L10 1Z" fill="currentColor" opacity="0.9"/>
                    <path d="M10 5.5L15 8.75V11.25L10 14.5L5 11.25V8.75L10 5.5Z" fill="#1A2B4A" opacity="0.4"/>
                  </svg>
                </span>
                Malt
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-white/35">
            <a href="/mentions-legales" className="hover:text-white/60 transition-colors">{t.footer.mentions}</a>
            <a href="/politique-de-confidentialite" className="hover:text-white/60 transition-colors">{t.footer.privacy}</a>
            <a href="mailto:hello@clementboule.com" className="hover:text-[#6B9ED4] transition-colors">hello@clementboule.com</a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-white/25">© {new Date().getFullYear()} Clément Boulé</p>
        </div>
      </div>
    </footer>
  )
}
