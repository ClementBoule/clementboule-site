import Link from 'next/link'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  description: 'Politique de confidentialité du site clementboule.fr — Clément Boulé, consultant formateur coach en entreprise à Paris.',
  alternates: { canonical: 'https://www.clementboule.fr/politique-de-confidentialite' },
}

export default function PolitiqueConfidentialite() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-6">

          <div className="mb-10">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-[#6B7E95] hover:text-[#3D6DB8] transition-colors mb-6"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Retour à l&apos;accueil
            </Link>
            <p className="text-xs font-semibold text-[#3D6DB8] uppercase tracking-widest mb-3">Légal</p>
            <h1 className="text-4xl font-bold text-[#1A2B4A] mb-2">Politique de confidentialité</h1>
            <p className="text-sm text-[#6B7E95]">Dernière mise à jour : avril 2026</p>
          </div>

          <div className="space-y-10 text-[#4A5B70] leading-relaxed">

            <section>
              <h2 className="text-lg font-bold text-[#1A2B4A] mb-3">1. Responsable du traitement</h2>
              <p>
                Clément Boulé — <a href="mailto:hello@clementboule.com" className="text-[#3D6DB8] hover:underline">hello@clementboule.com</a><br />
                Site : clementboule.fr
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#1A2B4A] mb-3">2. Données collectées</h2>
              <p className="mb-3">
                Ce site collecte uniquement les données que vous fournissez volontairement via le formulaire de contact :
              </p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Nom et prénom</li>
                <li>Adresse email</li>
                <li>Entreprise / organisme (facultatif)</li>
                <li>Type de demande</li>
                <li>Message</li>
              </ul>
              <p className="mt-3">
                Le test DISC ne collecte aucune donnée personnelle. Les résultats sont calculés localement dans votre navigateur et ne sont pas transmis à des serveurs.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#1A2B4A] mb-3">3. Finalité du traitement</h2>
              <p>
                Les données collectées via le formulaire de contact sont utilisées exclusivement pour répondre à vos demandes d&apos;information. Elles ne font l&apos;objet d&apos;aucune commercialisation ni transmission à des tiers.
              </p>
              <p className="mt-2">
                Le formulaire de contact utilise une approche <em>mailto</em> : les données saisies sont transmises directement via votre client email habituel et ne transitent par aucun serveur intermédiaire.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#1A2B4A] mb-3">4. Cookies et technologies similaires</h2>
              <p className="mb-3">
                Ce site utilise <strong>Cookiebot</strong> pour gérer votre consentement aux cookies conformément au RGPD.
              </p>
              <p>
                Vous pouvez à tout moment modifier vos préférences en matière de cookies en cliquant sur le lien &laquo;&nbsp;Paramètres des cookies&nbsp;&raquo; en bas de page. Les cookies suivants peuvent être utilisés :
              </p>
              <ul className="list-disc list-inside space-y-1 ml-2 mt-2">
                <li><strong>Cookies strictement nécessaires</strong> : fonctionnement du site</li>
                <li><strong>Cookies analytiques</strong> : mesure d&apos;audience anonymisée (avec votre consentement)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#1A2B4A] mb-3">5. Durée de conservation</h2>
              <p>
                Les données de contact sont conservées pour une durée maximale de 3 ans à compter de notre dernier échange, conformément à la réglementation en vigueur.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#1A2B4A] mb-3">6. Vos droits (RGPD)</h2>
              <p>
                Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :
              </p>
              <ul className="list-disc list-inside space-y-1 ml-2 mt-2">
                <li>Droit d&apos;accès à vos données</li>
                <li>Droit de rectification</li>
                <li>Droit à l&apos;effacement (&laquo;&nbsp;droit à l&apos;oubli&nbsp;&raquo;)</li>
                <li>Droit à la portabilité</li>
                <li>Droit d&apos;opposition au traitement</li>
              </ul>
              <p className="mt-3">
                Pour exercer ces droits, contactez-nous à : <a href="mailto:hello@clementboule.com" className="text-[#3D6DB8] hover:underline">hello@clementboule.com</a>
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#1A2B4A] mb-3">7. Sous-traitants</h2>
              <p>Ce site fait appel aux sous-traitants suivants :</p>
              <ul className="list-disc list-inside space-y-1 ml-2 mt-2">
                <li><strong>Vercel</strong> — hébergement du site (USA, conformité RGPD via DPA)</li>
                <li><strong>Cookiebot (Usercentrics)</strong> — gestion du consentement aux cookies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#1A2B4A] mb-3">8. Contact et réclamations</h2>
              <p>
                Pour toute question relative à vos données personnelles, contactez : <a href="mailto:hello@clementboule.com" className="text-[#3D6DB8] hover:underline">hello@clementboule.com</a>
              </p>
              <p className="mt-2">
                En cas de litige non résolu, vous pouvez introduire une réclamation auprès de la CNIL : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-[#3D6DB8] hover:underline">www.cnil.fr</a>
              </p>
            </section>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
      }
