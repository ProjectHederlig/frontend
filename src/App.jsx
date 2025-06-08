import './App.css'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import Dashboard from './assets/pages/Dashboard'
import EventDetails from './assets/components/EventDetails'
import Events from './assets/pages/Events'
import Layout from './assets/pages/Layout'
import TermsOfServices from './assets/pages/TermsOfServices'
function App() {


  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="/events" element={<Events />} />
        <Route path="/termsofservices" element={<TermsOfServices/>} />
        <Route path="events/:id" element={<EventDetails />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Route>
    </Routes>
  )
}

export default App
