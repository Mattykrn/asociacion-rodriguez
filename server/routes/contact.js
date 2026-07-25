import { Router } from 'express'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DATA_DIR = path.join(__dirname, '..', 'data')
const router = Router()

function readJSON(file) {
  try { return JSON.parse(fs.readFileSync(path.join(DATA_DIR, file), 'utf-8')) }
  catch { return [] }
}

function writeJSON(file, data) {
  fs.writeFileSync(path.join(DATA_DIR, file), JSON.stringify(data, null, 2))
}

function logActivity(action, detail) {
  const logs = readJSON('activity_logs.json')
  logs.unshift({ action, detail, date: new Date().toISOString(), ip: '' })
  if (logs.length > 200) logs.length = 200
  writeJSON('activity_logs.json', logs)
}

router.post('/contact', (req, res) => {
  const { name, email, phone, message } = req.body
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Nombre, email y mensaje son obligatorios' })
  }
  logActivity('contact_form', `Mensaje de ${name} (${email}): ${message.substring(0, 100)}`)
  res.json({ success: true })
})

export default router
