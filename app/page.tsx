'use client'

import { LiFiWidget } from '@lifi/widget'

export default function Home() {
  return (
    <main
      style={{
        minHeight: '100vh',
        width: '100%',
        padding: '20px',
        boxSizing: 'border-box',
        background:
          'radial-gradient(circle at top, #0B1736 0%, #050816 70%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* Outer glow wrapper */}
      <div
        style={{
          width: '100%',
          maxWidth: '460px',
          borderRadius: '24px',
          padding: '1px',
          background:
            'linear-gradient(135deg, rgba(47,107,255,0.5), rgba(255,255,255,0.05))',
          boxShadow: '0 0 70px rgba(47,107,255,0.25)',
        }}
      >
        {/* Inner glass card */}
        <div
          style={{
            borderRadius: '24px',
            overflow: 'hidden',
            background: 'rgba(10, 14, 30, 0.75)',
            backdropFilter: 'blur(20px)',
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: '14px 16px',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              color: 'white',
              fontSize: '14px',
              fontWeight: 500,
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <img
                src="https://smartleco.xyz/wp-content/uploads/2026/04/logo_SLC-100.png"
                alt="SLCT"
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '999px',
                }}
              />

              <span>SmartLeCo DEX</span>
            </div>

            <span
              style={{
                opacity: 0.5,
                fontSize: '12px',
              }}
            >
              Swap
            </span>
          </div>

          {/* LiFi Widget */}
          <LiFiWidget
            integrator="SmartLeCo"
            config={{
              appearance: 'dark',
              fromChain: 137,
              toChain: 137,
              toToken:
                '0xd1f48650351a97adca2f9eb3b9a7807be083468d',
              variant: 'compact',
              theme: {
                palette: {
                  primary: {
                    main: '#2F6BFF',
                  },
                  secondary: {
                    main: '#FFD84D',
                  },
                },
              },
            }}
          />
        </div>
      </div>
    </main>
  )
}