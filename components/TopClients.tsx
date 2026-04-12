'use client'

import { useState } from 'react'
import { useLang } from './LanguageContext'
import ScrollReveal from './ScrollReveal'

const clients: { name: string; logo: string | null; color: string }[] = [
  { name: 'IHEDREA', logo: '/logos/LOGO_IHEDREA_and_RVB_1_512411908e_4b74efb9ec.png', color: '#2E5A88' },
  { name: 'ISCOM Paris', logo: '/logos/51cfd3_04e2e917e9e44bb184aa2868ab053929~mv2.png', color: '#E63946' },
  { name: 'Ecole de Management Applique', logo: '/logos/ema_logo_344x117-1-1.png', color: '#1A7A4C' },
  { name: 'Albert School', logo: '/logos/albert-school.png', color: '#3B82F6' },
  { name: 'EDA RH', logo: '/logos/69739ea11aa829bf4434d8f3_EDA RH.png', color: '#6D28D9' },
  { name: "Les Apprentis d'Auteuil", logo: '/logos/Logo-fondation-auteuil.jpg', color: '#DC2626' },
  { name: 'Daan Tech', logo: '/logos/daan-tech-logo.png', color: '#0891B2' },
  { name: 'Sauvegarde Val d\'Oise', logo: '/logos/Logo-sauvegarde-95_v3.png', color: '#059669' },
]

function ClientLogo({ name, logo, color }: { name: string; logo: string | null; color: string }) {
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
          style={{ transform: hovered ? 'scale(1.12)' : 'scale(1)' }}
        />
      ) : (
        <span
          className="text-sm font-semibold transition-colors tracking-wide relative z-10"
          style={{ color: hovered ? color : 'rgba(74,91,112,0.55)' }}
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
              <ClientLogo key={client.name} name={client.name} logo={client.logo} color={client.color} />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
'use client'

import { useLang } from './LanguageContext'
import ScrollReveal from './ScrollReveal'

const clients: { name: string; logo: string | null }[] = [
  { name: 'IHEDREA', logo: '/logos/LOGO_IHEDREA_and_RVB_1_512411908e_4b74efb9ec.png' },
  { name: 'ISCOM Paris', logo: '/logos/51cfd3_04e2e917e9e44bb184aa2868ab053929~mv2.png' },
  { name: 'Ecole de Management Applique', logo: '/logos/ema_logo_344x117-1-1.png' },
  { name: 'Albert School', logo: null },
  { name: 'EDA RH', logo: '/logos/69739ea11aa829bf4434d8f3_EDA RH.png' },
  { name: "Les Apprentis d'Auteuil", logo: '/logos/Logo-fondation-auteuil.jpg' },
  { name: 'Daan Tech', logo: '/logos/daan-tech-logo.png' },
  { name: 'Sauvegarde Val d\'Oise', logo: '/logos/Logo-sauvegarde-95_v3.png' },
]

function ClientLogo({ name, logo }: { name: string; logo: string | null }) {
  return (
    <div className="flex items-center justify-center h-32 px-6 rounded-2xl bg-white border border-[#1A2B4A]/8 shadow-md hover:shadow-xl hover:border-[#3D6DB8]/20 hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
      {/* Glossy shine overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/20 to-white/50 pointer-events-none rounded-2xl" />
      {logo ? (
        <img
          src={logo}
          alt={name}
          className="max-h-20 max-w-[200px] object-contain relative z-10 drop-shadow-sm"
        />
      ) : (
        <span className="text-sm font-semibold text-[#4A5B70]/55 group-hover:text-[#1A2B4A] transition-colors tracking-wide relative z-10">
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
              <ClientLogo key={client.name} name={client.name} logo={client.logo} />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
