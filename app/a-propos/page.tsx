import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FinalCTA from '@/components/FinalCTA'

export const metadata: Metadata = {
  title: 'À propos',
  description: "Clément Boulé — formateur, consultant et coach en entreprise à Paris. Bilingue FR/EN, 10 ans d'accompagnement, +1 800 participants formés.",
  alternates: { canonical: 'https://www.clementboule.fr/a-propos' },
}

const STATS = [
  { value: '+1 800', label: 'participants formés', color: 'sarcelle', rot: '-rotate-[0.5deg]' },
  { value: '10 ans', label: "d'accompagnement", color: 'terracotta', rot: 'rotate-[0.4deg]' },
  { value: 'FR / EN', label: 'bilingue', color: 'sauge-deep', rot: '-rotate-[0.3deg]' },
]

const EXPERIENCES = [
  {
    role: 'Formateur indépendant',
    company: 'Freelance',
    period: '2022 – présent',
    desc: "Conception et animation de formations sur-mesure en leadership, RH et soft skills. En entreprises et collectivités, en France et à l'étranger.",
    logo: '/logos/exp-photo.jpg',
    color: 'sarcelle',
    rot: '-rotate-[0.4deg]',
  },
  {
    role: 'Co-fondateur',
    company: 'Mantractif',
    period: '2023 – présent',
    desc: "Co-fondateur d'une structure de coaching et formation en Île-de-France, axée sur le développement professionnel et le management.",
    logo: '/logos/exp-mantractif.png',
    color: 'terracotta',
    rot: 'rotate-[0.5deg]',
  },
  {
    role: 'Coach sportif & performance',
    company: 'Indépendant — Innsbruck',
    period: '2016 – 2021',
    desc: "Coaching individuel et collectif sur la performance et le développement mental. Autriche et Allemagne.",
    logo: '/logos/exp-crossfit.png',
    color: 'sauge-deep',
    rot: '-rotate-[0.3deg]',
  },
]

const EDUCATION = [
  { degree: 'Certification management du changement', school: 'ESSEC', year: '2026', logo: '/logos/edu-essec.jpg' },
  { degree: "La méthode Agile pour accompagner le changement", school: 'Excellence Formation', year: '2024', logo: '/logos/edu-excellens.png' },
  { degree: 'BPJEPS AF — VAE', school: 'Académie de Normandie', year: '2021', logo: '/logos/edu-normandie.png' },
  { degree: 'Master 2 Intercultural Behavior Management', school: 'MCI Innsbruck', year: '2018', logo: '/logos/edu-mci.png' },
  { degree: 'Master 1 PGE International Business', school: 'Rennes School of Business', year: '2017', logo: '/logos/edu-rennes-sb.jpg' },
]

const VALEURS = ['Fidélité factuelle', 'Sur-mesure', 'Bilingue FR/EN', 'Impact durable', 'Direct et exigeant']

