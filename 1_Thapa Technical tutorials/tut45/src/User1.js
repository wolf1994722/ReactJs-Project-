import React from 'react'
import {useParams} from 'react-router-dom'

function User() {
  const data = useParams()
  console.log(data)
  return (
    <>
      Welcome {data.fname} {data.lname} Sir
    </>
  )
}

export default User