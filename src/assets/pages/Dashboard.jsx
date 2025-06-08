import { Link } from "react-router-dom"


const Dashboard = () => {


  return (
    <div className="dashboard-container">
      <div className="dashboard-welcome">
        <h2>👋 Välkommen till Ventixe!</h2>
        <p>Din allt-i-ett-plattform för att hantera och upptäcka fantastiska evenemang.</p>
        <Link to="/events" className="dashboard-button">
          Utforska Evenemang
        </Link>
      </div>
    </div>
  )
}

export default Dashboard