'use client'

import { useEffect, useState } from 'react'
import EventCard from '@/components/EventCard'

type Event = {
  id: string
  name: string
  location: string
  date: string
  time: string
  price: number
}

export default function HomePage() {
  const [events, setEvents] = useState<Event[]>([])

  useEffect(() => {
    const fetchEvents = async () => {
      const res = await fetch('http://localhost:5000/api/events')
      const data = await res.json()
      setEvents(data)
    }
    fetchEvents()
  }, [])

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Daftar Event</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {events.map((event) => (
          <EventCard key={event.id} {...event} />
        ))}
      </div>
    </main>
  )
}
