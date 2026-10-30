import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SmartLeCo DEX',
  description: 'Cross-chain DEX powered by SmartLeCo',
  icons: {
    icon: '/brand/slct-logo.png',
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