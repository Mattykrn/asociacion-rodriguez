import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AdminDashboard() {
  const navigate = useNavigate()
  const [stats, setStats] = useState({ registrations: 0, sales: 0, total: 0 })

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) return

    const headers = { Authorization: `Bearer ${token}` }

    Promise.all([
      fetch('/api/registrations', { headers }).then(r => {
        if (r.status === 401) throw new Error('unauthorized')
        return r.json()
      }).catch(() => []),
      fetch('/api/sales/summary', { headers }).then(r => {
        if (r.status === 401) throw new Error('unauthorized')
        return r.json()
      }).catch(() => ({ count: 0, total: 0 })),
    ]).then(([regs, sales]) => {
      if (!Array.isArray(regs)) regs = []
      setStats({
        registrations: regs.length,
        sales: sales.count || 0,
        total: sales.total || 0,
      })
    })
  }, [])

  const user = JSON.parse(localStorage.getItem('user') || '{}')

  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '0.5rem' }}>
        Bienvenido, {user.name}
      </h2>
      <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', marginBottom: '2rem' }}>
        Panel de administración de la Asociación Civil Monseñor Antonio Rodríguez
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem', marginBottom: '2rem' }}>
        <div className="card" style={{ padding: '1.5rem', cursor: 'pointer' }} onClick={() => navigate('/admin/registrations')}>
          <div style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '1.75rem' }}>{stats.registrations}</div>
          <div style={{ color: 'var(--text-light)', fontSize: '0.85rem' }}>Inscripciones</div>
        </div>
        <div className="card" style={{ padding: '1.5rem', cursor: 'pointer' }} onClick={() => navigate('/admin/sales')}>
          <div style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '1.75rem' }}>{stats.sales}</div>
          <div style={{ color: 'var(--text-light)', fontSize: '0.85rem' }}>Ventas registradas</div>
        </div>
        <div className="card" style={{ padding: '1.5rem' }}>
          <div style={{ color: 'var(--green)', fontWeight: 700, fontSize: '1.75rem' }}>
            ${stats.total.toLocaleString()}
          </div>
          <div style={{ color: 'var(--text-light)', fontSize: '0.85rem' }}>Ingresos totales</div>
        </div>
      </div>
    </div>
  )
}
