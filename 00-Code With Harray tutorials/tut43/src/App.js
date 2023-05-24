import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from './components/extract'
import { Home, About } from './pages/extract'

function App() {
  return (
    <>
      <Navbar />
      This is iNotebook
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </>
  )
}

export default App