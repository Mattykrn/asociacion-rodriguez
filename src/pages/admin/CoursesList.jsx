import { Link } from 'react-router-dom'
import { useSupabaseQuery } from '../../hooks/useSupabaseQuery'

export default function CoursesList() {
  const { data: courses, loading } = useSupabaseQuery('courses', {
    orderBy: { column: 'created_at', ascending: false },
  })

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary)' }}>Talleres</h1>
        <Link to="/admin/courses/new" className="btn btn-primary" style={{ fontSize: '0.85rem', padding: '0.6rem 1.25rem' }}>
          + Nuevo taller
        </Link>
      </div>
      {loading ? (
        <p style={{ color: 'var(--text-light)' }}>Cargando...</p>
      ) : (
        <div style={{ background: '#fff', borderRadius: '12px', border: '1px solid var(--border)', overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: 'var(--bg)', fontSize: '0.8rem', color: 'var(--text-light)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                <th style={{ padding: '0.75rem 1rem', textAlign: 'left' }}>Título</th>
                <th style={{ padding: '0.75rem 1rem', textAlign: 'left' }}>Instructor</th>
                <th style={{ padding: '0.75rem 1rem', textAlign: 'left' }}>Activo</th>
                <th style={{ padding: '0.75rem 1rem', textAlign: 'right' }}>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {courses.map(course => (
                <tr key={course.id} style={{ borderTop: '1px solid var(--border)', fontSize: '0.9rem' }}>
                  <td style={{ padding: '0.75rem 1rem', fontWeight: 600 }}>{course.title}</td>
                  <td style={{ padding: '0.75rem 1rem', color: 'var(--text-light)' }}>{course.instructor}</td>
                  <td style={{ padding: '0.75rem 1rem' }}>
                    <span style={{ color: course.active ? '#10B981' : '#EF4444' }}>{course.active ? 'Sí' : 'No'}</span>
                  </td>
                  <td style={{ padding: '0.75rem 1rem', textAlign: 'right' }}>
                    <Link to={`/admin/courses/${course.id}/edit`} style={{ color: 'var(--primary)', fontSize: '0.85rem' }}>Editar</Link>
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
