'use client'
import { useState, useRef, useEffect } from 'react'
import { useLang } from './LanguageContext'

const STYLES = `
@keyframes floatShape {
  0%,100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-16px) rotate(5deg); }
}
@keyframes fadeUpIn {
  from { opacity: 0; transform: translateY(28px); }
  to { opacity: 1; transform: translateY(0); }
}
.contact-shape-a { animation: floatShape 7s ease-in-out infinite; }
.contact-shape-b { animation: floatShape 9s ease-in-out infinite 1.5s; }
.contact-shape-c { animation: floatShape 6s ease-in-out infinite 3s; }
`

export default function Contact() {
  const { t } = useLang()
  const [status, setStatus] = useState('idle' as 'idle' | 'sending' | 'success' | 'error')
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)
  const formRef = useRef<HTMLFormElement>(null)

  // Controlled form values — pre-fillable via URL params
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  // Read URL search params on mount to pre-fill from chatbot CTAs
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const s = params.get('subject')
    const m = params.get('message')
    const n = params.get('name')
    const e = params.get('email')
    if (s) setSubject(decodeURIComponent(s))
    if (m) setMessage(decodeURIComponent(m))
    if (n) setName(decodeURIComponent(n))
    if (e) setEmail(decodeURIComponent(e))
  }, [])

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
    const payload = { name, email, subject, message }
    try {
      const res = await fetch('https://formspree.io/f/hello@clementboule.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      })
      if (res.ok) { setStatus('success'); formRef.current?.reset(); setName(''); setEmail(''); setSubject(''); setMessage('') }
      else setStatus('error')
    } catch { setStatus('error') }
  }

  return (
    <section ref={ref} id="contact" className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0B1120 0%, #0F1A30 50%, #0D1525 100%)' }}>
      <style>{STYLES}</style>

      {/* Background shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-[0.07]"
          style={{ background: 'radial-gradient(circle, #3D6DB8, transparent 70%)', transform: 'translate(-30%, -30%)' }} />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full opacity-[0.08]"
          style={{ background: 'radial-gradient(circle, #F5A98C, transparent 70%)', transform: 'translate(30%, 30%)' }} />
        <div className="contact-shape-a absolute top-[15%] right-[10%] w-8 h-8 rounded-md opacity-10"
          style={{ background: '#3D6DB8', transform: 'rotate(15deg)' }} />
        <div className="contact-shape-b absolute bottom-[20%] left-[8%] w-5 h-5 rounded-full opacity-15"
          style={{ background: '#6B9ED4' }} />
        <div className="contact-shape-c absolute top-[55%] right-[25%] w-3 h-3 rounded-sm opacity-20"
          style={{ background: '#F5A98C', transform: 'rotate(30deg)' }} />
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'radial-gradient(circle, #6B9ED4 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#3D6DB8]/60 to-transparent" />

      <div className="relative max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* ── Left: info ── */}
          <div style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'none' : 'translateY(28px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#6B9ED4] mb-4">
              {t.contact?.label || 'CONTACT'}
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {t.contact?.title || 'Travaillons ensemble'}
            </h2>
            <p className="text-white/55 leading-relaxed mb-8 text-base">
              {t.contact?.subtitle || "Un projet, une question, une id\u00e9e de partenariat\u00a0? Envoyez-moi un message, je reviens vers vous sous 48h."}
            </p>
            <div className="space-y-3">
              <a href="mailto:hello@clementboule.com"
                className="flex items-center gap-3 text-white/60 hover:text-white transition-colors group">
                <span className="w-8 h-8 rounded-lg bg-white/5 group-hover:bg-[#3D6DB8]/30 flex items-center justify-center transition-colors">
                  <svg width="14" height="11" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1" y="1" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.6" fill="none"/>
                    <path d="M1 4.5L10 9.5L19 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                  </svg>
                </span>
                <span className="text-sm">hello@clementboule.com</span>
              </a>
              <a href="https://www.linkedin.com/in/cl%C3%A9ment-boul%C3%A9/" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/60 hover:text-white transition-colors group">
                <span className="w-8 h-8 rounded-lg bg-white/5 group-hover:bg-[#0A66C2]/30 flex items-center justify-center transition-colors">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </span>
                <span className="text-sm">LinkedIn</span>
              </a>
              <a href="https://www.malt.fr/profile/clementboule" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/60 hover:text-white transition-colors group">
                <span className="w-8 h-8 rounded-lg bg-white/5 group-hover:bg-[#FC5A5A]/20 flex items-center justify-center transition-colors overflow-hidden">
                  <img src="/logos/malt-logo.svg" alt="Malt" width="18" height="18" style={{ objectFit: 'contain' }} />
                </span>
                <span className="text-sm">Malt</span>
              </a>
            </div>
            <div className="flex gap-2 mt-10">
              {[{ l: 'D', c: '#DC2626' }, { l: 'I', c: '#EAB308' }, { l: 'S', c: '#16A34A' }, { l: 'C', c: '#2563EB' }].map(({ l, c }) => (
                <div key={l} className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-white text-sm"
                  style={{ background: c + '30', border: `1px solid ${c}40`, color: c }}>
                  {l}
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: form ── */}
          <div style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'none' : 'translateY(28px)',
            transition: 'opacity 0.7s ease .15s, transform 0.7s ease .15s',
          }}>
            {status === 'success' ? (
              <div className="bg-white/5 border border-[#16A34A]/30 rounded-2xl p-10 text-center">
                <div className="text-4xl mb-4">\u2713</div>
                <p className="text-white font-semibold text-lg mb-2">Message envoy\u00e9\u00a0!</p>
                <p className="text-white/50 text-sm">Je vous r\u00e9ponds sous 48h.</p>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit}
                className="space-y-4 bg-white/[0.04] backdrop-blur-sm border border-white/10 rounded-2xl p-8">

                {/* Subject — visible si pr\u00e9-rempli, sinon discret */}
                {subject && (
                  <div className="px-4 py-3 rounded-xl border text-sm font-medium"
                    style={{ background: 'rgba(61,109,184,0.15)', borderColor: 'rgba(61,109,184,0.35)', color: '#6B9ED4' }}>
                    \ud83c\udfaf {subject}
                  </div>
                )}
                <input type="hidden" name="subject" value={subject} />

                <div>
                  <label className="block text-white/50 text-xs font-medium mb-1.5 tracking-wide">
                    {t.contact?.name || 'Votre nom'}
                  </label>
                  <input
                    name="name" type="text" required
                    value={name} onChange={e => setName(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/25 focus:outline-none focus:border-[#3D6DB8]/60 focus:bg-white/8 transition-all"
                    placeholder={t.contact?.name || 'Votre nom'}
                  />
                </div>
                <div>
                  <label className="block text-white/50 text-xs font-medium mb-1.5 tracking-wide">
                    {t.contact?.email || 'Email'}
                  </label>
                  <input
                    name="email" type="email" required
                    value={email} onChange={e => setEmail(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/25 focus:outline-none focus:border-[#3D6DB8]/60 focus:bg-white/8 transition-all"
                    placeholder={t.contact?.email || 'Email'}
                  />
                </div>
                <div>
                  <label className="block text-white/50 text-xs font-medium mb-1.5 tracking-wide">
                    {t.contact?.message || 'Message'}
                  </label>
                  <textarea
                    name="message" required rows={5}
                    value={message} onChange={e => setMessage(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/25 focus:outline-none focus:border-[#3D6DB8]/60 focus:bg-white/8 transition-all resize-none"
                    placeholder={t.contact?.messagePlaceholder || 'Votre message...'}
                  />
                </div>

                <button type="submit" disabled={status === 'sending'}
                  className="w-full bg-[#3D6DB8] hover:bg-[#2D5DA8] active:bg-[#1D4D98] text-white font-semibold py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#3D6DB8]/30 disabled:opacity-50 disabled:cursor-not-allowed">
                  {status === 'sending' ? (t.contact?.sending || 'Envoi...') : (t.contact?.send || 'Envoyer le message')}
                </button>
                {status === 'error' && (
                  <p className="text-red-400 text-xs text-center">
                    {t.contact?.error || 'Une erreur est survenue. R\u00e9essayez ou \u00e9crivez directement \u00e0 hello@clementboule.com'}
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
