import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Hitlovers — Onde a música vira hit e o seu evento lota'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          background:
            'radial-gradient(circle at 20% 20%, #2a1240 0%, #121212 55%, #000 100%)',
          padding: '80px',
          color: '#ffffff',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            fontSize: 96,
            fontWeight: 800,
            letterSpacing: '-0.04em',
            lineHeight: 1,
          }}
        >
          hit<span style={{ color: '#d8b4fe' }}>lovers</span>
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 42,
            fontWeight: 500,
            lineHeight: 1.2,
            maxWidth: 900,
            color: '#e4e4e7',
          }}
        >
          Onde a música vira hit e o seu evento lota.
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 24,
            fontWeight: 400,
            color: '#a1a1aa',
          }}
        >
          Performance auditada por IA — pague apenas por views reais.
        </div>
      </div>
    ),
    size,
  )
}
