import Image from 'next/image'
import type { Metadata } from 'next'
import { focusAreas } from '@/content/focusAreas'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import SectionHeading from '@/components/ui/SectionHeading'
import Icon from '@/components/ui/Icon'

export const metadata: Metadata = {
  title: 'Ben Hooper | Cloud Architect & Engineering Leader',
  description:
    'Ben Hooper — cloud architect, engineering leader, and conference speaker focused on DevOps, platform engineering, and AI in production.',
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="flex flex-col sm:flex-row items-center gap-10">
          <div className="shrink-0">
            <Image
              src="/images/headshot.png"
              alt="Ben Hooper"
              width={160}
              height={160}
              priority
              className="rounded-full border-2 border-brand object-cover"
            />
          </div>
          <div className="text-center sm:text-left">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Ben Hooper
            </h1>
            <p className="mt-4 text-lg text-slate-300 max-w-xl">
              Kansas-based software consultant who loves writing code almost as much as diagnosing
              why an enterprise system stopped shipping. I work with organizations to untangle the
              technical and the human because one usually explains the other. Recovering monolith
              wrangler. Perpetual pipeline tinkerer. The real problem is rarely the one on the ticket.
            </p>
            <div className="mt-8 flex flex-wrap justify-center sm:justify-start gap-4">
              <Button href="/speaking/" variant="primary">
                Speaking Topics
              </Button>
              <Button href="/contact/?subject=Speaking+Inquiry" variant="secondary">
                Invite Me to Speak
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pb-24">
        <SectionHeading
          title="What I Talk About"
          subtitle="Practical expertise, not conference theater. Every talk is grounded in real-world experience building and shipping at scale."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {focusAreas.map((area) => (
            <Card
              key={area.title}
              title={area.title}
              description={area.description}
              icon={<Icon name={area.icon as Parameters<typeof Icon>[0]['name']} />}
            />
          ))}
        </div>
      </section>
    </>
  )
}
