import Image from 'next/image'
import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { socialLinks } from '@/content/social'
import SocialLink from '@/components/ui/SocialLink'

export const metadata: Metadata = buildMetadata(
  'About',
  'Learn more about Ben Hooper — cloud architect, engineering leader, and conference speaker.',
  '/about/',
)

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        {/* Avatar */}
        <div className="shrink-0 flex justify-center lg:justify-start">
          <Image
            src="/images/headshot.png"
            alt="Ben Hooper"
            width={240}
            height={240}
            className="rounded-2xl border border-slate-700 object-cover"
          />
        </div>

        {/* Bio */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            About Ben
          </h1>

          <div className="mt-6 prose prose-invert prose-slate max-w-none">
            <p>
              I&apos;m a cloud architect and engineering leader with over a decade of experience
              designing systems that scale and teams that thrive. I&apos;m the founder of{' '}
              <a
                href="https://www.stack-shift.net"
                target="_blank"
                rel="noopener noreferrer"
              >
                StackShift
              </a>
              , a consulting and IT company that partners with technology leaders and engineering
              teams on strategy, AI advisory, technical coaching, and hands-on development. My
              work spans greenfield cloud builds, legacy modernization programs, and the platform
              engineering layer that lives between them.
            </p>
            <p>
              I&apos;ve spent most of my career in the Microsoft ecosystem — Azure, .NET, and the
              broader enterprise stack — but I hold strong opinions about polyglot architectures
              and building for operational reality, not just architectural elegance.
            </p>
            <p>
              Outside the day job, I&apos;m an active speaker at developer and architecture
              conferences. I care deeply about making complex topics accessible, and I believe
              the best technical talks leave the audience with something they can use on Monday
              morning.
            </p>
            <p>
              When I&apos;m not thinking about distributed systems or CI/CD pipelines, you&apos;ll
              find me somewhere outdoors, probably with a bad map and a good attitude.
            </p>
          </div>

          <div className="mt-8 flex items-center gap-4">
            {socialLinks.map((link) => (
              <SocialLink key={link.platform} link={link} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
