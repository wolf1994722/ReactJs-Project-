import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Contact from './Contact';
import Error from './Error';

function Name() {
  return (
    <div>Name - vishal 🐹</div>
  )
}


function App() {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/contact/vishal' element={<Name/>}/>
        <Route path='/*' element={<Error/>} />
      </Routes>
    </main>
  );
}

export default App;
