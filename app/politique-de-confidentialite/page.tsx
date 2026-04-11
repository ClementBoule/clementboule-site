import Link from 'next/link'

export const metadata = {
  title: 'Politique de confidentialitÃ© | ClÃ©ment BoulÃ©',
}

export default function PolitiqueConfidentialite() {
  return (
    <div className="min-h-screen bg-[#0B1120]">
      <nav className="px-6 py-5 border-b border-white/5">
        <Link href="/" className="text-white/60 hover:text-white text-sm flex items-center gap-2 transition-colors w-fit">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Retour
        </Link>
      </nav>

      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-white mb-8">Politique de confidentialitÃ©</h1>

        <div className="space-y-8 text-white/60 leading-relaxed text-sm">
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">1. Responsable du traitement</h2>
            <p>
              ClÃ©ment BoulÃ© â hello@clementboule.com<br />
              Site : clementboule.com
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">2. DonnÃ©es collectÃ©es</h2>
            <p className="mb-2">
              Ce site collecte uniquement les donnÃ©es que vous fournissez volontairement via le formulaire de contact :
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Nom et prÃ©nom</li>
              <li>Adresse email</li>
              <li>Message</li>
            </ul>
            <p className="mt-3">
              Le test DISC ne collecte aucune donnÃ©e personnelle. Les rÃ©sultats sont calculÃ©s localement dans votre navigateur et ne sont pas transmis Ã  des serveurs.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">3. FinalitÃ© du traitement</h2>
            <p>
              Les donnÃ©es collectÃ©es via le formulaire de contact sont utilisÃ©es exclusivement pour rÃ©pondre Ã  vos demandes d'information. Elles ne font l'objet d'aucune commercialisation ni transmission Ã  des tiers.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">4. Cookies et technologies similaires</h2>
            <p className="mb-3">
              Ce site utilise <strong className="text-white/80">Cookiebot</strong> pour gÃ©rer votre consentement aux cookies conformÃ©ment au RGPD.
            </p>
            <p>
              Vous pouvez Ã  tout moment modifier vos prÃ©fÃ©rences en matiÃ¨re de cookies en cliquant sur le lien "ParamÃ¨tres des cookies" en bas de page. Les cookies suivants peuvent Ãªtre utilisÃ©s :
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2 mt-2">
              <li><strong className="text-white/70">Cookies strictement nÃ©cessaires</strong> : fonctionnement du site</li>
              <li><strong className="text-white/70">Cookies analytiques</strong> : mesure d'audience anonymisÃ©e (avec votre consentement)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">5. DurÃ©e de conservation</h2>
            <p>
              Les donnÃ©es de contact sont conservÃ©es pour une durÃ©e maximale de 3 ans Ã  compter de notre dernier Ã©change, conformÃ©ment Ã  la rÃ©glementation en vigueur.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">6. Vos droits (RGPD)</h2>
            <p>
              ConformÃ©ment au RÃ¨glement GÃ©nÃ©ral sur la Protection des DonnÃ©es (RGPD), vous disposez des droits suivants :
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2 mt-2">
              <li>Droit d'accÃ¨s Ã  vos donnÃ©es</li>
              <li>Droit de rectification</li>
              <li>Droit Ã  l'effacement (Â«&nbsp;droit Ã  l'oubli&nbsp;Â»)</li>
              <li>Droit Ã  la portabilitÃ©</li>
              <li>Droit d'opposition au traitement</li>
            </ul>
            <p className="mt-3">
              Pour exercer ces droits, contactez-nous Ã  : <a href="mailto:hello@clementboule.com" className="text-[#7C9CBF] hover:underline">hello@clementboule.com</a>
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">7. Sous-traitants</h2>
            <p>
              Ce site fait appel aux sous-traitants suivants :
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2 mt-2">
              <li><strong className="text-white/70">Vercel</strong> â hÃ©bergement du site (USA, Privacy Shield)</li>
              <li><strong className="text-white/70">Formspree</strong> â traitement du formulaire de contact</li>
              <li><strong className="text-white/70">Cookiebot (Usercentrics)</strong> â gestion du consentement aux cookies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">8. Contact et rÃ©clamations</h2>
            <p>
              Pour toute question relative Ã  vos donnÃ©es personnelles, contactez : <a href="mailto:hello@clementboule.com" className="text-[#7C9CBF] hover:underline">hello@clementboule.com</a>
            </p>
            <p className="mt-2">
              En cas de litige non rÃ©solu, vous pouvez introduire une rÃ©clamation auprÃ¨s de la CNIL : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-[#7C9CBF] hover:underline">www.cnil.fr</a>
            </p>
          </section>

          <p className="text-white/30 text-xs pt-4 border-t border-white/5">
            DerniÃ¨re mise Ã  jour : avril 2026
          </p>
        </div>
      </div>
    </div>
  )
}
