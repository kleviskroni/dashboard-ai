import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 p-6">
      <h1 className="text-3xl font-bold">Opera Unica Dashboard</h1>
      <div className="flex gap-4">
        <Button asChild><Link href="/dashboard">Dashboard</Link></Button>
        <Button asChild variant="secondary"><Link href="/chatbot">Chatbot</Link></Button>
        <Button asChild variant="secondary"><Link href="/calendar">Calendar</Link></Button>
      </div>
    </div>
  )
}
