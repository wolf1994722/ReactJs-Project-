import React, { useState, useContext } from 'react'
import { useNavigate } from "react-router-dom";

//* Context
import AlertContext from '../contexts/alert/alertContext'

const SignUp = () => {
  let { showAlert } = useContext(AlertContext)
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
      showAlert('Password are wrong', 'danger')
      setUserData({
        ...userData,
        pwd: '',
        cpwd: ''
      })
      return;
    }

    try {
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

      if (data.success === true) {
        //* save auth token and redirect
        localStorage.setItem('token', data.authToken)
        navigate('/')
      } else {
        showAlert('Invalid Credential', 'danger')
      }
    } catch (error) {
      showAlert('Invalid Credential', 'danger')
    }

  }

  return (
    <>
      <form onSubmit={sumbitNote}>
      <h2 className='my-4'>SignUp Form 🔥</h2>
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