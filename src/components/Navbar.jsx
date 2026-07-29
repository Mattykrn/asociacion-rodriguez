import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Inicio' },
  { to: '/about', label: 'Nosotros' },
  { to: '/courses', label: 'Talleres' },
  { to: '/herreria', label: 'Herrería' },
  { to: '/gallery', label: 'Galería' },
  { to: '/contact', label: 'Contacto' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header>
      <div className="container">
        <Link to="/" className="logo" onClick={() => setOpen(false)}>
          <div className="logo-icon">M</div>
          <div className="logo-text">
            <strong>Monseñor Antonio Rodríguez</strong>
            <span>Asociación Civil</span>
          </div>
        </Link>
        <nav className={open ? 'open' : ''}>
          {links.map(({ to, label }) => (
            <NavLink key={to} to={to} end={to === '/'} onClick={() => setOpen(false)}>
              {label}
            </NavLink>
          ))}
        </nav>
        <button
          className={`menu-toggle ${open ? 'open' : ''}`}
          onClick={() => setOpen(prev => !prev)}
          aria-label="Menú"
        >
          {open ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>
    </header>
  )
}
