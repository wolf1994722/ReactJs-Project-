import React, { useState } from 'react'
import Note from './Note'
import Button from '@mui/material/Button';

export default function CreateNode() {
    const [expand, setExpand] = useState(true)
    const [note, setNote] = useState({
        title: '',
        content: '',
    })
    const [data, setData] = useState([])

    const inputEnter = (params) => {
        setNote((prev) => {
            return { ...prev, [params.target.name]: params.target.value }
        })
    }

    const deleteItem = (id) => {
        if (data.length === 0) {
            alert('it is empty 🚮')
            return;
        }

        setData((prev) => {
            return prev.filter((item, index) => {
                return id !== index;
            })
        })
    }

    const collect = (e) => {
        e.preventDefault();
        if (note.content !== '') {
            setData((prev) => {
                return [...prev, note]
            })
            setNote({
                title: '',
                content: ''
            })
        }
    }
    return (
        <>
            <div className="container">
                <div className="center" onDoubleClick={()=> setExpand(!expand)}>
                    <form onSubmit={collect}>
                        {
                            expand && <label htmlFor="title">
                                <p>Title</p>
                                <input
                                    type="text"
                                    name="title"
                                    id="title"
                                    onChange={inputEnter}
                                    value={note.title}
                                />
                            </label>
                        }

                        <label htmlFor="content">
                            <textarea
                                name="content"
                                id="content"
                                placeholder='Write a note here...'
                                onChange={inputEnter}
                                value={note.content}>

                            </textarea>
                        </label>
                        <Button type="submit" variant="contained" color="success">
                            Add
                        </Button>
                    </form>
                </div>
                <div className="content">
                    {data.map((item, id) => {
                        return (
                            <Note
                                key={id}
                                id={id}
                                Title={item.title}
                                Content={item.content}
                                deleteItem={deleteItem}
                            />
                        )
                    })}
                </div>
            </div>
        </>
    )
}
