import React from 'react'
import ReactDOM from 'react-dom/client'
import { Login } from './Login'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Login 
      title={"Hola!! esto es el primer titulo del proyecto Portal de empleos"} 
      subTitle={"Primer contenido del Portal de Empleos"} 
    />
  </React.StrictMode>,
)
