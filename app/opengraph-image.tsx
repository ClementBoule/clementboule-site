import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Clément Boulé – Formateur Consultant Coach à Paris'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: 'flex',
          background: '#1A2B4A',
          position: 'relative',
        }}
      >
        {/* Barre accent gauche dorée */}
        <div style={{
          position: 'absolute',
          left: 80,
          top: 80,
          bottom: 80,
          width: 4,
          background: '#C4A064',
          display: 'flex',
        }} />

        {/* Contenu principal */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          paddingLeft: 120,
          paddingTop: 130,
          flex: 1,
        }}>
          {/* Nom */}
          <div style={{
            fontSize: 72,
            fontWeight: 700,
            color: 'white',
            fontFamily: 'Georgia, serif',
            letterSpacing: '-1px',
            display: 'flex',
          }}>
            Clément Boulé
          </div>

          {/* Séparateur doré */}
          <div style={{
            width: 420,
            height: 3,
            background: '#C4A064',
            marginTop: 12,
            marginBottom: 20,
            display: 'flex',
          }} />

          {/* Tagline */}
          <div style={{
            fontSize: 28,
            color: '#C4A064',
            fontFamily: 'Arial, sans-serif',
            display: 'flex',
          }}>
            Formateur · Consultant · Coach
          </div>

          {/* Sous-titre */}
          <div style={{
            fontSize: 22,
            color: '#C8D2E6',
            marginTop: 16,
            fontFamily: 'Arial, sans-serif',
            display: 'flex',
          }}>
            Développement des compétences, management et leadership
          </div>
          <div style={{
            fontSize: 22,
            color: '#C8D2E6',
            marginTop: 6,
            fontFamily: 'Arial, sans-serif',
            display: 'flex',
          }}>
            en français et en anglais — Paris
          </div>

          {/* Tags */}
          <div style={{ display: 'flex', gap: 14, marginTop: 60 }}>
            {['Business Schools', 'Grands groupes', 'PME', 'Bilingue FR/EN'].map((tag) => (
              <div key={tag} style={{
                background: '#28406A',
                color: 'white',
                padding: '8px 20px',
                borderRadius: 6,
                fontSize: 20,
                fontFamily: 'Arial, sans-serif',
                fontWeight: 600,
                display: 'flex',
              }}>
                {tag}
              </div>
            ))}
          </div>
        </div>

        {/* Monogramme CB + URL bas droite */}
        <div style={{
          position: 'absolute',
          right: 80,
          bottom: 80,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: 10,
        }}>
          <div style={{
            width: 90,
            height: 70,
            background: '#28406A',
            borderRadius: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: 38,
            fontWeight: 700,
            fontFamily: 'Georgia, serif',
          }}>
            CB
          </div>
          <div style={{
            color: '#96AAD2',
            fontSize: 20,
            fontFamily: 'Arial, sans-serif',
            display: 'flex',
          }}>
            clementboule.fr
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
