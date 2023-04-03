import React from 'react'

function User(props) {
  return (
    <>
        <p>User Data 🐹</p>
        <p>{props.fname} {props.lname}</p>
    </>
  )
}

export default User