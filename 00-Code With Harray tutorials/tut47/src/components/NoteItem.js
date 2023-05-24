import React from 'react'

const NoteItem = (props) => {
  const { note } = props
  return (
    <>
      <div className="col-md-3">
        <div className="card my-3">
          <div className="card-body">
            <h5 className="card-title">{note.title}</h5>
            <p className="card-text">
              {note.description}
            </p>
            <a
              href="/"
              className="btn btn-primary text-bg-info text-white border-0 custom-btn">
              ReadMore
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default NoteItem