import Link from 'next/link'

export const metadata = {
  title: 'Mentions lÃ©gales | ClÃ©ment BoulÃ©',
}

export default function MentionsLegales() {
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

      <div className="max-w-3xl mx-auto px-6 py-16 prose prose-invert prose-sm">
        <h1 className="text-3xl font-bold text-white mb-8">Mentions lÃ©gales</h1>

        <div className="space-y-8 text-white/60 leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">1. Ãditeur du site</h2>
            <p>
              Ce site est Ã©ditÃ© par ClÃ©ment BoulÃ©, consultant indÃ©pendant.<br />
              Email : hello@clementboule.com<br />
              Site : clementboule.com
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">2. HÃ©bergement</h2>
            <p>
              Ce site est hÃ©bergÃ© par Vercel Inc.<br />
              340 Pine Street, Suite 701, San Francisco, California 94104, USA<br />
              Site : vercel.com
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">3. PropriÃ©tÃ© intellectuelle</h2>
            <p>
              L'ensemble du contenu de ce site (textes, images, graphismes, structure) est la propriÃ©tÃ© exclusive de ClÃ©ment BoulÃ©, sauf mentions contraires. Toute reproduction, mÃªme partielle, est strictement interdite sans autorisation prÃ©alable.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">4. ResponsabilitÃ©</h2>
            <p>
              Les informations prÃ©sentÃ©es sur ce site sont fournies Ã  titre indicatif. ClÃ©ment BoulÃ© s'efforce de maintenir ces informations Ã  jour mais ne saurait Ãªtre tenu responsable d'Ã©ventuelles erreurs ou omissions.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">5. Test DISC</h2>
            <p>
              Le test DISC proposÃ© sur ce site est basÃ© sur le modÃ¨le de William Moulton Marston et est fourni Ã  titre indicatif et pÃ©dagogique. Aucune donnÃ©e n'est collectÃ©e lors de ce test. Les rÃ©sultats ne constituent pas un avis professionnel ou clinique.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">6. Cookies</h2>
            <p>
              Ce site utilise Cookiebot pour la gestion du consentement aux cookies. Pour plus d'informations, consultez notre{' '}
              <Link href="/politique-de-confidentialite" className="text-[#7C9CBF] hover:underline">
                politique de confidentialitÃ©
              </Link>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">7. Droit applicable</h2>
            <p>
              Les prÃ©sentes mentions lÃ©gales sont soumises au droit franÃ§ais. En cas de litige, les tribunaux franÃ§ais seront seuls compÃ©tents.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
