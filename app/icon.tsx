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
          background: '#2A2A2A',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '2px solid #1FB8B0',
          borderRadius: 4,
        }}
      >
        <span
          style={{
            color: '#FBF4DD',
            fontSize: 18,
            fontWeight: 900,
            letterSpacing: '-1px',
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
