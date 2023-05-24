import React, { useContext, useState, useEffect } from 'react'
import NoteContext from '../contexts/notes/noteContext'
import { NoteItem } from './extract'

function Notes(props) {
  const [title, setTitle] = useState('Your Notes 📒')
  const obj = useContext(NoteContext)
  let { notes } = obj

  useEffect(() => {
    if (notes.length === 0) setTitle('Empty 🚮')
    else setTitle('Your Notes 📒')
  }, [notes])

  return (
    <>
      <div className="row">
        <h2>{title}</h2>
        {notes.length !== 0 && notes.map((note, idx) => {
          return (
            <NoteItem
              key={note._id}
              note={note}
            />
          )
        })}
      </div>
    </>
  )
}

export default Notes