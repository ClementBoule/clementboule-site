'use client'
import { useLang } from './LanguageContext'
import ScrollReveal from './ScrollReveal'
const clients: { name: string; logo: string | null }[] = [
  { name: 'IHEDREA', logo: '/logos/LOGO_IHEDREA_and_RVB_1_512411908e_4b74efb9ec.png' },
  { name: 'ISCOM Paris', logo: '/logos/ISCOM.png' },
  { name: 'Ecole de Management Applique', logo: '/logos/ema_logo_344x117-1-1.png' },
  { name: 'Albert School', logo: '/logos/logo_vertical_bleu.png' },
  { name: 'EDA RH', logo: '/logos/b1896445ef48756240276b4ee38015e0.LOGO-EDA-RH-hibou.png' },
  { name: "Les Apprentis d'Auteuil", logo: '/logos/Logo-fondation-auteuil.jpg' },
  { name: 'Daan Tech', logo: '/logos/daan-tech-logo.png' },
  { name: 'Sauvegarde Val d\'Oise', logo: '/logos/Logo-sauvegarde-95_v3.png' },
]
function ClientLogo({ name, logo }: { name: string; logo: string | null }) {
  return (
    <div className="flex items-center justify-center h-16 px-6 rounded-2xl bg-white/70 border border-[#1A2B4A]/6 shadow-sm hover:shadow-md hover:bg-white hover:border-[#3D6DB8]/15 transition-all duration-300 group">
      {logo ? (
        <img
          src={logo}
          alt={name}
          className="max-h-8 max-w-[120px] object-contain opacity-55 group-hover:opacity-95 transition-opacity grayscale group-hover:grayscale-0"
        />
      ) : (
        <span className="text-sm font-semibold text-[#4A5B70]/55 group-hover:text-[#1A2B4A] transition-colors tracking-wide">
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
      <div className="max-w-5xl mx-auto px-6">
        <ScrollReveal className="text-center mb-12">
          <p className="text-xs font-semibold text-[#3D6DB8] uppercase tracking-widest mb-3">
            {t.topClients.label}
          </p>
          <p className="text-[#6B7E95] text-base max-w-md mx-auto leading-relaxed">
            {t.topClients.subtitle}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {clients.map((client) => (
              <ClientLogo key={client.name} name={client.name} logo={client.logo} />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
