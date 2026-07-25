import { Router } from 'express'
import bcrypt from 'bcryptjs'
import { readJSON, logActivity } from '../middleware/db.js'
import { generateToken, verifyToken } from '../middleware/auth.js'

const router = Router()

router.post('/login', (req, res) => {
  const { username, password } = req.body
  if (!username || !password) {
    return res.status(400).json({ error: 'Usuario y contraseña requeridos' })
  }

  const users = readJSON('users.json')
  const user = users.find(u => u.username === username)

  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ error: 'Credenciales inválidas' })
  }

  const token = generateToken(user)
  logActivity(user, 'LOGIN', `Inicio de sesión exitoso`)
  res.json({ token, user: { id: user.id, username: user.username, role: user.role, name: user.name } })
})

router.get('/me', verifyToken, (req, res) => {
  res.json({ user: req.user })
})

export default router
