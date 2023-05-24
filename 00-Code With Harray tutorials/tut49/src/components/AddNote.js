import React, { useState, useContext } from 'react'
import NoteContext from '../contexts/notes/noteContext'

const AddNote = () => {
    const [note, setNote] = useState({
        title: '',
        description: '',
        tag: 'General',
    })
    const obj = useContext(NoteContext)
    let { addNote } = obj

    const handleChange = (params) => {
        setNote((prev) => {
            return {
                ...prev,
                [params.target.name] : params.target.value,
            }
        })
    }

    const sumbitNote = (e) => {
        e.preventDefault()
        addNote(note) 
    }

    return (
        <>
            <div className="container my-3">
                <h2>Add a Notes 📝</h2>
                <form onSubmit={sumbitNote}>
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
                            aria-describedby="emailHelp"
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
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary text-bg-info text-white border-0">
                        Submit
                    </button>
                </form>
            </div>
        </>
    )
}

export default AddNote