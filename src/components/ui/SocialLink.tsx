import type { CSSProperties } from 'react'
import type { SocialLink as SocialLinkType } from '@/types'

const swatches: Record<string, string> = {
  LinkedIn: 'var(--color-river)',
  GitHub: 'var(--color-teal)',
  Twitter: 'var(--color-salmon)',
}

interface SocialLinkProps {
  link: SocialLinkType
  className?: string
}

export default function SocialLink({ link, className = '' }: SocialLinkProps) {
  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={link.label}
      className={`key ${className}`}
      style={{ '--sw': swatches[link.platform] ?? 'var(--color-ochre)' } as CSSProperties}
    >
      {link.platform === 'Twitter' ? 'X (Twitter)' : link.platform}
    </a>
  )
}
