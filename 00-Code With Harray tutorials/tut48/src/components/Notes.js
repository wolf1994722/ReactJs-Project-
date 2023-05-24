import React, { useContext } from 'react'
import NoteContext from '../contexts/notes/noteContext'
import { NoteItem } from './extract'

function Notes(props) {
  const obj = useContext(NoteContext)
  let { notes, setNotes } = obj

  return (
    <>
      <div className="row">
        <h2>Your Notes 📒</h2>
        {notes.map((note, idx) => {
          return (
            <NoteItem
              key={idx}
              note={note}
            />
          ) 
        })}
      </div>
    </>
  )
}

export default Notes