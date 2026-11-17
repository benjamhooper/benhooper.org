import type { Metadata } from 'next'
import Button from '@/components/ui/Button'
import River from '@/components/viz/River'
import TalkStreams from '@/components/viz/TalkStreams'

export const metadata: Metadata = {
  title: 'Ben Hooper | Cloud Architect & Engineering Leader',
  description:
    'Ben Hooper: cloud architect, engineering leader, and conference speaker focused on DevOps, platform engineering, and AI in production.',
}

const services = [
  {
    title: 'Infrastructure & Systems',
    description:
      'Cloud and on-premises infrastructure management across AWS, Azure, and GCP: monitoring, reliability, security hardening, and incident response.',
  },
  {
    title: 'AI Advisory',
    description:
      'Practical guidance for integrating AI into your products and workflows. Architecture for LLM-powered systems, tool selection, and team enablement.',
  },
  {
    title: 'Technical Coaching',
    description:
      'One-on-one and team coaching for engineers and managers covering architecture, code quality, engineering leadership, and career growth.',
  },
]

export default function Home() {
  return (
    <>
      {/* Hero: the survey sheet */}
      <River className="border-b-2 border-ink md:min-h-[clamp(50rem,100svh,60rem)]">
        <div className="shell flex flex-col pb-8 pt-24 md:min-h-[clamp(50rem,100svh,60rem)] md:pb-12">
          <div className="box max-w-[39rem] px-5 py-6 sm:px-8 sm:py-7">
            <h1 className="display text-[clamp(4rem,9vw,6rem)]">
              Ben
              <br />
              Hooper
            </h1>
            <p className="mt-4 max-w-[32ch] text-xl font-semibold leading-snug sm:text-2xl">
              Software consultant. I find out why an enterprise system stopped shipping, then get
              it moving again.
            </p>
          </div>

          {/* The river is seen through this gap. data-jam marks where it is blocked. */}
          <div className="relative h-[19rem] md:h-auto md:flex-1">
            <span
              data-jam
              className="absolute left-[62%] top-[58%] md:left-[66%] md:top-[calc(50%-13rem)]"
            />
          </div>

          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <nav aria-label="Where to go next" className="box w-full max-w-[29rem] px-5 pb-2 pt-5">
              <div className="flex items-baseline justify-between gap-4 pb-3 text-sm font-bold uppercase tracking-widest">
                <h2>Legend</h2>
                {/* River sets data-jammed on the hero; the legend states it in words. */}
                <p>
                  <span className="group-data-[jammed=false]:hidden">Channel blocked</span>
                  <span className="group-data-[jammed=true]:hidden">Channel open</span>
                </p>
              </div>
              <Button
                row
                swatch="salmon"
                href="https://www.stack-shift.net"
                target="_blank"
                rel="noopener noreferrer"
              >
                StackShift
              </Button>
              <Button row swatch="teal" href="/speaking/">
                Speaking Topics
              </Button>
              <Button row swatch="river" href="/contact/?subject=Speaking+Inquiry">
                Invite Me to Speak
              </Button>
            </nav>
            <p className="border-2 border-ink bg-ochre px-5 py-4 text-lg font-bold leading-snug md:max-w-[21rem]">
              The real problem is rarely the one on the ticket.
            </p>
          </div>
        </div>
      </River>

      {/* Who */}
      <section className="shell py-20 md:py-28">
        <p className="max-w-[58ch] text-2xl font-medium leading-normal md:text-[1.75rem]">
          Kansas-based software consultant who loves writing code almost as much as diagnosing why
          an enterprise system stopped shipping. I run{' '}
          <a
            href="https://www.stack-shift.net"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            StackShift
          </a>
          , a consulting and IT company helping organizations untangle the technical and the human,
          because one usually explains the other. Recovering monolith wrangler. Perpetual pipeline
          tinkerer.
        </p>
      </section>

      {/* Working with Me */}
      <section className="border-y-2 border-ink bg-teal">
        <div className="shell py-20 md:py-24">
          <h2 className="display text-5xl md:text-6xl">Working with Me</h2>
          <p className="mt-4 max-w-[60ch] text-xl font-semibold">
            Through StackShift, I offer consulting and advisory services for technology leaders and
            engineering teams.
          </p>
          <dl className="mt-12 border-b-2 border-ink">
            {services.map((s) => (
              <div
                key={s.title}
                className="grid gap-x-10 gap-y-2 border-t-2 border-ink py-6 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:py-8"
              >
                <dt className="text-2xl font-extrabold leading-tight md:text-3xl">{s.title}</dt>
                <dd className="max-w-[60ch] font-medium">{s.description}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-10">
            <Button
              swatch="salmon"
              href="https://www.stack-shift.net/services"
              target="_blank"
              rel="noopener noreferrer"
            >
              All Services at StackShift
            </Button>
          </div>
        </div>
      </section>

      {/* What I Talk About */}
      <section className="shell py-20 md:py-28">
        <h2 className="display text-5xl md:text-6xl">What I Talk About</h2>
        <p className="mb-12 mt-4 max-w-[60ch] text-xl font-semibold">
          Practical expertise, not conference theater. Every talk is grounded in real-world
          experience building and shipping at scale.
        </p>
        <TalkStreams />
      </section>

      {/* Close */}
      <section className="border-t-2 border-ink bg-salmon">
        <div className="shell flex flex-col gap-8 py-16 md:flex-row md:items-center md:justify-between md:py-20">
          <div>
            <h2 className="display text-5xl md:text-6xl">Invite Me to Speak</h2>
            <p className="mt-4 max-w-[48ch] text-xl font-semibold">
              Organizing a conference, internal summit, or podcast? I&apos;d love to hear about it.
            </p>
          </div>
          <Button swatch="ochre" href="/contact/?subject=Speaking+Inquiry" className="flex-none">
            Get in Touch
          </Button>
        </div>
      </section>
    </>
  )
}
