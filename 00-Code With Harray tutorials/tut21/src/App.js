import { Navbar, Footer, Home, About, Error, News } from './components/importComponents'

import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom'
import navbarData from './components/navbarData'

import './App.css'

export class App extends Component {
  render() {
    return (
      <>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          {navbarData.map((item, idx) => {
            return (
              <Route path={`/${item}`} key={idx} element={
                <News
                  country={'in'}
                  pageSize={9}
                  apiKey={'05965c30cda940f4a391569e716b4bed'}
                  category={item} 
                  headline={item}
                />
              } />
            )
          })}
          <Route path='/*' element={<Error />} />
        </Routes>

        <Footer />
      </>
    )
  }
}

export default App
