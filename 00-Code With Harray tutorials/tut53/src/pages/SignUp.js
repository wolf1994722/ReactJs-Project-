import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  let navigate = useNavigate()
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    pwd: '',
    cpwd: '',
  })

  const handleChange = async (params) => {
    setUserData((prev) => {
      return {
        ...prev,
        [params.target.name]: params.target.value
      }
    })
  }

  const sumbitNote = async (e) => {
    e.preventDefault();

    if (userData.pwd !== userData.cpwd) {
      alert('Password are wrong')
      setUserData({
        ...userData,
        pwd: '',
        cpwd: ''
      })
      return;
    }

    let url = `http://localhost:5000/api/auth/createUser`
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: userData.name,
        email: userData.email,
        pwd: userData.pwd
      }),
    });
    let data = await response.json()

    console.log(data)
    if (data.success === true) {
      //* save auth token and redirect
      localStorage.setItem('token', data.authToken)
      navigate('/')
    } else {
      alert('Invalid credentails')
    }

  }

  return (
    <>
      <form className='my-5' onSubmit={sumbitNote}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name='name'
            onChange={handleChange}
            value={userData.name}
            aria-describedby="nameHelp"
            minLength={3}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name='email'
            onChange={handleChange}
            value={userData.email}
            aria-describedby="emailHelp"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="pwd" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="pwd"
            name='pwd'
            onChange={handleChange}
            value={userData.pwd}
            minLength={3}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cpwd" className="form-label">
            Conform Password
          </label>
          <input
            type="password"
            className="form-control"
            id="cpwd"
            name='cpwd'
            onChange={handleChange}
            value={userData.cpwd}
            minLength={3}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary text-bg-info text-white border-0">
          SignUp
        </button>
      </form>

    </>
  )
}

export default SignUp