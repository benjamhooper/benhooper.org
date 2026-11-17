import Image from 'next/image'
import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { socialLinks } from '@/content/social'
import SocialLink from '@/components/ui/SocialLink'
import PageBand from '@/components/ui/PageBand'

export const metadata: Metadata = buildMetadata(
  'About',
  'Learn more about Ben Hooper: cloud architect, engineering leader, and conference speaker.',
  '/about/',
)

export default function AboutPage() {
  return (
    <>
      <PageBand title="About Ben" variant="about" />

      <section className="shell grid gap-10 py-16 md:grid-cols-[minmax(0,18rem)_minmax(0,1fr)] md:gap-16 md:py-24">
        <div>
          <Image
            src="/images/headshot.png"
            alt="Ben Hooper"
            width={288}
            height={288}
            priority
            className="w-full max-w-[18rem] border-2 border-ink bg-river object-cover"
          />
        </div>

        <div>
          <div className="max-w-[66ch] space-y-6 text-xl leading-relaxed">
            <p>
              I&apos;m a cloud architect and engineering leader with over a decade of experience
              designing systems that scale and teams that thrive. I&apos;m the founder of{' '}
              <a
                href="https://www.stack-shift.net"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                StackShift
              </a>
              , a consulting and IT company that partners with technology leaders and engineering
              teams on strategy, AI advisory, technical coaching, and hands-on development. My work
              spans greenfield cloud builds, legacy modernization programs, and the platform
              engineering layer that lives between them.
            </p>
            <p>
              I&apos;ve spent most of my career in the Microsoft ecosystem (Azure, .NET, and the
              broader enterprise stack) but I hold strong opinions about polyglot architectures and
              building for operational reality, not just architectural elegance.
            </p>
            <p>
              Outside the day job, I&apos;m an active speaker at developer and architecture
              conferences. I care deeply about making complex topics accessible, and I believe the
              best technical talks leave the audience with something they can use on Monday morning.
            </p>
            <p>
              When I&apos;m not thinking about distributed systems or CI/CD pipelines, you&apos;ll
              find me somewhere outdoors, probably with a bad map and a good attitude.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {socialLinks.map((link) => (
              <SocialLink key={link.platform} link={link} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
