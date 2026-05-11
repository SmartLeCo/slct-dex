'use client'

import { LiFiWidget } from '@lifi/widget'

export default function Home() {
  return (
    <main
      style={{
        minHeight: '100vh',
        background:
          'radial-gradient(circle at top, #0B1736 0%, #050816 70%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '40px',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '520px',
          borderRadius: '28px',
          overflow: 'hidden',
          border: '1px solid rgba(255,255,255,0.08)',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 0 60px rgba(47,107,255,0.25)',
        }}
      >
        <LiFiWidget
          integrator="SmartLeCo"
          config={{
            appearance: 'dark',

            fromChain: 137,
            toChain: 137,

            toToken: '0xd1f48650351a97adca2f9eb3b9a7807be083468d',

            variant: 'wide',

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
    </main>
  )
}