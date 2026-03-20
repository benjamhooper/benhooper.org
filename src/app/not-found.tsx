import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-32 text-center">
      <p className="text-brand font-semibold text-sm tracking-widest uppercase">404</p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
        Page not found
      </h1>
      <p className="mt-6 text-slate-400">
        Sorry, that page doesn&apos;t exist or has moved.
      </p>
      <div className="mt-10">
        <Link
          href="/"
          className="inline-flex items-center rounded-md bg-brand px-5 py-2.5 text-sm font-semibold text-slate-950 hover:bg-teal-300 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}
