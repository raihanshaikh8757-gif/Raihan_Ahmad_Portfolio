import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Raihan Ahmad — Digital Marketer & Vibe Coder';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'linear-gradient(135deg, #1E1E1E 0%, #2a2a2a 55%, #1E1E1E 100%)',
          padding: '56px 64px',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: -80,
            right: -80,
            width: 320,
            height: 320,
            borderRadius: '50%',
            background: '#FDB515',
            opacity: 0.18,
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -60,
            left: -60,
            width: 240,
            height: 240,
            borderRadius: '50%',
            background: '#FDB515',
            opacity: 0.12,
          }}
        />

        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background: '#FDB515',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 32,
              fontWeight: 900,
              color: '#1E1E1E',
            }}
          >
            R
          </div>
          <div style={{ fontSize: 22, fontWeight: 800, color: '#FDB515', letterSpacing: 4 }}>
            PORTFOLIO
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ fontSize: 72, fontWeight: 900, color: '#FFFFFF', lineHeight: 0.95, letterSpacing: -2 }}>
            RAIHAN AHMAD
          </div>
          <div style={{ fontSize: 30, fontWeight: 700, color: '#FDB515' }}>
            Digital Marketer & Vibe Coder
          </div>
          <div style={{ fontSize: 22, color: 'rgba(255,255,255,0.75)' }}>
            Create • Connect • Convert
          </div>
        </div>

        <div style={{ fontSize: 18, color: 'rgba(255,255,255,0.45)' }}>raihan-ahmad-portfolio.vercel.app</div>
      </div>
    ),
    { ...size }
  );
}