export default function APropos() {
  return (
    <main className="min-h-screen bg-cb-sable">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 md:pt-32 pb-16 md:pb-20 bg-cb-sable border-t-4 border-cb-encre">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-[1.4fr_1fr] gap-10 lg:gap-16 items-center">
            <div>
              <span className="inline-block font-marker text-cb-cardinal text-lg -rotate-2 mb-3">
                ↓ À propos
              </span>
              <h1 className="font-anton text-5xl md:text-6xl lg:text-7xl uppercase leading-[0.92] text-cb-encre mb-6">
                Formateur, consultant<br />
                et <span className="inline-block bg-cb-sarcelle text-cb-sable px-3 py-0.5 -rotate-1 rounded-sm">coach</span>.
              </h1>
              <p className="text-base md:text-lg text-cb-encre-soft leading-relaxed mb-4 border-l-4 border-cb-cardinal pl-5">
                Je suis Clément Boulé, 32 ans, basé à Paris. J&apos;accompagne managers, équipes et dirigeants depuis dix ans — d&apos;abord comme coach sportif, aujourd&apos;hui comme formateur. En français comme en anglais.
              </p>
              <p className="text-base text-cb-encre-soft leading-relaxed mb-8">
                Pas de catalogue tout fait. Je construis chaque programme à partir de votre quotidien, avec un objectif simple : que ça change vraiment quelque chose après la formation, pas juste pendant.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-cb-sarcelle text-cb-sable font-anton text-sm uppercase tracking-wider border-[2.5px] border-cb-encre px-5 py-3 rounded-sm hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200"
                  style={{ boxShadow: '4px 4px 0 var(--cb-encre)' }}
                >
                  Me contacter →
                </a>
                <a
                  href="/formations"
                  className="inline-flex items-center gap-2 bg-cb-sable text-cb-encre font-anton text-sm uppercase tracking-wider border-[2.5px] border-cb-sauge-deep px-5 py-3 rounded-sm hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200"
                  style={{ boxShadow: '4px 4px 0 var(--cb-sauge-deep)' }}
                >
                  Voir les formations
                </a>
              </div>
            </div>
            {/* Portrait frame creme */}
            <div className="flex justify-center md:justify-end">
              <div
                className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-cb-creme border-[2.5px] border-cb-sauge-deep rounded-sm overflow-hidden -rotate-[1deg]"
                style={{ boxShadow: '10px 10px 0 var(--cb-sarcelle)' }}
              >
                <img src="/clement.jpg" alt="Clément Boulé — formateur consultant coach Paris" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-20 bg-cb-creme border-t-4 border-cb-encre">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12">
            {STATS.map((s) => (
              <div key={s.label} className={`text-center ${s.rot}`}>
                <div className={`font-anton text-6xl md:text-7xl lg:text-8xl uppercase leading-[0.9] mb-2 text-cb-${s.color}`}>
                  {s.value}
                </div>
                <div className="text-sm md:text-base font-medium text-cb-encre-soft uppercase tracking-widest">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expérience + Formation */}
      <section className="py-20 md:py-28 bg-cb-sable border-t-4 border-cb-encre">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">

            {/* Expérience */}
            <div>
              <span className="inline-block font-marker text-cb-cardinal text-lg -rotate-2 mb-3">
                ↓ Expérience
              </span>
              <h2 className="font-anton text-4xl md:text-5xl uppercase leading-[0.95] text-cb-encre mb-8">
                Le <span className="inline-block bg-cb-terracotta text-cb-sable px-2 -rotate-1 rounded-sm">parcours</span>.
              </h2>
              <div className="space-y-5">
                {EXPERIENCES.map((exp) => (
                  <div
                    key={exp.role}
                    className={`bg-white border-[2.5px] border-cb-sauge-deep rounded-sm p-5 ${exp.rot} hover:rotate-0 hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200`}
                    style={{ boxShadow: `5px 5px 0 var(--cb-${exp.color})` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-cb-sable border-2 border-cb-sauge-deep rounded-sm flex items-center justify-center overflow-hidden flex-shrink-0">
                        <img src={exp.logo} alt={exp.company} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className={`font-anton text-xs uppercase tracking-widest text-cb-${exp.color} mb-1`}>{exp.period}</p>
                        <h3 className="font-anton text-lg md:text-xl uppercase leading-tight text-cb-encre">{exp.role}</h3>
                        <p className="text-sm text-cb-encre-soft mb-2 font-medium">{exp.company}</p>
                        <p className="text-sm text-cb-encre-soft leading-relaxed">{exp.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Formation */}
            <div>
              <span className="inline-block font-marker text-cb-cardinal text-lg -rotate-2 mb-3">
                ↓ Formation
              </span>
              <h2 className="font-anton text-4xl md:text-5xl uppercase leading-[0.95] text-cb-encre mb-8">
                Les <span className="inline-block bg-cb-sauge text-cb-sable px-2 -rotate-1 rounded-sm">diplômes</span>.
              </h2>
              <div className="space-y-3">
                {EDUCATION.map((edu, i) => (
                  <div
                    key={edu.degree}
                    className={`bg-cb-creme border-[2.5px] border-cb-sauge-deep rounded-sm p-4 flex items-center gap-4 ${i % 2 === 0 ? '-rotate-[0.3deg]' : 'rotate-[0.3deg]'} hover:rotate-0 hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200`}
                    style={{ boxShadow: '4px 4px 0 var(--cb-sauge)' }}
                  >
                    <div className="w-12 h-12 bg-cb-sable border-2 border-cb-sauge-deep rounded-sm flex items-center justify-center overflow-hidden flex-shrink-0">
                      <img src={edu.logo} alt={edu.school} className="w-full h-full object-contain p-1" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-anton text-xs uppercase tracking-widest text-cb-cardinal mb-0.5">{edu.year}</p>
                      <h3 className="text-sm font-bold text-cb-encre leading-snug">{edu.degree}</h3>
                      <p className="text-xs text-cb-encre-soft mt-0.5">{edu.school}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <span className="inline-block font-marker text-cb-cardinal text-lg -rotate-2 mb-3">
                  Comment je travaille →
                </span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {VALEURS.map((v, i) => (
                    <span
                      key={v}
                      className="font-anton text-xs uppercase tracking-wider text-cb-encre bg-cb-creme border-2 border-cb-sauge-deep px-3 py-1.5 rounded-sm"
                      style={{ transform: `rotate(${(i % 2 === 0 ? -0.4 : 0.4)}deg)` }}
                    >
                      {v}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </main>
  )
}
