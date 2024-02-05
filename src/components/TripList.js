import { useState } from "react"
import './TripList.css'
import { useFetch } from "../hooks/useFetch"

export default function TripList() {
    const [url, setUrl] = useState('http://localhost:3000/trips')
    const {data : trips, isLoading, error} = useFetch(url)

  return (
    <div className="trip-list">
      <h2>Trip List</h2>
      {isLoading && <div>Loading Trips...</div>}
      {error && <div>{error}</div>}
      <ul>
        {trips && trips.map(trip =>(
            <li key={trip.id}>
                <h3>{trip.title}</h3>
                <p>{trip.price}</p>
            </li>
        ))}
      </ul>
      <div className="filters">
            <button onClick={()=>setUrl('http://localhost:3000/trips?location=IRAN')}>Iranian trips</button>
            <button onClick={()=>setUrl('http://localhost:3000/trips')}>All trips</button>
      </div>
    </div>
  )
}
