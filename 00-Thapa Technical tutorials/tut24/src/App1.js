import {useState} from 'react'
import './static/app.css'
//! value attribute diff in input tag

function App1() {
  const [name, setName] = useState('')
  const [fname, setFname] = useState('')
  
  const inputHandler = (params) => {
    setName(params.target.value)
  }
  const collect = () => {
    setFname(name)
  }
  return (
    <>
      <div className="container">
        <div className="wrapper">
          <h2>
            Get GYM Membership 🔥 {fname === '' ? '' : `, ${fname}`}
          </h2>
            <label htmlFor="name">
              <p>Enter Name</p>
              <input 
                type="text" 
                name="name" 
                id="name" 
                onChange={inputHandler}
                value={name}
                />
            </label>
            <button type="submit" className="button-62" onClick={collect}>
              Submit
            </button>
        </div>
      </div>

    </>
  );
}

export default App1;
