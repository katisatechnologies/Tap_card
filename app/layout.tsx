import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TapShare - Share Your Contact in One Tap | NFC Business Cards Sri Lanka',
  description: 'Modern NFC business cards for professionals and businesses in Sri Lanka. No apps needed. Just tap and share your contact instantly on any phone.',
  keywords: 'NFC business cards, digital business cards, contact sharing, Sri Lanka, modern visiting cards',
  openGraph: {
    title: 'TapShare - Share Your Contact in One Tap',
    description: 'Modern NFC business cards for professionals and businesses in Sri Lanka.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
