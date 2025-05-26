// FRONTEND - Login.jsx
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'

const Login = ({ setUser, user }) => {
  const [usuario, setUsuario] = useState('')
  const [contrasena, setContrasena] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    if (user) navigate('/')
  }, [user])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('https://TU_BACKEND_URL/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ usuario, contrasena })
      })

      const data = await response.json()

      if (response.ok) {
        setUser(data.usuario)
        navigate('/')
      } else {
        alert(data.error || 'Credenciales incorrectas')
      }
    } catch (error) {
      console.error('Error en el login:', error)
      alert('Error al intentar iniciar sesión')
    }
  }

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100 login-bg">
      <div className="form-login p-4 shadow rounded text-center w-100" style={{ maxWidth: '600px' }}>
        <img src="/img/logo-bomberos.png" alt="Logo BomberOS" className="logo-bomberos mb-3" />
        <h2 className="text-black mb-4">Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 text-start">
            <label htmlFor="usuario" className="form-label">Usuario</label>
            <input type="text" className="form-control" id="usuario" required value={usuario} onChange={e => setUsuario(e.target.value)} />
          </div>
          <div className="mb-3 text-start">
            <label htmlFor="contrasena" className="form-label">Contraseña</label>
            <input type="password" className="form-control" id="contrasena" required value={contrasena} onChange={e => setContrasena(e.target.value)} />
          </div>
          <button type="submit" className="btn btn-danger w-100">Ingresar</button>
        </form>
      </div>
    </div>
  )
}

export default Login

// BACKEND - Ruta login
// En tu archivo index.js o loginRoutes.js
app.post('/api/login', async (req, res) => {
  const { usuario, contrasena } = req.body
  try {
    const [rows] = await pool.query('SELECT * FROM usuarios WHERE usuario = ? AND contrasena = ?', [usuario, contrasena])

    if (rows.length > 0) {
      res.json({ usuario: rows[0].usuario })
    } else {
      res.status(401).json({ error: 'Credenciales incorrectas' })
    }
  } catch (error) {
    console.error('Error al validar usuario:', error)
    res.status(500).json({ error: 'Error interno del servidor' })
  }
})
