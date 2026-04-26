import type { Metadata } from 'next'
import './globals.css'
import { LanguageProvider } from '@/components/LanguageContext'
import HomeFab from '@/components/HomeFab'

/* ─── Metadata optimisées SEO + GEO ──────────────────────── */
export const metadata: Metadata = {
  metadataBase: new URL('https://www.clementboule.fr'),

  title: {
    default: 'Clément Boulé | Formateur Consultant Coach – Paris, Bilingue',
    template: '%s | Clément Boulé',
  },
  description:
    'Formateur, consultant et coach à Paris. 8 ans, bilingue FR/EN. Programmes sur-mesure, jamais de catalogue : managers, équipes et dirigeants en PME, grands groupes, business schools.',

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
      'Formateur, consultant et coach à Paris. 8 ans, bilingue FR/EN. Programmes sur-mesure, jamais de catalogue : managers, équipes et dirigeants en PME, grands groupes, business schools.',
  },

  /* ── Twitter / X Card ── */
  twitter: {
    card: 'summary_large_image',
    title: 'Clément Boulé | Formateur Consultant Coach – Paris',
    description:
      'Formateur, consultant et coach à Paris. 8 ans, bilingue FR/EN. Sur-mesure, pas de catalogue.',
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
        'Formateur, consultant et coach professionnel bilingue français-anglais basé à Paris. Clément Boulé intervient en entreprises, grands groupes, PME et business schools pour développer les compétences managériales, le leadership et la stratégie.',
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
        'Formations en entreprise, coaching individuel et conseil stratégique en français et en anglais à Paris. Interventions en business schools, grands groupes et PME.',
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
    <html lang="fr" className="scroll-smooth">
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
