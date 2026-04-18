'use client'
import { useState } from 'react'
import Image from 'next/image'
import type { ProfileKey, SubProfileKey } from './disc-data'
import { DISC_COLORS, profiles, subProfiles, akinatorByDominant } from './disc-data'

// ─── SECTION CONTACT "AKINATOR" ────────────────────────────────────────────
// Apparaît en bas des résultats après Phase 1 ou Phase 2
// Layout : Portrait mage (gauche) + bulle de dialogue + formulaire (droite)

interface DiscContactSectionProps {
  dominant: ProfileKey
  secondary: ProfileKey
  subProfile?: SubProfileKey | null
  scores: Record<ProfileKey, number>
}

export default function DiscContactSection({
  dominant,
  secondary,
  subProfile = null,
  scores,
}: DiscContactSectionProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [expanded, setExpanded] = useState(false)

  const color = DISC_COLORS[dominant]
  const profile = profiles[dominant]
  const sp = subProfile ? subProfiles[subProfile] : null

  // Choisir le message de la bulle
  const bubbleMessage = sp
    ? sp.akinatorMessage
    : akinatorByDominant[dominant]

  // Pré-remplir le message du formulaire avec le contexte DISC
  const total = Object.values(scores).reduce((a, b) => a + b, 0) || 1
  const scoresSummary = (['D', 'I', 'S', 'C'] as ProfileKey[])
    .map(k => `${k}: ${Math.round((scores[k] / total) * 100)}%`)
    .join(', ')
  const defaultMessage = `Bonjour Clément,\n\nJe viens de faire le test DISC sur votre site. Mon profil dominant est ${profile.name}${sp ? ` (sous-profil : ${sp.name})` : ''} (${scoresSummary}).\n\nJ'aimerais en savoir plus sur comment appliquer ces résultats dans mon contexte professionnel.\n\nCordialement,`

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://formspree.io/f/hello@clementboule.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          message: message || defaultMessage,
          _subject: `[DISC ${profile.letter}${sp ? ` · ${sp.name}` : ''}] Nouveau profil à accompagner`,
          _disc_profile: profile.name,
          _disc_subprofile: sp?.name || 'Phase 1 uniquement',
          _disc_scores: scoresSummary,
        }),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${color.main}08, ${color.main}15)`,
        border: `1px solid ${color.main}20`,
      }}
    >
      {/* CTA initial — s'expand au clic */}
      {!expanded ? (
        <button
          onClick={() => setExpanded(true)}
          className="w-full p-8 text-center transition-all hover:opacity-90 group"
        >
          <div className="flex items-center justify-center gap-4 mb-3">
            {/* Mini portrait */}
            <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 shadow-lg flex-shrink-0" style={{ borderColor: color.main }}>
              <Image
                src="/clement-illustration.png"
                alt="Clément Boulé"
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="text-left">
              <p className="text-lg font-bold text-gray-900">
                Envie de décoder votre profil {profile.name} ?
              </p>
              <p className="text-sm text-gray-500">
                {profile.teaser}
              </p>
            </div>
          </div>
          <div
            className="inline-flex items-center gap-2 text-white font-bold px-7 py-3 rounded-xl transition-all group-hover:-translate-y-0.5 mt-2"
            style={{ backgroundColor: color.main, boxShadow: `0 4px 20px ${color.main}45` }}
          >
            Discuter de mon profil
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </button>
      ) : (
        <div className="p-6 md:p-8">
          {/* Layout : Mage + Bulle | Formulaire */}
          <div className="grid md:grid-cols-2 gap-8 items-start">

            {/* ─── Colonne gauche : Portrait mage + bulle ─── */}
            <div className="flex flex-col items-center md:items-start">
              {/* Portrait avec effet mage */}
              <div className="relative mb-4">
                <div
                  className="relative w-40 h-48 md:w-48 md:h-56 rounded-2xl overflow-hidden shadow-xl"
                  style={{ border: `3px solid ${color.main}40` }}
                >
                  {/* TODO: Remplacer par l'illustration Midjourney "Clément mage"
                       Pour l'instant on utilise l'illustration line drawing existante */}
                  <Image
                    src="/clement-illustration.png"
                    alt="Clément Boulé — Consultant DISC"
                    fill
                    className="object-cover object-top"
                  />
                  {/* Overlay magique subtil */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(180deg, transparent 60%, ${color.main}15 100%)`,
                    }}
                  />
                </div>
                {/* Badge sous-profil */}
                {sp && (
                  <div
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg whitespace-nowrap"
                    style={{ backgroundColor: color.main }}
                  >
                    {sp.name}
                  </div>
                )}
              </div>

              {/* Bulle de dialogue */}
              <div className="relative bg-white rounded-2xl p-5 shadow-sm border border-gray-100 max-w-md">
                {/* Triangle de la bulle pointant vers le portrait */}
                <div
                  className="absolute -top-2 left-8 w-4 h-4 bg-white border-l border-t border-gray-100 rotate-45"
                />
                <p className="text-sm text-gray-700 leading-relaxed relative z-10">
                  {bubbleMessage}
                </p>
                <p className="text-xs text-gray-400 mt-3 font-medium">
                  — Clément Boulé, Formateur & Consultant
                </p>
              </div>
            </div>

            {/* ─── Colonne droite : Formulaire ─── */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                Parlons de votre profil
              </h3>
              <p className="text-sm text-gray-500 mb-5">
                Séance individuelle ou atelier d'équipe — je vous recontacte sous 24h.
              </p>

              {status === 'success' ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center">
                  <div className="text-3xl mb-2">✓</div>
                  <p className="text-emerald-800 font-bold mb-1">Message envoyé</p>
                  <p className="text-emerald-600 text-sm">
                    Je vous recontacte rapidement pour discuter de votre profil {profile.name}{sp ? ` (${sp.name})` : ''}.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                      Nom
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={e => setName(e.target.value)}
                      placeholder="Votre nom"
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none transition-colors"
                      onFocus={e => e.target.style.borderColor = color.main}
                      onBlur={e => e.target.style.borderColor = '#E5E7EB'}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="votre@email.com"
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none transition-colors"
                      onFocus={e => e.target.style.borderColor = color.main}
                      onBlur={e => e.target.style.borderColor = '#E5E7EB'}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                      Message
                    </label>
                    <textarea
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                      placeholder={defaultMessage}
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 resize-none focus:outline-none transition-colors leading-relaxed"
                      style={{ minHeight: 120 }}
                      onFocus={e => e.target.style.borderColor = color.main}
                      onBlur={e => e.target.style.borderColor = '#E5E7EB'}
                    />
                  </div>

                  {status === 'error' && (
                    <p className="text-red-600 text-sm font-medium">
                      Une erreur est survenue. Réessayez ou contactez-moi directement à hello@clementboule.com.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full inline-flex items-center justify-center gap-2 text-white font-bold px-7 py-3.5 rounded-xl transition-all hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{ backgroundColor: color.main, boxShadow: `0 4px 20px ${color.main}45` }}
                  >
                    {status === 'sending' ? (
                      <>
                        <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        Envoyer
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </>
                    )}
                  </button>

                  <p className="text-xs text-gray-400 text-center">
                    🔒 Vos données sont envoyées uniquement à Clément Boulé. Aucune donnée n'est stockée sur ce site.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
