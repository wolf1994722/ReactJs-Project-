import {useState} from 'react'
import './static/app.css'

function App() {
  const [data, setData] = useState({
    name: '',
    phone: '',
    email: '',
  })

  const inputEvent = (params) => {
    let type = params.target.name
    setData((prev) => {
      if(type === 'phone') {
        return {
          name : prev.name,
          phone : params.target.value,
          email : prev.email
        }
      } else if(type === 'email') {
        return {
          name : prev.name,
          phone : prev.phone,
          email : params.target.value,
        }
      } else if(type === 'name') {
        return {
          name : params.target.value,
          phone : prev.phone,
          email : prev.email
        }
      }
    })
  }

  const collect = (event) => {
    event.preventDefault()
    alert('form on submit')
  }

  return (
    <>
      <div className="container">
        <div className="wrapper">
          <h2>
            Get GYM Membership 🔥
          </h2>
          <form id="contact" onSubmit={collect} >
            <label htmlFor="name">
              <p>Enter Name</p>
              <input 
                type="text" 
                name="name" 
                id="name" 
                value={data.name}
                onChange={inputEvent}/>
            </label>
            <label htmlFor="phone">
              <p>Enter Phone ☎️</p>
              <input 
              type="phone" 
              name="phone" 
              id="phone" 
              value={data.phone}
              onChange={inputEvent}/>
            </label>
            <label htmlFor="email">
              <p>Enter Email 📫</p>
              <input 
              type="email" 
              name="email" 
              id="email" 
              value={data.email}
              onChange={inputEvent}/>
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
