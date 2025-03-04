import React from 'react'
import { Routes, Route } from "react-router-dom"
import Loginn from './Pages/Loginn'
import Homee from './Pages/Homee'
import Restaurants from './Pages/Restaurants'

function App() {
  return (
    <div>
      <Routes>
        
        <Route path="/home" element={ <Homee/> } /> 
        <Route path="/resto" element={<Restaurants/>}/>
        <Route path="/userlogin" element={ <Loginn/> } /> 
      </Routes>
    </div>
  )
}

export default App