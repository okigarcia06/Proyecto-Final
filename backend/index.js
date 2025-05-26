import express from 'express'
import cors from 'cors'
import pool from './db.js'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

// Ruta para login
app.post('/yamabiko.proxy.rlwy.net/login', async (req, res) => {
  const { usuario, contrasena } = req.body

  if (!usuario || !contrasena) {
    return res.status(400).json({ error: 'Faltan campos requeridos' })
  }

  try {
    const [rows] = await pool.query(
      'SELECT * FROM login WHERE usuario = ? AND contrasena = ?',
      [usuario, contrasena]
    )

    if (rows.length > 0) {
      res.json({ success: true, usuario: rows[0] })
    } else {
      res.status(401).json({ success: false, error: 'Credenciales incorrectas' })
    }
  } catch (error) {
    console.error('Error en login:', error)
    res.status(500).json({ error: 'Error interno del servidor' })
  }
})

// Ruta de prueba
app.get('/yamabiko.proxy.rlwy.net/login', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM login')
    res.json(rows)
  } catch (error) {
    console.error('Error al consultar login:', error)
    res.status(500).json({ error: 'Error al obtener login' })
  }
})

app.listen(PORT, () => {
  console.log(`Servidor backend escuchando en http://localhost:${PORT}`)
})
