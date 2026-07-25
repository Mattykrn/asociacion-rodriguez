import { useState } from 'react'

export default function Login({ onLogin }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async e => {
    e.preventDefault()
    setError('')
    if (!username || !password) {
      setError('Completá ambos campos')
      return
    }
    setLoading(true)
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error || 'Error de autenticación')
      } else {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        localStorage.setItem('token', data.token)
        localStorage.setItem('user', JSON.stringify(data.user))
        onLogin(data.user)
      }
    } catch {
      setError('Error de conexión')
    }
    setLoading(false)
  }

  return (
    <div style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%)',
      padding: '1rem',
    }}>
      <div className="card" style={{ maxWidth: '400px', width: '100%', padding: '2.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{
            width: '3.5rem', height: '3.5rem', borderRadius: '50%',
            background: 'var(--primary)', display: 'flex', alignItems: 'center',
            justifyContent: 'center', color: 'var(--white)', fontWeight: 800,
            fontSize: '1.3rem', margin: '0 auto 1rem',
          }}>M</div>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--primary)' }}>
            Panel de Administración
          </h2>
          <p style={{ color: 'var(--text-light)', fontSize: '0.85rem' }}>
            Ingresá con tus credenciales
          </p>
        </div>

        {error && (
          <div style={{
            padding: '0.75rem 1rem', borderRadius: 'var(--radius)',
            background: 'rgba(220,38,38,0.08)', color: '#DC2626',
            fontSize: '0.85rem', marginBottom: '1rem',
          }}>{error}</div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="login-user">Usuario</label>
            <input id="login-user" value={username} onChange={e => setUsername(e.target.value)} placeholder="Nombre de usuario" autoFocus />
          </div>
          <div className="form-group">
            <label htmlFor="login-pass">Contraseña</label>
            <input id="login-pass" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" />
          </div>
          <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }} disabled={loading}>
            {loading ? 'Ingresando...' : 'Ingresar'}
          </button>
        </form>
      </div>
    </div>
  )
}
