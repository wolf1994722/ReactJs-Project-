import React, { useState, useEffect } from 'react'
import NoteContext from './noteContext'

const NoteState = (props) => {
    const host = `http://localhost:5000`
    const [notes, setNotes] = useState([])

    useEffect(() => {
        fetchData()
        // eslint-disable-next-line
    }, [])

    const checkAuthToken = () => {
        return localStorage.getItem('token') !== null && localStorage.getItem('token').length !== 0
    }

    const fetchData = async () => {
        if (!checkAuthToken()) {
            return;
        }
        try {
            let url = `${host}/api/notes/fetchAllNotes`
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem('token')
                },
            });
            let data = await response.json()
            if (!data) setNotes([])
            else setNotes(data)
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
                    "auth-token": localStorage.getItem('token')
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
                "auth-token": localStorage.getItem('token')
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
                "auth-token": localStorage.getItem('token')
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
            value={{ notes, addNote, editNote, deleteNote, fetchData, checkAuthToken }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState