import { readFileSync, writeFileSync, existsSync, mkdirSync, copyFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const DATA_DIR = join(__dirname, '..', 'data')
const BACKUP_DIR = join(__dirname, '..', 'backups')

export function readJSON(filename) {
  const path = join(DATA_DIR, filename)
  if (!existsSync(path)) return []
  return JSON.parse(readFileSync(path, 'utf-8'))
}

export function writeJSON(filename, data) {
  const path = join(DATA_DIR, filename)
  backup(filename)
  writeFileSync(path, JSON.stringify(data, null, 2), 'utf-8')
}

function backup(filename) {
  if (!existsSync(BACKUP_DIR)) mkdirSync(BACKUP_DIR, { recursive: true })
  const src = join(DATA_DIR, filename)
  if (!existsSync(src)) return
  const ts = new Date().toISOString().replace(/[:.]/g, '-')
  copyFileSync(src, join(BACKUP_DIR, `${filename}.${ts}.bak`))
}

export function logActivity(user, action, detail = '') {
  const logs = readJSON('activity_logs.json')
  logs.push({
    id: logs.length + 1,
    user: user?.username || 'anonymous',
    userName: user?.name || 'Anónimo',
    role: user?.role || 'public',
    action,
    detail,
    timestamp: new Date().toISOString(),
  })
  writeJSON('activity_logs.json', logs)
}
