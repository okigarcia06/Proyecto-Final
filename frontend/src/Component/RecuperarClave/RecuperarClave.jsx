import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './RecuperarClave.css'

const RecuperarClave = () => {
  const [email, setEmail] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    // Lógica de backend para enviar correo
    alert(`Se envió un correo a: ${email}`)
  }

  return (
    <div className="login-container d-flex justify-content-center align-items-center vh-100">
      <div className="form-login p-4 shadow rounded text-center">
        <img
          src="/img/logo-bomberos.png"
          alt="Logo BomberOS"
          className="logo-bomberos mb-3"
        />
        <h2 className="text-black mb-4">Recuperar Contraseña</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 text-start">
            <label htmlFor="email" className="form-label">Correo electrónico</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Ingrese su correo"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-danger w-100">Enviar</button>
          <div className="mt-3 text-center">
            <button
              type="button"
              onClick={() => navigate('/login')}
              className="recuperar-link btn btn-link">
              Volver al login
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RecuperarClave
