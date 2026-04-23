import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FinalCTA from '@/components/FinalCTA'

export const metadata: Metadata = {
  title: 'Cas clients',
  description: "Exemples de missions de Clément Boulé — formation, coaching et conseil en entreprise. Business schools, PME, associations.",
  alternates: { canonical: 'https://www.clementboule.fr/cas-clients' },
}

const CAS = [
  {
    client: 'Business school parisienne',
    tag: 'Formation · Management',
    sector: 'Enseignement supérieur',
    challenge: "Former des promotions de 25 à 30 étudiants en Master RH aux fondamentaux du management, avec des niveaux d'expérience très hétérogènes.",
    approach: "Animation de modules semestriels (management, leadership, posture professionnelle) adaptés au niveau et à la dynamique de chaque promo. Introduction du DISC pour personnaliser les apprentissages.",
    results: ["Taux d'engagement élevé mesuré par les évaluations de fin de module","Adoption des outils DISC dans les projets étudiants","Reconduction annuelle sur 3 promotions consécutives"],
  },
  {
    client: 'PME Île-de-France',
    tag: 'Coaching · Leadership',
    sector: 'Services B2B',
    challenge: "Un directeur commercial nouvellement promu manageait son ancienne équipe. Tension relationnelle, perte d'autorité perçue, difficulté à fixer le cadre.",
    approach: "Coaching individuel sur 6 séances : repositionnement de la posture managériale, identification des leviers DISC de chaque membre de l'équipe, travail sur la communication assertive.",
    results: ["Clarification du cadre relationnel dès la 3e séance","Réduction significative des tensions d'équipe","Montée en confiance mesurée à l'auto-évaluation finale"],
  },
  {
    client: 'Association nationale',
    tag: 'Formation · RPS',
    sector: 'Social & médico-social',
    challenge: "Des équipes de terrain exposées à des situations de violence verbale et de surcharge émotionnelle. Besoin d'outils concrets, pas d'un contenu théorique.",
    approach: "Module d'une journée sur la prévention des Risques Psychosociaux : identification des signaux faibles, techniques de décompression, protocole de signalement. Format participatif et ancré dans le réel.",
    results: ["Ensemble des participants ont identifié au moins 2 situations à risque dans leur quotidien","Démarche de signalement interne relancée après la formation","Demande de reconduction sur deux autres sites"],
  },
  {
    client: 'Groupe international',
    tag: 'Formation · Soft Skills EN',
    sector: 'Conseil',
    challenge: "Former une équipe mixte franco-britannique sur la communication interpersonnelle. Besoin bilingue strict, profils très divers.",
    approach: "Module de 2 jours entièrement animé en anglais : communication non violente, gestion des désaccords, écoute active. Adaptation live au profil DISC des participants.",
    results: ["100% des participants bilingues ont salué la fluidité du format bilingue","Mise en pratique immédiate lors d'un atelier de résolution de conflit en live","Commande d'un module de suivi à 6 mois"],
  },
]

export default function CasClients() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#F5F7FB] via-[#EEF3FA] to-[#F5F0FB]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold text-[#3D6DB8] uppercase tracking-widest mb-4">Cas clients</p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1A2B4A] leading-tight mb-6">Exemples de missions</h1>
          <p className="text-base text-[#6B7E95] leading-relaxed">Des situations réelles, des approches sur-mesure, des résultats mesurables. Les noms des clients sont anonymisés.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 space-y-10">
          {CAS.map((cas, i) => (
            <div key={i} className="bg-[#F5F7FB] rounded-2xl border border-[#1A2B4A]/6 p-8">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <span className="inline-block text-xs font-semibold text-[#3D6DB8] bg-[#3D6DB8]/8 px-3 py-1 rounded-full mb-2">{cas.tag}</span>
                  <h2 className="text-xl font-bold text-[#1A2B4A]">{cas.client}</h2>
                  <p className="text-sm text-[#6B7E95]">{cas.sector}</p>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div><p className="text-xs font-semibold text-[#1A2B4A]/50 uppercase tracking-widest mb-2">Contexte</p><p className="text-sm text-[#6B7E95] leading-relaxed">{cas.challenge}</p></div>
                <div><p className="text-xs font-semibold text-[#1A2B4A]/50 uppercase tracking-widest mb-2">Approche</p><p className="text-sm text-[#6B7E95] leading-relaxed">{cas.approach}</p></div>
                <div>
                  <p className="text-xs font-semibold text-[#1A2B4A]/50 uppercase tracking-widest mb-2">Résultats</p>
                  <ul className="space-y-1.5">{cas.results.map((r, j) => (<li key={j} className="flex items-start gap-2 text-sm text-[#6B7E95]"><svg className="w-4 h-4 text-[#3D6DB8] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>{r}</li>))}</ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <FinalCTA />
      <Footer />
    </main>
  )
}
