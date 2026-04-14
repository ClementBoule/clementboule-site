'use client'
import { useState, useRef, useEffect } from 'react'
import { useLang } from './LanguageContext'

const STYLES = `
@keyframes floatShape {
  0%,100% { transform: translateY(0) rotate(0deg); }
  50%      { transform: translateY(-16px) rotate(5deg); }
}
@keyframes fadeUpIn {
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
}
.contact-shape-a { animation: floatShape 7s ease-in-out infinite; }
.contact-shape-b { animation: floatShape 9s ease-in-out infinite 1.5s; }
.contact-shape-c { animation: floatShape 6s ease-in-out infinite 3s; }
`

export default function Contact() {
  const { t } = useLang()
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const data = Object.fromEntries(new FormData(e.currentTarget))
    try {
      const res = await fetch('https://formspree.io/f/hello@clementboule.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) { setStatus('success'); formRef.current?.reset() }
      else setStatus('error')
    } catch { setStatus('error') }
  }

  return (
    <section
      ref={ref}
      id="contact"
      className="py-24 md:py-32 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0B1120 0%, #0F1A30 50%, #0D1525 100%)',
      }}
    >
      <style>{STYLES}</style>

      {/* Decorative background shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large color orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-[0.07]"
          style={{ background: 'radial-gradient(circle, #3D6DB8, transparent 70%)', transform: 'translate(-30%, -30%)' }} />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full opacity-[0.08]"
          style={{ background: 'radial-gradient(circle, #F5A98C, transparent 70%)', transform: 'translate(30%, 30%)' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full opacity-[0.05] -translate-x-1/2 -translate-y-1/2"
          style={{ background: 'radial-gradient(circle, #B09FE5, transparent 70%)' }} />

        {/* Floating accent shapes */}
        <div className="contact-shape-a absolute top-[15%] right-[10%] w-8 h-8 rounded-md opacity-10"
          style={{ background: '#3D6DB8', transform: 'rotate(15deg)' }} />
        <div className="contact-shape-b absolute bottom-[20%] left-[8%] w-5 h-5 rounded-full opacity-15"
          style={{ background: '#6B9ED4' }} />
        <div className="contact-shape-c absolute top-[55%] right-[25%] w-3 h-3 rounded-sm opacity-20"
          style={{ background: '#F5A98C', transform: 'rotate(30deg)' }} />

        {/* Dot grid */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle, #6B9ED4 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }} />
      </div>

      {/* Accent line top */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#3D6DB8]/60 to-transparent" />

      <div className="relative max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* ── Left: info ── */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'none' : 'translateY(28px)',
              transition: 'opacity 0.7s ease, transform 0.7s ease',
            }}
          >
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#6B9ED4] mb-4">
              {t.contact?.label || 'CONTACT'}
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {t.contact?.title || 'Travaillons ensemble'}
            </h2>
            <p className="text-white/55 leading-relaxed mb-8 text-base">
              {t.contact?.subtitle || "Un projet, une question, une idée de partenariat ? Envoyez-moi un message, je reviens vers vous sous 48h."}
            </p>

            {/* Contact info */}
            <div className="space-y-3">
              <a
                href="mailto:hello@clementboule.com"
                className="flex items-center gap-3 text-white/60 hover:text-white transition-colors group"
              >
                <span className="w-8 h-8 rounded-lg bg-white/5 group-hover:bg-[#3D6DB8]/30 flex items-center justify-center transition-colors text-sm">✉</span>
                <span className="text-sm">hello@clementboule.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/cl%C3%A9ment-boul%C3%A9/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/60 hover:text-white transition-colors group"
              >
                <span className="w-8 h-8 rounded-lg bg-white/5 group-hover:bg-[#0A66C2]/30 flex items-center justify-center transition-colors text-sm">in</span>
                <span className="text-sm">LinkedIn</span>
              </a>
            </div>

            {/* Decorative DISC row */}
            <div className="flex gap-2 mt-10">
              {[
                { l: 'D', c: '#DC2626' }, { l: 'I', c: '#EAB308' },
                { l: 'S', c: '#16A34A' }, { l: 'C', c: '#2563EB' },
              ].map(({ l, c }) => (
                <div
                  key={l}
                  className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-white text-sm"
                  style={{ background: c + '30', border: `1px solid ${c}40`, color: c }}
                >
                  {l}
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: form ── */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'none' : 'translateY(28px)',
              transition: 'opacity 0.7s ease .15s, transform 0.7s ease .15s',
            }}
          >
            {status === 'success' ? (
              <div className="bg-white/5 border border-[#16A34A]/30 rounded-2xl p-10 text-center">
                <div className="text-4xl mb-4">✓</div>
                <p className="text-white font-semibold text-lg mb-2">Message envoyé !</p>
                <p className="text-white/50 text-sm">Je vous réponds sous 48h.</p>
              </div>
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-4 bg-white/[0.04] backdrop-blur-sm border border-white/10 rounded-2xl p-8"
              >
                {[
                  { name: 'name',    label: t.contact?.name    || 'Votre nom',    type: 'text',  required: true },
                  { name: 'email',   label: t.contact?.email   || 'Email',        type: 'email', required: true },
                ].map(field => (
                  <div key={field.name}>
                    <label className="block text-white/50 text-xs font-medium mb-1.5 tracking-wide">
                      {field.label}
                    </label>
                    <input
                      name={field.name}
                      type={field.type}
                      required={field.required}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/25 focus:outline-none focus:border-[#3D6DB8]/60 focus:bg-white/8 transition-all"
                      placeholder={field.label}
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-white/50 text-xs font-medium mb-1.5 tracking-wide">
                    {t.contact?.message || 'Message'}
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/25 focus:outline-none focus:border-[#3D6DB8]/60 focus:bg-white/8 transition-all resize-none"
                    placeholder={t.contact?.messagePlaceholder || 'Votre message...'}
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-[#3D6DB8] hover:bg-[#2D5DA8] active:bg-[#1D4D98] text-white font-semibold py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#3D6DB8]/30 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'sending'
                    ? (t.contact?.sending || 'Envoi...')
                    : (t.contact?.send || 'Envoyer le message')}
                </button>
                {status === 'error' && (
                  <p className="text-red-400 text-xs text-center">
                    {t.contact?.error || 'Une erreur est survenue. Réessayez ou écrivez directement à hello@clementboule.com'}
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
