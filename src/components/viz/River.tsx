'use client'

import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import { forceCollide, forceSimulation, type Simulation, type SimulationNodeDatum } from 'd3-force'
import { curveCatmullRom, line } from 'd3-shape'

const BANDS = ['river', 'teal', 'salmon', 'ochre'] as const

interface Geo {
  w: number
  h: number
  jx: number
  jy: number
  gap: number
  r: number
  count: number
  pts: [number, number][]
}

interface Drop extends SimulationNodeDatum {
  x: number
  y: number
  vx: number
  vy: number
  off: number
  /** Push per tick. Varies per drop so a released pile strings out. */
  push: number
  past: boolean
}

/** Channel centreline through the jam point, in pixels of the hero. */
function makeGeo(w: number, h: number, jx: number, jy: number): Geo {
  const wide = w >= 900
  const gap = wide ? Math.min(170, Math.max(118, h * 0.17)) : 84
  const pts: [number, number][] = wide
    ? [
        [-0.05 * w, jy + 0.04 * h],
        [0.14 * w, jy + 0.02 * h],
        [0.31 * w, jy + 0.15 * h],
        [0.47 * w, jy + 0.09 * h],
        [jx, jy],
        [jx + 0.13 * w, jy - 0.1 * h],
        [0.87 * w, jy + 0.08 * h],
        [0.96 * w, jy + 0.3 * h],
        [1.06 * w, jy + 0.24 * h],
      ]
    : [
        [-30, jy - 36],
        [0.22 * w, jy + 26],
        [0.42 * w, jy + 18],
        [jx, jy],
        [0.86 * w, jy - 34],
        [w + 40, jy + 6],
      ]
  return { w, h, jx, jy, gap, r: wide ? 6.5 : 5, count: wide ? 64 : 30, pts }
}

const curve = line<[number, number]>().curve(curveCatmullRom.alpha(0.5))
const shifted = (g: Geo, dy: number) => curve(g.pts.map(([x, y]) => [x, y + dy] as [number, number])) ?? ''

interface RiverProps {
  /** Rendered inside the hero, above the river. Must contain an element with data-jam. */
  children: ReactNode
  className?: string
}

/**
 * The hero river. A d3-force simulation carries drops down the channel; they
 * pile up behind the jam until the visitor clears it.
 */
