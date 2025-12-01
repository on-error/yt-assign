import { useMemo } from 'react'
import { Card } from '../components/ui/Card'
import { useUsersStore } from '../store/usersStore'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from 'recharts'

const COLORS = ['#4f46e5', '#e11d48']

export function AnalyticsPage() {
  const { users } = useUsersStore()

  const signupTrend = useMemo(() => {
    // Mocked last 7 days signups so the chart always has visible data
    const today = new Date()
    const baseCounts = [4, 7, 3, 6, 5, 8, 9]

    return baseCounts.map((count, idxFromEnd) => {
      const offset = 6 - idxFromEnd
      const d = new Date(today)
      d.setDate(today.getDate() - offset)

      return {
        label: d.toLocaleDateString(undefined, { month: 'short', day: 'numeric' }),
        count,
      }
    })
  }, [])

  const activeInactive = useMemo(() => {
    const active = users.filter((u) => u.status === 'active').length
    const inactive = users.length - active
    return [
      { name: 'Active', value: active },
      { name: 'Inactive', value: inactive },
    ]
  }, [users])

  return (
    <div className="analytics-grid">
      <Card title="User signups (last 7 days)">
        <div style={{ height: 260 }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={signupTrend}>
              <XAxis dataKey="label" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Line type="monotone" dataKey="count" stroke="#4f46e5" strokeWidth={2} dot={{ r: 3 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <Card title="Active vs inactive users">
        <div style={{ height: 260 }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={activeInactive} dataKey="value" nameKey="name" innerRadius={60} outerRadius={90} label>
                {activeInactive.map((entry, index) => (
                  <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  )
}


