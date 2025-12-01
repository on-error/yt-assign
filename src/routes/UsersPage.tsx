import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useUsersStore } from '../store/usersStore'
import type { User } from '../data/users'
import { Card } from '../components/ui/Card'
import { Input } from '../components/ui/Input'
import { Select } from '../components/ui/Select'
import { Table } from '../components/ui/Table'
import { Pagination } from '../components/ui/Pagination'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'

function getInitials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0]?.toUpperCase())
    .join('')
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

function sortUsers(users: User[], sortField: 'name' | 'createdAt', direction: 'asc' | 'desc') {
  const sorted = [...users].sort((a, b) => {
    if (sortField === 'name') {
      return a.name.localeCompare(b.name)
    }
    return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
  })
  return direction === 'asc' ? sorted : sorted.reverse()
}

export function UsersPage() {
  const { users, filters, setSearch, setStatus, setSort, setPage } = useUsersStore()

  const filtered = useMemo(() => {
    let list = users
    if (filters.search.trim()) {
      const q = filters.search.trim().toLowerCase()
      list = list.filter((u) => u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q))
    }
    if (filters.status !== 'all') {
      list = list.filter((u) => u.status === filters.status)
    }
    list = sortUsers(list, filters.sortField, filters.sortDirection)
    return list
  }, [users, filters])

  const start = (filters.page - 1) * filters.pageSize
  const pageItems = filtered.slice(start, start + filters.pageSize)

  return (
    <Card title="Users">
      <div className="users-toolbar">
        <Input
          placeholder="Search by name or email..."
          value={filters.search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Select value={filters.status} onChange={(e) => setStatus(e.target.value as any)}>
          <option value="all">All statuses</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </Select>
      </div>
      <Table
        headers={[
          'Avatar',
          <button
            type="button"
            className="table-sort"
            onClick={() => setSort('name')}
            key="name-sort"
          >
            Name {filters.sortField === 'name' ? (filters.sortDirection === 'asc' ? '↑' : '↓') : ''}
          </button>,
          'Email',
          'Status',
          <button
            type="button"
            className="table-sort"
            onClick={() => setSort('createdAt')}
            key="created-sort"
          >
            Created {filters.sortField === 'createdAt' ? (filters.sortDirection === 'asc' ? '↑' : '↓') : ''}
          </button>,
          'Actions',
        ]}
      >
        {pageItems.map((user) => (
          <tr key={user.id}>
            <td>
              <div className="avatar">{getInitials(user.name)}</div>
            </td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
              <Badge tone={user.status === 'active' ? 'success' : 'danger'}>
                {user.status === 'active' ? 'Active' : 'Inactive'}
              </Badge>
            </td>
            <td>{formatDate(user.createdAt)}</td>
            <td>
              <Link to={`/users/${user.id}`}>
                <Button variant="secondary" size="small">
                  View
                </Button>
              </Link>
            </td>
          </tr>
        ))}
        {pageItems.length === 0 && (
          <tr>
            <td colSpan={6} style={{ textAlign: 'center', padding: '1.5rem' }}>
              No users found for current filters.
            </td>
          </tr>
        )}
      </Table>
      <Pagination page={filters.page} pageSize={filters.pageSize} total={filtered.length} onChange={setPage} />
    </Card>
  )
}


