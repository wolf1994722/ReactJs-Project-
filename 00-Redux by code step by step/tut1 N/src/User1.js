import React from 'react'

function User1(props) {
    console.log(props)
  return (
    <>
        {props.data.age}
        {props.data.passion}
    </>
  )
}

export default User1