import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import PersonSchema from '@/components/seo/PersonSchema'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ben Hooper | Cloud Architect & Engineering Leader',
  description:
    'Ben Hooper — cloud architect, engineering leader, and conference speaker focused on DevOps, platform engineering, and AI in production.',
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
    <html lang="en" className="dark">
      <head>
        <PersonSchema />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
