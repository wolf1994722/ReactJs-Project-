import React from 'react'
import { Notes, AddNote } from '../components/extract'

function Home() {
  return (
    <>
      <AddNote/>
      <Notes />
    </>
  )
}

export default Home