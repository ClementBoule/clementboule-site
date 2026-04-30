import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Clément Boulé · Formateur entreprise & école · Paris · FR-EN'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#F5EDE0',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '60px 80px',
          fontFamily: 'sans-serif',
          color: '#1F1F1F',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 28,
            fontWeight: 700,
            color: '#C73E2D',
            letterSpacing: '0.04em',
          }}
        >
          BILINGUE · PARIS · 8 ANS
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: 110,
              fontWeight: 900,
              lineHeight: 0.95,
              letterSpacing: '-0.02em',
              textTransform: 'uppercase',
              color: '#1F1F1F',
            }}
          >
            Formations qui
          </div>
          <div
            style={{
              fontSize: 110,
              fontWeight: 900,
              lineHeight: 0.95,
              letterSpacing: '-0.02em',
              textTransform: 'uppercase',
              color: '#FFF8EC',
              background: '#C46439',
              padding: '8px 20px',
              alignSelf: 'flex-start',
              transform: 'rotate(-1deg)',
              marginTop: 8,
            }}
          >
            marchent
          </div>
          <div
            style={{
              fontSize: 110,
              fontWeight: 900,
              lineHeight: 0.95,
              letterSpacing: '-0.02em',
              textTransform: 'uppercase',
              color: '#1F1F1F',
              marginTop: 8,
            }}
          >
            vraiment.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: 28,
            fontWeight: 600,
            color: '#3D5A4D',
          }}
        >
          <div style={{ display: 'flex' }}>Clément Boulé</div>
          <div style={{ display: 'flex' }}>clementboule.fr</div>
        </div>
      </div>
    ),
    { ...size }
  )
}
