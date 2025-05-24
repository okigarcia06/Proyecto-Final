import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import RecuperarClave from '../RecuperarClave/RecuperarClave'
import '../DiseñoFormulario/DiseñoFormulario.css'
import './Login.css'

const Login = ({ setUser, user }) => {
  const [usuario, setUsuario] = useState('')
  const [contrasena, setContrasena] = useState('')
  const [mostrarRecuperar, setMostrarRecuperar] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (user) navigate('/')
  }, [user])

  const resetForm = () => {
    setUsuario('')
    setContrasena('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (usuario === '123' && contrasena === '123') {
      setUser(usuario)
      resetForm()
    } else {
      alert('Usuario o contraseña incorrectos')
      resetForm()
    }
  }

  if (mostrarRecuperar) {
    return (
      <RecuperarClave
        volver={() => {
          resetForm()
          setMostrarRecuperar(false)
        }}
      />
    )
  }

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-white py-5">
      <div className="form-abm w-100 shadow rounded p-4" style={{ maxWidth: '600px' }}>
        <div className="form-header">
          <img src="/img/logo-formularios.png" alt="Logo" />
          <h2>Iniciar Sesión</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="usuario" className="form-label">Usuario</label>
            <input
              type="text"
              className="form-control"
              id="usuario"
              placeholder="Ingrese su usuario"
              required
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="contrasena" className="form-label">Contraseña</label>
            <input
              type="password"
              className="form-control"
              id="contrasena"
              placeholder="Ingrese su contraseña"
              required
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
            />
          </div>
          <div className="mb-3 text-start">
            <button
              type="button"
              className="btn btn-link recuperar-link p-0"
              onClick={() => navigate('/recuperar-clave')}>
              Recuperar contraseña
            </button>
          </div>
          <button type="submit" className="btn btn-danger w-100">
            Ingresar
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
