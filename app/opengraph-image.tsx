import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Clément Boulé — Formateur Consultant Coach à Paris'
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
          background: '#FBF4DD',
          position: 'relative',
        }}
      >
        {/* Bordure encre haut */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 6,
          background: '#2A2A2A',
          display: 'flex',
        }} />

        {/* Bandeau cardinal qui traverse */}
        <div style={{
          position: 'absolute',
          top: 110,
          left: 0,
          right: 0,
          height: 4,
          background: '#C8102E',
          display: 'flex',
        }} />

        {/* Contenu principal */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          paddingLeft: 80,
          paddingTop: 160,
          flex: 1,
        }}>
          {/* Eyebrow marker */}
          <div style={{
            fontSize: 26,
            color: '#C8102E',
            fontFamily: 'Georgia, serif',
            fontStyle: 'italic',
            transform: 'rotate(-2deg)',
            display: 'flex',
            marginBottom: 18,
          }}>
            ↓ Formateur, consultant, coach
          </div>

          {/* Nom géant Anton-style */}
          <div style={{
            fontSize: 110,
            fontWeight: 900,
            color: '#2A2A2A',
            fontFamily: 'Helvetica, Arial, sans-serif',
            letterSpacing: '-3px',
            textTransform: 'uppercase',
            lineHeight: 0.92,
            display: 'flex',
            flexDirection: 'column',
          }}>
            <span style={{ display: 'flex' }}>Clément</span>
            <span style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{
                background: '#1FB8B0',
                color: '#FBF4DD',
                padding: '0 18px',
                transform: 'rotate(-1deg)',
                display: 'flex',
                marginRight: 10,
              }}>
                Boulé.
              </span>
            </span>
          </div>

          {/* Sous-titre */}
          <div style={{
            fontSize: 30,
            color: '#4A4A4A',
            marginTop: 32,
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 500,
            display: 'flex',
            borderLeft: '4px solid #C8102E',
            paddingLeft: 20,
          }}>
            8 ans, bilingue FR/EN. Programmes sur-mesure, jamais de catalogue.
          </div>

          {/* Tags brutalist */}
          <div style={{ display: 'flex', gap: 12, marginTop: 40 }}>
            {['BUSINESS SCHOOLS', 'GRANDS GROUPES', 'PME', 'BILINGUE'].map((tag) => (
              <div key={tag} style={{
                background: '#FCFAF2',
                color: '#2A2A2A',
                padding: '10px 20px',
                border: '2.5px solid #4F6A52',
                fontSize: 18,
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontWeight: 700,
                letterSpacing: '1px',
                display: 'flex',
              }}>
                {tag}
              </div>
            ))}
          </div>
        </div>

        {/* URL bas droite */}
        <div style={{
          position: 'absolute',
          right: 80,
          bottom: 50,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: 8,
        }}>
          {/* Monogramme cb sarcelle */}
          <div style={{
            width: 90,
            height: 90,
            background: '#2A2A2A',
            border: '4px solid #1FB8B0',
            borderRadius: 8,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FBF4DD',
            fontSize: 50,
            fontWeight: 900,
            fontFamily: 'Helvetica, Arial, sans-serif',
            letterSpacing: '-3px',
            textTransform: 'uppercase',
          }}>
            cb
          </div>
          <div style={{
            color: '#4A4A4A',
            fontSize: 22,
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 700,
            letterSpacing: '1px',
            display: 'flex',
            marginTop: 6,
          }}>
            clementboule.fr
          </div>
        </div>

        {/* Bandeau encre bas */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 6,
          background: '#2A2A2A',
          display: 'flex',
        }} />
      </div>
    ),
    { ...size }
  )
}
