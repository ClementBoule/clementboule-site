'use client'

import { useState } from 'react'
import { useLang } from './LanguageContext'
import ScrollReveal from './ScrollReveal'

const clients: { name: string; logo: string | null; color: string; scale?: number }[] = [
  { name: 'EMA',        logo: '/logos/client-ema.png',        color: '#000000' },
  { name: 'Albert',     logo: '/logos/client-albert.png',     color: '#000000' },
  { name: 'ISCOM',      logo: '/logos/client-iscom.png',      color: '#000000' },
  { name: 'EDA RH',     logo: '/logos/client-eda-rh.png',     color: '#000000' },
  { name: 'IHEDREA',    logo: '/logos/client-ihedrea.png',    color: '#000000' },
  { name: 'Apprentis',  logo: '/logos/client-apprentis.png',  color: '#000000' },
  { name: 'Sauvegarde', logo: '/logos/client-sauvegarde.png', color: '#000000' },
  { name: 'Daan',       logo: '/logos/client-daan.png',       color: '#000000' },
]

function ClientLogo({ name, logo, color, scale = 1 }: { name: string; logo: string | null; color: string; scale?: number }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      className="flex items-center justify-center h-36 px-6 rounded-2xl bg-white border-2 shadow-md transition-all duration-300 group relative overflow-hidden cursor-pointer"
      style={{
        borderColor: hovered ? color : 'rgba(26,43,74,0.08)',
        boxShadow: hovered ? `0 12px 32px ${color}25, 0 0 0 1px ${color}15` : '0 4px 6px -1px rgba(0,0,0,0.1)',
        transform: hovered ? 'translateY(-4px) scale(1.02)' : 'none',
        backgroundColor: hovered ? `${color}06` : '#ffffff',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/20 to-white/50 pointer-events-none rounded-2xl" />
      {hovered && (
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300"
          style={{ background: `radial-gradient(ellipse at center, ${color}12 0%, transparent 70%)` }}
        />
      )}
      {logo ? (
        <img
          src={logo}
          alt={name}
          className="max-h-24 max-w-[220px] object-contain relative z-10 drop-shadow-sm transition-transform duration-300"
          style={{ transform: `scale(${hovered ? scale * 1.08 : scale})` }}
        />
      ) : (
        <span
          className="text-sm font-bold transition-colors tracking-wide relative z-10 text-center leading-tight"
          style={{ color: hovered ? color : 'rgba(74,91,112,0.7)', fontSize: '0.85rem' }}
        >
          {name}
        </span>
      )}
    </div>
  )
}

export default function TopClients() {
  const { t } = useLang()
  return (
    <section className="py-20 bg-[#F5F7FB]">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal className="text-center mb-12">
          <p className="text-xs font-semibold text-[#3D6DB8] uppercase tracking-widest mb-3">
            {t.topClients.label}
          </p>
          <p className="text-[#6B7E95] text-base max-w-md mx-auto leading-relaxed">
            {t.topClients.subtitle}
          </p>
        </ScrollReveal>
        <ScrollReveal delay={120}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
            {clients.map((client) => (
              <ClientLogo key={client.name} name={client.name} logo={client.logo} color={client.color} scale={client.scale ?? 1} />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
