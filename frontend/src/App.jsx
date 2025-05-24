import './App.css'
import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './Component/Login/Login.jsx'
import RecuperarClave from './Component/RecuperarClave/RecuperarClave.jsx'
import RutaPrivada from './Component/RutaPrivada/RutaPrivada.jsx'
import Menu from './Component/Menu/Menu.jsx'
import RegistrarBombero from './Component/RegistrarBombero/RegistrarBombero.jsx'
import CargarIncidente from './Component/CargarIncidente/CargarIncidente.jsx'
import RegistrarRol from './Component/RegistrarRol/RegistrarRol.jsx'
import RegistrarUsuario from './Component/RegistrarUsuario/RegistrarUsuario.jsx'
import AccidenteTransito from './Component/AccidenteTransito/AccidenteTransito.jsx'
import FactorClimatico from './Component/FactorClimatico/FactorClimatico.jsx'
import IncendioEstructural from './Component/IncendioEstructural/IncendioEstructural.jsx'

const App = () => {
  const [user, setUser] = useState('')

  return (
    <Routes>
      <Route path="/login" element={<Login setUser={setUser} user={user}/>} />
      <Route path="/recuperar-clave" element={<RecuperarClave />} />
      <Route path="/"element={<RutaPrivada user={user}><Menu user={user} setUser={setUser} /></RutaPrivada>} />
      <Route path="/"element={user ? <Menu user={user} setUser={setUser} /> : <Navigate to="/login" replace />} />
      <Route path="/registrar-bombero" element={<RutaPrivada user={user}> <RegistrarBombero /></RutaPrivada>} />
      <Route path="/cargar-incidente"element={<RutaPrivada user={user}><CargarIncidente /></RutaPrivada>} />
      <Route path="/registrar-rol" element={<RutaPrivada user={user}><RegistrarRol /></RutaPrivada>} />
      <Route path="/registrar-usuario" element={<RutaPrivada user={user}><RegistrarUsuario /></RutaPrivada>} />
      <Route path="/accidente-transito" element={<RutaPrivada user={user}><AccidenteTransito /></RutaPrivada> } />
      <Route path="/factor-climatico" element={<RutaPrivada user={user}><FactorClimatico /></RutaPrivada>} />
      <Route path="/incendio-estructural" element={<RutaPrivada user={user}><IncendioEstructural /></RutaPrivada>} />
      
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  )
}

export default App
