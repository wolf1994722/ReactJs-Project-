import React, { useContext, useState } from 'react'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import About from './components/About'
import Alert from './components/Alert'
import Error from './components/Error'
import { Route, Routes } from 'react-router-dom'

import DarkModeContext from './context/DarkModeContext'

const light = {
  backgroundColor: '#fff',
  color: '#262626',
  minHeight: '100vh'
}

const dark = {
  backgroundColor: '#262626',
  color: '#fff',
  minHeight: '100vh'
}

function App() {
  const [theme] = useContext(DarkModeContext)

  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  return (
    <div style={theme === 'light' ? light : dark}>
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
        showAlert={showAlert}
      />

      <div className="container mt-3">
        <Alert alert={alert} />
      </div>

      <Routes>
        <Route path='/' element={
          <TextForm
            heading="Anaylze text 🔥"
            labeling="Enter Text 🐹"
            showAlert={showAlert}
          />
        } />
        <Route path='/about' element={<About />} />
        <Route path='/*' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
