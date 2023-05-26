import React, { useContext } from 'react'
import { editSvg, trashSvg } from '../assets/images/exports'
import NoteContext from '../contexts/notes/noteContext'

const NoteItem = (props) => {
  const { note, updateNote } = props
  const obj = useContext(NoteContext)
  let { deleteNote } = obj

  const deleteNoteItem = () => {
    deleteNote(note._id)
  } 

  const editNoteItem = () => {
    updateNote(note)
  }

  return (
    <>
      <div className="col-md-3">
        <div className="card my-3">
          <div className="card-body">
            <h5 className="card-title">{note.title}</h5>
            <p className="card-text">
              {note.description}
            </p>
            <img className='svg-icon' onClick={deleteNoteItem} src={trashSvg} alt="" />
            <img className='svg-icon' onClick={editNoteItem} src={editSvg} alt="" />
            {/* <a
              href="/"
              className="btn btn-primary text-bg-info text-white border-0 custom-btn">
              ReadMore
            </a> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default NoteItem