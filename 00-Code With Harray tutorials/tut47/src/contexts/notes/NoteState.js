import React, { useState } from 'react'
import NoteContext from './noteContext'

const NoteState = (props) => {
    const notesIntial = [
        {
            "_id": "646cdb8d6de30d1441a7239b",
            "user": "646cad5993c06cef5230564d",
            "title": "eat a apple",
            "description": "this is very healthy",
            "tag": "personal",
            "date": "2023-05-23T15:28:13.737Z",
            "__v": 0
        },
        {
            "_id": "646cdc5201d43e2eacdceba7",
            "user": "646cad5993c06cef5230564d",
            "title": "🐹 yoo boiiii",
            "description": "full power",
            "tag": "sports",
            "date": "2023-05-23T15:31:30.402Z",
            "__v": 0
        },
        {
            "_id": "646cdccead930b26f24bd84d",
            "user": "646cad5993c06cef5230564d",
            "title": "water glass",
            "description": "drink water 💦",
            "tag": "food",
            "date": "2023-05-23T15:33:34.759Z",
            "__v": 0
        },
        {
            "_id": "646cdc5201d43e2eacdceba7",
            "user": "646cad5993c06cef5230564d",
            "title": "🐹 yoo boiiii",
            "description": "full power",
            "tag": "sports",
            "date": "2023-05-23T15:31:30.402Z",
            "__v": 0
        },
        {
            "_id": "646cdccead930b26f24bd84d",
            "user": "646cad5993c06cef5230564d",
            "title": "water glass",
            "description": "drink water 💦",
            "tag": "food",
            "date": "2023-05-23T15:33:34.759Z",
            "__v": 0
        },
        {
            "_id": "646cdc5201d43e2eacdceba7",
            "user": "646cad5993c06cef5230564d",
            "title": "🐹 yoo boiiii",
            "description": "full power",
            "tag": "sports",
            "date": "2023-05-23T15:31:30.402Z",
            "__v": 0
        },
        {
            "_id": "646cdccead930b26f24bd84d",
            "user": "646cad5993c06cef5230564d",
            "title": "water glass",
            "description": "drink water 💦",
            "tag": "food",
            "date": "2023-05-23T15:33:34.759Z",
            "__v": 0
        },
    ]

    const [notes, setNotes] = useState(notesIntial)

    return (
        <NoteContext.Provider value={{ notes, setNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState