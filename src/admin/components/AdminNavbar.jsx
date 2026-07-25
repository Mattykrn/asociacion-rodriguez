import { useNavigate } from 'react-router-dom'

export default function AdminNavbar({ user, onLogout }) {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    onLogout()
    navigate('/admin/login')
  }

  const roleLabels = { admin: 'Admin Principal', gestor: 'Gestor de Taller' }

  return (
    <div style={{
      background: 'var(--white)', borderBottom: '1px solid var(--border)',
      height: '4rem', display: 'flex', alignItems: 'center',
      justifyContent: 'space-between', padding: '0 1.5rem',
      position: 'sticky', top: 0, zIndex: 100,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <div style={{
          width: '2.2rem', height: '2.2rem', borderRadius: '50%',
          background: 'var(--primary)', display: 'flex', alignItems: 'center',
          justifyContent: 'center', color: 'var(--white)', fontWeight: 800, fontSize: '0.85rem',
        }}>M</div>
        <span style={{ fontWeight: 700, color: 'var(--primary)', fontSize: '0.95rem' }}>
          Panel Admin
        </span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <span style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>
          {user?.name} <span style={{ opacity: 0.5 }}>({roleLabels[user?.role] || user?.role})</span>
        </span>
        <button onClick={handleLogout} style={{
          background: 'rgba(220,38,38,0.08)', color: '#DC2626',
          border: 'none', padding: '0.4rem 1rem', borderRadius: 'var(--radius)',
          cursor: 'pointer', fontWeight: 600, fontSize: '0.8rem',
        }}>Salir</button>
      </div>
    </div>
  )
}
