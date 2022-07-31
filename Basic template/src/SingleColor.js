import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'


function SingleColor({ rgb, weight, index, hexColor }) {
  const [alert, setAlert] = useState(false)
  const bcg = rgb.join(',')
  const hex = rgbToHex(...rgb) // alternative method

  const handleClick = () => {
    navigator.clipboard.writeText(`#${hexColor}`)
    setAlert(true)
    // setTimeout(() => {
    //   setAlert(false)
    // }, 1500);
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false)
    }, 1500);
    return () => {
      clearTimeout(timeout)
    }
  }, [alert])

  return (
    <article onClick={handleClick} className={`color ${index > 5 && 'color-light'}`} style={{ backgroundColor: `rgb(${bcg})` }}>
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hexColor}</p>
      {alert && <p className={`alert`}>Copied to Clipboard</p>}
    </article>
  )
}

export default SingleColor