import React from 'react'

function IncorrectMemowithImpureComponentChild({name}) {
    let data = new Date()
    console.log('Incorrect memo children');
  return (
    <div>
        👋 hello, {name} ⌚ {data.getHours()}hr : {data.getMinutes()}mn : {data.getSeconds()}sec
    </div>
  )
}

export default React.memo(IncorrectMemowithImpureComponentChild)