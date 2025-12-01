import type { ButtonHTMLAttributes, ReactNode } from 'react'
import './button.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'normal' | 'small'
  children: ReactNode
}

export function Button({ variant = 'primary', size = 'normal', children, className = '', ...rest }: ButtonProps) {
  return (
    <button className={`btn btn-${variant} btn-${size} ${className}`.trim()} {...rest}>
      {children}
    </button>
  )
}


