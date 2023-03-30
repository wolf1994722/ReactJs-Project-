import React, {useEffect} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

function Error() {
  const dir = useNavigate()
  useEffect(() => {
    dir('/')
  }, [dir]) 
  
  return (
    <div>
      <p>Error 404</p>
      <p>Try Again Something after ⏰</p>
      <NavLink to={'/'}>Home</NavLink>
    </div>
  )
}

export default Error    