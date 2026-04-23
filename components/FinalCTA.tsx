'use client'
import { useLanguage } from './LanguageContext'

export default function FinalCTA() {
  const { lang } = useLanguage()

  return (
    <section className="relative py-20 bg-[#1A2B4A] overflow-hidden">
      {/* Gradient blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#3D6DB8]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <p className="text-xs font-semibold text-[#3D6DB8] uppercase tracking-widest mb-4">
          {lang === 'fr' ? 'Passons a l action' : 'Ready to act'}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
          {lang === 'fr'
            ? 'Votre contexte est unique. Notre programme aussi.'
            : 'Your context is unique. So is our programme.'}
        </h2>
        <p className="text-base text-white/60 leading-relaxed mb-10">
          {lang === 'fr'
            ? 'Pas de devis generique, pas de catalogue. Un echange de 30 minutes pour comprendre vos enjeux et vous proposer une solution concrete.'
            : 'No generic quotes, no catalogue. A 30-minute call to understand your challenges and offer a concrete solution.'}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:hello@clementboule.com?subject=Demande%20de%20contact"
            className="inline-flex items-center justify-center gap-2 bg-[#3D6DB8] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#2D5A9E] hover:-translate-y-0.5 shadow-lg transition-all duration-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {lang === 'fr' ? 'Ecrire a Clement' : 'Write to Clement'}
          </a>
          <a
            href="/formations"
            className="inline-flex items-center justify-center gap-2 bg-white/10 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/20 hover:-translate-y-0.5 transition-all duration-200"
          >
            {lang === 'fr' ? 'Voir les formations' : 'See training programmes'}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
