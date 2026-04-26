import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FinalCTA from '@/components/FinalCTA'

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Questions frequentes sur les formations, le coaching et les tarifs de Clement Boule.',
  alternates: { canonical: 'https://www.clementboule.fr/faq' },
}

const FAQ_SECTIONS: { category: string; color: string; rot: string; items: { q: string; a: string }[] }[] = [
  {
    category: 'Mon approche',
    color: 'sarcelle',
    rot: '-rotate-[0.4deg]',
    items: [
      {
        q: "Vous proposez des formations financables OPCO ?",
        a: "Non. Je travaille en direct avec mes clients, pas de certification Qualiopi, pas de parcours OPCO. Ca me permet de construire des programmes vraiment sur-mesure, sans contrainte administrative, et de m'adapter en temps reel a vos equipes.",
      },
      {
        q: "En quoi vous differenciez-vous d'un organisme de formation classique ?",
        a: "Je ne vends pas un catalogue. Chaque programme est concu a partir de vos enjeux reels. Je travaille seul, ce qui garantit une coherence totale entre le diagnostic, la conception et l'animation. Et je m'adapte en cours de session si la dynamique de groupe le demande.",
      },
      {
        q: "Vous travaillez avec quel type de clients ?",
        a: "Business schools et grandes ecoles parisiennes, PME, grandes entreprises, associations, institutions publiques. Ce qui varie, c'est le secteur, pas l'exigence. Je travaille en francais et en anglais.",
      },
    ],
  },
  {
    category: 'Formats & logistique',
    color: 'terracotta',
    rot: 'rotate-[0.4deg]',
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
    color: 'cardinal',
    rot: '-rotate-[0.3deg]',
    items: [
      {
        q: "Quels sont vos tarifs ?",
        a: "Je facture a la journee ou au module selon la nature du projet. Tous les devis sont sur-mesure, contactez-moi pour qu'on evalue ensemble ce qui correspond a votre besoin.",
      },
      {
        q: "Comment se passe la facturation ?",
        a: "Je facture apres prestation avec delai de paiement a 30 jours. Un acompte peut etre demande pour les projets d'envergure. SIRET et statut juridique en mentions legales.",
      },
      {
        q: "Vous pouvez fournir un numero SIRET pour la comptabilite ?",
        a: "Oui, toutes les informations legales sont disponibles sur demande et apparaissent sur chaque facture.",
      },
    ],
  },
  {
    category: 'DISC',
    color: 'sauge-deep',
    rot: 'rotate-[0.5deg]',
    items: [
      {
        q: "C'est quoi le test DISC propose sur le site ?",
        a: "Le DISC est un outil d'analyse comportementale qui identifie 4 profils : Dominant, Influent, Stable, Consciencieux. Il est utilise en coaching et en formation pour ameliorer la communication, le management et la dynamique d'equipe. Le test sur le site est une version gratuite et indicative.",
      },
      {
        q: "Pouvez-vous animer des ateliers DISC en entreprise ?",
        a: "Oui, c'est une de mes specialites. Je propose des ateliers DISC de demi-journee ou d'une journee pour les equipes, ideal pour ameliorer la communication interne, prevenir les conflits et renforcer la cohesion.",
      },
    ],
  },
]

export default function FAQ() {
  return (
    <main className="min-h-screen bg-cb-sable">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 md:pt-32 pb-16 bg-cb-sable border-t-4 border-cb-encre">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-[2fr_1fr] gap-10 items-end">
            <div>
              <span className="inline-block font-marker text-cb-cardinal text-lg -rotate-2 mb-3">
                ↓ FAQ
              </span>
              <h1 className="font-anton text-5xl md:text-7xl lg:text-8xl uppercase leading-[0.92] text-cb-encre">
                Questions <span className="inline-block bg-cb-sarcelle text-cb-sable px-3 py-0.5 -rotate-1 rounded-sm">fréquentes</span>.
              </h1>
            </div>
            <div className="text-base font-medium border-l-4 border-cb-cardinal pl-5 max-w-md text-cb-encre-soft">
              Tout ce que vous voulez savoir avant de démarrer. Si votre question n&apos;est pas là, contactez-moi.
            </div>
          </div>
        </div>
      </section>

      {/* Sections FAQ en cards brutalist polychromes */}
      <section className="py-16 md:py-20 bg-cb-creme border-t-4 border-cb-encre">
        <div className="max-w-4xl mx-auto px-6 space-y-12">
          {FAQ_SECTIONS.map((section) => (
            <div
              key={section.category}
              className={`bg-white border-[2.5px] border-cb-sauge-deep rounded-sm p-6 md:p-8 ${section.rot}`}
              style={{ boxShadow: `8px 8px 0 var(--cb-${section.color})` }}
            >
              <span className={`inline-block font-anton text-xs uppercase tracking-wider px-2.5 py-1 mb-6 border-2 border-cb-sauge-deep rounded-sm bg-cb-sable text-cb-${section.color}`}>
                {section.category}
              </span>
              <div className="divide-y-2 divide-cb-sauge">
                {section.items.map((item) => (
                  <div key={item.q} className="py-5 first:pt-0 last:pb-0">
                    <h3 className="font-anton text-lg md:text-xl uppercase leading-tight text-cb-encre mb-3">{item.q}</h3>
                    <p className="text-sm md:text-base text-cb-encre-soft leading-relaxed">{item.a}</p>
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
