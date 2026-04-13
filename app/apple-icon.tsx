import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          borderRadius: 40,
          background: '#1A2B4A',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span
          style={{
            color: 'white',
            fontSize: 80,
            fontWeight: 700,
            letterSpacing: '-3px',
            fontFamily: 'Georgia, serif',
          }}
        >
          CB
        </span>
      </div>
    ),
    { ...size }
  )
}
