import { useState } from 'react'

export default function RegistrationForm({ course, onClose: _onClose }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [error, setError] = useState('')

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
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

    const text = encodeURIComponent(
      `Hola, me quiero inscribir al taller "${course.title}".\n\nNombre: ${form.name}\nEmail: ${form.email}\nTeléfono: ${form.phone || '—'}\nMensaje: ${form.message || '—'}`
    )
    window.open(`https://wa.me/543425428160?text=${text}`, '_blank')
  }

  return (
    <div>
      <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.25rem' }}>
        Inscripción: {course.title}
      </h3>
      <p style={{ color: 'var(--text-light)', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
        Completá tus datos y te contactamos por WhatsApp para confirmar tu lugar.
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
        <button type="submit" className="btn btn-whatsapp" style={{ width: '100%' }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-1.102-1.025-1.847-2.29-2.063-2.677-.216-.387-.023-.597.163-.79.167-.173.373-.447.56-.671.187-.223.249-.387.373-.645.125-.258.063-.483-.03-.675-.092-.193-.67-1.612-.918-2.208-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.199 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.87.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          Inscribirme por WhatsApp
        </button>
      </form>
    </div>
  )
}