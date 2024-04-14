import './App.css'
import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Best from './pages/Best/Best'
import Special from './pages/Special/Special'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import Cars from './pages/Cars/Cars'
import Contact from './pages/Contact/Contact'
import Conditions from './pages/Conditions/Conditions'


function App() {
  return (
    <>
    <div className="container">
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/best' element={<Best/>}/>
      <Route path='/cars' element={<Cars/>}/>
      <Route path='/conditions' element={<Conditions/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/special' element={<Special/>}/>
      <Route path='/*' element={<ErrorPage/>}/>
    </Routes>
    </div>
    </>
  )
}

export default App