import React from 'react'
import { NavLink } from 'react-router-dom'

function Error() {
  return (
    <div>
      <p>Error 404</p>
      <p>Try Again Something after ⏰</p>
      <NavLink to={'/'}>Home</NavLink>
    </div>
  )
}

export default Error    