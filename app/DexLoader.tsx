'use client'

import dynamic from 'next/dynamic'

const DexClient = dynamic(() => import('./DexClient'), { ssr: false })

export default function DexLoader() {
  return <DexClient />
}
