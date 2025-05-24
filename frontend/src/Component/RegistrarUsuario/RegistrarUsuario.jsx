import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './RegistrarUsuario.css'

const RegistrarUsuario = () => {
  const [formData, setFormData] = useState({
    usuario: '',
    contrasena: ''
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData(prev => ({
      ...prev,
      [id]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Usuario enviado:', formData) // Preparado para backend
  }

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="form-usuario p-4 shadow rounded w-100" style={{ maxWidth: '500px' }}>
        <h2 className="text-white text-center mb-4">Registrar nuevo usuario</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="usuario" className="form-label">Nombre de usuario</label>
            <input
              type="text"
              className="form-control"
              id="usuario"
              required
              value={formData.usuario}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="contrasena" className="form-label">Contraseña</label>
            <input
              type="password"
              className="form-control"
              id="contrasena"
              required
              value={formData.contrasena}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-danger w-100 mb-3">Registrar Usuario</button>
          <button type="button" className="btn btn-secondary w-100" onClick={() => navigate('/')}>Volver al menú</button>
        </form>
      </div>
    </div>
  )
}

export default RegistrarUsuario
