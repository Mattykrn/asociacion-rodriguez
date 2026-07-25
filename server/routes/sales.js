import { Router } from 'express'
import XLSX from 'xlsx'
import { readJSON, writeJSON, logActivity } from '../middleware/db.js'
import { verifyToken, requireRole } from '../middleware/auth.js'

const router = Router()

router.get('/', verifyToken, requireRole('admin', 'gestor'), (req, res) => {
  const sales = readJSON('sales.json')
  logActivity(req.user, 'VIEW_SALES', 'Vió lista de ventas')
  res.json(sales)
})

router.post('/', verifyToken, requireRole('admin', 'gestor'), (req, res) => {
  const { item, quantity, amount, customer, notes } = req.body

  if (!item || !amount || amount <= 0) {
    return res.status(400).json({ error: 'Item y monto son obligatorios' })
  }

  const sales = readJSON('sales.json')
  const sale = {
    id: sales.length + 1,
    item,
    quantity: quantity || 1,
    amount: parseFloat(amount),
    customer: customer || '',
    notes: notes || '',
    registeredBy: req.user?.name || 'admin',
    createdAt: new Date().toISOString(),
  }

  sales.push(sale)
  writeJSON('sales.json', sales)
  logActivity(req.user, 'CREATE_SALE', `Venta: ${item} $${amount}`)

  res.status(201).json({ success: true, sale })
})

router.delete('/:id', verifyToken, requireRole('admin'), (req, res) => {
  let sales = readJSON('sales.json')
  const idx = sales.findIndex(s => s.id === parseInt(req.params.id))
  if (idx === -1) return res.status(404).json({ error: 'Venta no encontrada' })
  sales.splice(idx, 1)
  writeJSON('sales.json', sales)
  logActivity(req.user, 'DELETE_SALE', `Eliminó venta #${req.params.id}`)
  res.json({ success: true })
})

router.get('/summary', verifyToken, requireRole('admin', 'gestor'), (req, res) => {
  const sales = readJSON('sales.json')
  const total = sales.reduce((sum, s) => sum + s.amount, 0)
  const byMonth = {}
  sales.forEach(s => {
    const month = s.createdAt.slice(0, 7)
    byMonth[month] = (byMonth[month] || 0) + s.amount
  })
  res.json({ total, count: sales.length, byMonth })
})

router.get('/export', verifyToken, requireRole('admin', 'gestor'), (req, res) => {
  const sales = readJSON('sales.json')

  const wb = XLSX.utils.book_new()
  const data = sales.map(s => ({
    ID: s.id,
    Item: s.item,
    Cantidad: s.quantity,
    Monto: s.amount,
    Cliente: s.customer,
    Notas: s.notes,
    Registrado: s.registeredBy,
    Fecha: s.createdAt,
  }))

  const ws = XLSX.utils.json_to_sheet(data)
  ws['!cols'] = [
    { wch: 5 }, { wch: 30 }, { wch: 10 },
    { wch: 12 }, { wch: 25 }, { wch: 30 },
    { wch: 20 }, { wch: 25 },
  ]

  XLSX.utils.book_append_sheet(wb, ws, 'Ventas')

  const summary = readJSON('sales.json')
  const total = summary.reduce((s, v) => s + v.amount, 0)
  const summaryRow = { ID: '', Item: 'TOTAL GENERAL', Cantidad: '', Monto: total, Cliente: '', Notas: '', Registrado: '', Fecha: '' }
  XLSX.utils.sheet_add_json(ws, [summaryRow], { skipHeader: true, origin: { r: data.length + 1, c: 0 } })

  const buf = XLSX.write(wb, { type: 'buffer', bookType: 'xlsx' })

  logActivity(req.user, 'EXPORT_SALES', 'Exportó ventas a Excel')
  res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
  res.setHeader('Content-Disposition', `attachment; filename=ventas_${new Date().toISOString().slice(0, 10)}.xlsx`)
  res.send(buf)
})

export default router
