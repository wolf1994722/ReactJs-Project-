import {useState} from 'react'
import './static/app.css'

function App() {
  const [time, setTime] = useState(new Date().toLocaleTimeString())

  setInterval(() => {
    setTime(new Date().toLocaleTimeString())
  }, 1000);

  return (
    <>
      <div className="center">
        <div className="content">
          <p>
            <span> {time} </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
