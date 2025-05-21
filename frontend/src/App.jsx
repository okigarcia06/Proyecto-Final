import './App.css'
import Formulario from './Component/Formulario/Formulario.jsx'
import Home from './Component/Home/Home.jsx'
import { useState } from 'react'
let App=()=>{

//JS
const [user, setUser] = useState([])

  return(
    
    //HTML (JSX)

    <div>
      {
        !user.length > 0
          ? <Formulario setUser={setUser}/>
          : <Home user={user} setUser={setUser}/>
      }
    </div>
    

  )
}

export default App
