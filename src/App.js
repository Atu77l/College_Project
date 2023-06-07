import React from 'react'
import Home from './component/Home'
import Main from './component/Main'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Page1 from './component/Page1'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/page' element={<Page1/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
