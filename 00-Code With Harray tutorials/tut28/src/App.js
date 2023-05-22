
import { Navbar, Footer, Home, About, Error, News } from './components/importComponents'

import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom'
import navbarData from './components/navbarData'
import LoadingBar from 'react-top-loading-bar'

import './App.css'

export class App extends Component {
  constructor() {
    super()
    this.state = {
      progress: 0
    }
  }

  setProgress = (progress) => {
    this.setState({
      progress,
    })
  }

  render() {
    return (
      <>
        <Navbar />
        <LoadingBar
          color='#0dcaf0'
          progress={this.state.progress}
          height={3}
        // onLoaderFinished={() => setProgress(0)}
        />


        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          {navbarData.map((item, idx) => {
            return (
              <Route exact path={`/${item}`} key={idx} element={
                <News
                  setProgress={this.setProgress}
                  key={item}
                  country={'in'}
                  pageSize={9}
                  apiKey={process.env.REACT_APP_API_KEY}
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
