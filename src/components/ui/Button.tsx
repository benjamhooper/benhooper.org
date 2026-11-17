import Link from 'next/link'
import type { ComponentPropsWithoutRef, CSSProperties, ReactNode } from 'react'

export type Swatch = 'river' | 'teal' | 'salmon' | 'ochre'

interface KeyProps extends Omit<ComponentPropsWithoutRef<typeof Link>, 'href'> {
  href: string
  swatch?: Swatch
  row?: boolean
  children?: ReactNode
}

/** A legend key: the site's one action control. */
export default function Button({ swatch = 'river', row = false, className = '', href, ...rest }: KeyProps) {
  return (
    <Link
      href={href}
      className={`key ${row ? 'key-row' : ''} ${className}`}
      style={{ '--sw': `var(--color-${swatch})` } as CSSProperties}
      {...rest}
    />
  )
}
