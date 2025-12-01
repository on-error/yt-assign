import type { ReactNode } from 'react'
import './card.css'

interface CardProps {
  title?: string
  children: ReactNode
  footer?: ReactNode
}

export function Card({ title, children, footer }: CardProps) {
  return (
    <section className="card">
      {title && <header className="card-header">{title}</header>}
      <div className="card-body">{children}</div>
      {footer && <footer className="card-footer">{footer}</footer>}
    </section>
  )
}


