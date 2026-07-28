import { useAuth } from '../../hooks/useAuth'

export default function Dashboard() {
  const { profile } = useAuth()

  return (
    <div>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '0.5rem' }}>
        Dashboard
      </h1>
      <p style={{ color: 'var(--text-light)', marginBottom: '2rem' }}>
        Bienvenido, {profile?.full_name || 'administrador'}. Acá podés gestionar todos los contenidos del sitio.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
        {[
          { label: 'Talleres', count: '—', to: '/admin/courses' },
          { label: 'Productos', count: '—', to: '/admin/products' },
          { label: 'Testimonios', count: '—', to: '/admin/testimonials' },
          { label: 'Noticias', count: '—', to: '/admin/news' },
        ].map(({ label, count, to }) => (
          <a key={label} href={to} style={{
            background: '#fff', borderRadius: '12px', padding: '1.5rem',
            border: '1px solid var(--border)', textDecoration: 'none',
            transition: 'box-shadow 0.3s',
          }}>
            <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--primary)' }}>{count}</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}>{label}</div>
          </a>
        ))}
      </div>
    </div>
  )
}
