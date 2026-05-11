'use client'

import { LiFiWidget } from '@lifi/widget'

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[#050816] relative overflow-x-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-500/20 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-purple-500/10 blur-[140px] rounded-full" />
      </div>

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between px-4 sm:px-6 lg:px-10 py-6">
        <div className="text-white font-bold tracking-wide text-lg">
          SmartLeCo DEX
        </div>

        <div className="text-white/60 text-sm hidden sm:block">
          Cross-chain swap powered by LiFi
        </div>
      </div>

      {/* Center Content */}
      <div className="relative z-10 flex items-center justify-center px-4 py-10">

        {/* Swap Card */}
        <div className="w-full max-w-[520px] rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_0_80px_rgba(47,107,255,0.25)] overflow-hidden">

          {/* Top bar */}
          <div className="px-5 py-4 border-b border-white/10 flex items-center justify-between">
            <div className="text-white font-medium">Swap</div>
            <div className="text-xs text-white/50">v1</div>
          </div>

          {/* Widget */}
          <div className="p-3 sm:p-4">
            <LiFiWidget
              integrator="SmartLeCo"
              config={{
                appearance: 'dark',
                fromChain: 137,
                toChain: 137,
                toToken: '0xd1f48650351a97adca2f9eb3b9a7807be083468d',
                variant: 'default',
                theme: {
                  palette: {
                    primary: { main: '#2F6BFF' },
                    secondary: { main: '#FFD84D' },
                  },
                },
              }}
            />
          </div>
        </div>
      </div>
    </main>
  )
}