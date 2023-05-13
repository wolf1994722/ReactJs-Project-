import React, { useState } from 'react'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import About from './components/About'
import Error from './components/Error'
import { Route, Routes } from 'react-router-dom'

const lightTheme = {
  backgroundColor : '#fff',
  color : '#262626',
  minHeight : '100vh'
}

const darkTheme = {
  backgroundColor : '#262626',
  color : '#fff',
  minHeight : '100vh'
}


function App() {
  const [dark, setDark] = useState(false)

  const changeMode = () => {
    setDark(!dark)
  }

  return (
    <div style={dark ? lightTheme : darkTheme}>
      <Navbar
        title="TextUtils"
        links={[
          {
            title: 'about',
            url: '/about'
          },
          {
            title: 'contact',
            url: '/contact'
          },
          {
            title: 'service',
            url: '/service'
          }
        ]}
        dark={dark}
        changeMode={changeMode}
      />


      <Routes>
        <Route path='/' element={
          <TextForm
            heading="Anaylze text 🔥"
            labeling="Enter Text 🐹"
            dark={dark}
          />
        } />
        <Route path='/about' element={<About dark={dark} />} />
        <Route path='/*' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
