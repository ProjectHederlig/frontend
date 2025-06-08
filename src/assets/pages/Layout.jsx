import { Outlet, NavLink, useLocation, Link} from 'react-router-dom'


function Layout() {
  const location = useLocation()

  const getPageTitle = () => {
    if (location.pathname === '/') return 'Dashboard'
    if (location.pathname.startsWith('/events/')) return 'Event Details'
    if (location.pathname === '/events') return 'Events'
        if (location.pathname === '/TermsOfServices') return 'Terms Of Services'
    return 'Page Not Found'
  }


  const pageTitle = getPageTitle()



  return (
    <div>
  <div className="projects-wrapper">
      <aside className="sidebar">
      <div className="logo">
             <Link to="/" className="link-no-underline">

       <img src="/logo.svg" alt="Dashboard" />
        Ventixe
        </Link>
        </div>
        
      <nav className="nav">
        <NavLink to="/" className="nav-link">
        <img src="/dashboard.svg" alt="Dashboard" />
        <i className="fa-solid fa-ticket-simple"></i>
        Dashboard
        </NavLink>
        <NavLink to="/events" className="nav-link">
        <img src="/event.svg" alt="Events" />
        Events
        </NavLink>
      </nav>     
    </aside>

      <main>
        <header>
          <h1>{pageTitle}</h1>
          
          </header>
                 <Outlet />
                <footer className='footer'>
          <p>&copy; 2025 My Event App</p> <p>Privacy Policy</p>  
          
            <Link to="/tos" className="link-no-underline">

           <p>Term and conditions</p> 
            </Link>
            <p>Contact</p>  
      </footer>
      </main>
 

    </div>
    </div>
  )
}
export default Layout