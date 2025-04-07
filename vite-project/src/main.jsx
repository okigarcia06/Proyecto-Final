import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import Header from './Component/Header/Header.jsx'
import Login from './Component/Login/Login.jsx'
import Footer from './Component/Footer/Footer.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Login />
    <Footer />
    <App />
  </StrictMode>,
)
