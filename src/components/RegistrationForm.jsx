import { useState } from 'react'

export default function RegistrationForm({ course, onClose }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setError('')

    if (!form.name.trim() || !form.email.trim()) {
      setError('Nombre y email son obligatorios')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError('Email inválido')
      return
    }

    setStatus('loading')
    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ courseId: course.id, ...form }),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error || 'Error al inscribirse')
        setStatus('idle')
      } else {
        setStatus('success')
      }
    } catch {
      setError('Error de conexión. Intentalo de nuevo.')
      setStatus('idle')
    }
  }

  if (status === 'success') {
    return (
      <div style={{ textAlign: 'center', padding: '2rem 0' }}>
        <div style={{
          width: '4rem', height: '4rem', borderRadius: '50%',
          background: 'rgba(37,211,102,0.1)', display: 'flex',
          alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 1.5rem',
        }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.5rem' }}>
          ¡Inscripción exitosa!
        </h3>
        <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
          Te confirmaremos por email los detalles del taller <strong>{course.title}</strong>.
        </p>
        <button className="btn btn-primary" onClick={onClose}>Cerrar</button>
      </div>
    )
  }

  return (
    <div>
      <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.25rem' }}>
        Inscripción: {course.title}
      </h3>
      <p style={{ color: 'var(--text-light)', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
        Completá tus datos para inscribirte al taller.
      </p>

      {error && (
        <div style={{
          padding: '0.75rem 1rem', borderRadius: 'var(--radius)',
          background: 'rgba(220,38,38,0.08)', color: '#DC2626',
          fontSize: '0.85rem', marginBottom: '1rem',
        }}>{error}</div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="reg-name">Nombre completo *</label>
          <input id="reg-name" name="name" value={form.name} onChange={handleChange} placeholder="Tu nombre" />
        </div>
        <div className="form-group">
          <label htmlFor="reg-email">Correo electrónico *</label>
          <input id="reg-email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="tu@correo.com" />
        </div>
        <div className="form-group">
          <label htmlFor="reg-phone">Teléfono</label>
          <input id="reg-phone" name="phone" value={form.phone} onChange={handleChange} placeholder="+54 342 ..." />
        </div>
        <div className="form-group">
          <label htmlFor="reg-message">Mensaje (opcional)</label>
          <textarea id="reg-message" name="message" value={form.message} onChange={handleChange} placeholder="Consultas o comentarios..." />
        </div>
        <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={status === 'loading'}>
          {status === 'loading' ? 'Enviando...' : 'Confirmar inscripción'}
        </button>
      </form>
    </div>
  )
}
