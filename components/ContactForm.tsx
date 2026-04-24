'use client'
import { useState, useEffect, FormEvent } from 'react'
import { useSearchParams } from 'next/navigation'

const TYPES = [
  { value: '', label: 'Type de demande…' },
  { value: 'Formation', label: 'Formation en entreprise' },
  { value: 'Coaching', label: 'Coaching individuel' },
  { value: 'Conférence', label: 'Conférence / keynote' },
  { value: 'Grande école', label: 'Intervention grande école' },
  { value: 'Autre', label: 'Autre' },
]

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

  // Pré-remplissage via query params (typiquement depuis MatchQuiz : /contact?type=...&topic=...&message=...)
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
      `[clementboule.fr] ${fields.type || 'Contact'} — ${fields.nom}`
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

  const inputClass =
    'w-full px-4 py-3 rounded-xl border border-[#1A2B4A]/12 bg-[#F8FAFE] text-[#1A2B4A] text-sm placeholder-[#6B7E95]/60 focus:outline-none focus:ring-2 focus:ring-[#3D6DB8]/30 focus:border-[#3D6DB8]/50 transition-all'

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-10 gap-4">
        <div className="w-14 h-14 rounded-full bg-[#3D6DB8]/10 flex items-center justify-center text-[#3D6DB8]">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="text-base font-semibold text-[#1A2B4A]">Votre client email s&apos;est ouvert</p>
        <p className="text-sm text-[#6B7E95] max-w-xs">
          Vérifiez la fenêtre de composition — votre message est pré-rempli. Il ne vous reste plus qu&apos;à envoyer.
        </p>
        <button onClick={() => setSent(false)} className="text-xs text-[#3D6DB8] hover:underline mt-2">
          Modifier le message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Bandeau si formulaire pré-rempli depuis MatchQuiz */}
      {prefilled && (
        <div
          className="flex items-start gap-3 p-3.5 rounded-xl text-xs"
          style={{
            background: '#EEF4FF',
            border: '1px solid #3D6DB833',
            color: '#1A2B4A',
          }}
          role="status"
        >
          <svg className="w-4 h-4 shrink-0 mt-0.5" fill="none" stroke="#3D6DB8" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>
            <strong>Contexte pré-rempli depuis le quiz.</strong> Complétez juste vos coordonnées et envoyez — le message contient déjà le format que vous avez choisi.
          </span>
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-[#1A2B4A] mb-1.5">
            Nom complet <span className="text-[#3D6DB8]">*</span>
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
          <label className="block text-xs font-semibold text-[#1A2B4A] mb-1.5">
            Email <span className="text-[#3D6DB8]">*</span>
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
          <label className="block text-xs font-semibold text-[#1A2B4A] mb-1.5">
            Entreprise / organisme
            <span className="text-[#6B7E95] font-normal ml-1">(facultatif)</span>
          </label>
          <input
            type="text"
            placeholder="Nom de l'organisation"
            value={fields.entreprise}
            onChange={set('entreprise')}
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-[#1A2B4A] mb-1.5">
            Type de demande <span className="text-[#3D6DB8]">*</span>
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
        <label className="block text-xs font-semibold text-[#1A2B4A] mb-1.5">
          Message <span className="text-[#3D6DB8]">*</span>
        </label>
        <textarea
          required
          rows={prefilled ? 7 : 5}
          placeholder="Décrivez votre contexte, vos enjeux et ce que vous cherchez à obtenir…"
          value={fields.message}
          onChange={set('message')}
          className={inputClass + ' resize-none'}
        />
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 bg-[#3D6DB8] text-white font-semibold px-6 py-3.5 rounded-full hover:bg-[#2D5A9E] hover:-translate-y-0.5 shadow-md transition-all duration-200"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        Envoyer le message
      </button>

      <p className="text-xs text-[#6B7E95]/70 text-center">
        Votre client email s&apos;ouvrira avec le message pré-rempli. Aucune donnée n&apos;est stockée sur ce site.
      </p>
    </form>
  )
   }
