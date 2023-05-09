import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Inicio from './views/Inicio'
import Login from './views/Login'
import Registro from './views/Registro'
import Navbar from './components/Navbar'


function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Inicio></Inicio>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/registro' element={<Registro></Registro>}></Route>    
      </Routes>
    </>
  )
}

export default App
