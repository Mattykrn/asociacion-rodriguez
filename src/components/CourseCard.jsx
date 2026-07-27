import { useState } from 'react'

export default function CourseCard({ course, onRegister }) {
  const [showForm, setShowForm] = useState(false)

  return (
    <div className="card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
      <div style={{
        width: '3rem', height: '3rem', borderRadius: 'var(--radius)',
        background: 'rgba(30, 58, 138, 0.1)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: '1rem', color: 'var(--primary)',
      }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c0 1.1 2.7 2 6 2s6-.9 6-2v-5" />
        </svg>
      </div>
      <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.5rem' }}>
        {course.title}
      </h3>
      <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1rem', flex: 1 }}>
        {course.description}
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', marginBottom: '1.25rem', fontSize: '0.85rem', color: 'var(--text-light)' }}>
        <span><strong>Instructor:</strong> {course.instructor}</span>
        <span><strong>Horario:</strong> {course.schedule}</span>
        <span><strong>Duración:</strong> {course.duration}</span>
        <span><strong>Cupo:</strong> {course.capacity} personas</span>
      </div>
      <button className="btn btn-primary" onClick={() => setShowForm(true)} style={{ width: '100%' }}>
        Inscribirme
      </button>

      {showForm && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 2000,
          background: 'rgba(0,0,0,0.5)', display: 'flex',
          alignItems: 'center', justifyContent: 'center', padding: '1rem',
        }} onClick={() => setShowForm(false)}>
          <div onClick={e => e.stopPropagation()} style={{
            background: 'var(--white)', borderRadius: 'var(--radius-lg)',
            padding: '2rem', maxWidth: '520px', width: '100%',
            maxHeight: '90vh', overflow: 'auto', position: 'relative',
          }}>
            <button onClick={() => setShowForm(false)} style={{
              position: 'absolute', top: '1rem', right: '1rem',
              background: 'none', border: 'none', cursor: 'pointer',
              color: 'var(--text-light)', fontSize: '1.25rem',
            }} aria-label="Cerrar">&times;</button>
            {onRegister({ course, close: () => setShowForm(false) })}
          </div>
        </div>
      )}
    </div>
  )
}
