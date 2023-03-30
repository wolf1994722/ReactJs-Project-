import './style/app.css'
import { Route, Routes } from 'react-router-dom'

import Home from './Component/Home'
import About from './Component/About'
import Contact from './Component/Contact'
import Error from './Error'
import Navbar from './Component/Navbar'
import User from './Component/User'
import Search from './Component/Search'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home data='🐹' />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/contact/:fname' element={<User />} />
        <Route path='/search' element={<Search />} />
        <Route path='/*' element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
