// src/app/events/[id]/page.tsx

type Params = {
  params: {
    id: string
  }
}

export default async function EventDetailPage({ params }: Params) {
  const res = await fetch(`http://localhost:5000/api/events/${params.id}`)
  const event = await res.json()

  return (
    <main className="p-8 max-w-2xl mx-auto space-y-4">
      <h1 className="text-3xl font-bold">{event.name}</h1>
      <p className="text-gray-600">{event.location} | {event.date} {event.time}</p>
      <p className="text-lg">
        {event.price === 0 ? 'Gratis' : `Rp ${event.price.toLocaleString('id-ID')}`}
      </p>
      <p>{event.description}</p>
      <button className="px-4 py-2 bg-green-600 text-white rounded">
        Beli Tiket
      </button>
    </main>
  )
}
