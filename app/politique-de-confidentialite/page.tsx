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
    <main className="min-h-screen bg-cb-sable">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 md:pt-32 pb-12 md:pb-16 bg-cb-sable border-t-4 border-cb-encre">
        <div className="max-w-4xl mx-auto px-6">
          <span className="inline-block font-marker text-cb-cardinal text-lg -rotate-2 mb-3">
            ↓ Vie privée
          </span>
          <h1 className="font-anton text-5xl md:text-7xl uppercase leading-[0.92] text-cb-encre">
            Politique de <span className="inline-block bg-cb-sarcelle text-cb-sable px-3 py-0.5 -rotate-1 rounded-sm">confidentialité</span>.
          </h1>
          <p className="text-sm text-cb-encre-soft mt-4 font-medium">
            Dernière mise à jour : avril 2026
          </p>
        </div>
      </section>

      {/* Contenu */}
      <section className="py-12 md:py-16 bg-cb-creme border-t-4 border-cb-encre">
        <div className="max-w-3xl mx-auto px-6 space-y-8">

          <article
            className="bg-white border-[2.5px] border-cb-sauge-deep rounded-sm p-6 md:p-8"
            style={{ boxShadow: '6px 6px 0 var(--cb-sauge)' }}
          >
            <h2 className="font-anton text-xl md:text-2xl uppercase leading-tight text-cb-encre mb-4">
              1. Responsable du traitement
            </h2>
            <p className="text-base text-cb-encre-soft leading-relaxed text-pretty">
              Clément Boulé, micro-entrepreneur (voir <a href="/mentions-legales" className="font-medium text-cb-sarcelle-deep border-b-2 border-cb-cardinal hover:text-cb-cardinal">mentions légales</a> pour le détail).
            </p>
            <p className="text-base text-cb-encre-soft leading-relaxed text-pretty mt-2">
              Contact : <a href="mailto:hello@clementboule.com" className="font-medium text-cb-sarcelle-deep border-b-2 border-cb-cardinal hover:text-cb-cardinal">hello@clementboule.com</a>
            </p>
          </article>

          <article
            className="bg-white border-[2.5px] border-cb-sauge-deep rounded-sm p-6 md:p-8"
            style={{ boxShadow: '6px 6px 0 var(--cb-sarcelle)' }}
          >
            <h2 className="font-anton text-xl md:text-2xl uppercase leading-tight text-cb-encre mb-4">
              2. Données collectées
            </h2>
            <p className="text-base text-cb-encre-soft leading-relaxed text-pretty mb-3">
              Le site collecte uniquement les données que vous fournissez volontairement via le formulaire de contact :
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2 text-base text-cb-encre-soft leading-relaxed text-pretty">
              <li>Nom et prénom</li>
              <li>Adresse email</li>
              <li>Entreprise ou organisme (facultatif)</li>
              <li>Type de demande</li>
              <li>Contenu du message</li>
            </ul>
            <p className="text-base text-cb-encre-soft leading-relaxed text-pretty mt-3">
              Le test DISC ne collecte aucune donnée. Le calcul est fait localement dans votre navigateur, rien n&apos;est transmis à un serveur.
            </p>
            <p className="text-base text-cb-encre-soft leading-relaxed text-pretty mt-3">
              Le mini-quiz de pré-qualification (« Trouver mon format ») mémorise vos réponses dans <code className="bg-cb-sable px-1.5 py-0.5 rounded-sm border border-cb-sauge text-sm font-mono">sessionStorage</code> de votre navigateur, le temps de votre visite. Cette donnée reste sur votre machine, n&apos;est pas un cookie au sens RGPD (article 82 LIL, mesure exemptée), et disparaît à la fermeture de l&apos;onglet.
            </p>
          </article>

          <article
            className="bg-white border-[2.5px] border-cb-sauge-deep rounded-sm p-6 md:p-8"
            style={{ boxShadow: '6px 6px 0 var(--cb-terracotta)' }}
          >
            <h2 className="font-anton text-xl md:text-2xl uppercase leading-tight text-cb-encre mb-4">
              3. Finalité du traitement
            </h2>
            <p className="text-base text-cb-encre-soft leading-relaxed text-pretty">
              Les données du formulaire servent uniquement à répondre à votre demande. Elles ne sont ni revendues, ni transmises à des tiers, ni utilisées à d&apos;autres fins.
            </p>
            <p className="text-base text-cb-encre-soft leading-relaxed text-pretty mt-3">
              Le formulaire fonctionne en mode <em>mailto</em> : à l&apos;envoi, votre client email s&apos;ouvre directement avec le contenu pré-rempli. Le site lui-même ne stocke rien sur ses serveurs.
            </p>
          </article>

          <article
            className="bg-white border-[2.5px] border-cb-sauge-deep rounded-sm p-6 md:p-8"
            style={{ boxShadow: '6px 6px 0 var(--cb-cardinal)' }}
          >
            <h2 className="font-anton text-xl md:text-2xl uppercase leading-tight text-cb-encre mb-4">
              4. Cookies et mesure d&apos;audience
            </h2>
            <p className="text-base text-cb-encre-soft leading-relaxed text-pretty mb-3">
              Le site utilise <strong>Cloudflare Web Analytics</strong>, un outil de mesure d&apos;audience qui ne pose aucun cookie et ne suit pas les visiteurs entre les sites. Les données sont agrégées et anonymes (volume de visites, pages vues, pays). Cet outil est conforme RGPD nativement et ne nécessite pas votre consentement préalable (recommandation CNIL 2020 sur la mesure d&apos;audience).
            </p>
            <p className="text-base text-cb-encre-soft leading-relaxed text-pretty">
              Le site n&apos;utilise aucun autre cookie de traceur, ni de pixel publicitaire, ni de fingerprint. Aucun bandeau de consentement n&apos;est nécessaire.
            </p>
          </article>

          <article
            className="bg-white border-[2.5px] border-cb-sauge-deep rounded-sm p-6 md:p-8"
            style={{ boxShadow: '6px 6px 0 var(--cb-sauge-deep)' }}
          >
            <h2 className="font-anton text-xl md:text-2xl uppercase leading-tight text-cb-encre mb-4">
              5. Liens externes (Calendly, LinkedIn, Malt)
            </h2>
            <p className="text-base text-cb-encre-soft leading-relaxed text-pretty">
              Le site contient des liens vers Calendly (réservation d&apos;appels), LinkedIn et Malt. Ces services sont externes et appliquent leurs propres politiques de confidentialité quand vous cliquez sur leurs liens. Aucun script tiers n&apos;est chargé sur le site clementboule.fr lui-même.
            </p>
          </article>

          <article
            className="bg-white border-[2.5px] border-cb-sauge-deep rounded-sm p-6 md:p-8"
            style={{ boxShadow: '6px 6px 0 var(--cb-sarcelle-deep)' }}
          >
            <h2 className="font-anton text-xl md:text-2xl uppercase leading-tight text-cb-encre mb-4">
              6. Durée de conservation
            </h2>
            <p className="text-base text-cb-encre-soft leading-relaxed text-pretty">
              Les emails reçus via le formulaire de contact sont conservés au maximum 3 ans à compter du dernier échange, conformément à la durée légale en matière de prospection commerciale.
            </p>
          </article>

          <article
            className="bg-white border-[2.5px] border-cb-sauge-deep rounded-sm p-6 md:p-8"
            style={{ boxShadow: '6px 6px 0 var(--cb-rose)' }}
          >
            <h2 className="font-anton text-xl md:text-2xl uppercase leading-tight text-cb-encre mb-4">
              7. Vos droits (RGPD)
            </h2>
            <p className="text-base text-cb-encre-soft leading-relaxed text-pretty mb-3">
              Conformément au RGPD, vous disposez des droits suivants sur vos données :
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2 text-base text-cb-encre-soft leading-relaxed text-pretty">
              <li>Droit d&apos;accès</li>
              <li>Droit de rectification</li>
              <li>Droit à l&apos;effacement (« droit à l&apos;oubli »)</li>
              <li>Droit à la portabilité</li>
              <li>Droit d&apos;opposition</li>
              <li>Droit à la limitation du traitement</li>
            </ul>
            <p className="text-base text-cb-encre-soft leading-relaxed text-pretty mt-3">
              Pour exercer un droit, écrivez à <a href="mailto:hello@clementboule.com" className="font-medium text-cb-sarcelle-deep border-b-2 border-cb-cardinal hover:text-cb-cardinal">hello@clementboule.com</a>.
            </p>
          </article>

          <article
            className="bg-white border-[2.5px] border-cb-sauge-deep rounded-sm p-6 md:p-8"
            style={{ boxShadow: '6px 6px 0 var(--cb-encre)' }}
          >
            <h2 className="font-anton text-xl md:text-2xl uppercase leading-tight text-cb-encre mb-4">
              8. Sous-traitants
            </h2>
            <p className="text-base text-cb-encre-soft leading-relaxed text-pretty mb-3">
              Le site fait appel aux sous-traitants suivants :
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2 text-base text-cb-encre-soft leading-relaxed text-pretty">
              <li><strong>Vercel Inc.</strong> — hébergement du site (USA, conformité RGPD via DPA)</li>
              <li><strong>Cloudflare</strong> — Web Analytics cookieless (UE/USA, RGPD-natif)</li>
            </ul>
          </article>

          <article
            className="bg-white border-[2.5px] border-cb-sauge-deep rounded-sm p-6 md:p-8"
            style={{ boxShadow: '6px 6px 0 var(--cb-sauge)' }}
          >
            <h2 className="font-anton text-xl md:text-2xl uppercase leading-tight text-cb-encre mb-4">
              9. Contact et réclamations
            </h2>
            <p className="text-base text-cb-encre-soft leading-relaxed text-pretty">
              Pour toute question sur vos données : <a href="mailto:hello@clementboule.com" className="font-medium text-cb-sarcelle-deep border-b-2 border-cb-cardinal hover:text-cb-cardinal">hello@clementboule.com</a>
            </p>
            <p className="text-base text-cb-encre-soft leading-relaxed text-pretty mt-3">
              En cas de litige non résolu, vous pouvez saisir la CNIL : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="font-medium text-cb-sarcelle-deep border-b-2 border-cb-cardinal hover:text-cb-cardinal">www.cnil.fr</a>
            </p>
          </article>

          <article
            className="bg-white border-[2.5px] border-cb-sauge-deep rounded-sm p-6 md:p-8"
            style={{ boxShadow: '6px 6px 0 var(--cb-sauge)' }}
          >
            <h2 className="font-anton text-xl md:text-2xl uppercase leading-tight text-cb-encre mb-4">
              10. Stockage local côté navigateur
            </h2>
            <p className="text-base text-cb-encre-soft leading-relaxed text-pretty">
              Pour mémoriser votre préférence de langue (français ou anglais), le site utilise <code className="bg-cb-sable px-1.5 py-0.5 rounded-sm border border-cb-sauge text-sm font-mono">localStorage</code> sous la clé <code className="bg-cb-sable px-1.5 py-0.5 rounded-sm border border-cb-sauge text-sm font-mono">lang</code>. Cette donnée reste sur votre machine, n&apos;est jamais transmise à un serveur, et relève de l&apos;exemption « strictement nécessaire au confort d&apos;utilisation » prévue à l&apos;article 82 LIL (recommandation CNIL 2020).
            </p>
            <p className="text-base text-cb-encre-soft leading-relaxed text-pretty mt-3">
              Vous pouvez la supprimer à tout moment depuis les outils de votre navigateur (Inspecter → Application → Stockage local).
            </p>
          </article>

        </div>
      </section>

      <Footer />
    </main>
  )
}
