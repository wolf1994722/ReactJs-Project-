import { createContext } from 'react'
import ChildA from './ChildA'

const fname = createContext()
const lname = createContext()

function App() {
  return (
    <>
      <fname.Provider value={'vishal'}>
        <lname.Provider value={'kumar'}>
          <ChildA />
        </lname.Provider>
      </fname.Provider>
    </>
  );
}

export default App;
export { fname, lname }
