import { Card } from '@/components/ui/card'

const metrics = [
  { name: 'Clients Onboarded', value: 120 },
  { name: 'AI Sessions', value: 340 },
  { name: 'Last Update', value: '2024-07-01' },
]

const activities = [
  'User A started a new chat',
  'User B scheduled a meeting',
  'User C updated profile',
]

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {metrics.map((m) => (
          <Card key={m.name} className="p-4 flex flex-col items-center text-center">
            <div className="text-xl font-bold">{m.value}</div>
            <div className="text-sm text-muted-foreground">{m.name}</div>
          </Card>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow p-4">
        <h2 className="font-medium mb-2">Activity</h2>
        <ul className="space-y-1 text-sm">
          {activities.map((a, i) => (
            <li key={i}>{a}</li>
          ))}
        </ul>
      </div>

      <div className="bg-white rounded-lg shadow p-4">
        <h2 className="font-medium mb-2">Monthly Usage</h2>
        <svg viewBox="0 0 100 40" className="w-full h-24 text-accent">
          <polyline
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            points="0,30 20,25 40,28 60,15 80,18 100,8"
          />
        </svg>
      </div>
    </div>
  )
}
