import { useState, useEffect } from 'react'

async function api(url, opts = {}) {
  const token = localStorage.getItem('token')
  const res = await fetch(url, {
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}`, ...opts.headers },
    ...opts,
  })
  return res.json()
}

export default function SalesPanel() {
  const [sales, setSales] = useState([])
  const [loading, setLoading] = useState(true)
  const [form, setForm] = useState({ item: '', quantity: 1, amount: '', customer: '', notes: '' })
  const [error, setError] = useState('')

  const load = async () => {
    setLoading(true)
    const data = await api('/api/sales')
    setSales(Array.isArray(data) ? data : [])
    setLoading(false)
  }

  useEffect(() => { load() }, [])

  const handleSubmit = async e => {
    e.preventDefault()
    setError('')
    if (!form.item || !form.amount || parseFloat(form.amount) <= 0) {
      setError('Item y monto son obligatorios')
      return
    }
    await api('/api/sales', {
      method: 'POST',
      body: JSON.stringify({ ...form, amount: parseFloat(form.amount), quantity: parseInt(form.quantity) || 1 }),
    })
    setForm({ item: '', quantity: 1, amount: '', customer: '', notes: '' })
    load()
  }

  const deleteSale = async id => {
    if (!confirm('¿Eliminar esta venta?')) return
    await api(`/api/sales/${id}`, { method: 'DELETE' })
    load()
  }

  const exportExcel = () => {
    const link = document.createElement('a')
    link.href = `/api/sales/export`
    // We need to fetch with auth for export
    const token = localStorage.getItem('token')
    fetch('/api/sales/export', { headers: { Authorization: `Bearer ${token}` } })
      .then(res => res.blob())
      .then(blob => {
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url; a.download = `ventas_${new Date().toISOString().slice(0, 10)}.xlsx`
        a.click()
        URL.revokeObjectURL(url)
      })
  }

  const total = sales.reduce((sum, s) => sum + s.amount, 0)

  return (
    <div style={{ padding: '2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
        <div>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '0.25rem' }}>
            Ventas de Trabajos
          </h2>
          <p style={{ color: 'var(--text-light)', fontSize: '0.85rem' }}>
            {sales.length} venta(s) — Total: <strong style={{ color: 'var(--green)' }}>${total.toLocaleString()}</strong>
          </p>
        </div>
        <button className="btn btn-primary" onClick={exportExcel} style={{ fontSize: '0.8rem', padding: '0.5rem 1rem' }}>
          Exportar a Excel
        </button>
      </div>

      <div className="card" style={{ padding: '1.5rem', marginBottom: '2rem' }}>
        <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '1rem' }}>
          Registrar nueva venta
        </h3>
        {error && (
          <div style={{
            padding: '0.5rem 0.75rem', borderRadius: 'var(--radius)',
            background: 'rgba(220,38,38,0.08)', color: '#DC2626',
            fontSize: '0.8rem', marginBottom: '0.75rem',
          }}>{error}</div>
        )}
        <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label>Item *</label>
            <input value={form.item} onChange={e => setForm(p => ({ ...p, item: e.target.value }))} placeholder="Producto vendido" />
          </div>
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label>Cantidad</label>
            <input type="number" min="1" value={form.quantity} onChange={e => setForm(p => ({ ...p, quantity: e.target.value }))} />
          </div>
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label>Monto *</label>
            <input type="number" step="0.01" min="0" value={form.amount} onChange={e => setForm(p => ({ ...p, amount: e.target.value }))} placeholder="0.00" />
          </div>
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label>Cliente</label>
            <input value={form.customer} onChange={e => setForm(p => ({ ...p, customer: e.target.value }))} placeholder="Nombre del cliente" />
          </div>
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label>Notas</label>
            <input value={form.notes} onChange={e => setForm(p => ({ ...p, notes: e.target.value }))} placeholder="Observaciones" />
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end' }}>
            <button type="submit" className="btn btn-primary" style={{ width: '100%', fontSize: '0.85rem' }}>
              Registrar venta
            </button>
          </div>
        </form>
      </div>

      {loading ? <p style={{ color: 'var(--text-light)' }}>Cargando...</p> : (
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--border)', textAlign: 'left' }}>
                <th style={{ padding: '0.75rem 0.5rem', fontWeight: 700 }}>ID</th>
                <th style={{ padding: '0.75rem 0.5rem', fontWeight: 700 }}>Item</th>
                <th style={{ padding: '0.75rem 0.5rem', fontWeight: 700 }}>Cant.</th>
                <th style={{ padding: '0.75rem 0.5rem', fontWeight: 700 }}>Monto</th>
                <th style={{ padding: '0.75rem 0.5rem', fontWeight: 700 }}>Cliente</th>
                <th style={{ padding: '0.75rem 0.5rem', fontWeight: 700 }}>Registró</th>
                <th style={{ padding: '0.75rem 0.5rem', fontWeight: 700 }}>Fecha</th>
                <th style={{ padding: '0.75rem 0.5rem', fontWeight: 700 }}>Acción</th>
              </tr>
            </thead>
            <tbody>
              {sales.map(s => (
                <tr key={s.id} style={{ borderBottom: '1px solid var(--border)' }}>
                  <td style={{ padding: '0.75rem 0.5rem', color: 'var(--text-light)' }}>{s.id}</td>
                  <td style={{ padding: '0.75rem 0.5rem', fontWeight: 500 }}>{s.item}</td>
                  <td style={{ padding: '0.75rem 0.5rem', color: 'var(--text-light)' }}>{s.quantity}</td>
                  <td style={{ padding: '0.75rem 0.5rem', fontWeight: 600, color: 'var(--green)' }}>${s.amount?.toFixed(2)}</td>
                  <td style={{ padding: '0.75rem 0.5rem', color: 'var(--text-light)' }}>{s.customer}</td>
                  <td style={{ padding: '0.75rem 0.5rem', color: 'var(--text-light)', fontSize: '0.8rem' }}>{s.registeredBy}</td>
                  <td style={{ padding: '0.75rem 0.5rem', color: 'var(--text-light)', fontSize: '0.8rem' }}>{s.createdAt?.slice(0, 10)}</td>
                  <td style={{ padding: '0.75rem 0.5rem' }}>
                    <button onClick={() => deleteSale(s.id)} style={{
                      background: 'rgba(220,38,38,0.08)', color: '#DC2626', border: 'none',
                      padding: '0.25rem 0.5rem', borderRadius: '6px', cursor: 'pointer', fontSize: '0.75rem', fontWeight: 600,
                    }}>Eliminar</button>
                  </td>
                </tr>
              ))}
              {sales.length === 0 && (
                <tr><td colSpan={8} style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-light)' }}>
                  No hay ventas registradas
                </td></tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
