import './App.css'
import Login from './Component/Login/Login.jsx'
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
          ? <Login setUser={setUser}/>
          : <Home user={user} setUser={setUser}/>
      }
    </div>
    

  )
}

export default App
