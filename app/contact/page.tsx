import type { Metadata } from 'next'
import { Suspense } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import { CALENDLY_URL } from '@/lib/cta-config'

export const metadata: Metadata = {
  title: 'Contact',
  description: "Contactez Clément Boulé, formateur consultant coach en entreprise à Paris. Réponse sous 24h.",
  alternates: { canonical: 'https://www.clementboule.fr/contact' },
}

const INFOS = [
  {
    label: 'Email',
    value: 'hello@clementboule.com',
    href: 'mailto:hello@clementboule.com',
    color: 'sarcelle',
    rot: '-rotate-[0.5deg]',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: 'Localisation',
    value: 'Paris, Île-de-France, déplacements France entière',
    color: 'terracotta',
    rot: 'rotate-[0.4deg]',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    label: 'Délai de réponse',
    value: 'Sous 24h en semaine',
    color: 'sauge-deep',
    rot: '-rotate-[0.3deg]',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    label: 'Réseaux pros',
    value: 'LinkedIn · Malt',
    color: 'cardinal',
    rot: 'rotate-[0.5deg]',
    isSocial: true,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
]

export default function Contact() {
  return (
    <main className="min-h-screen bg-cb-sable">
      <Navbar />

      <section className="pt-28 md:pt-32 pb-20 md:pb-24 bg-cb-sable border-t-4 border-cb-encre">
        <div className="max-w-7xl mx-auto px-6">

          {/* Header */}
          <div className="grid md:grid-cols-[2fr_1fr] gap-10 items-end mb-14">
            <div>
              <span className="inline-block font-marker text-cb-cardinal text-lg -rotate-2 mb-3">
                ↓ Contact
              </span>
              <h1 className="font-anton text-5xl md:text-7xl lg:text-8xl uppercase leading-[0.92] text-cb-encre">
                Parlons de votre <span className="inline-block bg-cb-sarcelle text-cb-sable px-3 py-0.5 -rotate-1 rounded-sm">projet</span>.
              </h1>
            </div>
            <div className="text-base font-medium border-l-4 border-cb-cardinal pl-5 max-w-md text-cb-encre-soft">
              Décrivez votre besoin en quelques lignes, je vous réponds par email sous 24h.
            </div>
          </div>

          {/* Bandeau Calendly brutalist */}
          <div
            className="mb-12 bg-cb-creme border-[2.5px] border-cb-sauge-deep rounded-sm p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5"
            style={{ boxShadow: '6px 6px 0 var(--cb-sauge-deep)' }}
          >
            <div>
              <h2 className="font-anton text-xl md:text-2xl uppercase leading-tight text-cb-encre mb-1">
                Vous préférez un appel ?
              </h2>
              <p className="text-sm text-cb-encre-soft">Réservez un créneau de 30 min, sinon le formulaire ci-dessous.</p>
            </div>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-cb-sarcelle text-cb-sable font-anton text-sm uppercase tracking-wider border-[2.5px] border-cb-encre px-5 py-3 rounded-sm hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200 shrink-0"
              style={{ boxShadow: '4px 4px 0 var(--cb-encre)' }}
            >
              Réserver 30 min →
            </a>
          </div>

          <div className="grid md:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16 items-start">

            {/* Left, infos contact en cards brutalist */}
            <div className="space-y-5">
              {INFOS.map((info) => (
                <div
                  key={info.label}
                  className={`bg-white border-[2.5px] border-cb-sauge-deep rounded-sm p-5 flex items-start gap-4 ${info.rot} hover:rotate-0 hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200`}
                  style={{ boxShadow: `5px 5px 0 var(--cb-${info.color})` }}
                >
                  <span className={`shrink-0 w-11 h-11 bg-cb-sable border-2 border-cb-sauge-deep rounded-sm flex items-center justify-center text-cb-${info.color}`}>
                    {info.icon}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="font-anton text-xs uppercase tracking-widest text-cb-encre mb-1">{info.label}</p>
                    {info.href ? (
                      <a href={info.href} className="text-sm font-medium text-cb-encre hover:text-cb-sarcelle-deep break-all">
                        {info.value}
                      </a>
                    ) : info.isSocial ? (
                      <div className="flex gap-3 text-sm font-medium text-cb-encre">
                        <a href="https://www.linkedin.com/in/cl%C3%A9ment-boul%C3%A9/" target="_blank" rel="noopener noreferrer" className="border-b-2 border-cb-cardinal hover:text-cb-cardinal pb-0.5">LinkedIn</a>
                        <span className="text-cb-encre-soft">·</span>
                        <a href="https://www.malt.fr/profile/clementboule" target="_blank" rel="noopener noreferrer" className="border-b-2 border-cb-cardinal hover:text-cb-cardinal pb-0.5">Malt</a>
                      </div>
                    ) : (
                      <p className="text-sm font-medium text-cb-encre leading-snug">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Right, formulaire brutalist */}
            <div
              className="bg-cb-creme border-[2.5px] border-cb-sauge-deep rounded-sm p-6 md:p-8"
              style={{ boxShadow: '8px 8px 0 var(--cb-sarcelle)' }}
            >
              <h2 className="font-anton text-2xl md:text-3xl uppercase leading-[1] text-cb-encre mb-2">
                Envoyer un message
              </h2>
              <p className="text-sm text-cb-encre-soft mb-6">
                Remplissez le formulaire, votre client email s&apos;ouvrira avec tout pré-rempli.
              </p>
              <Suspense fallback={<div className="h-[420px] animate-pulse bg-cb-sable rounded-sm border-2 border-cb-sauge" />}>
                <ContactForm />
              </Suspense>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
