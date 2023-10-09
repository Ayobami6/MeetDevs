import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/Landing-Page/LandingPage'
import Auth from './pages/Auth/Auth'
import Talent from './pages/Talent/Talent'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
       <Route path='/' element={<LandingPage />}/>
        <Route path='/auth' element={ <Auth /> }/>
        <Route path='/talent' element={<Talent/>}/>
    </Routes>
    </BrowserRouter>
   
  )
}

export default App