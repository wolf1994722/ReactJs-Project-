
import { Navbar, Footer, Home, About, Error, News } from './components/importComponents'

import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import navbarData from './components/navbarData'
import LoadingBar from 'react-top-loading-bar'

import './App.css'

function App() {
  const [progress, setProgress] = useState(0)

  return (
    <>
      <Navbar />
      <LoadingBar
        color='#0dcaf0'
        progress={progress}
        height={3}
      // onLoaderFinished={() => setProgress(0)}
      />


      <Routes>
        <Route exact path='/' element={<Home setProgress={setProgress} />} />
        <Route exact path='/about' element={<About />} />
        {navbarData.map((item, idx) => {
          return (
            <Route exact path={`/${item}`} key={idx} element={
              <News
                key={item}
                country={'in'}
                pageSize={9}
                apiKey={process.env.REACT_APP_API_KEY}
                category={item}
                headline={item}
                setProgress={setProgress}
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

export default App