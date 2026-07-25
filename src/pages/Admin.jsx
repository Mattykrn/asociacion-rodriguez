import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Login from '../admin/auth/Login'
import RoleGuard from '../admin/auth/RoleGuard'
import AdminNavbar from '../admin/components/AdminNavbar'
import AdminSidebar from '../admin/components/AdminSidebar'
import AdminDashboard from '../admin/components/AdminDashboard'
import RegistrationsPanel from '../admin/modules/RegistrationsPanel'
import SalesPanel from '../admin/modules/SalesPanel'

function AdminLayout({ user, onLogout }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: 'var(--bg)' }}>
      <AdminNavbar user={user} onLogout={onLogout} />
      <div style={{ display: 'flex', flex: 1 }}>
        <AdminSidebar />
        <div style={{ flex: 1, overflow: 'auto' }}>
          <Routes>
            <Route index element={<RoleGuard roles={['admin', 'gestor']}><AdminDashboard /></RoleGuard>} />
            <Route path="registrations" element={<RoleGuard roles={['admin', 'gestor']}><RegistrationsPanel /></RoleGuard>} />
            <Route path="sales" element={<RoleGuard roles={['admin', 'gestor']}><SalesPanel /></RoleGuard>} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default function Admin() {
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('user') || 'null'))
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      setLoading(false)
      return
    }
    fetch('/api/auth/me', {
      headers: { Authorization: `Bearer ${token}` },
    }).then(res => {
      if (!res.ok) {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        setUser(null)
      }
      setLoading(false)
    }).catch(() => {
      setLoading(false)
    })
  }, [])

  if (!user) {
    return <Login onLogin={(u) => { setUser(u); navigate('/admin') }} />
  }

  if (loading) {
    return <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', color: 'var(--text-light)' }}>Verificando sesión...</div>
  }

  return <AdminLayout user={user} onLogout={() => setUser(null)} />
}
