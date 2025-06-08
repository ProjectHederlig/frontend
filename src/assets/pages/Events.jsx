import { useEffect, useState } from 'react'
import EventCard from '../components/EventCard'

const Events = () => {
  const [events, setEvents] = useState([])

  const getEvents = async () => {
    const res = await fetch('https://event-win24-e9f0awf6f5f0hfd8.swedencentral-01.azurewebsites.net/api/events')

    if (res.ok) {
      const data = await res.json()
      setEvents(data)
    }
  }

  useEffect(() => {
    getEvents()
  }, [])  
  return (
    <div className='events-container'>
      {events.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
    </div>
    )
}

export default Events