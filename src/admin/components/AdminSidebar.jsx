import { NavLink } from 'react-router-dom'

const links = [
  { to: '/admin', label: 'Dashboard', icon: 'home' },
  { to: '/admin/registrations', label: 'Inscripciones', icon: 'list' },
  { to: '/admin/sales', label: 'Ventas', icon: 'dollar' },
]

export default function AdminSidebar() {
  return (
    <aside style={{
      width: '240px', background: 'var(--white)', borderRight: '1px solid var(--border)',
      padding: '1.5rem 0', display: 'flex', flexDirection: 'column', gap: '0.25rem',
    }}>
      {links.map(({ to, label, icon }) => (
        <NavLink key={to} to={to} end={to === '/admin'} style={({ isActive }) => ({
          display: 'flex', alignItems: 'center', gap: '0.75rem',
          padding: '0.7rem 1.5rem', fontSize: '0.9rem', fontWeight: 500,
          color: isActive ? 'var(--primary)' : 'var(--text-light)',
          background: isActive ? 'rgba(43,95,138,0.08)' : 'transparent',
          borderRight: isActive ? '3px solid var(--primary)' : '3px solid transparent',
          transition: 'all 0.2s',
        })}>
          {icon === 'home' && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>}
          {icon === 'list' && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>}
          {icon === 'dollar' && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>}
          {label}
        </NavLink>
      ))}
    </aside>
  )
}
