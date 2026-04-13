import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 8,
          background: '#1A2B4A',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span
          style={{
            color: 'white',
            fontSize: 14,
            fontWeight: 700,
            letterSpacing: '-0.5px',
            fontFamily: 'Georgia, serif',
            marginTop: 1,
          }}
        >
          CB
        </span>
      </div>
    ),
    { ...size }
  )
}
