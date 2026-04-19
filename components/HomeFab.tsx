'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'

/**
 * HomeFab — Bouton flottant de retour à l'accueil
 * - Visible uniquement sur mobile et tablette (md:hidden)
 * - Apparaît après scroll > 300px (inutile en haut de page)
 * - Position bottom-left, mirrore le FAB mage (bottom-right)
 */
export default function HomeFab() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <Link
      href="/"
      aria-label="Retour à l'accueil"
      className={`fixed bottom-24 left-6 z-40 md:hidden w-12 h-12 rounded-full bg-[#1A2B4A] text-white flex items-center justify-center shadow-lg hover:bg-[#3D6DB8] transition-all duration-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    </Link>
  )
}

