import { useSupabaseQuery } from '../../hooks/useSupabaseQuery'

export default function TestimonialsList() {
  const { data: testimonials, loading } = useSupabaseQuery('testimonials', {
    orderBy: { column: 'sort_order', ascending: true },
  })

  return (
    <div>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '2rem' }}>Testimonios</h1>
      {loading ? (
        <p style={{ color: 'var(--text-light)' }}>Cargando...</p>
      ) : (
        <div style={{ background: '#fff', borderRadius: '12px', border: '1px solid var(--border)', overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: 'var(--bg)', fontSize: '0.8rem', color: 'var(--text-light)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                <th style={{ padding: '0.75rem 1rem', textAlign: 'left' }}>Nombre</th>
                <th style={{ padding: '0.75rem 1rem', textAlign: 'left' }}>Testimonio</th>
                <th style={{ padding: '0.75rem 1rem', textAlign: 'left' }}>Destacado</th>
              </tr>
            </thead>
            <tbody>
              {testimonials.map(t => (
                <tr key={t.id} style={{ borderTop: '1px solid var(--border)', fontSize: '0.9rem' }}>
                  <td style={{ padding: '0.75rem 1rem', fontWeight: 600 }}>{t.student_name}</td>
                  <td style={{ padding: '0.75rem 1rem', color: 'var(--text-light)', maxWidth: 300, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{t.quote}</td>
                  <td style={{ padding: '0.75rem 1rem' }}>
                    <span style={{ color: t.featured ? '#10B981' : '#9CA3AF' }}>{t.featured ? 'Sí' : 'No'}</span>
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
