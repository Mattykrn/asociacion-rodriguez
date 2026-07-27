import { useState } from 'react'

export default function RegistrationForm({ course, onClose }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [error, setError] = useState('')

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    setError('')

    if (!form.name.trim() || !form.email.trim()) {
      setError('Nombre y email son obligatorios')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError('Email inválido')
      return
    }

    const text = encodeURIComponent(
      `Hola, me quiero inscribir al taller "${course.title}".\n\nNombre: ${form.name}\nEmail: ${form.email}\nTeléfono: ${form.phone || '—'}\nMensaje: ${form.message || '—'}`
    )
    window.open(`https://wa.me/543425428160?text=${text}`, '_blank')
  }