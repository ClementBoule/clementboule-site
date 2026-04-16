import { NextResponse } from 'next/server'

// Route API contact — utilise l'API REST Resend via fetch natif (aucune dépendance npm)
// Prérequis : variable d'env RESEND_API_KEY dans Vercel Dashboard
// Si la clé est absente → 503 → le ChatBot bascule automatiquement sur le fallback mailto:

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, subject, message } = body as {
      name?: string
      email?: string
      subject?: string
      message?: string
    }

    // Validation basique
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json({ error: 'Champs requis manquants' }, { status: 400 })
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      return NextResponse.json({ error: 'Email invalide' }, { status: 400 })
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      // Pas de clé configurée → le client bascule sur mailto:
      return NextResponse.json({ error: 'Service email non configuré' }, { status: 503 })
    }

    const emailSubject = subject ? `[Site] ${subject}` : '[Site] Nouveau message'
    const htmlBody = `
      <div style="font-family: sans-serif; max-width: 600px;">
        <h2 style="color: #1A2B4A;">Nouveau message depuis clementboule.fr</h2>
        <p><strong>De :</strong> ${name} (<a href="mailto:${email}">${email}</a>)</p>
        <p><strong>Sujet :</strong> ${subject || '—'}</p>
        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 16px 0;" />
        <p style="white-space: pre-wrap; color: #374151;">${message}</p>
        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 16px 0;" />
        <p style="font-size: 12px; color: #9CA3AF;">Envoyé via le chatbot de clementboule.fr</p>
      </div>
    `

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Site Web <onboarding@resend.dev>',
        to: ['boule.clement@gmail.com'],
        reply_to: email,
        subject: emailSubject,
        html: htmlBody,
      }),
    })

    if (!res.ok) {
      const errText = await res.text()
      console.error('[API contact] Resend error:', res.status, errText)
      return NextResponse.json({ error: 'Erreur lors de l\'envoi' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[API contact] Exception:', err)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
