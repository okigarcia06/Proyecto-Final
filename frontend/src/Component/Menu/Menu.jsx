import React, { useState } from 'react'
import './Menu.css'
import { useNavigate } from 'react-router-dom'

const Menu = ({ user, setUser }) => {
  const [seccion, setSeccion] = useState('inicio')
  const navigate = useNavigate()

  const handleLogOut = () => {
    setUser('')
    navigate('/login')
  }

  return (
    <div className="menu-container">
      <h1>Bienvenido</h1>
      <h2>{user}</h2>

      <div className="menu-buttons">
        <button
          onClick={() => navigate('/registrar-bombero')}
          className="btn">
          Registrar Bombero
        </button>

        <button
          onClick={() => navigate('/cargar-incidente')}
          className="btn">
          Cargar Incidente
        </button>

        <button
          onClick={() => navigate('/registrar-rol')}
          className="btn">
          Registrar Rol
        </button>
        
      </div>

      <div className="menu-content">
        {seccion === 'inicio' && <p>Selecciona una opción del menú para comenzar.</p>}
        {seccion === 'registrarIncidente' && <p>Formulario para registrar incidente (a implementar).</p>}
      </div>

      <button className="btn btn-danger mt-3" onClick={handleLogOut}>
        Cerrar sesión
      </button>
    </div>
  )
}

export default Menu
