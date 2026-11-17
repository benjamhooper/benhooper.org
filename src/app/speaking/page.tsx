import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { talks } from '@/content/talks'
import Button from '@/components/ui/Button'
import PageBand from '@/components/ui/PageBand'

export const metadata: Metadata = buildMetadata(
  'Speaking',
  'Conference talks and keynotes by Ben Hooper on cloud architecture, DevOps, platform engineering, and AI in production.',
  '/speaking/',
)

export default function SpeakingPage() {
  return (
    <>
      <PageBand title="Speaking" variant="speaking">
        <p>
          I speak at conferences, internal engineering summits, and leadership offsites on the
          topics I care most about. No fluff, just lessons learned shipping real systems.
        </p>
      </PageBand>

      <section className="shell py-16 md:py-24">
        <ul className="border-b-2 border-ink">
          {talks.map((talk) => (
            <li
              key={talk.title}
              className="grid gap-x-10 gap-y-2 border-t-2 border-ink py-7 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:items-baseline md:py-9"
            >
              <h2 className="text-2xl font-extrabold leading-tight md:text-4xl md:leading-[1.1]">
                {talk.title}
              </h2>
              <p className="font-semibold">{talk.focusAreas?.join(', ')}</p>
            </li>
          ))}
        </ul>
      </section>

      <div className="grid border-t-2 border-ink md:grid-cols-2">
        <section className="bg-ochre px-5 py-14 md:py-20 md:pl-[max(3rem,calc((100vw-82rem)/2+3rem))] md:pr-12">
          <h2 className="display text-4xl md:text-5xl">View Full Profile</h2>
          <p className="mt-4 max-w-[44ch] font-semibold">
            My speaker profile on Sessionize includes all current abstracts, past appearances, and
            references.
          </p>
          <div className="mt-8">
            <Button
              swatch="teal"
              href="https://sessionize.com/benjamhooper"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Sessionize Profile
            </Button>
          </div>
        </section>
        <section className="border-t-2 border-ink bg-salmon px-5 py-14 md:border-l-2 md:border-t-0 md:py-20 md:pl-12 md:pr-[max(3rem,calc((100vw-82rem)/2+3rem))]">
          <h2 className="display text-4xl md:text-5xl">Invite Me to Speak</h2>
          <p className="mt-4 max-w-[44ch] font-semibold">
            Organizing a conference, internal summit, or podcast? I&apos;d love to hear about it.
          </p>
          <div className="mt-8">
            <Button swatch="ochre" href="/contact/?subject=Speaking+Inquiry">
              Get in Touch
            </Button>
          </div>
        </section>
      </div>
    </>
  )
}
