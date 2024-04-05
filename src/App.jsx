import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Menu from './Components/Menu/Menu.jsx'
import './App.css'
import Cartcard from './Components/CartValue/Cartcard.jsx'

function App() {
  return (
   <>
   <div>
    <Menu/>
    <Cartcard/>
   </div>
   </>
  )
}

export default App
