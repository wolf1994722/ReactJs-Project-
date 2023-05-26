import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const Login = () => {
  let navigate  = useNavigate()
  const [userData, setUserData] = useState({
    email: '',
    pwd: ''
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

    let url = `http://localhost:5000/api/auth/loginUser`
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userData),
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
      <form onSubmit={sumbitNote}>
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
        <button type="submit" className="btn btn-primary text-bg-info text-white border-0">
          Login
        </button>
      </form>

    </>
  )
}

export default Login