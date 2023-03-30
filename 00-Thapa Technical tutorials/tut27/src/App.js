import {useState} from 'react'
import './static/app.css'

function App() {
  const [data, setData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    concern: '',
  })

  const inputData = (params) => {
    let field = params.target.name
    setData((prev) => {
      const object = {
        name: prev.name,
        phone: prev.phone,
        email: prev.email,
        address: prev.address,
        concern: prev.concern,
      }
      
      if(field === 'name') object.name = params.target.value
      else if(field === 'phone') object.phone = params.target.value
      else if(field === 'email') object.email = params.target.value
      else if(field === 'address') object.address = params.target.value
      else if(field === 'concern') object.concern = params.target.value

      return object
    })
  }

  const collect = (event) => {
    event.preventDefault();
    alert('data recieved')
    console.log(data) 
  }
  
  return (
    <>
      <div className="container">
        <div className="wrapper">
          <h2>
            Get GYM Membership 🔥
          </h2>
          <form id="contact" onSubmit={collect}>
            <label htmlFor="name">
              <p>Enter Name</p>
              <input type="text" name="name" id="name" onChange={inputData}/>
            </label>
            <label htmlFor="phone">
              <p>Enter Phone ☎️</p>
              <input type="phone" name="phone" id="phone" onChange={inputData}/>
            </label>
            <label htmlFor="email">
              <p>Enter Email 📫</p>
              <input type="email" name="email" id="email" onChange={inputData}/>
            </label>
            <label htmlFor="address">
              <p>Enter Address 🏡</p>
              <textarea
                name="address"
                id="address"
                cols={30}
                rows={10}
                onChange={inputData}
                defaultValue={""}
              />
            </label>
            <label htmlFor="concern">
              <p>Enter your concern 🙋‍♀️</p>
              <textarea
                name="concern"
                id="concern"
                cols={30}
                rows={10}
                onChange={inputData}
                defaultValue={""}
              />
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
