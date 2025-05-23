import './App.css'
import Login from './Component/Login/Login.jsx'
import RecuperarClave from './Component/RecuperarClave/RecuperarClave.jsx'
import Menu from './Component/Menu/Menu.jsx'
import RegistrarBombero from './Component/RegistrarBombero/RegistrarBombero.jsx'
import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

const App = () => {
  const [user, setUser] = useState('')

  return (
    <Routes>
      <Route
        path="/"
        element={user ? <Menu user={user} setUser={setUser} /> : <Navigate to="/login" replace />}
      />
      <Route path="/recuperar-clave" element={<RecuperarClave />} />
      <Route path="/login" element={<Login setUser={setUser} />} />
      <Route
        path="/registrar-bombero"
        element={user ? <RegistrarBombero /> : <Navigate to="/login" replace />}
      />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  )
}

export default App
