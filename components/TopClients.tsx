'use client'
import { useRef, useEffect, useState } from 'react'
import { useLang } from './LanguageContext'

const STYLES = `
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.marquee-track {
  animation: marquee 32s linear infinite;
  will-change: transform;
}
.marquee-track:hover {
  animation-play-state: paused;
}
`

const CLIENTS = [
  { name: 'EMA',                  logo: '/logos/client-ema.png' },
  { name: 'Albert School',        logo: '/logos/client-albert.png' },
  { name: 'ISCOM',                logo: '/logos/client-iscom.png' },
  { name: 'EDA RH',               logo: '/logos/client-eda-rh.png' },
  { name: 'IHEDREA',              logo: '/logos/client-ihedrea.png' },
  { name: "Apprentis d'Auteuil",  logo: '/logos/client-apprentis.jpg' },
  { name: 'Sauvegarde 95',        logo: '/logos/client-sauvegarde.png' },
  { name: 'Daan Tech',            logo: '/logos/client-daan.png' },
]

export default function TopClients() {
  const { t } = useLang()
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const track = [...CLIENTS, ...CLIENTS]

  return (
    <section ref={ref} className="py-20 relative overflow-hidden" style={{ background: '#F0F4FC' }}>
      <style>{STYLES}</style>

      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#3D6DB8]/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#3D6DB8]/20 to-transparent" />

      <div
        className="max-w-6xl mx-auto px-6 text-center mb-12"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'none' : 'translateY(20px)',
          transition: 'opacity 0.7s ease, transform 0.7s ease',
        }}
      >
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#3D6DB8] mb-2">
          {t.topClients?.label || 'ILS ME FONT CONFIANCE'}
        </p>
        <p className="text-[#1A2B4A]/50 text-sm">
          {t.topClients?.subtitle || "Entreprises et institutions que j'ai eu le privilège d'accompagner."}
        </p>
      </div>

      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #F0F4FC, transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #F0F4FC, transparent)' }} />

        <div className="marquee-track flex items-center gap-8 w-max py-3">
          {track.map((client, i) => (
            <LogoCard key={i} client={client} />
          ))}
        </div>
      </div>
    </section>
  )
}

function LogoCard({ client }: { client: { name: string; logo: string } }) {
  const [loaded, setLoaded] = useState(false)
  const [errored, setErrored] = useState(false)
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex items-center justify-center bg-white rounded-2xl border border-[#E5EAF3] transition-all duration-300"
      style={{
        height: '88px',
        minWidth: '160px',
        padding: '0 32px',
        boxShadow: hovered
          ? '0 8px 32px rgba(61,109,184,0.15), 0 2px 8px rgba(26,43,74,0.08)'
          : '0 2px 12px rgba(26,43,74,0.07)',
        borderColor: hovered ? 'rgba(61,109,184,0.25)' : '#E5EAF3',
        transform: hovered ? 'translateY(-2px)' : 'none',
      }}
    >
      {errored ? (
        /* Fallback text if image missing */
        <span className="text-xs font-semibold text-[#1A2B4A]/40 text-center leading-tight max-w-[120px]">
          {client.name}
        </span>
      ) : (
        <img
          src={client.logo}
          alt={client.name}
          onLoad={() => setLoaded(true)}
          onError={() => setErrored(true)}
          style={{
            maxHeight: '52px',
            maxWidth: '120px',
            width: 'auto',
            objectFit: 'contain',
            opacity: loaded ? (hovered ? 1 : 0.72) : 0,
            filter: hovered ? 'grayscale(0%)' : 'grayscale(25%)',
            transition: 'opacity 0.3s ease, filter 0.3s ease',
          }}
        />
      )}
    </div>
  )
}
