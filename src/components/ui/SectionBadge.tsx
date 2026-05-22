import type { ReactNode } from 'react'

type SectionBadgeVariant =
  | 'orange'
  | 'yellow'
  | 'green'
  | 'blue'
  | 'purple'
  | 'pink'
  | 'dark'
  | 'dark-orange'
  | 'dark-yellow'
  | 'dark-green'
  | 'dark-blue'
  | 'dark-purple'
  | 'dark-pink'

interface SectionBadgeProps {
  children: ReactNode
  className?: string
  variant?: SectionBadgeVariant
}

export function SectionBadge({
  children,
  className = '',
  variant = 'orange',
}: SectionBadgeProps) {
  const variantStyles: Record<SectionBadgeVariant, string> = {
    orange: 'bg-brand-orange/10 text-brand-orange border-brand-orange/20',
    yellow: 'bg-brand-yellow/10 text-brand-yellow border-brand-yellow/20',
    green: 'bg-brand-green/10 text-brand-green border-brand-green/20',
    blue: 'bg-brand-blue/10 text-brand-blue border-brand-blue/20',
    purple: 'bg-brand-purple/10 text-brand-purple border-brand-purple/20',
    pink: 'bg-brand-pink/10 text-brand-pink border-brand-pink/20',
    dark: 'bg-brand-black text-brand-orange border-brand-black/10',
    'dark-orange': 'bg-brand-black text-brand-orange border-brand-black/10',
    'dark-yellow': 'bg-brand-black text-brand-yellow border-brand-black/10',
    'dark-green': 'bg-brand-black text-brand-green border-brand-black/10',
    'dark-blue': 'bg-brand-black text-brand-blue border-brand-black/10',
    'dark-purple': 'bg-brand-black text-brand-purple border-brand-black/10',
    'dark-pink': 'bg-brand-black text-brand-pink border-brand-black/10',
  }

  return (
    <span
      className={`inline-flex px-4 py-1.5 rounded-full border text-sm font-bold tracking-widest uppercase items-center justify-center ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  )
}
