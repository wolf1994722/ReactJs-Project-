import React, { useContext } from 'react'
import { fname, lname } from './App'

function ChildC() {
  const firstName = useContext(fname)
  const lastName = useContext(lname)

  return (
    <>
      <p>
        welcome to children C 🙀🐶🐹🐰
      </p>
      <p>
        your name is {firstName} {lastName}
      </p>
    </>
  )
}

export default ChildC