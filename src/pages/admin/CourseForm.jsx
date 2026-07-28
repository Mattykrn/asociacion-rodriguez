import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { supabase } from '../../lib/supabaseClient'

export default function CourseForm() {
  const { id } = useParams()
  const navigate = useNavigate()
  const isEdit = Boolean(id)
  const [form, setForm] = useState({ title: '', description: '', instructor: '', schedule: '', duration: '', capacity: '', active: true })
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    if (isEdit) loadCourse()
  }, [id])

  async function loadCourse() {
    const { data } = await supabase.from('courses').select('*').eq('id', id).single()
    if (data) setForm(data)
  }

  function handleChange(e) {
    const { name, value, type, checked } = e.target
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setSaving(true)
    if (isEdit) {
      await supabase.from('courses').update(form).eq('id', id)
    } else {
      await supabase.from('courses').insert(form)
    }
    setSaving(false)
    navigate('/admin/courses')
  }

  return (
    <div>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '2rem' }}>
        {isEdit ? 'Editar taller' : 'Nuevo taller'}
      </h1>
      <form onSubmit={handleSubmit} style={{ background: '#fff', padding: '2rem', borderRadius: '12px', border: '1px solid var(--border)', maxWidth: 640 }}>
        <div className="form-group">
          <label htmlFor="title">Título</label>
          <input id="title" name="title" value={form.title} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="description">Descripción</label>
          <textarea id="description" name="description" value={form.description} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="instructor">Instructor</label>
          <input id="instructor" name="instructor" value={form.instructor} onChange={handleChange} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div className="form-group">
            <label htmlFor="schedule">Horario</label>
            <input id="schedule" name="schedule" value={form.schedule} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="duration">Duración</label>
            <input id="duration" name="duration" value={form.duration} onChange={handleChange} />
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div className="form-group">
            <label htmlFor="capacity">Cupo</label>
            <input id="capacity" name="capacity" type="number" value={form.capacity} onChange={handleChange} />
          </div>
          <div className="form-group" style={{ display: 'flex', alignItems: 'flex-end', paddingBottom: '0.75rem' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.9rem' }}>
              <input type="checkbox" name="active" checked={form.active} onChange={handleChange} />
              Activo
            </label>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
          <button type="submit" disabled={saving} className="btn btn-primary">
            {saving ? 'Guardando...' : (isEdit ? 'Guardar cambios' : 'Crear taller')}
          </button>
          <a href="/admin/courses" className="btn" style={{ background: 'var(--bg)', color: 'var(--text)' }}>Cancelar</a>
        </div>
      </form>
    </div>
  )
}
