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
    'Formateur consultant coach bilingue FR/EN à Paris. J\'accompagne dirigeants, managers et équipes en business schools, PME et grands groupes.',

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

    /* FAQ Schema (GEO gold) — synchronisé avec /faq */
    {
      '@type': 'FAQPage',
      '@id': 'https://www.clementboule.fr/faq#faqpage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Tu proposes des formations finançables OPCO ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Non. Je travaille en direct avec mes clients — pas de certification Qualiopi, pas de parcours OPCO. Ça me permet de construire des programmes vraiment sur-mesure, sans contrainte administrative, et de m'adapter en temps réel à vos équipes.",
          },
        },
        {
          '@type': 'Question',
          name: "En quoi tu te différencies d'un organisme de formation classique ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Je ne vends pas un catalogue. Chaque programme est conçu à partir de vos enjeux réels. Je travaille seul — ce qui garantit une cohérence totale entre le diagnostic, la conception et l'animation. Et je m'adapte en cours de session si la dynamique de groupe le demande.",
          },
        },
        {
          '@type': 'Question',
          name: 'Tu travailles avec quel type de clients ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Business schools et grandes écoles parisiennes, PME, grandes entreprises, associations, institutions publiques. Ce qui varie, c'est le secteur — pas l'exigence. Je travaille en français et en anglais.",
          },
        },
        {
          '@type': 'Question',
          name: "Quelle est la durée minimale d'une intervention ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Une demi-journée (3h30) est le format minimum. La plupart de mes modules se déploient sur 1 à 2 jours. Pour le coaching individuel, je travaille sur des séquences de 3 à 6 séances.",
          },
        },
        {
          '@type': 'Question',
          name: 'Tu interviens en présentiel ou à distance ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Les deux. Le présentiel reste le format le plus efficace pour créer de la dynamique de groupe. Le distanciel fonctionne bien pour le coaching individuel et les modules de suivi.',
          },
        },
        {
          '@type': 'Question',
          name: 'Tu peux venir dans nos locaux ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Oui, je me déplace en Île-de-France et dans toute la France selon les projets. Pour les interventions hors Paris, des frais de déplacement s'appliquent selon les conditions définies au devis.",
          },
        },
        {
          '@type': 'Question',
          name: 'Quel est le nombre de participants idéal ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Pour les formations, entre 8 et 20 participants est l'optimum. En dessous, la dynamique de groupe est limitée. Au-delà, la personnalisation devient plus difficile. Pour le coaching, je travaille en individuel ou en binôme.",
          },
        },
        {
          '@type': 'Question',
          name: 'Quels sont tes tarifs ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Je facture à la journée ou au module selon la nature du projet. Tous les devis sont sur-mesure — contacte-moi pour qu'on évalue ensemble ce qui correspond à ton besoin.",
          },
        },
        {
          '@type': 'Question',
          name: 'Comment se passe la facturation ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Je suis auto-entrepreneur (SIRET disponible sur demande). Je facture après prestation avec délai de paiement à 30 jours. Un acompte peut être demandé pour les projets d'envergure.",
          },
        },
        {
          '@type': 'Question',
          name: 'Vous pouvez fournir un numéro SIRET pour la comptabilité ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Oui, toutes les informations légales sont disponibles sur demande et apparaissent sur chaque facture.',
          },
        },
        {
          '@type': 'Question',
          name: "C'est quoi le test DISC proposé sur le site ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Le DISC est un outil d'analyse comportementale qui identifie 4 profils : Dominant, Influent, Stable, Consciencieux. Il est utilisé en coaching et en formation pour améliorer la communication, le management et la dynamique d'équipe. Le test sur le site est une version gratuite et indicative.",
          },
        },
        {
          '@type': 'Question',
          name: 'Tu peux animer des ateliers DISC en entreprise ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Oui, c'est une de mes spécialités. Je propose des ateliers DISC de demi-journée ou d'une journée pour les équipes — idéal pour améliorer la communication interne, prévenir les conflits et renforcer la cohésion.",
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
        {/* Cloudflare Web Analytics — gratuit, RGPD-natif (cookieless, anonyme) */}
        <script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "978174ed0d3a40eab4ab55b09079714a"}'
        />
      </head>
      <body>
        <LanguageProvider>{children}<HomeFab /></LanguageProvider>
      </body>
    </html>
  )
}
