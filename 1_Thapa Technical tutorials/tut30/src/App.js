import { useState } from 'react'

function App() {
  const [val, setVal] = useState(0)

  const inc = () => {
    setVal((prev) => {
      return prev + 1;
    });
  }

  const dec = () => {
    setVal((prev) => {
      if(prev === 0) {
        alert('sorry, zero limit reached')
        return prev;
      }
      return prev - 1;
    });
  }

  return (
    <>

      <h1>
        Number of 😊 {val}
      </h1>
      <button onClick={inc}>👍</button>
      <button onClick={dec}>👎</button>
    </>
  );
}

export default App;
