import { Navbar, Footer, Home, About, Error} from './components/importComponents'

import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css'

export class App extends Component {
  render() {
    return (
      <>
        <Navbar/>

        <Routes> 
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/*' element={<Error/>}/>
        </Routes>

        <Footer/>
      </>
    )
  }
}

export default App
