import React from 'react'
import { NavLink } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
     <aside className="sidebar">
      <div className="logo">Ventixe</div>
      <nav className="nav">
        <NavLink to="/" className="nav-link">Dashboard</NavLink>
        <NavLink to="/events" className="nav-link">Events</NavLink>
      </nav>
     
    </aside>
    </div>
  )
}

export default Dashboard