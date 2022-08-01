import React, { useEffect } from 'react'

function Alert({ type, msg, removeAlert, list }) {

  useEffect(() => {
    const alertimer = setTimeout(() => {
      removeAlert()
    }, 1500);

    return () => {
      clearInterval(alertimer)
    }
  }, [list])

  return (
    <p className={`alert alert-${type}`}>{msg}</p>
  )
}

export default Alert