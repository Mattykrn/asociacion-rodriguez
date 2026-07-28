import { useSupabaseQuery } from '../../hooks/useSupabaseQuery'

export default function ProductsList() {
  const { data: products, loading } = useSupabaseQuery('products', {
    orderBy: { column: 'created_at', ascending: false },
  })

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary)' }}>Productos</h1>
        <span style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}>Próximamente: carga de productos</span>
      </div>
      {loading ? (
        <p style={{ color: 'var(--text-light)' }}>Cargando...</p>
      ) : (
        <div style={{ background: '#fff', borderRadius: '12px', border: '1px solid var(--border)', overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: 'var(--bg)', fontSize: '0.8rem', color: 'var(--text-light)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                <th style={{ padding: '0.75rem 1rem', textAlign: 'left' }}>Título</th>
                <th style={{ padding: '0.75rem 1rem', textAlign: 'left' }}>Precio</th>
                <th style={{ padding: '0.75rem 1rem', textAlign: 'left' }}>Destacado</th>
              </tr>
            </thead>
            <tbody>
              {products.map(product => (
                <tr key={product.id} style={{ borderTop: '1px solid var(--border)', fontSize: '0.9rem' }}>
                  <td style={{ padding: '0.75rem 1rem', fontWeight: 600 }}>{product.title}</td>
                  <td style={{ padding: '0.75rem 1rem', color: 'var(--text-light)' }}>
                    {product.price ? `$${product.price}` : '—'}
                  </td>
                  <td style={{ padding: '0.75rem 1rem' }}>
                    <span style={{ color: product.featured ? '#10B981' : '#9CA3AF' }}>{product.featured ? 'Sí' : 'No'}</span>
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
