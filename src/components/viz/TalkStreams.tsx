'use client'

import { useState } from 'react'
import { area, curveBumpX } from 'd3-shape'
import { focusAreas } from '@/content/focusAreas'
import { talks } from '@/content/talks'

const SWATCHES = ['river', 'teal', 'salmon', 'ochre', 'ink'] as const
const HEIGHT = 460
const WIDTH = 100
const THICK = 22

const leftY = (i: number) => (HEIGHT / focusAreas.length) * (i + 0.5)
const rightY = (i: number) => (HEIGHT / talks.length) * (i + 0.5)

const ribbon = area<[number, number]>()
  .x((d) => d[0])
  .y0((d) => d[1] - THICK / 2)
  .y1((d) => d[1] + THICK / 2)
  .curve(curveBumpX)

const links = focusAreas.flatMap((fa, i) =>
  talks.flatMap((talk, j) =>
    talk.focusAreas?.includes(fa.title)
      ? [{ from: i, to: j, d: ribbon([[0, leftY(i)], [WIDTH, rightY(j)]]) ?? '' }]
      : [],
  ),
)

/** Focus areas flowing into the talks they feed. The links come from each talk's focusAreas in content/talks.ts. */
export default function TalkStreams() {
  const [active, setActive] = useState(0)
  const fed = new Set(links.filter((l) => l.from === active).map((l) => l.to))
  const color = (i: number) => `var(--color-${SWATCHES[i % SWATCHES.length]})`

  return (
    <>
      {/* Wide screens: the stream diagram. */}
      <div className="hidden md:block">
        <div
          className="grid grid-cols-[minmax(0,5fr)_minmax(0,3fr)_minmax(0,7fr)] border-y-2 border-ink"
          style={{ height: HEIGHT }}
        >
          <ul className="flex flex-col">
            {focusAreas.map((fa, i) => (
              <li key={fa.title} className={`flex flex-1 ${i ? 'border-t-2 border-ink' : ''}`}>
                <button
                  type="button"
                  aria-pressed={active === i}
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className="flex w-full cursor-pointer items-center gap-3 px-3 text-left text-lg font-bold leading-tight -outline-offset-4"
                  style={{
                    background: active === i ? color(i) : 'transparent',
                    color: active === i && i === 4 ? 'var(--color-ground)' : 'var(--color-ink)',
                  }}
                >
                  <span
                    aria-hidden="true"
                    className="h-4 w-9 flex-none border-2"
                    style={{
                      background: active === i ? 'var(--color-ground)' : color(i),
                      borderColor: active === i && i === 4 ? 'var(--color-ground)' : 'var(--color-ink)',
                    }}
                  />
                  {fa.title}
                </button>
              </li>
            ))}
          </ul>

          <svg
            aria-hidden="true"
            viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
            preserveAspectRatio="none"
            className="h-full w-full border-x-2 border-ink"
          >
            {[...links]
              .sort((a, b) => Number(a.from === active) - Number(b.from === active))
              .map((l) => (
                <path
                  key={`${l.from}-${l.to}`}
                  d={l.d}
                  fill={l.from === active ? color(l.from) : 'var(--color-ground)'}
                  stroke="var(--color-ink)"
                  strokeWidth={2}
                  vectorEffect="non-scaling-stroke"
                />
              ))}
          </svg>

          <ul className="flex flex-col">
            {talks.map((talk, j) => (
              <li
                key={talk.title}
                className={`flex flex-1 items-center px-5 text-xl leading-snug ${
                  j ? 'border-t-2 border-ink' : ''
                } ${fed.has(j) ? 'font-extrabold' : 'font-medium'}`}
                style={{
                  background: fed.has(j) ? color(active) : 'transparent',
                  color: fed.has(j) && active === 4 ? 'var(--color-ground)' : 'var(--color-ink)',
                }}
              >
                {talk.title}
              </li>
            ))}
          </ul>
        </div>
        <p role="status" className="mt-6 max-w-[62ch] text-xl font-semibold">
          {focusAreas[active].description}
        </p>
      </div>

      {/* Narrow screens: the same content as a plain list. */}
      <ul className="border-t-2 border-ink md:hidden">
        {focusAreas.map((fa, i) => (
          <li key={fa.title} className="border-b-2 border-ink py-5">
            <h3 className="flex items-center gap-3 text-xl font-extrabold leading-tight">
              <span
                aria-hidden="true"
                className="h-4 w-9 flex-none border-2 border-ink"
                style={{ background: color(i) }}
              />
              {fa.title}
            </h3>
            <p className="mt-2">{fa.description}</p>
            <p className="mt-2 font-bold">
              {talks
                .filter((t) => t.focusAreas?.includes(fa.title))
                .map((t) => t.title)
                .join(' / ')}
            </p>
          </li>
        ))}
      </ul>
    </>
  )
}
