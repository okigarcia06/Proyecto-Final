import React, { useState } from 'react'
import './Menu.css'

const Menu = ({ user, setUser }) => {
  const [seccion, setSeccion] = useState('inicio')

  const handleLogOut = () => {
    setUser('')
  }

  return (
    <div className="menu-container">
      <h1>Bienvenido</h1>
      <h2>{user}</h2>

      <div className="menu-buttons">
        <button onClick={() => setSeccion('registrarBombero')} className="btn">
          Registrar Bombero
        </button>
        <button onClick={() => setSeccion('registrarIncidente')} className="btn">
          Registrar Incidente
        </button>
      </div>

      <div className="menu-content">
        {seccion === 'inicio' && <p>Selecciona una opción del menú para comenzar.</p>}
        {seccion === 'registrarBombero' && <p>Formulario para registrar bombero (a implementar).</p>}
        {seccion === 'registrarIncidente' && <p>Formulario para registrar incidente (a implementar).</p>}
      </div>

      <button className="btn btn-danger mt-3" onClick={handleLogOut}>
        Cerrar sesión
      </button>
    </div>
  )
}

export default Menu
