'use client'

import { useState } from 'react'

export default function AboutPhotos() {
  const [top, setTop] = useState<'costume' | 'coach'>('costume')
  const costumeTop = top === 'costume'

  const SPRING = 'cubic-bezier(0.34, 1.3, 0.64, 1)'
  const TRANSITION = `transform 0.55s ${SPRING}, box-shadow 0.35s ease-out, filter 0.4s ease`

  return (
    <div className="flex justify-center md:justify-end">
      <div className="relative w-full max-w-md h-[26rem] md:h-[30rem]">
        {/* Coach card — back-left, fanned counter-clockwise */}
        <div
          onMouseEnter={() => setTop('coach')}
          onFocus={() => setTop('coach')}
          tabIndex={0}
          aria-label="Coach sportif Innsbruck — survoler pour mettre au premier plan"
          className="absolute right-0 bottom-0 w-56 h-72 sm:w-60 sm:h-80 md:w-64 md:h-[22rem] cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-cb-terracotta"
          style={{
            transformOrigin: 'bottom right',
            transform: costumeTop
              ? 'rotate(-13deg) translate(-6px, 4px)'
              : 'rotate(-3deg) translate(0, -14px) scale(1.03)',
            zIndex: costumeTop ? 10 : 30,
            transition: TRANSITION,
            boxShadow: costumeTop
              ? '4px 4px 0 var(--cb-terracotta), 6px 6px 18px rgba(0,0,0,0.10)'
              : '14px 14px 0 var(--cb-terracotta), 18px 22px 36px rgba(0,0,0,0.20)',
            filter: costumeTop ? 'brightness(0.88) saturate(0.80)' : 'brightness(1.02) saturate(1.06)',
          }}
        >
          <div className="relative w-full h-full bg-cb-creme border-[3px] border-cb-encre overflow-hidden">
            <img
              src="/clement-coach.jpg"
              alt="Clément Boulé coach sportif à Innsbruck"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0 pointer-events-none transition-opacity duration-500 ease-out"
              style={{
                background: 'linear-gradient(135deg, rgba(42,42,42,0.22) 0%, rgba(42,42,42,0) 55%)',
                opacity: costumeTop ? 1 : 0,
              }}
            />
          </div>
          <span
            className="absolute -top-3 -left-3 bg-cb-rose text-cb-cardinal font-marker px-3 py-1 text-xs sm:text-sm rounded-sm whitespace-nowrap shadow-md transition-all duration-500 ease-out"
            style={{ transform: costumeTop ? 'rotate(2deg) scale(0.94)' : 'rotate(-3deg) scale(1.06)' }}
          >
            Innsbruck · coach sportif
          </span>
        </div>

        {/* Costume card — front-right, fanned clockwise (default top) */}
        <div
          onMouseEnter={() => setTop('costume')}
          onFocus={() => setTop('costume')}
          tabIndex={0}
          aria-label="Formateur entreprise Paris — survoler pour mettre au premier plan"
          className="absolute right-0 bottom-0 w-56 h-72 sm:w-60 sm:h-80 md:w-64 md:h-[22rem] cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-cb-sarcelle"
          style={{
            transformOrigin: 'bottom right',
            transform: costumeTop
              ? 'rotate(3deg) translate(0, -14px) scale(1.03)'
              : 'rotate(10deg) translate(6px, 4px)',
            zIndex: costumeTop ? 30 : 10,
            transition: TRANSITION,
            boxShadow: costumeTop
              ? '14px 14px 0 var(--cb-sarcelle), 18px 22px 36px rgba(0,0,0,0.20)'
              : '4px 4px 0 var(--cb-sarcelle), 6px 6px 18px rgba(0,0,0,0.10)',
            filter: costumeTop ? 'brightness(1.02) saturate(1.06)' : 'brightness(0.88) saturate(0.80)',
          }}
        >
          <div className="relative w-full h-full bg-cb-creme border-[3px] border-cb-encre overflow-hidden">
            <img
              src="/clement.jpg"
              alt="Clément Boulé formateur en entreprise à Paris"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0 pointer-events-none transition-opacity duration-500 ease-out"
              style={{
                background: 'linear-gradient(135deg, rgba(42,42,42,0.22) 0%, rgba(42,42,42,0) 55%)',
                opacity: costumeTop ? 0 : 1,
              }}
            />
          </div>
          <span
            className="absolute -top-3 -right-3 bg-cb-rose text-cb-cardinal font-marker px-3 py-1 text-xs sm:text-sm rounded-sm whitespace-nowrap shadow-md transition-all duration-500 ease-out"
            style={{ transform: costumeTop ? 'rotate(-3deg) scale(1.06)' : 'rotate(2deg) scale(0.94)' }}
          >
            Paris · formateur
          </span>
        </div>
      </div>
    </div>
  )
}
