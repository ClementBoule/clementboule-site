import type { Metadata } from 'next'
import './globals.css'
import { LanguageProvider } from '@/components/LanguageContext'

/* ─── Metadata optimisées SEO + GEO ─────────────────────────────────────── */
export const metadata: Metadata = {
  metadataBase: new URL('https://www.clementboule.fr'),

  title: {
    default: 'Clément Boulé | Formateur Consultant Coach – Paris, Bilingue',
    template: '%s | Clément Boulé',
  },
  description:
    'Formateur, consultant et coach en entreprise à Paris. J\'accompagne dirigeants et équipes en français et en anglais — business schools, grands groupes, PME. Spécialiste développement des compétences, management et stratégie.',

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
      'Formateur, consultant et coach en entreprise à Paris. J\'accompagne dirigeants et équipes en français et en anglais — business schools, grands groupes, PME.',
  },

  /* ── Twitter / X Card ── */
  twitter: {
    card: 'summary_large_image',
    title: 'Clément Boulé | Formateur Consultant Coach – Paris',
    description:
      'Formateur bilingue, consultant et coach en entreprise à Paris. Business schools, grands groupes, PME.',
    creator: '@clementboule',
  },

  /* ── Favicons via app/icon.tsx + app/apple-icon.tsx ── */
  manifest: '/site.webmanifest',

  /* ── Canonical + robots ── */
  alternates: {
    canonical: 'https://www.clementboule.fr',
    languages: {
      'fr-FR': 'https://www.clementboule.fr',
      'en-GB': 'https://www.clementboule.fr/en',
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
  // verification: { google: 'VOTRE_CODE_VERIFICATION' },
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

    /* FAQ Schema (GEO gold) */
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Qu\'est-ce qu\'un formateur consultant coach en entreprise ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Un formateur consultant coach en entreprise est un professionnel qui combine trois rôles : il forme les équipes sur des compétences précises, conseille les dirigeants sur leur stratégie, et accompagne individuellement les managers et collaborateurs dans leur développement. Clément Boulé exerce ces trois missions, en français et en anglais, à Paris.',
          },
        },
        {
          '@type': 'Question',
          name: 'Clément Boulé intervient-il en business schools ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Oui, Clément Boulé intervient régulièrement dans plusieurs business schools et grandes écoles à Paris, en tant que formateur et conférencier bilingue (français/anglais), sur des thématiques de management, leadership et développement des compétences.',
          },
        },
        {
          '@type': 'Question',
          name: 'Propose-t-il des formations en anglais ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Oui, Clément Boulé propose l\'ensemble de ses formations, sessions de coaching et interventions en entreprise en français et en anglais. Il est formateur consultant bilingue basé à Paris.',
          },
        },
        {
          '@type': 'Question',
          name: 'Comment contacter Clément Boulé pour une formation ou un coaching ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Vous pouvez contacter Clément Boulé directement via le formulaire de contact sur son site clementboule.fr, ou via son profil LinkedIn et Malt. Il est basé à Paris et intervient en France et à l\'international.',
          },
        },
      ],
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        {/* Cookiebot */}
        <script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="01e8cd7c-a1d4-412c-b51c-978a792e85f9"
          data-blockingmode="auto"
          type="text/javascript"
          async
        />
        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
