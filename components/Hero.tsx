'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useLang } from './LanguageContext'

export default function Hero() {
  const { lang } = useLang()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      id="hero"
      className="relative bg-cb-sable text-cb-encre py-16 md:py-24 px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-[1.5fr_1fr] gap-10 md:gap-16 items-center">
          <div
            className="space-y-6"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateX(0)' : 'translateX(-24px)',
              transition: 'opacity 0.7s ease, transform 0.7s ease',
            }}
          >
            <span className="inline-block font-marker text-cb-cardinal text-lg -rotate-2">
              {lang === 'fr' ? 'Bilingue · Paris · 10 ans →' : 'Bilingual · Paris · 10 years →'}
            </span>

            <h1 className="font-anton text-5xl sm:text-6xl md:text-7xl lg:text-[9.5rem] leading-[0.92] uppercase tracking-tight text-cb-encre">
              {lang === 'fr' ? (
                <>
                  Formations<br />
                  qui{' '}
                  <span className="inline-block bg-cb-terracotta text-cb-sable px-3 py-0.5 -rotate-1 rounded-sm">
                    marchent
                  </span>
                  <br />
                  vraiment.
                </>
              ) : (
                <>
                  Training<br />
                  that{' '}
                  <span className="inline-block bg-cb-terracotta text-cb-sable px-3 py-0.5 -rotate-1 rounded-sm">
                    works
                  </span>
                  <br />
                  for real.
                </>
              )}
            </h1>

            <p className="text-base md:text-lg max-w-xl font-medium leading-relaxed">
              {lang === 'fr' ? (
                <>
                  10 ans à accompagner managers, équipes et dirigeants. Sur le management, les RH, les soft skills.{' '}
                  <strong className="bg-cb-rose px-1.5 rounded-sm font-semibold">Pas de catalogue.</strong>{' '}
                  Chaque programme est construit avec vous.
                </>
              ) : (
                <>
                  10 years supporting managers, teams and leaders. On management, HR, soft skills.{' '}
                  <strong className="bg-cb-rose px-1.5 rounded-sm font-semibold">No catalog.</strong>{' '}
                  Each program is built with you.
                </>
              )}
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-cb-encre text-cb-sable font-bold uppercase tracking-wider text-xs px-6 py-3.5 border-2 border-cb-encre rounded shadow-[4px_4px_0_var(--cb-sauge)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[6px_6px_0_var(--cb-sauge)] transition-all duration-150"
              >
                {lang === 'fr' ? 'Discutons de votre projet' : "Let's talk"}
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="/#quiz"
                className="inline-flex items-center gap-2 bg-cb-sable text-cb-sauge-deep font-bold uppercase tracking-wider text-xs px-6 py-3.5 border-2 border-cb-sauge-deep rounded shadow-[4px_4px_0_var(--cb-sauge)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[6px_6px_0_var(--cb-sauge)] transition-all duration-150"
              >
                {lang === 'fr' ? 'Trouver mon format' : 'Find my format'}
              </a>
            </div>

            <div className="flex flex-wrap gap-3 items-center text-xs uppercase tracking-wider font-bold pt-2">
              <span>FR · EN</span>
              <span className="w-1.5 h-1.5 rounded-full bg-cb-cardinal" />
              <span>{lang === 'fr' ? '1800+ stagiaires' : '1800+ trainees'}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-cb-cardinal" />
              <span>{lang === 'fr' ? 'Sans OPCO' : 'No subsidies'}</span>
            </div>
          </div>

          <div
            className="relative"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateX(0)' : 'translateX(24px)',
              transition: 'opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s',
            }}
          >
            <div className="relative bg-cb-sauge-deep border-[3px] border-cb-encre rounded shadow-[10px_10px_0_var(--cb-cardinal)] -rotate-[1.5deg]">
              <span className="absolute -left-3 top-4 bg-cb-rose border-[2.5px] border-cb-encre px-3 py-1.5 font-anton uppercase text-sm tracking-wide -rotate-3 z-10 rounded-sm text-cb-encre">
                {lang === 'fr' ? 'Depuis 2016' : 'Since 2016'}
              </span>
              <span className="absolute -right-3 -bottom-4 bg-cb-terracotta text-cb-sable border-[2.5px] border-cb-encre px-3 py-2 font-marker text-base rotate-3 z-10 rounded-sm leading-none text-center">
                {lang === 'fr' ? 'En chair' : 'In flesh'}
                <br />
                <span className="text-[10px] uppercase tracking-widest font-sans font-bold opacity-90">
                  {lang === 'fr' ? '& en os' : '& bone'}
                </span>
              </span>
              <Image
                src="/clement-illustration.png"
                alt="Clément Boulé — illustration portrait"
                width={520}
                height={520}
                className="w-full h-auto block"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
