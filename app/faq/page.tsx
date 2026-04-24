import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FinalCTA from '@/components/FinalCTA'

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Questions frequentes sur les formations, le coaching et les tarifs de Clement Boule.',
  alternates: { canonical: 'https://www.clementboule.fr/faq' },
}

const FAQ_SECTIONS = [
  {
    category: 'Mon approche',
    items: [
      {
        q: "Vous proposez des formations financables OPCO ?",
        a: "Non. Je travaille en direct avec mes clients — pas de certification Qualiopi, pas de parcours OPCO. Ca me permet de construire des programmes vraiment sur-mesure, sans contrainte administrative, et de m'adapter en temps reel a vos equipes.",
      },
      {
        q: "En quoi vous differenciez-vous d'un organisme de formation classique ?",
        a: "Je ne vends pas un catalogue. Chaque programme est concu a partir de vos enjeux reels. Je travaille seul — ce qui garantit une coherence totale entre le diagnostic, la conception et l'animation. Et je m'adapte en cours de session si la dynamique de groupe le demande.",
      },
      {
        q: "Vous travaillez avec quel type de clients ?",
        a: "Business schools et grandes ecoles parisiennes, PME, grandes entreprises, associations, institutions publiques. Ce qui varie, c'est le secteur — pas l'exigence. Je travaille en francais et en anglais.",
      },
    ],
  },
  {
    category: 'Formats & logistique',
    items: [
      {
        q: "Quelle est la duree minimale d'une intervention ?",
        a: "Une demi-journee (3h30) est le format minimum. La plupart de mes modules se deploient sur 1 a 2 jours. Pour le coaching individuel, je travaille sur des sequences de 3 a 6 seances.",
      },
      {
        q: "Vous intervenez en presentiel ou a distance ?",
        a: "Les deux. Le presentiel reste le format le plus efficace pour creer de la dynamique de groupe. Le distanciel fonctionne bien pour le coaching individuel et les modules de suivi.",
      },
      {
        q: "Pouvez-vous venir dans nos locaux ?",
        a: "Oui, je me deplace en Ile-de-France et dans toute la France selon les projets. Pour les interventions hors Paris, des frais de deplacement s'appliquent selon les conditions definies au devis.",
      },
      {
        q: "Quel est le nombre de participants ideal ?",
        a: "Pour les formations, entre 8 et 20 participants est l'optimum. En dessous, la dynamique de groupe est limitee. Au-dela, la personnalisation devient plus difficile. Pour le coaching, je travaille en individuel ou en binome.",
      },
    ],
  },
  {
    category: 'Tarifs & facturation',
    items: [
      {
        q: "Quels sont vos tarifs ?",
        a: "Je facture a la journee ou au module selon la nature du projet. Tous les devis sont sur-mesure — contactez-moi pour qu'on evalue ensemble ce qui correspond a votre besoin.",
      },
      {
        q: "Comment se passe la facturation ?",
        a: "Je suis auto-entrepreneur (SIRET disponible sur demande). Je facture apres prestation avec delai de paiement a 30 jours. Un acompte peut etre demande pour les projets d'envergure.",
      },
      {
        q: "Vous pouvez fournir un numero SIRET pour la comptabilite ?",
        a: "Oui, toutes les informations legales sont disponibles sur demande et apparaissent sur chaque facture.",
      },
    ],
  },
  {
    category: 'DISC',
    items: [
      {
        q: "C'est quoi le test DISC propose sur le site ?",
        a: "Le DISC est un outil d'analyse comportementale qui identifie 4 profils : Dominant, Influent, Stable, Consciencieux. Il est utilise en coaching et en formation pour ameliorer la communication, le management et la dynamique d'equipe. Le test sur le site est une version gratuite et indicative.",
      },
      {
        q: "Pouvez-vous animer des ateliers DISC en entreprise ?",
        a: "Oui, c'est une de mes specialites. Je propose des ateliers DISC de demi-journee ou d'une journee pour les equipes — ideal pour ameliorer la communication interne, prevenir les conflits et renforcer la cohesion.",
      },
    ],
  },
]

export default function FAQ() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#F5F7FB] via-[#EEF3FA] to-[#F5F0FB]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold text-[#3D6DB8] uppercase tracking-widest mb-4">FAQ</p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1A2B4A] leading-tight mb-6">
            Questions frequentes
          </h1>
          <p className="text-base text-[#6B7E95] leading-relaxed">
            Tout ce que vous voulez savoir avant de demarrer. Et si votre question n'est pas la, contactez-moi directement.
          </p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 space-y-14">
          {FAQ_SECTIONS.map((section) => (
            <div key={section.category}>
              <h2 className="text-xs font-semibold text-[#3D6DB8] uppercase tracking-widest mb-6">
                {section.category}
              </h2>
              <div className="divide-y divide-[#1A2B4A]/8">
                {section.items.map((item) => (
                  <div key={item.q} className="py-6">
                    <h3 className="text-base font-bold text-[#1A2B4A] mb-3">{item.q}</h3>
                    <p className="text-sm text-[#6B7E95] leading-relaxed">{item.a}</p>
                  </div>
                ))}
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
