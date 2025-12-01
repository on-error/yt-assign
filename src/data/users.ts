export type UserStatus = 'active' | 'inactive'

export interface User {
  id: string
  name: string
  email: string
  status: UserStatus
  createdAt: string // ISO date string
}

// Static mock users data
export const users: User[] = [
  {
    id: '1',
    name: 'Alice Johnson',
    email: 'alice.johnson@example.com',
    status: 'active',
    createdAt: '2025-02-01T10:15:00Z',
  },
  {
    id: '2',
    name: 'Brian Lee',
    email: 'brian.lee@example.com',
    status: 'inactive',
    createdAt: '2025-01-20T08:30:00Z',
  },
  {
    id: '3',
    name: 'Carla Mendes',
    email: 'carla.mendes@example.com',
    status: 'active',
    createdAt: '2025-01-28T14:45:00Z',
  },
  {
    id: '4',
    name: 'David Kim',
    email: 'david.kim@example.com',
    status: 'active',
    createdAt: '2025-02-05T09:10:00Z',
  },
  {
    id: '5',
    name: 'Emma Rodriguez',
    email: 'emma.rodriguez@example.com',
    status: 'inactive',
    createdAt: '2024-12-10T11:05:00Z',
  },
  {
    id: '6',
    name: 'Frank Wilson',
    email: 'frank.wilson@example.com',
    status: 'active',
    createdAt: '2024-11-18T16:20:00Z',
  },
  {
    id: '7',
    name: 'Grace Park',
    email: 'grace.park@example.com',
    status: 'active',
    createdAt: '2025-02-10T12:40:00Z',
  },
  {
    id: '8',
    name: 'Henry Cooper',
    email: 'henry.cooper@example.com',
    status: 'inactive',
    createdAt: '2024-10-03T07:55:00Z',
  },
  {
    id: '9',
    name: 'Isabella Rossi',
    email: 'isabella.rossi@example.com',
    status: 'active',
    createdAt: '2025-02-12T09:25:00Z',
  },
  {
    id: '10',
    name: 'Jack Thompson',
    email: 'jack.thompson@example.com',
    status: 'inactive',
    createdAt: '2024-09-15T13:35:00Z',
  },
  {
    id: '11',
    name: 'Karen Liu',
    email: 'karen.liu@example.com',
    status: 'active',
    createdAt: '2025-02-08T15:00:00Z',
  },
  {
    id: '12',
    name: 'Liam O\'Connor',
    email: 'liam.oconnor@example.com',
    status: 'active',
    createdAt: '2024-12-22T18:10:00Z',
  },
  {
    id: '13',
    name: 'Mia Patel',
    email: 'mia.patel@example.com',
    status: 'inactive',
    createdAt: '2024-11-02T10:50:00Z',
  },
  {
    id: '14',
    name: 'Noah Garcia',
    email: 'noah.garcia@example.com',
    status: 'active',
    createdAt: '2025-01-30T11:30:00Z',
  },
  {
    id: '15',
    name: 'Olivia Brown',
    email: 'olivia.brown@example.com',
    status: 'active',
    createdAt: '2025-02-03T09:05:00Z',
  },
  {
    id: '16',
    name: 'Paul Adams',
    email: 'paul.adams@example.com',
    status: 'inactive',
    createdAt: '2024-08-19T14:15:00Z',
  },
  {
    id: '17',
    name: 'Quinn Foster',
    email: 'quinn.foster@example.com',
    status: 'active',
    createdAt: '2025-02-09T13:45:00Z',
  },
  {
    id: '18',
    name: 'Ruby Singh',
    email: 'ruby.singh@example.com',
    status: 'active',
    createdAt: '2025-01-12T12:20:00Z',
  },
  {
    id: '19',
    name: 'Samuel Wright',
    email: 'samuel.wright@example.com',
    status: 'inactive',
    createdAt: '2024-07-25T08:00:00Z',
  },
  {
    id: '20',
    name: 'Tara Nguyen',
    email: 'tara.nguyen@example.com',
    status: 'active',
    createdAt: '2025-02-11T17:30:00Z',
  },
]


