import React from 'react'

import './App.css'
import Login from './Login'
import { Route,Routes,BrowserRouter } from 'react-router-dom'
import DashBoard from './DashBoard'
function App() {

  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<DashBoard/>}> </Route>
    <Route path='/Login' element={<Login/>}> </Route>

  </Routes>
  </BrowserRouter>
  )
}

export default App
