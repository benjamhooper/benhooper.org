import type { ReactNode } from 'react'

const ORDERS = {
  speaking: ['teal', 'ochre', 'salmon', 'river'],
  about: ['ochre', 'river', 'teal', 'salmon'],
  contact: ['river', 'salmon', 'ochre', 'teal'],
  lost: ['salmon', 'teal', 'river', 'ochre'],
} as const

// One meander, repeated four times down the band.
const BANK = 'C200 -50 330 150 560 90 S860 -30 1010 110 1280 190 1500 70'

interface PageBandProps {
  title: string
  variant: keyof typeof ORDERS
  children?: ReactNode
}

/** Top band of an inner page: survey ribbons with the page title boxed on them. */
export default function PageBand({ title, variant, children }: PageBandProps) {
  const order = ORDERS[variant]
  return (
    <section className="relative isolate overflow-hidden border-b-2 border-ink">
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 400"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 -z-10 h-full w-full"
      >
        {order.map((c, i) => (
          <path
            key={c}
            d={`M-60 70 ${BANK} L1500 900 L-60 900Z`}
            transform={`translate(0 ${i * 95})`}
            fill={`var(--color-${c})`}
            stroke="var(--color-ink)"
            strokeWidth={2}
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </svg>
      <div className="shell pb-14 pt-28 sm:pb-20 sm:pt-36">
        <div className="box inline-block max-w-3xl px-5 py-5 sm:px-8 sm:py-7">
          <h1 className="display text-5xl sm:text-7xl">{title}</h1>
          {children && <div className="mt-4 max-w-[60ch] font-semibold">{children}</div>}
        </div>
      </div>
    </section>
  )
}
