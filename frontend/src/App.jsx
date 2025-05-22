import './App.css'
import Login from './Component/Login/Login.jsx'
import Menu from './Component/Menu/Menu.jsx'
import { useState } from 'react'

const App = () => {
  const [user, setUser] = useState('')

  return (
    <div>
      {user ? <Menu user={user} setUser={setUser} /> : <Login setUser={setUser} />}
    </div>
  )
}

export default App
