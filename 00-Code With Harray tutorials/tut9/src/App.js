import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import About from './components/About'
import Error from './components/Error'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar title="TextUtils" links={[
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
      ]} />


      <Routes>
        <Route path='/' element={
          <TextForm
            heading="Anaylze text 🔥"
            labeling="Enter Text 🐹"
          />
        } />
        <Route path='/about' element={<About />} />
        <Route path='/*' element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
