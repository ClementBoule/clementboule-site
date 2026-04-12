'use client'

import { useLang } from './LanguageContext'
import ScrollReveal from './ScrollReveal'

const clients: { name: string; logo: string | null }[] = [
  { name: 'IHEDREA', logo: '/logos/LOGO_IHEDREA_and_RVB_1_512411908e_4b74efb9ec.png' },
  { name: 'ISCOM Paris', logo: '/logos/iscom.png' },
  { name: 'Ecole de Management Applique', logo: '/logos/ema.png' },
  { name: 'Albert School', logo: '/logos/albert-school.png' },
  { name: 'EDA RH', logo: '/logos/eda-rh.png' },
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
