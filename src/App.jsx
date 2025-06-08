import './App.css'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './assets/pages/Dashboard'
import EventDetails from './assets/components/EventDetails'
import Events from './assets/pages/Events'
import Layout from './assets/pages/Layout'
function App() {


  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="events" element={<Events />} />
        <Route path="events/:id" element={<EventDetails />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Route>
    </Routes>
  )
}

export default App
