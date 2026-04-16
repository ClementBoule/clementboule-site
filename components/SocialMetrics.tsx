'use client'
import { useEffect, useRef, useState } from 'react'

const METRICS = [
  {
    value: '+500',
    label: 'Apprenants formés',
    sublabel: 'depuis 2012',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 3L22 8.5V15.5L12 21L2 15.5V8.5L12 3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
        <path d="M2 8.5L12 14L22 8.5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
        <line x1="12" y1="14" x2="12" y2="21" stroke="currentColor" strokeWidth="1.6"/>
      </svg>
    ),
    color: '#3D6DB8',
    bg: 'rgba(61,109,184,0.10)',
  },
  {
    value: '98%',
    label: 'Taux de satisfaction',
    sublabel: 'évaluations à chaud',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 2l2.9 6.2L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l7.1-1.07L12 2z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
      </svg>
    ),
    color: '#E8836A',
    bg: 'rgba(232,131,106,0.10)',
  },
  {
    value: '12+',
    label: "Ans d'expérience",
    sublabel: 'en entreprise & école',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M12 7v5.5l3.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
    color: '#2E9E84',
    bg: 'rgba(46,158,132,0.10)',
  },
  {
    value: '6',
    label: 'Secteurs accompagnés',
    sublabel: 'public, privé, éducation…',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="7" width="6" height="14" rx="1" stroke="currentColor" strokeWidth="1.6"/>
        <rect x="9" y="3" width="6" height="18" rx="1" stroke="currentColor" strokeWidth="1.6"/>
        <rect x="16" y="10" width="6" height="11" rx="1" stroke="currentColor" strokeWidth="1.6"/>
      </svg>
    ),
    color: '#7B5FC5',
    bg: 'rgba(123,95,197,0.10)',
  },
]

export default function SocialMetrics() {
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

  return (
    <section ref={ref} className="py-16 md:py-20" style={{ background: '#F7F9FD' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {METRICS.map((m, i) => (
            <div
              key={i}
              className="rounded-2xl p-5 md:p-6 flex flex-col gap-3 border border-white"
              style={{
                background: '#ffffff',
                boxShadow: '0 2px 16px rgba(26,43,74,0.07)',
                opacity: visible ? 1 : 0,
                transform: visible ? 'none' : 'translateY(20px)',
                transition: `opacity 0.55s ease ${i * 0.1}s, transform 0.55s ease ${i * 0.1}s`,
              }}
            >
              {/* Icon */}
              <span
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: m.bg, color: m.color }}
              >
                {m.icon}
              </span>

              {/* Value */}
              <div>
                <p
                  className="text-3xl md:text-4xl font-black tracking-tight leading-none"
                  style={{ color: m.color }}
                >
                  {m.value}
                </p>
                <p className="text-[#1A2B4A] font-semibold text-sm mt-1 leading-snug">
                  {m.label}
                </p>
                <p className="text-[#1A2B4A]/40 text-xs mt-0.5">{m.sublabel}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
