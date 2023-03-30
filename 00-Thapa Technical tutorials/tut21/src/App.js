import {useState} from 'react'
import './static/app.css';

function App() {
  const [count, setCount] = useState(new Date().toLocaleTimeString())

  const Increment = ()=>{
    setCount(new Date().toLocaleTimeString())
  }

  return (
    <>
      <div className="center">
        <div className="content">
          <p>
            <span> {count} </span>
          </p>
          <button onClick={Increment}>
            Get TIme
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
