'use client'
import { useLang } from './LanguageContext'
import { CALENDLY_URL } from '../lib/cta-config'

export default function FinalCTA() {
  const { lang } = useLang()

  return (
    <section className="py-20 md:py-28 bg-[#1A2B4A] relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#3D6DB8]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-[#6B9ED4]/15 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <p className="text-xs font-semibold text-[#6B9ED4] uppercase tracking-widest mb-4">
          {lang === 'fr' ? 'Passons à l\'action' : 'Let\'s get started'}
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
          {lang === 'fr'
            ? 'Un projet en tête ? Parlons-en.'
            : 'Got a project in mind? Let\'s talk.'}
        </h2>
        <p className="text-base text-white/60 leading-relaxed max-w-xl mx-auto mb-10">
          {lang === 'fr'
            ? "Pas de formulaire interminable. Un échange direct pour voir si on peut construire quelque chose ensemble."
            : "No endless forms. A direct conversation to see if we can build something together."}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-[#1A2B4A] font-semibold px-8 py-4 rounded-full hover:bg-[#EEF3FA] hover:-translate-y-0.5 shadow-lg transition-all duration-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {lang === 'fr' ? 'Réserver 30 min' : 'Book 30 min'}
          </a>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-white/80 border border-white/25 font-semibold px-7 py-4 rounded-full hover:bg-white/10 hover:text-white hover:border-white/40 hover:-translate-y-0.5 transition-all duration-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {lang === 'fr' ? 'Ou m’écrire' : 'Or write to me'}
          </a>
        </div>
        <p className="mt-8 text-xs text-white/30">
          {lang === 'fr'
            ? 'Réponse sous 24h · Pas de OPCO requis · Devis sur-mesure'
            : 'Reply within 24h · No subsidized programs · Custom quote'}
        </p>
      </div>
    </section>
  )
}
