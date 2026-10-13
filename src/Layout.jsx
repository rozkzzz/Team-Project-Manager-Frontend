import { Link, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <nav>
        <Link to="/">Dashboard</Link>
        <Link to="/projects">Projects</Link>
      </nav>

      <Outlet />
    </>
  )
}

export default Layout