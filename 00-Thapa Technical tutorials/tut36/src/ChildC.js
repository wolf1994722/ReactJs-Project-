import React from 'react'
import { fname } from './App'

function ChildC() {

  return (
    <>
      welcome to children C 🔥
      <fname.Consumer> 
        {(item) => <li>{item}</li>}
      </fname.Consumer>
    </>
  )
}

export default ChildC