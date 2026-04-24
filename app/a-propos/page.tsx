import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FinalCTA from '@/components/FinalCTA'

export const metadata: Metadata = {
  title: 'À propos',
  description: "Clément Boulé — formateur, consultant et coach en entreprise à Paris. Bilingue FR/EN, 10 ans d'accompagnement, +1 800 participants formés.",
  alternates: { canonical: 'https://www.clementboule.fr/a-propos' },
}

const EXPERIENCES = [
  {
    role: 'Formateur indépendant',
    company: 'Freelance',
    period: '2022 – présent',
    desc: "Conception et animation de formations sur-mesure en leadership, RH et soft skills. En entreprises et collectivités, en France et à l'étranger.",
    logo: '/logos/exp-photo.jpg',
  },
  {
    role: 'Co-fondateur',
    company: 'Mantractif',
    period: '2023 – présent',
    desc: "Co-fondateur d'une structure de coaching et formation en Île-de-France, axée sur le développement professionnel et le management.",
    logo: '/logos/exp-mantractif.png',
  },
  {
    role: 'Coach sportif & performance',
    company: 'Indépendant — Innsbruck',
    period: '2016 – 2021',
    desc: "Coaching individuel et collectif sur la performance et le développement mental. Autriche et Allemagne.",
    logo: '/logos/exp-crossfit.png',
  },
]

const EDUCATION = [
  { degree: 'Certification management du changement', school: 'ESSEC', year: '2026', logo: '/logos/edu-essec.jpg' },
  { degree: "La méthode Agile pour accompagner le changement", school: 'Excellence Formation', year: '2024', logo: '/logos/edu-excellens.png' },
  { degree: 'BPJEPS AF — VAE', school: 'Académie de Normandie', year: '2021', logo: '/logos/edu-normandie.png' },
  { degree: 'Master 2 Intercultural Behavior Management', school: 'MCI Innsbruck', year: '2018', logo: '/logos/edu-mci.png' },
  { degree: 'Master 1 PGE International Business', school: 'Rennes School of Business', year: '2017', logo: '/logos/edu-rennes-sb.jpg' },
]

export default function APropos() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#F5F7FB] via-[#EEF3FA] to-[#F5F0FB]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-semibold text-[#3D6DB8] uppercase tracking-widest mb-4">À propos</p>
              <h1 className="text-4xl md:text-5xl font-bold text-[#1A2B4A] leading-tight mb-6">
                Formateur, consultant<br />et coach en entreprise
              </h1>
              <p className="text-base text-[#6B7E95] leading-relaxed mb-6">
                Je suis Clément Boulé, 32 ans, basé à Paris. J'accompagne managers, équipes et dirigeants depuis dix ans — d'abord comme coach sportif, aujourd'hui comme formateur. En français comme en anglais.
              </p>
              <p className="text-base text-[#6B7E95] leading-relaxed mb-8">
                Pas de catalogue tout fait. Je construis chaque programme à partir de votre quotidien, avec un objectif simple : que ça change vraiment quelque chose après la formation, pas juste pendant.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="/contact" className="inline-flex items-center gap-2 bg-[#3D6DB8] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#2D5A9E] hover:-translate-y-0.5 shadow-md transition-all duration-200">Me contacter</a>
                <a href="/formations" className="inline-flex items-center gap-2 border border-[#1A2B4A]/15 text-[#1A2B4A] font-semibold px-6 py-3 rounded-full hover:bg-white hover:shadow-md transition-all duration-200">Voir les formations</a>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-xl">
                <img src="/clement.jpg" alt="Clément Boulé — formateur consultant coach Paris" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white border-b border-[#1A2B4A]/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-3 gap-8">
            {[{value:'+1 800',label:'participants formés'},{value:'10 ans',label:"d'accompagnement"},{value:'FR / EN',label:'Bilingue'}].map((s) => (
              <div key={s.label} className="text-center"><div className="text-3xl font-extrabold text-[#1A2B4A] mb-1">{s.value}</div><div className="text-sm text-[#6B7E95]">{s.label}</div></div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-xs font-semibold text-[#3D6DB8] uppercase tracking-widest mb-6">Expérience</p>
              <div className="space-y-6">
                {EXPERIENCES.map((exp) => (
                  <div key={exp.role} className="relative pl-5 border-l-2 border-[#3D6DB8]/20">
                    <div className="absolute -left-1.5 top-1 w-2.5 h-2.5 rounded-full bg-[#3D6DB8]" />
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-xl bg-white border border-[#1A2B4A]/10 flex items-center justify-center overflow-hidden flex-shrink-0 shadow-sm">
                        <img src={exp.logo} alt={exp.company} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-[#3D6DB8] font-semibold mb-1">{exp.period}</p>
                        <h3 className="text-base font-bold text-[#1A2B4A]">{exp.role}</h3>
                        <p className="text-sm text-[#6B7E95] mb-1">{exp.company}</p>
                        <p className="text-sm text-[#6B7E95] leading-relaxed">{exp.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold text-[#3D6DB8] uppercase tracking-widest mb-6">Formation & certifications</p>
              <div className="space-y-4">
                {EDUCATION.map((edu) => (
                  <div key={edu.degree} className="p-4 bg-[#F5F7FB] rounded-xl border border-[#1A2B4A]/6 flex items-center gap-4">
                    <div className="w-14 h-14 rounded-lg bg-white border border-[#1A2B4A]/10 flex items-center justify-center overflow-hidden flex-shrink-0">
                      <img src={edu.logo} alt={edu.school} className="w-full h-full object-contain p-1" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-[#3D6DB8] font-semibold mb-1">{edu.year}</p>
                      <h3 className="text-sm font-bold text-[#1A2B4A] leading-snug">{edu.degree}</h3>
                      <p className="text-xs text-[#6B7E95] mt-0.5">{edu.school}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <p className="text-xs font-semibold text-[#3D6DB8] uppercase tracking-widest mb-4">Comment je travaille</p>
                <div className="flex flex-wrap gap-2">
                  {['Fidélité factuelle','Sur-mesure','Bilingue FR/EN','Impact durable','Direct et exigeant'].map((v) => (
                    <span key={v} className="text-xs font-medium text-[#1A2B4A] bg-[#F5F7FB] border border-[#1A2B4A]/10 px-3 py-1.5 rounded-full">{v}</span>
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
