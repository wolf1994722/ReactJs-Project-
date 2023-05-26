import React, { useContext, useState, useEffect, useRef } from 'react'
import NoteContext from '../contexts/notes/noteContext'
import { NoteItem } from './extract'

function Notes(props) {
  const [note, setNote] = useState({
    title: '',
    description: '',
    tag: 'General',
  })
  const [title, setTitle] = useState('Your Notes 📒')
  const modalBox = useRef(null)
  const obj = useContext(NoteContext)
  let { notes, editNote } = obj

  useEffect(() => {
    if (notes.length === 0) setTitle('Empty 🚮')
    else setTitle('Your Notes 📒')
  }, [notes])

  const handleChange = (params) => {
    setNote((prev) => {
      return {
        ...prev,
        [params.target.name]: params.target.value,
      }
    })
  }

  const sumbitNote = (e) => {
    e.preventDefault()

    if (note.title === '' || note.description === '') {
      alert('Enter Note details')
      return;
    }

    editNote(note)
    modalBox.current.click()
  }

  const updateNote = async (note) => {
    modalBox.current.click()
    setNote(note)
  }

  return (
    <>
      {/* Button trigger modal */}
      <button
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        ref={modalBox}
      >
        Launch demo modal
      </button>
      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Update Note
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    name='title'
                    onChange={handleChange}
                    value={note.title}
                    aria-describedby="emailHelp"
                    minLength={5}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="description"
                    name="description"
                    onChange={handleChange}
                    value={note.description}
                    minLength={5}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="tag" className="form-label">
                    tag
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="tag"
                    name="tag"
                    onChange={handleChange}
                    value={note.tag}
                    minLength={3}
                    required
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close 
              </button>
              <button
                type="button"
                onClick={sumbitNote}
                disabled={note.title.length < 5 || note.description.length < 5}
                className="btn btn-primary text-bg-info text-white border-0 custom-btn">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row my-3">
        <h2>{title}</h2>
        {notes.length !== 0 && notes.map((note, idx) => {
          return (
            <NoteItem
              key={note._id}
              note={note}
              updateNote={updateNote}
            />
          )
        })}
      </div>
    </>
  )
}

export default Notes