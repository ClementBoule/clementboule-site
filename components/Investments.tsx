'use client'

import { useState } from 'react'
import { useLang } from './LanguageContext'

const INVESTMENTS: { name: string; logo: string; url: string; tagline: string; taglineEn: string; rot: string; shadowColor: string }[] = [
  { name: 'Daan Tech',  logo: '/logos/inv-daan-tech.png', url: 'https://www.daan.tech/',  tagline: 'Hardware FR · lave-vaisselle Bob',  taglineEn: 'French hardware · Bob dishwasher',     rot: '-rotate-[0.5deg]', shadowColor: 'var(--cb-sarcelle)' },
  { name: 'Mosa Meat',  logo: '/logos/inv-mosa-meat.png', url: 'https://mosameat.com/',   tagline: 'Viande cultivée · Pays-Bas',         taglineEn: 'Cultivated meat · Netherlands',         rot: 'rotate-[0.4deg]',  shadowColor: 'var(--cb-terracotta)' },
  { name: 'My Food',    logo: '/logos/inv-my-food.png',   url: 'https://www.myfood.eu/',  tagline: 'Agriculture urbaine connectée',      taglineEn: 'Connected urban farming',                rot: '-rotate-[0.3deg]', shadowColor: 'var(--cb-sauge-deep)' },
]

function InvestmentCard({
  name, logo, url, tagline, taglineEn, rot, shadowColor, lang,
}: typeof INVESTMENTS[number] & { lang: 'fr' | 'en' }) {
  const [hovered, setHovered] = useState(false)
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className={`relative bg-white border-[2.5px] border-cb-sauge-deep rounded flex flex-col items-center justify-center h-44 sm:h-52 p-4 transition-all duration-200 ${rot} hover:rotate-0 hover:translate-x-[-3px] hover:translate-y-[-3px] cursor-pointer min-w-0 overflow-hidden`}
      style={{ boxShadow: hovered ? `10px 10px 0 ${shadowColor}` : `5px 5px 0 ${shadowColor}` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label={`${name} · ${lang === 'fr' ? tagline : taglineEn}`}
    >
      <img
        src={logo}
        alt={name}
        className="max-h-14 sm:max-h-16 max-w-[80%] object-contain mb-3"
      />
      <span className="text-xs sm:text-sm font-semibold text-cb-encre text-center leading-tight">
        {lang === 'fr' ? tagline : taglineEn}
      </span>
    </a>
  )
}

export default function Investments() {
  const { lang } = useLang()
  return (
    <section id="actionnaire" className="bg-cb-creme text-cb-encre py-16 md:py-20 px-6 border-t-2 border-cb-encre">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 max-w-3xl">
          <span className="inline-block font-marker text-cb-cardinal text-sm sm:text-base mb-3 -rotate-1">
            Skin in the game
          </span>
          <h2 className="font-anton text-4xl sm:text-5xl md:text-6xl uppercase leading-[0.95] tracking-tight mb-4">
            {lang === 'fr' ? (
              <>Aussi <span className="bg-cb-terracotta text-cb-sable px-2 -rotate-1 inline-block">actionnaire</span> en direct.</>
            ) : (
              <>Also a <span className="bg-cb-terracotta text-cb-sable px-2 -rotate-1 inline-block">direct shareholder</span>.</>
            )}
          </h2>
          <p className="text-base md:text-lg max-w-2xl font-medium leading-relaxed text-pretty">
            {lang === 'fr' ? (
              <>Petit actionnaire, en direct, de trois sociétés qui m'ont convaincu sur leur transition. Hardware français, viande cultivée, agriculture urbaine.{' '}<strong className="bg-cb-rose px-1.5 rounded-sm font-semibold">De quoi rester proche des arbitrages réels que les dirigeants me racontent en mission.</strong></>
            ) : (
              <>A direct minority shareholder in three companies whose transition convinced me. French hardware, cultivated meat, connected urban farming.{' '}<strong className="bg-cb-rose px-1.5 rounded-sm font-semibold">It keeps me close to the real trade-offs leaders share with me on assignments.</strong></>
            )}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {INVESTMENTS.map(inv => <InvestmentCard key={inv.name} {...inv} lang={lang} />)}
        </div>
      </div>
    </section>
  )
}
