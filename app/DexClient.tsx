'use client'

import { LiFiWidget } from '@lifi/widget'
import { EthereumProvider } from '@lifi/widget-provider-ethereum'
import { TronProvider } from '@lifi/widget-provider-tron'
import { StellarProvider } from '@lifi/widget-provider-stellar'
import { SolanaProvider } from '@lifi/widget-provider-solana'
import { BitcoinProvider } from '@lifi/widget-provider-bitcoin'
import { SuiProvider } from '@lifi/widget-provider-sui'

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

            <a
            href="https://smartleco.xyz/referral/"
            target="_blank"
            rel="noopener noreferrer"
            title="Open SmartLeCo referral system"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              padding: '10px 14px',
              border: '1px solid rgba(90,140,255,0.55)',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, rgba(15,56,225,0.28), rgba(31,144,255,0.16))',
              boxShadow: '0 0 14px rgba(31,144,255,0.18)',
              color: '#FFFFFF',
              fontSize: '12px',
              fontWeight: 700,
              textDecoration: 'none',
              whiteSpace: 'nowrap',
              transition: 'all 0.18s ease',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(15,56,225,0.45), rgba(31,144,255,0.28))'
              e.currentTarget.style.borderColor = 'rgba(130,180,255,0.95)'
              e.currentTarget.style.boxShadow = '0 0 22px rgba(31,144,255,0.32)'
              e.currentTarget.style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(15,56,225,0.28), rgba(31,144,255,0.16))'
              e.currentTarget.style.borderColor = 'rgba(90,140,255,0.55)'
              e.currentTarget.style.boxShadow = '0 0 14px rgba(31,144,255,0.18)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            <span style={{ fontSize: '14px', lineHeight: 1 }}>👥</span>
            <span>Earn with Referrals &gt;</span>
          </a>
          </div>

          {/* LiFi Widget */}
          <LiFiWidget
            integrator="SmartLeCo-DEX"
            config={{
              providers: [EthereumProvider({
                walletConnect: true,
                coinbase: {
                  appName: 'SmartLeCo DEX',
                  appLogoUrl: 'https://smartleco.xyz/wp-content/uploads/2026/04/logo_SLC-100.png',
                },
                baseAccount: {
                  appName: 'SmartLeCo DEX',
                  appLogoUrl: 'https://smartleco.xyz/wp-content/uploads/2026/04/logo_SLC-100.png',
                },
                metaMask: false,
              }), TronProvider(), StellarProvider(), SolanaProvider(), BitcoinProvider(), SuiProvider()],
              feeConfig: { fee: 0.005 },
              appearance: 'dark',
              fromChain: 137,
              toChain: 137,
              toToken:
                '0xd1f48650351a97adca2f9eb3b9a7807be083468d',
              variant: 'compact',
              theme: {
              colorSchemes: {
                dark: {
                  palette: {
                    primary: { main: '#0F38E1' },
                    secondary: { main: '#FFD84D' },
                  },
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