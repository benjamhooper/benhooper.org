import type { Metadata } from 'next'

const siteUrl = 'https://www.benhooper.org'
const siteName = 'Ben Hooper'
const defaultDescription =
  'Ben Hooper — cloud architect, engineering leader, and conference speaker focused on DevOps, platform engineering, and AI in production.'

export function buildMetadata(
  title: string,
  description: string = defaultDescription,
  path: string = '/',
): Metadata {
  const url = `${siteUrl}${path}`
  return {
    title: `${title} | Ben Hooper`,
    description,
    metadataBase: new URL(siteUrl),
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | Ben Hooper`,
      description,
      url,
      siteName,
      type: 'website',
      images: [
        {
          url: '/images/headshot.png',
          width: 800,
          height: 800,
          alt: 'Ben Hooper',
        },
      ],
    },
    twitter: {
      card: 'summary',
      title: `${title} | Ben Hooper`,
      description,
      creator: '@benjamhooper',
    },
  }
}
