import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BlackMafia — Privacy. Security. Freedom.',
  description:
    'A safer digital you. Powerful cybersecurity tools for private data and conversations.',
  generator: 'v0.app',

  icons: {
    icon: [
      {
        // Dark browser theme → Light favicon
        url: '/images/blackmafia-favicon-light.png',
        media: '(prefers-color-scheme: dark)',
        type: 'image/png',
      },
      {
        // Light browser theme → Dark favicon
        url: '/images/blackmafia-favicon-dark.png',
        media: '(prefers-color-scheme: light)',
        type: 'image/png',
      },
    ],

    shortcut: [
      {
        // Default fallback
        url: '/images/blackmafia-favicon-light.png',
        type: 'image/png',
      },
    ],

    apple: '/images/blackmafia-favicon-light.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#02060b',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}

        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}