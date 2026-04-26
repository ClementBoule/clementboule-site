'use client'
import { useState, useEffect, FormEvent } from 'react'
import { useSearchParams } from 'next/navigation'
import { CALENDLY_URL } from '@/lib/cta-config'

const TYPES = [
  { value: '', label: 'C’est pour quoi ?' },
  { value: 'Formation', label: 'Une formation pour mes équipes' },
  { value: 'Coaching', label: 'Un accompagnement individuel' },
  { value: 'Conférence', label: 'Une intervention type conférence' },
  { value: 'Grande école', label: 'Une intervention en école' },
  { value: 'Autre', label: 'Autre chose' },
]

const LINKEDIN_URL = 'https://www.linkedin.com/in/cl%C3%A9ment-boul%C3%A9/'

export default function ContactForm() {
  const [fields, setFields] = useState({
    nom: '',
    email: '',
    entreprise: '',
    type: '',
    message: '',
  })
  const [sent, setSent] = useState(false)
  const [prefilled, setPrefilled] = useState(false)
  const searchParams = useSearchParams()

  useEffect(() => {
    if (!searchParams) return
    const type = searchParams.get('type') || ''
    const message = searchParams.get('message') || ''
    if (type || message) {
      setFields((prev) => ({
        ...prev,
        type: type || prev.type,
        message: message || prev.message,
      }))
      setPrefilled(!!(type || message))
    }
  }, [searchParams])

  const set = (k: keyof typeof fields) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setFields((prev) => ({ ...prev, [k]: e.target.value }))

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(
      `[clementboule.fr] ${fields.type || 'Contact'}, ${fields.nom}`
    )
    const body = encodeURIComponent(
      [
        `Nom : ${fields.nom}`,
        `Email : ${fields.email}`,
        fields.entreprise ? `Entreprise : ${fields.entreprise}` : '',
        `Type de demande : ${fields.type || 'Non précisé'}`,
        '',
        fields.message,
      ]
        .filter(Boolean)
        .join('\n')
    )
    window.location.href = `mailto:hello@clementboule.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  // Inputs DA-C : bordure 2.5px sauge-deep, bg creme, focus ring sarcelle
  const inputClass =
    'w-full px-4 py-3 border-[2.5px] border-cb-sauge-deep bg-cb-creme text-cb-encre text-sm font-medium placeholder-cb-encre-soft/60 focus:outline-none focus:ring-[3px] focus:ring-cb-sarcelle/40 focus:border-cb-sarcelle transition-all rounded-sm'

  if (sent) {
    return (
      <div className="flex flex-col items-center text-center py-6 gap-5">
        <div
          className="w-16 h-16 bg-cb-sarcelle text-cb-sable border-[2.5px] border-cb-encre rounded-sm flex items-center justify-center -rotate-2"
          style={{ boxShadow: '5px 5px 0 var(--cb-encre)' }}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div className="space-y-2 max-w-sm">
          <h3 className="font-anton text-2xl md:text-3xl uppercase leading-[1] text-cb-encre">
            Votre message est <span className="inline-block bg-cb-sarcelle text-cb-sable px-2 -rotate-1 rounded-sm">parti</span>.
          </h3>
          <p className="text-sm text-cb-encre-soft leading-relaxed text-pretty">
            Pensez à cliquer sur Envoyer dans votre boîte mail. Je vous réponds 24 à 48 heures.
          </p>
        </div>
        <div className="w-full max-w-sm pt-4 border-t-2 border-cb-sauge">
          <p className="font-marker text-cb-cardinal text-base mb-3 -rotate-1">
            En attendant →
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-cb-sarcelle text-cb-sable font-anton text-sm uppercase tracking-wider border-[2.5px] border-cb-encre px-4 py-2.5 rounded-sm hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200"
              style={{ boxShadow: '4px 4px 0 var(--cb-encre)' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = '6px 6px 0 var(--cb-encre)' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = '4px 4px 0 var(--cb-encre)' }}
            >
              Réserver un appel →
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-cb-sable text-cb-encre font-anton text-sm uppercase tracking-wider border-[2.5px] border-cb-sauge-deep px-4 py-2.5 rounded-sm hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200"
              style={{ boxShadow: '4px 4px 0 var(--cb-sauge-deep)' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = '6px 6px 0 var(--cb-sauge-deep)' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = '4px 4px 0 var(--cb-sauge-deep)' }}
            >
              LinkedIn →
            </a>
          </div>
        </div>
        <button
          onClick={() => setSent(false)}
          className="text-xs font-bold uppercase tracking-widest text-cb-encre-soft hover:text-cb-cardinal border-b-2 border-cb-sauge hover:border-cb-cardinal pb-0.5 transition-colors mt-2"
        >
          Modifier mon message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {prefilled && (
        <div
          className="flex items-start gap-3 p-4 bg-cb-rose border-[2.5px] border-cb-sauge-deep rounded-sm text-sm text-cb-encre"
          style={{ boxShadow: '4px 4px 0 var(--cb-sarcelle)' }}
          role="status"
        >
          <svg className="w-5 h-5 shrink-0 mt-0.5 text-cb-sarcelle-deep" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>
            <strong className="font-anton uppercase tracking-wider text-base">Le contexte du quiz est dans votre message.</strong>
            <span className="block mt-1">Complétez vos coordonnées et c’est parti.</span>
          </span>
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-anton uppercase tracking-wider text-cb-encre mb-1.5">
            Votre nom <span className="text-cb-cardinal">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="Prénom Nom"
            value={fields.nom}
            onChange={set('nom')}
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-xs font-anton uppercase tracking-wider text-cb-encre mb-1.5">
            Email <span className="text-cb-cardinal">*</span>
          </label>
          <input
            type="email"
            required
            placeholder="vous@entreprise.com"
            value={fields.email}
            onChange={set('email')}
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-anton uppercase tracking-wider text-cb-encre mb-1.5">
            Entreprise
            <span className="text-cb-encre-soft font-medium normal-case ml-1">(si pertinent)</span>
          </label>
          <input
            type="text"
            placeholder="Nom de votre entreprise / structure"
            value={fields.entreprise}
            onChange={set('entreprise')}
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-xs font-anton uppercase tracking-wider text-cb-encre mb-1.5">
            Type de demande <span className="text-cb-cardinal">*</span>
          </label>
          <select
            required
            value={fields.type}
            onChange={set('type')}
            className={inputClass + ' cursor-pointer'}
          >
            {TYPES.map((t) => (
              <option key={t.value} value={t.value} disabled={t.value === ''}>
                {t.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-anton uppercase tracking-wider text-cb-encre mb-1.5">
          Votre message <span className="text-cb-cardinal">*</span>
        </label>
        <textarea
          required
          rows={prefilled ? 7 : 5}
          placeholder="Dites-moi votre situation, ce qui coince, ce que vous voulez obtenir."
          value={fields.message}
          onChange={set('message')}
          className={inputClass + ' resize-none'}
        />
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 bg-cb-sarcelle text-cb-sable font-anton text-base uppercase tracking-wider border-[2.5px] border-cb-encre px-6 py-4 rounded-sm hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200"
        style={{ boxShadow: '5px 5px 0 var(--cb-encre)' }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = '8px 8px 0 var(--cb-encre)' }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = '5px 5px 0 var(--cb-encre)' }}
      >
        M’envoyer le message →
      </button>

      <p className="text-xs text-cb-encre-soft/80 text-center font-medium">
        À l’envoi, votre boîte mail s’ouvre avec le message prêt. Rien n’est stocké ici.
      </p>
    </form>
  )
}
