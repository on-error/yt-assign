import { useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useUsersStore } from '../store/usersStore'
import type { UserStatus } from '../data/users'
import { Card } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { Modal } from '../components/ui/Modal'
import { Input } from '../components/ui/Input'
import { Select } from '../components/ui/Select'

function getInitials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0]?.toUpperCase())
    .join('')
}

function formatDate(date: string) {
  return new Date(date).toLocaleString()
}

const mockActivities = [
  { label: 'Logins (last 7 days)', value: 5 },
  { label: 'Pages viewed', value: 23 },
  { label: 'Last active', value: '2 days ago' },
]

const mockActions = [
  'Updated profile settings',
  'Viewed analytics dashboard',
  'Downloaded usage report',
  'Changed password',
  'Logged in from new device',
]

export function UserDetailsPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { users, updateUser } = useUsersStore()
  const user = useMemo(() => users.find((u) => u.id === id), [users, id])

  const [isModalOpen, setModalOpen] = useState(false)
  const [name, setName] = useState(user?.name ?? '')
  const [status, setStatus] = useState<UserStatus>(user?.status ?? 'active')
  const [error, setError] = useState('')

  if (!user) {
    return (
      <Card title="User not found">
        <p>This user does not exist. It may have been removed.</p>
        <Button onClick={() => navigate('/users')}>Back to users</Button>
      </Card>
    )
  }

  const openModal = () => {
    setName(user.name)
    setStatus(user.status)
    setError('')
    setModalOpen(true)
  }

  const handleSave = () => {
    if (!name.trim()) {
      setError('Name is required')
      return
    }
    updateUser(user.id, { name: name.trim(), status })
    setModalOpen(false)
  }

  return (
    <>
      <div className="user-details-grid">
        <Card>
          <div className="user-profile">
            <div className={`avatar avatar-large avatar-${user.status}`}>
              {getInitials(user.name)}
            </div>
            <div>
              <h2>{user.name}</h2>
              <p className="muted">{user.email}</p>
              <Badge tone={user.status === 'active' ? 'success' : 'danger'}>
                {user.status === 'active' ? 'Active' : 'Inactive'}
              </Badge>
              <p className="muted small">Created {formatDate(user.createdAt)}</p>
            </div>
          </div>
          <div className="user-actions">
            <Button variant="secondary" onClick={() => navigate('/users')}>
              Back to users
            </Button>
            <Button onClick={openModal}>Edit user</Button>
          </div>
        </Card>

        <Card title="Activity summary">
          <div className="activity-grid">
            {mockActivities.map((item) => (
              <div key={item.label} className="activity-item">
                <span className="activity-label">{item.label}</span>
                <span className="activity-value">{item.value}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card title="Last 5 actions">
          <ul className="actions-list">
            {mockActions.map((action) => (
              <li key={action}>{action}</li>
            ))}
          </ul>
        </Card>
      </div>

      <Modal title="Edit user" isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <div className="form-field">
          <label htmlFor="name">Name</label>
          <Input id="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-field">
          <label htmlFor="status">Status</label>
          <Select id="status" value={status} onChange={(e) => setStatus(e.target.value as UserStatus)}>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </Select>
        </div>
        {error && <p className="error">{error}</p>}
        <div className="modal-footer-actions">
          <Button variant="ghost" onClick={() => setModalOpen(false)}>
            Cancel
          </Button>
          <Button onClick={handleSave}>Save changes</Button>
        </div>
      </Modal>
    </>
  )
}


