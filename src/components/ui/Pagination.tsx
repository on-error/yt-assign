import './pagination.css'

interface PaginationProps {
  page: number
  pageSize: number
  total: number
  onChange: (page: number) => void
}

export function Pagination({ page, pageSize, total, onChange }: PaginationProps) {
  const totalPages = Math.max(1, Math.ceil(total / pageSize))

  const canPrev = page > 1
  const canNext = page < totalPages

  const goTo = (next: number) => {
    if (next < 1 || next > totalPages) return
    onChange(next)
  }

  return (
    <div className="pagination">
      <button disabled={!canPrev} onClick={() => goTo(page - 1)}>
        Prev
      </button>
      <span>
        Page {page} of {totalPages}
      </span>
      <button disabled={!canNext} onClick={() => goTo(page + 1)}>
        Next
      </button>
    </div>
  )
}


