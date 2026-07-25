import { useState, useEffect } from 'react'

async function api(url, opts = {}) {
  const token = localStorage.getItem('token')
  const res = await fetch(url, {
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}`, ...opts.headers },
    ...opts,
  })
  return res.json()
}

export default function RegistrationsPanel() {
  const [registrations, setRegistrations] = useState([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('todas')

  const load = async () => {
    setLoading(true)
    const data = await api('/api/registrations')
    setRegistrations(Array.isArray(data) ? data : [])
    setLoading(false)
  }

  useEffect(() => { load() }, [])

  const filtered = filter === 'todas' ? registrations : registrations.filter(r => r.status === filter)

  const updateStatus = async (id, status) => {
    await api(`/api/registrations/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ status }),
    })
    load()
  }

  const deleteReg = async id => {
    if (!confirm('¿Eliminar esta inscripción?')) return
    await api(`/api/registrations/${id}`, { method: 'DELETE' })
    load()
  }

  const exportExcel = () => {
    const token = localStorage.getItem('token')
    const link = document.createElement('a')
    link.href = `/api/sales/export?token=${token}`
    const rows = [['ID', 'Curso', 'Nombre', 'Email', 'Teléfono', 'Estado', 'Fecha']]
    filtered.forEach(r => rows.push([r.id, r.courseName, r.name, r.email, r.phone, r.status, r.createdAt?.slice(0, 10)]))
    const csv = rows.map(r => r.map(c => `"${c || ''}"`).join(',')).join('\n')
    const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url; a.download = `inscripciones_${new Date().toISOString().slice(0, 10)}.csv`
    a.click()
    URL.revokeObjectURL(url)
  }

  const statusColors = {
    pendiente: { bg: 'rgba(196,155,74,0.1)', color: '#C49B4A' },
    confirmada: { bg: 'rgba(37,211,102,0.1)', color: '#1DA851' },
    cancelada: { bg: 'rgba(220,38,38,0.08)', color: '#DC2626' },
  }

  return (
    <div style={{ padding: '2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
        <div>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '0.25rem' }}>
            Inscripciones a Talleres
          </h2>
          <p style={{ color: 'var(--text-light)', fontSize: '0.85rem' }}>
            {filtered.length} inscripción(es) — {registrations.length} total
          </p>
        </div>
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <select value={filter} onChange={e => setFilter(e.target.value)} style={{
            padding: '0.5rem 0.75rem', borderRadius: 'var(--radius)',
            border: '1px solid var(--border)', fontSize: '0.85rem', background: 'var(--white)',
          }}>
            <option value="todas">Todas</option>
            <option value="pendiente">Pendientes</option>
            <option value="confirmada">Confirmadas</option>
            <option value="cancelada">Canceladas</option>
          </select>
          <button className="btn btn-primary" onClick={exportExcel} style={{ fontSize: '0.8rem', padding: '0.5rem 1rem' }}>
            Exportar CSV
          </button>
        </div>
      </div>

      {loading ? <p style={{ color: 'var(--text-light)' }}>Cargando...</p> : (
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--border)', textAlign: 'left' }}>
                <th style={{ padding: '0.75rem 0.5rem', fontWeight: 700, color: 'var(--text)' }}>ID</th>
                <th style={{ padding: '0.75rem 0.5rem', fontWeight: 700, color: 'var(--text)' }}>Curso</th>
                <th style={{ padding: '0.75rem 0.5rem', fontWeight: 700, color: 'var(--text)' }}>Nombre</th>
                <th style={{ padding: '0.75rem 0.5rem', fontWeight: 700, color: 'var(--text)' }}>Email</th>
                <th style={{ padding: '0.75rem 0.5rem', fontWeight: 700, color: 'var(--text)' }}>Teléfono</th>
                <th style={{ padding: '0.75rem 0.5rem', fontWeight: 700, color: 'var(--text)' }}>Estado</th>
                <th style={{ padding: '0.75rem 0.5rem', fontWeight: 700, color: 'var(--text)' }}>Fecha</th>
                <th style={{ padding: '0.75rem 0.5rem', fontWeight: 700, color: 'var(--text)' }}>Acción</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(r => (
                <tr key={r.id} style={{ borderBottom: '1px solid var(--border)' }}>
                  <td style={{ padding: '0.75rem 0.5rem', color: 'var(--text-light)' }}>{r.id}</td>
                  <td style={{ padding: '0.75rem 0.5rem', fontWeight: 500 }}>{r.courseName}</td>
                  <td style={{ padding: '0.75rem 0.5rem' }}>{r.name}</td>
                  <td style={{ padding: '0.75rem 0.5rem', color: 'var(--text-light)' }}>{r.email}</td>
                  <td style={{ padding: '0.75rem 0.5rem', color: 'var(--text-light)' }}>{r.phone}</td>
                  <td style={{ padding: '0.75rem 0.5rem' }}>
                    <span style={{
                      display: 'inline-block', padding: '0.2rem 0.6rem', borderRadius: '999px',
                      fontSize: '0.75rem', fontWeight: 600,
                      ...(statusColors[r.status] || statusColors.pendiente),
                    }}>{r.status}</span>
                  </td>
                  <td style={{ padding: '0.75rem 0.5rem', color: 'var(--text-light)', fontSize: '0.8rem' }}>
                    {r.createdAt?.slice(0, 10)}
                  </td>
                  <td style={{ padding: '0.75rem 0.5rem' }}>
                    <div style={{ display: 'flex', gap: '0.35rem' }}>
                      {r.status === 'pendiente' && (
                        <button onClick={() => updateStatus(r.id, 'confirmada')} style={{
                          background: 'rgba(37,211,102,0.1)', color: '#1DA851', border: 'none',
                          padding: '0.25rem 0.5rem', borderRadius: '6px', cursor: 'pointer', fontSize: '0.75rem', fontWeight: 600,
                        }}>Confirmar</button>
                      )}
                      {r.status !== 'cancelada' && (
                        <button onClick={() => updateStatus(r.id, 'cancelada')} style={{
                          background: 'rgba(220,38,38,0.08)', color: '#DC2626', border: 'none',
                          padding: '0.25rem 0.5rem', borderRadius: '6px', cursor: 'pointer', fontSize: '0.75rem', fontWeight: 600,
                        }}>Cancelar</button>
                      )}
                      <button onClick={() => deleteReg(r.id)} style={{
                        background: 'rgba(220,38,38,0.08)', color: '#DC2626', border: 'none',
                        padding: '0.25rem 0.5rem', borderRadius: '6px', cursor: 'pointer', fontSize: '0.75rem', fontWeight: 600,
                      }}>Eliminar</button>
                    </div>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr><td colSpan={8} style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-light)' }}>
                  No hay inscripciones {filter !== 'todas' && `con estado "${filter}"`}
                </td></tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
