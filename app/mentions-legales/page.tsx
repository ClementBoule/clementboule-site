import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Mentions légales',
  description: "Mentions légales du site clementboule.fr — éditeur, hébergeur, propriété intellectuelle.",
  alternates: { canonical: 'https://www.clementboule.fr/mentions-legales' },
}

export default function MentionsLegales() {
  return (
    <main className="min-h-screen bg-cb-sable">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 md:pt-32 pb-12 md:pb-16 bg-cb-sable border-t-4 border-cb-encre">
        <div className="max-w-4xl mx-auto px-6">
          <span className="inline-block font-marker text-cb-cardinal text-lg -rotate-2 mb-3">
            ↓ Informations légales
          </span>
          <h1 className="font-anton text-5xl md:text-7xl uppercase leading-[0.92] text-cb-encre">
            Mentions <span className="inline-block bg-cb-sauge text-cb-sable px-3 py-0.5 -rotate-1 rounded-sm">légales</span>.
          </h1>
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
              1. Éditeur du site
            </h2>
            <div className="text-base text-cb-encre-soft leading-relaxed text-pretty space-y-1">
              <p>Clément Boulé</p>
              <p>Micro-entrepreneur (régime auto-entrepreneur)</p>
              <p>15 bis rue Marceau, 78800 Houilles, France</p>
              <p>SIRET : 893 408 633 00046</p>
              <p>TVA : non assujetti (franchise en base)</p>
              <p>Téléphone : 06 66 65 17 60</p>
              <p>Email : <a href="mailto:hello@clementboule.com" className="font-medium text-cb-sarcelle-deep border-b-2 border-cb-cardinal hover:text-cb-cardinal transition-colors">hello@clementboule.com</a></p>
              <p>Directeur de la publication : Clément Boulé</p>
            </div>
          </article>

          <article
            className="bg-white border-[2.5px] border-cb-sauge-deep rounded-sm p-6 md:p-8"
            style={{ boxShadow: '6px 6px 0 var(--cb-sarcelle)' }}
          >
            <h2 className="font-anton text-xl md:text-2xl uppercase leading-tight text-cb-encre mb-4">
              2. Hébergement
            </h2>
            <div className="text-base text-cb-encre-soft leading-relaxed text-pretty space-y-1">
              <p>Vercel Inc.</p>
              <p>340 S Lemon Ave #4133, Walnut, CA 91789, USA</p>
              <p>Site : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="font-medium text-cb-sarcelle-deep border-b-2 border-cb-cardinal hover:text-cb-cardinal transition-colors">vercel.com</a></p>
            </div>
          </article>

          <article
            className="bg-white border-[2.5px] border-cb-sauge-deep rounded-sm p-6 md:p-8"
            style={{ boxShadow: '6px 6px 0 var(--cb-terracotta)' }}
          >
            <h2 className="font-anton text-xl md:text-2xl uppercase leading-tight text-cb-encre mb-4">
              3. Propriété intellectuelle
            </h2>
            <p className="text-base text-cb-encre-soft leading-relaxed text-pretty">
              L&apos;ensemble du contenu de ce site (textes, illustrations, code, structure) est la propriété exclusive de Clément Boulé, sauf mentions contraires. Toute reproduction, même partielle, est interdite sans autorisation écrite préalable.
            </p>
          </article>

          <article
            className="bg-white border-[2.5px] border-cb-sauge-deep rounded-sm p-6 md:p-8"
            style={{ boxShadow: '6px 6px 0 var(--cb-cardinal)' }}
          >
            <h2 className="font-anton text-xl md:text-2xl uppercase leading-tight text-cb-encre mb-4">
              4. Responsabilité
            </h2>
            <p className="text-base text-cb-encre-soft leading-relaxed text-pretty">
              Les informations présentées sur ce site sont fournies à titre indicatif. Clément Boulé s&apos;efforce de les maintenir à jour, sans garantie d&apos;exactitude ou d&apos;exhaustivité. Aucune responsabilité ne saurait être engagée pour les erreurs ou omissions.
            </p>
          </article>

          <article
            className="bg-white border-[2.5px] border-cb-sauge-deep rounded-sm p-6 md:p-8"
            style={{ boxShadow: '6px 6px 0 var(--cb-sauge-deep)' }}
          >
            <h2 className="font-anton text-xl md:text-2xl uppercase leading-tight text-cb-encre mb-4">
              5. Test DISC
            </h2>
            <p className="text-base text-cb-encre-soft leading-relaxed text-pretty">
              Le test DISC proposé sur ce site est basé sur le modèle de William Moulton Marston, à titre pédagogique. Aucune donnée personnelle n&apos;est collectée durant le test. Les résultats sont indicatifs et ne constituent pas un avis professionnel ou clinique.
            </p>
          </article>

          <article
            className="bg-white border-[2.5px] border-cb-sauge-deep rounded-sm p-6 md:p-8"
            style={{ boxShadow: '6px 6px 0 var(--cb-sarcelle-deep)' }}
          >
            <h2 className="font-anton text-xl md:text-2xl uppercase leading-tight text-cb-encre mb-4">
              6. Données et confidentialité
            </h2>
            <p className="text-base text-cb-encre-soft leading-relaxed text-pretty">
              Le site utilise Cloudflare Web Analytics, un outil de mesure d&apos;audience sans cookie ni traceur, conforme RGPD nativement. Le formulaire de contact ouvre votre client mail local : aucune donnée n&apos;est stockée sur le site. Pour les détails, voir la <a href="/politique-de-confidentialite" className="font-medium text-cb-sarcelle-deep border-b-2 border-cb-cardinal hover:text-cb-cardinal transition-colors">politique de confidentialité</a>.
            </p>
          </article>

          <article
            className="bg-white border-[2.5px] border-cb-sauge-deep rounded-sm p-6 md:p-8"
            style={{ boxShadow: '6px 6px 0 var(--cb-encre)' }}
          >
            <h2 className="font-anton text-xl md:text-2xl uppercase leading-tight text-cb-encre mb-4">
              7. Droit applicable
            </h2>
            <p className="text-base text-cb-encre-soft leading-relaxed text-pretty">
              Les présentes mentions légales sont soumises au droit français. En cas de litige et après tentative de résolution amiable, les tribunaux français seront seuls compétents.
            </p>
          </article>

        </div>
      </section>

      <Footer />
    </main>
  )
}
