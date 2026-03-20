import Link from 'next/link'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-brand text-slate-950 font-semibold hover:bg-teal-300 focus-visible:outline-brand',
  secondary:
    'border border-brand text-brand hover:bg-brand/10 focus-visible:outline-brand',
  ghost:
    'text-slate-300 hover:text-white hover:bg-white/10 focus-visible:outline-white',
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'

interface LinkButtonProps extends Omit<ComponentPropsWithoutRef<typeof Link>, 'href'> {
  href: string
  variant?: Variant
  children?: ReactNode
}

interface ButtonButtonProps extends ComponentPropsWithoutRef<'button'> {
  href?: undefined
  variant?: Variant
  children?: ReactNode
}

type ButtonProps = LinkButtonProps | ButtonButtonProps

export default function Button({ variant = 'primary', className = '', ...props }: ButtonProps) {
  const classes = `${base} ${variantClasses[variant]} ${className}`
  if (props.href !== undefined) {
    const { href, ...rest } = props as LinkButtonProps
    return <Link href={href} className={classes} {...rest} />
  }
  const { href: _href, ...rest } = props as ButtonButtonProps & { href?: undefined }
  return <button className={classes} {...rest} />
}