export default function River({ children, className = '' }: RiverProps) {
  const rootRef = useRef<HTMLElement>(null)
  const dotsRef = useRef<SVGGElement>(null)
  const jammedRef = useRef(true)
  const settleRef = useRef<() => void>(() => {})
  const [jammed, setJammed] = useState(true)
  const [geo, setGeo] = useState<Geo>(() => makeGeo(1440, 900, 920, 410))
  const [measured, setMeasured] = useState(false)

  // Fit the river to the hero, with the jam under its anchor element.
  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    const fit = () => {
      const box = root.getBoundingClientRect()
      const anchor = root.querySelector<HTMLElement>('[data-jam]')?.getBoundingClientRect()
      const jx = anchor ? anchor.left + anchor.width / 2 - box.left : box.width * 0.64
      const jy = anchor ? anchor.top + anchor.height / 2 - box.top : box.height * 0.46
      setGeo((prev) =>
        Math.abs(prev.w - box.width) < 1 &&
        Math.abs(prev.h - box.height) < 1 &&
        Math.abs(prev.jx - jx) < 1 &&
        Math.abs(prev.jy - jy) < 1
          ? prev
          : makeGeo(box.width, box.height, jx, jy),
      )
      setMeasured(true)
    }
    fit()
    const ro = new ResizeObserver(fit)
    ro.observe(root)
    const gap = root.querySelector<HTMLElement>('[data-jam]')?.parentElement
    if (gap) ro.observe(gap)
    document.fonts?.ready.then(fit)
    return () => ro.disconnect()
  }, [])

  // The flow itself.
  useEffect(() => {
    const dots = dotsRef.current
    const root = rootRef.current
    if (!dots || !root || !measured) return

    // Sample the centreline so the stream force can ask "where is the channel at x".
    // A detached path, because a live one can report its previous geometry here.
    const centre = document.createElementNS('http://www.w3.org/2000/svg', 'path')
    centre.setAttribute('d', shifted(geo, 0))
    const total = centre.getTotalLength()
    const STEPS = 240
    const xs: number[] = []
    const ys: number[] = []
    for (let i = 0; i <= STEPS; i++) {
      const p = centre.getPointAtLength((total * i) / STEPS)
      xs.push(i ? Math.max(p.x, xs[i - 1] + 0.01) : p.x)
      ys.push(p.y)
    }
    const centreY = (x: number) => {
      if (x <= xs[0]) return ys[0]
      if (x >= xs[STEPS]) return ys[STEPS]
      let lo = 0
      let hi = STEPS
      while (hi - lo > 1) {
        const mid = (lo + hi) >> 1
        if (xs[mid] <= x) lo = mid
        else hi = mid
      }
      const t = (x - xs[lo]) / (xs[hi] - xs[lo])
      return ys[lo] + t * (ys[hi] - ys[lo])
    }

    const { r, gap, jx, w } = geo
    const margin = gap / 2 - r - 3
    const spawn = (d: Drop, x: number) => {
      d.x = x
      d.off = (Math.random() * 2 - 1) * margin
      d.y = centreY(x) + d.off
      d.vx = 1.6
      d.push = 0.3 + Math.random() * 0.3
      d.vy = 0
      d.past = false
    }
    const drops: Drop[] = Array.from({ length: geo.count }, () => {
      const d = { x: 0, y: 0, vx: 0, vy: 0, off: 0, push: 0.42, past: false }
      spawn(d, -30 + Math.random() * (jx + 10))
      return d
    })

    const stream = () => {
      for (const d of drops) {
        d.vx += d.push
        d.vy += (centreY(d.x) + d.off - d.y) * 0.06
      }
    }
    const banks = () => {
      // The barrier leans 9 degrees about its foot, so the stop leans with it.
      const foot = geo.jy + gap / 2 + 8
      for (const d of drops) {
        const limit = jx + (foot - d.y) * 0.158 - r - 8
        if (!d.past) {
          if (jammedRef.current) {
            if (d.x >= limit) {
              d.x = limit
              if (d.vx > 0) d.vx = 0
            }
          } else if (d.x > jx + r) {
            d.past = true
          }
        }
        if (d.x > w + 30) spawn(d, -30 - Math.random() * 320)
        const c = centreY(d.x)
        if (d.y < c - margin) {
          d.y = c - margin
          if (d.vy < 0) d.vy = 0
        } else if (d.y > c + margin) {
          d.y = c + margin
          if (d.vy > 0) d.vy = 0
        }
      }
    }

    const circles = Array.from(dots.children) as SVGCircleElement[]
    const draw = () => {
      for (let i = 0; i < drops.length; i++) {
        const c = circles[i]
        if (!c) continue
        c.setAttribute('cx', drops[i].x.toFixed(1))
        c.setAttribute('cy', drops[i].y.toFixed(1))
      }
      dots.style.opacity = '1'
    }

    const sim: Simulation<Drop, undefined> = forceSimulation(drops)
      .alphaDecay(0)
      .velocityDecay(0.2)
      .force('stream', stream)
      .force('collide', forceCollide<Drop>(r + 1.5).strength(0.9).iterations(2))
      .force('banks', banks)
      .stop()

    const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const settle = (ticks: number) => {
      for (let i = 0; i < ticks; i++) sim.tick()
      draw()
    }
    settle(260)

    // With reduced motion the river is a still print that redraws on each change.
    settleRef.current = still
      ? () => {
          // Blocked: everything upstream, piled. Open: drops along the whole channel.
          const span = jammedRef.current ? jx : w
          for (const d of drops) {
            spawn(d, -20 + Math.random() * (span + 20))
            d.past = d.x > jx
          }
          settle(jammedRef.current ? 400 : 30)
        }
      : () => {}

    let io: IntersectionObserver | undefined
    if (!still) {
      sim.on('tick', draw)
      io = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) sim.restart()
        else sim.stop()
      })
      io.observe(root)
    }
    return () => {
      io?.disconnect()
      sim.stop()
      sim.on('tick', null)
    }
  }, [geo, measured])

  const bands = useMemo(
    () =>
      BANDS.map((_, i) => {
        const top = shifted(geo, -geo.gap / 2 + i * geo.gap)
        return { top, fill: `${top} L${geo.w + 80} ${geo.h + 20} L-80 ${geo.h + 20} Z` }
      }),
    [geo],
  )
  const flowLine = useMemo(() => shifted(geo, 0), [geo])

  const toggle = () => {
    jammedRef.current = !jammedRef.current
    setJammed(jammedRef.current)
    settleRef.current()
  }

  return (
    <section
      ref={rootRef}
      data-jammed={jammed}
      className={`group relative isolate overflow-hidden ${className}`}
    >
      <svg
        aria-hidden="true"
        viewBox={`0 0 ${geo.w} ${geo.h}`}
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 -z-10 h-full w-full"
        fill="none"
      >
        {bands.map((b, i) => (
          <path key={BANDS[i]} d={b.fill} fill={`var(--color-${BANDS[i]})`} />
        ))}
        <g stroke="var(--color-ink)" strokeWidth={2}>
          {bands.map((b, i) => (
            <path key={BANDS[i]} d={b.top} />
          ))}
          <path d={flowLine} strokeDasharray="2 10" strokeLinecap="round" />
        </g>
        <g ref={dotsRef} fill="var(--color-ink)" style={{ opacity: 0, transition: 'opacity 0.4s' }}>
          {Array.from({ length: geo.count }, (_, i) => (
            <circle key={i} r={geo.r} />
          ))}
        </g>
        <rect
          x={geo.jx - 6}
          y={geo.jy - geo.gap / 2 - 8}
          width={12}
          height={geo.gap + 16}
          fill="var(--color-ink)"
          style={{
            transformBox: 'fill-box',
            transformOrigin: '50% 100%',
            transform: jammed ? 'rotate(9deg)' : 'rotate(84deg)',
            transition: 'transform 0.9s var(--ease-out-expo)',
          }}
        />
      </svg>

      {children}

      <div
        className="pointer-events-none absolute z-10"
        style={{ left: geo.jx, top: geo.jy - geo.gap / 2 - 22 }}
      >
        <button
          type="button"
          onClick={toggle}
          aria-pressed={!jammed}
          className="pointer-events-auto absolute bottom-0 left-0 w-max -translate-x-[62%] cursor-pointer border-2 border-ink bg-ink px-4 py-3 text-left text-sm font-bold uppercase leading-tight tracking-wider text-ground transition-colors duration-200 hover:bg-ground hover:text-ink md:translate-x-4"
        >
          {jammed ? (
            <>
              Stopped shipping here.
              <br />
              <span className="underline">Clear the jam</span>
            </>
          ) : (
            <>
              Shipping again.
              <br />
              <span className="underline">Put the jam back</span>
            </>
          )}
        </button>
      </div>
      <p className="sr-only" role="status">
        {jammed ? 'The channel is blocked. Nothing is shipping.' : 'The channel is open. Shipping again.'}
      </p>
    </section>
  )
}
