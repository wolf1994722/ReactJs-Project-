import {useState} from 'react'
import './static/app.css'

function App() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [obj, setObj] = useState({'name' : name ,'phone' : phone})

  const nameInput = (params) => setName(params.target.value)
  const phoneInput = (params) => setPhone(params.target.value)

  const collect = (e) => {
    e.preventDefault();

    console.log(e)
    setObj({'name' : name ,'phone' : phone})
  }

  return (
    <>
      <div className="container">
        <div className="wrapper">
          <h2>
            Get GYM Membership 🔥
          </h2>
          <p>{obj.name + " " + obj.phone}</p>
          <form id="contact" onSubmit={collect}>
            <label htmlFor="name">
              <p>Enter Name</p>
              <input type="text" name="name" id="name" onChange={nameInput}/>
            </label>
            <label htmlFor="phone">
              <p>Enter Phone ☎️</p>
              <input type="phone" name="phone" id="phone" onChange={phoneInput}/>
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
