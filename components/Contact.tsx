'use client'
import { useState } from 'react'
import { useLang } from './LanguageContext'

export default function Contact() {
  const { t } = useLang()
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch('https://formspree.io/f/hello@clementboule.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: text */}
          <div className="lg:sticky lg:top-28 space-y-6">
            <p className="text-xs font-semibold text-[#7C9CBF] uppercase tracking-widest">
              {t.contact.label}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              {t.contact.title}
            </h2>
            <p className="text-white/50 leading-relaxed">
              {t.contact.subtitle}
            </p>
            <a
              href="mailto:hello@clementboule.com"
              className="inline-flex items-center gap-2 text-[#7C9CBF] hover:text-white transition-colors text-sm font-medium"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              hello@clementboule.com
            </a>
          </div>

          {/* Right: form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-white/50 uppercase tracking-wide">
                  {t.contact.name}
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder={t.contact.namePlaceholder}
                  className="w-full bg-[#0F1A2E]/60 border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-[#7C9CBF]/50 focus:ring-1 focus:ring-[#7C9CBF]/20 transition-all"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-white/50 uppercase tracking-wide">
                  {t.contact.email}
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder={t.contact.emailPlaceholder}
                  className="w-full bg-[#0F1A2E]/60 border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-[#7C9CBF]/50 focus:ring-1 focus:ring-[#7C9CBF]/20 transition-all"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium text-white/50 uppercase tracking-wide">
                {t.contact.message}
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder={t.contact.messagePlaceholder}
                className="w-full bg-[#0F1A2E]/60 border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-[#7C9CBF]/50 focus:ring-1 focus:ring-[#7C9CBF]/20 transition-all resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full bg-[#7C9CBF] hover:bg-[#6A8EAF] disabled:opacity-60 text-[#0B1120] font-semibold py-3.5 rounded-xl transition-all shadow-lg shadow-[#7C9CBF]/15 hover:shadow-[#7C9CBF]/25 hover:-translate-y-0.5 disabled:translate-y-0"
            >
              {status === 'sending' ? t.contact.sending : t.contact.send}
            </button>

            {/* Status messages */}
            {status === 'success' && (
              <div className="flex items-center gap-2 text-sm text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 rounded-xl px-4 py-3">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {t.contact.success}
              </div>
            )}
            {status === 'error' && (
              <div className="flex items-center gap-2 text-sm text-red-400 bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                {t.contact.error}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
