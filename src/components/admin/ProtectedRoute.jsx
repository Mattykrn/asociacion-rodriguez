import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

export default function ProtectedRoute({ roles = ['admin', 'editor'] }) {
  const { session, profile, loading } = useAuth()

  if (loading) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', color: 'var(--text-light)' }}>
        Cargando...
      </div>
    )
  }

  if (!session) return <Navigate to="/admin/login" replace />
  if (!roles.includes(profile?.role)) return <Navigate to="/" replace />

  return <Outlet />
}
