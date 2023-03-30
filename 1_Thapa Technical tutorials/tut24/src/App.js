import {useState} from 'react'
import './static/app.css'

function App() {
  const [name, setName] = useState('')
  const inputEvent = (params)=>{
    setName(params.target.value)
    
    console.log(params.target.value)
    console.log('click')
  }  
  return (
    <>
      <div className="container">
        <div className="wrapper">
          <h2>
            Get GYM Membership 🔥 {name === '' ? '' : `, ${name}`}
          </h2>
          <form id="contact">
            <label htmlFor="name">
              <p>Enter Name</p>
              <input type="text" name="name" id="name" onChange={inputEvent} />
            </label>
            <button type="submit" className="button-62">
              Submit
            </button>
          </form>
        </div>
      </div>

    </>
  );
}

export default App;
