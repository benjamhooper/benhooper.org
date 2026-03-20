import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { talks } from '@/content/talks'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import SectionHeading from '@/components/ui/SectionHeading'
import Icon from '@/components/ui/Icon'

export const metadata: Metadata = buildMetadata(
  'Speaking',
  'Conference talks and keynotes by Ben Hooper on cloud architecture, DevOps, platform engineering, and AI in production.',
  '/speaking/',
)

export default function SpeakingPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <SectionHeading
        title="Speaking"
        subtitle="I speak at conferences, internal engineering summits, and leadership offsites on the topics I care most about. No fluff — just lessons learned shipping real systems."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {talks.map((talk) => (
          <Card
            key={talk.title}
            title={talk.title}
            icon={<Icon name="mic" />}
          />
        ))}
      </div>

      <div className="mt-12 rounded-xl bg-surface-elevated border border-slate-700/50 p-8">
        <h2 className="text-xl font-semibold text-white">View Full Profile</h2>
        <p className="mt-2 text-slate-400">
          My speaker profile on Sessionize includes all current abstracts, past appearances, and references.
        </p>
        <div className="mt-6">
          <Button
            href="https://sessionize.com/benjamhooper"
            variant="secondary"
          >
            Open Sessionize Profile
          </Button>
        </div>
      </div>

      <div className="mt-10 rounded-xl border border-brand/30 bg-brand/5 p-8">
        <h2 className="text-xl font-semibold text-white">Invite Me to Speak</h2>
        <p className="mt-2 text-slate-400">
          Organizing a conference, internal summit, or podcast? I&apos;d love to hear about it.
        </p>
        <div className="mt-6">
          <Button href="/contact/?subject=Speaking+Inquiry" variant="primary">
            Get in Touch
          </Button>
        </div>
      </div>
    </div>
  )
}
