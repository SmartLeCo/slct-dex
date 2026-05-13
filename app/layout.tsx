import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SmartLeCo DEX',
  description: 'Cross-chain DEX powered by SmartLeCo',
  icons: {
    icon: 'https://smartleco.xyz/wp-content/uploads/2026/04/logo_SLC-100.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}