import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navbar, Alert, Footer } from './components/extract'
import { Home, About} from './pages/extract'

//* CSS
import './assets/styles/App.css'

function App() {
  
  return (
    <>
      <Navbar />
      <Alert alert={{msg: 'something new', type: 'info'}} />
      <div className="container">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>

      <Footer/>
    </>
  )
}

export default App