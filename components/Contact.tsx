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
    <section id="contact" className="py-24 md:py-32 bg-[#EBF0F8]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left: text */}
          <div className="lg:sticky lg:top-28 space-y-6">
            <p className="text-xs font-semibold text-[#3D6DB8] uppercase tracking-widest">
              {t.contact.label}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A2B4A] leading-tight">
              {t.contact.title}
            </h2>
            <p className="text-[#6B7E95] leading-relaxed">
              {t.contact.subtitle}
            </p>
            <a
              href="mailto:hello@clementboule.com"
              className="inline-flex items-center gap-2 text-[#3D6DB8] hover:text-[#2E5FA8] transition-colors text-sm font-medium group"
            >
              <div className="w-8 h-8 rounded-xl bg-[#3D6DB8]/10 flex items-center justify-center group-hover:bg-[#3D6DB8]/15 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              hello@clementboule.com
            </a>
          </div>

          {/* Right: form */}
          <form onSubmit={handleSubmit} className="space-y-5 bg-white rounded-3xl p-8 shadow-xl shadow-[#3D6DB8]/8 border border-[#3D6DB8]/8">
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#6B7E95] uppercase tracking-wide">
                  {t.contact.name}
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder={t.contact.namePlaceholder}
                  className="w-full bg-[#F5F7FB] border border-[#3D6DB8]/12 rounded-xl px-4 py-3 text-sm text-[#1A2B4A] placeholder-[#B0C4DA] focus:outline-none focus:border-[#3D6DB8]/40 focus:ring-2 focus:ring-[#3D6DB8]/10 transition-all"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#6B7E95] uppercase tracking-wide">
                  {t.contact.email}
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder={t.contact.emailPlaceholder}
                  className="w-full bg-[#F5F7FB] border border-[#3D6DB8]/12 rounded-xl px-4 py-3 text-sm text-[#1A2B4A] placeholder-[#B0C4DA] focus:outline-none focus:border-[#3D6DB8]/40 focus:ring-2 focus:ring-[#3D6DB8]/10 transition-all"
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[#6B7E95] uppercase tracking-wide">
                {t.contact.message}
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder={t.contact.messagePlaceholder}
                className="w-full bg-[#F5F7FB] border border-[#3D6DB8]/12 rounded-xl px-4 py-3 text-sm text-[#1A2B4A] placeholder-[#B0C4DA] focus:outline-none focus:border-[#3D6DB8]/40 focus:ring-2 focus:ring-[#3D6DB8]/10 transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full bg-gradient-to-r from-[#3D6DB8] to-[#5B8FD6] hover:from-[#2E5FA8] hover:to-[#4A7EC5] disabled:opacity-60 text-white font-semibold py-3.5 rounded-xl transition-all shadow-lg shadow-[#3D6DB8]/20 hover:shadow-[#3D6DB8]/30 hover:-translate-y-0.5 disabled:translate-y-0"
            >
              {status === 'sending' ? t.contact.sending : t.contact.send}
            </button>

            {status === 'success' && (
              <div className="flex items-center gap-2 text-sm text-emerald-600 bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-3">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {t.contact.success}
              </div>
            )}
            {status === 'error' && (
              <div className="flex items-center gap-2 text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
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
