'use client'

import { socialLinks } from '@/content/social'
import SocialLink from '@/components/ui/SocialLink'

const EMAIL = 'bhooper11231@gmail.com'

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Get in Touch
      </h1>
      <p className="mt-4 text-slate-400 max-w-xl">
        Whether you&apos;re looking for a conference speaker, exploring consulting options, or just
        want to start a conversation — I&apos;m happy to hear from you. Reach out directly at{' '}
        <a href={`mailto:${EMAIL}`} className="text-brand hover:underline">
          {EMAIL}
        </a>{' '}
        or find me on social media.
      </p>
      <div className="mt-6 flex items-center gap-4">
        {socialLinks.map((link) => (
          <SocialLink key={link.platform} link={link} />
        ))}
      </div>
    </div>
  )
}
