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
    let {name,value} = params.target
    setData((prev) => {
      return {
        ...prev,
        [name] : value,
      }
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

          <p>
            {data.name}
            {data.phone}
            {data.email}
            {data.address}
            {data.concern}
          </p>

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
