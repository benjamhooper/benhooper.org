'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { label: 'Speaking', href: '/speaking/' },
  { label: 'About', href: '/about/' },
  { label: 'Contact', href: '/contact/' },
]

export default function Header() {
  const pathname = usePathname()
  const isCurrent = (href: string) => pathname === href || pathname === href.slice(0, -1)

  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="shell flex h-[4.5rem] items-center justify-between gap-4">
        {pathname === '/' ? (
          <span />
        ) : (
          <Link
            href="/"
            className="box display whitespace-nowrap px-2.5 py-2 text-base no-underline sm:px-3 sm:text-xl hover:bg-ink hover:text-ground"
          >
            Ben Hooper
          </Link>
        )}

        <nav aria-label="Main navigation" className="box flex">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isCurrent(link.href) ? 'page' : undefined}
              className={`px-2 py-2 text-xs font-bold uppercase tracking-wide no-underline sm:px-4 sm:text-sm sm:tracking-wider ${
                i > 0 ? 'border-l-2 border-ink' : ''
              } ${
                isCurrent(link.href)
                  ? 'bg-ink text-ground'
                  : 'hover:bg-ochre'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
