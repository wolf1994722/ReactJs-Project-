import React, { useContext } from 'react'
import NoteContext from '../contexts/notes/noteContext'

function Home() {
  const obj = useContext(NoteContext)
  let {notes, setNotes} = obj

  return (
    <>
      <div className="container my-3">
        <h2>Add a Notes 📝</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button
            type="submit"
            className="btn btn-primary text-bg-info text-white border-0">
            Submit
          </button>
        </form>
      </div>

      <div className="container">
        <h2>Your Notes 📒</h2>
        {notes.map((notes, idx) => {
          return (
            <li key={idx}>{notes.title}</li>
          )
        })}
      </div>
    </>
  )
}

export default Home