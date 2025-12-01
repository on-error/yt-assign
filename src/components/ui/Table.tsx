import type { ReactNode } from 'react'
import './table.css'

interface TableProps {
  headers: ReactNode[]
  children: ReactNode
}

export function Table({ headers, children }: TableProps) {
  return (
    <div className="table-wrapper">
      <table className="table">
        <thead>
          <tr>
            {headers.map((h, idx) => (
              // eslint-disable-next-line react/no-array-index-key
              <th key={idx}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  )
}


