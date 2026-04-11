import type { Metadata } from 'next'
import './globals.css'
import { LanguageProvider } from '@/components/LanguageContext'

export const metadata: Metadata = {
  title: 'ClÃ©ment BoulÃ© | Consultant & Coach',
  description: 'Consultant, coach et formateur spÃ©cialisÃ© en dÃ©veloppement des compÃ©tences et transformation organisationnelle.',
  metadataBase: new URL('https://clementboule.com'),
  openGraph: {
    title: 'ClÃ©ment BoulÃ© | Consultant & Coach',
    description: 'Consultant, coach et formateur spÃ©cialisÃ© en dÃ©veloppement des compÃ©tences.',
    url: 'https://clementboule.com',
    siteName: 'ClÃ©ment BoulÃ©',
    locale: 'fr_FR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
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
      </head>
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
