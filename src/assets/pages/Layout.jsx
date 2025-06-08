import { Outlet, NavLink, useLocation, Link} from 'react-router-dom'


function Layout() {
  const location = useLocation()

  const getPageTitle = () => {
    if (location.pathname === '/') return 'Dashboard'
    if (location.pathname.startsWith('/events/')) return 'Event Details'
    if (location.pathname === '/events') return 'Events'
        if (location.pathname === '/termsofservices') return 'Terms Of Services'
    return 'Page Not Found'
  }


  const pageTitle = getPageTitle()



  return (
    <div className="layout-wrapper">
      <aside className="layout-aside">
        <div className="aside-logo">
          <Link to="/"><img src="/logo.svg" alt="Dashboard"></img>
            <span>Ventixe</span>
          </Link>
        </div>
        <nav className="aside-nav">
          <NavLink to="/" className="aside-link">
            <img src="/dashboard.svg" alt="Dashboard" />
            Dashboard
          </NavLink>
          <NavLink to="/events" className="aside-link">
            <img src="/event.svg" alt="Events" />
            Events
          </NavLink>
        </nav>
      </aside>

      <div className="layout-content">
        <header className="layout-header">
          <h1>{pageTitle}</h1>
        </header>

        <main className="layout-main">
          <Outlet />
        </main>
      <footer className='footer'>
          <div className='footer-copyright'>
            <p>&copy; 2025 My Event App</p> 
          </div>
          <div className='footer-terms'>
            <p>Privacy Policy</p> 
            <Link to="/termsofservices">
            <p>Term and conditions</p>
            </Link>   
            <p>Contact</p>  
          </div>
      </footer>
    </div>
    </div>
  )
}
export default Layout
