import React from 'react'
import {useParams, useLocation} from 'react-router-dom'

function User() {
  const data = useParams()
  const res = useLocation()
  console.log(res)
  console.log(data)
  return (
    <>
      <p>
      Welcome {data.fname} {data.lname} Sir
      </p>
      <p>
        Your Current Location 🌎 is {res.pathname}
      </p>
      <p>
      {res.pathname === '/contact/vishal/kumar' && 
          <button onClick={()=> alert('Welcome Admin')}>Suprise 🎁</button>}
      </p>
    </>
  )
}

export default User