import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { socialLinks } from '@/content/social'
import SocialLink from '@/components/ui/SocialLink'
import PageBand from '@/components/ui/PageBand'

const EMAIL = 'me@benhooper.org'

export const metadata: Metadata = buildMetadata(
  'Contact',
  'Get in touch with Ben Hooper about speaking, consulting, or just to start a conversation.',
  '/contact/',
)

export default function ContactPage() {
  return (
    <>
      <PageBand title="Get in Touch" variant="contact" />

      <section className="shell py-16 md:py-24">
        <p className="max-w-[60ch] text-xl">
          Whether you&apos;re looking for a conference speaker, exploring consulting options, or
          just want to start a conversation, I&apos;m happy to hear from you. Reach out directly by
          email or find me on social media.
        </p>
        <p className="mt-10">
          <a
            href={`mailto:${EMAIL}`}
            className="link text-[clamp(1.75rem,6.5vw,5rem)] font-extrabold leading-tight [font-stretch:75%] [overflow-wrap:anywhere]"
          >
            {EMAIL}
          </a>
        </p>
        <div className="mt-12 flex flex-wrap gap-3">
          {socialLinks.map((link) => (
            <SocialLink key={link.platform} link={link} />
          ))}
        </div>
      </section>
    </>
  )
}
