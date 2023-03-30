import { Route, Routes } from 'react-router-dom'

import Home from './Component/Home'
import About from './Component/About'
import Contact from './Component/Contact'
import Error from './Component/Error'
import Navbar from './Component/Navbar'
import User1 from './User1'

function App1() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home data='🐹' />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/contact/:fname/:lname' element={<User1 />} />
        <Route path='/*' element={<Error />} />
      </Routes>
    </>
  );
}

export default App1;
