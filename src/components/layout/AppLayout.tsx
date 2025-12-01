import { NavLink, Outlet } from 'react-router-dom'
import { useUiStore } from '../../store/uiStore'
import { Button } from '../ui/Button'
import './layout.css'

export function AppLayout() {
  const { darkMode, toggleDarkMode } = useUiStore()

  return (
    <div className={darkMode ? 'app app-dark' : 'app'}>
      <header className="app-header">
        <div className="app-header-left">
          <span className="app-logo">User Dashboard</span>
          <nav className="app-nav">
            <NavLink to="/users" className={({ isActive }) => (isActive ? 'nav-link nav-link-active' : 'nav-link')}>
              Users
            </NavLink>
            <NavLink
              to="/analytics"
              className={({ isActive }) => (isActive ? 'nav-link nav-link-active' : 'nav-link')}
            >
              Analytics
            </NavLink>
          </nav>
        </div>
        <Button variant="ghost" onClick={toggleDarkMode}>
          {darkMode ? 'Light mode' : 'Dark mode'}
        </Button>
      </header>
      <main className="app-main">
        <Outlet />
      </main>
    </div>
  )
}


