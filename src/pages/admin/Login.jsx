import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../../lib/supabaseClient'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  async function handleLogin(e) {
    e.preventDefault()
    setError('')
    setLoading(true)

    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) {
      setError(error.message)
      setLoading(false)
      return
    }
    navigate('/admin')
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', background: 'var(--bg)' }}>
      <div style={{ background: '#fff', padding: '3rem', borderRadius: '16px', boxShadow: '0 4px 24px rgba(0,0,0,0.06)', width: '100%', maxWidth: 400 }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ width: '3rem', height: '3rem', background: 'var(--primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: '1.2rem', margin: '0 auto 1rem' }}>M</div>
          <h1 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--primary)' }}>Acceso Administrativo</h1>
        </div>
        {error && (
          <div style={{ padding: '0.75rem', background: 'rgba(220,38,38,0.08)', color: '#DC2626', borderRadius: '8px', fontSize: '0.85rem', marginBottom: '1rem' }}>{error}</div>
        )}
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="admin-email">Correo electrónico</label>
            <input id="admin-email" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="admin@asociacion.com" required />
          </div>
          <div className="form-group">
            <label htmlFor="admin-password">Contraseña</label>
            <input id="admin-password" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" required />
          </div>
          <button type="submit" disabled={loading} className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
            {loading ? 'Ingresando...' : 'Ingresar'}
          </button>
        </form>
      </div>
    </div>
  )
}
