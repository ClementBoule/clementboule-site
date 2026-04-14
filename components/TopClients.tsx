'use client'
import { useRef, useEffect, useState } from 'react'
import { useLang } from './LanguageContext'

const STYLES = `
@keyframes marquee {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
@keyframes fadeUpIn {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}
.marquee-track {
  animation: marquee 28s linear infinite;
  will-change: transform;
}
.marquee-track:hover {
  animation-play-state: paused;
}
`

const CLIENTS = [
  { name: 'EMA', logo: '/logos/ema.png' },
  { name: 'Albert School', logo: '/logos/albert.png' },
  { name: 'ISCOM', logo: '/logos/iscom.png' },
  { name: 'EDA BH', logo: '/logos/eda-bh.png' },
  { name: 'IHEDREA', logo: '/logos/ihedrea.png' },
  { name: "Apprentis d'Auteuil", logo: '/logos/apprentis.jpg' },
  { name: 'Sauvegarde', logo: '/logos/sauvegarde.png' },
  { name: 'Daan', logo: '/logos/daan.png' },
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

  // Duplicate for seamless loop
  const track = [...CLIENTS, ...CLIENTS]

  return (
    <section ref={ref} className="py-20 relative overflow-hidden" style={{ background: '#F0F4FC' }}>
      <style>{STYLES}</style>

      {/* Top / bottom subtle borders */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#3D6DB8]/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#3D6DB8]/20 to-transparent" />

      <div
        className="max-w-6xl mx-auto px-6 text-center mb-10"
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

      {/* Marquee */}
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #F0F4FC, transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #F0F4FC, transparent)' }} />

        <div className="marquee-track flex items-center gap-10 w-max py-2">
          {track.map((client, i) => (
            <div
              key={i}
              className="flex items-center justify-center h-14 px-6 bg-white rounded-xl border border-[#E5EAF3] hover:border-[#3D6DB8]/30 hover:shadow-md hover:shadow-[#3D6DB8]/10 transition-all duration-300 hover:-translate-y-0.5 group min-w-[120px]"
              style={{
                boxShadow: '0 2px 8px rgba(26,43,74,0.06)',
              }}
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-8 max-w-[90px] object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300 grayscale group-hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
