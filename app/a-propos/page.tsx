import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FinalCTA from '@/components/FinalCTA'

export const metadata: Metadata = {
  title: 'À propos',
  description: "Clément Boulé — formateur, consultant et coach en entreprise à Paris. Bilingue FR/EN, 5 ans d'expérience, +1 800 participants formés.",
  alternates: { canonical: 'https://www.clementboule.fr/a-propos' },
}

const EXPERIENCES = [
  {
    role: 'Formateur & Consultant indépendant',
    company: 'Freelance',
    period: '2022 – présent',
    desc: "Conception et animation de formations sur-mesure en leadership, management, RH et soft skills. Intervention en business schools, grandes entreprises et PME.",
  },
  {
    role: 'Co-fondateur',
    company: 'Mantractif',
    period: '2023 – présent',
    desc: "Co-création d'une structure de coaching et formation en Île-de-France, axée sur la transformation professionnelle.",
  },
  {
    role: 'Coach sportif & préparateur mental',
    company: 'Indépendant — Innsbruck',
    period: '2018 – 2021',
    desc: "Accompagnement individuel et collectif en performance sportive et préparation mentale. Expérience bilingue franco-autrichienne.",
  },
  {
    role: 'Responsable pédagogique',
    company: 'Organisme de formation',
    period: '2020 – 2022',
    desc: "Coordination pédagogique, ingénierie de formation, relation clients institutionnels.",
  },
]

const EDUCATION = [
  { degree: 'Master Management des Ressources Humaines', school: 'ISCOM Paris', year: '2020' },
  { degree: 'Licence Sciences de l\'\u00c9ducation', school: 'Université Paris Est Créteil', year: '2018' },
  { degree: 'Certifié DISC', school: 'Extended DISC France', year: '2021' },
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
                Je suis Clément Boulé, 32 ans, basé à Paris. J'accompagne des équipes, des managers et des dirigeants depuis 5 ans — en français et en anglais — sur des enjeux de leadership, de communication et de développement humain.
              </p>
              <p className="text-base text-[#6B7E95] leading-relaxed mb-8">
                Je ne vends pas de catalogue. Je construis des programmes à partir de vos réalités, avec une seule boussole : ce qui change durablement les comportements, pas juste les connaissances.
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[{value:'+1 800',label:'participants formés'},{value:'5 ans',label:"d'expérience terrain"},{value:'15+',label:'clients actifs / an'},{value:'FR / EN',label:'Bilingue'}].map((s) => (
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
              <div className="space-y-8">
                {EXPERIENCES.map((exp) => (
                  <div key={exp.role} className="relative pl-5 border-l-2 border-[#3D6DB8]/20">
                    <div className="absolute -left-1.5 top-1 w-2.5 h-2.5 rounded-full bg-[#3D6DB8]" />
                    <p className="text-xs text-[#3D6DB8] font-semibold mb-1">{exp.period}</p>
                    <h3 className="text-base font-bold text-[#1A2B4A]">{exp.role}</h3>
                    <p className="text-sm text-[#6B7E95] mb-1">{exp.company}</p>
                    <p className="text-sm text-[#6B7E95] leading-relaxed">{exp.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold text-[#3D6DB8] uppercase tracking-widest mb-6">Formation & certifications</p>
              <div className="space-y-6">
                {EDUCATION.map((edu) => (
                  <div key={edu.degree} className="p-5 bg-[#F5F7FB] rounded-xl border border-[#1A2B4A]/6">
                    <p className="text-xs text-[#3D6DB8] font-semibold mb-1">{edu.year}</p>
                    <h3 className="text-base font-bold text-[#1A2B4A]">{edu.degree}</h3>
                    <p className="text-sm text-[#6B7E95]">{edu.school}</p>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <p className="text-xs font-semibold text-[#3D6DB8] uppercase tracking-widest mb-4">Valeurs de travail</p>
                <div className="flex flex-wrap gap-2">
                  {['Fidelité factuelle','Sur-mesure','Pas de placeholders','Bilingue FR/EN','Impact durable','Direct et exigeant'].map((v) => (
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
