import Link from 'next/link'
import { socialLinks } from '@/content/social'
import SocialLink from '@/components/ui/SocialLink'

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <span className="text-sm text-slate-500">
              &copy; {new Date().getFullYear()} Ben Hooper
            </span>
            <Link
              href="https://www.stack-shift.net"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-400 hover:text-brand transition-colors"
            >
              StackShift
            </Link>
            <Link
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-400 hover:text-brand transition-colors"
            >
              Resume
            </Link>
          </div>
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <SocialLink key={link.platform} link={link} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
