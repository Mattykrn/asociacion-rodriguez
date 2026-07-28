import { useSupabaseQuery } from '../../hooks/useSupabaseQuery'

export default function NewsList() {
  const { data: news, loading } = useSupabaseQuery('news', {
    orderBy: { column: 'published_at', ascending: false },
  })

  return (
    <div>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '2rem' }}>Noticias</h1>
      {loading ? (
        <p style={{ color: 'var(--text-light)' }}>Cargando...</p>
      ) : (
        <div style={{ background: '#fff', borderRadius: '12px', border: '1px solid var(--border)', overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: 'var(--bg)', fontSize: '0.8rem', color: 'var(--text-light)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                <th style={{ padding: '0.75rem 1rem', textAlign: 'left' }}>Título</th>
                <th style={{ padding: '0.75rem 1rem', textAlign: 'left' }}>Publicado</th>
                <th style={{ padding: '0.75rem 1rem', textAlign: 'left' }}>Fecha</th>
              </tr>
            </thead>
            <tbody>
              {news.map(item => (
                <tr key={item.id} style={{ borderTop: '1px solid var(--border)', fontSize: '0.9rem' }}>
                  <td style={{ padding: '0.75rem 1rem', fontWeight: 600 }}>{item.title}</td>
                  <td style={{ padding: '0.75rem 1rem' }}>
                    <span style={{ color: item.published ? '#10B981' : '#EF4444' }}>{item.published ? 'Sí' : 'No'}</span>
                  </td>
                  <td style={{ padding: '0.75rem 1rem', color: 'var(--text-light)' }}>
                    {item.published_at ? new Date(item.published_at).toLocaleDateString() : '—'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
