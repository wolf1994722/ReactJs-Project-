import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import Error from './components/Error'

import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css'

export class App extends Component {
  render() {
    return (
      <>
        <Navbar/>

        <br />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/*' element={<Error/>}/>
        </Routes>

        <Footer/>
      </>
    )
  }
}

export default App
