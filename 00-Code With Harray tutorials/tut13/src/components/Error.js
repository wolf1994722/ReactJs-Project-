import React, { useEffect } from 'react'

const Error = () => {
  useEffect(() => {
    document.title = 'Error 🏡'
    return () => { }
  }, [])
  
  return (
    <div>Error</div>
  )
}

export default Error