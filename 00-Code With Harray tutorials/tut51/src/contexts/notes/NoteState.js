import React, { useState, useEffect } from 'react'
import NoteContext from './noteContext'

const NoteState = (props) => {
    const host = `http://localhost:5000`
    const [notes, setNotes] = useState([])

    useEffect(() => {
        fetchData()
        // eslint-disable-next-line
    }, [])

    const fetchData = async () => {
        try {
            let url = `${host}/api/notes/fetchAllNotes`
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ2Y2FkNTk5M2MwNmNlZjUyMzA1NjRkIn0sImlhdCI6MTY4NDg1NDcxMH0.IWF6kTCyKq3Sp3tnlx968O1U2-8awTrbotOlTJEyIjc"
                },
            });
            let data = await response.json()
            setNotes(data)
        } catch (error) { console.log('error 🐹 :' + error) }
    }

    const addNote = async (newNote) => {
        try {
            //* Todo : Api call
            let url = `${host}/api/notes/addNote`
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ2Y2FkNTk5M2MwNmNlZjUyMzA1NjRkIn0sImlhdCI6MTY4NDg1NDcxMH0.IWF6kTCyKq3Sp3tnlx968O1U2-8awTrbotOlTJEyIjc"
                },
                body: JSON.stringify(newNote),
            });
            let note = await response.json();

            setNotes((prev) => {
                return [
                    ...prev,
                    note
                ]
            })
        } catch (error) { console.log('error 🐹 : ' + error) }
    }

    const editNote = async ({ _id, title, description, tag }) => {
        //* Todo : Api call
        let url = `${host}/api/notes/updateNote/${_id}`
        let data = { title, description, tag }
        const response = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ2Y2FkNTk5M2MwNmNlZjUyMzA1NjRkIn0sImlhdCI6MTY4NDg1NDcxMH0.IWF6kTCyKq3Sp3tnlx968O1U2-8awTrbotOlTJEyIjc"
            },
            body: JSON.stringify(data),
        });
        // eslint-disable-next-line no-unused-vars
        let json = await response.json();

        fetchData()
        setNotes((prev) => {
            if (prev._id === _id) {
                prev.title = title
                prev.description = description
                prev.tag = tag
            }
            return prev
        })
    }

    const deleteNote = async (id) => {
        //* Todo : Api call
        let url = `${host}/api/notes/deleteNote/${id}`
        await fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ2Y2FkNTk5M2MwNmNlZjUyMzA1NjRkIn0sImlhdCI6MTY4NDg1NDcxMH0.IWF6kTCyKq3Sp3tnlx968O1U2-8awTrbotOlTJEyIjc"
            },
        });

        setNotes((prev) => {
            return prev.filter((item) => {
                return item._id !== id
            })
        })
    }

    return (
        <NoteContext.Provider
            value={{ notes, addNote, editNote, deleteNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState