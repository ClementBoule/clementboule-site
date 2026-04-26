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
          background: '#2A2A2A',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '8px solid #1FB8B0',
          borderRadius: 24,
        }}
      >
        <span
          style={{
            color: '#FBF4DD',
            fontSize: 90,
            fontWeight: 900,
            letterSpacing: '-4px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            textTransform: 'uppercase',
          }}
        >
          cb
        </span>
      </div>
    ),
    { ...size }
  )
}
