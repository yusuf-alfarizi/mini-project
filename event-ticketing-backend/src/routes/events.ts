// src/routes/events.ts
import { Router } from 'express'

const router = Router()

// Dummy response, nanti diganti pakai database
router.get('/', async (req, res) => {
  const events = [
    {
      id: '1',
      name: 'React Conf',
      location: 'Jakarta',
      date: '2025-08-10',
      time: '10:00',
      price: 50000,
      available_seats: 45,
    },
    {
      id: '2',
      name: 'Tech Expo',
      location: 'Bandung',
      date: '2025-09-05',
      time: '14:00',
      price: 0,
      available_seats: 100,
    },
  ]

  res.json(events)
})

export default router
