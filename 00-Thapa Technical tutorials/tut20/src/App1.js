
import {useState} from 'react'
import './static/app.css'

function App1() {
  const [count, setCount] = useState(0)

  function Increment(params) {
    console.log(params)
    setCount(count+1)
  }

  return (
    <>
      <div className="center">
        <div className="content">
          <p>
            <span> {count} </span>
            Number of 😊
          </p>
          <button onClick={Increment}>
            Click me
          </button>
        </div>
      </div>
    </>
  );
}

export default App1;

