import { useState } from 'react'
import ContactInfo from '../components/ContactInfo'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setError('')
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Nombre, email y mensaje son obligatorios')
      return
    }
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Error al enviar')
      setStatus('success')
      setForm({ name: '', email: '', phone: '', message: '' })
    } catch {
      setError('Error de conexión. Intentalo de nuevo.')
      setStatus('idle')
    }
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Contacto</h1>
          <p>Estamos a tu disposición. Comunicate con nosotros por cualquier vía.</p>
        </div>
      </section>

      <ContactInfo />

      <section className="section section-warm">
        <div className="container">
          <div className="grid-2">
            <div>
              <div className="tag">Escribinos</div>
              <div className="accent-line" />
              <h2 className="section-title">Formulario de contacto</h2>
              <p className="section-subtitle">Dejanos tu mensaje y te responderemos a la brevedad.</p>

              {status === 'success' ? (
                <div className="card" style={{ textAlign: 'center', padding: '2rem' }}>
                  <div style={{ width: '3rem', height: '3rem', borderRadius: '50%', background: 'rgba(37,211,102,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  </div>
                  <h3 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Mensaje enviado</h3>
                  <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>Te responderemos a la brevedad.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {error && (
                    <div style={{ padding: '0.75rem 1rem', borderRadius: 'var(--radius)', background: 'rgba(220,38,38,0.08)', color: '#DC2626', fontSize: '0.85rem', marginBottom: '1rem' }}>{error}</div>
                  )}
                  <div className="form-group">
                    <label htmlFor="name">Nombre completo</label>
                    <input type="text" id="name" name="name" value={form.name} onChange={handleChange} placeholder="Tu nombre" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Correo electrónico</label>
                    <input type="email" id="email" name="email" value={form.email} onChange={handleChange} placeholder="tu@correo.com" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Teléfono (opcional)</label>
                    <input type="tel" id="phone" name="phone" value={form.phone} onChange={handleChange} placeholder="+54 342 ..." />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Mensaje</label>
                    <textarea id="message" name="message" value={form.message} onChange={handleChange} placeholder="Escribí tu mensaje aquí..." />
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={status === 'loading'}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2 11 13"/><path d="M22 2l-7 20-4-9-9-4 20-7z"/></svg>
                    {status === 'loading' ? 'Enviando...' : 'Enviar mensaje'}
                  </button>
                </form>
              )}
            </div>
            <div>
              <div className="tag">Respuesta Rápida</div>
              <div className="accent-line" />
              <h2 className="section-title">Escribinos por WhatsApp</h2>
              <p className="section-subtitle">
                Te respondemos a la brevedad. Consultanos tus inquietudes o pedí más información.
              </p>
              <div className="card" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
                <div style={{
                  width: '4rem', height: '4rem',
                  background: 'rgba(37, 211, 102, 0.1)',
                  borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-1.102-1.025-1.847-2.29-2.063-2.677-.216-.387-.023-.597.163-.79.167-.173.373-.447.56-.671.187-.223.249-.387.373-.645.125-.258.063-.483-.03-.675-.092-.193-.67-1.612-.918-2.208-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.199 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.87.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.5rem' }}>
                  Chateá con nosotros
                </h3>
                <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                  Respuesta rápida. Consultanos tus inquietudes.
                </p>
                <a
                  href="https://wa.me/543425428160"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                  style={{ fontSize: '1.05rem', padding: '1rem 2.5rem' }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-1.102-1.025-1.847-2.29-2.063-2.677-.216-.387-.023-.597.163-.79.167-.173.373-.447.56-.671.187-.223.249-.387.373-.645.125-.258.063-.483-.03-.675-.092-.193-.67-1.612-.918-2.208-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.199 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.87.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  +54 342 542-8160
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
