import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import { Home, About, Contact, Navbar, Service, Error, Footer } from './Components/Export'
import { Routes, Route } from 'react-router-dom'

import './style/app.css'

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/service' element={<Service/>} />
        <Route path='/*' element={<Error/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
