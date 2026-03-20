import type { ReactNode } from 'react'

interface CardProps {
  title: string
  description?: string
  icon?: ReactNode
  children?: ReactNode
}

export default function Card({ title, description, icon, children }: CardProps) {
  return (
    <div className="rounded-xl bg-surface-elevated border border-slate-700/50 p-6 flex flex-col gap-3">
      {icon && <div className="text-brand">{icon}</div>}
      <h3 className="text-base font-semibold text-white">{title}</h3>
      {description && <p className="text-sm text-slate-400 leading-relaxed">{description}</p>}
      {children}
    </div>
  )
}
