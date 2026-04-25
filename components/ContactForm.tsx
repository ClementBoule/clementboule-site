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
      <div className="flex flex-col items-center text-center py-8 gap-5">
        <div className="w-14 h-14 rounded-full bg-[#3D6DB8]/10 flex items-center justify-center text-[#3D6DB8]">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <div className="space-y-1.5 max-w-sm">
          <p className="text-base font-semibold text-[#1A2B4A]">Votre message est dans votre boîte mail</p>
          <p className="text-sm text-[#6B7E95]">
            Pensez à cliquer sur Envoyer pour qu’il parte. Je vous réponds sous 24h en semaine.
          </p>
        </div>
        <div className="w-full max-w-sm pt-3 border-t border-[#1A2B4A]/8">
          <p className="text-xs font-semibold text-[#1A2B4A] mb-3 text-center">En attendant, si vous voulez aller plus vite</p>
          <div className="flex flex-col sm:flex-row gap-2.5">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-[#3D6DB8] text-white text-sm font-semibold px-4 py-2.5 rounded-full hover:bg-[#2D5A9E] hover:-translate-y-0.5 shadow-sm transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Réserver un appel
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-white text-[#1A2B4A] text-sm font-semibold px-4 py-2.5 rounded-full border border-[#1A2B4A]/15 hover:border-[#3D6DB8]/50 hover:text-[#3D6DB8] hover:-translate-y-0.5 transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              Suivez-moi sur LinkedIn
            </a>
          </div>
        </div>
        <button onClick={() => setSent(false)} className="text-xs text-[#6B7E95] hover:text-[#3D6DB8] hover:underline mt-1">
          Modifier mon message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
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
            <strong>Le contexte du quiz est dans votre message.</strong> Complétez vos coordonnées et c’est parti.
          </span>
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-[#1A2B4A] mb-1.5">
            Votre nom <span className="text-[#3D6DB8]">*</span>
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
            Entreprise
            <span className="text-[#6B7E95] font-normal ml-1">(si pertinent)</span>
          </label>
          <input
            type="text"
            placeholder="Nom de votre boîte"
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
          Votre message <span className="text-[#3D6DB8]">*</span>
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
        className="inline-flex w-full items-center justify-center gap-2 bg-[#3D6DB8] text-white font-semibold px-6 py-3.5 rounded-full hover:bg-[#2D5A9E] hover:-translate-y-0.5 shadow-md transition-all duration-200"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        M’envoyer le message
      </button>

      <p className="text-xs text-[#6B7E95]/70 text-center">
        À l’envoi, votre boîte mail s’ouvre avec le message prêt à partir. Rien n’est stocké ici.
      </p>
    </form>
  )
}
