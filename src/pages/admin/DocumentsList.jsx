import { useSupabaseQuery } from '../../hooks/useSupabaseQuery'

export default function DocumentsList() {
  const { data: documents, loading } = useSupabaseQuery('documents', {
    orderBy: { column: 'published_at', ascending: false },
  })

  return (
    <div>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '2rem' }}>Documentos</h1>
      {loading ? (
        <p style={{ color: 'var(--text-light)' }}>Cargando...</p>
      ) : (
        <div style={{ background: '#fff', borderRadius: '12px', border: '1px solid var(--border)', overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: 'var(--bg)', fontSize: '0.8rem', color: 'var(--text-light)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                <th style={{ padding: '0.75rem 1rem', textAlign: 'left' }}>Título</th>
                <th style={{ padding: '0.75rem 1rem', textAlign: 'left' }}>Tipo</th>
                <th style={{ padding: '0.75rem 1rem', textAlign: 'left' }}>Fecha</th>
              </tr>
            </thead>
            <tbody>
              {documents.map(doc => (
                <tr key={doc.id} style={{ borderTop: '1px solid var(--border)', fontSize: '0.9rem' }}>
                  <td style={{ padding: '0.75rem 1rem', fontWeight: 600 }}>{doc.title}</td>
                  <td style={{ padding: '0.75rem 1rem', color: 'var(--text-light)', textTransform: 'capitalize' }}>{doc.type}</td>
                  <td style={{ padding: '0.75rem 1rem', color: 'var(--text-light)' }}>
                    {new Date(doc.published_at).toLocaleDateString()}
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
