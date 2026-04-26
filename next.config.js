/**
 * Configuration Next.js — clementboule.fr
 * Headers HTTP de sécurité conformes OWASP / CSP / RGPD.
 *
 * CSP scopée :
 *   - script-src : self + Cloudflare Insights (web analytics) + Google Fonts (CSS @import)
 *                 + 'unsafe-inline' nécessaire pour Next.js JSON-LD inline (à durcir par nonce ultérieurement)
 *   - style-src : self + Google Fonts CSS + 'unsafe-inline' (Tailwind / inline styles)
 *   - img-src : self + data: (favicons) + https: (externes éventuelles)
 *   - font-src : self + Google Fonts statics
 *   - connect-src : self + Cloudflare beacon
 *   - frame-ancestors 'none' = anti-clickjacking
 */

const ContentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://static.cloudflareinsights.com",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "img-src 'self' data: https:",
  "font-src 'self' https://fonts.gstatic.com",
  "connect-src 'self' https://cloudflareinsights.com https://static.cloudflareinsights.com",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join('; ')

const securityHeaders = [
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'Content-Security-Policy', value: ContentSecurityPolicy },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()' },
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
]

/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  },
}

module.exports = nextConfig
