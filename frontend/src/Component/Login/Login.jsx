import React, { useState } from 'react'
import RecuperarClave from '../RecuperarClave/RecuperarClave'
import './Login.css'

const Login = () => {
  const [usuario, setUsuario] = useState('')
  const [contrasena, setContrasena] = useState('')
  const [mostrarRecuperar, setMostrarRecuperar] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (usuario === '123' && contrasena === '123') {
      window.location.href = `dashboard.html?usuario=${encodeURIComponent(usuario)}`;
    } else {
      alert('Usuario o contraseña incorrectos.')
    }
  }

  if (mostrarRecuperar) {
    return <RecuperarClave volver={() => setMostrarRecuperar(false)} />
  }

  return (
    <div className="login-container d-flex justify-content-center align-items-center vh-100">
      <div className="form-login p-4 shadow rounded text-center">
        <img
          src="/img/logo-bomberos.png"
          alt="Logo BomberOS"
          className="logo-bomberos mb-3"
        />
        <h2 className="text-black mb-4">Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 text-start">
            <label htmlFor="usuario" className="form-label">
              Usuario
            </label>
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
          <div className="mb-3 text-start">
            <label htmlFor="contrasena" className="form-label">
              Contraseña
            </label>
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
              onClick={() => setMostrarRecuperar(true)}>
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
