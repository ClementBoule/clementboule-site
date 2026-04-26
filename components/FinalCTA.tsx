'use client'
import { useLang } from './LanguageContext'
import { CALENDLY_URL } from '../lib/cta-config'

export default function FinalCTA() {
  const { lang } = useLang()

  return (
    <section className="relative bg-cb-sarcelle text-cb-encre py-24 md:py-32 px-6 border-t-4 border-cb-encre overflow-hidden">
      <div
        className="absolute -bottom-20 -left-16 w-[420px] h-[420px] pointer-events-none opacity-40 -rotate-12"
        style={{
          backgroundImage: 'url(/illustrations/formations/spine-up.png)',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          mixBlendMode: 'multiply',
        }}
      />
      <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-cb-rose border-4 border-cb-encre" />
      <div className="relative max-w-4xl mx-auto text-center">
        <span className="inline-block font-marker text-cb-encre text-2xl -rotate-2 mb-5">
          {lang === 'fr' ? "Passons à l'action →" : "Let's get started →"}
        </span>
        <h2 className="font-anton text-5xl sm:text-6xl md:text-7xl lg:text-[8.5rem] uppercase leading-[0.95] mb-7 text-cb-encre">
          {lang === 'fr' ? (
            <>Un projet<br />en{' '}
              <span className="inline-block bg-cb-rose text-cb-encre px-4 py-0.5 border-[3px] border-cb-encre rounded-sm">
                tête
              </span>
              {' '}?<br />Parlons-en.
            </>
          ) : (
            <>Got a project<br />in{' '}
              <span className="inline-block bg-cb-rose text-cb-encre px-4 py-0.5 border-[3px] border-cb-encre rounded-sm">
                mind
              </span>
              {' '}?<br />Let&apos;s talk.
            </>
          )}
        </h2>
        <p className="text-lg md:text-xl font-medium max-w-2xl mx-auto mb-10 text-cb-encre">
          {lang === 'fr'
            ? "Pas de formulaire interminable. Un échange direct pour voir si on peut construire quelque chose ensemble."
            : "No endless forms. A direct conversation to see if we can build something together."}
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-cb-encre text-cb-sable font-bold uppercase tracking-wider text-sm px-7 py-4 border-2 border-cb-encre rounded shadow-[5px_5px_0_var(--cb-sauge-deep)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[7px_7px_0_var(--cb-sauge-deep)] transition-all duration-150"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {lang === 'fr' ? 'Réserver 30 min' : 'Book 30 min'}
          </a>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-cb-sable text-cb-encre font-bold uppercase tracking-wider text-sm px-7 py-4 border-2 border-cb-encre rounded hover:bg-cb-rose transition-colors duration-150"
          >
            {lang === 'fr' ? "Ou m'écrire" : 'Or write to me'}
          </a>
        </div>
      </div>
    <span
        className="absolute bottom-4 right-4 font-marker text-cb-rose text-sm -rotate-3 opacity-90 pointer-events-none"
        aria-hidden="true"
      >
        made with care, not with templates
      </span>
    </section>
  )
}
