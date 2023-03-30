import ChildA from './ChildA'
import { createContext } from 'react';

const fname = createContext()

function App() {
  return (
    <>
      <fname.Provider value={'vishal'}>
        <ChildA />
      </fname.Provider>
    </>
  );
}

export default App;
export { fname }