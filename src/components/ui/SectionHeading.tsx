interface SectionHeadingProps {
  title: string
  subtitle?: string
  centered?: boolean
}

export default function SectionHeading({ title, subtitle, centered = false }: SectionHeadingProps) {
  return (
    <div className={centered ? 'text-center' : ''}>
      <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">{title}</h2>
      {subtitle && (
        <p className="mt-3 text-base text-slate-400 max-w-2xl">{subtitle}</p>
      )}
    </div>
  )
}
