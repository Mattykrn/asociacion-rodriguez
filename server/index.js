import express from 'express'
import cors from 'cors'
import authRoutes from './routes/auth.js'
import registrationRoutes from './routes/registrations.js'
import salesRoutes from './routes/sales.js'

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors({ origin: ['http://localhost:5173', 'http://localhost:4173'] }))
app.use(express.json())

app.use('/api/auth', authRoutes)
app.use('/api', registrationRoutes)
app.use('/api/sales', salesRoutes)

app.get('/api/health', (_req, res) => res.json({ status: 'ok' }))

app.listen(PORT, () => {
  console.log(`Servidor API corriendo en http://localhost:${PORT}`)
})
