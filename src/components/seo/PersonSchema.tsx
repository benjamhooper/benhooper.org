export default function PersonSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Ben Hooper',
    url: 'https://www.benhooper.org',
    image: 'https://www.benhooper.org/images/headshot.png',
    jobTitle: 'Cloud Architect & Engineering Leader',
    sameAs: [
      'https://www.linkedin.com/in/benjamhooper',
      'https://github.com/benjamhooper',
      'https://twitter.com/benjamhooper',
    ],
    knowsAbout: [
      'Cloud Architecture',
      'DevOps',
      'Platform Engineering',
      'Engineering Leadership',
      'AI in Production',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
