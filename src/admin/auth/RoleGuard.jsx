import { Navigate } from 'react-router-dom'

export default function RoleGuard({ children, roles }) {
  const user = JSON.parse(localStorage.getItem('user') || 'null')

  if (!user) return <Navigate to="/admin/login" replace />
  if (roles && !roles.includes(user.role)) {
    return (
      <div style={{ padding: '4rem 2rem', textAlign: 'center' }}>
        <h2 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Acceso denegado</h2>
        <p style={{ color: 'var(--text-light)' }}>No tenés permisos para acceder a esta sección.</p>
      </div>
    )
  }

  return children
}
