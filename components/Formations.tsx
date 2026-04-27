'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useLang } from './LanguageContext'
import { formations } from './formations-data'

const COLOR_MAP: Record<string, { bg: string; shadow: string; accent: string }> = {
  'rh-marque-employeur':     { bg: 'rgba(31,184,176,0.10)',  shadow: 'var(--cb-sarcelle)',       accent: 'sarcelle' },
  'posture-professionnelle': { bg: 'rgba(232,93,47,0.10)',   shadow: 'var(--cb-terracotta)',     accent: 'terracotta' },
  'prevention-rps':          { bg: 'rgba(15,123,117,0.10)',  shadow: 'var(--cb-sarcelle-deep)',  accent: 'sarcelle-deep' },
  'strategie-entreprise':    { bg: 'rgba(200,16,46,0.10)',   shadow: 'var(--cb-cardinal)',       accent: 'cardinal' },
  'soft-skills':             { bg: 'rgba(232,93,47,0.10)',   shadow: 'var(--cb-terracotta)',     accent: 'terracotta' },
  'spine-up':                { bg: 'rgba(139,168,142,0.20)', shadow: 'var(--cb-sauge-deep)',     accent: 'sauge-deep' },
}

const ROTATIONS = ['-rotate-[0.6deg]', 'rotate-[0.5deg]', '-rotate-[0.4deg]', 'rotate-[0.7deg]', '-rotate-[0.3deg]', 'rotate-[0.4deg]']

export default function Formations() {
  const { lang } = useLang()

  return (
    <section className="bg-cb-sable py-20 md:py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-[2fr_1fr] gap-10 items-end mb-14">
          <div>
            <span className="inline-block font-marker text-cb-cardinal text-lg -rotate-2 mb-3">
              {lang === 'fr' ? 'Mes formations →' : 'My training programs →'}
            </span>
            <h2 className="font-anton text-5xl md:text-7xl lg:text-8xl uppercase leading-[0.92] text-cb-encre">
              {lang === 'fr' ? (
                <>Six formations,<br /><span className="inline-block bg-cb-sauge text-cb-sable px-3 py-0.5 -rotate-1 rounded-sm">construites</span> avec vous.</>
              ) : (
                <>Six programs,<br /><span className="inline-block bg-cb-sauge text-cb-sable px-3 py-0.5 -rotate-1 rounded-sm">built</span> with you.</>
              )}
            </h2>
          </div>
          <div className="text-base font-medium border-l-4 border-cb-cardinal pl-5 max-w-md">
            {lang === 'fr'
              ? "Pour chaque mission, je construis le programme à partir de votre contexte."
              : "For each engagement, I build the program from your context."}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
          {formations.map((f, i) => {
            const c = COLOR_MAP[f.slug] || COLOR_MAP['rh-marque-employeur']
            const rot = ROTATIONS[i % ROTATIONS.length]
            return (
              <Link
                key={f.slug}
                href={`/formations/${f.slug}`}
                className={`group cb-formation-card relative bg-white border-[2.5px] border-cb-sauge-deep rounded flex flex-col ${rot} hover:rotate-0 hover:translate-x-[-3px] hover:translate-y-[-3px]`}
                style={{ ['--accent' as any]: c.shadow }}
              >
                <div className="relative aspect-[3/2] overflow-hidden border-b-[2.5px] border-cb-sauge-deep" style={{ backgroundColor: c.bg }}>
                  <span className={`absolute top-3 left-3 z-10 inline-block px-2.5 py-1 font-anton text-xs uppercase tracking-wider border-2 border-cb-sauge-deep rounded-sm bg-cb-sable text-cb-${c.accent}`}>
                    {f.tag}
                  </span>
                  <Image src={f.image} alt={f.title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
                </div>
                <div className="p-5 md:p-6 flex flex-col flex-1">
                  <h3 className="font-anton text-xl md:text-2xl uppercase leading-[1] mb-2 text-cb-encre">{f.title}</h3>
                  <p className="text-sm text-cb-encre-soft leading-snug text-pretty mb-4 flex-1">{f.shortDescription}</p>
                  <span className="inline-flex items-center gap-1.5 font-bold text-xs uppercase tracking-widest text-cb-encre border-b-2 border-cb-sauge-deep self-start pb-1 group-hover:border-cb-cardinal transition-colors">
                    {lang === 'fr' ? 'Voir le programme →' : 'See program →'}
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
