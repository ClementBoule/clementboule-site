import React from 'react'
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
    results: [
      "Taux d'engagement élevé mesuré par les évaluations de fin de module",
      "Adoption des outils DISC dans les projets étudiants",
      "Reconduction annuelle sur 3 promotions consécutives",
    ],
    color: 'sarcelle',
    rot: '-rotate-[0.4deg]',
  },
  {
    client: 'PME Île-de-France',
    tag: 'Coaching · Leadership',
    sector: 'Services B2B',
    challenge: "Un directeur commercial nouvellement promu manageait son ancienne équipe. Tension relationnelle, perte d'autorité perçue, difficulté à fixer le cadre.",
    approach: "Coaching individuel sur 6 séances : repositionnement de la posture managériale, identification des leviers DISC de chaque membre de l'équipe, travail sur la communication assertive.",
    results: [
      "Clarification du cadre relationnel dès la 3e séance",
      "Réduction significative des tensions d'équipe",
      "Montée en confiance mesurée à l'auto-évaluation finale",
    ],
    color: 'terracotta',
    rot: 'rotate-[0.5deg]',
  },
  {
    client: 'Association nationale',
    tag: 'Formation · RPS',
    sector: 'Social & médico-social',
    challenge: "Des équipes de terrain exposées à des situations de violence verbale et de surcharge émotionnelle. Besoin d'outils concrets, pas d'un contenu théorique.",
    approach: "Module d'une journée sur la prévention des Risques Psychosociaux : identification des signaux faibles, techniques de décompression, protocole de signalement. Format participatif et ancré dans le réel.",
    results: [
      "Ensemble des participants ont identifié au moins 2 situations à risque dans leur quotidien",
      "Démarche de signalement interne relancée après la formation",
      "Demande de reconduction sur deux autres sites",
    ],
    color: 'sauge-deep',
    rot: '-rotate-[0.3deg]',
  },
  {
    client: 'Groupe international',
    tag: 'Formation · Soft Skills EN',
    sector: 'Conseil',
    challenge: "Former une équipe mixte franco-britannique sur la communication interpersonnelle. Besoin bilingue strict, profils très divers.",
    approach: "Module de 2 jours entièrement animé en anglais : communication non violente, gestion des désaccords, écoute active. Adaptation live au profil DISC des participants.",
    results: [
      "100% des participants bilingues ont salué la fluidité du format bilingue",
      "Mise en pratique immédiate lors d'un atelier de résolution de conflit en live",
      "Commande d'un module de suivi à 6 mois",
    ],
    color: 'cardinal',
    rot: 'rotate-[0.4deg]',
  },
]

export default function CasClients() {
  return (
    <main className="min-h-screen bg-cb-sable">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 md:pt-32 pb-16 bg-cb-sable border-t-4 border-cb-encre">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-[2fr_1fr] gap-10 items-end">
            <div>
              <span className="inline-block font-marker text-cb-cardinal text-lg -rotate-2 mb-3">
                ↓ Cas clients
              </span>
              <h1 className="font-anton text-5xl md:text-7xl lg:text-8xl uppercase leading-[0.92] text-cb-encre">
                Exemples de <span className="inline-block bg-cb-terracotta text-cb-sable px-3 py-0.5 -rotate-1 rounded-sm">missions</span>.
              </h1>
            </div>
            <div className="text-base font-medium border-l-4 border-cb-cardinal pl-5 max-w-md text-cb-encre-soft">
              Des situations réelles, des approches sur-mesure, des résultats mesurables. Les noms des clients sont anonymisés.
            </div>
          </div>
        </div>
      </section>

      {/* Cards cas en colonnes */}
      <section className="py-16 md:py-20 bg-cb-creme border-t-4 border-cb-encre">
        <div className="max-w-6xl mx-auto px-6 space-y-10">
          {CAS.map((cas, i) => (
            <React.Fragment key={i}>
              <article
                className={`bg-white border-[2.5px] border-cb-sauge-deep rounded-sm p-6 md:p-8 ${cas.rot} hover:rotate-0 hover:translate-x-[-3px] hover:translate-y-[-3px] transition-all duration-200`}
                style={{ boxShadow: `8px 8px 0 var(--cb-${cas.color})` }}
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <span className={`inline-block font-anton text-xs uppercase tracking-wider px-2.5 py-1 mb-3 border-2 border-cb-sauge-deep rounded-sm bg-cb-sable text-cb-${cas.color}`}>
                      {cas.tag}
                    </span>
                    <h2 className="font-anton text-2xl md:text-3xl uppercase leading-tight text-cb-encre">{cas.client}</h2>
                    <p className="text-sm text-cb-encre-soft mt-1 font-medium">{cas.sector}</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-6 md:gap-8 pt-4 border-t-2 border-cb-sauge">
                  <div>
                    <p className="font-anton text-xs uppercase tracking-widest text-cb-cardinal mb-2">Contexte</p>
                    <p className="text-sm text-cb-encre-soft leading-relaxed">{cas.challenge}</p>
                  </div>
                  <div>
                    <p className="font-anton text-xs uppercase tracking-widest text-cb-cardinal mb-2">Approche</p>
                    <p className="text-sm text-cb-encre-soft leading-relaxed">{cas.approach}</p>
                  </div>
                  <div>
                    <p className="font-anton text-xs uppercase tracking-widest text-cb-cardinal mb-2">Résultats</p>
                    <ul className="space-y-2">
                      {cas.results.map((r, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-cb-encre-soft leading-relaxed">
                          <svg className={`w-4 h-4 text-cb-${cas.color} shrink-0 mt-0.5`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>

              {/* CTA intermédiaire après cas 2 */}
              {i === 1 && (
                <div
                  className="bg-cb-rose border-[2.5px] border-cb-sauge-deep rounded-sm p-6 flex flex-col sm:flex-row items-center justify-between gap-5 -rotate-[0.4deg]"
                  style={{ boxShadow: '6px 6px 0 var(--cb-cardinal)' }}
                >
                  <div>
                    <h3 className="font-anton text-xl md:text-2xl uppercase leading-tight text-cb-encre mb-1">
                      Une situation similaire ?
                    </h3>
                    <p className="text-sm text-cb-encre-soft font-medium">Formation, coaching, accompagnement sur-mesure — réponse sous 24h.</p>
                  </div>
                  <a
                    href="/contact"
                    className="shrink-0 inline-flex items-center gap-2 bg-cb-sarcelle text-cb-sable font-anton text-sm uppercase tracking-wider border-[2.5px] border-cb-encre px-5 py-3 rounded-sm hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200"
                    style={{ boxShadow: '4px 4px 0 var(--cb-encre)' }}
                  >
                    Discutons-en →
                  </a>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </main>
  )
}
