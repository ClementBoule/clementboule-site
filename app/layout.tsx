import type { Metadata } from 'next'
import { Anton, Space_Grotesk, Permanent_Marker } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/components/LanguageContext'
import HomeFab from '@/components/HomeFab'

// Self-host des Google Fonts via next/font (servies depuis clementboule.fr).
// Évite le transfert d'IP visiteur vers fonts.googleapis.com (cf. arrêt LG Munich 20/01/2022).
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space-grotesk',
})
const anton = Anton({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  variable: '--font-anton',
})
const permanentMarker = Permanent_Marker({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  variable: '--font-marker',
})

/* ─── Metadata optimisées SEO + GEO ──────────────────────── */
export const metadata: Metadata = {
  metadataBase: new URL('https://www.clementboule.fr'),

  title: {
    default: 'Clément Boulé | Formateur Consultant Coach – Paris, Bilingue',
    template: '%s | Clément Boulé',
  },
  description:
    "Clément Boulé, formateur consultant coach à Paris. Bilingue FR/EN, 8 ans d'expérience, +1 800 personnes formées en entreprise et en école.",

  keywords: [
    // FR – core
    'formateur en entreprise Paris',
    'formateur consultant Paris',
    'coach professionnel Paris',
    'coaching en entreprise Paris',
    'formateur bilingue Paris',
    'formateur business school Paris',
    'formation management Paris',
    'formation soft skills Paris',
    'consultant formateur coach',
    // FR – longue traîne
    'coaching professionnel bilingue français anglais',
    'formateur grandes écoles Paris',
    'développement des compétences Paris',
    'formation leadership Paris',
    'coaching dirigeants Paris',
    // EN – core
    'corporate trainer Paris',
    'bilingual business coach Paris',
    'executive coach Paris France',
    'corporate training Paris bilingual',
    'management trainer Paris',
    'business school trainer France',
    'professional coach Paris English French',
    // Nom propre
    'Clément Boulé',
    'Clement Boule formateur',
    'Clement Boule coach',
  ],

  authors: [{ name: 'Clément Boulé', url: 'https://www.clementboule.fr' }],
  creator: 'Clément Boulé',
  publisher: 'Clément Boulé',

  /* ── Open Graph (LinkedIn, WhatsApp, Slack…) ── */
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    alternateLocale: 'en_GB',
    url: 'https://www.clementboule.fr',
    siteName: 'Clément Boulé',
    title: 'Clément Boulé | Formateur Consultant Coach – Paris, Bilingue',
    description:
      "Clément Boulé, formateur consultant coach à Paris. Bilingue FR/EN, 8 ans d'expérience, +1 800 personnes formées en entreprise et en école.",
  },

  /* ── Twitter / X Card ── */
  twitter: {
    card: 'summary_large_image',
    title: 'Clément Boulé | Formateur Consultant Coach – Paris',
    description:
      "Formateur consultant coach à Paris, bilingue FR/EN. 8 ans, +1 800 personnes formées.",
    creator: '@clementboule',
  },

  /* ── Favicons : fichiers classiques dans /public + app/icon.tsx dynamique ── */
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',

  /* ── Canonical + robots ── */
  alternates: {
    canonical: 'https://www.clementboule.fr',
    languages: {
      'fr-FR': 'https://www.clementboule.fr',
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  /* ── Vérification Google Search Console ── */
  verification: { google: '7oudnNS1TAL5hkz9HxAewILdIKZadpvIfTsPgRPv6mg' },
}

/* ─── Schema.org JSON-LD (GEO – lisible par les IA) ─────────────────────── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    /* Personne */
    {
      '@type': 'Person',
      '@id': 'https://www.clementboule.fr/#person',
      name: 'Clément Boulé',
      alternateName: 'Clement Boule',
      jobTitle: 'Formateur Consultant Coach en entreprise',
      description:
        "Clément Boulé est formateur consultant coach à Paris. Il accompagne managers et dirigeants depuis 8 ans, en français comme en anglais, en entreprise et en business school.",
      url: 'https://www.clementboule.fr',
      image: 'https://www.clementboule.fr/clement.jpg',
      sameAs: [
        'https://www.linkedin.com/in/clément-boulé/',
        'https://www.malt.fr/profile/clementboule',
        'https://www.clementboule.com',
      ],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Paris',
        addressCountry: 'FR',
      },
      knowsLanguage: ['fr', 'en'],
      hasOccupation: {
        '@type': 'Occupation',
        name: 'Formateur Consultant Coach',
        occupationLocation: { '@type': 'City', name: 'Paris' },
        skills: [
          'Coaching professionnel',
          'Formation en entreprise',
          'Développement du leadership',
          'Management',
          'Stratégie d\'entreprise',
          'Communication bilingue FR/EN',
          'DISC',
        ],
      },
    },

    /* Service principal */
    {
      '@type': 'ProfessionalService',
      '@id': 'https://www.clementboule.fr/#service',
      name: 'Formations & Coaching – Clément Boulé',
      provider: { '@id': 'https://www.clementboule.fr/#person' },
      url: 'https://www.clementboule.fr',
      description:
        "Formations en entreprise et coaching individuel à Paris, en français et en anglais. Interventions en entreprise comme en business school.",
      areaServed: [
        { '@type': 'City', name: 'Paris' },
        { '@type': 'Country', name: 'France' },
      ],
      serviceType: [
        'Formation en entreprise',
        'Coaching professionnel',
        'Conseil stratégique',
        'Formation bilingue',
        'Formation business school',
      ],
      availableLanguage: ['French', 'English'],
    },

    /* Clients notables (aide les IA à te contextualiser) */
    {
      '@type': 'ItemList',
      name: 'Clients et partenaires de Clément Boulé',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'EMA' },
        { '@type': 'ListItem', position: 2, name: 'Albert' },
        { '@type': 'ListItem', position: 3, name: 'ISCOM' },
        { '@type': 'ListItem', position: 4, name: 'EDA RH' },
        { '@type': 'ListItem', position: 5, name: 'IHEDREA' },
        { '@type': 'ListItem', position: 6, name: "Apprentis d\'Auteuil" },
        { '@type': 'ListItem', position: 7, name: 'Sauvegarde' },
        { '@type': 'ListItem', position: 8, name: 'Daan' },
      ],
    },

  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`scroll-smooth ${spaceGrotesk.variable} ${anton.variable} ${permanentMarker.variable}`}>
      <head>
        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Cloudflare Web Analytics, gratuit, RGPD-natif (cookieless, anonyme) */}
        <script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "978174ed0d3a40eab4ab55b09079714a"}'
        />
      </head>
      <body className="font-sans bg-cb-sable text-cb-encre antialiased">
        <LanguageProvider>{children}<HomeFab /></LanguageProvider>
      </body>
    </html>
  )
}
