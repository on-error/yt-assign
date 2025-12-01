import type { SelectHTMLAttributes } from 'react'
import './select.css'

type SelectProps = SelectHTMLAttributes<HTMLSelectElement>

export function Select(props: SelectProps) {
  return <select className="select" {...props} />
}


