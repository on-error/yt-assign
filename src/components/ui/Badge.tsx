import type { ReactNode } from 'react'
import './badge.css'

interface BadgeProps {
  tone?: 'success' | 'danger' | 'neutral'
  children: ReactNode
}

export function Badge({ tone = 'neutral', children }: BadgeProps) {
  return <span className={`badge badge-${tone}`}>{children}</span>
}


