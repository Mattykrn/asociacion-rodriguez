import { Router } from 'express'
import { readJSON, writeJSON, logActivity } from '../middleware/db.js'
import { verifyToken, requireRole } from '../middleware/auth.js'

const router = Router()

router.get('/courses', (_req, res) => {
  const courses = readJSON('courses.json')
  res.json(courses.filter(c => c.active))
})

router.post('/register', (req, res) => {
  const { courseId, name, email, phone, message } = req.body

  if (!courseId || !name || !email) {
    return res.status(400).json({ error: 'Nombre, email y curso son obligatorios' })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Email inválido' })
  }

  const courses = readJSON('courses.json')
  const course = courses.find(c => c.id === courseId && c.active)
  if (!course) {
    return res.status(404).json({ error: 'Curso no encontrado' })
  }

  const registrations = readJSON('registrations.json')

  const duplicate = registrations.find(r => r.email === email && r.courseId === courseId)
  if (duplicate) {
    return res.status(409).json({ error: 'Ya estás inscripto en este curso' })
  }

  if (course.capacity) {
    const count = registrations.filter(r => r.courseId === courseId).length
    if (count >= course.capacity) {
      return res.status(400).json({ error: 'Cupo completo para este curso' })
    }
  }

  const registration = {
    id: registrations.length + 1,
    courseId,
    courseName: course.title,
    name,
    email,
    phone: phone || '',
    message: message || '',
    status: 'pendiente',
    createdAt: new Date().toISOString(),
  }

  registrations.push(registration)
  writeJSON('registrations.json', registrations)
  logActivity(null, 'REGISTRATION', `${name} se inscribió en ${course.title}`)

  res.status(201).json({ success: true, registration })
})

router.get('/registrations', verifyToken, requireRole('admin', 'gestor'), (req, res) => {
  const registrations = readJSON('registrations.json')
  logActivity(req.user, 'VIEW_REGISTRATIONS', 'Vió lista de inscripciones')
  res.json(registrations)
})

router.put('/registrations/:id', verifyToken, requireRole('admin', 'gestor'), (req, res) => {
  const registrations = readJSON('registrations.json')
  const idx = registrations.findIndex(r => r.id === parseInt(req.params.id))
  if (idx === -1) return res.status(404).json({ error: 'Inscripción no encontrada' })

  registrations[idx] = { ...registrations[idx], ...req.body }
  writeJSON('registrations.json', registrations)
  logActivity(req.user, 'UPDATE_REGISTRATION', `Actualizó inscripción #${req.params.id}`)

  res.json(registrations[idx])
})

router.delete('/registrations/:id', verifyToken, requireRole('admin'), (req, res) => {
  let registrations = readJSON('registrations.json')
  const idx = registrations.findIndex(r => r.id === parseInt(req.params.id))
  if (idx === -1) return res.status(404).json({ error: 'Inscripción no encontrada' })

  registrations.splice(idx, 1)
  writeJSON('registrations.json', registrations)
  logActivity(req.user, 'DELETE_REGISTRATION', `Eliminó inscripción #${req.params.id}`)

  res.json({ success: true })
})

export default router
