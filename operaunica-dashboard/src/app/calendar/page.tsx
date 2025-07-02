'use client'
import { useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { Button } from '@/components/ui/button'

export default function CalendarPage() {
  const [events, setEvents] = useState([
    { title: 'Meeting', date: new Date().toISOString().slice(0,10) },
  ])

  const addEvent = () => {
    const date = prompt('Enter date (YYYY-MM-DD)')
    if (!date) return
    const title = prompt('Event title') || 'New Event'
    setEvents([...events, { title, date }])
  }

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-semibold">Calendar</h1>
      <Button onClick={addEvent}>Add Event</Button>
      <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" events={events} height="auto" />
    </div>
  )
}
