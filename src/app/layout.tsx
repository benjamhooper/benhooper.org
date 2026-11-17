import type { Metadata } from 'next'
import { Archivo } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import PersonSchema from '@/components/seo/PersonSchema'

const archivo = Archivo({
  subsets: ['latin'],
  axes: ['wdth'],
  variable: '--font-archivo',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ben Hooper | Cloud Architect & Engineering Leader',
  description:
    'Ben Hooper: cloud architect, engineering leader, and conference speaker focused on DevOps, platform engineering, and AI in production.',
  metadataBase: new URL('https://www.benhooper.org'),
  openGraph: {
    siteName: 'Ben Hooper',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    creator: '@benjamhooper',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={archivo.variable}>
      <head>
        <PersonSchema />
      </head>
      <body className="flex min-h-svh flex-col font-sans antialiased">
        <div className="relative flex-1">
          <Header />
          <main>{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  )
}
