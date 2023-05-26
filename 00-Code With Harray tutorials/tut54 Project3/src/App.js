import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navbar, Alert, Footer } from './components/extract'
import { Home, About, Login, SignUp } from './pages/extract'

//* Context
import AlertContext from './contexts/alert/alertContext'

//* CSS
import './assets/styles/App.css'

function App() {
  let { alert } = useContext(AlertContext)

  return (
    <>
      <Navbar />
      <Alert alert={alert} />
      <div className="container">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>

      <Footer/>
    </>
  )
}

export default App