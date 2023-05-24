import React, { useContext, useEffect } from 'react'
import NoteContext from '../contexts/notes/noteContext'

const About = () => {
  let obj = useContext(NoteContext)

  useEffect(() => {
    obj.updateState()
  }, [obj])
  
  return (
    <>
      {obj.state.name}
      {obj.state.class}
    </>
  )
}

export default About