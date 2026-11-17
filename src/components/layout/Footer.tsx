import Link from 'next/link'
import { socialLinks } from '@/content/social'

export default function Footer() {
  return (
    <footer className="on-ink bg-ink text-ground">
      <div className="shell flex flex-col gap-8 py-12 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="display text-4xl sm:text-5xl">Ben Hooper</p>
          <p className="mt-3 text-base">&copy; {new Date().getFullYear()} Ben Hooper. Kansas.</p>
        </div>
        <ul className="flex flex-wrap gap-x-6 gap-y-3 text-base font-bold">
          <li>
            <Link
              href="https://www.stack-shift.net"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:bg-ground hover:text-ink"
            >
              StackShift
            </Link>
          </li>
          <li>
            <Link
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:bg-ground hover:text-ink"
            >
              Resume
            </Link>
          </li>
          {socialLinks.map((link) => (
            <li key={link.platform}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="underline hover:bg-ground hover:text-ink"
              >
                {link.platform}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
