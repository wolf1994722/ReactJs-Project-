import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function User() {
  const data = useParams()
  const his = useNavigate()

  console.log(his)

  return (
    <>
      <p>
        Welcome {data.fname} Sir
      </p>
      <button onClick={() => his('/')}>
        prev
      </button>
    </>
  )
}

export default User