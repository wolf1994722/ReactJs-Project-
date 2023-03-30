import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Error() {
  const dir = useNavigate();
  useEffect(() => {
    dir('/')
  }, [dir])

  return (
    <h2>404 Error</h2>
  )
}

export default Error