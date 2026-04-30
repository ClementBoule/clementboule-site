'use client'

import { useState } from 'react'

export default function AboutPhotos() {
  const [top, setTop] = useState<'costume' | 'coach'>('costume')
  const costumeTop = top === 'costume'

  return (
    <div className="flex justify-center md:justify-end">
      <div className="relative w-full max-w-md h-[26rem] md:h-[30rem]">
        {/* Coach card — back-left, fanned counter-clockwise */}
        <div
          onMouseEnter={() => setTop('coach')}
          className="absolute right-0 bottom-0 w-56 h-72 sm:w-60 sm:h-80 md:w-64 md:h-[22rem] cursor-pointer transition-all duration-300 ease-out"
          style={{
            transformOrigin: 'bottom right',
            transform: 'rotate(-10deg)',
            zIndex: costumeTop ? 10 : 30,
            boxShadow: costumeTop ? '6px 6px 0 var(--cb-terracotta)' : '14px 14px 0 var(--cb-terracotta)',
            filter: costumeTop ? 'brightness(0.95)' : 'brightness(1)',
          }}
        >
          <img
            src="/clement-coach.jpg"
            alt="Clément Boulé coach sportif à Innsbruck"
            className="w-full h-full object-cover bg-cb-creme border-[3px] border-cb-encre"
          />
          <span className="absolute -top-3 left-3 bg-cb-rose text-cb-cardinal font-marker px-3 py-1 text-xs sm:text-sm rounded-sm rotate-2 whitespace-nowrap shadow-sm">
            Innsbruck · coach sportif
          </span>
        </div>

        {/* Costume card — front-right, slight clockwise tilt */}
        <div
          onMouseEnter={() => setTop('costume')}
          className="absolute right-0 bottom-0 w-56 h-72 sm:w-60 sm:h-80 md:w-64 md:h-[22rem] cursor-pointer transition-all duration-300 ease-out"
          style={{
            transformOrigin: 'bottom right',
            transform: 'rotate(4deg)',
            zIndex: costumeTop ? 30 : 10,
            boxShadow: costumeTop ? '14px 14px 0 var(--cb-sarcelle)' : '6px 6px 0 var(--cb-sarcelle)',
            filter: costumeTop ? 'brightness(1)' : 'brightness(0.95)',
          }}
        >
          <img
            src="/clement.jpg"
            alt="Clément Boulé formateur en entreprise à Paris"
            className="w-full h-full object-cover bg-cb-creme border-[3px] border-cb-encre"
          />
          <span className="absolute -top-3 right-3 bg-cb-rose text-cb-cardinal font-marker px-3 py-1 text-xs sm:text-sm rounded-sm -rotate-2 whitespace-nowrap shadow-sm">
            Paris · formateur
          </span>
        </div>
      </div>
    </div>
  )
}
