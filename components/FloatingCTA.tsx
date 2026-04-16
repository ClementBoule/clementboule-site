'use client'
import { useState, useEffect } from 'react'

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      // Show after scrolling 300px
      setVisible(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    // Check immediately
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!mounted) return null

  return (
    <div
      className="fixed bottom-6 left-6 z-40"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(12px)',
        transition: 'opacity 0.35s ease, transform 0.35s ease',
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      <a
        href="/#contact"
        className="flex items-center gap-2.5 px-4 py-3 rounded-2xl text-white font-semibold text-sm shadow-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-2xl"
        style={{
          background: 'linear-gradient(135deg, #1A2B4A 0%, #2D4A7A 100%)',
          boxShadow: '0 4px 20px rgba(26,43,74,0.45)',
          border: '1px solid rgba(255,255,255,0.1)',
        }}
        aria-label="Prendre rendez-vous"
      >
        {/* Calendar icon */}
        <svg
          width="16" height="16" viewBox="0 0 20 20" fill="none"
          style={{ flexShrink: 0 }}
        >
          <rect x="2" y="4" width="16" height="14" rx="2" stroke="white" strokeWidth="1.5"/>
          <path d="M2 8h16" stroke="white" strokeWidth="1.5"/>
          <path d="M6 2v4M14 2v4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          <circle cx="7" cy="12" r="1" fill="white"/>
          <circle cx="10" cy="12" r="1" fill="white"/>
          <circle cx="13" cy="12" r="1" fill="white"/>
        </svg>
        <span>Prendre RDV</span>
      </a>
    </div>
  )
}
