'use client'

import { useState } from 'react'
import { useLang } from './LanguageContext'

// ─── Données clients ─────────────────────────────────────────────────────────
const CLIENTS: { name: string; logo: string | null; scale?: number; rot: string; shadowColor: string }[] = [
  { name: 'EMA',        logo: '/logos/client-ema.png',        scale: 1.5, rot: '-rotate-[0.5deg]', shadowColor: 'var(--cb-sarcelle)' },
  { name: 'Albert',     logo: '/logos/client-albert.png',                rot: 'rotate-[0.4deg]',  shadowColor: 'var(--cb-terracotta)' },
  { name: 'ISCOM',      logo: '/logos/client-iscom.png',                 rot: '-rotate-[0.3deg]', shadowColor: 'var(--cb-sauge-deep)' },
  { name: 'EDA RH',     logo: '/logos/client-eda-rh.png',                rot: 'rotate-[0.6deg]',  shadowColor: 'var(--cb-cardinal)' },
  { name: 'IHEDREA',    logo: '/logos/client-ihedrea.png',               rot: '-rotate-[0.4deg]', shadowColor: 'var(--cb-sarcelle-deep)' },
  { name: 'Apprentis',  logo: '/logos/client-apprentis.jpg',             rot: 'rotate-[0.3deg]',  shadowColor: 'var(--cb-terracotta)' },
  { name: 'Sauvegarde', logo: '/logos/client-sauvegarde.png',            rot: '-rotate-[0.6deg]', shadowColor: 'var(--cb-sauge-deep)' },
  { name: 'Groupe Alternance', logo: '/logos/client-groupealternance.png', rot: 'rotate-[0.5deg]', shadowColor: 'var(--cb-sarcelle)' },
]

// ─── Card logo ───────────────────────────────────────────────────────────────
function ClientLogo({
  name, logo, scale = 1, rot, shadowColor,
}: { name: string; logo: string | null; scale?: number; rot: string; shadowColor: string }) {
  const [hovered, setHovered] = useState(false)
  const mobileScale = Math.min(scale, 1)
  return (
    <div
      className={`relative bg-white border-[2.5px] border-cb-sauge-deep rounded flex items-center justify-center h-28 sm:h-36 px-3 sm:px-6 transition-all duration-200 ${rot} hover:rotate-0 hover:translate-x-[-3px] hover:translate-y-[-3px] cursor-default min-w-0 overflow-hidden`}
      style={{ boxShadow: hovered ? `10px 10px 0 ${shadowColor}` : `5px 5px 0 ${shadowColor}` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {logo ? (
        <img
          src={logo}
          alt={name}
          className="client-logo-img max-h-16 sm:max-h-24 max-w-full sm:max-w-[220px] object-contain transition-transform duration-300"
          style={{
            ['--scale-mobile' as any]: `${hovered ? mobileScale * 1.05 : mobileScale}`,
            ['--scale-desktop' as any]: `${hovered ? scale * 1.08 : scale}`,
          }}
        />
      ) : (
        <span className="font-anton text-base uppercase tracking-wider text-cb-encre">
          {name}
        </span>
      )}
    </div>
  )
}

// ─── Composant ───────────────────────────────────────────────────────────────
export default function TopClients() {
  const { t, lang } = useLang()
  return (
    <section className="bg-cb-sable py-20 md:py-28 px-6 relative overflow-hidden border-t-4 border-cb-encre">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="grid md:grid-cols-[2fr_1fr] gap-10 items-end mb-14">
          <div>
            <span className="inline-block font-marker text-cb-cardinal text-lg -rotate-2 mb-3">
              {lang === 'fr' ? '↓ Ils me font confiance' : '↓ They trust me'}
            </span>
            <h2 className="font-anton text-5xl md:text-6xl lg:text-7xl uppercase leading-[0.92] text-cb-encre">
              {lang === 'fr' ? (
                <>Quelques <span className="inline-block bg-cb-sauge text-cb-sable px-3 py-0.5 -rotate-1 rounded-sm">clients</span>.</>
              ) : (
                <>Some <span className="inline-block bg-cb-sauge text-cb-sable px-3 py-0.5 -rotate-1 rounded-sm">clients</span>.</>
              )}
            </h2>
          </div>
          <div className="text-base font-medium border-l-4 border-cb-sarcelle pl-5 max-w-md text-cb-encre-soft">
            {t.topClients.subtitle}
          </div>
        </div>

        {/* Grille logos */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {CLIENTS.map((c, i) => (
            <div
              key={c.name}
              style={{ animation: `cbFadeUp 0.5s ease both ${i * 60}ms` }}
            >
              <ClientLogo
                name={c.name}
                logo={c.logo}
                scale={c.scale ?? 1}
                rot={c.rot}
                shadowColor={c.shadowColor}
              />
            </div>
          ))}
        </div>

      </div>

      <style jsx>{`
        :global(.client-logo-img) {
          transform: scale(var(--scale-mobile));
        }
        @media (min-width: 640px) {
          :global(.client-logo-img) {
            transform: scale(var(--scale-desktop));
          }
        }
      `}</style>
    </section>
  )
}
